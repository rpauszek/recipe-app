import { useState } from "react";
import { AppState, AppContext, AppMode, EditKind } from "./AppContext";
import { Recipe } from "utils/types";
import { logger } from "utils/logger";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<AppMode>("view");
  const isEditing = mode === "edit";
  const [editKind, setEditKind] = useState<EditKind>("new");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  function selectRecipe(recipe: Recipe) {
    logger.info(`clicked ${recipe.title}`);
    setSelectedRecipe(recipe);
  }

  function createNewRecipe() {
    setEditKind("new");
    setMode("edit")
  }

  function editSelectedRecipe() {
    setEditKind("existing")
    setMode("edit")
  }

  function finishEditing() {
    setMode("view")
  }

  const value: AppState = {
    mode,
    isEditing,
    editKind,
    selectedRecipe,
    selectRecipe,
    createNewRecipe,
    editSelectedRecipe,
    finishEditing,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
