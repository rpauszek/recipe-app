import { Recipe } from "../types";
import { logger } from "../utils";
import RecipeCard from "./RecipeCard";

interface RecipeListProps {
    recipes: Recipe[];
    setSelectedRecipe: (recipe: Recipe) => void;
}

function RecipeList({ recipes, setSelectedRecipe }: RecipeListProps) {
    return (
        <div className="recipe-list">
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    title={recipe.title}
                    description={recipe.description}
                    onClick={() => {
                        logger.info(`clicked ${recipe.title}`);
                        setSelectedRecipe(recipe);
                    }}
                />
            ))}
        </div>
    );
}

export default RecipeList;
