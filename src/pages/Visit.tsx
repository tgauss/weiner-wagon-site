import { MapPin } from "lucide-react";
import { placeData } from "../data/place";
import { Board, Button, OpenSign, PageHeader } from "../components/ui";
import { useWindowStatus } from "../lib/hours";
import { cn } from "../lib/utils";

const goodToKnow = [
  "Takeout only. Order at the window, eat on a bench or back at your desk.",
  "Free street parking all around the block.",
  "Cash only for now. ATM right next door.",
  "Wheelchair accessible entrance and parking.",
  "Kids welcome. Basic Dog is the move for small hands.",
  "Busiest from noon to one. Come early if you are in a hurry.",
];

export function Visit() {
  const status = useWindowStatus();

  return (
    <div>
      <PageHeader
        eyebrow="Visit"
        title={
          <>
            Come find <span className="text-wagon-red">the legend.</span>
          </>
        }
        lede={`${placeData.street}, downtown Vancouver, inside ${placeData.locatedIn}. Weekday lunch only, and worth planning around.`}
        aside={<OpenSign className="max-w-xs lg:ml-auto -rotate-1" />}
      />

      <section className="py-20 lg:py-28 bg-wagon-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-[1fr_1.1fr] items-start">
          <div className="space-y-10">
            <div>
              <p className="font-display text-5xl sm:text-6xl leading-[0.95] text-wagon-green">
                {placeData.street}
              </p>
              <p className="mt-2 text-lg text-wagon-text/75">
                {placeData.city}, Washington {placeData.postalCode} · {placeData.neighborhood} neighborhood
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <Button href={placeData.mapsUrl}>
                  <MapPin className="w-5 h-5" /> Get directions
                </Button>
                <Button to="/menu" variant="paper">
                  See the menu first
                </Button>
              </div>
            </div>

            <Board title="Hours">
              <ul className="divide-y-2 divide-dotted divide-wagon-ink/15">
                {placeData.openingHours.map((h) => {
                  const today = h.day === status.weekday;
                  const closed = h.hours === "Closed";
                  return (
                    <li
                      key={h.day}
                      className={cn(
                        "flex items-center justify-between py-2.5",
                        today && "-mx-3 px-3 bg-wagon-mustard/35 rounded",
                        closed && !today && "text-wagon-text/50",
                      )}
                    >
                      <span className="font-bold">
                        {h.day}
                        {today && (
                          <span className="ml-2 text-[10px] uppercase tracking-[0.18em] text-wagon-red">today</span>
                        )}
                      </span>
                      <span className={cn(!closed && "text-wagon-green font-bold")}>{h.hours}</span>
                    </li>
                  );
                })}
              </ul>
            </Board>

            <Board title="Good to know" tone="red">
              <ul className="space-y-3 text-[15px] leading-snug text-wagon-text/85">
                {goodToKnow.map((g) => (
                  <li key={g} className="flex gap-3">
                    <span aria-hidden="true" className="text-wagon-green font-bold">
                      ✓
                    </span>
                    {g}
                  </li>
                ))}
              </ul>
            </Board>
          </div>

          <div className="lg:sticky lg:top-32 space-y-6">
            <div className="board p-2 bg-white">
              <iframe
                title="Map to the Wiener Wagon"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=place_id:${placeData.placeId}&zoom=16`}
                className="w-full aspect-square sm:aspect-[4/3] lg:aspect-square rounded-md border border-wagon-ink/20"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <figure className="board p-2 bg-white -rotate-1 max-w-sm ml-auto">
              <img
                src="/images/place/place-22.jpg"
                alt="Wacky McWiener standing beside the wagon window"
                className="w-full aspect-[4/3] object-cover rounded-md border border-wagon-ink/20"
                loading="lazy"
              />
              <figcaption className="px-2 pt-2 pb-1 text-xs text-wagon-text/60">
                Look for the giant hot dog. You cannot miss him.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>
    </div>
  );
}
