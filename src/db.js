import { JSONFileSync } from "lowdb/node";
import { LowSync } from "lowdb";
import fs from "fs";

const pantryAdapter = new JSONFileSync("./db/pantry.json");
const pantryDb = new LowSync(pantryAdapter, {});

pantryDb.read();

const foods = JSON.parse(fs.readFileSync("./db/foods.json", "utf8"));

export const findFood = ({ foodName, fuzzy = true }) => {
  if (fuzzy) {
    return foods.filter((food) => food.name.includes(foodName));
  } else {
    return foods.filter((food) => food.name === foodName);
  }
};

export const addToPantry = (food) => {
  pantryDb.data.items.push(food);
  pantryDb.write();
};

export const parseFoodName = (food) => {
  if (food.split(":").length == 1) {
    return food;
  } else {
    return food.split(":")[0];
  }
};
