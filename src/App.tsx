import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";

import { Recipe, RecipeCollection } from "./types";
import { logger } from "./utils";
import RecipeCard from "./RecipeCard";

import "./App.css";

function App() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);

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
                <div className="recipe-list">
                    {recipes.map((recipe) => (
                        <RecipeCard
                            key={recipe.id}
                            title={recipe.title}
                            description={recipe.description}
                            onClick={() =>
                                logger.info(`clicked ${recipe.title}`)
                            }
                        />
                    ))}
                </div>

                {/* Fixed bottom button */}
                <div className="sidebar-footer">
                    <button className="new-recipe-btn">+ New Recipe</button>
                </div>
            </aside>

            {/* Main content */}
            <main className="content">
                <div className="content-inner">
                    <h1>Select a recipe</h1>
                    <p>
                        Choose a recipe from the left to view it here. Later
                        this area will host the recipe editor form.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default App;
