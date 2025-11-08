import { useState } from "react";
import { Ingredient } from "../types";
import IngredientEditor from "./IngredientEditor";

function IngredientsListEditor() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([
        { quantity: "", unit: "", item: "" },
    ]);

    return (
        <div>
            <h1>Ingredients</h1>
            {ingredients.map((ingredient, index) => (
                <IngredientEditor key={index} ingredient={ingredient} />
            ))}
        </div>
    );
}

export default IngredientsListEditor;
