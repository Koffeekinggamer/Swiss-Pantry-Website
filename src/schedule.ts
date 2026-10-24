export const TIME_ZONE = "America/New_York";

export type CalendarDate = {
  year: number;
  month: number;
  day: number;
};

export type ZonedDateTime = CalendarDate & {
  hour: number;
  minute: number;
};

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as const;

export function zonedDateTime(date: Date, timeZone = TIME_ZONE): ZonedDateTime {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hourCycle: "h23",
  }).formatToParts(date);
  const read = (type: Intl.DateTimeFormatPartTypes) =>
    Number(parts.find((part) => part.type === type)?.value);

  return {
    year: read("year"),
    month: read("month"),
    day: read("day"),
    hour: read("hour"),
    minute: read("minute"),
  };
}

/** Weekday of a calendar date in America/New_York. Sunday is 0. */
export function weekdayIndex(date: CalendarDate, timeZone = TIME_ZONE): number {
  const instant = new Date(Date.UTC(date.year, date.month - 1, date.day, 17, 0, 0));
  const label = new Intl.DateTimeFormat("en-US", {
    timeZone,
    weekday: "short",
  }).format(instant);
  const index = WEEKDAYS.indexOf(label as (typeof WEEKDAYS)[number]);
  if (index < 0) {
    throw new Error(`Unrecognized weekday ${label}`);
  }
  return index;
}

export function compareDates(a: CalendarDate, b: CalendarDate): number {
  return a.year - b.year || a.month - b.month || a.day - b.day;
}

/** First and third Saturdays of a month. Donut Saturday falls on these days. */
export function donutSaturdays(year: number, month: number): CalendarDate[] {
  const firstOfMonth = weekdayIndex({ year, month, day: 1 });
  const firstSaturday = 1 + ((6 - firstOfMonth + 7) % 7);
  return [firstSaturday, firstSaturday + 14].map((day) => ({ year, month, day }));
}

export function isDonutSaturday(date: CalendarDate): boolean {
  return donutSaturdays(date.year, date.month).some(
    (saturday) => compareDates(saturday, date) === 0,
  );
}

function isStillUpcoming(saturday: CalendarDate, now: ZonedDateTime): boolean {
  const comparison = compareDates(saturday, now);
  if (comparison > 0) return true;
  if (comparison < 0) return false;
  return now.hour < 17;
}

export function upcomingDonutSaturdays(now = new Date(), count = 2): CalendarDate[] {
  const zoned = zonedDateTime(now);
  const found: CalendarDate[] = [];
  let year = zoned.year;
  let month = zoned.month;

  for (let guard = 0; found.length < count && guard < 24; guard += 1) {
    for (const saturday of donutSaturdays(year, month)) {
      if (!isStillUpcoming(saturday, zoned)) continue;
      found.push(saturday);
      if (found.length === count) break;
    }
    month += 1;
    if (month > 12) {
      month = 1;
      year += 1;
    }
  }

  return found;
}

export function formatLongDate(date: CalendarDate): string {
  const instant = new Date(Date.UTC(date.year, date.month - 1, date.day, 17, 0, 0));
  return new Intl.DateTimeFormat("en-US", {
    timeZone: TIME_ZONE,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(instant);
}

export type DayHours = {
  label: string;
  hours: string;
  closed: boolean;
};

export function hoursFor(date: CalendarDate): DayHours {
  const weekday = weekdayIndex(date);
  if (weekday === 0) {
    return { label: "Sunday", hours: "Closed", closed: true };
  }
  if (isDonutSaturday(date)) {
    return { label: "Donut Saturday", hours: "8 a.m.–5 p.m.", closed: false };
  }
  if (weekday === 6) {
    return { label: "Saturday", hours: "9 a.m.–5 p.m.", closed: false };
  }
  const names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return { label: names[weekday], hours: "9 a.m.–6 p.m.", closed: false };
}

export function isOpenAt(now = new Date()): boolean {
  const zoned = zonedDateTime(now);
  const hours = hoursFor(zoned);
  if (hours.closed) return false;
  const start = isDonutSaturday(zoned) ? 8 : 9;
  const weekday = weekdayIndex(zoned);
  const end = weekday === 6 ? 17 : 18;
  const minutes = zoned.hour * 60 + zoned.minute;
  return minutes >= start * 60 && minutes < end * 60;
}
