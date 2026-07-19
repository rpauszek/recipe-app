import { useEffect, useRef } from "react";
import { Ingredient, IngredientList, InputKeyBoardEvt } from "utils/types";
import IngredientEditor from "./IngredientEditor";
import { useEditor } from "./EditorContext";


function IngredientsListEditor({ ingredients }: {ingredients: IngredientList}) {
  const lastInputRef = useRef<HTMLInputElement>(null);
  const { updateIngredient, addIngredient, removeIngredient } = useEditor();

  useEffect(() => {
    lastInputRef.current?.focus();
  }, [ingredients.entries.length]);

  const handleTabOnLastIngredient = (evt: InputKeyBoardEvt, index: number) => {
    if (evt.key === "Tab" && !evt.shiftKey && index === ingredients.entries.length - 1) {
      evt.preventDefault();
      addIngredient(ingredients.id);
    }
  };

  const callbacks = {
    handleInputChange: (index: number, field: keyof Ingredient, value: string) => {
      updateIngredient(ingredients.id, index, field, value);
    },
    addIngredient: (index?: number) => addIngredient(ingredients.id, index),
    removeIngredient: (index: number) => removeIngredient(ingredients.id, index),
    handleTabOnLastIngredient: handleTabOnLastIngredient,
  };

  return (
    <div>
      <h1>Ingredients</h1>
      {ingredients.entries.map((ingredient, index) => (
        <IngredientEditor
          key={index}
          index={index}
          ingredient={ingredient}
          callbacks={callbacks}
          inputRef={index === ingredients.entries.length - 1 ? lastInputRef : undefined}
        />
      ))}
    </div>
  );
}

export default IngredientsListEditor;
