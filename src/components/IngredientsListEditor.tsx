import { useState } from "react";
import { Ingredient } from "../types";
import IngredientEditor from "./IngredientEditor";

function makeBlankIngredient(): Ingredient {
    return { quantity: "", unit: "", item: "" };
}

function IngredientsListEditor() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([makeBlankIngredient()]);

    const handleChange = (index: number, field: keyof Ingredient, value: string) => {
        setIngredients((prev) => {
            const newIngredients = [...prev];
            newIngredients[index][field] = value;
            return newIngredients;
        });
    };

    const addIngredient = () => {
        setIngredients((prev) => [...prev, makeBlankIngredient()]);
    };

    const callbacks = { handleChange: handleChange, addIngredient: addIngredient };

    return (
        <div>
            <h1>Ingredients</h1>
            {ingredients.map((ingredient, index) => (
                <IngredientEditor
                    key={index}
                    index={index}
                    ingredient={ingredient}
                    callbacks={callbacks}
                />
            ))}
        </div>
    );
}

export default IngredientsListEditor;
