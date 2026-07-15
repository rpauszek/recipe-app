import { Recipe } from "utils/types";
import { cuisineFlags } from "utils/cuisines";
import IngredientsView from "./IngredientsView";
import { useApp } from "app/AppContext";

import { button } from "styles/base.css";

interface RecipeViewProps {
  recipe: Recipe | null;
}

function RecipeView({ recipe }: RecipeViewProps) {
  if (!recipe) {
    return (
      <div>
        <h1>nope</h1>
      </div>
    );
  }

  const { editSelectedRecipe } = useApp();

  return (
    <div>
      <h1>{recipe.title}</h1>
      <button
        className={button}
        onClick={() => {
          editSelectedRecipe();
        }}
      >
        edit
      </button>

      <div>{recipe.description}</div>

      <div>{cuisineFlags[recipe.cuisine]}</div>

      {Object.entries(recipe.ingredients).map(([title, ingredients]) => (
        <IngredientsView title={title} ingredients={ingredients} />
      ))}
    </div>
  );
}

export default RecipeView;
