import { Recipe } from "utils/types";
import RecipeCard from "./RecipeCard";
import { useApp } from "app/AppContext";

import * as styles from "styles/sidebar.css";
import { logger } from "utils/logger";

interface RecipeListProps {
  recipes: Recipe[];
}

function RecipeList({ recipes }: RecipeListProps) {
  const { isEditing, selectedRecipe, selectRecipe } = useApp();

  return (
    <div className={styles.recipeList({ disabled: isEditing })}>
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onClick={() => {
            selectRecipe(recipe);
          }}
          isSelected={selectedRecipe?.id === recipe.id}
        />
      ))}
    </div>
  );
}

export default RecipeList;
