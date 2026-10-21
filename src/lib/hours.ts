import { useEffect, useState } from "react";

// The wagon runs on Pacific time regardless of where the visitor is.
const TZ = "America/Los_Angeles";
const OPEN_MIN = 10 * 60 + 30;
const CLOSE_MIN = 14 * 60;
const DAYS = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export type WindowStatus = {
  isOpen: boolean;
  /** Short, sign-sized line: "Open now", "Opens at 10:30", "Opens Monday". */
  headline: string;
  /** One sentence of context for the headline. */
  detail: string;
  /** Today's weekday name in Pacific time. */
  weekday: string;
};

export function getWindowStatus(now: Date = new Date()): WindowStatus {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  }).formatToParts(now);
  const part = (type: string) => parts.find((p) => p.type === type)?.value ?? "";

  const weekday = part("weekday");
  const hour = Number(part("hour")) % 24;
  const minutes = hour * 60 + Number(part("minute"));
  const dayIndex = DAYS.indexOf(weekday);
  const isWeekday = dayIndex >= 1 && dayIndex <= 5;

  if (isWeekday && minutes >= OPEN_MIN && minutes < CLOSE_MIN) {
    return {
      isOpen: true,
      headline: "Open now",
      detail: "The window closes at 2:00 PM.",
      weekday,
    };
  }
  if (isWeekday && minutes < OPEN_MIN) {
    return {
      isOpen: false,
      headline: "Opens at 10:30",
      detail: "Closed right now. The window opens at 10:30 AM today.",
      weekday,
    };
  }
  const next = dayIndex >= 1 && dayIndex <= 4 ? "tomorrow" : "Monday";
  return {
    isOpen: false,
    headline: `Opens ${next}`,
    detail: `Closed right now. The window opens ${next} at 10:30 AM.`,
    weekday,
  };
}

export function useWindowStatus(): WindowStatus {
  const [status, setStatus] = useState(() => getWindowStatus());
  useEffect(() => {
    const id = window.setInterval(() => setStatus(getWindowStatus()), 60_000);
    return () => window.clearInterval(id);
  }, []);
  return status;
}
