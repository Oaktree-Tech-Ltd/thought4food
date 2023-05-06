import { Keys, localDb } from "./db.js";

import { inPantry } from "./pantry.js";
import { parseFood } from "./foods.js";

const db = localDb(Keys.RECIPES);

const emptyRecipe = { ingredients: [], instructions: [] };

export const findRecipe = (title) => {
  return db.data[title]
};

export const addRecipe = (title, recipe) => {
  db.data[title] = recipe;
  db.write();
};

export const parseRecipe = (rawRecipe) =>
  rawRecipe.split("\n").reduce((acc, val) => {
    if (/^\d+./.test(val)) {
      return {
        ...acc,
        instructions: [...acc.instructions, val.replace(/^\d+. /, "")],
      };
    } else if (/^-/.test(val)) {
      return {
        ...acc,
        ingredients: [...acc.ingredients, val.replace(/^- /, "")],
      };
    } else {
      return acc;
    }
  }, emptyRecipe);

export const findAvailableRecipes = (fuzzy) =>
  Object.keys(db.data).reduce((acc, key) => {
    const recipe = db.data[key];

    const matches = recipe.ingredients.reduce((acc, ingredient) => {
      if (inPantry(parseFood(ingredient).name)) {
        return acc + 1;
      } else {
        return acc;
      }
    }, 0);

    if (matches === recipe.ingredients.length) {
      return [...acc, key];
    } else {
      return acc;
    }
  }, []);
