import { useMemo, useState, type ChangeEvent } from "react";
import { Copy, Instagram } from "lucide-react";
import { placeData } from "../data/place";
import { Board, Button, PageHeader, SectionTitle } from "../components/ui";

const reasons = [
  "A lunch people actually talk about afterwards.",
  "Easy crowd-pleaser: hot dogs, chili, and pies cover everyone.",
  "A fifty-year-old Vancouver landmark showing up at your event.",
  "Simple to host. The wagon brings the kitchen.",
];

const eventTypes = ["Office lunches", "Private parties", "Community events", "Weddings", "School gatherings", "Festivals"];

const field =
  "w-full rounded-md border-2 border-wagon-ink/25 bg-wagon-cream px-3 py-2.5 text-[15px] text-wagon-ink placeholder:text-wagon-text/40 focus:border-wagon-green focus:outline-none transition-colors";

export function Catering() {
  const [form, setForm] = useState({ name: "", date: "", location: "", guests: "", details: "" });
  const [copied, setCopied] = useState(false);

  const message = useMemo(
    () =>
      [
        "Hi Wiener Wagon! I'd love to ask about catering.",
        form.name && `Name: ${form.name}`,
        form.date && `Date: ${form.date}`,
        form.location && `Where: ${form.location}`,
        form.guests && `Guests: about ${form.guests}`,
        form.details && `Details: ${form.details}`,
      ]
        .filter(Boolean)
        .join("\n"),
    [form],
  );

  const update = (key: keyof typeof form) => (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setCopied(false);
    setForm((f) => ({ ...f, [key]: e.target.value }));
  };

  async function copyAndOpen() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
    } catch {
      setCopied(false);
    }
    window.open(placeData.instagramUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div>
      <PageHeader
        eyebrow="Catering & events"
        title={
          <>
            Bring the wagon <span className="text-wagon-red">to the party.</span>
          </>
        }
        lede="Office lunches, block parties, weddings that want hot dogs. The wagon takes catering questions on Instagram or at the window, and this page writes the note for you."
        aside={
          <figure className="board p-2 bg-white rotate-1 max-w-sm lg:ml-auto">
            <img
              src="/images/place/place-04.jpg"
              alt="The Wiener Wagon cart from the side, hitched and ready to roll"
              className="rounded-md border border-wagon-ink/20 w-full aspect-[16/10] object-cover"
            />
          </figure>
        }
      />

      <section className="py-20 lg:py-28 bg-wagon-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] items-start">
          <div>
            <SectionTitle eyebrow="Why book the wagon" title="Easy, fun, and full of personality." />
            <ul className="mt-8 space-y-4 text-lg leading-snug text-wagon-text/85">
              {reasons.map((r) => (
                <li key={r} className="flex gap-3">
                  <span aria-hidden="true" className="text-wagon-red font-bold">
                    ✓
                  </span>
                  {r}
                </li>
              ))}
            </ul>
            <p className="mt-10 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-wagon-green">Good for</p>
            <p className="mt-2 text-lg font-medium text-wagon-text/80 leading-relaxed">{eventTypes.join(" · ")}</p>
          </div>

          <Board title="Your note to the wagon" tone="red" className="bg-white">
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="block text-sm font-bold mb-1.5">Your name</span>
                <input className={field} value={form.name} onChange={update("name")} autoComplete="name" />
              </label>
              <label className="block">
                <span className="block text-sm font-bold mb-1.5">Event date</span>
                <input className={field} type="date" value={form.date} onChange={update("date")} />
              </label>
              <label className="block">
                <span className="block text-sm font-bold mb-1.5">Where</span>
                <input className={field} value={form.location} onChange={update("location")} placeholder="Esther Short Park" />
              </label>
              <label className="block">
                <span className="block text-sm font-bold mb-1.5">About how many people</span>
                <input className={field} type="number" min={1} inputMode="numeric" value={form.guests} onChange={update("guests")} />
              </label>
              <label className="block sm:col-span-2">
                <span className="block text-sm font-bold mb-1.5">Anything else</span>
                <textarea
                  className={field}
                  rows={3}
                  value={form.details}
                  onChange={update("details")}
                  placeholder="Office lunch, mostly chili dogs, a few vegetarians"
                />
              </label>
            </div>

            <div className="mt-6 rounded-md border-2 border-dotted border-wagon-ink/25 bg-wagon-bg p-4">
              <p className="text-[0.65rem] font-bold uppercase tracking-[0.18em] text-wagon-text/55">Preview</p>
              <pre className="mt-2 whitespace-pre-wrap font-sans text-[15px] leading-relaxed text-wagon-ink">{message}</pre>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
              <Button onClick={copyAndOpen} className="w-full sm:w-auto">
                <Copy className="w-4 h-4" /> Copy note and open Instagram
              </Button>
              <p className="text-sm text-wagon-text/65" aria-live="polite">
                {copied ? "Copied. Paste it into a message to @weinerwagon_downtown." : "Opens Instagram in a new tab."}
              </p>
            </div>

            <p className="mt-6 pt-5 border-t-2 border-dotted border-wagon-ink/20 text-sm text-wagon-text/70">
              Prefer to talk? Ask at the window any weekday, 10:30 AM to 2:00 PM, or{" "}
              <a
                href={placeData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-bold text-wagon-red underline underline-offset-4"
              >
                <Instagram className="w-4 h-4" /> message the wagon
              </a>{" "}
              directly.
            </p>
          </Board>
        </div>
      </section>
    </div>
  );
}
