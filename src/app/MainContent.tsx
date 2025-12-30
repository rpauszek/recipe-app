import RecipeView from "features/view/RecipeView";
import RecipeEditor from "features/editor/RecipeEditor";
import { useApp } from "./AppContext";

import * as styles from "styles/app.css";
import { EditorProvider } from "features/editor/EditorProvider";

function createEmptyRecipe() {
  return {
    id: 42,
    title: "",
    description: "",
    category: "",
    cuisine: "",
    ingredients: null,
    steps: null,
  };
}

export function MainContent() {
  const { isEditing, selectedRecipe } = useApp();
  const initialRecipe = createEmptyRecipe();

  return (
    <main className={styles.content}>
      {isEditing ? (
        <EditorProvider initialRecipe={initialRecipe}>
          <RecipeEditor />
        </EditorProvider>
      ) : (
        <RecipeView recipe={selectedRecipe} />
      )}
    </main>
  );
}
