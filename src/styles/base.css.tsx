import { style } from "@vanilla-extract/css";
import { vars } from "./tokens.css";

export const button = style({
  background: vars.color.primary,
  color: "white",
  border: "none",
  borderRadius: 6,
  padding: "5px",
  fontWeight: 600,
  transition: "background 0.15s ease",

  selectors: {
    "&:hover": {
      background: vars.color.primaryHighlight,
    },
  },
});

export const input = style({
  borderRadius: "5px",
  borderColor: vars.color.primaryDimmed,
  borderWidth: "1px",
  borderStyle: "solid",
  padding: "0.2rem",
});
