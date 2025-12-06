import { recipe } from '@vanilla-extract/recipes';
import { vars } from 'styles/tokens.css';

export const button = recipe({
  base: {
    width: '100%',
    background: vars.color.primary,
    color: 'white',
    border: 'none',
    borderRadius: 6,
    padding: '0.75rem',
    fontWeight: 600,
    transition: 'background 0.15s ease',
    // cursor: 'pointer', // uncomment if you want pointer cursor by default
  },
  variants: {
    disabled: {
      true: {
        background: vars.color.primaryDisabled,
        cursor: 'default', // maybe disable pointer for disabled
      },
      false: {
        selectors: {
          '&:hover': {
            background: vars.color.primaryHighlight,
          },
        },
        cursor: 'pointer',
      },
    },
  },
});
