import { useState } from "react";
import { AppState, AppContext } from "./AppContext";
import { AppMode, Recipe } from "utils/types";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<AppMode>("view");
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  const value: AppState = {
    mode,
    setMode,
    selectedRecipe,
    setSelectedRecipe,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
