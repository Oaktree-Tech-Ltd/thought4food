#!/usr/bin/env node

import {
  addRecipe,
  addRecipeToPlan,
  addToPantry,
  addToPlan,
  findAvailableRecipes,
  findDayPlan,
  findFood,
  findFoodInPlan,
  findRecipe,
  formatNutritionInfo,
  getNutritionInfo,
  parseFood,
  parseRecipe,
  saveDayPlan,
  stringifyRecipe,
  today,
  yesterday,
} from "../src/helpers/index.js";
import { editor, input } from "@inquirer/prompts";

import { Command } from "commander";

const program = new Command();

program.name("foodctl").version("0.0.1");

program
  .command("shake")
  .description("find available recipes")
  .action(() => {
    console.log(findAvailableRecipes());
  });

program
  .command("find")
  .description("find a food item")
  .option("-f, --food <food-name>", "food name")
  .option("-r, --recipe <recipe-title>", "recipe title")
  .option("-in-p, --in-pantry", "find in pantry")
  .action((options) => {
    if (options.food) {
      console.log(
        findFood({ foodName: options.food }).map((food) => food.name)
      );
    } else {
      console.log("no action found...");
    }
  });

program
  .command("add")
  .description("add a food item")
  .option("-f, --food <food-name>", "food name")
  .option("-r, --recipe <recipe-title>", "recipe title")
  .option("-to-p, --to-pantry", "add to pantry")
  .action(async (options) => {
    if (options.food) {
      const food = parseFood(options.food);
      const result = findFood({ foodName: food.name, fuzzy: false });

      if (result.length > 0 && options.toPantry) {
        const expiryDate = await input({
          message: "Enter expiry date",
          default: "n/a",
        });

        addToPantry({ "expiry-date": expiryDate, ...food });
        console.log(`Added ${food.name} to pantry`);
      } else {
        console.error("Unknow food item");
      }
    } else if (options.recipe) {
      const rawRecipe = await editor({
        message: "Enter a recipe",
        default: `- ingredient\n\n1. instruction`,
      });

      addRecipe(options.recipe, parseRecipe(rawRecipe));
      console.log(`Added ${options.recipe}`);
    } else {
      console.log("no action found...");
    }
  });

program
  .command("edit")
  .description("edit recipe")
  .option("-r, --recipe <recipe-title>", "recipe title")
  .action(async (options) => {
    const recipe = findRecipe(options.recipe);
    if (recipe) {
      const rawRecipe = await editor({
        message: "Edit recipe",
        default: stringifyRecipe(recipe),
      });

      addRecipe(options.recipe, { ...recipe, ...parseRecipe(rawRecipe) });
      console.log(`${options.recipe} updated`);
    } else {
      console.log("no action found...");
    }
  });

program
  .command("plan")
  .description("view and manage food plan")
  .option("-p, --profile", "user profile")
  // what to do
  .option("-ni, --show-nutrition-info", "show nutrition info")
  .option("-add-r, --add-recipe <recipe-title>", "add recipe")
  .option("-add-f, --add-food <food-name>", "add food")
  .option(
    "-g, --food-group <food-group>",
    "food group to add food or recipe to"
  )
  .option("-e, --edit", "edit plan")
  // when
  .option("-t, --today", "show nutrition information for today")
  .option("-y, --yesterday", "show nutrition information for yesterday")
  .option("-d, --day <date>", "show nutrition information for a specific day")
  .action(async (options) => {
    const profile = options.profile || "samir";

    const day = (() => {
      if (options.yesterday) {
        return yesterday();
      } else if (options.day) {
        return options.day;
      } else {
        return today();
      }
    })();

    const dayPlan = findDayPlan({ profile, day });

    if (options.edit) {
      const rawDayplan = await editor({
        message: "Edit day plan",
        default: dayPlan ? JSON.stringify(dayPlan, null, 4) : "",
      });

      saveDayPlan({
        profile,
        day,
        plan: rawDayplan !== "" ? JSON.parse(rawDayplan) : {},
      });
      console.log(`Day plan for ${day} saved.`);
    } else if (dayPlan && options.showNutritionInfo) {
      const info = getNutritionInfo(dayPlan);
      console.log(formatNutritionInfo(info));
    } else if (options.addRecipe) {
      const recipe = findRecipe(options.addRecipe);

      if (recipe) {
        addRecipeToPlan({
          profile,
          day,
          foodGroup: options.foodGroup || options.addRecipe,
          foods: recipe.ingredients,
        });
        console.log(`Added ${options.addRecipe} to ${day}`);
      }
    } else if (options.addFood) {
      const foodInfo = findFoodInPlan({ profile, food: options.addFood });

      addToPlan({
        profile,
        day,
        foodGroup: options.foodGroup,
        food: foodInfo[0].food,
      });
      console.log(`Added ${foodInfo[0].food} to ${day}`);
    } else {
      console.log("no action found...");
    }
  });

program.parse(process.argv);
