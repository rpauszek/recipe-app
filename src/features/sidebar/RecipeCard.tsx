import { Recipe } from "utils/types";
import { cuisineFlags } from "utils/cuisines";
import { useApp } from "app/AppContext";

import * as styles from "styles/sidebar.css";

interface RecipeCardProps {
  recipe: Recipe;
  onClick?: () => void; // optional click handler
  isSelected: boolean;
}

function RecipeCard({ recipe, onClick, isSelected }: RecipeCardProps) {
  const { isEditing } = useApp();

  return (
    <div
      className={styles.recipeCard({ selected: isSelected, disabled: isEditing })}
      onClick={isEditing ? () => {} : onClick}
    >
      <h3>
        {recipe.title} {cuisineFlags[recipe.cuisine]}
      </h3>
      <p>{recipe.description}</p>
    </div>
  );
}

export default RecipeCard;
