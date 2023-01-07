#!/usr/bin/env node

const blessed = require("blessed");
const fs = require("fs");

const screen = blessed.screen({
  smartCSR: true,
});

const foods = JSON.parse(fs.readFileSync("./foods.json", "utf8"));
const items = foods.map((food) => food.name);

const list = blessed.list({
  width: "100%",
  height: "45%",
  items: items,
  label: "Foods",
});

screen.append(list);

screen.key(["escape", "q", "C-c"], function (ch, key) {
  return process.exit(0);
});
