import { useEditor } from "./EditorContext";
import * as styles from "styles/editor.css";

export default function TitleInput() {
  const { draft, setField } = useEditor();

  return (
    <input
      type="text"
      placeholder="Recipe Title"
      value={draft.title}
      onChange={(e) => setField("title", e.target.value)}
      className={styles.recipeTitleInput}
    />
  );
}
