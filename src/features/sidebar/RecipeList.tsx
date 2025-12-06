import { Recipe } from "utils/types";
import { logger } from "utils/logger";
import RecipeCard from "./RecipeCard";
import * as styles from "styles/sidebar.css"

interface RecipeListProps {
    recipes: Recipe[];
    selectedRecipe: Recipe | null;
    setSelectedRecipe: (recipe: Recipe) => void;
    isEditingNew: boolean;
}

function RecipeList({ recipes, selectedRecipe, setSelectedRecipe, isEditingNew }: RecipeListProps) {
    return (
        <div className={styles.recipeList({disabled: isEditingNew})}>
            {recipes.map((recipe) => (
                <RecipeCard
                    key={recipe.id}
                    recipe={recipe}
                    onClick={() => {
                        logger.info(`clicked ${recipe.title}`);
                        setSelectedRecipe(recipe);
                    }}
                    isSelected={selectedRecipe?.id === recipe.id}
                    isEditingNew={isEditingNew}
                />
            ))}
        </div>
    );
}

export default RecipeList;
