import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote, Award } from "lucide-react";
import { reviews, placeData } from "../data/place";

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${i < count ? "fill-wagon-mustard text-wagon-mustard" : "text-wagon-text/20"}`}
        />
      ))}
    </div>
  );
}

export function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      if (isAnimating) return;
      setDirection(dir);
      setIsAnimating(true);
      setTimeout(() => {
        setCurrent(index);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % reviews.length, "right");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + reviews.length) % reviews.length, "left");
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const review = reviews[current];

  return (
    <section className="py-24 bg-wagon-bg-alt relative overflow-hidden">
      <div className="absolute inset-0 bg-stripes opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 bg-wagon-green/10 text-wagon-green px-4 py-2 rounded-full font-bold text-sm">
            <Award className="w-4 h-4" />
            {placeData.totalScore} Stars from {placeData.reviewsCount} Reviews
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-wagon-green">
            What People Are Saying
          </h2>
        </div>

        {/* Carousel Card */}
        <div className="relative max-w-4xl mx-auto">
          {/* Nav Buttons */}
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-wagon-green hover:bg-wagon-green hover:text-white transition-colors border-2 border-wagon-bg-alt"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 z-20 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-wagon-green hover:bg-wagon-green hover:text-white transition-colors border-2 border-wagon-bg-alt"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Card */}
          <div
            className={`bg-white rounded-[2rem] shadow-xl border-4 border-wagon-bg-alt overflow-hidden transition-all duration-300 ${
              isAnimating
                ? direction === "right"
                  ? "opacity-0 translate-x-8"
                  : "opacity-0 -translate-x-8"
                : "opacity-100 translate-x-0"
            }`}
          >
            <div className="flex flex-col lg:flex-row">
              {/* Review Content */}
              <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center space-y-6">
                <Quote className="w-12 h-12 text-wagon-mustard/30" />
                <p className="text-lg lg:text-xl text-wagon-text/80 font-medium leading-relaxed italic">
                  "{review.text}"
                </p>
                <div className="space-y-3 pt-4 border-t-2 border-wagon-bg-alt">
                  <StarRating count={review.stars} />
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-wagon-green text-white rounded-full flex items-center justify-center font-display text-xl shadow-sm">
                      {review.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-wagon-text">{review.name}</p>
                      <p className="text-sm text-wagon-text/50">
                        {review.isLocalGuide && (
                          <span className="text-wagon-green font-semibold">
                            Local Guide &middot;{" "}
                          </span>
                        )}
                        {review.publishedAt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Review Image or Rating Breakdown */}
              <div className="lg:w-1/2 bg-wagon-green relative min-h-[300px] lg:min-h-[400px]">
                {review.images.length > 0 ? (
                  <img
                    src={review.images[0]}
                    alt={`Photo by ${review.name}`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-white space-y-6">
                    <div className="font-display text-8xl text-wagon-mustard">
                      {placeData.totalScore}
                    </div>
                    <StarRating count={5} />
                    <p className="text-white/80 font-medium text-center">
                      {placeData.reviewsCount} reviews on Google
                    </p>
                    <div className="grid grid-cols-5 gap-2 w-full max-w-xs">
                      {[
                        { label: "5", count: placeData.reviewsDistribution.fiveStar },
                        { label: "4", count: placeData.reviewsDistribution.fourStar },
                        { label: "3", count: placeData.reviewsDistribution.threeStar },
                        { label: "2", count: placeData.reviewsDistribution.twoStar },
                        { label: "1", count: placeData.reviewsDistribution.oneStar },
                      ].map((bar) => (
                        <div key={bar.label} className="flex flex-col items-center gap-1">
                          <div className="w-full bg-white/20 rounded-full h-24 flex flex-col justify-end overflow-hidden">
                            <div
                              className="bg-wagon-mustard rounded-full transition-all"
                              style={{
                                height: `${(bar.count / placeData.reviewsDistribution.fiveStar) * 100}%`,
                              }}
                            ></div>
                          </div>
                          <span className="text-xs font-bold">{bar.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              className={`w-3 h-3 rounded-full transition-all ${
                i === current
                  ? "bg-wagon-red w-8"
                  : "bg-wagon-text/20 hover:bg-wagon-text/40"
              }`}
            />
          ))}
        </div>

        {/* Review Tags */}
        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {placeData.reviewsTags.slice(0, 6).map((tag) => (
            <span
              key={tag.title}
              className="bg-white px-4 py-2 rounded-full text-sm font-semibold text-wagon-text/70 shadow-sm border border-wagon-bg-alt"
            >
              {tag.title}{" "}
              <span className="text-wagon-green">({tag.count})</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
