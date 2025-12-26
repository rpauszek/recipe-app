import { Dispatch, SetStateAction } from "react";
import NewRecipeButton from "features/sidebar/NewRecipeButton";
import RecipeList from "features/sidebar/RecipeList";
import { Recipe } from "utils/types";

import * as styles from "styles/app.css";

interface SidebarProps {
  recipes: Recipe[];
  selectedRecipe: Recipe | null;
  setSelectedRecipe: Dispatch<SetStateAction<Recipe | null>>;
  isEditingNew: boolean;
  setIsEditingNew: Dispatch<SetStateAction<boolean>>;
}

export function Sidebar({
  recipes,
  selectedRecipe,
  setSelectedRecipe,
  isEditingNew,
  setIsEditingNew,
}: SidebarProps) {
  return (<aside className={styles.sidebar}>
    <RecipeList
      recipes={recipes}
      selectedRecipe={selectedRecipe}
      setSelectedRecipe={setSelectedRecipe}
      isEditingNew={isEditingNew}
    />
    <div className={styles.sidebarFooter}>
      <NewRecipeButton isEditingNew={isEditingNew} setIsEditingNew={setIsEditingNew} />
    </div>
  </aside>);
}
