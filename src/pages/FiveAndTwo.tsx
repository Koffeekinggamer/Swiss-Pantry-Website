import { Link } from "react-router-dom";
import { usePageTitle } from "../components/Layout";
import { PHONE_DISPLAY, PHONE_HREF } from "../facts";

export function FiveAndTwoPage() {
  usePageTitle("5 & 2 · The Swiss Pantry");

  return (
    <div className="wrap page">
      <p className="eyebrow">Sourdough</p>
      <h1>5 &amp; 2</h1>
      <p className="lede">
        5 &amp; 2 Co. Sourdough is a Swiss Pantry brand. The bread is hand mixed and long fermented.
      </p>
      <p>
        House-made sourdough is on the deli board: the Cajun turkey, ham and Swiss, the BLT,
        chicken salad, and grilled cheese. Swedish rye, whole wheat, and the sub buns are
        house-made on the sandwiches that name them.
      </p>
      <p>
        Call <a href={PHONE_HREF}>{PHONE_DISPLAY}</a> to ask which loaves are out that day.
      </p>
      <p>
        <Link className="text-link" to="/menu">
          Sandwiches on house-made bread
        </Link>
      </p>
    </div>
  );
}
