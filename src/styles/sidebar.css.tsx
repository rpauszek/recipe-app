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
      backgroundColor: vars.accent.color,
      width: "100%",
      padding: "0.75rem",
      selectors: {
        "&:hover": {
          background: vars.accent.highlighted,
        },
      },
    },
  ],
  variants: {
    disabled: {
      true: {
        background: vars.accent.disabled,
        cursor: "default", // maybe disable pointer for disabled
        selectors: {
          "&:hover": {
            background: vars.accent.disabled,
          },
        },
      },
    },
  },
});

export const recipeCard = recipe({
  base: {
    border: `1px solid ${vars.card.border}`,
    borderRadius: 6,
    padding: 10,
    marginBottom: 8,
    cursor: "pointer",
    backgroundColor: vars.card.background,
    transition: "background-color 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease",
    selectors: {
      "&:hover:not(.disabled)": {
        backgroundColor: vars.card.backgroundHovered,
        borderColor: vars.card.borderHovered,
        transform: "translateX(2px)",
      },
    },
  },
  variants: {
    selected: {
      true: {
        backgroundColor: vars.card.backgroundSelected,
        boxShadow: `0 4px 12px ${vars.card.shadow}`,
        transform: "scale(1.02)",
        borderColor: vars.card.borderSelected,
        selectors: {
          "&:not(.disabled)": {}, // This variant itself represents selected + not disabled, so hover won't apply here.
          "&:hover:not(.disabled)": {
            backgroundColor: vars.card.backgroundHovered,
            transform: "translateX(2px)",
          },
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
        opacity: 0.6,
        cursor: "default",
        boxShadow: "none",
        transform: "none",
      },
    },
  ],
  defaultVariants: {
    selected: false,
    disabled: false,
  },
});
