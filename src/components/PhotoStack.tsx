import { useEffect, useRef, useState, type CSSProperties } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../lib/utils";

export type StackPhoto = { src: string; alt: string; author?: string };

const tilts = [-3, 2.5, -1.5, 3.5, -2.5, 1.5];

/**
 * A pile of prints. The top one changes every few seconds, like flipping through
 * photos someone left on the counter. Pauses on hover or focus, honours
 * reduced motion (no auto-advance), and the arrows always work.
 */
export function PhotoStack({ photos, interval = 3800, className }: { photos: StackPhoto[]; interval?: number; className?: string }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useRef(false);

  useEffect(() => {
    reduced.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    if (paused || reduced.current || photos.length < 2) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % photos.length), interval);
    return () => window.clearInterval(id);
  }, [paused, interval, photos.length]);

  const go = (d: number) => setIndex((i) => (i + d + photos.length) % photos.length);
  const current = photos[index];

  return (
    <div
      className={cn("relative select-none", className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="group"
      aria-roledescription="carousel"
      aria-label="Customer photos"
    >
      <div className="relative aspect-[5/4]">
        {photos.map((p, i) => {
          const offset = (i - index + photos.length) % photos.length; // 0 = on top
          const visible = offset < 3;
          return (
            <figure
              key={p.src}
              aria-hidden={offset !== 0}
              className={cn(
                "absolute inset-0 bg-white border-2 border-wagon-ink p-2 pb-9 shadow-[5px_5px_0_var(--color-wagon-ink)]",
                "transition-all duration-700 ease-[cubic-bezier(.2,.8,.2,1)] motion-reduce:transition-none",
                offset === 0 ? "opacity-100" : visible ? "opacity-100" : "opacity-0",
              )}
              style={
                {
                  zIndex: photos.length - offset,
                  transform: `rotate(${tilts[i % tilts.length]}deg) translate(${offset * 6}px, ${offset * -6}px) scale(${1 - offset * 0.03})`,
                } as CSSProperties
              }
            >
              <img
                src={p.src}
                alt={p.alt}
                loading={i < 3 ? "eager" : "lazy"}
                className="w-full h-full object-cover border border-wagon-ink/15"
              />
              <figcaption className="absolute left-3 right-28 bottom-2 flex items-baseline gap-2 text-[11px] text-wagon-text/60">
                <span className="font-display text-wagon-red text-sm tabular-nums shrink-0">
                  {i + 1}/{photos.length}
                </span>
                <span className="truncate">{p.author ? `Photo · ${p.author}` : "Photo"}</span>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="absolute -bottom-5 right-4 z-20 flex gap-2">
        <button
          type="button"
          onClick={() => go(-1)}
          className="btn btn-paper btn-sm px-2.5!"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          type="button"
          onClick={() => go(1)}
          className="btn btn-mustard btn-sm px-2.5!"
          aria-label="Next photo"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <p className="sr-only" aria-live="polite">
        {current.alt}
      </p>
    </div>
  );
}
