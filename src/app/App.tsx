import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Recipe, RecipeCollection } from "utils/types";

import { MainContext } from "./MainContext";

import "styles/global.css";
import * as styles from "styles/app.css";
import { Sidebar } from "./Sidebar";

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isEditingNew, setIsEditingNew] = useState(false);

  // load recipes on app start
  useEffect(() => {
    async function fetchRecipes() {
      const result = await invoke<string>("get_recipes");
      const collection: RecipeCollection = JSON.parse(result);
      setRecipes(collection.recipes);
    }
    fetchRecipes();
  }, []);

  return (
    <div className={styles.app}>
      <Sidebar
        recipes={recipes}
        selectedRecipe={selectedRecipe}
        setSelectedRecipe={setSelectedRecipe}
        isEditingNew={isEditingNew}
        setIsEditingNew={setIsEditingNew}
      />

      <MainContext
        isEditingNew={isEditingNew}
        setIsEditingNew={setIsEditingNew}
        selectedRecipe={selectedRecipe}
      />
    </div>
  );
}

export default App;
