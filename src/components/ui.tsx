import type { ComponentPropsWithoutRef, CSSProperties, ReactNode } from "react";
import { Link } from "react-router-dom";
import { cn } from "../lib/utils";
import { useWindowStatus } from "../lib/hours";

type Variant = "red" | "green" | "mustard" | "paper";

type ButtonProps = {
  variant?: Variant;
  size?: "md" | "sm";
  to?: string;
  href?: string;
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<"button">, "className" | "children">;

export function Button({ variant = "red", size = "md", to, href, className, children, ...rest }: ButtonProps) {
  const classes = cn("btn", `btn-${variant}`, size === "sm" && "btn-sm", className);
  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}

export function Eyebrow({
  children,
  tone,
  className,
}: {
  children: ReactNode;
  tone?: "green" | "mustard" | "white";
  className?: string;
}) {
  return <p className={cn("eyebrow", tone && `is-${tone}`, className)}>{children}</p>;
}

export function SectionTitle({
  eyebrow,
  title,
  lede,
  tone = "green",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  tone?: "green" | "red" | "white";
  align?: "left" | "center";
  className?: string;
}) {
  const color = tone === "white" ? "text-white" : tone === "red" ? "text-wagon-red" : "text-wagon-green";
  return (
    <div className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <Eyebrow tone={tone === "white" ? "mustard" : tone === "red" ? "green" : undefined} className="mb-4">
          {eyebrow}
        </Eyebrow>
      )}
      <h2 className={cn("font-display text-4xl sm:text-5xl leading-[0.95]", color)}>{title}</h2>
      {lede && (
        <p className={cn("mt-5 text-lg leading-relaxed", tone === "white" ? "text-white/80" : "text-wagon-text/80")}>
          {lede}
        </p>
      )}
    </div>
  );
}

export function Board({
  title,
  tone = "green",
  children,
  className,
  bodyClassName,
}: {
  title: ReactNode;
  tone?: "green" | "red";
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <section className={cn("board overflow-hidden", className)}>
      <h3 className={cn("board-head", tone === "red" && "is-red")}>{title}</h3>
      <div className={cn("p-5 sm:p-6", bodyClassName)}>{children}</div>
    </section>
  );
}

/** Hand-lettered hours sign that knows whether the window is open right now. */
export function OpenSign({ className }: { className?: string }) {
  const status = useWindowStatus();
  return (
    <div className={cn("board", className)}>
      <div className={cn("board-head flex items-center justify-between", !status.isOpen && "is-red")}>
        <span>The window</span>
        <span className="text-[0.7rem] font-sans font-bold tracking-[0.18em] opacity-90">{status.weekday}</span>
      </div>
      <div className="p-5">
        <p className={cn("font-display text-4xl leading-none", status.isOpen ? "text-wagon-green" : "text-wagon-red")}>
          {status.headline}
        </p>
        <p className="mt-2 text-sm text-wagon-text/75 leading-snug">{status.detail}</p>
        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-sm border-t-2 border-dotted border-wagon-ink/25 pt-3">
          <dt className="font-bold">Mon – Fri</dt>
          <dd>10:30 AM – 2:00 PM</dd>
          <dt className="font-bold">Sat – Sun</dt>
          <dd className="text-wagon-text/60">Closed</dd>
        </dl>
      </div>
    </div>
  );
}

/** Compact one-line status for the utility bar. */
export function OpenStatusLine({ className }: { className?: string }) {
  const status = useWindowStatus();
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border-l-[3px] pl-2 text-[11px] font-bold uppercase tracking-[0.16em]",
        status.isOpen ? "border-wagon-mustard" : "border-white/50",
        className,
      )}
    >
      {status.isOpen ? "Open now" : status.headline}
      <span className="hidden sm:inline">{status.isOpen ? " · closes 2:00 PM" : " · Mon–Fri 10:30–2"}</span>
    </span>
  );
}

export function StripeRule({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("stripe-rule", className)} />;
}

export function Awning({ className }: { className?: string }) {
  return <div aria-hidden="true" className={cn("awning", className)} />;
}

/** Page-top header shared by the inner pages: left-aligned, cream, no colour band. */
export function PageHeader({
  eyebrow,
  title,
  lede,
  aside,
}: {
  eyebrow: string;
  title: ReactNode;
  lede?: ReactNode;
  aside?: ReactNode;
}) {
  return (
    <section className="paper bg-wagon-cream border-b-2 border-wagon-ink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid gap-10 lg:grid-cols-[1.4fr_1fr] items-end">
        <div>
          <Eyebrow className="mb-5 rise">{eyebrow}</Eyebrow>
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[0.92] text-wagon-green rise" style={{ "--i": 1 } as CSSProperties}>
            {title}
          </h1>
          {lede && (
            <p className="mt-6 max-w-xl text-lg sm:text-xl text-wagon-text/80 leading-relaxed rise" style={{ "--i": 2 } as CSSProperties}>
              {lede}
            </p>
          )}
        </div>
        {aside && (
          <div className="rise" style={{ "--i": 3 } as CSSProperties}>
            {aside}
          </div>
        )}
      </div>
    </section>
  );
}
