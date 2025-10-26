import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Recipe, RecipeCollection } from "./types";
import RecipeList from "./components/RecipeList";
import RecipeView from "./components/RecipeView";
import "./App.css";

function App() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

    useEffect(() => {
        async function fetchRecipes() {
            const result = await invoke<string>("get_recipes");
            const collection: RecipeCollection = JSON.parse(result);
            setRecipes(collection.recipes);
        }
        fetchRecipes();
    }, []);

    return (
        <div className="app">
            {/* Left sidebar */}
            <aside className="sidebar">
                <RecipeList
                    recipes={recipes}
                    selectedRecipe={selectedRecipe}
                    setSelectedRecipe={setSelectedRecipe}
                />

                {/* Fixed bottom button */}
                <div className="sidebar-footer">
                    <button className="new-recipe-btn">+ New Recipe</button>
                </div>
            </aside>

            {/* Main content */}
            <main className="content">
                <RecipeView recipe={selectedRecipe} />
            </main>
        </div>
    );
}

export default App;
