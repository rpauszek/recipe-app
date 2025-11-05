use serde::{Deserialize, Serialize};
use std::collections::HashMap;
use std::fs;
use std::path::PathBuf;

#[derive(Debug, Serialize, Deserialize)]
pub struct RecipeCollection {
    pub recipes: Vec<Recipe>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Recipe {
    pub id: u32,
    pub title: String,
    pub description: String,
    pub cuisine: String,
    pub ingredients: HashMap<String, Vec<Ingredient>>,
    pub steps: HashMap<String, Vec<String>>,
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Ingredient {
    pub item: String,
    pub quantity: String,
    pub unit: String,
}

pub fn load_dev_recipes() -> RecipeCollection {
    let mut path = PathBuf::from(env!("CARGO_MANIFEST_DIR"));
    path.push("dev_data/recipes.json"); // relative to src-tauri folder

    let data = fs::read_to_string(&path).expect("Failed to read dev recipes");
    serde_json::from_str(&data).expect("Failed to parse recipes JSON")
}
