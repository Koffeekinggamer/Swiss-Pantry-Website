import { usePageTitle } from "../components/Layout";
import { PHONE_DISPLAY, PHONE_HREF } from "../facts";

export function StorePage() {
  usePageTitle("The Store · The Swiss Pantry");

  return (
    <div className="wrap page">
      <p className="eyebrow">Belvidere</p>
      <h1>The Store</h1>
      <figure className="store-figure">
        <img
          src={`${import.meta.env.BASE_URL}images/interior.jpg`}
          alt="Bulk-food tubs, jars, and the frozen-food case inside The Swiss Pantry"
        />
      </figure>
      <p className="lede">
        The Swiss Pantry is a bakery and a bulk-food store on the same floor. Guests stock up on
        pantry staples, candies, casseroles, and everyday goods, including Amish and Mennonite
        products.
      </p>

      <section>
        <h2>Bulk foods</h2>
        <p>
          The shelves hold bulk foods, candies, deli meats, and cheeses, along with gluten-free and
          sugar-free items in the bulk selection. Gift baskets can be made on request. Call{" "}
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a> and ask.
        </p>
      </section>

      <section>
        <h2>Triple T Farms</h2>
        <p>
          Beef comes from Triple T Farms: fresh, pasture-raised ground beef, with special cuts by
          pre-order. Mild and hot sausage is made with fresh pork sourced by Triple T Farms.
        </p>
      </section>

      <section>
        <h2>Soups</h2>
        <p>Homemade soups are seasonal, in the fall and winter. Ask which soup is on that day.</p>
      </section>
    </div>
  );
}
