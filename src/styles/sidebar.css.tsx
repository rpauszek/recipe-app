import { recipe } from "@vanilla-extract/recipes";
import { vars } from "styles/tokens.css";
import { button } from "./base.css";

export const recipeList = recipe({
  base: {
    flex: 1,
    overflowY: "auto",
    padding: "1rem",
    transition: "filter 0.3s ease, opacity 0.3s ease",
  },
  variants: {
    disabled: {
      true: {
        opacity: 0.6,
        pointerEvents: "none",
        filter: "blur(1px) brightness(0.85)",
      },
    },
  },
});

export const newRecipeButton = recipe({
  base: [
    button,
    {
      width: "100%",
      padding: "0.75rem",
    },
  ],
  variants: {
    disabled: {
      true: {
        background: vars.color.primaryDisabled,
        cursor: "default", // maybe disable pointer for disabled
        selectors: {
          "&:hover": {
            background: vars.color.primaryDisabled,
          },
        },
      },
    },
  },
});

export const recipeCard = recipe({
  base: {
    border: "1px solid #ccc",
    borderRadius: 6,
    padding: 10,
    marginBottom: 8,
    cursor: "pointer",
    backgroundColor: "white",
    transition: "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
    selectors: {
      "&:hover:not(.disabled)": {
        backgroundColor: "#f0f0f0",
        transform: "translateX(2px)",
      },
    },
  },
  variants: {
    selected: {
      true: {
        backgroundColor: "#e0f7fa",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
        transform: "scale(1.02)",
        borderColor: "#00acc1",
        selectors: {
          "&:not(.disabled)": {}, // This variant itself represents selected + not disabled, so hover won't apply here.
        },
      },
      false: {},
    },
    disabled: {
      true: {
        opacity: 0.6,
        cursor: "default",
      },
      false: {},
    },
  },
  compoundVariants: [
    {
      variants: { selected: true, disabled: true },
      style: {
        // if selected and disabled, maybe keep opacity and no transform
        backgroundColor: "#e0f7fa",
        opacity: 0.6,
        cursor: "default",
        boxShadow: "none",
        transform: "none",
        borderColor: "#00acc1",
      },
    },
  ],
  defaultVariants: {
    selected: false,
    disabled: false,
  },
});
