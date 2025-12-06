import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Recipe, RecipeCollection } from "../types";
import NewRecipeButton from "../features/sidebar/NewRecipeButton";
import RecipeList from "../features/sidebar/RecipeList";
import RecipeView from "../features/view/RecipeView";
import RecipeEditor from "../features/editor/RecipeEditor";
import "./App.css";
import { logger } from "../utils";

function App() {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
    const [isEditingNew, setIsEditingNew] = useState(false);

    const onSaveRecipe = () => {
        setIsEditingNew(false);
        logger.info("saving");
    };

    const onCancelRecipe = () => {
        setIsEditingNew(false);
        logger.info("canceling");
    };

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
        <div className="app">
            {/* Left sidebar */}
            <aside className="sidebar">
                <RecipeList
                    recipes={recipes}
                    selectedRecipe={selectedRecipe}
                    setSelectedRecipe={setSelectedRecipe}
                    isEditingNew={isEditingNew}
                />

                {/* Fixed bottom button */}
                <div className="sidebar-footer">
                    <NewRecipeButton
                        isEditingNew={isEditingNew}
                        setIsEditingNew={setIsEditingNew}
                    />
                </div>
            </aside>

            {/* Main content */}
            <main className="content">
                {isEditingNew ? (
                    <RecipeEditor onSave={onSaveRecipe} onCancel={onCancelRecipe} />
                ) : (
                    <RecipeView recipe={selectedRecipe} />
                )}
            </main>
        </div>
    );
}

export default App;
