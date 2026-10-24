import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { AboutPage } from "./pages/About";
import { BakeryPage } from "./pages/Bakery";
import { FiveAndTwoPage } from "./pages/FiveAndTwo";
import { HomePage } from "./pages/Home";
import { MenuPage } from "./pages/Menu";
import { StorePage } from "./pages/Store";
import { VisitPage } from "./pages/Visit";

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="menu" element={<MenuPage />} />
        <Route path="bakery" element={<BakeryPage />} />
        <Route path="5-and-2" element={<FiveAndTwoPage />} />
        <Route path="store" element={<StorePage />} />
        <Route path="visit" element={<VisitPage />} />
        <Route path="about" element={<AboutPage />} />
      </Route>
    </Routes>
  );
}
