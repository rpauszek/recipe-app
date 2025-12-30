import { createContext, useContext } from "react";
import { RecipeDraft } from "utils/types";

export interface EditorState {
  draft: RecipeDraft;
  isDirty: boolean;
  isSaving: boolean;
  setField: <K extends keyof RecipeDraft>(key: K, value: RecipeDraft[K]) => void;
  save: () => Promise<void>;
  cancel: () => void;
}

export const EditorContext = createContext<EditorState | null>(null);

export function useEditor() {
  const context = useContext(EditorContext);
  if (!context) {
    throw new Error("useEditor must be used within an EditorProvider");
  }
  return context;
}
