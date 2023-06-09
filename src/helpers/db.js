import { JSONFileSync } from "lowdb/node";
import { LowSync } from "lowdb";

export const Keys = {
  RECIPES: "recipes",
  PANTRY: "pantry",
  PLAN: "plan",
  FOODS: "foods",
};

export const localDb = (key) => {
  const db = new LowSync(new JSONFileSync(`./db/${key}.json`), {});
  db.read();
  return db;
};
