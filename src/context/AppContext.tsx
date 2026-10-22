import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Lang } from "@/i18n/translations";

type Theme = "dark" | "light";

interface AppContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  theme: Theme;
  setTheme: (t: Theme) => void;
  t: (typeof translations)[Lang];
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("fr");
  const [theme, setThemeState] = useState<Theme>("dark");

  useEffect(() => {
    try {
      const storedLang = localStorage.getItem("lang");
      if (storedLang === "fr" || storedLang === "en") {
        setLangState(storedLang);
      }
    } catch {
      /* localStorage unavailable — default to FR */
    }
  }, []);

  useEffect(() => {
    try {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme === "light" || storedTheme === "dark") {
        setThemeState(storedTheme);
      }
    } catch {
      /* localStorage unavailable — default to dark */
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.setAttribute("data-languate", lang);
    document.documentElement.lang = lang;
  }, [theme, lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      localStorage.setItem("lang", l);
    } catch {
      /* ignore */
    }
  };

  const setTheme = (th: Theme) => {
    setThemeState(th);
    try {
      localStorage.setItem("theme", th);
    } catch {
      /* ignore */
    }
  };

  return (
    <AppContext.Provider value={{ lang, setLang, theme, setTheme, t: translations[lang] }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
