import { Link } from "react-router-dom";
import { MapPin, Clock, Navigation, CalendarDays, DollarSign } from "lucide-react";
import { placeData } from "../data/place";

export function Visit() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-wagon-mustard text-wagon-text py-24 lg:py-32 border-b-8 border-wagon-green overflow-hidden">
        <div className="absolute inset-0 bg-stripes opacity-5 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6 drop-shadow-sm">
            Come Find <span className="text-wagon-red block mt-2">the Legend</span>
          </h1>
          <p className="text-xl sm:text-2xl text-wagon-text/90 font-medium max-w-2xl mx-auto leading-relaxed">
            Vancouver's longest-running food cart is right downtown. Nearly 50 years of legendary dogs and a whole lot of personality. Bring cash — ATM next door.
          </p>
        </div>
      </section>

      <section className="py-24 bg-wagon-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left Column: Info */}
            <div className="space-y-16">

              {/* Where to find us */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b-4 border-wagon-red pb-4">
                  <div className="w-16 h-16 bg-wagon-red text-white rounded-2xl flex items-center justify-center shadow-md transform -rotate-3">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h2 className="font-display text-4xl text-wagon-green">Where to Find Us</h2>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-wagon-bg-alt relative overflow-hidden group hover:border-wagon-red transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-wagon-red/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                  <p className="text-2xl font-bold text-wagon-text mb-2 relative z-10">{placeData.street}</p>
                  <p className="text-xl text-wagon-text/70 font-medium relative z-10">{placeData.city}, {placeData.state} {placeData.postalCode}</p>
                  <p className="text-sm text-wagon-text/50 font-medium relative z-10 mt-1">Located in {placeData.locatedIn} &middot; {placeData.neighborhood} neighborhood</p>
                  <a
                    href={placeData.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-wagon-red font-bold hover:text-red-700 transition-colors relative z-10"
                  >
                    <Navigation className="w-5 h-5" /> Get Directions
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b-4 border-wagon-mustard pb-4">
                  <div className="w-16 h-16 bg-wagon-mustard text-wagon-text rounded-2xl flex items-center justify-center shadow-md transform rotate-3">
                    <Clock className="w-8 h-8" />
                  </div>
                  <h2 className="font-display text-4xl text-wagon-green">Hours</h2>
                </div>
                <div className="bg-white p-8 rounded-3xl shadow-sm border-2 border-wagon-bg-alt relative overflow-hidden group hover:border-wagon-mustard transition-colors">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-wagon-mustard/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150"></div>
                  <p className="text-lg text-wagon-text/80 font-medium mb-6 relative z-10">We keep it simple. Show up hungry on a weekday.</p>
                  <ul className="space-y-4 relative z-10">
                    {placeData.openingHours.map((h) => (
                      <li key={h.day} className={`flex justify-between items-center ${h.hours === "Closed" ? "text-wagon-text/50" : ""} ${h.day !== "Sunday" ? "border-b border-wagon-bg-alt pb-4" : ""}`}>
                        <span className="font-bold text-lg">{h.day}</span>
                        <span className={`font-bold text-lg ${h.hours !== "Closed" ? "text-wagon-green bg-wagon-green/10 px-4 py-1 rounded-full" : ""}`}>
                          {h.hours}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>

            {/* Right Column: Map & Good to Know */}
            <div className="space-y-16">

              {/* Embedded Map */}
              <div className="bg-wagon-bg-alt rounded-[3rem] p-4 border-4 border-wagon-green shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="aspect-square w-full rounded-[2.5rem] overflow-hidden relative">
                  <iframe
                    title="Wiener Wagon Location"
                    src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=place_id:${placeData.placeId}&zoom=16`}
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>

              {/* Good to Know */}
              <div className="bg-wagon-green text-white p-10 rounded-3xl shadow-lg border-b-8 border-wagon-mustard">
                <h3 className="font-display text-3xl mb-6 text-wagon-mustard">Good to Know</h3>
                <ul className="space-y-4 font-medium text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-wagon-mustard text-2xl leading-none mt-0.5">&#9733;</span>
                    <span>{placeData.additionalInfo.serviceOptions.Takeout ? "Great for takeout" : "Dine-in only"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wagon-mustard text-2xl leading-none mt-0.5">&#9733;</span>
                    <span>{placeData.additionalInfo.atmosphere} lunch stop</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wagon-mustard text-2xl leading-none mt-0.5">&#9733;</span>
                    <span>Popular for {placeData.additionalInfo.popularFor.join(" and ").toLowerCase()}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wagon-mustard text-2xl leading-none mt-0.5">&#9733;</span>
                    <span>{placeData.additionalInfo.goodForKids ? "Family-friendly and easygoing" : "Great for adults"}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wagon-mustard text-2xl leading-none mt-0.5">&#9733;</span>
                    <span>{placeData.additionalInfo.parking}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-wagon-mustard text-2xl leading-none mt-0.5">&#9733;</span>
                    <span>Cash only (for now) — ATM right next door</span>
                  </li>
                  {placeData.additionalInfo.accessibility.map((a) => (
                    <li key={a} className="flex items-start gap-3">
                      <span className="text-wagon-mustard text-2xl leading-none mt-0.5">&#9733;</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* CTA Band */}
          <div className="mt-24 pt-16 border-t-2 border-wagon-green/20">
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
              <a
                href={placeData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-wagon-red text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-red-700 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <Navigation className="w-5 h-5" /> Get Directions
              </a>
              <Link
                to="/menu"
                className="bg-wagon-green text-white px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-green-800 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                View the Menu
              </Link>
              <Link
                to="/catering"
                className="bg-wagon-mustard text-wagon-text px-8 py-4 rounded-full font-bold text-lg text-center hover:bg-yellow-400 transition-colors shadow-lg flex items-center justify-center gap-2"
              >
                <CalendarDays className="w-5 h-5" /> Ask About Catering
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
