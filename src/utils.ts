// src/utils/logger.ts
import * as Log from "@tauri-apps/plugin-log";

export const logger = {
    info: (msg: string) => Log.info(msg),
    warn: (msg: string) => Log.warn(msg),
    error: (msg: string) => Log.error(msg),
    debug: (msg: string) => Log.debug(msg),
    trace: (msg: string) => Log.trace(msg),
};

export const cuisineFlags: Record<string, string> = {
    italian: "🇮🇹",
    french: "🇫🇷",
    spanish: "🇪🇸",
    dutch: "🇳🇱",
    polish: "🇵🇱",
    thai: "🇹🇭",
    japanese: "🇯🇵",
    indian: "🇮🇳",
    chinese: "🇨🇳",
    korean: "🇰🇷",
    american: "🇺🇸",
    mexican: "🇲🇽",
    brazilian: "🇧🇷",
};
