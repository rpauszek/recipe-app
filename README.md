# Recipe collector

Local application for editing, organizing, and viewing recipes.

## Tech stack

- Tauri / Rust
- Typescript
- React

### Scripts

To run the application in development mode use

```bash
npm run tauri dev
```

To build the production app use

```bash
npm run tauri build
```

The resulting artifact is found under `src-tauri/target/release/bundle/macos`

## Development

### Logging

Within the Tauri app, `console.log(...)` from Typescript is swallowed. To properly log items to the CLI use

```typescript
import { logger } from "utils/logger";

logger.info("info goes here")
logger.warning("a warning")
```

### Path aliases

Within the Typescript environment, the following path aliases are defined:

```
app      -> src/app/*
features -> src/features/*
styles   -> src/styles/*
utils    -> src/utils/*
```

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)
