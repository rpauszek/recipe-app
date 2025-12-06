import { recipe } from '@vanilla-extract/recipes';

export const button = recipe({
  base: {
    width: '100%',
    background: '#059669',
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
        background: '#f0f0f0',
        cursor: 'default', // maybe disable pointer for disabled
      },
      false: {
        selectors: {
          '&:hover': {
            background: '#047857',
          },
        },
        cursor: 'pointer',
      },
    },
  },
});
