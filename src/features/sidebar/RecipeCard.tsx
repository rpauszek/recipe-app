import { Recipe } from "utils/types";
import { cuisineFlags } from "utils/cuisines";
import * as styles from "styles/sidebar.css"

interface RecipeCardProps {
    recipe: Recipe;
    onClick?: () => void; // optional click handler
    isSelected: boolean;
    isEditingNew: boolean;
}

function RecipeCard({ recipe, onClick, isSelected, isEditingNew }: RecipeCardProps) {
    return (
        <div
            className={styles.recipeCard({ selected: isSelected, disabled: isEditingNew })}
            onClick={isEditingNew ? () => {} : onClick}
        >
            <h3>
                {recipe.title} {cuisineFlags[recipe.cuisine]}
            </h3>
            <p>{recipe.description}</p>
        </div>
    );
}

export default RecipeCard;
