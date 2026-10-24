import { usePageTitle } from "../components/Layout";

export function AboutPage() {
  usePageTitle("About · The Swiss Pantry");

  return (
    <div className="wrap page about">
      <p className="eyebrow">The Masseys</p>
      <h1>About</h1>
      <figure className="family">
        <img src={`${import.meta.env.BASE_URL}images/massey-family.jpg`} alt="The Massey family" />
        <figcaption>The Massey family.</figcaption>
      </figure>
      <p className="lede">
        Luke and Victoria Massey bought the bakery in April 2025. The Swiss Pantry already had
        about 35 years of tradition in Belvidere when they took it on.
      </p>
      <p>
        The store is still a bakery, a deli, and a place to stock a pantry. 5 &amp; 2 Co. Sourdough
        is the sourdough brand inside that same shop: hand mixed and long fermented, and baked for
        the counter and the sandwich board.
      </p>
      <p>
        Guests who have been coming for years still talk about the donuts, the fried pies, and a
        staff that knows the regulars. The hours, Donut Saturday, and the published sandwich menu
        are the practical parts of keeping that welcome clear.
      </p>
    </div>
  );
}
