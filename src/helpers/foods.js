import fs from "fs";

const foods = JSON.parse(fs.readFileSync("./db/foods.json", "utf8"));

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
  calories: getProportionalValue(foodItem.macro.calories, weight),
  protein: getProportionalValue(foodItem.macro.protein, weight),
  carbohydrate: getProportionalValue(foodItem.macro.carbohydrate, weight),
  fat: getProportionalValue(foodItem.macro.fat, weight),
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
