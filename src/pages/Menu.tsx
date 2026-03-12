export function Menu() {
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
            Classic dogs, loaded favorites, chili creations, pocket bread specialties, and lunch that does not mess around.
          </p>
        </div>
      </section>

      <section className="py-24 bg-wagon-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          
          {/* Section 1: Classics */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-display text-4xl text-wagon-green">Classics</h2>
              <p className="text-lg text-wagon-text/80 font-medium max-w-2xl mx-auto">
                The tried-and-true favorites that made the wagon a local staple.
              </p>
              <div className="w-24 h-1 bg-wagon-mustard mx-auto rounded-full mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Basic Dog", desc: "A classic done right." },
                { name: "Cheese Dog", desc: "Simple, cheesy goodness." },
                { name: "Chili Dog", desc: "Messy in the best possible way." },
                { name: "Mild Polish", desc: "A flavorful step up from the classic." },
                { name: "Hot Link", desc: "Big flavor with a little extra kick." },
                { name: "The Works", desc: "Loaded up and ready to impress." },
                { name: "Killer Works", desc: "For those who want it all." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border-2 border-wagon-bg-alt hover:border-wagon-red transition-colors">
                  <h3 className="font-display text-3xl text-wagon-red mb-2">{item.name}</h3>
                  <p className="text-wagon-text/70 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Wagon Favorites */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-display text-4xl text-wagon-green">Wagon Favorites</h2>
              <p className="text-lg text-wagon-text/80 font-medium max-w-2xl mx-auto">
                The creative side of the menu, where things get a little more loaded and a lot more fun.
              </p>
              <div className="w-24 h-1 bg-wagon-mustard mx-auto rounded-full mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Skip's Favorite", desc: "A unique combination you have to try." },
                { name: "Denise's Works", desc: "A special take on the loaded classic." },
                { name: "Vegetarian Delight", desc: "All the flavor, none of the meat.", badge: "Vegetarian" },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border-2 border-wagon-bg-alt hover:border-wagon-green transition-colors relative overflow-hidden">
                  {item.badge && (
                    <span className="absolute top-4 right-4 bg-wagon-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {item.badge}
                    </span>
                  )}
                  <h3 className="font-display text-3xl text-wagon-green mb-2 pr-24">{item.name}</h3>
                  <p className="text-wagon-text/70 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 3: South of the Border */}
          <div className="space-y-12">
            <div className="text-center space-y-4">
              <h2 className="font-display text-4xl text-wagon-red">South of the Border Favorites</h2>
              <p className="text-lg text-wagon-text/80 font-medium max-w-2xl mx-auto">
                The part of the menu that proves the wagon is doing more than hot dogs.
              </p>
              <div className="w-24 h-1 bg-wagon-mustard mx-auto rounded-full mt-4"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                { name: "Taco Salad", desc: "Fresh, crunchy, and satisfying." },
                { name: "Pocket Taco", desc: "A wagon favorite with its own loyal following." },
                { name: "Frito Pie", desc: "Crunch, chili, cheese, and zero regrets." },
                { name: "Taco Pie", desc: "A hearty twist on a classic." },
                { name: "Odie Pie", desc: "A local legend in its own right." },
                { name: "Odessa", desc: "Bold flavors you won't forget." },
              ].map((item, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border-2 border-wagon-bg-alt hover:border-wagon-mustard transition-colors">
                  <h3 className="font-display text-3xl text-wagon-mustard mb-2">{item.name}</h3>
                  <p className="text-wagon-text/70 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4 & 5: Bowls, Extras, Toppings */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="font-display text-4xl text-wagon-green border-b-4 border-wagon-mustard pb-4 inline-block">Bowls & Extras</h2>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-wagon-bg-alt">
                  <h3 className="font-display text-3xl text-wagon-red mb-2">Chili</h3>
                  <p className="text-wagon-text/70 font-medium">Our famous homemade chili by the bowl.</p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-sm border-2 border-wagon-bg-alt">
                  <h3 className="font-display text-3xl text-wagon-red mb-2">Dan & George's Chop Chop</h3>
                  <p className="text-wagon-text/70 font-medium">A hearty, chopped-up favorite.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="font-display text-4xl text-wagon-green border-b-4 border-wagon-mustard pb-4 inline-block">Toppings</h2>
              <p className="text-lg text-wagon-text/80 font-medium">Pile it on. Keep it simple. Build your perfect lunch.</p>
              <div className="bg-wagon-bg-alt p-8 rounded-3xl border-4 border-wagon-green/20">
                <ul className="grid grid-cols-2 gap-4 text-lg font-medium text-wagon-text/80">
                  <li className="flex items-center gap-2"><span className="text-wagon-red">✓</span> Mustard</li>
                  <li className="flex items-center gap-2"><span className="text-wagon-red">✓</span> Ketchup</li>
                  <li className="flex items-center gap-2"><span className="text-wagon-red">✓</span> Relish</li>
                  <li className="flex items-center gap-2"><span className="text-wagon-red">✓</span> Onions</li>
                  <li className="flex items-center gap-2"><span className="text-wagon-red">✓</span> Cheese</li>
                  <li className="flex items-center gap-2"><span className="text-wagon-red">✓</span> Jalapeños</li>
                  <li className="flex items-center gap-2"><span className="text-wagon-red">✓</span> Sauerkraut</li>
                  <li className="flex items-center gap-2"><span className="text-wagon-red">✓</span> Chili</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 6: Drinks */}
          <div className="text-center space-y-8 pt-12 border-t-2 border-wagon-green/20">
            <h2 className="font-display text-4xl text-wagon-red">Drinks</h2>
            <p className="text-lg text-wagon-text/80 font-medium max-w-2xl mx-auto">
              Grab a cold drink and call it a balanced meal.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-6 py-3 rounded-full font-bold text-wagon-green shadow-sm border-2 border-wagon-bg-alt">Soda</span>
              <span className="bg-white px-6 py-3 rounded-full font-bold text-wagon-green shadow-sm border-2 border-wagon-bg-alt">Water</span>
              <span className="bg-white px-6 py-3 rounded-full font-bold text-wagon-green shadow-sm border-2 border-wagon-bg-alt">Lemonade</span>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
