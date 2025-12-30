import { createContext, useContext } from "react";
import { Recipe } from "utils/types";

export interface EditorState {
  draft: Recipe;
  isDirty: boolean;
  isSaving: boolean;
  setField: <K extends keyof Recipe>(key: K, value: Recipe[K]) => void;
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
