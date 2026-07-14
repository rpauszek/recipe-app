import * as styles from "styles/sidebar.css";
import { logger } from "utils/logger";
import { useApp } from "app/AppContext";
import { useEditor } from "features/editor/EditorContext";

function NewRecipeButton() {
  const { isEditing, setMode, setEditKind } = useApp();
  const { loadDraft } = useEditor();

  return (
    <button
      className={styles.newRecipeButton({ disabled: isEditing })}
      onClick={() => {
        setEditKind("new");
        setMode("edit");
        loadDraft();
        logger.info("clicked");
      }}
      disabled={isEditing}
    >
      + New Recipe
    </button>
  );
}

export default NewRecipeButton;
