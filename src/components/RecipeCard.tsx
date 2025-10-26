import { Recipe } from "../types"
import { cuisineFlags } from "../utils";

interface RecipeCardProps {
    recipe: Recipe;
    onClick?: () => void; // optional click handler
    selected?: boolean;
}

function RecipeCard({ recipe, onClick, selected }: RecipeCardProps) {
    return (
        <div className={`recipe-card ${selected ? "selected" : ""}`} onClick={onClick}>
            <h3>{recipe.title} {cuisineFlags[recipe.cuisine]}</h3>
            <p>{recipe.description}</p>
        </div>
    );
}

export default RecipeCard;
