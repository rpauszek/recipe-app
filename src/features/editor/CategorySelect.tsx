import { useEditor } from "./EditorContext";
import * as styles from "styles/editor.css";

export default function CategorySelect() {
  const { draft, setField } = useEditor();

  return (
    <select
      value={draft.category}
      onChange={(e) => setField("category", e.target.value)}
      className={styles.selectBase}
    >
      <option value="" disabled>
        Select type
      </option>
      <option value="breakfast">Breakfast</option>
      <option value="dinner">Dinner</option>
      <option value="dessert">Dessert</option>
    </select>
  );
}
