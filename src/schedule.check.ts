import { formatLongDate, upcomingDonutSaturdays } from "./schedule.ts";

function at(isoUtc: string): Date {
  return new Date(isoUtc);
}

function expectDates(label: string, now: Date, expected: string[]) {
  const actual = upcomingDonutSaturdays(now, expected.length).map(formatLongDate);
  const same = actual.length === expected.length && actual.every((value, index) => value === expected[index]);
  if (!same) {
    throw new Error(`${label}\n expected ${expected.join(" | ")}\n actual   ${actual.join(" | ")}`);
  }
}

expectDates("Friday afternoon, October 23, 2026", at("2026-10-23T19:00:00Z"), [
  "Saturday, November 7, 2026",
  "Saturday, November 21, 2026",
]);

expectDates("Donut Saturday morning", at("2026-11-07T15:00:00Z"), [
  "Saturday, November 7, 2026",
  "Saturday, November 21, 2026",
]);

expectDates("4 p.m. on Donut Saturday is still that Saturday", at("2026-11-07T21:00:00Z"), [
  "Saturday, November 7, 2026",
  "Saturday, November 21, 2026",
]);

expectDates("After 5 p.m. on Donut Saturday", at("2026-11-07T22:00:00Z"), [
  "Saturday, November 21, 2026",
  "Saturday, December 5, 2026",
]);

expectDates("December rolls into the new year", at("2026-12-19T22:00:00Z"), [
  "Saturday, January 2, 2027",
  "Saturday, January 16, 2027",
]);

console.log("Donut Saturday dates match America/New_York.");
