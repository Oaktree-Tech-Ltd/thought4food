#!/usr/bin/env node

import { addRecipe, addToPantry, findAvailableRecipes, findFood, parseFood, parseRecipe } from "../src/helpers/index.js";
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
  .option("-r, --recipe <recipe-name>", "recipe name")
  .option("-in-p, --in-pantry", "find in pantry")
  .action((options) => {
    if (options.food) {
      console.log(findFood({ foodName: options.food }).map((food) => food.name));
    } else {
      console.log("no action found...");
    }
  });

program
  .command("add")
  .description("add a food item")
  .option("-f, --food <food-name>", "food name")
  .option("-r, --recipe <recipe-name>", "recipe name")
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

program.parse(process.argv);
