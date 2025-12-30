import RecipeView from "features/view/RecipeView";
import RecipeEditor from "features/editor/RecipeEditor";
import { useApp } from "./AppContext";

import * as styles from "styles/app.css";
import { logger } from "utils/logger";

export function MainContent() {
  const { isEditing, setMode, selectedRecipe } = useApp();

  const onSaveRecipe = () => {
    setMode("view");
    logger.info("saving");
  };

  const onCancelRecipe = () => {
    setMode("view");
    logger.info("canceling");
  };

  return (
    <main className={styles.content}>
      {isEditing ? (
        <RecipeEditor onSave={onSaveRecipe} onCancel={onCancelRecipe} />
      ) : (
        <RecipeView recipe={selectedRecipe} />
      )}
    </main>
  );
}
