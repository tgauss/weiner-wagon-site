export type MeatOption = { meat: string; price: string };

export type MenuItem = {
  name: string;
  /** One or two plain sentences. Lead with what makes it different, then the ingredients. No claims we can't back. */
  desc: string;
  price?: string;
  options?: MeatOption[];
  badge?: string;
  /** Confirmed by the owner as one of the three most-ordered items. */
  popular?: boolean;
  /** Short "what changes" note used where items build on each other (the pies). */
  step?: string;
};

// Classics: the star goes first (primacy), then the builds in a sensible order.
export const classics: MenuItem[] = [
  {
    name: "Chili Dog",
    popular: true,
    desc: "Chili, onions and cheddar over your dog, finished with mustard, ketchup and sour cream. The most-ordered thing on the board.",
    options: [
      { meat: "Hot Dog", price: "$6.50" },
      { meat: "Mild Polish", price: "$8.50" },
      { meat: "Hot Link", price: "$8.50" },
    ],
  },
  {
    name: "The Works",
    desc: "Your dog in a pita or a bun, loaded with any or all of the toppings on the board. Say “everything” or call your own.",
    options: [
      { meat: "Hot Dog", price: "$7.50" },
      { meat: "Mild Polish", price: "$10.00" },
      { meat: "Hot Link", price: "$10.00" },
    ],
  },
  {
    name: "Killer Works",
    desc: "The Works with taco meat piled on top. The most loaded thing the window makes.",
    price: "$10.75",
  },
  {
    name: "Cheese Dog",
    desc: "Ketchup, mustard, relish and onions, topped with cheddar.",
    options: [
      { meat: "Hot Dog", price: "$4.00" },
      { meat: "Mild Polish", price: "$7.50" },
      { meat: "Hot Link", price: "$7.50" },
    ],
  },
  {
    name: "Basic Dog",
    desc: "Ketchup, mustard, relish and onions. Simple on purpose.",
    options: [
      { meat: "Hot Dog", price: "$4.00" },
      { meat: "Mild Polish", price: "$8.00" },
      { meat: "Hot Link", price: "$8.00" },
    ],
  },
  {
    name: "Bowl of Chili",
    desc: "The wagon’s chili in a bowl, topped with cheddar, onions, sour cream and Fritos.",
    price: "$5.50",
  },
  {
    name: "Dan & George’s Chop Chop",
    desc: "A bowl of chili with a hot dog or sausage chopped into it.",
    price: "$7.50",
  },
];

export const specialties: MenuItem[] = [
  {
    name: "Skip’s Favorite",
    popular: true,
    desc: "A hot link with mustard, onions, tomatoes, jalapeños and sauerkraut. Hot, sharp and tangy, and one of the three most-ordered items.",
    price: "$7.25",
  },
  {
    name: "Denise’s Works",
    desc: "A hot dog in pita with chili, cheese, relish, pickles and pineapple, plus mustard, ketchup, sour cream and Fritos. Sweet and savory in one pocket.",
    price: "$7.25",
  },
  {
    name: "Jesse Special",
    desc: "A bag of Doritos crushed and opened, then piled with lettuce, taco meat, chili, veggies, cheese and sour cream. Served in the bag.",
    price: "$7.50",
  },
  {
    name: "Vegetarian Delight",
    desc: "Pocket bread stuffed with lettuce and your pick of the fresh toppings. Chili on request.",
    price: "$6.00",
    badge: "Vegetarian",
  },
];

// South of the Border splits into two short groups so it reads at a glance.
export const pies: MenuItem[] = [
  {
    name: "Frito Pie",
    step: "Start here",
    desc: "Fritos under chili, cheddar and sour cream, with tomatoes, onions, green peppers and mushrooms.",
    price: "$7.50",
  },
  {
    name: "Taco Pie",
    step: "+ taco meat",
    desc: "A Frito Pie with taco meat.",
    price: "$7.75",
  },
  {
    name: "Odie Pie",
    popular: true,
    step: "+ sausage",
    desc: "A Taco Pie with sausage on top. The pie most people order, and one of the three most-ordered items on the board.",
    price: "$9.25",
  },
  {
    name: "Michael Bowl",
    step: "+ lettuce",
    desc: "An Odie Pie with lettuce added. The biggest pie on the board.",
    price: "$9.50",
  },
];

export const saladsAndPockets: MenuItem[] = [
  {
    name: "Taco Salad",
    desc: "Lettuce piled with taco meat, chili and cheddar, then tomatoes, onions, green peppers, mushrooms, jalapeños and sour cream.",
    price: "$7.50",
  },
  {
    name: "Odessa",
    desc: "The Taco Salad with your choice of hot dog, mild Polish or hot link.",
    price: "$8.50",
  },
  {
    name: "Chili Pie",
    desc: "The Taco Salad without the taco meat. Lettuce, chili, cheddar and all the fixings.",
    price: "$5.75",
  },
  {
    name: "Pocket Taco",
    desc: "Taco meat and chili in a pita with tomatoes, onions, green peppers, mushrooms, cheddar and sour cream. The salad, made to carry.",
    price: "$7.75",
  },
];

export const southOfBorder: MenuItem[] = [...pies, ...saladsAndPockets];

export const toppings = [
  "Mustard",
  "Ketchup",
  "Relish",
  "Onions",
  "Cheddar Cheese",
  "Sour Cream",
  "Jalapeños",
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
    desc: "Pepsi, Coke, Fanta Orange, Diet Pepsi, Diet Coke, Mountain Dew, 7-UP, Root Beer, Diet Root Beer, Dr. Pepper, Diet Dr. Pepper, Big Red, Raspberry Creme, Cherry 7-UP.",
    price: "$1.00",
  },
  { name: "Bottled Water", desc: "Cold.", price: "$1.00" },
  { name: "Chocolate Chip Cookies", desc: "A dollar well spent.", price: "$1.00" },
];

export const mostPopular = [...classics, ...specialties, ...southOfBorder].filter(
  (i) => i.popular,
);

export const lowestPrice = (item: MenuItem) =>
  item.price ?? item.options?.[0]?.price;

/** "$7.50" → "7.50". Menus that drop the currency sign read as food first, price second. */
export const bare = (price?: string) => price?.replace(/^\$/, "") ?? "";
