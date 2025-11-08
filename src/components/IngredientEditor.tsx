import { Ingredient } from "../types";

interface IngredientEditorCallbacks {
    handleChange: (index: number, field: keyof Ingredient, value: string) => void;
    addIngredient: (index: number) => void;
    removeIngredient: (index: number) => void;
    handleTabOnLastIngredient: (evt: React.KeyboardEvent<HTMLInputElement>, index: number) => void;
}

interface IngredientEditorProps {
    index: number;
    ingredient: Ingredient;
    callbacks: IngredientEditorCallbacks;
    inputRef?: React.RefObject<HTMLInputElement | null>;
}

function IngredientEditor({ index, ingredient, callbacks, inputRef }: IngredientEditorProps) {
    const widthStyle = { width: 60, marginRight: 4 };

    return (
        <div style={{ display: "flex", marginBottom: 8 }}>
            <input
                type="text"
                placeholder="Qty"
                value={ingredient.quantity}
                style={widthStyle}
                ref={inputRef}
            />
            <input type="text" placeholder="unit" value={ingredient.unit} style={widthStyle} />
            <input
                type="text"
                placeholder=""
                value={ingredient.item}
                style={{ flexGrow: 1, marginRight: 4 }}
                onChange={(evt) => callbacks.handleChange(index, "item", evt.target.value)}
                onKeyDown={(evt) => callbacks.handleTabOnLastIngredient(evt, index)}
            />
            <button onClick={() => callbacks.addIngredient(index)}>➕</button>
            <button onClick={() => callbacks.removeIngredient(index)}>❌</button>
        </div>
    );
}

export default IngredientEditor;
