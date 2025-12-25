import { useState } from "react";
import { cuisineFlags } from "utils/cuisines";
import IngredientsListEditor from "./IngredientsListEditor";
import * as styles from "styles/editor.css";
import { button } from "styles/base.css";

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
    <div className={styles.recipeEditor}>
      {/* Recipe title input */}
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={styles.recipeTitleInput}
      />

      {/* Two comboboxes side-by-side */}
      <div className={styles.comboRow}>
        <select
          value={recipeType}
          onChange={(e) => setRecipeType(e.target.value)}
          className={styles.selectBase}
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
          className={styles.selectBase}
        >
          <option value="" disabled>
            Select cuisine
          </option>
          {cuisineOptions}
        </select>
      </div>

      <IngredientsListEditor />

      <div className={styles.comboRow}>
        <button className={button} onClick={onSave}>
          Save
        </button>
        <button className={button} onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default RecipeEditor;
