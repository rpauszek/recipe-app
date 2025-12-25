import { Color, UiPalette } from "utils/types";

export function hexToRgba(hex: string, alpha: number): string {
  const cleanHex = hex.replace("#", "");
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export const terracotta: Color = {
  color: "#D95C3F",
  highlighted: "#C14E34",
  disabled: "#E3B7AA",
  light: "#FBF1ED",
  dark: "#7A2E1F",
  veryDark: "#3A1A14",
  bright: "#F06A4D",
};

export const deepMustard: Color = {
  color: "#C99E26",
  highlighted: "#B3871E",
  disabled: "#E6D8A3",
  light: "#FBF6E3",
  dark: "#7A5E14",
  veryDark: "#3B2D0A",
  bright: "#E0B63A",
};

export const burntSienna: Color = {
  color: "#B3541E",
  highlighted: "#933F17",
  disabled: "#D9B49A",
  light: "#F7ECE5",
  dark: "#6E3212",
  veryDark: "#36190B",
  bright: "#CC6A33",
};

export const warmTeal: Color = {
  color: "#3A8A89",
  highlighted: "#31716F",
  disabled: "#A3B9B8",
  light: "#EAF4F4",
  dark: "#255C5B",
  veryDark: "#122F2E",
  bright: "#4FB0AE",
};

export const rusticCoral: Color = {
  color: "#E07B69",
  highlighted: "#BD6656",
  disabled: "#EAC6BE",
  light: "#FCEDEA",
  dark: "#8A4336",
  veryDark: "#43211B",
  bright: "#F28D7C",
};

export const parchment: UiPalette = {
  sidebar: "#F7F5F2",
  shadow: "rgba(0, 0, 0, 0.2)",
  content: "#FCFBF9",
  text: "#4A423C",
  textDimmed: "#7B6F69",
};
