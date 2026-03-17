import { useState } from "react";

type MeatOption = { meat: string; price: string };

type MenuItem = {
  name: string;
  desc: string;
  price?: string;
  options?: MeatOption[];
  badge?: string;
};

function PriceTag({ price }: { price: string }) {
  return (
    <span className="inline-block bg-wagon-mustard/20 text-wagon-text font-bold px-3 py-1 rounded-full text-sm">
      {price}
    </span>
  );
}

function MenuCard({
  item,
  accentColor,
}: {
  item: MenuItem;
  accentColor: "red" | "green" | "mustard";
}) {
  const colorMap = {
    red: "text-wagon-red hover:border-wagon-red",
    green: "text-wagon-green hover:border-wagon-green",
    mustard: "text-wagon-mustard hover:border-wagon-mustard",
  };

  return (
    <div
      className={`bg-white p-6 lg:p-8 rounded-2xl shadow-sm border-2 border-wagon-bg-alt transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden group ${colorMap[accentColor]}`}
    >
      {item.badge && (
        <span className="absolute top-4 right-4 bg-wagon-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {item.badge}
        </span>
      )}

      <h3
        className={`font-display text-3xl mb-3 ${accentColor === "red" ? "text-wagon-red" : accentColor === "green" ? "text-wagon-green" : "text-wagon-mustard"} ${item.badge ? "pr-28" : ""}`}
      >
        {item.name}
      </h3>

      <p className="text-wagon-text/70 font-medium mb-4 leading-relaxed">
        {item.desc}
      </p>

      {item.price && (
        <div className="pt-2">
          <PriceTag price={item.price} />
        </div>
      )}

      {item.options && (
        <div className="pt-3 space-y-2">
          {item.options.map((opt) => (
            <div
              key={opt.meat}
              className="flex items-center justify-between bg-wagon-bg/60 px-4 py-2 rounded-xl"
            >
              <span className="font-semibold text-wagon-text/80 text-sm">
                {opt.meat}
              </span>
              <PriceTag price={opt.price} />
            </div>
          ))}
        </div>
      )}

      {/* Hover accent line */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-1 ${accentColor === "red" ? "bg-wagon-red" : accentColor === "green" ? "bg-wagon-green" : "bg-wagon-mustard"} transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left`}
      ></div>
    </div>
  );
}

const classics: MenuItem[] = [
  {
    name: "The Works",
    desc: "Pita bread or bun filled with any or all toppings and your choice of meat.",
    options: [
      { meat: "Hot Dog", price: "$5.00" },
      { meat: "Mild Polish", price: "$6.00" },
      { meat: "Hot Link", price: "$6.00" },
    ],
  },
  {
    name: "Killer Works",
    desc: "All toppings plus taco meat. For those who want it all.",
    price: "$7.00",
  },
  {
    name: "Chili Dog",
    desc: "Bun filled with chili, onions, cheddar cheese, mustard, ketchup, and sour cream.",
    options: [
      { meat: "Hot Dog", price: "$4.00" },
      { meat: "Mild Polish", price: "$5.25" },
      { meat: "Hot Link", price: "$5.25" },
    ],
  },
  {
    name: "Basic Dog",
    desc: "Classic with ketchup, mustard, relish, and onions.",
    options: [
      { meat: "Hot Dog", price: "$3.00" },
      { meat: "Mild Polish", price: "$4.50" },
      { meat: "Hot Link", price: "$4.50" },
    ],
  },
  {
    name: "Cheese Dog",
    desc: "Ketchup, mustard, relish, onions, and melty cheddar cheese.",
    options: [
      { meat: "Hot Dog", price: "$3.25" },
      { meat: "Mild Polish", price: "$4.75" },
      { meat: "Hot Link", price: "$4.75" },
    ],
  },
  {
    name: "Chili",
    desc: "A hearty bowl of chili with cheese, onions, sour cream, and fritos.",
    price: "$3.50",
  },
  {
    name: "Dan & George's Chop Chop",
    desc: "A bowl of chili with chopped hot dog or sausage.",
    price: "$4.75",
  },
];

const specialties: MenuItem[] = [
  {
    name: "Skip's Favorite",
    desc: "A hot link with mustard, onions, tomatoes, jalapenos, and sauerkraut.",
    price: "$6.00",
  },
  {
    name: "Denise's Works",
    desc: "Pita with hot dog, chili, relish, pickles, pineapple, cheese, mustard, ketchup, sour cream, and fritos.",
    price: "$6.25",
  },
  {
    name: "Vegetarian Delight",
    desc: "Pocket bread filled with lettuce and your choice of fresh vegetarian toppings, plus chili if requested.",
    price: "$6.50",
    badge: "Vegetarian",
  },
];

const southOfBorder: MenuItem[] = [
  {
    name: "Taco Salad",
    desc: "Lettuce topped with taco meat, tomatoes, onions, green peppers, mushrooms, sour cream, cheddar cheese, jalapenos, and chili.",
    price: "$6.50",
  },
  {
    name: "Odessa",
    desc: "A taco salad with your choice of hot dog, mild polish, or hot link sausage.",
    price: "$7.00",
  },
  {
    name: "Chili Pie",
    desc: "A taco salad without taco meat. All the fixings, hold the meat.",
    price: "$5.50",
  },
  {
    name: "Pocket Taco",
    desc: "Taco meat topped with chili and tomatoes, onions, green peppers, mushrooms, sour cream, and cheddar cheese served in pita bread.",
    price: "$6.50",
  },
  {
    name: "Frito Pie",
    desc: "Crispy fritos topped with chili and tomatoes, onions, green peppers, mushrooms, sour cream, and cheddar cheese.",
    price: "$6.75",
  },
  {
    name: "Taco Pie",
    desc: "A Frito Pie with taco meat. Crunch, chili, cheese, and zero regrets.",
    price: "$7.00",
  },
  {
    name: "Odie Pie",
    desc: "A taco pie with sausage. A local legend in its own right.",
    price: "$8.00",
  },
];

const toppings = [
  "Mustard",
  "Ketchup",
  "Relish",
  "Onions",
  "Cheddar Cheese",
  "Sour Cream",
  "Jalapenos",
  "Sauerkraut",
  "Tomatoes",
  "Green Peppers",
  "Mushrooms",
  "Pickles",
  "Pineapple",
  "Lettuce",
  "Chili",
  "Fritos",
];

type Section = "classics" | "specialties" | "south" | "extras";

export function Menu() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  const sections: { id: Section; label: string; emoji: string }[] = [
    { id: "classics", label: "Classics", emoji: "🌭" },
    { id: "specialties", label: "Wagon Specialties", emoji: "⭐" },
    { id: "south", label: "South of the Border", emoji: "🌮" },
    { id: "extras", label: "Toppings & Drinks", emoji: "🧀" },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-wagon-red text-white py-24 lg:py-32 border-b-8 border-wagon-mustard overflow-hidden">
        <div className="absolute inset-0 bg-stripes opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6 drop-shadow-md">
            Come <span className="text-wagon-mustard">Hungry</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
            Classic dogs, loaded favorites, chili creations, pocket bread
            specialties, and lunch that does not mess around.
          </p>
          <p className="mt-4 text-white/60 font-semibold text-sm uppercase tracking-wider">
            All items $3 – $8
          </p>
        </div>
      </section>

      {/* Sticky Category Nav */}
      <div className="sticky top-0 z-40 bg-wagon-bg border-b-2 border-wagon-bg-alt shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                onClick={() => setActiveSection(s.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full font-bold text-sm whitespace-nowrap transition-all ${
                  activeSection === s.id
                    ? "bg-wagon-green text-white shadow-md"
                    : "bg-white text-wagon-text/70 hover:bg-wagon-green/10 hover:text-wagon-green border border-wagon-bg-alt"
                }`}
              >
                <span>{s.emoji}</span> {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 lg:py-24 bg-wagon-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {/* Classics */}
          <div id="classics" className="scroll-mt-24 space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-wagon-red/10 text-wagon-red px-4 py-2 rounded-full font-bold text-sm">
                <span>🌭</span> The Originals
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-wagon-green">
                Classics
              </h2>
              <p className="text-lg text-wagon-text/80 font-medium max-w-2xl mx-auto">
                The tried-and-true favorites that made the wagon a local staple.
                Choose your meat, pile on the toppings.
              </p>
              <div className="w-24 h-1 bg-wagon-mustard mx-auto rounded-full mt-4"></div>
            </div>

            {/* Feature: The Works highlight */}
            <div className="bg-wagon-green rounded-[2rem] p-8 lg:p-12 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/5 rounded-full -mr-16 -mt-16"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full -ml-8 -mb-8"></div>
              <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-2/3 space-y-4">
                  <span className="text-wagon-mustard font-bold text-sm uppercase tracking-wider">
                    Fan Favorite
                  </span>
                  <h3 className="font-display text-4xl lg:text-5xl text-white">
                    The Works
                  </h3>
                  <p className="text-white/80 font-medium text-lg leading-relaxed">
                    Pita bread or bun filled with any or all toppings and your
                    choice of meat. The one that started it all.
                  </p>
                </div>
                <div className="lg:w-1/3 space-y-3 w-full">
                  {[
                    { meat: "Hot Dog", price: "$5.00" },
                    { meat: "Mild Polish", price: "$6.00" },
                    { meat: "Hot Link", price: "$6.00" },
                  ].map((opt) => (
                    <div
                      key={opt.meat}
                      className="flex items-center justify-between bg-white/10 px-5 py-3 rounded-xl backdrop-blur-sm"
                    >
                      <span className="font-semibold">{opt.meat}</span>
                      <span className="font-bold text-wagon-mustard text-lg">
                        {opt.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {classics.slice(1).map((item, i) => (
                <MenuCard key={i} item={item} accentColor="red" />
              ))}
            </div>
          </div>

          {/* Wagon Specialties */}
          <div id="specialties" className="scroll-mt-24 space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-wagon-green/10 text-wagon-green px-4 py-2 rounded-full font-bold text-sm">
                <span>⭐</span> House Originals
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-wagon-green">
                Wagon Specialties
              </h2>
              <p className="text-lg text-wagon-text/80 font-medium max-w-2xl mx-auto">
                The creative side of the menu. Named after the people who
                inspired them.
              </p>
              <div className="w-24 h-1 bg-wagon-mustard mx-auto rounded-full mt-4"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {specialties.map((item, i) => (
                <MenuCard key={i} item={item} accentColor="green" />
              ))}
            </div>
          </div>

          {/* South of the Border */}
          <div id="south" className="scroll-mt-24 space-y-12">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center gap-2 bg-wagon-mustard/20 text-wagon-text px-4 py-2 rounded-full font-bold text-sm">
                <span>🌮</span> Beyond the Dog
              </div>
              <h2 className="font-display text-4xl sm:text-5xl text-wagon-red">
                South of the Border
              </h2>
              <p className="text-lg text-wagon-text/80 font-medium max-w-2xl mx-auto">
                Proof that the wagon does way more than hot dogs. Salads, pies,
                pockets, and piles of flavor.
              </p>
              <div className="w-24 h-1 bg-wagon-mustard mx-auto rounded-full mt-4"></div>
            </div>

            {/* Pie Builder Visual */}
            <div className="bg-wagon-bg-alt rounded-[2rem] p-8 lg:p-10 border-4 border-wagon-mustard/30 shadow-md">
              <h3 className="font-display text-2xl text-wagon-green text-center mb-6">
                The Pie Family
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-white p-5 rounded-2xl text-center space-y-2 border-2 border-transparent hover:border-wagon-mustard transition-colors">
                  <span className="font-display text-2xl text-wagon-mustard">
                    Frito Pie
                  </span>
                  <p className="text-sm text-wagon-text/60 font-medium">
                    Fritos + chili + all the fixings
                  </p>
                  <p className="font-bold text-wagon-green text-lg">$6.75</p>
                </div>
                <div className="bg-white p-5 rounded-2xl text-center space-y-2 border-2 border-wagon-mustard shadow-sm relative">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-wagon-red text-white text-xs font-bold px-3 py-1 rounded-full">
                    + taco meat
                  </span>
                  <span className="font-display text-2xl text-wagon-mustard">
                    Taco Pie
                  </span>
                  <p className="text-sm text-wagon-text/60 font-medium">
                    Frito Pie + taco meat
                  </p>
                  <p className="font-bold text-wagon-green text-lg">$7.00</p>
                </div>
                <div className="bg-white p-5 rounded-2xl text-center space-y-2 border-2 border-transparent hover:border-wagon-mustard transition-colors relative">
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-wagon-red text-white text-xs font-bold px-3 py-1 rounded-full">
                    + sausage
                  </span>
                  <span className="font-display text-2xl text-wagon-mustard">
                    Odie Pie
                  </span>
                  <p className="text-sm text-wagon-text/60 font-medium">
                    Taco Pie + sausage
                  </p>
                  <p className="font-bold text-wagon-green text-lg">$8.00</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {southOfBorder
                .filter(
                  (i) =>
                    !["Frito Pie", "Taco Pie", "Odie Pie"].includes(i.name)
                )
                .map((item, i) => (
                  <MenuCard key={i} item={item} accentColor="mustard" />
                ))}
            </div>
          </div>

          {/* Toppings & Drinks */}
          <div id="extras" className="scroll-mt-24 space-y-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🧀</span>
                  <h2 className="font-display text-4xl text-wagon-green border-b-4 border-wagon-mustard pb-2">
                    Toppings
                  </h2>
                </div>
                <p className="text-lg text-wagon-text/80 font-medium">
                  Pile it on. Keep it simple. Build your perfect lunch.
                </p>
                <div className="bg-white p-8 rounded-3xl border-2 border-wagon-bg-alt shadow-sm">
                  <div className="grid grid-cols-2 gap-3">
                    {toppings.map((t) => (
                      <div
                        key={t}
                        className="flex items-center gap-2 text-wagon-text/80 font-medium py-1"
                      >
                        <span className="w-2 h-2 bg-wagon-red rounded-full shrink-0"></span>
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🥤</span>
                  <h2 className="font-display text-4xl text-wagon-red border-b-4 border-wagon-mustard pb-2">
                    Drinks
                  </h2>
                </div>
                <p className="text-lg text-wagon-text/80 font-medium">
                  Grab a cold drink and call it a balanced meal.
                </p>
                <div className="flex flex-wrap gap-4">
                  {["Soda", "Water", "Lemonade"].map((d) => (
                    <span
                      key={d}
                      className="bg-white px-8 py-4 rounded-2xl font-bold text-lg text-wagon-green shadow-sm border-2 border-wagon-bg-alt hover:border-wagon-green transition-colors"
                    >
                      {d}
                    </span>
                  ))}
                </div>

                {/* Photo */}
                <div className="rounded-2xl overflow-hidden shadow-lg border-4 border-white mt-4">
                  <img
                    src="/images/place/place-02.jpg"
                    alt="Wiener Wagon food"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
