import * as styles from "styles/sidebar.css";
import { useApp } from "app/AppContext";

function NewRecipeButton() {
  const { isEditing, createNewRecipe } = useApp();

  return (
    <button
      className={styles.newRecipeButton({ disabled: isEditing })}
      onClick={() => {
        createNewRecipe();
      }}
      disabled={isEditing}
    >
      + New Recipe
    </button>
  );
}

export default NewRecipeButton;
