import * as styles from "styles/sidebar.css";
import { logger } from "utils/logger";

interface NewRecipeButtonProps {
    isEditingNew: boolean;
    setIsEditingNew: (value: boolean) => void;
}

function NewRecipeButton({ isEditingNew, setIsEditingNew }: NewRecipeButtonProps) {
    return (
        <button
            className={styles.button({ disabled: isEditingNew })}
            onClick={() => {
                setIsEditingNew(true);
                logger.info("clicked");
            }}
            disabled={isEditingNew}
        >
            + New Recipe
        </button>
    );
}

export default NewRecipeButton;
