import { Recipe } from "../../utils/types";
import { cuisineFlags } from "../../utils/cuisines";
import IngredientsView from "./IngredientsView";

interface RecipeViewProps {
    recipe: Recipe | null;
}

function RecipeView({ recipe }: RecipeViewProps) {
    if (!recipe) {
        return (
            <div className="content-inner">
                <h1>nope</h1>
            </div>
        );
    }

    return (
        <div className="content-inner">
            <h1>{recipe.title}</h1>

            <div>{recipe.description}</div>

            <div>{cuisineFlags[recipe.cuisine]}</div>

            {Object.entries(recipe.ingredients).map(([title, ingredients]) => (
                <IngredientsView title={title} ingredients={ingredients} />
            ))}
        </div>
    );
}

export default RecipeView;
