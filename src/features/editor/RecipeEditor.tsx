import TitleInput from "./TitleInput";
import CategorySelect from "./CategorySelect";
import CuisineSelect from "./CuisineSelect";
import IngredientsListEditor from "./IngredientsListEditor";

import * as styles from "styles/editor.css";
import { button } from "styles/base.css";

interface RecipeEditorProps {
  onSave: () => void;
  onCancel: () => void;
}

function RecipeEditor({ onSave, onCancel }: RecipeEditorProps) {
  return (
    <div className={styles.recipeEditor}>
      <TitleInput />

      <div className={styles.comboRow}>
        <CategorySelect />
        <CuisineSelect />
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
