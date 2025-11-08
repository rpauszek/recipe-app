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

    const addIngredient = (index?: number) => {
        let updater: (prev: Ingredient[]) => Ingredient[];
        if (index !== undefined) {
            index += 1;
            updater = (prev) => [
                ...prev.slice(0, index),
                makeBlankIngredient(),
                ...prev.slice(index),
            ];
        } else {
            updater = (prev) => [...prev, makeBlankIngredient()];
        }
        setIngredients(updater);
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
