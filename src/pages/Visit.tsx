import { usePageTitle } from "../components/Layout";
import {
  ADDRESS,
  FACEBOOK_HREF,
  INSTAGRAM_HREF,
  MAPS_HREF,
  PHONE_DISPLAY,
  PHONE_HREF,
} from "../facts";
import {
  formatLongDate,
  hoursFor,
  isOpenAt,
  upcomingDonutSaturdays,
  zonedDateTime,
} from "../schedule";

const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

export function VisitPage() {
  usePageTitle("Visit · The Swiss Pantry");
  const now = new Date();
  const today = zonedDateTime(now);
  const todayHours = hoursFor(today);
  const open = isOpenAt(now);
  const [next, following] = upcomingDonutSaturdays(now);

  return (
    <div className="wrap page">
      <p className="eyebrow">Franklin County</p>
      <h1>Visit</h1>
      <p className="lede">
        {open ? "Open now." : "Closed now."}{" "}
        {todayHours.closed
          ? "Sunday the store is closed."
          : `${todayHours.label} hours are ${todayHours.hours}`}
      </p>

      <section className="visit-grid">
        <article>
          <h2>Address</h2>
          <p>{ADDRESS}</p>
          <p>
            <a href={MAPS_HREF}>Get directions</a>
          </p>
        </article>
        <article>
          <h2>Phone</h2>
          <p>
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          </p>
          <p>Sandwich orders: call at least 20 minutes ahead, or 60 minutes for 10 or more.</p>
        </article>
      </section>

      <section>
        <h2>Hours</h2>
        <table className="hours">
          <tbody>
            {weekdays.map((day) => (
              <tr key={day}>
                <th scope="row">{day}</th>
                <td>{day === "Saturday" ? "9 a.m.–5 p.m." : day === "Sunday" ? "Closed" : "9 a.m.–6 p.m."}</td>
              </tr>
            ))}
            <tr>
              <th scope="row">Donut Saturday</th>
              <td>8 a.m.–5 p.m.</td>
            </tr>
          </tbody>
        </table>
        <p>
          Donut Saturday is the 1st and 3rd Saturday. On those days the store opens at 8 a.m.
          {next ? ` Next is ${formatLongDate(next)}.` : ""}
          {following ? ` Then ${formatLongDate(following)}.` : ""}
        </p>
      </section>

      <section>
        <h2>Find the store</h2>
        <p>
          <a href={FACEBOOK_HREF}>Facebook</a>
          {" · "}
          <a href={INSTAGRAM_HREF}>Instagram</a>
        </p>
      </section>
    </div>
  );
}
