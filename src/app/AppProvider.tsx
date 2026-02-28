import { useState } from "react";
import { AppState, AppContext } from "./AppContext";
import { AppMode, EditKind, Recipe } from "utils/types";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<AppMode>("view");
  const isEditing = mode === "edit";
  const [editKind, setEditKind] = useState<EditKind>("new");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const value: AppState = {
    mode,
    setMode,
    isEditing,
    editKind,
    setEditKind,
    selectedRecipe,
    setSelectedRecipe,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
