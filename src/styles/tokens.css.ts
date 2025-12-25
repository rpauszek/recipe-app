import { createGlobalTheme, createThemeContract } from "@vanilla-extract/css";

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

    accent: null,
    accentHighlight: null,
    accentDisabled: null,
  },
});

// Create a global theme, which sets the CSS variables on :root
export const lightTheme = createGlobalTheme(":root", vars, {
  color: {
    sidebarBackground: "#F7F5F2",
    sidebarShadow: "rgba(0, 0, 0, 0.2)",
    contentBackground: "#FCFBF9",

    text: "#4A423C",
    // textDimmed: "#7B6F69",

    cardBackground: "#FFFFFF",
    cardBackgroundHovered: "#F2E6DA",
    cardBackgroundSelected: "#E6D8CE",
    cardShadow: "rgba(183,95,60, 0.25)",
    cardBorder: "#D8D2CA",
    cardBorderSelected: "#B75F3C",

    accent: "#D95C3F",
    accentHighlight: "#C14E34",
    accentDisabled: "#E3B7AA",
  },
});
