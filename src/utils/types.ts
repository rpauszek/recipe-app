export interface RecipeCollection {
  recipes: Recipe[];
}

export interface Recipe {
  id: string;
  title: string;
  description: string;
  category: string;
  cuisine: string;
  ingredients: IngredientList[];
  steps: StepsList[];
}
export type RecipeDraft = Recipe;

export interface BaseList<T> {
  id: string;
  title: string;
  entries: T[];
}

export type IngredientList = BaseList<Ingredient>
export type StepsList = BaseList<string>

export interface Ingredient {
  item: string;
  quantity: string;
  unit: string;
}

// alias React events
export type InputChangeEvt = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
export type InputKeyBoardEvt = React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>;

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
