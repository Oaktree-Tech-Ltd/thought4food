import { Keys, localDb } from "./db.js";

import { parseFood } from "./foods.js";

const db = localDb(Keys.PLAN);

export const findDayPlan = ({ profile, day }) => {
  return db.data[profile][day];
};

export const saveDayPlan = ({ profile, day, plan }) => {
  db.data[profile][day] = plan;
  db.write();
};

export const addToPlan = ({ profile, day, foodGroup, food }) => {
  const plan = findDayPlan({ profile, day });
  
  if (plan) {
    plan[foodGroup] = [...plan[foodGroup], food];
  } else {
    db.data[profile][day] = {};
    db.data[profile][day][foodGroup] = [food];
  }

  db.write();
};

export const addRecipeToPlan = ({ profile, day, foodGroup, foods }) => {
  const plan = findDayPlan({ profile, day });
  
  if (plan && plan[foodGroup]) {
    plan[foodGroup] = [...plan[foodGroup], ...foods];
  } else if (plan) {
    plan[foodGroup] = [...foods];
  } else {
    db.data[profile][day] = {};
    db.data[profile][day][foodGroup] = [...foods];
  }

  db.write();
};

export const findFoodInPlan = ({ profile, food }) => {
  const plan = db.data[profile];
  const foodList = Object.keys(plan)
    .reduce(
      (acc, day) => [
        ...acc,
        ...Object.keys(plan[day]).map((groupKey) => plan[day][groupKey]),
      ],
      []
    )
    .reduce((acc, foodItems) => [...acc, ...foodItems], [])
    .filter((foodItem) => parseFood(foodItem).name === food)
    .reduce((acc, foodItem) => {
      if (acc[foodItem]) {
        acc[foodItem] += 1;
      } else {
        acc[foodItem] = 1;
      }
      return acc;
    }, {});

  return Object.keys(foodList)
    .map((key) => ({ ocurrences: foodList[key], food: key }))
    .sort((a, b) => b.ocurrences - a.ocurrences);
};
