import { Ingredient } from "../types";

interface IngredientEditorProps {
    index: number;
    ingredient: Ingredient;
    handleChange: (index: number, field: keyof Ingredient, value: string) => void;
}

function IngredientEditor({ index, ingredient, handleChange }: IngredientEditorProps) {
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
                onChange={(evt) => handleChange(index, "item", evt.target.value)}
            />
        </div>
    );
}

export default IngredientEditor;
