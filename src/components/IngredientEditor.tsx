import { Ingredient } from "../types";

interface IngredientEditorProps {
    ingredient: Ingredient
}

function IngredientEditor({ ingredient }: IngredientEditorProps) {
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
            />
        </div>
    );
}

export default IngredientEditor;
