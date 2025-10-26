// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod recipes;

#[tauri::command]
fn get_recipes() -> String {
    let collection = recipes::load_dev_recipes();
    serde_json::to_string(&collection).expect("Failed to serialize recipes")
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_log::Builder::new().build())
        .setup(|_app| {
            // This runs before the window opens
            let recipes_json = recipes::load_dev_recipes();
            log::info!("Loaded dev recipes: {:#?}", recipes_json);
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![get_recipes])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
