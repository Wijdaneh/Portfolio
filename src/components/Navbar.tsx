import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Languages, ShieldCheck } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Navbar() {
  const { t, lang, setLang, theme, setTheme } = useApp();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#certifications", label: t.nav.certs },
    { href: "#featured-project", label: t.nav.project },
    { href: "#projects", label: t.nav.projects },
    { href: "#timeline", label: t.nav.timeline },
    { href: "#contact", label: t.nav.contact },
  ];

  const toggleLang = () => setLang(lang === "fr" ? "en" : "fr");
  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "var(--surface)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
        transition: "background 0.3s, border-color 0.3s",
        backdropFilter: scrolled ? "blur(10px)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16" aria-label="Navigation principale">
        <a
          href="#hero"
          className="flex items-center gap-2 font-mono font-semibold text-lg"
          style={{ color: "var(--accent)" }}
          aria-label="Accueil"
        >
          <ShieldCheck size={22} />
          <span>WH</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 list-none">
          {navItems.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="nav-link text-sm font-medium" style={{ textDecoration: "none" }}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm font-mono transition-colors"
            style={{
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
              background: "transparent",
            }}
            aria-label={lang === "fr" ? "Switch to English" : "Passer au français"}
          >
            <Languages size={16} />
            {lang.toUpperCase()}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md transition-colors"
            style={{
              color: "var(--text-secondary)",
              border: "1px solid var(--border)",
              background: "transparent",
            }}
            aria-label={theme === "dark" ? "Activer le mode clair" : "Enable dark mode"}
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md"
            style={{ color: "var(--text-secondary)", border: "1px solid var(--border)" }}
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <ul
          className="md:hidden list-none px-4 pb-4 flex flex-col gap-3"
          style={{ background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
        >
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="nav-link block text-sm font-medium py-2"
                style={{ textDecoration: "none" }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
