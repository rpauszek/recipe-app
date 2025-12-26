import NewRecipeButton from "features/sidebar/NewRecipeButton";
import RecipeList from "features/sidebar/RecipeList";
import { Recipe } from "utils/types";

import * as styles from "styles/app.css";

interface SidebarProps {
  recipes: Recipe[];
}

export function Sidebar({ recipes }: SidebarProps) {
  return (
    <aside className={styles.sidebar}>
      <RecipeList recipes={recipes} />
      <div className={styles.sidebarFooter}>
        <NewRecipeButton />
      </div>
    </aside>
  );
}
