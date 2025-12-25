import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";
import * as colors from "./colors";

// Define the contract (CSS variables keys)
export const vars = createThemeContract({
  color: {
    sidebarBackground: null,
    contentBackground: null,
    sidebarShadow: null,

    text: null,
    // textDimmed: null,

    cardBackground: null,
    cardBackgroundHovered: null,
    cardBackgroundSelected: null,
    cardShadow: null,
    cardBorder: null,
    cardBorderSelected: null,
    cardBorderHovered: null,

    accent: null,
    accentHighlight: null,
    accentDisabled: null,
  },
});

// Create a global theme, which sets the CSS variables on :root
const accent = colors.terracotta;
const palette = colors.parchment;
export const lightTheme = createGlobalTheme(":root", vars, {
  color: {
    sidebarBackground: palette.sidebar,
    sidebarShadow: palette.shadow,
    contentBackground: palette.content,

    text: palette.text,
    // textDimmed: "#7B6F69",

    cardBackground: "white",
    cardBackgroundHovered: "white",
    cardBackgroundSelected: accent.light,
    cardShadow: colors.hexToRgba(accent.veryDark, 0.25),
    cardBorder: accent.disabled,
    cardBorderSelected: accent.color,
    cardBorderHovered: accent.color,

    accent: accent.color,
    accentHighlight: accent.highlighted,
    accentDisabled: accent.disabled,
  },
});
