import TitleInput from "./TitleInput";
import CategorySelect from "./CategorySelect";
import CuisineSelect from "./CuisineSelect";
import IngredientsListEditor from "./IngredientsListEditor";
import { useEditor } from "./EditorContext";

import * as styles from "styles/editor.css";
import { button } from "styles/base.css";

function RecipeEditor() {
  const { save, cancel } = useEditor();

  return (
    <div className={styles.recipeEditor}>
      <TitleInput />

      <div className={styles.comboRow}>
        <CategorySelect />
        <CuisineSelect />
      </div>

      <IngredientsListEditor />

      <div className={styles.comboRow}>
        <button className={button} onClick={save}>
          Save
        </button>
        <button className={button} onClick={cancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default RecipeEditor;
