export interface Ingredient {
  item: string;
  quantity: string;
  unit: string;
}

export interface Recipe {
  id: number;
  title: string;
  description: string;
  cuisine: string;
  ingredients: Record<string, Ingredient[]>;
  steps: Record<string, string[]>;
}

export interface RecipeCollection {
  recipes: Recipe[];
}

// alias React events
export type InputChangeEvt = React.ChangeEvent<HTMLInputElement>;
export type InputKeyBoardEvt = React.KeyboardEvent<HTMLInputElement>;

// styling interfaces
export interface Color {
  color: string;
  highlighted: string;
  disabled: string;
  light: string;
  dark: string;
  veryDark: string;
  bright: string;
}

export interface UiPalette {
  sidebar: string;
  shadow: string;
  content: string;
  text: string;
  textDimmed: string;
}
