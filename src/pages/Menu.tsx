import { useEffect, useState, type ReactNode } from "react";
import { MapPin } from "lucide-react";
import { classics, extras, southOfBorder, specialties, toppings, type MenuItem } from "../data/menu";
import { placeData } from "../data/place";
import { Board, Button, PageHeader } from "../components/ui";
import { cn } from "../lib/utils";

const sections = [
  { id: "classics", label: "Classics" },
  { id: "specialties", label: "Wagon Specialties" },
  { id: "south", label: "South of the Border" },
  { id: "extras", label: "Toppings & Drinks" },
];
const sectionIds = sections.map((s) => s.id);

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

function Tag({ children, tone = "red" }: { children: ReactNode; tone?: "red" | "green" }) {
  return (
    <span
      className={cn(
        "text-[0.65rem] font-bold uppercase tracking-[0.18em]",
        tone === "red" ? "text-wagon-red" : "text-wagon-green",
      )}
    >
      {children}
    </span>
  );
}

function Row({ item }: { item: MenuItem }) {
  return (
    <li className="py-5 first:pt-0 last:pb-0">
      <div className="flex items-baseline gap-3">
        <h4 className="item-name text-2xl sm:text-[1.7rem]">{item.name}</h4>
        {item.price && (
          <>
            <span className="leader" aria-hidden="true" />
            <span className="font-display text-xl sm:text-2xl text-wagon-red tabular-nums">{item.price}</span>
          </>
        )}
      </div>
      {(item.popular || item.badge) && (
        <div className="mt-2 flex gap-4">
          {item.popular && (
            <Tag>
              <span aria-hidden="true">★ </span>most popular
            </Tag>
          )}
          {item.badge && <Tag tone="green">{item.badge}</Tag>}
        </div>
      )}
      <p className="mt-2 text-[15px] leading-snug text-wagon-text/75 max-w-prose">{item.desc}</p>
      {item.options && (
        <ul className="mt-3 grid grid-cols-3 gap-2">
          {item.options.map((o) => (
            <li key={o.meat} className="rounded-md border border-wagon-ink/20 bg-wagon-bg px-2.5 py-2">
              <span className="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-wagon-text/60">
                {o.meat}
              </span>
              <span className="block font-display text-lg text-wagon-red leading-none mt-1">{o.price}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

const pieLadder = ["Frito Pie", "Taco Pie", "Odie Pie", "Michael Bowl"];
const pieStep = ["Fritos + chili + the fixings", "+ taco meat", "+ sausage", "+ lettuce"];

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
        lede="Everything is made at the window while you wait. Dogs from $4, nothing over $11."
        aside={
          <figure className="board p-2 bg-white rotate-1 max-w-sm lg:ml-auto">
            <img
              src="/images/place/place-15.jpg"
              alt="The painted menu board on the side of the wagon"
              className="rounded-md border border-wagon-ink/20 w-full aspect-[16/10] object-cover"
            />
            <figcaption className="px-2 pt-2 pb-1 text-xs text-wagon-text/60">
              The real board on the real wagon. Prices below are the current ones.
            </figcaption>
          </figure>
        }
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
              <p className="text-sm text-wagon-text/65 mb-5">
                Pita bread or a bun, your pick. Choose hot dog, mild polish, or hot link.
              </p>
              <ul className="divide-y-2 divide-dotted divide-wagon-ink/15">
                {classics.map((item) => (
                  <Row key={item.name} item={item} />
                ))}
              </ul>
            </Board>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div id="specialties" className="scroll-mt-44">
              <Board title="Wagon Specialties" tone="red">
                <p className="text-sm text-wagon-text/65 mb-5">Named after the people who invented them.</p>
                <ul className="divide-y-2 divide-dotted divide-wagon-ink/15">
                  {specialties.map((item) => (
                    <Row key={item.name} item={item} />
                  ))}
                </ul>
              </Board>
            </div>
            <div id="extras" className="scroll-mt-44">
              <Board title="Toppings">
                <p className="font-medium leading-relaxed text-wagon-text/85">{toppings.join(" · ")}</p>
                <p className="mt-3 text-sm text-wagon-text/60">
                  Pile on as many as you like. “The Works” means all of them.
                </p>
              </Board>
            </div>
          </div>

          <div id="south" className="scroll-mt-44 lg:col-span-7">
            <Board title="South of the Border">
              <p className="text-sm text-wagon-text/65 mb-5">
                Proof the wagon does more than hot dogs. Salads, pockets, and pies, built on the same chili.
              </p>
              <ul className="divide-y-2 divide-dotted divide-wagon-ink/15">
                {southOfBorder.map((item) => (
                  <Row key={item.name} item={item} />
                ))}
              </ul>
              <div className="mt-8 -mx-5 sm:-mx-6 -mb-5 sm:-mb-6 px-5 sm:px-6 py-5 bg-wagon-bg border-t-2 border-wagon-ink">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-wagon-green">How the pies stack</p>
                <ol className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-x-3 gap-y-4">
                  {pieLadder.map((name, i) => {
                    const price = southOfBorder.find((p) => p.name === name)?.price;
                    return (
                      <li key={name} className="relative">
                        <span className="block text-[11px] text-wagon-text/55">{pieStep[i]}</span>
                        <span className="block font-display text-xl text-wagon-red leading-tight">{name}</span>
                        <span className="block text-sm font-bold">{price}</span>
                        {i < pieLadder.length - 1 && (
                          <span aria-hidden="true" className="hidden sm:block absolute right-0 top-5 text-wagon-ink/30 text-xl">
                            →
                          </span>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </div>
            </Board>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <Board title="Drinks & Extras" tone="red">
              <ul className="divide-y-2 divide-dotted divide-wagon-ink/15">
                {extras.map((x) => (
                  <li key={x.name} className="py-4 first:pt-0 last:pb-0">
                    <div className="flex items-baseline gap-3">
                      <h4 className="item-name text-2xl">{x.name}</h4>
                      <span className="leader" aria-hidden="true" />
                      <span className="font-display text-xl text-wagon-red">{x.price}</span>
                    </div>
                    <p className="mt-2 text-[14px] leading-snug text-wagon-text/70">{x.desc}</p>
                  </li>
                ))}
              </ul>
            </Board>

            <div className="board bg-wagon-cream p-5 sm:p-6">
              <p className="font-display text-2xl text-wagon-green">Good to know</p>
              <ul className="mt-3 space-y-2 text-[15px] text-wagon-text/80 leading-snug">
                <li>Cash only for now. There is an ATM right next door.</li>
                <li>Window is open Monday to Friday, 10:30 AM to 2:00 PM.</li>
                <li>Everything is takeout. Benches nearby if the sun is out.</li>
              </ul>
              <p className="mt-4 pt-3 border-t-2 border-dotted border-wagon-ink/20 text-xs text-wagon-text/55">
                Prices updated October 2026.
              </p>
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
