import { useState } from "react";
import * as styles from "styles/editor.css";

export default function TitleInput() {
  const [title, setTitle] = useState("");

  return (
    <input
      type="text"
      placeholder="Recipe Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      className={styles.recipeTitleInput}
    />
  );
}
