import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

// Define the contract (CSS variables keys)
export const vars = createThemeContract({
  color: {
    sidebarBackground: null,
    contentBackground: null,

    text: null,
    // textDimmed: null,

    cardBackground: null,
    cardBackgroundHovered: null,
    cardBackgroundSelected: null,
    cardShadow: null,
    cardBorder: null,
    cardBorderSelected: null,

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
    sidebarBackground: "#F7F5F2",
    contentBackground: "#FCFBF9",

    text: "#4A423C",
    // textDimmed: "#7B6F69",

    cardBackground: "#FFFFFF",
    cardBackgroundHovered: "#F2E6DA",
    cardBackgroundSelected: "#E6D8CE",
    cardShadow: "rgba(183,95,60, 0.25)",
    cardBorder: "#D8D2CA",
    cardBorderSelected: "#B75F3C",

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
