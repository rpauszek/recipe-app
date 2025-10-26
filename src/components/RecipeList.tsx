import { Recipe } from "../types";
import { logger } from "../utils";
import RecipeCard from "./RecipeCard";

interface RecipeListProps {
    recipes: Recipe[];
    selectedRecipe: Recipe | null;
    setSelectedRecipe: (recipe: Recipe) => void;
}

function RecipeList({ recipes, selectedRecipe, setSelectedRecipe }: RecipeListProps) {
    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onClick={() => {
                        logger.info(`clicked ${recipe.title}`);
                        setSelectedRecipe(recipe);
                    }}
                    selected={selectedRecipe?.id === recipe.id}
                />
            ))}
        </div>
    );
}

export default RecipeList;
