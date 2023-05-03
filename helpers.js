const fs = require("fs");

const foods = JSON.parse(fs.readFileSync("./foods.json", "utf8"));

const percentage = (total, value) => (value * 100) / total;

const logResult = (result) => {
  const total = result["protein"] + result["carbohydrate"] + result["fat"];

  console.log({
    calories: `${result["calories"]}`,
    protein: `${result["protein"]} (${percentage(total, result["protein"])}%)`,
    carbohydrate: `${result["carbohydrate"]} (${percentage(
      total,
      result["carbohydrate"]
    )}%)`,
    fat: `${result["fat"]} (${percentage(total, result["fat"])}%)`,
  });
};

const generate = (rawValue, weight) => {
  const value = parseFloat(rawValue);
  return (weight * value) / 100;
};

const macro = (foodItem, weight = 100) => ({
  calories: generate(foodItem.macro.calories, weight),
  protein: generate(foodItem.macro.protein, weight),
  carbohydrate: generate(foodItem.macro.carbohydrate, weight),
  fat: generate(foodItem.macro.fat, weight),
});

const getNutrition = (plan) =>
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

module.exports = {
  logResult,
  getNutrition,
};
