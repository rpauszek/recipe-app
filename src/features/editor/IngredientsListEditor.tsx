import { useEffect, useRef } from "react";
import { Ingredient, InputKeyBoardEvt } from "utils/types";
import IngredientEditor from "./IngredientEditor";
import { useEditor } from "./EditorContext";

interface IngredientsListEditorProps {
  group: string;
  ingredients: Ingredient[];
}

function IngredientsListEditor({ group, ingredients }: IngredientsListEditorProps) {
  const lastInputRef = useRef<HTMLInputElement>(null);
  const { updateIngredient, addIngredient, removeIngredient } = useEditor();

  useEffect(() => {
    lastInputRef.current?.focus();
  }, [ingredients.length]);

  const handleTabOnLastIngredient = (evt: InputKeyBoardEvt, index: number) => {
    if (evt.key === "Tab" && !evt.shiftKey && index === ingredients.length - 1) {
      evt.preventDefault();
      addIngredient(group);
    }
  };

  const callbacks = {
    handleInputChange: (index: number, field: keyof Ingredient, value: string) => {
      updateIngredient(group, index, field, value);
    },
    addIngredient: (index?: number) => addIngredient(group, index),
    removeIngredient: (index: number) => removeIngredient(group, index),
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
