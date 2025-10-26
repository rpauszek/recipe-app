import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";

import { Recipe, RecipeCollection } from "../types";
import { logger } from "../utils";
import RecipeCard from "./RecipeCard";

function RecipeList() {
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
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    title={recipe.title}
                    description={recipe.description}
                    onClick={() => logger.info(`clicked ${recipe.title}`)}
                />
            ))}
        </div>
    );
}

export default RecipeList;
