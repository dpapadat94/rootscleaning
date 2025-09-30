import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const linkBase = "px-3 py-2 rounded-lg text-sm font-medium";
const linkActive = "font-bold"; // <-- highlight color
const linkIdle = "text-gray-900 hover:bg-white/40";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home", end: true },
    { to: "/services", label: "Cleaning Services" },
    { to: "/organize", label: "Organizing" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* fixed below the 36px topbar */}
      <header
        className={`fixed top-9 left-0 right-0 z-40 bg-[#a3c585] transition-shadow ${
          scrolled || open ? "shadow-md" : ""
        }`}
      >
        <div className="mx-auto w-full max-w-6xl px-4 h-16 flex items-center justify-center">
          {/* center nav on desktop */}
          <nav className="hidden md:flex items-center gap-4">
            {links.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `${linkBase} ${isActive ? linkActive : linkIdle}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* mobile hamburger (right) */}
          <button
            className="absolute right-4 md:hidden inline-flex items-center justify-center rounded-lg p-2 text-gray-900 hover:bg-white/40"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </header>

      {/* mobile menu panel */}
      {open && (
        <nav
          className="fixed left-0 right-0 z-30 bg-[#e1f3c3] md:hidden"
          style={{ top: "100px" }} // 36px topbar + 64px navbar
        >
          <div className="mx-auto w-full max-w-6xl px-4 py-3 space-y-1 text-center">
            {links.map(({ to, label, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block ${linkBase} ${isActive ? linkActive : linkIdle}`
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
