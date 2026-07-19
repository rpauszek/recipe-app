import { IngredientList } from "utils/types";
import * as styles from "styles/view.css.tsx";

export default function IngredientsView({ ingredients }: { ingredients: IngredientList }) {
  return (
    <div>
      <h1>{ingredients.title}</h1>
      <div className={styles.ingredientsList}>
        {ingredients.entries.map((ingredient, index) => (
          <div key={index} className={styles.ingredientRow}>
            <div className={styles.quantity}>
              {ingredient.quantity} {ingredient.unit}
            </div>
            <div className={styles.item}>{ingredient.item}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
