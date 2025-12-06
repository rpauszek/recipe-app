import { Recipe } from "utils/types";
import { cuisineFlags } from "utils/cuisines";

interface RecipeCardProps {
    recipe: Recipe;
    onClick?: () => void; // optional click handler
    selected: boolean;
    isEditingNew: boolean;
}

function RecipeCard({ recipe, onClick, selected, isEditingNew }: RecipeCardProps) {
    const className =
        "recipe-card" + ` ${selected ? "selected" : ""}` + ` ${isEditingNew ? "disabled" : ""}`;

    return (
        <div className={className} onClick={isEditingNew ? () => {} : onClick}>
            <h3>
                {recipe.title} {cuisineFlags[recipe.cuisine]}
            </h3>
            <p>{recipe.description}</p>
        </div>
    );
}

export default RecipeCard;
