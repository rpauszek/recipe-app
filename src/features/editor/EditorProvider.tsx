import { useState, useEffect } from "react";
import { EditorContext } from "./EditorContext";
import { Ingredient, RecipeDraft } from "utils/types";
import { useApp } from "app/AppContext";
import { logger } from "utils/logger";

interface EditorProviderProps {
  children: React.ReactNode;
}

function createEmptyIngredient(): Ingredient {
  return { item: "", quantity: "", unit: "" };
}

function createEmptyRecipe(): RecipeDraft {
  return {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    category: "",
    cuisine: "",
    ingredients: {
      main: [createEmptyIngredient()],
    },
    steps: {
      main: [""],
    },
  };
}

export function EditorProvider({ children }: EditorProviderProps) {
  const initialRecipe = createEmptyRecipe();

  const [draft, setDraft] = useState<RecipeDraft>(initialRecipe);
  const [isDirty, setIsDirty] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const { mode, editKind, selectedRecipe, finishEditing } = useApp();

  useEffect(() => {
    if (mode !== "edit") return;

    switch (editKind) {
      case "new":
        logger.info("Starting new editing session");
        loadDraft();
        break;

      case "existing":
        logger.info(`Starting editing session for ${selectedRecipe?.title ?? "null recipe"}`)
        loadDraft(selectedRecipe!)
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

  function updateIngredient(group: string, index: number, field: keyof Ingredient, value: string) {
    setDraft((prev) => {
      const groupIngredients = prev.ingredients[group] ?? [];

      const updatedGroup = groupIngredients.map((ing, i) =>
        i === index ? { ...ing, [field]: value } : ing,
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

  function loadDraft(recipe?: RecipeDraft) {
    logger.info("loading draft");
    const newDraft = recipe ?? createEmptyRecipe();
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
    logger.info(
      draft.ingredients["main"].map((ing, i) => `${i}: ${JSON.stringify(ing)}`).join(", "),
    );

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
    save,
    cancel,
  };

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
}
