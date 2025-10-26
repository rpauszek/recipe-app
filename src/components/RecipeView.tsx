import { Recipe } from "../types";

interface RecipeViewProps {
    recipe: Recipe | null;
}

function RecipeView({ recipe }: RecipeViewProps) {
    return (
        <div className="content-inner">
            {recipe ? <h1>{recipe.title}</h1> : <h1>nope</h1>}
        </div>
    );
}

export default RecipeView;
