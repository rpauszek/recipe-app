import * as styles from "styles/sidebar.css";
import { logger } from "utils/logger";
import { useApp } from "app/AppContext";

function NewRecipeButton() {
  const { mode, setMode } = useApp();
  const isEditing = mode === "edit";

  return (
    <button
      className={styles.newRecipeButton({ disabled: isEditing })}
      onClick={() => {
        setMode("edit");
        logger.info("clicked");
      }}
      disabled={isEditing}
    >
      + New Recipe
    </button>
  );
}

export default NewRecipeButton;
