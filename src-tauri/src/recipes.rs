use serde::{Deserialize, Serialize};
use std::fs;
use std::path::PathBuf;

#[derive(Debug, Serialize, Deserialize)]
pub struct RecipeCollection {
    pub recipes: Vec<RecipeDto>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct RecipeDto { // DTO === Data Transfer Object
    pub id: String,
    pub title: String,
    pub description: String,
    pub cuisine: String,
    pub ingredients: Vec<IngredientList>,
    pub steps: Vec<StepList>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct IngredientList {
    pub id: String,
    pub title: String,
    pub entries: Vec<Ingredient>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct StepList {
    pub id: String,
    pub title: String,
    pub entries: Vec<String>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Ingredient {
    pub item: String,
    pub quantity: String,
    pub unit: String,
}

// TODO: plan for Step metadata
// {
//     "id": "...",
//     "text": "Cook spaghetti",
//     "timer": 600,
//     "temperature": 180
// }

pub fn load_dev_recipes() -> RecipeCollection {
    let mut path = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    path.push("dev_data/recipes.json"); // relative to src-tauri folder

    let data = fs::read_to_string(&path).expect("Failed to read dev recipes");
    serde_json::from_str(&data).expect("Failed to parse recipes JSON")
}
