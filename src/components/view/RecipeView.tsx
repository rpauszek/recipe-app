import { Recipe } from "../../types";
import { cuisineFlags } from "../../utils";
import IngredientsView from "./IngredientsView";
import "../../styles/RecipeView.css";

interface RecipeViewProps {
    recipe: Recipe | null;
}

function RecipeView({ recipe }: RecipeViewProps) {
    if (!recipe) {
        return (
            <div className="recipe-content">
                <h1>nope</h1>
            </div>
        );
    }

    return (
        <div className="recipe-content">
            <div className="recipe-title">{recipe.title}</div>

            <div>{recipe.description}</div>

            <div>{cuisineFlags[recipe.cuisine]}</div>

            <div className="ingredients-content">
                {Object.entries(recipe.ingredients).map(([title, ingredients]) => (
                    <IngredientsView title={title} ingredients={ingredients} />
                ))}
            </div>
        </div>
    );
}

export default RecipeView;
