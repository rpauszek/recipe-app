import { useState } from "react";
import { Ingredient } from "../types";
import IngredientEditor from "./IngredientEditor";

function IngredientsListEditor() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([
        { quantity: "", unit: "", item: "" },
    ]);

    const handleChange = (index: number, field: keyof Ingredient, value: string) => {
        setIngredients((prev) => {
            const newIngredients = [...prev];
            newIngredients[index][field] = value;
            return newIngredients;
        });
    };

    return (
        <div>
            <h1>Ingredients</h1>
            {ingredients.map((ingredient, index) => (
                <IngredientEditor
                    key={index}
                    index={index}
                    ingredient={ingredient}
                    handleChange={handleChange}
                />
            ))}
        </div>
    );
}

export default IngredientsListEditor;
