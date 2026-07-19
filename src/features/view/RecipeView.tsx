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

      {recipe.ingredients.map((ingredients) => (
        <IngredientsView ingredients={ingredients} key={ingredients.id} />
      ))}

      {recipe.steps.map((steps) => (
        <StepsView steps={steps} key={steps.id} />
      ))}
    </div>
  );
}

export default RecipeView;
