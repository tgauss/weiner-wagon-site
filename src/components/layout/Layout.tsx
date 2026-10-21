import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const titles: Record<string, string> = {
  "/": "Wiener Wagon · Vancouver's longest-running food cart, since 1976",
  "/menu": "Menu & Prices · Wiener Wagon",
  "/story": "Our Story · Wiener Wagon",
  "/visit": "Visit & Hours · Wiener Wagon",
  "/catering": "Catering & Events · Wiener Wagon",
  "/gallery": "Gallery · Wiener Wagon",
  "/faq": "FAQ · Wiener Wagon",
};

/** Client-side navigation keeps the old scroll position and title; reset both like a real page load. */
function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] ?? titles["/"];
  }, [pathname]);
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView({ block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname, hash]);
  return null;
}

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-wagon-bg text-wagon-text font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] btn btn-mustard btn-sm"
      >
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main" className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
