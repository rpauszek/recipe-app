import RecipeView from "features/view/RecipeView";
import RecipeEditor from "features/editor/RecipeEditor";
import { useApp } from "./AppContext";

import * as styles from "styles/app.css";
import { logger } from "utils/logger";

export function MainContext() {
  const { mode, setMode, selectedRecipe } = useApp();

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
      {mode === "edit" ? (
        <RecipeEditor onSave={onSaveRecipe} onCancel={onCancelRecipe} />
      ) : (
        <RecipeView recipe={selectedRecipe} />
      )}
    </main>
  );
}
