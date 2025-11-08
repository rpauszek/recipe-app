import { Ingredient } from "../types";

interface IngredientEditorCallbacks {
    handleChange: (index: number, field: keyof Ingredient, value: string) => void;
    addIngredient: () => void;
}

interface IngredientEditorProps {
    index: number;
    ingredient: Ingredient;
    callbacks: IngredientEditorCallbacks;
}

function IngredientEditor({ index, ingredient, callbacks }: IngredientEditorProps) {
    const widthStyle = { width: 60, marginRight: 4 };

    return (
        <div style={{ display: "flex", marginBottom: 8 }}>
            <input type="text" placeholder="Qty" value={ingredient.quantity} style={widthStyle} />
            <input type="text" placeholder="unit" value={ingredient.unit} style={widthStyle} />
            <input
                type="text"
                placeholder=""
                value={ingredient.item}
                style={{ flexGrow: 1, marginRight: 4 }}
                onChange={(evt) => callbacks.handleChange(index, "item", evt.target.value)}
            />
            <button onClick={() => callbacks.addIngredient()}>➕</button>
            <button>❌</button>
        </div>
    );
}

export default IngredientEditor;
