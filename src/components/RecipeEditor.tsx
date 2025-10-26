interface RecipeEditorProps {
    onSave: () => void;
    onCancel: () => void;
}

function RecipeEditor({ onSave, onCancel }: RecipeEditorProps) {
    return (
        <div>
            <h1>Editor</h1>
            <button onClick={onSave}>Save</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    );
}

export default RecipeEditor;
