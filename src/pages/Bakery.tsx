import { usePageTitle } from "../components/Layout";
import { PHONE_DISPLAY, PHONE_HREF } from "../facts";
import { friedPieFlavors } from "../menu";
import { formatLongDate, upcomingDonutSaturdays } from "../schedule";

export function BakeryPage() {
  usePageTitle("Bakery · The Swiss Pantry");
  const [next, following] = upcomingDonutSaturdays();

  return (
    <div className="wrap page">
      <p className="eyebrow">Baked here</p>
      <h1>Bakery</h1>
      <p className="lede">
        Guests come for bread, cookies, cakes, donuts, pies, and pastries. Prices for the bakery
        case are at the counter. This page lists what the bakery has published, and it leaves the
        rest for a conversation at the store.
      </p>

      <section className="panel">
        <h2>Donut Saturday</h2>
        <p>
          The first and third Saturday of the month, from 8 a.m. to 5 p.m. On those Saturdays the
          store opens an hour earlier than a regular Saturday.
        </p>
        {next ? <p>Next Donut Saturday is {formatLongDate(next)}.</p> : null}
        {following ? <p>The one after that is {formatLongDate(following)}.</p> : null}
        <p>
          The usual glazes are vanilla, maple, and chocolate, and each month has a specialty
          donut. The recipes have been the same for over 20 years. Call{" "}
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a> if you want to know what is still in the case.
        </p>
      </section>

      <section>
        <h2>Fried pies</h2>
        <p>Fried pies are made on Mondays and Thursdays.</p>
        <ul className="flavor-list">
          {friedPieFlavors.map((flavor) => (
            <li key={flavor}>{flavor}</li>
          ))}
        </ul>
      </section>

      <section>
        <h2>Strawberry pies</h2>
        <p>Fresh strawberry pies are a yearly favorite from March through the end of May.</p>
      </section>

      <section>
        <h2>Gift baskets</h2>
        <p>
          Gift baskets are available on request. Call the store and ask what can be put together.
        </p>
      </section>
    </div>
  );
}
