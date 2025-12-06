import { Ingredient, InputChangeEvt, InputKeyBoardEvt } from "utils/types";

interface IngredientEditorCallbacks {
    handleInputChange: (index: number, field: keyof Ingredient, value: string) => void;
    addIngredient: (index: number) => void;
    removeIngredient: (index: number) => void;
    handleTabOnLastIngredient: (evt: InputKeyBoardEvt, index: number) => void;
}

interface IngredientEditorProps {
    index: number;
    ingredient: Ingredient;
    callbacks: IngredientEditorCallbacks;
    inputRef?: React.RefObject<HTMLInputElement | null>;
}

function IngredientEditor({ index, ingredient, callbacks, inputRef }: IngredientEditorProps) {
    const widthStyle = { width: 60, marginRight: 4 };
    const handleChange = (field: keyof Ingredient, evt: InputChangeEvt) => {
        callbacks.handleInputChange(index, field, evt.target.value);
    };

    return (
        <div style={{ display: "flex", marginBottom: 8 }}>
            <input
                type="text"
                placeholder="Qty"
                value={ingredient.quantity}
                style={widthStyle}
                ref={inputRef}
                onChange={(evt) => handleChange("quantity", evt)}
            />
            <input
                type="text"
                placeholder="unit"
                value={ingredient.unit}
                style={widthStyle}
                onChange={(evt) => handleChange("unit", evt)}
            />
            <input
                type="text"
                placeholder=""
                value={ingredient.item}
                style={{ flexGrow: 1, marginRight: 4 }}
                onChange={(evt) => handleChange("item", evt)}
                onKeyDown={(evt) => callbacks.handleTabOnLastIngredient(evt, index)}
            />
            <button onClick={() => callbacks.addIngredient(index)}>➕</button>
            <button onClick={() => callbacks.removeIngredient(index)}>❌</button>
        </div>
    );
}

export default IngredientEditor;
