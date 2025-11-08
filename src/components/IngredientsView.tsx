import { Ingredient } from "../types";

interface IngredientsViewProps {
    title: string;
    ingredients: Ingredient[];
}

export default function IngredientsView({ title, ingredients }: IngredientsViewProps) {
    return (
        <div style={{ backgroundColor: "#e0c3e4ff" }}>
            <h1>{title}</h1>
            <ul>
                {ingredients.map((ingredient) => (
                    <div>
                        {ingredient.quantity} {ingredient.unit} {ingredient.item}
                    </div>
                ))}
            </ul>
        </div>
    );
}
