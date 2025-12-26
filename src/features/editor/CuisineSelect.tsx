import { useState } from "react";
import { cuisineFlags } from "utils/cuisines";
import * as styles from "styles/editor.css";

export default function CuisineSelect() {
  const [cuisine, setCuisine] = useState("");

  const cuisineOptions = Object.entries(cuisineFlags)
    .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
    .map(([key, flag]) => (
      <option key={key} value={key}>
        {flag} {key[0].toUpperCase() + key.slice(1)}
      </option>
    ));

  return (
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
  );
}
