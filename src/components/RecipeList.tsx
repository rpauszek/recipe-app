import { Recipe } from "../types";
import { logger } from "../utils";
import RecipeCard from "./RecipeCard";

interface RecipeListProps {
    recipes: Recipe[];
    selectedRecipe: Recipe | null;
    setSelectedRecipe: (recipe: Recipe) => void;
    isEditingNew: boolean;
}

function RecipeList({ recipes, selectedRecipe, setSelectedRecipe, isEditingNew }: RecipeListProps) {
    const className = "recipe-list" + ` ${isEditingNew ? "disabled" : ""}`;

    return (
        <div className={className}>
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onClick={() => {
                        logger.info(`clicked ${recipe.title}`);
                        setSelectedRecipe(recipe);
                    }}
                    selected={selectedRecipe?.id === recipe.id}
                    isEditingNew={isEditingNew}
                />
            ))}
        </div>
    );
}

export default RecipeList;
