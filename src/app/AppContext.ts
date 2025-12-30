import { createContext, Dispatch, SetStateAction, useContext } from "react";
import { AppMode, EditKind, Recipe } from "utils/types";

export interface AppState {
  mode: AppMode;
  setMode: Dispatch<SetStateAction<AppMode>>;
  isEditing: boolean;
  editKind: EditKind;
  setEditKind: Dispatch<SetStateAction<EditKind>>;
  selectedRecipe: Recipe | null;
  setSelectedRecipe: Dispatch<SetStateAction<Recipe | null>>;
}

export const AppContext = createContext<AppState | null>(null);

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within an AppProvider");
  }
  return context;
}
