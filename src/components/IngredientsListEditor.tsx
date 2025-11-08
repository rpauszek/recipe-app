import { useState } from "react";
import { Ingredient } from "../types";
import IngredientEditor from "./IngredientEditor";

function makeBlankIngredient(): Ingredient {
    return { quantity: "", unit: "", item: "" };
}

function IngredientsListEditor() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([makeBlankIngredient()]);

    const handleChange = (index: number, field: keyof Ingredient, value: string) => {
        const updater = (prev: Ingredient[]) => {
            const newIngredients = [...prev];
            newIngredients[index][field] = value;
            return newIngredients;
        };
        setIngredients(updater);
    };

    const addIngredient = (index: number) => {
        index += 1;
        const updater = (prev: Ingredient[]) => [
            ...prev.slice(0, index),
            makeBlankIngredient(),
            ...prev.slice(index),
        ];
        setIngredients(updater);
    };

    const removeIngredient = (index: number) => {
        const updater = (prev: Ingredient[]) => prev.filter((_, i) => i !== index);
        setIngredients(updater);
    };

    const callbacks = {
        handleChange: handleChange,
        addIngredient: addIngredient,
        removeIngredient: removeIngredient,
    };

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
