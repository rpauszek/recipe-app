import { Recipe } from "utils/types";
import { cuisineFlags } from "utils/cuisines";
import IngredientsView from "./IngredientsView";
import { useEditor } from "features/editor/EditorContext";

import { button } from "styles/base.css";

import { logger } from "utils/logger";

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

  const { loadDraft } = useEditor();

  return (
    <div>
      <h1>{recipe.title}</h1>
      <button
        className={button}
        onClick={() => {
          loadDraft(recipe);
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
