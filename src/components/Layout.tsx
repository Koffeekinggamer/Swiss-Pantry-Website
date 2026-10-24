import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ADDRESS, PHONE_DISPLAY, PHONE_HREF } from "../facts";
import { formatLongDate, upcomingDonutSaturdays, type CalendarDate } from "../schedule";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/menu", label: "Menu", end: false },
  { to: "/bakery", label: "Bakery", end: false },
  { to: "/5-and-2", label: "5 & 2", end: false },
  { to: "/store", label: "The Store", end: false },
  { to: "/visit", label: "Visit", end: false },
  { to: "/about", label: "About", end: false },
];

function bannerMessages(next: CalendarDate | undefined): string[] {
  return [
    next
      ? `Next Donut Saturday: ${formatLongDate(next)}, 8 a.m.–5 p.m.`
      : "Donut Saturday is the 1st and 3rd Saturday, 8 a.m.–5 p.m.",
    "Hand mixed and long fermented",
    "Strawberry pies from March through the end of May",
    "Fried pies on Mondays and Thursdays",
    "Monday–Friday 9 a.m.–6 p.m. · Saturday 9 a.m.–5 p.m. · Sunday closed",
  ];
}

function useNow(): Date {
  const [now, setNow] = useState(() => new Date());
  useEffect(() => {
    const id = window.setInterval(() => setNow(new Date()), 60_000);
    return () => window.clearInterval(id);
  }, []);
  return now;
}

export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title;
  }, [title]);
}

export function Layout() {
  const now = useNow();
  const [next] = upcomingDonutSaturdays(now, 1);
  const messages = bannerMessages(next);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <header className="site-header">
        <div className="header-bar">
          <NavLink to="/" className="brand" onClick={() => setMenuOpen(false)}>
            <img src={`${import.meta.env.BASE_URL}images/logo.png`} alt="The Swiss Pantry, Belvidere, Tennessee" />
          </NavLink>
          <button
            type="button"
            className="browse"
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((open) => !open)}
          >
            Browse
          </button>
        </div>
        <nav id="site-nav" className={menuOpen ? "site-nav open" : "site-nav"}>
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </header>
      <div className="rolling-banner" aria-label="Store announcements">
        <div className="rolling-track">
          {[0, 1].map((copy) => (
            <p key={copy} className="rolling-copy" aria-hidden={copy === 1}>
              {messages.map((message) => (
                <span key={message}>{message}</span>
              ))}
            </p>
          ))}
        </div>
      </div>
      <main id="content">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p className="footer-name">The Swiss Pantry</p>
        <p>{ADDRESS}</p>
        <p>
          <a href={PHONE_HREF}>{PHONE_DISPLAY}</a>
        </p>
        <p>Monday–Friday 9 a.m.–6 p.m. · Saturday 9 a.m.–5 p.m. · Sunday closed</p>
        <p>Donut Saturday, the 1st and 3rd Saturday, 8 a.m.–5 p.m.</p>
      </footer>
    </>
  );
}
