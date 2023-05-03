#!/usr/bin/env node

import { addToPantry, findFood, parseFoodName } from "../src/db.js";

import { Command } from "commander";

const program = new Command();

program.name("foodctl").version("0.0.1");

program
  .command("find")
  .description("find a food item")
  .option("-f, --food <food-name>", "food name")
  .option("-in-p, --in-pantry", "find in pantry")
  .action((options) => {
    console.log(findFood({ foodName: options.food }).map((food) => food.name));
  });

program
  .command("add")
  .description("add a food item")
  .option("-f, --food <food-name>", "food name")
  .option("-to-p, --to-pantry", "add to pantry")
  .action((options) => {
    const food = options.food;
    const result = findFood({ foodName: parseFoodName(food), fuzzy: false });

    if (result.length > 0 && options.toPantry) {
      addToPantry(food);
      console.log(`Added ${food} to pantry`);
    } else {
      console.error("Unknow food item");
    }
  });

program.parse(process.argv);
