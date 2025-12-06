import { useState, useEffect, useRef } from "react";
import { Ingredient, InputKeyBoardEvt } from "../../types";
import IngredientEditor from "./IngredientEditor";

function makeBlankIngredient(): Ingredient {
    return { quantity: "", unit: "", item: "" };
}

function IngredientsListEditor() {
    const [ingredients, setIngredients] = useState<Ingredient[]>([makeBlankIngredient()]);
    const lastInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        lastInputRef.current?.focus();
    }, [ingredients.length]);

    const handleInputChange = (index: number, field: keyof Ingredient, value: string) => {
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

    const removeIngredient = (index: number) => {
        const updater = (prev: Ingredient[]) => prev.filter((_, i) => i !== index);
        setIngredients(updater);
    };

    const handleTabOnLastIngredient = (
        evt: InputKeyBoardEvt,
        index: number
    ) => {
        if (evt.key === "Tab" && !evt.shiftKey && index === ingredients.length - 1) {
            evt.preventDefault();
            addIngredient();
        }
    };

    const callbacks = {
        handleInputChange: handleInputChange,
        addIngredient: addIngredient,
        removeIngredient: removeIngredient,
        handleTabOnLastIngredient: handleTabOnLastIngredient,
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
                    inputRef={index === ingredients.length - 1 ? lastInputRef : undefined}
                />
            ))}
        </div>
    );
}

export default IngredientsListEditor;
