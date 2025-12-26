import { useState } from "react";
import * as styles from "styles/editor.css";

export default function CategorySelect() {
  const [recipeType, setRecipeType] = useState("");

  return (
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
  );
}
