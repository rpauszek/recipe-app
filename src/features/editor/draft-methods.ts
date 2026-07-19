import { Ingredient, IngredientList, RecipeDraft, StepsList } from "utils/types";

function createEmptyIngredient(): Ingredient {
  return { item: "", quantity: "", unit: "" };
}

function createEmptyIngredientList(): IngredientList {
  return {
    id: crypto.randomUUID(),
    title: "",
    entries: [createEmptyIngredient()],
  };
}

function createEmptyStepsList(): StepsList {
  return { id: crypto.randomUUID(), title: "", entries: [""] };
}

export function createEmptyRecipe(): RecipeDraft {
  return {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    category: "",
    cuisine: "",
    ingredients: [createEmptyIngredientList()],
    steps: [createEmptyStepsList()],
  };
}

export function findIngredientList(
  ingredients: IngredientList[],
  requestedId: string,
): IngredientList {
  const requestedList: IngredientList | undefined = ingredients.find(
    (list) => list.id === requestedId,
  );

  if (!requestedList) {
    throw new Error(`Unknown ingredient group: ${requestedId}`);
  }

  return requestedList;
}

export function findStepsList(steps: StepsList[], requestedId: string): StepsList {
  const requestedList: StepsList | undefined = steps.find((list) => list.id === requestedId);

  if (!requestedList) {
    throw new Error(`Unknown steps group: ${requestedId}`);
  }

  return requestedList;
}

export function updateIngredients(
  prevIngredients: IngredientList[],
  updatedList: IngredientList,
): IngredientList[] {
  const listId = updatedList.id;
  return prevIngredients.map((list) => (list.id === listId ? updatedList : list));
}

export function updateSteps(prevSteps: StepsList[], updatedList: StepsList): StepsList[] {
  const listId = updatedList.id;
  return prevSteps.map((list) => (list.id === listId ? updatedList : list));
}

/**
 * Updates a single ingredient in the specified ingredient list.
 *
 * @param list The ingredient list holding the ingredient to modify.
 * @param index The position of the ingredient to update.
 * @param field The ingredient field to update.
 * @param value The new value for the field.
 * @returns A new ingredient list with the updated ingredient.
 */
export function updateIngredient(
  list: IngredientList,
  index: number,
  field: keyof Ingredient,
  value: string,
): IngredientList {
  const updatedEntries: Ingredient[] = list.entries.map((ingredient, i) =>
    i === index ? { ...ingredient, [field]: value } : ingredient,
  );

  return { ...list, entries: updatedEntries };
}

export function addIngredient(list: IngredientList, index?: number): IngredientList {
  const entries: Ingredient[] = list.entries;
  const blankIngredient: Ingredient = createEmptyIngredient();

  let updatedEntries: Ingredient[];
  if (index !== undefined) {
    const insertAt = index + 1;
    updatedEntries = [...entries.slice(0, insertAt), blankIngredient, ...entries.slice(insertAt)];
  } else {
    updatedEntries = [...entries, blankIngredient];
  }

  return { ...list, entries: updatedEntries };
}

export function removeIngredient(list: IngredientList, index: number): IngredientList {
  const entries: Ingredient[] = list.entries;
  const updatedEntries: Ingredient[] = entries.filter((_, i) => i !== index);
  return { ...list, entries: updatedEntries };
}

export function updateStep(list: StepsList, index: number, value: string): StepsList {
  const updatedEntries = list.entries.map((step, i) => (i === index ? value : step));
  return { ...list, entries: updatedEntries };
}

export function addStep(list: StepsList, index?: number): StepsList {
  const entries: string[] = list.entries;
  const blankStep = "";

  let updatedEntries: string[];
  if (index !== undefined) {
    const insertAt = index + 1;
    updatedEntries = [...entries.slice(0, insertAt), blankStep, ...entries.slice(insertAt)];
  } else {
    updatedEntries = [...entries, blankStep];
  }

  return { ...list, entries: updatedEntries };
}

export function removeStep(list: StepsList, index: number): StepsList {
  const entries: string[] = list.entries;
  const updatedEntries: string[] = entries.filter((_, i) => i !== index);
  return { ...list, entries: updatedEntries };
}
