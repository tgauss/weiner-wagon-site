import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { placeImages } from "../data/place";
import { PageHeader } from "../components/ui";

// Every customer photo except one stray shot of a shrub.
const photos = placeImages.filter((p) => !p.src.endsWith("place-12.jpg"));

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback(
    (dir: 1 | -1) => setIndex((i) => (i === null ? i : (i + dir + photos.length) % photos.length)),
    [],
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, step]);

  return (
    <div>
      <PageHeader
        eyebrow="Gallery"
        title={
          <>
            A little wagon.
            <br />
            A lot of character.
          </>
        }
        lede={`${photos.length} photos from customers and the crew. Tap any of them to see it big.`}
      />

      <section className="py-14 lg:py-20 bg-wagon-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 columns-2 sm:columns-3 lg:columns-4 gap-4">
          {photos.map((img, i) => (
            <figure key={img.src} className="mb-4 break-inside-avoid">
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group block w-full text-left"
                aria-label={`Open photo ${i + 1} of ${photos.length}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto rounded-lg border-2 border-wagon-ink transition-[box-shadow,transform] duration-200 group-hover:shadow-[5px_5px_0_var(--color-wagon-ink)] group-hover:-translate-y-0.5"
                  loading="lazy"
                />
              </button>
              <figcaption className="mt-1.5 text-[11px] text-wagon-text/55">Photo · {img.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {index !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Photo ${index + 1} of ${photos.length}`}
          className="fixed inset-0 z-[60] bg-wagon-ink/95 flex items-center justify-center p-4"
          onClick={close}
        >
          <button
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white"
            onClick={close}
            aria-label="Close"
            autoFocus
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 text-white/80 hover:text-white"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <figure className="max-w-[92vw] max-h-[88vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[index].src}
              alt={photos[index].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg border-2 border-white/20"
            />
            <figcaption className="mt-3 text-white/75 text-sm">
              Photo by {photos[index].author} · {index + 1} of {photos.length}
            </figcaption>
          </figure>
        </div>
      )}
    </div>
  );
}
