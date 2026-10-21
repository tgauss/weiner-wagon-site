import { useEffect, useState, type ReactNode } from "react";
import { MapPin } from "lucide-react";
import {
  bare,
  classics,
  extras,
  pies,
  saladsAndPockets,
  specialties,
  toppings,
  type MenuItem,
} from "../data/menu";
import { placeData } from "../data/place";
import { Board, Button, PageHeader } from "../components/ui";
import { PhotoStack, type StackPhoto } from "../components/PhotoStack";
import { cn } from "../lib/utils";

/** Customer photos for the header stack: food first, then the people and the mascot. */
const headerPhotos: StackPhoto[] = [
  { src: "/images/place/place-20.jpg", alt: "A chili dog with cheddar and Fritos", author: "R. Neault" },
  { src: "/images/place/place-11.jpg", alt: "A hot link with sauerkraut and jalapeños", author: "Derick Schnackenberg" },
  { src: "/images/place/place-17.jpg", alt: "A pie with Fritos, chili, sausage and sour cream", author: "Wiener Wagon" },
  { src: "/images/place/place-13.jpg", alt: "A customer holding a loaded dog in the car", author: "Michael Key" },
  { src: "/images/place/place-03.jpg", alt: "A dog topped with chili, cheese and Fritos", author: "Kamen Rider Silver" },
  { src: "/images/place/place-06.jpg", alt: "Wacky McWiener holding a chili pie", author: "Michael Key" },
  { src: "/images/place/place-19.jpg", alt: "A pie with lettuce and Fritos, eaten in the car", author: "David X" },
  { src: "/images/place/place-05.jpg", alt: "A dog with sauerkraut and mustard", author: "Derick Schnackenberg" },
  { src: "/images/place/place-00.jpg", alt: "A chili cheese dog in a paper boat", author: "Wiener Wagon" },
];

const sections = [
  { id: "classics", label: "Classics" },
  { id: "specialties", label: "Wagon Specialties" },
  { id: "south", label: "South of the Border" },
  { id: "extras", label: "Toppings & Drinks" },
];
const sectionIds = sections.map((s) => s.id);

/** Customer photos of the three most-ordered items. Shown only on those rows so the photo means something. */
const starPhotos: Record<string, { src: string; alt: string }> = {
  "Chili Dog": { src: "/images/place/place-20.jpg", alt: "A chili dog with cheddar and Fritos in a paper boat" },
  "Skip’s Favorite": { src: "/images/place/place-11.jpg", alt: "A hot link piled with sauerkraut and jalapeños" },
  "Odie Pie": { src: "/images/place/place-17.jpg", alt: "An Odie Pie: Fritos, chili, sausage and sour cream" },
};

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el);
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) if (entry.isIntersecting) setActive(entry.target.id);
      },
      { rootMargin: "-35% 0px -55% 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);
  return active;
}

function Label({ children, tone = "red", className }: { children: ReactNode; tone?: "red" | "green"; className?: string }) {
  return (
    <span
      className={cn(
        "text-[0.65rem] font-bold uppercase tracking-[0.18em]",
        tone === "red" ? "text-wagon-red" : "text-wagon-green",
        className,
      )}
    >
      {children}
    </span>
  );
}

/** Price sits beside the name, no dollar sign, no dotted leader: the eye lands on the food, not on a column of numbers. */
function Price({ value, className }: { value?: string; className?: string }) {
  if (!value) return null;
  return (
    <span className={cn("font-display text-xl text-wagon-ink tabular-nums leading-none", className)}>
      {bare(value)}
    </span>
  );
}

function Options({ options }: { options: NonNullable<MenuItem["options"]> }) {
  return (
    <dl className="mt-2.5 flex flex-wrap gap-x-5 gap-y-1">
      {options.map((o) => (
        <div key={o.meat} className="flex items-baseline gap-1.5">
          <dt className="text-[11px] font-bold uppercase tracking-[0.14em] text-wagon-text/60">{o.meat}</dt>
          <dd className="font-display text-lg leading-none text-wagon-ink tabular-nums">{bare(o.price)}</dd>
        </div>
      ))}
    </dl>
  );
}

function Row({ item }: { item: MenuItem }) {
  if (item.popular) return <StarRow item={item} />;
  return (
    <li className="py-5 first:pt-0 last:pb-0">
      <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h4 className="item-name text-2xl sm:text-[1.7rem]">{item.name}</h4>
        {item.step && <Label tone="green">{item.step}</Label>}
        {item.price && <Price value={item.price} />}
        {item.badge && <Label tone="green">{item.badge}</Label>}
      </div>
      <p className="mt-2 text-[15px] leading-snug text-wagon-text/75 max-w-prose">{item.desc}</p>
      {item.options && <Options options={item.options} />}
    </li>
  );
}

/** The one boxed item per board. A box plus a photo is the oldest trick on a menu, and it only works if used once. */
function StarRow({ item }: { item: MenuItem }) {
  const photo = starPhotos[item.name];
  return (
    <li className="py-5 first:pt-0 last:pb-0">
      <div className="relative mt-5 rounded-lg border-2 border-wagon-ink bg-wagon-board/25 p-4 sm:p-5 shadow-[4px_4px_0_var(--color-wagon-ink)]">
        <span className="sticker absolute -top-4 left-4 text-[0.95rem] -rotate-2 px-3 py-1.5">Most ordered</span>
        <div className="flex gap-4 sm:gap-5 items-start pt-2">
          <div className="flex-1 min-w-0">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h4 className="item-name text-[1.75rem] sm:text-3xl">{item.name}</h4>
              {item.step && <Label tone="green">{item.step}</Label>}
              {item.price && <Price value={item.price} className="text-2xl" />}
            </div>
            <p className="mt-2 text-[15px] leading-snug text-wagon-text/80 max-w-prose">{item.desc}</p>
            {item.options && <Options options={item.options} />}
          </div>
          {photo && (
            <figure className="shrink-0 w-24 sm:w-32 bg-white border-2 border-wagon-ink p-1 pb-1.5 rotate-2 shadow-[3px_3px_0_var(--color-wagon-ink)]">
              <img src={photo.src} alt={photo.alt} loading="lazy" className="w-full aspect-square object-cover" />
              <figcaption className="pt-1 text-[9px] text-center text-wagon-text/55 leading-none">customer photo</figcaption>
            </figure>
          )}
        </div>
      </div>
    </li>
  );
}

function Rows({ items }: { items: MenuItem[] }) {
  return (
    <ul className="divide-y-2 divide-dotted divide-wagon-ink/15">
      {items.map((item) => (
        <Row key={item.name} item={item} />
      ))}
    </ul>
  );
}

function Subhead({ children, note }: { children: ReactNode; note?: string }) {
  return (
    <div className="flex items-baseline gap-3 mb-4">
      <h4 className="font-display text-xl text-wagon-green uppercase tracking-[0.04em]">{children}</h4>
      <span className="flex-1 border-t-2 border-wagon-ink/15" aria-hidden="true" />
      {note && <span className="text-xs text-wagon-text/55">{note}</span>}
    </div>
  );
}

export function Menu() {
  const active = useActiveSection(sectionIds);

  return (
    <div>
      <PageHeader
        eyebrow="The board"
        title={
          <>
            Come <span className="text-wagon-red">hungry.</span>
          </>
        }
        lede="Made at the window while you wait. Dogs from $4, nothing over $11. First visit? Start with anything marked “most ordered”."
        aside={<PhotoStack photos={headerPhotos} className="max-w-sm mx-auto lg:mx-0 lg:ml-auto mb-6 lg:mb-2" />}
      />

      {/* Section tabs */}
      <div className="sticky top-[6.75rem] z-30 bg-wagon-board border-b-2 border-wagon-ink">
        <nav
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex gap-6 sm:gap-8 overflow-x-auto scrollbar-hide"
          aria-label="Menu sections"
        >
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={cn(
                "py-3.5 text-sm font-bold whitespace-nowrap border-b-[3px] -mb-[2px] transition-colors",
                active === s.id ? "border-wagon-ink text-wagon-ink" : "border-transparent text-wagon-ink/55 hover:text-wagon-ink",
              )}
            >
              {s.label}
            </a>
          ))}
        </nav>
      </div>

      {/* The board */}
      <section className="paper bg-wagon-board py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-12 items-start">
          <div id="classics" className="scroll-mt-44 lg:col-span-7">
            <Board title="Classics">
              <p className="text-sm text-wagon-text/65 mb-2">
                Three meats on the board: <strong className="text-wagon-text/85">hot dog</strong>,{" "}
                <strong className="text-wagon-text/85">mild Polish</strong> or{" "}
                <strong className="text-wagon-text/85">hot link</strong>. Where you see three prices, that’s the choice.
              </p>
              <Rows items={classics} />
            </Board>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div id="specialties" className="scroll-mt-44">
              <Board title="Wagon Specialties" tone="red">
                <p className="text-sm text-wagon-text/65 mb-2">Combinations good enough to earn a name on the board.</p>
                <Rows items={specialties} />
              </Board>
            </div>
            <div id="extras" className="scroll-mt-44">
              <Board title="Toppings">
                <p className="text-sm text-wagon-text/65">
                  Pile on as many as you like. “The Works” means all of them.
                </p>
                <ul className="mt-4 columns-2 sm:columns-3 gap-x-5 text-[14px] font-medium text-wagon-text/85 leading-[1.9] whitespace-nowrap">
                  {toppings.map((t) => (
                    <li key={t} className="break-inside-avoid flex items-center gap-2">
                      <span aria-hidden="true" className="inline-block w-2 h-2 bg-wagon-mustard border border-wagon-ink shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </Board>
            </div>
          </div>

          <div id="south" className="scroll-mt-44 lg:col-span-7">
            <Board title="South of the Border">
              <p className="text-sm text-wagon-text/65 mb-6">
                Salads, pockets and pies, all built on the same chili. The pies stack: each one adds to the last.
              </p>
              <Subhead note="each adds one thing">The pies</Subhead>
              <Rows items={pies} />
              <div className="mt-8">
                <Subhead>Salads &amp; pockets</Subhead>
                <Rows items={saladsAndPockets} />
              </div>
            </Board>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <Board title="Drinks & Extras" tone="red">
              <ul className="divide-y-2 divide-dotted divide-wagon-ink/15">
                {extras.map((x) => (
                  <li key={x.name} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex flex-wrap items-baseline gap-x-3">
                      <h4 className="item-name text-2xl">{x.name}</h4>
                      <Price value={x.price} />
                    </div>
                    <p className="mt-2 text-[14px] leading-snug text-wagon-text/70">{x.desc}</p>
                  </li>
                ))}
              </ul>
            </Board>

            <div className="board bg-wagon-cream p-5 sm:p-6">
              <p className="font-display text-2xl text-wagon-green">Ordering at the window</p>
              <ol className="mt-3 space-y-2 text-[15px] text-wagon-text/80 leading-snug list-none">
                {[
                  "Say the name off the board.",
                  "Where there are three prices, pick hot dog, mild Polish or hot link.",
                  "Pay in cash. Prices are in dollars, and there’s an ATM right next door.",
                ].map((s, i) => (
                  <li key={s} className="flex gap-3">
                    <span className="font-display text-wagon-red text-lg leading-none mt-0.5">{i + 1}.</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ol>
              <ul className="mt-4 pt-3 border-t-2 border-dotted border-wagon-ink/20 space-y-1.5 text-sm text-wagon-text/70 leading-snug">
                <li>Window is open Monday to Friday, 10:30 AM to 2:00 PM.</li>
                <li>Everything is takeout. Benches nearby if the sun is out.</li>
              </ul>
              <p className="mt-4 text-xs text-wagon-text/55">Prices updated October 2026.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-wagon-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <p className="font-display text-4xl sm:text-5xl leading-none">Hungry yet?</p>
            <p className="mt-2 text-white/80">
              {placeData.street}, downtown Vancouver · Mon – Fri, 10:30 AM – 2:00 PM
            </p>
          </div>
          <Button href={placeData.mapsUrl} variant="mustard">
            <MapPin className="w-5 h-5" /> Get directions
          </Button>
        </div>
      </section>
    </div>
  );
}
