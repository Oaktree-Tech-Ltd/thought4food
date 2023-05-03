import { Keys, localDb } from "./db.js";

const db = localDb(Keys.PANTRY);

export const addToPantry = (food) => {
  db.data.items.push(food);
  db.write();
};

export const inPantry = (food) =>
  db.data.items.filter((item) => item.name === food).length > 0;
