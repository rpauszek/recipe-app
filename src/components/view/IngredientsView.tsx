import { Ingredient } from "../../types";
import "../../styles/IngredientsView.css"

interface IngredientsViewProps {
    title: string;
    ingredients: Ingredient[];
}

export default function IngredientsView({ title, ingredients }: IngredientsViewProps) {
    return (
        <div>
            <h1>{title}</h1>
            <div className="ingredients-list">
                {ingredients.map((ingredient, index) => (
                    <div key={index} className="ingredient-row">
                        <div className="quantity-unit-label">
                            {ingredient.quantity} {ingredient.unit}
                        </div>
                        <div className="item-label">{ingredient.item}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
