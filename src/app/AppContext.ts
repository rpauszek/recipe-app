import { createContext, useContext } from "react";
import { Recipe } from "utils/types";

export type AppMode = "view" | "edit";
export type EditKind = "new" | "existing";

export interface AppState {
  mode: AppMode;
  isEditing: boolean;
  editKind: EditKind;
  selectedRecipe: Recipe | null;
  selectRecipe: (recipe: Recipe) => void;
  createNewRecipe: () => void;
  editSelectedRecipe: () => void;
  finishEditing: () => void;
}

export const AppContext = createContext<AppState | null>(null);

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
