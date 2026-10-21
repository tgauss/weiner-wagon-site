import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { placeData } from "../data/place";
import { Button, PageHeader } from "../components/ui";

const faqs: { q: string; a: ReactNode }[] = [
  {
    q: "Where exactly are you?",
    a: `${placeData.address}, inside ${placeData.locatedIn} in the ${placeData.neighborhood} neighborhood. Look for the green-and-white stripes and the giant hot dog.`,
  },
  {
    q: "What are your hours?",
    a: "Monday through Friday, 10:30 AM to 2:00 PM. Closed Saturday and Sunday.",
  },
  {
    q: "Do you take cards?",
    a: "Not yet. We are cash only for now, and there is an ATM right next door.",
  },
  {
    q: "What should I order the first time?",
    a: (
      <>
        The owner's three most popular: the Chili Dog, Skip’s Favorite, and the Odie Pie. All three are on the{" "}
        <Link to="/menu" className="font-bold text-wagon-red underline underline-offset-4">
          menu
        </Link>{" "}
        with current prices.
      </>
    ),
  },
  {
    q: "Is there anything vegetarian?",
    a: "The Vegetarian Delight: pocket bread filled with lettuce and your choice of fresh veggie toppings, with chili if you want it.",
  },
  {
    q: "Is it takeout only?",
    a: "Yes. Order at the window and take it with you. There are benches close by on a nice day.",
  },
  {
    q: "Where do I park?",
    a: "Free street parking around the block. Most people are in and out in ten minutes.",
  },
  {
    q: "Is the wagon wheelchair accessible?",
    a: `Yes. ${placeData.additionalInfo.accessibility.join(" and ")}.`,
  },
  {
    q: "Do you cater events?",
    a: (
      <>
        Yes, from office lunches to weddings. The{" "}
        <Link to="/catering" className="font-bold text-wagon-red underline underline-offset-4">
          catering page
        </Link>{" "}
        writes a note you can send the wagon on Instagram.
      </>
    ),
  },
  {
    q: "Can I follow you online?",
    a: (
      <>
        Follow{" "}
        <a
          href={placeData.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold text-wagon-red underline underline-offset-4"
        >
          @weinerwagon_downtown
        </a>{" "}
        on Instagram for updates and photos of Wacky McWiener.
      </>
    ),
  },
];

export function FAQ() {
  return (
    <div>
      <PageHeader eyebrow="FAQ" title="Questions, answered." lede="The things people ask at the window, so you can skip straight to ordering." />

      <section className="py-16 lg:py-24 bg-wagon-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-y-2 border-wagon-ink divide-y-2 divide-dotted divide-wagon-ink/25">
            {faqs.map((f, i) => (
              <details key={f.q} className="group" open={i === 0}>
                <summary className="cursor-pointer list-none flex items-center justify-between gap-6 py-5 font-display text-2xl sm:text-[1.7rem] leading-tight text-wagon-green [&::-webkit-details-marker]:hidden">
                  <span>{f.q}</span>
                  <Plus className="w-6 h-6 text-wagon-red shrink-0 transition-transform duration-200 group-open:rotate-45" />
                </summary>
                <p className="pb-6 -mt-1 text-lg leading-relaxed text-wagon-text/85 max-w-2xl">{f.a}</p>
              </details>
            ))}
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <p className="text-wagon-text/70">Still wondering about something?</p>
            <Button href={placeData.instagramUrl} variant="paper" size="sm">
              Ask on Instagram
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
