import { useState } from "react";
import { EditorContext } from "./EditorContext";
import { RecipeDraft } from "utils/types";
import { useApp } from "app/AppContext";
import { logger } from "utils/logger";

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

  async function save() {
    if (!isDirty) {
      logger.info("no dirty, exiting");
      setMode("view");
      return;
    }

    setIsSaving(true);
    logger.info("Saving recipe!");
    logger.info(Object.entries(draft).join(", "));

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
