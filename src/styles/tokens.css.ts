import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";
import * as colors from "./colors";

// Define the contract (CSS variables keys)
export const vars = createThemeContract({
  ui: {
    background: null,
    text: null,
    // textDimmed: null,
  },
  sidebar: {
    background: null,
    shadow: null,
  },
  card: {
    background: null,
    backgroundHovered: null,
    backgroundSelected: null,
    shadow: null,
    border: null,
    borderSelected: null,
    borderHovered: null,
  },
  primary: {
    color: null,
    highlighted: null,
    disabled: null,
    light: null,
    dark: null,
    veryDark: null,
    bright: null,
  },
  accent: {
    color: null,
    highlighted: null,
    disabled: null,
    light: null,
    dark: null,
    veryDark: null,
    bright: null,
  },
});

// Create a global theme, which sets the CSS variables on :root
const primary = colors.terracotta;
const accent = colors.terracotta;
const palette = colors.parchment;
export const lightTheme = createGlobalTheme(":root", vars, {
  ui: {
    background: palette.content,
    text: palette.text,
    // textDimmed: "#7B6F69",
  },
  sidebar: {
    background: palette.sidebar,
    shadow: colors.hexToRgba(palette.shadow, 0.2),
  },
  card: {
    background: "white",
    backgroundHovered: "white",
    backgroundSelected: primary.light,
    shadow: colors.hexToRgba(primary.veryDark, 0.25),
    border: primary.disabled,
    borderSelected: primary.color,
    borderHovered: primary.color,
  },
  primary: primary,
  accent: accent,
});
