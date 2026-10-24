import { Link } from "react-router-dom";
import { usePageTitle } from "../components/Layout";
import { PHONE_DISPLAY, PHONE_HREF } from "../facts";
import { formatLongDate, upcomingDonutSaturdays } from "../schedule";

export function HomePage() {
  usePageTitle("The Swiss Pantry · Belvidere, Tennessee");
  const [next, following] = upcomingDonutSaturdays();

  return (
    <>
      <section className="hero">
        <img
          src="/images/interior.jpg"
          alt="Inside The Swiss Pantry, with bulk-food shelves and the frozen-food case"
        />
        <div className="hero-card">
          <p className="eyebrow">Belvidere, Tennessee</p>
          <h1>The Swiss Pantry</h1>
          <p>
            A bakery, deli, and bulk-food store on David Crockett Highway. Luke and Victoria
            Massey bought the bakery in April 2025. The store has about 35 years of tradition.
          </p>
          <p className="hero-phone">
            <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
          </p>
        </div>
      </section>

      <section className="donut-box wrap">
        <div>
          <p className="eyebrow">First and third Saturday</p>
          <h2>Donut Saturday</h2>
          {next ? <p className="donut-date">Next is {formatLongDate(next)}.</p> : null}
          {following ? <p>Then {formatLongDate(following)}.</p> : null}
          <p>
            Doors open at 8 a.m. and close at 5 p.m. The donut recipes have stayed the same for
            over 20 years. They do sell out, so an earlier stop is the safer plan.
          </p>
          <Link className="text-link" to="/bakery">
            Bakery details
          </Link>
        </div>
      </section>

      <section className="wrap split">
        <article>
          <h2>Sandwiches made to order</h2>
          <p>
            The deli menu is on the board in the store and on this site, with the prices published
            there. Call at least 20 minutes ahead. An order of 10 or more needs 60 minutes.
          </p>
          <Link className="text-link" to="/menu">
            See the menu
          </Link>
        </article>
        <article>
          <h2>The store</h2>
          <p>
            Bulk foods, pantry staples, candies, and goods from nearby farms share the floor with
            the bakery. Gift baskets are available on request.
          </p>
          <Link className="text-link" to="/store">
            What the store carries
          </Link>
        </article>
      </section>

      <section className="wrap guests">
        <h2>What guests mention</h2>
        <p>
          People write about fresh bread, cookies, cakes, donuts, pies, and pastries, and about
          planning a visit around Donut Saturday. Fried pies come up often. So do deli sandwiches
          on fresh bread, and a simple lunch while they are already in the store.
        </p>
        <p>
          They also describe a country store: bulk foods, pantry staples, candies, casseroles, and
          Amish and Mennonite goods that are hard to find elsewhere. The staff and the feeling of
          the place come up again and again, including from people who have been coming for years.
        </p>
        <p>
          The friction, when it shows up, is timing. Donuts, pies, and other limited items can be
          gone for the day, and a few seasonal things are only here for part of the year. The hours
          and the Donut Saturday calendar are the practical way to avoid that.
        </p>
      </section>
    </>
  );
}
