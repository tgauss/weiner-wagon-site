import { Link } from "react-router-dom";
import { Instagram } from "lucide-react";
import { placeData } from "../../data/place";
import { StripeRule } from "../ui";

const explore = [
  { name: "Menu", path: "/menu" },
  { name: "Our Story", path: "/story" },
  { name: "Visit Us", path: "/visit" },
  { name: "Catering & Events", path: "/catering" },
  { name: "Gallery", path: "/gallery" },
  { name: "FAQ", path: "/faq" },
];

export function Footer() {
  return (
    <footer className="mt-auto">
      <StripeRule className="h-5" />
      <div className="bg-wagon-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
          <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
            <div>
              <Link to="/" className="inline-block" aria-label="Wiener Wagon home">
                <img
                  src="/images/logos/wiener-wagon-taco-badge.webp"
                  alt="Wiener Wagon"
                  width={600}
                  height={618}
                  loading="lazy"
                  className="w-32 h-auto drop-shadow-md"
                />
              </Link>
              <p className="mt-5 max-w-xs text-white/85 leading-relaxed">
                Vancouver's longest-running food cart. Same corner, same stripes, since 1976.
              </p>
              <a
                href={placeData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2 font-bold hover:text-wagon-mustard transition-colors"
              >
                <Instagram className="w-5 h-5" /> @weinerwagon_downtown
              </a>
            </div>

            <div>
              <h3 className="font-display text-2xl text-wagon-mustard">Find the wagon</h3>
              <address className="not-italic mt-4 space-y-4 text-white/90">
                <p>
                  <a href={placeData.mapsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-wagon-mustard">
                    {placeData.street}
                    <br />
                    {placeData.city}, WA {placeData.postalCode}
                  </a>
                </p>
                <p>
                  Mon – Fri · 10:30 AM – 2:00 PM
                  <br />
                  <span className="text-white/60">Sat – Sun · Closed</span>
                </p>
              </address>
            </div>

            <div>
              <h3 className="font-display text-2xl text-wagon-mustard">Explore</h3>
              <ul className="mt-4 space-y-2 font-medium text-white/90">
                {explore.map((l) => (
                  <li key={l.path}>
                    <Link to={l.path} className="hover:text-wagon-mustard transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-l-2 border-wagon-mustard/60 pl-5">
              <h3 className="font-display text-2xl text-wagon-mustard">Bring the wagon</h3>
              <p className="mt-3 text-white/85 leading-relaxed">
                Office lunches, block parties, weddings that want hot dogs. Tell us about your event.
              </p>
              <Link to="/catering" className="mt-4 inline-block font-bold underline underline-offset-4 decoration-2 hover:text-wagon-mustard">
                Ask about catering →
              </Link>
            </div>
          </div>

          <div className="mt-14 pt-6 border-t border-white/20 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-white/60">
            <p>© {new Date().getFullYear()} Wiener Wagon · Vancouver, Washington</p>
            <p>Cash only for now · ATM right next door</p>
          </div>
          <p className="mt-3 text-[11px] text-white/40">
            Built with{" "}
            <a href="https://github.com/tgauss/tgauss-claude-starter" className="underline hover:text-white/70" target="_blank" rel="noopener noreferrer">
              tgauss-claude-starter
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
