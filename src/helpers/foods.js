import { Keys, localDb } from "./db.js";

const db = localDb(Keys.FOODS);
const foods = db.data;

export const addFood = ({ foodName, macro }) => {
  const result = findFood({ foodName, fuzzy: false });
  if (result.length === 0) {
    foods.push({ name: foodName, macro, weight: "100g" });
    db.write();
  } else {
    console.log("Food already in db.");
  }
};

export const findFood = ({ foodName, fuzzy = true }) => {
  if (fuzzy) {
    return foods.filter((food) => food.name.includes(foodName));
  } else {
    return foods.filter((food) => food.name === foodName);
  }
};

export const parseFood = (food) => {
  if (food.split(":").length == 1) {
    return { name: food };
  } else {
    return { name: food.split(":")[0], quantity: food.split(":")[1] };
  }
};

const percentage = (total, value) => (value * 100) / total;

const getProportionalValue = (rawValue, weight) => {
  const value = parseFloat(rawValue);
  return (weight * value) / 100;
};

const macro = (foodItem, weight = 100) => ({
  calories: foodItem
    ? getProportionalValue(foodItem.macro.calories, weight)
    : 0,
  protein: foodItem ? getProportionalValue(foodItem.macro.protein, weight) : 0,
  carbohydrate: foodItem
    ? getProportionalValue(foodItem.macro.carbohydrate, weight)
    : 0,
  fat: foodItem ? getProportionalValue(foodItem.macro.fat, weight) : 0,
});

export const getNutritionInfo = (plan) =>
  Object.keys(plan)
    .map((k) => plan[k])
    .reduce((acc, v) => [...acc, ...v], [])
    .reduce(
      ({ calories, protein, carbohydrate, fat }, v) => {
        if (v.split(":").length == 1) {
          const item = foods.find((food) => food.name === v);
          return {
            calories: calories + parseFloat(item.macro["calories"]),
            protein: protein + parseFloat(item.macro["protein"]),
            carbohydrate: carbohydrate + parseFloat(item.macro["carbohydrate"]),
            fat: fat + parseFloat(item.macro["fat"]),
          };
        } else {
          const [name, weight] = v.split(":");
          const item = foods.find((food) => food.name === name);
          const nut = macro(item, weight);

          return {
            calories: calories + nut["calories"],
            protein: protein + nut["protein"],
            carbohydrate: carbohydrate + nut["carbohydrate"],
            fat: fat + nut["fat"],
          };
        }
      },
      {
        calories: 0,
        protein: 0,
        carbohydrate: 0,
        fat: 0,
      }
    );

export const formatNutritionInfo = (result) => {
  const total = result["protein"] + result["carbohydrate"] + result["fat"];

  return {
    calories: `${result["calories"]}`,
    protein: `${result["protein"]} (${percentage(total, result["protein"])}%)`,
    carbohydrate: `${result["carbohydrate"]} (${percentage(
      total,
      result["carbohydrate"]
    )}%)`,
    fat: `${result["fat"]} (${percentage(total, result["fat"])}%)`,
  };
};
