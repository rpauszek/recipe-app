import { style } from "@vanilla-extract/css";
import { vars } from "styles/tokens.css";

export const ingredientsList = style({
  display: "grid",
  gridTemplateColumns: "auto 1fr", // qty | unit | name
  gap: "4px 8px",
  alignItems: "baseline",
});

export const ingredientRow = style({
  display: "contents", // flatten into parent grid
});

export const quantity = style({
  textAlign: "right",
  fontWeight: "bold",
  color: vars.color.text,
});

export const item = style({
  textAlign: "left",
});
