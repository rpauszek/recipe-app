interface RecipeCardProps {
    title: string;
    description: string;
    onClick?: () => void; // optional click handler
}

function RecipeCard({ title, description, onClick }: RecipeCardProps) {
    return (
        <div className="recipe-card" onClick={onClick}>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default RecipeCard;
