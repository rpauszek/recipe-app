import { Ingredient, IngredientList, RecipeDraft, StepsList, BaseList } from "utils/types";

export function createEmptyIngredient(): Ingredient {
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

export function findListById<T>(
    listArray: BaseList<T>[],
    requestedId: string,
): BaseList<T> {
    const requestedList = listArray.find((list) => list.id === requestedId);
    if (!requestedList) {
        throw new Error(`Unknown group: ${requestedId}`);
    }
    return requestedList;
}

export function updateListArray<T>(
    prevArray: BaseList<T>[],
    updatedList: BaseList<T>,
): BaseList<T>[] {
    const listId = updatedList.id;
  return prevArray.map((list) => (list.id === listId ? updatedList : list));
}

export function addItem<T>(list: BaseList<T>, blankItem: T, index?: number): BaseList<T> {
  const entries: T[] = list.entries;

  let updatedEntries: T[];
  if (index !== undefined) {
    const insertAt = index + 1;
    updatedEntries = [...entries.slice(0, insertAt), blankItem, ...entries.slice(insertAt)];
  } else {
    updatedEntries = [...entries, blankItem];
  }

  return { ...list, entries: updatedEntries };
}

export function removeItem<T>(list: BaseList<T>, index: number): BaseList<T> {
  const entries: T[] = list.entries;
  const updatedEntries: T[] = entries.filter((_, i) => i !== index);
  return { ...list, entries: updatedEntries };
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

export function updateStep(list: StepsList, index: number, value: string): StepsList {
  const updatedEntries = list.entries.map((step, i) => (i === index ? value : step));
  return { ...list, entries: updatedEntries };
}

