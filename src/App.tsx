import { useState } from "react";
import { invoke } from "@tauri-apps/api/core";

import RecipeCard from "./RecipeCard";

import "./App.css";

function App() {
    return (
        <div className="app">
            {/* Left sidebar */}
            <aside className="sidebar">
                <div className="recipe-list">
                    {[...Array(12)].map((_, i) => (
                        <RecipeCard
                            key={i}
                            title={"recipe"}
                            description={"description"}
                            onClick={() => console.log(`clicked ${i}`)}
                        />
                    ))}
                </div>

                {/* Fixed bottom button */}
                <div className="sidebar-footer">
                    <button className="new-recipe-btn">+ New Recipe</button>
                </div>
            </aside>

            {/* Main content */}
            <main className="content">
                <div className="content-inner">
                    <h1>Select a recipe</h1>
                    <p>
                        Choose a recipe from the left to view it here. Later
                        this area will host the recipe editor form.
                    </p>
                </div>
            </main>
        </div>
    );
}

export default App;
