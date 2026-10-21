import { Star } from "lucide-react";
import { placeData, reviews } from "../data/place";
import { Eyebrow, Button } from "./ui";
import { cn } from "../lib/utils";

// Three short five-star reviews, longest first so the stagger reads naturally.
const picks = [...reviews]
  .filter((r) => r.stars === 5 && r.text.length > 60 && r.text.length < 320)
  .sort((a, b) => a.text.length - b.text.length)
  .slice(0, 3);

export function Reviews() {
  return (
    <section className="py-20 lg:py-28 bg-wagon-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] items-start">
          <div className="lg:sticky lg:top-32">
            <Eyebrow className="mb-4">What people say</Eyebrow>
            <p className="font-display text-[5.5rem] leading-[0.85] text-wagon-green">
              {placeData.totalScore}
              <span className="text-wagon-mustard">/5</span>
            </p>
            <div className="mt-3 flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-wagon-mustard text-wagon-mustard" />
              ))}
            </div>
            <p className="mt-3 text-wagon-text/75 leading-relaxed max-w-xs">
              Across {placeData.reviewsCount} Google reviews, {placeData.reviewsDistribution.fiveStar} of them five stars.
              People mostly talk about the chili, the prices, and the giant hot dog out front.
            </p>
            <Button href={placeData.mapsUrl} variant="paper" size="sm" className="mt-6">
              Read them on Google
            </Button>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 sm:pb-10">
            {picks.map((r, i) => (
              <blockquote
                key={r.name}
                className={cn("board p-6 sm:p-7 flex flex-col", i === 1 && "sm:translate-y-10")}
              >
                <p className="font-display text-wagon-red text-3xl leading-none" aria-hidden="true">
                  “
                </p>
                <p className="-mt-3 text-lg leading-relaxed text-wagon-text/90">{r.text}</p>
                <footer className="mt-5 pt-4 border-t-2 border-dotted border-wagon-ink/20 text-sm">
                  <span className="font-bold">{r.name}</span>
                  <span className="text-wagon-text/55">
                    {" "}
                    · {r.isLocalGuide ? "Local Guide · " : ""}
                    {r.publishedAt}
                  </span>
                </footer>
              </blockquote>
            ))}
            <figure className="sm:translate-y-10 rounded-xl overflow-hidden border-2 border-wagon-ink shadow-[5px_5px_0_var(--color-wagon-ink)] rotate-1 self-start">
              <img
                src="/images/reviews/review-07.jpg"
                alt="A Frito pie from the Wiener Wagon, photographed by a customer"
                className="w-full aspect-[4/3] object-cover"
                loading="lazy"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
