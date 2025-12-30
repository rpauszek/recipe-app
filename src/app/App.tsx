import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Recipe, RecipeCollection } from "utils/types";

import { MainContent } from "./MainContent";
import { Sidebar } from "./Sidebar";
import { AppProvider } from "./AppProvider";

import "styles/global.css";
import * as styles from "styles/app.css";

function App() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

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
    <AppProvider>
      <div className={styles.app}>
        <Sidebar
          recipes={recipes}
        />

        <MainContent />
      </div>
    </AppProvider>
  );
}

export default App;
