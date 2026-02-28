import RecipeView from "features/view/RecipeView";
import RecipeEditor from "features/editor/RecipeEditor";
import { useApp } from "./AppContext";

import * as styles from "styles/app.css";
import { EditorProvider } from "features/editor/EditorProvider";
import { createEmptyRecipe } from "features/editor/constructors";

export function MainContent() {
  const { isEditing, selectedRecipe } = useApp();
  const initialRecipe = createEmptyRecipe();

  return (
    <main className={styles.content}>
      <EditorProvider initialRecipe={initialRecipe}>
      {isEditing ? (
          <RecipeEditor />
      ) : (
        <RecipeView recipe={selectedRecipe} />
      )}
      </EditorProvider>
    </main>
  );
}
