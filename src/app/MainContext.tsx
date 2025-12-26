import { Dispatch, SetStateAction } from "react";
import RecipeView from "features/view/RecipeView";
import RecipeEditor from "features/editor/RecipeEditor";
import { Recipe } from "utils/types";

import * as styles from "styles/app.css";
import { logger } from "utils/logger";

interface MainContextProps {
  isEditingNew: boolean;
  setIsEditingNew: Dispatch<SetStateAction<boolean>>;
  selectedRecipe: Recipe | null;
}

export function MainContext({ isEditingNew, setIsEditingNew, selectedRecipe }: MainContextProps) {
  const onSaveRecipe = () => {
    setIsEditingNew(false);
    logger.info("saving");
  };

  const onCancelRecipe = () => {
    setIsEditingNew(false);
    logger.info("canceling");
  };

  return (
    <main className={styles.content}>
      {isEditingNew ? (
        <RecipeEditor onSave={onSaveRecipe} onCancel={onCancelRecipe} />
      ) : (
        <RecipeView recipe={selectedRecipe} />
      )}
    </main>
  );
}
