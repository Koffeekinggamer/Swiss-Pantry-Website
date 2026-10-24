import { usePageTitle } from "../components/Layout";
import { PHONE_DISPLAY, PHONE_HREF } from "../facts";
import { buildYourOwn, favoriteSandwiches, simpleSandwiches, type Sandwich } from "../menu";

function SandwichItem({ item }: { item: Sandwich }) {
  return (
    <article className="sandwich">
      <header>
        <h3>{item.name}</h3>
        {item.price ? <p className="price">{item.price}</p> : null}
      </header>
      <p>{item.description}</p>
      {item.service ? <p className="service">{item.service}</p> : null}
      {item.note ? <p className="service">{item.note}</p> : null}
    </article>
  );
}

export function MenuPage() {
  usePageTitle("Menu · The Swiss Pantry");

  return (
    <div className="wrap page">
      <p className="eyebrow">Deli</p>
      <h1>Sandwiches</h1>
      <p className="lede">
        Prices are the ones published on the Swiss Pantry menu. Every sandwich is made to order.
        Call <a href={PHONE_HREF}>{PHONE_DISPLAY}</a> at least 20 minutes before pickup. An order
        of 10 sandwiches or more needs 60 minutes.
      </p>

      <h2>Favorites</h2>
      <div className="menu-list">
        {favoriteSandwiches.map((item) => (
          <SandwichItem key={item.name} item={item} />
        ))}
      </div>

      <h2>Keep it simple</h2>
      <div className="menu-list">
        {simpleSandwiches.map((item) => (
          <SandwichItem key={item.name} item={item} />
        ))}
      </div>

      <section className="build">
        <h2>Make your own</h2>
        <div className="option-grid">
          {buildYourOwn.map((group) => (
            <article key={group.label}>
              <h3>{group.label}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
