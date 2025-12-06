mod recipes;

#[tauri::command]
fn get_recipes() -> String {
    let collection = recipes::load_dev_recipes();
    serde_json::to_string(&collection).expect("Failed to serialize recipes")
}

pub fn run() {
    tauri::Builder::default()
        .plugin(
            tauri_plugin_log::Builder::new()
                .level(log::LevelFilter::Info)
                .build(),
        )
        .invoke_handler(tauri::generate_handler![get_recipes])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
