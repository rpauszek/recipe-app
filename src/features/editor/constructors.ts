import { Ingredient, RecipeDraft } from "utils/types";

export function createEmptyIngredient(): Ingredient {
  return { item: "", quantity: "", unit: "" };
}

export function createEmptyRecipe(): RecipeDraft {
  return {
    title: "",
    description: "",
    category: "",
    cuisine: "",
    ingredients: {
      main: [createEmptyIngredient()],
    },
    steps: {
      main: [""],
    },
  };
}
