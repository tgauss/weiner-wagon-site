import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { placeImages } from "../data/place";

export function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-wagon-green text-white py-24 lg:py-32 border-b-8 border-wagon-mustard overflow-hidden">
        <div className="absolute inset-0 bg-stripes opacity-10 pointer-events-none"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mb-6 drop-shadow-md">
            A Little Wagon. <span className="text-wagon-mustard block mt-2">A Lot of Character.</span>
          </h1>
          <p className="text-xl text-white/80 font-medium">
            {placeImages.length} photos from customers and the Wiener Wagon crew
          </p>
        </div>
      </section>

      <section className="py-24 bg-wagon-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {placeImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="group relative rounded-3xl overflow-hidden shadow-md border-4 border-white hover:border-wagon-mustard transition-colors aspect-square cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="text-white font-display text-xl">Photo by {img.author}</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center" onClick={() => setLightboxIndex(null)}>
          <button
            className="absolute top-6 right-6 text-white/80 hover:text-white z-10"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex - 1 + placeImages.length) % placeImages.length);
            }}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((lightboxIndex + 1) % placeImages.length);
            }}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <img
            src={placeImages[lightboxIndex].src}
            alt={placeImages[lightboxIndex].alt}
            className="max-w-[90vw] max-h-[85vh] object-contain rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/80 font-medium text-sm">
            Photo by {placeImages[lightboxIndex].author} &middot; {lightboxIndex + 1} of {placeImages.length}
          </div>
        </div>
      )}
    </div>
  );
}
