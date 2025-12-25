import { Ingredient } from "utils/types";
import * as styles from "styles/view.css.tsx"

interface IngredientsViewProps {
    title: string;
    ingredients: Ingredient[];
}

export default function IngredientsView({ title, ingredients }: IngredientsViewProps) {
    return (
        <div>
            <h1>{title}</h1>
            <div className={styles.ingredientsList}>
                {ingredients.map((ingredient, index) => (
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
