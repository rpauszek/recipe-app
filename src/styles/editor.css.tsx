import { style } from "@vanilla-extract/css";
import { input } from "./base.css";

export const recipeEditor = style({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

export const recipeTitleInput = style([
  input,
  {
    fontSize: "1.2rem",
    padding: "0.5rem",
  },
]);

export const comboRow = style({
  display: "flex",
  gap: "1rem",
});

export const selectBase = style({
  flex: 1,
});

export const fixedWidth = style([
  input,
  {
    width: 60,
  },
]);

export const growWidth = style([
  input,
  {
    flexGrow: 1,
  },
]);
