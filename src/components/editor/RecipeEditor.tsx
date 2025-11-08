import { useState } from "react";
import { cuisineFlags } from "../../utils";
import IngredientsListEditor from "./IngredientsListEditor";
import "../../styles/RecipeEditor.css"

interface RecipeEditorProps {
    onSave: () => void;
    onCancel: () => void;
}

function RecipeEditor({ onSave, onCancel }: RecipeEditorProps) {
    // State for form fields
    const [title, setTitle] = useState("");
    const [recipeType, setRecipeType] = useState("");
    const [cuisine, setCuisine] = useState("");

    const cuisineOptions = Object.entries(cuisineFlags)
        .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
        .map(([key, flag]) => (
            <option key={key} value={key}>
                {flag} {key[0].toUpperCase() + key.slice(1)}
            </option>
        ));

    return (
        <div className="recipe-editor">
            {/* Recipe title input */}
            <input
                type="text"
                placeholder="Recipe Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="recipe-title-input"
            />

            {/* Two comboboxes side-by-side */}
            <div className="combo-row">
                <select
                    value={recipeType}
                    onChange={(e) => setRecipeType(e.target.value)}
                    className="recipe-type-select"
                >
                    <option value="" disabled>
                        Select type
                    </option>
                    <option value="breakfast">Breakfast</option>
                    <option value="dinner">Dinner</option>
                    <option value="dessert">Dessert</option>
                </select>

                <select
                    value={cuisine}
                    onChange={(e) => setCuisine(e.target.value)}
                    className="cuisine-select"
                >
                    <option value="" disabled>
                        Select cuisine
                    </option>
                    {cuisineOptions}
                </select>
            </div>

            <IngredientsListEditor />

            <div className="combo-row">
                <button onClick={onSave}>Save</button>
                <button onClick={onCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default RecipeEditor;
