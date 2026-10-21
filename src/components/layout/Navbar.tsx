import { useEffect, useState, type CSSProperties } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu as MenuIcon, X } from "lucide-react";
import { cn } from "../../lib/utils";
import { placeData } from "../../data/place";
import { Button, OpenStatusLine, StripeRule } from "../ui";

const navLinks = [
  { name: "Menu", path: "/menu" },
  { name: "Our Story", path: "/story" },
  { name: "Visit", path: "/visit" },
  { name: "Catering", path: "/catering" },
  { name: "Gallery", path: "/gallery" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="bg-wagon-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-8 flex items-center justify-between gap-4 text-[11px] sm:text-xs font-medium">
          <span className="truncate">
            <span className="hidden sm:inline">Vancouver's longest-running food cart · </span>est. 1976
          </span>
          <OpenStatusLine className="shrink-0" />
        </div>
      </div>

      {/* Main bar */}
      <div className="relative z-10 bg-wagon-cream/95 backdrop-blur border-b-2 border-wagon-ink">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[4.75rem] flex items-center justify-between gap-6">
          <Link to="/" className="flex items-center group shrink-0" aria-label="The Wiener Wagon home">
            <img
              src="/images/logos/the-wiener-wagon-wordmark.webp"
              alt="The Wiener Wagon"
              width={318}
              height={240}
              className="h-[3.9rem] w-auto transition-transform duration-300 group-hover:-rotate-2"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Primary">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  cn(
                    "relative px-3 py-2 text-[15px] font-bold text-wagon-ink/80 hover:text-wagon-red transition-colors",
                    "after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[3px] after:rounded-full after:bg-wagon-red after:origin-left after:scale-x-0 after:transition-transform",
                    isActive && "text-wagon-red after:scale-x-100",
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
            <Button to="/visit" variant="green" size="sm" className="ml-3">
              Visit the Wagon
            </Button>
          </nav>

          <button
            className="md:hidden -mr-2 p-2 text-wagon-green rounded-md"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="w-7 h-7" /> : <MenuIcon className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile menu: full-screen green sign */}
      <div
        id="mobile-nav"
        className={cn(
          "md:hidden fixed inset-0 top-0 pt-[6.75rem] bg-wagon-green text-white flex flex-col transition-opacity duration-200",
          open ? "opacity-100" : "opacity-0 pointer-events-none",
        )}
        aria-hidden={!open}
      >
        <StripeRule />
        <nav className="flex-1 px-6 pt-8 flex flex-col gap-1" aria-label="Mobile">
          {navLinks.map((link, i) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                cn(
                  "font-display text-5xl leading-none py-3 border-b border-white/15 flex items-baseline justify-between",
                  isActive ? "text-wagon-mustard" : "text-white",
                  open && "rise",
                )
              }
              style={{ "--i": i } as CSSProperties}
            >
              {link.name}
              <span className="font-sans text-xs tracking-[0.2em] text-white/50">0{i + 1}</span>
            </NavLink>
          ))}
          <Link to="/faq" className="mt-4 text-white/70 font-semibold">
            Questions? Read the FAQ →
          </Link>
        </nav>
        <div className="px-6 pb-10 space-y-4">
          <p className="text-sm text-white/80 leading-snug">
            {placeData.street}, {placeData.city}
            <br />
            Mon – Fri · 10:30 AM – 2:00 PM
          </p>
          <Button href={placeData.mapsUrl} variant="mustard" className="w-full">
            Get Directions
          </Button>
        </div>
      </div>
    </header>
  );
}
