export function Story() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-wagon-green text-white py-24 lg:py-32 border-b-8 border-wagon-mustard overflow-hidden">
        <div className="absolute inset-0 bg-stripes opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6 drop-shadow-md">
            Serving Vancouver <span className="text-wagon-mustard">Since 1976</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
            A downtown favorite built on simple food, friendly service, and a whole lot of heart.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-wagon-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* Section 1 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="font-display text-4xl text-wagon-red">Where It All Started</h2>
              <p className="text-lg text-wagon-text/80 font-medium leading-relaxed">
                Wiener Wagon began in 1976 and grew into one of downtown Vancouver's most recognizable lunch spots. Long before food carts were everywhere, this wagon was already doing its thing: serving hearty food, keeping prices approachable, and becoming part of people's everyday routines.
              </p>
              <p className="text-lg text-wagon-text/80 font-medium leading-relaxed">
                Over the years, it became more than a place to grab a hot dog. It became a familiar face downtown, a stop people introduced to friends, and one of those places that somehow feels both iconic and personal.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-stripes opacity-100 rounded-3xl transform -rotate-2 shadow-lg"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-8 border-white transform rotate-2 bg-white">
                <img
                  src="/images/place/place-16.jpg"
                  alt="Historic Wiener Wagon"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 order-2 md:order-1 relative">
              <div className="absolute -inset-4 bg-stripes opacity-100 rounded-3xl transform rotate-2 shadow-lg"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-8 border-white transform -rotate-2 bg-white">
                <img
                  src="/images/place/place-22.jpg"
                  alt="Wiener Wagon Corner"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 space-y-6">
              <h2 className="font-display text-4xl text-wagon-green">A Corner With Character</h2>
              <p className="text-lg text-wagon-text/80 font-medium leading-relaxed">
                The wagon's green and white look, its longtime downtown presence, and its unmistakable personality have made it a true Vancouver original. For many locals, it is not just a lunch stop. It is part of the city's story.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-wagon-bg-alt p-12 rounded-[3rem] border-4 border-wagon-mustard text-center space-y-8 shadow-lg">
            <h2 className="font-display text-4xl text-wagon-red">Built on Good Food and Good People</h2>
            <div className="w-24 h-1 bg-wagon-green mx-auto rounded-full"></div>
            <p className="text-lg text-wagon-text/80 font-medium leading-relaxed max-w-2xl mx-auto">
              What has always made Wiener Wagon special is not just the menu. It is the way people feel when they walk up to the window. There is a friendliness to the place that has helped it last across generations.
            </p>
            <p className="text-lg text-wagon-text/80 font-medium leading-relaxed max-w-2xl mx-auto">
              That spirit of welcome, consistency, and care is a big part of why the wagon still means so much to so many people.
            </p>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="font-display text-4xl text-wagon-green">Yes, the Giant Hot Dog Guy Has a Name</h2>
              <p className="text-lg text-wagon-text/80 font-medium leading-relaxed">
                Wacky McWiener is part mascot, part photo op, and fully part of the experience. He is one of the details that makes Wiener Wagon easy to remember and hard not to smile at.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-stripes opacity-100 rounded-3xl transform -rotate-2 shadow-lg"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-8 border-white transform rotate-3 bg-white">
                <img
                  src="/images/WackyMcWeiner-Mascot.png"
                  alt="Wacky McWiener"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>

          {/* Section 5 */}
          <div className="text-center space-y-8 pt-12 border-t-2 border-wagon-green/20">
            <h2 className="font-display text-4xl text-wagon-red">Still Serving. Still Smiling.</h2>
            <p className="text-lg text-wagon-text/80 font-medium leading-relaxed max-w-2xl mx-auto">
              Today, Wiener Wagon continues to do what it has always done best: serve satisfying food, keep things welcoming, and give downtown Vancouver one more reason to feel like home.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
