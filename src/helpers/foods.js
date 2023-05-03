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
