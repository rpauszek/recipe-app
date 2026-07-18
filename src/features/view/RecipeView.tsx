import { Recipe } from "utils/types";
import { cuisineFlags } from "utils/cuisines";
import IngredientsView from "./IngredientsView";
import StepsView from "./StepsView";
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

      {Object.entries(recipe.steps).map(([title, steps]) => (
        <StepsView title={title} steps={steps} />
      ))}
    </div>
  );
}

export default RecipeView;
