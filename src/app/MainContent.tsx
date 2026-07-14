import RecipeView from "features/view/RecipeView";
import RecipeEditor from "features/editor/RecipeEditor";
import { useApp } from "./AppContext";

import * as styles from "styles/app.css";

export function MainContent() {
  const { isEditing, selectedRecipe } = useApp();

  return (
    <main className={styles.content}>
      {isEditing ? <RecipeEditor /> : <RecipeView recipe={selectedRecipe} />}
    </main>
  );
}
