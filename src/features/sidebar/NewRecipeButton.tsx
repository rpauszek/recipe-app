import { logger } from "utils/logger";

interface NewRecipeButtonProps {
    isEditingNew: boolean;
    setIsEditingNew: (value: boolean) => void;
}

function NewRecipeButton({ isEditingNew, setIsEditingNew }: NewRecipeButtonProps) {
    const className = "new-recipe-btn" + ` ${isEditingNew ? "disabled" : ""}`;

    return (
        <button
            className={className}
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
