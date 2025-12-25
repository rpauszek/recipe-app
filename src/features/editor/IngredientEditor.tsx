import { Ingredient, InputChangeEvt, InputKeyBoardEvt } from "utils/types";
import * as styles from "styles/editor.css";

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
    const handleChange = (field: keyof Ingredient, evt: InputChangeEvt) => {
        callbacks.handleInputChange(index, field, evt.target.value);
    };

    return (
        <div className={styles.comboRow}>
            <input
                className={styles.fixedWidth}
                type="text"
                placeholder="Qty"
                value={ingredient.quantity}
                ref={inputRef}
                onChange={(evt) => handleChange("quantity", evt)}
            />
            <input
                className={styles.fixedWidth}
                type="text"
                placeholder="unit"
                value={ingredient.unit}
                onChange={(evt) => handleChange("unit", evt)}
            />
            <input
                className={styles.growWidth}
                type="text"
                placeholder=""
                value={ingredient.item}
                onChange={(evt) => handleChange("item", evt)}
                onKeyDown={(evt) => callbacks.handleTabOnLastIngredient(evt, index)}
            />
            <button onClick={() => callbacks.addIngredient(index)}>➕</button>
            <button onClick={() => callbacks.removeIngredient(index)}>❌</button>
        </div>
    );
}

export default IngredientEditor;
