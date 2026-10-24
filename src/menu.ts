export type Sandwich = {
  name: string;
  price?: string;
  description: string;
  note?: string;
  service?: string;
};

export const favoriteSandwiches: Sandwich[] = [
  {
    name: "Swiss Reuben",
    price: "$10",
    description:
      "Corned beef, sauerkraut, Swiss cheese, Russian dressing, and house-made Swedish rye bread.",
    service: "Cold or grilled.",
  },
  {
    name: "The Cajun Turkey",
    price: "$9",
    description:
      "Cajun turkey, Havarti cheese, sweet and sour sauce, and house-made sourdough bread.",
    service: "Cold or grilled.",
  },
  {
    name: "Turkey Bacon Avocado",
    price: "$10",
    description:
      "Oven-roasted turkey, bacon, provolone cheese, house-made ranch dressing, avocado, lettuce, tomato, and house-made whole wheat bread.",
    service: "Cold or grilled.",
  },
  {
    name: "Chicken Bacon Ranch",
    price: "$10",
    description:
      "Garlic chicken strips, bacon, Havarti cheese, house-made ranch dressing, lettuce, and tomato.",
    service: "Cold or grilled.",
  },
  {
    name: "Ham and Swiss",
    price: "$9",
    description:
      "Smoked Virginia ham, Swiss cheese, sweet and spicy mustard, and house-made sourdough bread.",
    service: "Cold or grilled.",
  },
  {
    name: "The Italian Sub",
    price: "$10",
    description:
      "Smoked ham, salami, pepperoni, provolone cheese, house-made oil and herb dressing, and a house-made Italian parmesan sub.",
    service: "Cold or grilled.",
  },
  {
    name: "Farmhouse Special",
    price: "$10",
    description:
      "Oven-roasted turkey, roast beef, salami, farmer’s cheese, lettuce, tomato, mayo, honey mustard, and house-made whole wheat bread.",
    service: "Cold or grilled.",
  },
];

export const simpleSandwiches: Sandwich[] = [
  {
    name: "Make Your Own",
    price: "$9",
    description: "Choose the bread, meat, cheese, vegetables, and sauce.",
  },
  {
    name: "BLT",
    price: "$9",
    description:
      "Bacon, lettuce, tomato, cheddar cheese, mayo, and house-made sourdough bread.",
  },
  {
    name: "Chicken Salad",
    description:
      "House-made chicken salad, lettuce, tomato, and house-made sourdough bread.",
  },
  {
    name: "Grilled Cheese",
    price: "$5",
    description: "Two slices of cheese on house-made sourdough bread.",
    note: "Add bacon for $4.",
  },
];

export const buildYourOwn = [
  {
    label: "Bread",
    items: [
      "Sourdough",
      "Whole wheat",
      "Swedish rye",
      "Italian parmesan sub bun",
      "White sub bun",
      "Wheat sub bun",
    ],
  },
  {
    label: "Meat",
    items: [
      "Smoked Virginia ham",
      "Oven-roasted turkey",
      "Cajun turkey",
      "Sweet Lebanon bologna",
      "Corned beef",
      "Roast beef",
      "Pepperoni",
      "Salami",
    ],
  },
  {
    label: "Cheese",
    items: ["American", "Mild cheddar", "Havarti", "Swiss", "Provolone", "Farmer’s"],
  },
  {
    label: "Vegetables",
    items: [
      "Lettuce",
      "Tomato",
      "Green pepper",
      "Onion",
      "Banana peppers",
      "Pickles",
      "Black olives",
      "Jalapeño",
    ],
  },
  {
    label: "House-made sauces",
    items: ["Ranch", "Russian dressing", "Southwest dressing", "Oil and herb dressing"],
  },
  {
    label: "Other",
    items: ["Mayo", "Mustard"],
  },
];

export const friedPieFlavors = [
  "Peach",
  "Apricot",
  "Apple",
  "Blueberry",
  "Raspberry",
  "Blackberry",
  "Triple berry",
  "Chocolate",
  "Pecan",
  "Coconut",
];
