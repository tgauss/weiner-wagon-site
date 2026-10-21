export type MeatOption = { meat: string; price: string };

export type MenuItem = {
  name: string;
  desc: string;
  price?: string;
  options?: MeatOption[];
  badge?: string;
  popular?: boolean;
};

export const classics: MenuItem[] = [
  {
    name: "The Works",
    desc: "Pita bread or bun filled with any or all toppings and your choice of meat.",
    options: [
      { meat: "Hot Dog", price: "$7.50" },
      { meat: "Mild Polish", price: "$10.00" },
      { meat: "Hot Link", price: "$10.00" },
    ],
  },
  {
    name: "Killer Works",
    desc: "All toppings plus taco meat. For those who want it all.",
    price: "$10.75",
  },
  {
    name: "Chili Dog",
    popular: true,
    desc: "Bun filled with chili, onions, cheddar cheese, mustard, ketchup, and sour cream.",
    options: [
      { meat: "Hot Dog", price: "$6.50" },
      { meat: "Mild Polish", price: "$8.50" },
      { meat: "Hot Link", price: "$8.50" },
    ],
  },
  {
    name: "Basic Dog",
    desc: "Classic with ketchup, mustard, relish, and onions.",
    options: [
      { meat: "Hot Dog", price: "$4.00" },
      { meat: "Mild Polish", price: "$7.25" },
      { meat: "Hot Link", price: "$7.25" },
    ],
  },
  {
    name: "Cheese Dog",
    desc: "Ketchup, mustard, relish, onions, and melty cheddar cheese.",
    options: [
      { meat: "Hot Dog", price: "$4.00" },
      { meat: "Mild Polish", price: "$7.50" },
      { meat: "Hot Link", price: "$7.50" },
    ],
  },
  {
    name: "Chili",
    desc: "A hearty bowl of chili with cheese, onions, sour cream, and fritos.",
    price: "$5.50",
  },
  {
    name: "Dan & George's Chop Chop",
    desc: "A bowl of chili with chopped hot dog or sausage.",
    price: "$7.50",
  },
];

export const specialties: MenuItem[] = [
  {
    name: "Skip's Favorite",
    popular: true,
    desc: "A hot link with mustard, onions, tomatoes, jalapenos, and sauerkraut.",
    price: "$7.25",
  },
  {
    name: "Denise's Works",
    desc: "Pita with hot dog, chili, relish, pickles, pineapple, cheese, mustard, ketchup, sour cream, and fritos.",
    price: "$7.25",
  },
  {
    name: "Vegetarian Delight",
    desc: "Pocket bread filled with lettuce and your choice of fresh vegetarian toppings, plus chili if requested.",
    price: "$6.00",
    badge: "Vegetarian",
  },
  {
    name: "Jesse Special",
    desc: "Lettuce, taco meat, chili, veggies, cheese, and sour cream piled into a crushed-up bag of Doritos.",
    price: "$7.50",
  },
];

export const southOfBorder: MenuItem[] = [
  {
    name: "Taco Salad",
    desc: "Lettuce topped with taco meat, tomatoes, onions, green peppers, mushrooms, sour cream, cheddar cheese, jalapenos, and chili.",
    price: "$7.50",
  },
  {
    name: "Odessa",
    desc: "A taco salad with your choice of hot dog, mild polish, or hot link sausage.",
    price: "$8.50",
  },
  {
    name: "Chili Pie",
    desc: "A taco salad without taco meat. All the fixings, hold the meat.",
    price: "$5.75",
  },
  {
    name: "Pocket Taco",
    desc: "Taco meat topped with chili and tomatoes, onions, green peppers, mushrooms, sour cream, and cheddar cheese served in pita bread.",
    price: "$7.75",
  },
  {
    name: "Michael Bowl",
    desc: "An Odie Pie with lettuce added. Everything you love, plus a little crunch of green.",
    price: "$9.50",
  },
  {
    name: "Frito Pie",
    desc: "Crispy fritos topped with chili and tomatoes, onions, green peppers, mushrooms, sour cream, and cheddar cheese.",
    price: "$7.50",
  },
  {
    name: "Taco Pie",
    desc: "A Frito Pie with taco meat. Crunch, chili, cheese, and zero regrets.",
    price: "$7.75",
  },
  {
    name: "Odie Pie",
    popular: true,
    desc: "A taco pie with sausage. A local legend in its own right.",
    price: "$9.25",
  },
];

export const toppings = [
  "Mustard",
  "Ketchup",
  "Relish",
  "Onions",
  "Cheddar Cheese",
  "Sour Cream",
  "Jalapenos",
  "Sauerkraut",
  "Tomatoes",
  "Bell Peppers",
  "Mushrooms",
  "Pickles",
  "Pineapple",
  "Lettuce",
  "Chili",
  "Fritos",
  "Mayonnaise",
];

export const extras = [
  {
    name: "Sodas",
    desc: "Pepsi, Coke, Fanta Orange, Diet Pepsi, Diet Coke, Mountain Dew, 7-UP, Root Beer, Diet Root Beer, Dr. Pepper, Diet Dr. Pepper, Big Red, Raspberry Creme, Cherry 7-UP",
    price: "$1.00",
  },
  { name: "Bottled Water", desc: "Cold and simple.", price: "$1.00" },
  {
    name: "Chocolate Chip Cookies",
    desc: "The perfect finish to a wagon lunch.",
    price: "$1.00",
  },
];

export const mostPopular = [...classics, ...specialties, ...southOfBorder].filter(
  (i) => i.popular,
);

export const lowestPrice = (item: MenuItem) =>
  item.price ?? item.options?.[0]?.price;
