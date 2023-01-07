const { getNutrition, logResult } = require("./helpers");

logResult(
  getNutrition({
    breakfast: ["oats:70", "peanut butter:32", "ground sprouted flaxseeds:10"],
    "pre workout": ["protein powder:32"],
    lunch: [
      "barley:50",
      "black beans:120",
      "sweet potatoes:110",
      "shiitake mushrooms:35",
    ],
    afternoon_protein: [
      "protein powder:40",
      "fresh blueberries:60",
      "activated almond milk:240",
      "kale:40",
      "bananas:118",
    ],
    dinner: [
      "barley:50",
      "tempeh:100",
      "sweet potatoes:110",
      "shiitake mushrooms:35",
    ],
  })
);
