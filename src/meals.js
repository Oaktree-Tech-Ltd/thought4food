const base = {
  berries: ["fresh blueberries:74"],
  "other fruits": ["apples:182", "bananas:118", "medjool date:24"],
  "cruciferous vegetables": ["kale:40"],
  "other vegetables": [
    "carrots:55",
    "oyster mushrooms:43",
    "shiitake mushrooms:35",
  ],
  seeds: ["ground sprouted flaxseeds:10"],
  beverages: ["activated almond milk:240", "activated almond milk:120"],
  protein: ["protein powder:60"],
};

const meal1 = ["barley:50", "tempeh:100", "sweet potatoes:110"];
const meal2 = ["barley:50", "tofu:140", "sweet potatoes:110"];
const meal3 = ["brown rice:50", "black beans:120"];
const meal4 = ["quinoa:50", "black beans:120"];

const postWork = [
  "activated almond milk:120",
  "protein powder:30",
  "medjool date:24",
  "ground sprouted flaxseeds:10",
  "Optima, sour cherry juice concentrate:25",
];

const sauces = {
  basil_pesto: ["spinash:20", "almonds:15", "pine nuts:15", "brazil nuts:10"],
};

const meals = {
  "tortilla+medium_wrap+mexican_rice+pinto_beans+seasonal_veg+guacamole+verde":
    [
      "medium wrap",
      "mexican rice",
      "pinto beans",
      "seasonal veg",
      "guacamole",
      "verde",
    ],
  "oats+peanut_butter": ["oats:80", "peanut butter:32"],
  "scrambled+tofu+sausages": [
    "nutritional yeast:7.5",
    "tahini:7.5",
    "activated almond milk:120",
    "tofu:140",
    "Richmond, sausages:80",
  ],
  "creamy+potatoes+broccoli": [
    "tahini:15",
    "oatly organic milk:50",
    "potatoes:200",
    "tofu:140",
    "tenderstem broccoli:100",
  ],
  "creamy+gnocchi+broccoli": [
    "tahini:15",
    "Dell Ugo, fresh potato gnocchi:225",
    "tenderstem broccoli:100",
    "oatly organic milk:50",
  ],
  "creamy+protein+chickpea+pasta": [
    "chickpea penne:50",
    "tempeh:100",
    "shiitake mushrooms:70",
    "tahini:15",
    "oatly organic milk:50",
  ],
  pan_bagnat: [
    "sourdough baguettes:125",
    "vine tomatoes:75",
    "Waitrose, sliced artichoke hearts:140",
    "bell peppers:60",
    "red onions:12",
    "Kalamata, olives:15",
    ...sauces["basil_pesto"],
  ],
  yellow_slip_peas: ["yellow split peas:100", "tofu:120", "vine tomatoes:101"],
};

const beverages = {
  afternoon_protein: [
    "protein powder:40",
    "fresh blueberries:60",
    "activated almond milk:240",
    "kale:40",
    "bananas:118",
  ],
};

const snack = [
  "canned chickpeas:82",
  "peanut butter:32",
  "mapple syrup:20",
  "chocolate chips:22",
  "protein powder:10",
];

const oneMealDay1 = {
  "pre workout": [
    "protein powder:40",
    "fresh blueberries:60",
    "activated almond milk:240",
    "kale:40",
    "bananas:118",
    "peanut butter:32",
    "ground sprouted flaxseeds:10",
    "oats:50",
  ],
  "post workout": [
    "activated almond milk:120",
    "protein powder:30",
    "medjool date:24",
    "Optima, sour cherry juice concentrate:25",
  ],
  lunch: [
    "barley:50",
    "brown rice:50",
    "tempeh:100",
    "black beans:120",
    "sweet potatoes:110",
    "shiitake mushrooms:35",
  ],
};

const oneMealDay2 = {
  "pre workout": [
    "protein powder:40",
    "fresh blueberries:60",
    "activated almond milk:240",
    "kale:40",
    "peanut butter:32",
    "bananas:118",
    "ground sprouted flaxseeds:10",
  ],
  "post workout": [
    "activated almond milk:120",
    "protein powder:30",
    "Optima, sour cherry juice concentrate:25",
  ],
  lunch: [
    "chickpea penne:60",
    "tofu:120",
    "shiitake mushrooms:70",
    "nutritional yeast:7.5",
    "tahini:7.5",
    "activated almond milk:120",
  ],
  dinner: ["protein powder:30", "activated almond milk:240"],
};

const sunday25jul = {
  breakfast: [
    "oats:80",
    "almonds:30",
    "protein powder:35",
    "oatly organic milk:40",
    "peanut butter:32",
    "ground sprouted flaxseeds:10",
  ],
  lunch:
    meals[
      "tortilla+medium_wrap+mexican_rice+pinto_beans+seasonal_veg+guacamole+verde"
    ],
  "post workout": [
    "protein powder:40",
    // 'fresh blueberries:60',
    "activated almond milk:240",
    // 'spinash:40',
    // 'bananas:118'
  ],
};

const monday26jul = {
  breakfast: [
    "oats:80",
    "activated almond milk:240",
    "peanut butter:32",
    "ground sprouted flaxseeds:10",
  ],
  lunch:
    meals[
      "tortilla+medium_wrap+mexican_rice+pinto_beans+seasonal_veg+guacamole+verde"
    ],
  "post workout": [
    "protein powder:60",
    "fresh blueberries:60",
    "activated almond milk:240",
    "tofu:115",
    "bananas:118",
    "peanut butter:15",
  ],
};

const tuesday = {
  breakfast: [
    "oats:80",
    "activated almond milk:240",
    "peanut butter:32",
    "ground sprouted flaxseeds:10",
  ],
  lunch: ["vegatsu:100"],
  "post workout": [
    "protein powder:60",
    "fresh blueberries:60",
    // 'activated almond milk:240',
    "spinash:40",
    // 'bananas:118',
  ],
};

const wed = {
  breakfast: [
    "oats:70",
    "activated almond milk:240",
    "peanut butter:32",
    "ground sprouted flaxseeds:10",
  ],
  "post workout": [
    "activated almond milk:240",
    "protein powder:60",
    "peanut butter:32",
    "Optima, sour cherry juice concentrate:25",
    "fresh blueberries:60",
    "bananas:118",
    "kale:40",
  ],
  dinner: [
    "tofu:100",
    "potatoes:450",
    "tenderstem broccoli:215",
    "shiitake mushrooms:80",
  ],
};

const thurs = {
  breakfast: [
    "oats:70",
    "activated almond milk:240",
    "peanut butter:32",
    "ground sprouted flaxseeds:10",
  ],
  "post workout": [
    "protein powder:80",
    "Optima, sour cherry juice concentrate:25",
    "fresh blueberries:60",
    "kale:40",
  ],
  lunch:
    meals[
      "tortilla+medium_wrap+mexican_rice+pinto_beans+seasonal_veg+guacamole+verde"
    ],
};

const fri = {
  breakfast: ["tofu:150"],
  "post workout": [
    "protein powder:80",
    "Optima, sour cherry juice concentrate:25",
    "activated almond milk:240",
  ],
  dinner: [
    "black beans:120",
    "protein powder:3",
    "peanut butter:36",
    "activated almond milk:120",
    "fresh blueberries:60",
    "bananas:118",
    "kale:40",
  ],
};

const sat = {
  breakfast: [
    "sourdough loaf:96",
    "vine tomatoes:100",
    "Heck, sausages:77",
    "Earth Balance, Vegan Butter:28",
  ],
  lunch: [
    "protein powder:36",
    "activated almond milk:240",
    "fresh blueberries:60",
    "kale:40",
    "almonds:30",
    "peanut butter:36",
  ],
  dinner: ["tempeh:100", "brown rice:60", "black beans:117"],
};

const sun = {
  breakfast: ["sourdough loaf:32", "avocado:150", "tempeh:100"],
  lunch: [
    "potatoes:150",
    "vegan tuna:71",
    "vegan mayo:24",
    "bell peppers:119",
    "red onions:70",
  ],
  snack: ["protein powder:32"],
  dinner: ["vegan chilli squid:50", "avant gardn:100"],
};

const mond2aug = {
  "pre workout": ["protein powder:32"],
  breakfast: [
    "oats:70",
    "activated almond milk:240",
    "peanut butter:32",
    "ground sprouted flaxseeds:10",
  ],
  lunch: ["tempeh:100", "brown rice:60"],
  dinner: ["avant gardn:100"],
};

const tues3aug = {
  "pre workout": ["protein powder:32"],
  breakfast: [
    "oats:70",
    "activated almond milk:240",
    "peanut butter:32",
    "ground sprouted flaxseeds:10",
  ],
  lunch: [
    "Dell Ugo, fresh potato gnocchi:300",
    "kale:20",
    "red onions:20",
    "shiitake mushrooms:30",
  ],
  snack: [
    "activated almond milk:360",
    "protein powder:32",
    "fresh blueberries:60",
  ],
  dinner: [
    "tenderstem broccoli:77",
    "bell peppers:42",
    "green beans:56",
    "buckwheat:80",
    "tempeh:100",
  ],
};

const wed4aug = {
  breakfast: [
    "oats:70",
    "activated almond milk:240",
    "peanut butter:32",
    "ground sprouted flaxseeds:10",
  ],
  lunch: ["tenderstem broccoli:77", "bell peppers:42", "buckwheat:80"],
  "post workout": ["activated almond milk:360", "protein powder:32"],
  snack: [],
  dinner: [
    "protein powder:45",
    "activated almond milk:240",
    "fresh blueberries:42",
    "kale:40",
    "peanut butter:40",
  ],
};

const fri5aug = {
  breakfast: [
    "oats:70",
    "activated almond milk:240",
    "peanut butter:32",
    "ground sprouted flaxseeds:10",
  ],
  "pre workout": ["activated almond milk:200", "protein powder:32"],
  lunch: [
    "activated almond milk:200",
    "protein powder:60",
    "Optima, sour cherry juice concentrate:25",
    "fresh blueberries:60",
    "kale:40",
  ],
};

const last = {
  breakfast: ["tofu:100", "sourdough loaf:96"],
  lunch: [
    "no duck donburi:100",
    "mixed mushroom + panko aubergine hirata steamed buns:50",
    "miso caramel ice cream:100",
    "vine tomatoes:100",
  ],
  dinner: [
    "activated almond milk:240",
    "ground sprouted flaxseeds:10",
    "protein powder:60",
    "fresh blueberries:60",
    "kale:40",
  ],
};

const bigDay = {
  "pre-workout": ["activated almond milk:240", "protein powder:30"],
  breakfast: ["oats:80", "peanut butter:32", "ground sprouted flaxseeds:10"],
  lunch: [
    "barley:50",
    "brown rice:50",
    "tempeh:100",
    "black beans:120",
    "sweet potatoes:110",
    "shiitake mushrooms:35",
  ],
  snack: [
    "activated almond milk:240",
    "protein powder:30",
    "fresh blueberries:60",
    "bananas:118",
    "peanut butter:15",
    "kale:40",
  ],
  dinner: [
    "barley:50",
    "brown rice:50",
    "tempeh:100",
    "black beans:120",
    "sweet potatoes:110",
    "tenderstem broccoli:50",
  ],
};

module.exports = {
  base,
  meals,
  postWork,
};
