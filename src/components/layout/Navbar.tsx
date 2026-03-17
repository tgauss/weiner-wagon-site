import { Link, useLocation } from "react-router-dom";
import { Menu, X, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Our Story", path: "/story" },
    { name: "Menu", path: "/menu" },
    { name: "Visit Us", path: "/visit" },
    { name: "Catering & Events", path: "/catering" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-wagon-bg border-b-4 border-wagon-green shadow-sm">
      {/* Top Utility Bar */}
      <div className="bg-wagon-green text-white py-1.5 px-4 text-xs sm:text-sm font-medium flex flex-wrap justify-center sm:justify-between items-center gap-2">
        <div className="flex items-center gap-4">
          <span className="hidden sm:inline-block">Vancouver's Longest-Running Food Cart &middot; Est. 1976</span>
          <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> Mon–Fri &middot; 10:30 AM – 2 PM</span>
        </div>
        <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> 1199 Main St, Vancouver, WA</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-wagon-green rounded-full flex items-center justify-center text-white font-display text-2xl shadow-md group-hover:bg-wagon-red transition-colors">
              WW
            </div>
            <div className="flex flex-col">
              <span className="font-display text-3xl leading-none text-wagon-green group-hover:text-wagon-red transition-colors">Wiener Wagon</span>
              <span className="font-accent text-wagon-red text-sm leading-none -mt-1">Downtown Classic</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-base font-semibold transition-colors hover:text-wagon-red",
                  location.pathname === link.path ? "text-wagon-red" : "text-wagon-text"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/visit"
              className="bg-wagon-red text-white px-5 py-2.5 rounded-full font-bold hover:bg-red-700 transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Visit the Wagon
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-wagon-green hover:bg-wagon-bg-alt rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-wagon-bg border-t-2 border-wagon-green/20 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1 flex flex-col">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-3 rounded-md text-base font-semibold",
                  location.pathname === link.path
                    ? "bg-wagon-green/10 text-wagon-green"
                    : "text-wagon-text hover:bg-wagon-bg-alt hover:text-wagon-red"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/visit"
              onClick={() => setIsOpen(false)}
              className="mt-4 block text-center bg-wagon-red text-white px-5 py-3 rounded-full font-bold shadow-md"
            >
              Visit the Wagon
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
