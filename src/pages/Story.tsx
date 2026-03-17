export function Story() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-wagon-green text-white py-24 lg:py-32 border-b-8 border-wagon-mustard overflow-hidden">
        <div className="absolute inset-0 bg-stripes opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6 drop-shadow-md">
            Nearly 50 Years. <span className="text-wagon-mustard">One Wagon.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
            Vancouver's longest-running food cart did not get here by accident. It got here by showing up every day with honest food, real hospitality, and a whole lot of heart.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-24 bg-wagon-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* Section 1 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="font-display text-4xl text-wagon-red">Before Food Carts Were Cool</h2>
              <p className="text-lg text-wagon-text/80 font-medium leading-relaxed">
                Wiener Wagon rolled onto the scene in 1976 — long before food carts were trendy, long before anyone was hashtagging their lunch. While other carts have come and gone, this one just kept showing up. Nearly 50 years later, it is officially Vancouver's longest-running food cart. That is not marketing. That is just math.
              </p>
              <p className="text-lg text-wagon-text/80 font-medium leading-relaxed">
                What started as a hot dog wagon became a downtown institution. The kind of place people introduce to out-of-towners. The kind of place grandparents tell stories about. The kind of place that just feels like it belongs.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-stripes opacity-100 rounded-3xl transform -rotate-2 shadow-lg"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 sm:border-8 border-white transform rotate-2 bg-white">
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
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 sm:border-8 border-white transform -rotate-2 bg-white">
                <img
                  src="/images/place/place-22.jpg"
                  alt="Wiener Wagon Corner"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="md:w-1/2 order-1 md:order-2 space-y-6">
              <h2 className="font-display text-4xl text-wagon-green">The Corner That Never Changed</h2>
              <p className="text-lg text-wagon-text/80 font-medium leading-relaxed">
                Downtown Vancouver has changed a lot since 1976. Buildings went up, businesses came and went. But the wagon — with its green and white stripes and that unmistakable vibe — just kept doing its thing. For many locals, it is not just where you get lunch. It is proof that the good stuff sticks around.
              </p>
            </div>
          </div>

          {/* Section 3 */}
          <div className="bg-wagon-bg-alt p-6 sm:p-8 lg:p-12 rounded-2xl sm:rounded-[3rem] border-4 border-wagon-mustard text-center space-y-8 shadow-lg">
            <h2 className="font-display text-4xl text-wagon-red">How Do You Last 50 Years?</h2>
            <div className="w-24 h-1 bg-wagon-green mx-auto rounded-full"></div>
            <p className="text-lg text-wagon-text/80 font-medium leading-relaxed max-w-2xl mx-auto">
              Simple. You show up. You make honest food at fair prices. You remember people's names and what they order. You do not overthink it, and you never phone it in. That is the Wiener Wagon playbook, and it has worked for nearly five decades.
            </p>
            <p className="text-lg text-wagon-text/80 font-medium leading-relaxed max-w-2xl mx-auto">
              Oh, and bring cash — we are keeping it old school for now. There is an ATM right next door if you need it.
            </p>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-6">
              <h2 className="font-display text-4xl text-wagon-green">Yes, the Giant Hot Dog Guy Has a Name</h2>
              <p className="text-lg text-wagon-text/80 font-medium leading-relaxed">
                Wacky McWiener is part mascot, part local celebrity, and fully responsible for countless double-takes from people driving down Main Street. He is one of those details you cannot forget — and a big reason the wagon has been a landmark for nearly 50 years.
              </p>
            </div>
            <div className="md:w-1/2 relative">
              <div className="absolute -inset-4 bg-stripes opacity-100 rounded-3xl transform -rotate-2 shadow-lg"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 sm:border-8 border-white transform rotate-3 bg-white">
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
            <h2 className="font-display text-4xl text-wagon-red">Still Here. Still Legendary.</h2>
            <p className="text-lg text-wagon-text/80 font-medium leading-relaxed max-w-2xl mx-auto">
              Almost five decades in, Wiener Wagon is still the same wagon, same corner, same spirit. Vancouver's longest-running food cart is not going anywhere. Come hungry, bring cash, and see why people keep coming back generation after generation.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}
