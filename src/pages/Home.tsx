import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Star, Clock, Truck, ChevronRight } from "lucide-react";
import { placeData } from "../data/place";
import { ReviewsCarousel } from "../components/ReviewsCarousel";

export function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-wagon-bg-alt overflow-hidden border-b-8 border-wagon-green">
        <div className="absolute inset-0 bg-stripes opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-wagon-green leading-tight drop-shadow-sm">
              A Vancouver Classic <span className="text-wagon-red block mt-2">Since 1976</span>
            </h1>
            <p className="text-lg sm:text-xl text-wagon-text/80 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Hot dogs, polish sausages, chili, pocket bread creations, and a whole lot of local character. Weiner Wagon has been serving up comfort food and smiles in downtown Vancouver for decades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/menu"
                className="bg-wagon-red text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                See the Menu <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/visit"
                className="bg-white text-wagon-green border-2 border-wagon-green px-8 py-4 rounded-full font-bold text-lg hover:bg-wagon-green hover:text-white transition-all shadow-md flex items-center justify-center gap-2"
              >
                Visit Us Today
              </Link>
            </div>
            <ul className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start text-sm font-semibold text-wagon-text/70 pt-4">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-wagon-mustard" /> {placeData.neighborhood} neighborhood</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-wagon-mustard" /> Quick lunch, big flavor</li>
              <li className="flex items-center gap-2"><Star className="w-4 h-4 text-wagon-mustard" /> {placeData.totalScore} stars ({placeData.reviewsCount} reviews)</li>
            </ul>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-4 bg-stripes opacity-100 rounded-3xl transform -rotate-3 shadow-lg"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500 bg-white">
              <img
                src="/images/place/place-08.jpg"
                alt="Weiner Wagon in downtown Vancouver"
                className="w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-wagon-mustard text-wagon-text font-display text-3xl p-6 rounded-full shadow-xl transform -rotate-12 border-4 border-white">
                Est. 1976
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Facts Strip */}
      <section className="bg-wagon-green text-white py-12 border-b-8 border-wagon-mustard">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <Clock className="w-10 h-10 text-wagon-mustard mb-4" />
              <h3 className="font-display text-3xl mb-2">Since 1976</h3>
              <p className="text-white/80 text-sm font-medium">Serving downtown Vancouver for generations.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <Star className="w-10 h-10 text-wagon-mustard mb-4" />
              <h3 className="font-display text-3xl mb-2">{placeData.totalScore} Star Favorite</h3>
              <p className="text-white/80 text-sm font-medium">Loved by {placeData.reviewsCount} reviewers on Google.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <MapPin className="w-10 h-10 text-wagon-mustard mb-4" />
              <h3 className="font-display text-3xl mb-2">Lunch Made Easy</h3>
              <p className="text-white/80 text-sm font-medium">{placeData.price} &middot; {placeData.additionalInfo.atmosphere} &middot; {placeData.locatedIn}</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-colors">
              <Truck className="w-10 h-10 text-wagon-mustard mb-4" />
              <h3 className="font-display text-3xl mb-2">Catering Available</h3>
              <p className="text-white/80 text-sm font-medium">Bring the wagon magic to events and gatherings.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Story Section */}
      <section className="py-24 bg-wagon-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="font-display text-4xl sm:text-5xl text-wagon-green">
            A Little Wagon With a <span className="text-wagon-red">Big Place</span> in Vancouver
          </h2>
          <div className="w-24 h-2 bg-wagon-mustard mx-auto rounded-full"></div>
          <p className="text-lg sm:text-xl text-wagon-text/80 font-medium leading-relaxed">
            For nearly five decades, Weiner Wagon has been part of the rhythm of downtown Vancouver. It is the kind of place people remember, recommend, and return to. What started in 1976 as a street-side hot dog wagon became something bigger than lunch. It became part of the neighborhood.
          </p>
          <p className="text-lg sm:text-xl text-wagon-text/80 font-medium leading-relaxed">
            From the green and white stripes to the familiar corner downtown, the wagon has earned its place as a true local classic. The food is hearty, the welcome is real, and the experience feels like Vancouver.
          </p>
          <div className="pt-6">
            <Link
              to="/story"
              className="inline-flex items-center gap-2 text-wagon-red font-bold text-lg hover:text-red-700 transition-colors group"
            >
              Read Our Story <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Signature Menu Teaser */}
      <section className="py-24 bg-wagon-bg-alt relative">
        <div className="absolute inset-0 bg-stripes-horizontal opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-6">
            <h2 className="font-display text-4xl sm:text-5xl text-wagon-green">
              The Classics That Keep People Coming Back
            </h2>
            <p className="text-lg text-wagon-text/80 font-medium">
              Whether you keep it simple or pile it high, the menu is built for comfort, flavor, and full-on lunch satisfaction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Basic Dog", desc: "A classic done right." },
              { name: "Chili Dog", desc: "Messy in the best possible way." },
              { name: "The Works", desc: "Loaded up and ready to impress." },
              { name: "Hot Link", desc: "Big flavor with a little extra kick." },
              { name: "Pocket Taco", desc: "A wagon favorite with its own loyal following." },
              { name: "Frito Pie", desc: "Crunch, chili, cheese, and zero regrets." },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl shadow-md border-2 border-wagon-bg-alt hover:border-wagon-mustard transition-colors group">
                <h3 className="font-display text-3xl text-wagon-red mb-3 group-hover:text-wagon-green transition-colors">{item.name}</h3>
                <p className="text-wagon-text/70 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/menu"
              className="inline-block bg-wagon-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-green-800 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Explore the Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews Carousel */}
      <ReviewsCarousel />

      {/* Wacky McWiener Feature */}
      <section className="py-24 bg-wagon-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2 order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-stripes opacity-100 rounded-3xl transform rotate-3 shadow-lg"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform -rotate-2 bg-white">
              <img
                src="/images/WackyMcWeiner-Mascot.png"
                alt="Wacky McWiener Mascot"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2 order-1 md:order-2 space-y-6 text-center md:text-left">
            <h2 className="font-display text-4xl sm:text-5xl text-wagon-red">
              Meet Wacky McWiener
            </h2>
            <p className="text-lg text-wagon-text/80 font-medium leading-relaxed">
              No visit feels complete without saying hello to Wacky McWiener. Part mascot, part landmark, all personality. He has been turning heads, making people smile, and helping the wagon stand out for years.
            </p>
            <p className="text-lg text-wagon-text/80 font-medium italic">
              He is not subtle. That is part of the charm.
            </p>
            <div className="pt-4">
              <Link
                to="/gallery"
                className="inline-block bg-wagon-mustard text-wagon-text px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-400 transition-colors shadow-md"
              >
                Snap a Photo, Grab a Dog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Visit Section */}
      <section className="py-24 bg-wagon-bg-alt border-t-8 border-wagon-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] shadow-xl overflow-hidden flex flex-col lg:flex-row border-4 border-wagon-bg-alt">
            <div className="lg:w-1/2 p-12 lg:p-16 flex flex-col justify-center space-y-8">
              <h2 className="font-display text-4xl sm:text-5xl text-wagon-green">
                Find Us Downtown
              </h2>
              <p className="text-lg text-wagon-text/80 font-medium">
                Weiner Wagon is right in downtown Vancouver and built for the lunch crowd. Swing by, grab your go-to order, and be on your way with something fast, filling, and worth the trip.
              </p>

              <div className="space-y-6 bg-wagon-bg-alt p-8 rounded-3xl">
                <div className="flex items-start gap-4">
                  <MapPin className="w-8 h-8 text-wagon-red shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl text-wagon-text mb-1">Location</h4>
                    <p className="text-wagon-text/70 font-medium">{placeData.address}</p>
                    <p className="text-wagon-text/50 text-sm mt-1">Located in {placeData.locatedIn} &middot; {placeData.neighborhood}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-8 h-8 text-wagon-red shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-xl text-wagon-text mb-1">Hours</h4>
                    <p className="text-wagon-text/70 font-medium">Monday to Friday<br/>10:30 AM to 2:00 PM<br/><span className="text-wagon-red">Closed Saturday and Sunday</span></p>
                  </div>
                </div>
              </div>

              <ul className="space-y-2 text-wagon-text/80 font-medium">
                {placeData.additionalInfo.offerings.map((o) => (
                  <li key={o} className="flex items-center gap-2"><span className="text-wagon-mustard text-xl">&#10003;</span> {o}</li>
                ))}
                <li className="flex items-center gap-2"><span className="text-wagon-mustard text-xl">&#10003;</span> {placeData.additionalInfo.parking}</li>
              </ul>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={placeData.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-wagon-red text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-red-700 transition-colors shadow-md"
                >
                  Get Directions
                </a>
                <Link
                  to="/visit"
                  className="bg-wagon-bg text-wagon-text border-2 border-wagon-text/20 px-8 py-4 rounded-full font-bold text-lg text-center hover:border-wagon-text transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
            <div className="lg:w-1/2 relative min-h-[400px]">
              <iframe
                title="Weiner Wagon Location"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=place_id:${placeData.placeId}&zoom=16`}
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Band */}
      <section className="py-16 bg-wagon-mustard text-wagon-text overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-center">
            <div className="max-w-xs">
              <p className="font-display text-2xl">"A staple in Vancouver for years"</p>
              <p className="text-sm mt-2 text-wagon-text/60 font-medium">- Michael Key</p>
            </div>
            <div className="max-w-xs">
              <p className="font-display text-2xl">"Food that makes your stomach and soul feel comforted"</p>
              <p className="text-sm mt-2 text-wagon-text/60 font-medium">- Kamen Rider Silver</p>
            </div>
            <div className="max-w-xs">
              <p className="font-display text-2xl">"Best service and amazing flavor"</p>
              <p className="text-sm mt-2 text-wagon-text/60 font-medium">- Mike Haas</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
