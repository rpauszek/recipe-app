import TitleInput from "./TitleInput";
import CategorySelect from "./CategorySelect";
import CuisineSelect from "./CuisineSelect";
import IngredientsListEditor from "./IngredientsListEditor";
import StepsListEditor from "./StepsListEditor";
import { useEditor } from "./EditorContext";

import * as styles from "styles/editor.css";
import { button } from "styles/base.css";

function RecipeEditor() {
  const { draft, save, cancel } = useEditor();

  return (
    <div className={styles.recipeEditor}>
      <TitleInput />

      <div className={styles.comboRow}>
        <CategorySelect />
        <CuisineSelect />
      </div>

      {Object.entries(draft.ingredients).map(([title, entries]) => (
        <IngredientsListEditor group={title} ingredients={entries} />
      ))}

      {Object.entries(draft.steps).map(([title, entries]) => (
        <StepsListEditor group={title} steps={entries} />
      ))}

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
