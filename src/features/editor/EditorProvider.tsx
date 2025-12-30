import { useState } from "react";
import { EditorContext } from "./EditorContext";
import { Ingredient, RecipeDraft } from "utils/types";
import { useApp } from "app/AppContext";
import { logger } from "utils/logger";
import { createEmptyIngredient } from "./constructors";

interface EditorProviderProps {
  initialRecipe: RecipeDraft;
  children: React.ReactNode;
}

export function EditorProvider({ initialRecipe, children }: EditorProviderProps) {
  const [draft, setDraft] = useState<RecipeDraft>(initialRecipe);
  const [isDirty, setIsDirty] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const { setMode } = useApp();

  function setField<K extends keyof RecipeDraft>(key: K, value: RecipeDraft[K]) {
    setDraft((prev) => ({
      ...prev,
      [key]: value,
    }));
    setIsDirty(true);
  }

  function updateIngredient(group: string, index: number, field: keyof Ingredient, value: string) {
    setDraft((prev) => {
      const groupIngredients = prev.ingredients[group] ?? [];

      const updatedGroup = groupIngredients.map((ing, i) =>
        i === index ? { ...ing, [field]: value } : ing
      );

      return {
        ...prev,
        ingredients: {
          ...prev.ingredients,
          [group]: updatedGroup,
        },
      };
    });

    setIsDirty(true);
  }

  function addIngredient(group: string, index?: number) {
    setDraft((prev) => {
      const groupIngredients = prev.ingredients[group] ?? [];

      const blankIngredient = createEmptyIngredient();

      let updatedGroup: Ingredient[];
      if (index !== undefined) {
        const insertAt = index + 1;
        updatedGroup = [
          ...groupIngredients.slice(0, insertAt),
          blankIngredient,
          ...groupIngredients.slice(insertAt),
        ];
      } else {
        updatedGroup = [...groupIngredients, blankIngredient];
      }

      return {
        ...prev,
        ingredients: {
          ...prev.ingredients,
          [group]: updatedGroup,
        },
      };
    });

    setIsDirty(true);
  }

  function removeIngredient(group: string, index: number) {
    setDraft((prev) => {
      const groupIngredients = prev.ingredients[group] ?? [];

      const updatedGroup = groupIngredients.filter((_, i) => i !== index);

      return {
        ...prev,
        ingredients: {
          ...prev.ingredients,
          [group]: updatedGroup,
        },
      };
    });

    setIsDirty(true);
  }

  async function save() {
    if (!isDirty) {
      logger.info("no dirty, exiting");
      setMode("view");
      return;
    }

    setIsSaving(true);
    logger.info("Saving recipe!");
    logger.info(Object.entries(draft).join(", "));
    logger.info(
      draft.ingredients["main"].map((ing, i) => `${i}: ${JSON.stringify(ing)}`).join(", ")
    );

    setIsSaving(false);
    setIsDirty(false);
    setMode("view");
  }

  function cancel() {
    logger.info("Canceling recipe editor!");
    setMode("view");
  }

  const value = {
    draft,
    isDirty,
    isSaving,
    setField,
    updateIngredient,
    addIngredient,
    removeIngredient,
    save,
    cancel,
  };

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
}
