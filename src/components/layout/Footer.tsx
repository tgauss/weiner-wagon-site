import { Link } from "react-router-dom";
import { Instagram, MapPin, Clock } from "lucide-react";
import { placeData } from "../../data/place";

export function Footer() {
  return (
    <div className="flex flex-col">
      {/* Decorative Wagon Base Stripes */}
      <div className="h-12 w-full bg-stripes opacity-100 border-t-8 border-wagon-mustard"></div>
      
      <footer className="bg-wagon-green text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-wagon-green font-display text-3xl shadow-md">
                WW
              </div>
              <div className="flex flex-col">
                <span className="font-display text-3xl sm:text-4xl leading-none text-white">Wiener Wagon</span>
              </div>
            </Link>
            <p className="text-white/80 text-sm font-medium leading-relaxed mb-4">
              Vancouver's longest-running food cart. Legendary since 1976.
            </p>
            <p className="text-white/60 text-xs font-medium mb-6">
              Cash only (for now) &middot; ATM next door
            </p>
            <a
              href={placeData.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white hover:text-wagon-mustard transition-colors font-semibold"
            >
              <Instagram className="w-5 h-5" />
              Follow us
            </a>
          </div>

          {/* Location & Hours */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display text-2xl mb-4 text-wagon-mustard">Find Us</h3>
            <ul className="space-y-4 text-white/90">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-wagon-mustard shrink-0 mt-0.5" />
                <span>1199 Main St,<br />Vancouver, WA 98660</span>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-wagon-mustard shrink-0 mt-0.5" />
                <span>
                  Mon - Fri: 10:30 AM - 2:00 PM<br />
                  Sat - Sun: Closed
                </span>
              </li>
            </ul>
          </div>

          {/* Links */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="font-display text-2xl mb-4 text-wagon-mustard">Explore</h3>
            <ul className="space-y-2 text-white/90 font-medium">
              <li><Link to="/story" className="hover:text-wagon-mustard transition-colors">Our Story</Link></li>
              <li><Link to="/menu" className="hover:text-wagon-mustard transition-colors">Menu</Link></li>
              <li><Link to="/visit" className="hover:text-wagon-mustard transition-colors">Visit Us</Link></li>
              <li><Link to="/catering" className="hover:text-wagon-mustard transition-colors">Catering & Events</Link></li>
              <li><Link to="/gallery" className="hover:text-wagon-mustard transition-colors">Gallery</Link></li>
              <li><Link to="/faq" className="hover:text-wagon-mustard transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Catering CTA */}
          <div className="col-span-1 md:col-span-1 bg-white/10 p-6 rounded-2xl border border-white/20">
            <h3 className="font-display text-2xl mb-3 text-wagon-mustard">Bring the Wagon</h3>
            <p className="text-white/90 text-sm mb-5">
              Want to bring the wagon to your event? Ask about catering and give your guests something fun, familiar, and seriously satisfying.
            </p>
            <Link
              to="/catering"
              className="inline-block bg-wagon-mustard text-wagon-text px-6 py-2.5 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-md w-full text-center"
            >
              Ask About Catering
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/20 text-center text-white/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Wiener Wagon. Vancouver's longest-running food cart since 1976.</p>
        </div>
      </div>
    </footer>
    </div>
  );
}
