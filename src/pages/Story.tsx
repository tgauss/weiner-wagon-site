import type { ReactNode } from "react";
import { Board, Button, Eyebrow, PageHeader } from "../components/ui";
import { cn } from "../lib/utils";

type Chapter = {
  label: string;
  title: string;
  tone: "red" | "green";
  body: ReactNode;
  photo?: { src: string; alt: string; tilt: string };
};

const chapters: Chapter[] = [
  {
    label: "1976 · The beginning",
    title: "Before food carts were cool",
    tone: "red",
    body: (
      <>
        <p>
          Wiener Wagon rolled onto Main Street in 1976, long before anyone was photographing their lunch. Other carts
          came and went. This one kept showing up. Fifty years later it is officially Vancouver's longest-running food
          cart. That is not marketing, that is just math.
        </p>
        <p>
          A hot dog wagon became a downtown institution: the place you take out-of-towners, the place grandparents
          tell stories about.
        </p>
      </>
    ),
    photo: { src: "/images/place/place-09.jpg", alt: "The Wiener Wagon parked under the trees on Main Street", tilt: "rotate-1" },
  },
  {
    label: "The corner",
    title: "The corner that never changed",
    tone: "green",
    body: (
      <p>
        Downtown has changed a lot since 1976. Buildings went up, businesses turned over. The wagon, with its green and
        white stripes, just kept doing its thing. For a lot of locals it is not only where you get lunch. It is proof
        that the good stuff sticks around.
      </p>
    ),
    photo: { src: "/images/place/place-01.jpg", alt: "The striped wagon with Wacky McWiener standing out front", tilt: "-rotate-1" },
  },
  {
    label: "The landmark",
    title: "Yes, the giant hot dog guy has a name",
    tone: "red",
    body: (
      <p>
        Wacky McWiener is part mascot, part local celebrity, and fully responsible for countless double-takes from
        people driving down Main Street. He is one of those details you cannot forget, and a big reason the wagon has
        stayed a landmark for fifty years.
      </p>
    ),
    photo: { src: "/images/place/place-24.jpg", alt: "A customer posing with the Wacky McWiener statue", tilt: "rotate-2" },
  },
];

export function Story() {
  return (
    <div>
      <PageHeader
        eyebrow="Our story"
        title={
          <>
            Fifty years.
            <br />
            One wagon.
          </>
        }
        lede="Vancouver's longest-running food cart did not get here by accident. It got here by showing up every weekday with honest food and a real welcome."
        aside={
          <p
            aria-hidden="true"
            className="font-display text-[7rem] sm:text-[9rem] leading-none text-wagon-mustard lg:text-right select-none -mb-6 lg:-mb-10"
          >
            1976
          </p>
        }
      />

      <section className="py-20 lg:py-28 bg-wagon-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="relative border-l-2 border-wagon-ink/20 ml-2 sm:ml-4 space-y-20 lg:space-y-28">
            {chapters.slice(0, 2).map((c) => (
              <ChapterBlock key={c.title} chapter={c} />
            ))}

            {/* The playbook */}
            <li className="relative pl-8 sm:pl-14">
              <Marker />
              <Eyebrow tone="green" className="mb-4">
                The playbook
              </Eyebrow>
              <Board title="How do you last fifty years?" tone="red" className="bg-wagon-cream">
                <div className="grid gap-6 md:grid-cols-2 text-lg leading-relaxed text-wagon-text/85">
                  <p>
                    Simple. You show up. You make honest food at fair prices. You remember people's names and what they
                    order. You do not overthink it, and you never phone it in.
                  </p>
                  <p>
                    That is the whole playbook, and it has worked for five decades. Oh, and bring cash. We are keeping it
                    old school for now, and there is an ATM right next door.
                  </p>
                </div>
              </Board>
            </li>

            {chapters.slice(2).map((c) => (
              <ChapterBlock key={c.title} chapter={c} />
            ))}

            {/* Today */}
            <li className="relative pl-8 sm:pl-14">
              <Marker />
              <Eyebrow className="mb-4">Today</Eyebrow>
              <h2 className="font-display text-4xl sm:text-5xl text-wagon-green leading-[0.95]">Still here. Still legendary.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-wagon-text/85">
                Five decades in, it is the same wagon, the same corner, the same spirit. Come hungry and see why people
                keep coming back, generation after generation.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button to="/menu">See the menu</Button>
                <Button to="/visit" variant="paper">
                  Plan a visit
                </Button>
              </div>
            </li>
          </ol>
        </div>
      </section>
    </div>
  );
}

function Marker() {
  return (
    <span
      aria-hidden="true"
      className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-wagon-mustard border-2 border-wagon-ink"
    />
  );
}

function ChapterBlock({ chapter }: { chapter: Chapter }) {
  return (
    <li className="relative pl-8 sm:pl-14">
      <Marker />
      <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 items-center">
        <div>
          <Eyebrow tone={chapter.tone === "green" ? "green" : undefined} className="mb-4">
            {chapter.label}
          </Eyebrow>
          <h2
            className={cn(
              "font-display text-4xl sm:text-5xl leading-[0.95]",
              chapter.tone === "red" ? "text-wagon-red" : "text-wagon-green",
            )}
          >
            {chapter.title}
          </h2>
          <div className="mt-5 space-y-4 text-lg leading-relaxed text-wagon-text/85">{chapter.body}</div>
        </div>
        {chapter.photo && (
          <figure className={cn("board p-2 bg-white", chapter.photo.tilt)}>
            <img
              src={chapter.photo.src}
              alt={chapter.photo.alt}
              className="w-full aspect-[4/5] lg:aspect-[4/4.6] object-cover rounded-md border border-wagon-ink/20"
              loading="lazy"
            />
          </figure>
        )}
      </div>
    </li>
  );
}
