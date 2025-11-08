import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Recipe, RecipeCollection } from "./types";
import RecipeView from "./components/view/RecipeView";
import RecipeEditor from "./components/editor/RecipeEditor";
import SideBar from "./components/sidebar/SideBar";
import "./styles/App.css";
import { logger } from "./utils";

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
            <SideBar
                recipes={recipes}
                selectedRecipe={selectedRecipe}
                setSelectedRecipe={setSelectedRecipe}
                isEditingNew={isEditingNew}
                setIsEditingNew={setIsEditingNew}
            />

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
