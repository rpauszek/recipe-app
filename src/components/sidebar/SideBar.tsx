import RecipeList from "./RecipeList";
import NewRecipeButton from "./NewRecipeButton";
import { Recipe, StateSetter } from "../../types";
import "../../styles/SideBar.css"

interface SideBarProps {
    recipes: Recipe[];
    selectedRecipe: Recipe | null;
    setSelectedRecipe: StateSetter<Recipe | null>;
    isEditingNew: boolean;
    setIsEditingNew: StateSetter<boolean>;
}

export default function SideBar({
    recipes,
    selectedRecipe,
    setSelectedRecipe,
    isEditingNew,
    setIsEditingNew,
}: SideBarProps) {
    return (
        <aside className="sidebar">
            <RecipeList
                recipes={recipes}
                selectedRecipe={selectedRecipe}
                setSelectedRecipe={setSelectedRecipe}
                isEditingNew={isEditingNew}
            />

            {/* Fixed bottom button */}
            <div className="sidebar-footer">
                <NewRecipeButton isEditingNew={isEditingNew} setIsEditingNew={setIsEditingNew} />
            </div>
        </aside>
    );
}
