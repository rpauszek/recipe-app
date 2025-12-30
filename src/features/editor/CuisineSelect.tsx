import { cuisineFlags } from "utils/cuisines";
import * as styles from "styles/editor.css";
import { useEditor } from "./EditorContext";

export default function CuisineSelect() {
  const { draft, setField } = useEditor();

  const cuisineOptions = Object.entries(cuisineFlags)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([key, flag]) => (
      <option key={key} value={key}>
        {key[0].toUpperCase() + key.slice(1)} {flag}
      </option>
    ));

  return (
    <select
      value={draft.cuisine}
      onChange={(e) => setField("cuisine", e.target.value)}
      className={styles.selectBase}
    >
      <option value="" disabled>
        Select cuisine
      </option>
      {cuisineOptions}
    </select>
  );
}
