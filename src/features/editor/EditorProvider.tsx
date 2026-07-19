import { useState, useEffect } from "react";
import { EditorContext } from "./EditorContext";
import { Ingredient, IngredientList, RecipeDraft, StepsList } from "utils/types";
import { useApp } from "app/AppContext";
import { logger } from "utils/logger";
import * as methods from "./draft-methods";

interface EditorProviderProps {
  children: React.ReactNode;
}

export function EditorProvider({ children }: EditorProviderProps) {
  const initialRecipe = methods.createEmptyRecipe();

  const [draft, setDraft] = useState<RecipeDraft>(initialRecipe);
  const [isDirty, setIsDirty] = useState(false);
  const [, setIsSaving] = useState(false);

  const { mode, editKind, selectedRecipe, finishEditing } = useApp();

  useEffect(() => {
    if (mode !== "edit") return;

    switch (editKind) {
      case "new":
        logger.info("Starting new editing session");
        loadDraft();
        break;

      case "existing":
        logger.info(`Starting editing session for ${selectedRecipe?.title ?? "null recipe"}`);
        loadDraft(selectedRecipe!);
        break;
    }
  }, [mode]);

  function setField<K extends keyof RecipeDraft>(key: K, value: RecipeDraft[K]) {
    setDraft((prev) => ({
      ...prev,
      [key]: value,
    }));
    setIsDirty(true);
  }

  function updateIngredient(listId: string, index: number, field: keyof Ingredient, value: string) {
    setDraft((prev: RecipeDraft) => {
      const listToUpdate: IngredientList = methods.findIngredientList(prev.ingredients, listId);
      const updatedList: IngredientList = methods.updateIngredient(
        listToUpdate,
        index,
        field,
        value,
      );
      const updatedIngredients = methods.updateIngredients(prev.ingredients, updatedList);
      return { ...prev, ingredients: updatedIngredients };
    });

    setIsDirty(true);
  }

  function addIngredient(listId: string, index?: number) {
    setDraft((prev) => {
      const listToUpdate: IngredientList = methods.findIngredientList(prev.ingredients, listId);
      const updatedList = methods.addIngredient(listToUpdate, index);
      const updatedIngredients = methods.updateIngredients(prev.ingredients, updatedList);
      return { ...prev, ingredients: updatedIngredients };
    });

    setIsDirty(true);
  }

  function removeIngredient(listId: string, index: number) {
    setDraft((prev) => {
      const listToUpdate: IngredientList = methods.findIngredientList(prev.ingredients, listId);
      const updatedList = methods.removeIngredient(listToUpdate, index);
      const updatedIngredients = methods.updateIngredients(prev.ingredients, updatedList);
      return { ...prev, ingredients: updatedIngredients };
    });

    setIsDirty(true);
  }

  function updateStep(listId: string, index: number, value: string) {
    setDraft((prev) => {
      const listToUpdate: StepsList = methods.findStepsList(prev.steps, listId);
      const updatedList: StepsList = methods.updateStep(listToUpdate, index, value);
      const updatedSteps = methods.updateSteps(prev.steps, updatedList);
      return { ...prev, steps: updatedSteps };
    });

    setIsDirty(true);
  }

  function addStep(listId: string, index?: number) {
    setDraft((prev) => {
      const listToUpdate: StepsList = methods.findStepsList(prev.steps, listId);
      const updatedList = methods.addStep(listToUpdate, index);
      const updatedSteps = methods.updateSteps(prev.steps, updatedList);
      return { ...prev, steps: updatedSteps };
    });

    setIsDirty(true);
  }

  function removeStep(listId: string, index: number) {
    setDraft((prev) => {
      const listToUpdate: StepsList = methods.findStepsList(prev.steps, listId);
      const updatedList = methods.removeStep(listToUpdate, index);
      const updatedSteps = methods.updateSteps(prev.steps, updatedList);
      return { ...prev, steps: updatedSteps };
    });

    setIsDirty(true);
  }

  function loadDraft(recipe?: RecipeDraft) {
    logger.info("loading draft");
    const newDraft = recipe ?? methods.createEmptyRecipe();
    setDraft(newDraft);
    setIsDirty(false);
  }

  async function save() {
    if (!isDirty) {
      logger.info("no dirty, exiting");
      finishEditing();
      return;
    }

    setIsSaving(true);
    logger.info("Saving recipe!");
    logger.info(Object.entries(draft).join(", "));

    setIsSaving(false);
    setIsDirty(false);
    finishEditing();
  }

  function cancel() {
    logger.info("Canceling recipe editor!");
    finishEditing();
  }

  const value = {
    draft,
    setField,
    updateIngredient,
    addIngredient,
    removeIngredient,
    updateStep,
    addStep,
    removeStep,
    save,
    cancel,
  };

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
}
