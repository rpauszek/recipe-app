import { useEffect, useRef } from "react";
import { Ingredient, InputKeyBoardEvt } from "utils/types";
import IngredientEditor from "./IngredientEditor";
import { useEditor } from "./EditorContext";

function IngredientsListEditor() {
  const lastInputRef = useRef<HTMLInputElement>(null);
  const { draft, updateIngredient, addIngredient, removeIngredient } = useEditor();
  const GROUP = "main";
  const ingredients = draft.ingredients[GROUP] ?? [];

  useEffect(() => {
    lastInputRef.current?.focus();
  }, [ingredients.length]);

  const handleTabOnLastIngredient = (evt: InputKeyBoardEvt, index: number) => {
    if (evt.key === "Tab" && !evt.shiftKey && index === ingredients.length - 1) {
      evt.preventDefault();
      addIngredient(GROUP);
    }
  };

  const callbacks = {
    handleInputChange: (index: number, field: keyof Ingredient, value: string) => {
      updateIngredient(GROUP, index, field, value);
    },
    addIngredient: (index?: number) => addIngredient(GROUP, index),
    removeIngredient: (index: number) => removeIngredient(GROUP, index),
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
