import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { placeData } from "../data/place";
import { lowestPrice, mostPopular } from "../data/menu";
import { Reviews } from "../components/Reviews";
import { VideoFacade } from "../components/VideoFacade";
import { Awning, Board, Button, Eyebrow, OpenSign, SectionTitle, StripeRule } from "../components/ui";
import { useWindowStatus } from "../lib/hours";
import { cn } from "../lib/utils";

const popularPhotos: Record<string, string> = {
  "Chili Dog": "/images/place/place-17.jpg",
  "Skip's Favorite": "/images/place/place-11.jpg",
  "Odie Pie": "/images/place/place-03.jpg",
};

const delay = (i: number) => ({ "--i": i }) as CSSProperties;

export function Home() {
  const status = useWindowStatus();

  return (
    <div>
      {/* Hero */}
      <section className="relative paper bg-wagon-cream overflow-hidden">
        <Awning />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16 lg:pt-16 lg:pb-32 grid gap-12 lg:grid-cols-[1.05fr_1fr] items-center">
          <div>
            <Eyebrow className="rise">Downtown Vancouver · since 1976</Eyebrow>
            <h1
              className="mt-5 font-display text-[3.4rem] sm:text-7xl lg:text-[5.4rem] leading-[0.9] text-wagon-green rise"
              style={delay(1)}
            >
              Vancouver's longest-running <span className="text-wagon-red">food cart.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg sm:text-xl text-wagon-text/80 leading-relaxed rise" style={delay(2)}>
              Fifty years of hot dogs, chili, and Frito pies out of one green-and-white wagon on Main Street. If you
              know, you know.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 rise" style={delay(3)}>
              <Button to="/menu">
                See the menu <ArrowRight className="w-5 h-5" />
              </Button>
              <Button href={placeData.mapsUrl} variant="paper">
                <MapPin className="w-5 h-5" /> Get directions
              </Button>
            </div>
            <p className="mt-6 text-sm font-semibold text-wagon-text/60 rise" style={delay(4)}>
              {placeData.totalScore} stars across {placeData.reviewsCount} Google reviews · {placeData.street}
            </p>
          </div>

          <div className="relative lg:pb-16 rise" style={delay(2)}>
            <img
              src="/images/wiener-wagon-illustration.webp"
              alt="Illustration of the green-and-white Wiener Wagon cart with Wacky McWiener beside it"
              width={1196}
              height={820}
              className="w-full max-w-[640px] mx-auto lg:mr-0 lg:w-[92%] h-auto drop-shadow-[0_16px_0_rgba(30,42,34,0.12)]"
              fetchPriority="high"
            />
            <span className="sticker absolute top-0 right-2 sm:right-6 text-xl -rotate-12">Est. 1976</span>
            <OpenSign className="swing mt-8 max-w-xs mx-auto lg:mx-0 lg:mt-0 lg:absolute lg:bottom-0 lg:-left-4 lg:w-64" />
          </div>
        </div>
      </section>
      <StripeRule />

      {/* What to order */}
      <section className="py-20 lg:py-28 bg-wagon-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <SectionTitle
              eyebrow="What to order"
              title="The three that fly out the window most."
              lede="Straight from the owner. If it's your first time, start here."
            />
            <Link
              to="/menu"
              className="font-bold text-wagon-red underline underline-offset-4 decoration-2 shrink-0 hover:text-wagon-red-deep"
            >
              Full menu and prices →
            </Link>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {mostPopular.map((item, i) => (
              <Link
                to="/menu"
                key={item.name}
                className={cn("board overflow-hidden group flex flex-col", i === 1 && "md:-translate-y-6")}
              >
                <div className="aspect-[4/3] overflow-hidden border-b-2 border-wagon-ink">
                  <img
                    src={popularPhotos[item.name]}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-baseline gap-3">
                    <h3 className="item-name text-3xl">{item.name}</h3>
                    <span className="leader" aria-hidden="true" />
                    <span className="font-display text-2xl text-wagon-red">{lowestPrice(item)}</span>
                  </div>
                  {item.options && (
                    <p className="mt-1 text-[11px] font-bold uppercase tracking-[0.16em] text-wagon-text/50">
                      from · hot dog, polish or hot link
                    </p>
                  )}
                  <p className="mt-3 text-wagon-text/75 leading-relaxed">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Story strip */}
      <section className="bg-wagon-green text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 grid gap-14 lg:grid-cols-2 items-center">
          <div>
            <Eyebrow tone="mustard" className="mb-4">
              Since 1976
            </Eyebrow>
            <h2 className="font-display text-5xl sm:text-6xl leading-[0.92]">
              Same corner.
              <br />
              Same stripes.
              <br />
              <span className="text-wagon-mustard">Fifty years.</span>
            </h2>
            <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-md">
              Most food carts come and go. This one opened before food carts were a thing and never left. Parents who
              ate here as kids bring their own kids now.
            </p>
            <div className="mt-8">
              <Button to="/story" variant="mustard">
                Read the story
              </Button>
            </div>
          </div>
          <div className="relative mb-10 lg:mb-0">
            <img
              src="/images/place/place-08.jpg"
              alt="The Wiener Wagon and Wacky McWiener on Main Street"
              className="w-full rounded-xl border-2 border-wagon-ink shadow-[6px_6px_0_var(--color-wagon-ink)] aspect-[4/3] object-cover"
              loading="lazy"
            />
            <VideoFacade className="absolute -bottom-10 -left-2 sm:-left-8 w-[62%] shadow-[6px_6px_0_var(--color-wagon-ink)]" />
          </div>
        </div>
      </section>

      <Reviews />

      {/* Wacky McWiener */}
      <section className="paper bg-wagon-board border-y-2 border-wagon-ink overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-0 grid gap-10 lg:grid-cols-[1fr_0.9fr] items-end">
          <div className="pb-16 lg:py-28">
            <Eyebrow tone="green">The landmark</Eyebrow>
            <h2 className="mt-4 font-display text-5xl sm:text-6xl leading-[0.92] text-wagon-red">Meet Wacky McWiener.</h2>
            <p className="mt-6 text-lg text-wagon-ink/80 leading-relaxed max-w-md">
              Part mascot, part landmark, and responsible for about half of all first-time visits. You spot him from
              across Main Street and you have to come say hi.
            </p>
            <p className="mt-3 text-lg text-wagon-ink/80 italic">Subtlety was never the goal.</p>
            <div className="mt-8">
              <Button to="/gallery" variant="green">
                Snap a photo, grab a dog
              </Button>
            </div>
          </div>
          <div className="relative self-end flex justify-center lg:justify-end">
            <img
              src="/images/WackyMcWeiner-Mascot.png"
              alt="Wacky McWiener, the giant hot dog mascot, squeezing ketchup onto his own head"
              width={886}
              height={1420}
              className="w-[70%] max-w-xs sm:max-w-sm lg:max-w-none lg:w-[78%] h-auto -mb-1 drop-shadow-[10px_10px_0_rgba(30,42,34,0.18)] transition-transform duration-500 hover:-rotate-2"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Visit */}
      <section className="py-20 lg:py-28 bg-wagon-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[1fr_1.15fr] items-start">
          <div>
            <SectionTitle
              eyebrow="Find us"
              title="One wagon. One corner. Weekday lunch."
              lede={
                <>
                  {placeData.street}, inside {placeData.locatedIn} in the {placeData.neighborhood} neighborhood. Free
                  street parking, easy in and out.
                </>
              }
            />
            <Board title="Hours" className="mt-10 max-w-sm">
              <ul className="divide-y-2 divide-dotted divide-wagon-ink/15">
                {placeData.openingHours.map((h) => {
                  const today = h.day === status.weekday;
                  const closed = h.hours === "Closed";
                  return (
                    <li
                      key={h.day}
                      className={cn(
                        "flex items-center justify-between py-2 text-[15px]",
                        today && "-mx-3 px-3 bg-wagon-mustard/35 rounded",
                        closed && !today && "text-wagon-text/50",
                      )}
                    >
                      <span className="font-bold">
                        {h.day}
                        {today && <span className="ml-2 text-[10px] uppercase tracking-[0.18em] text-wagon-red">today</span>}
                      </span>
                      <span className={cn(closed ? "" : "text-wagon-green font-bold")}>{h.hours}</span>
                    </li>
                  );
                })}
              </ul>
            </Board>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href={placeData.mapsUrl}>
                <MapPin className="w-5 h-5" /> Get directions
              </Button>
              <Button to="/visit" variant="paper">
                Visit details
              </Button>
            </div>
          </div>
          <div className="board p-2 bg-white">
            <iframe
              title="Map to the Wiener Wagon"
              src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=place_id:${placeData.placeId}&zoom=16`}
              className="w-full aspect-[4/3] lg:aspect-[5/4] rounded-md border border-wagon-ink/20"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
