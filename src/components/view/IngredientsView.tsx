import { Ingredient } from "../../types";

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
                        <div className="qty">
                            {ingredient.quantity} {ingredient.unit}
                        </div>
                        <div className="item">{ingredient.item}</div>
                    </div>
                ))}
            </div>
        </div>
    );
}
