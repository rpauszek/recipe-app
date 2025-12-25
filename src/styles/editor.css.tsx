import { style } from "@vanilla-extract/css";
import { vars } from "./tokens.css";


export const recipeEditor = style({
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
});


export const recipeTitleInput = style({
    fontSize: "1.2rem",
    padding: "0.5rem",
    borderRadius: "5px",
    borderColor: vars.color.primaryDimmed,
    borderWidth: "1px",
    borderStyle: "solid",
});


export const comboRow = style({
    display: "flex",
    gap: "1rem",
});


export const selectBase = style({
    flex: 1,
    padding: "0.5rem",
    fontSize: "1rem",
});


export const fixedWidth = style({
    width: 60,
});


export const growWidth = style({
    flexGrow: 1,
})
