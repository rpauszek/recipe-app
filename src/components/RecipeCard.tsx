import { Recipe } from "../types"
import { cuisineFlags } from "../utils";

interface RecipeCardProps {
    recipe: Recipe;
    onClick?: () => void; // optional click handler
}

function RecipeCard({ recipe, onClick }: RecipeCardProps) {
    return (
        <div className="recipe-card" onClick={onClick}>
            <h3>{recipe.title} {cuisineFlags[recipe.cuisine]}</h3>
            <p>{recipe.description}</p>
        </div>
    );
}

export default RecipeCard;
