import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

// Define the contract (CSS variables keys)
export const vars = createThemeContract({
  color: {
    background: null,
    backgroundSecondary: null,
    text: null,
    textDimmed: null,
    primary: null,
    primaryDimmed: null,
    primaryHighlight: null,
    primaryDisabled: null,
    accent: null,
    accentDimmed: null,
    accentHighlight: null,
    accentDisabled: null,
  },
});

// Create a global theme, which sets the CSS variables on :root
export const lightTheme = createGlobalTheme(":root", vars, {
  color: {
    background: "#F0F4F8",
    backgroundSecondary: "#D9E2EC",
    text: "#334E68",
    textDimmed: "#829AB1",
    primary: "#486581",
    primaryDimmed: "#829AB1",
    primaryHighlight: "#2F4C73",
    primaryDisabled: "#e9f2f9",
    accent: "#D0006F",
    accentDimmed: "#F49CA2",
    accentHighlight: "#AB0057",
    accentDisabled: "#f8f2f5",
  },
});
