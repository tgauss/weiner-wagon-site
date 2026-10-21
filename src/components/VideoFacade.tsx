import { useState } from "react";
import { Play } from "lucide-react";
import { cn } from "../lib/utils";

const VIDEO_ID = "ureJYl7BjCI";

/** Shows a poster until clicked, then swaps in the YouTube player. Keeps the page light. */
export function VideoFacade({ className }: { className?: string }) {
  const [playing, setPlaying] = useState(false);
  return (
    <div className={cn("relative aspect-video overflow-hidden rounded-xl border-2 border-wagon-ink bg-wagon-ink", className)}>
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`}
          title="Wiener Wagon 2014 spotlight video"
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="group absolute inset-0 w-full h-full text-left"
          aria-label="Play the 2014 Wiener Wagon spotlight video"
        >
          <img
            src={`https://i.ytimg.com/vi/${VIDEO_ID}/hqdefault.jpg`}
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          <span className="absolute left-4 bottom-4 right-4 flex items-end justify-between gap-4">
            <span className="text-white drop-shadow font-bold text-xs sm:text-sm leading-tight max-w-[55%]">
              Watch · Local TV, 2014
            </span>
            <span className="btn btn-mustard btn-sm shrink-0">
              <Play className="w-4 h-4 fill-current" /> Play
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
