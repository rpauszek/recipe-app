import { useState } from "react";
import { EditorContext } from "./EditorContext";
import { Recipe } from "utils/types";
import { useApp } from "app/AppContext";
import { logger } from "utils/logger";

interface EditorProviderProps {
  initialRecipe: Recipe;
  children: React.ReactNode;
}

export function EditorProvider({ initialRecipe, children }: EditorProviderProps) {
  const [draft, setDraft] = useState<Recipe>(initialRecipe);
  const [isDirty, setIsDirty] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const { setMode } = useApp();

  function setField<K extends keyof Recipe>(key: K, value: Recipe[K]) {
    setDraft((prev) => ({
      ...prev,
      [key]: value,
    }));
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
    save,
    cancel,
  };

  return <EditorContext.Provider value={value}>{children}</EditorContext.Provider>;
}
