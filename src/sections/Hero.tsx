import { useEffect, useState } from "react";
import { Download, Mail, MapPin } from "lucide-react";
import TypingText from "@/components/TypingText";
import { useApp } from "@/context/AppContext";

export default function Hero() {
  const { t } = useApp();
  const [showTitle, setShowTitle] = useState(false);
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [typedSubtitle, setTypedSubtitle] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShowTitle(true), 900);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!showTitle) return;
    const full = t.hero.subtitles[subtitleIndex];

    let delay = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        const next = full.slice(0, typedSubtitle.length + 1);
        setTypedSubtitle(next);
        if (next === full) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        const next = full.slice(0, typedSubtitle.length - 1);
        setTypedSubtitle(next);
        if (next === "") {
          setIsDeleting(false);
          setSubtitleIndex((prev) => (prev + 1) % t.hero.subtitles.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [showTitle, typedSubtitle, isDeleting, subtitleIndex, t.hero.subtitles]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20"
      aria-label="Section d'accueil"
    >
      <div className="max-w-6xl w-full grid md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-3">
          <div
            className="font-mono text-sm mb-4 p-3 rounded-lg"
            style={{
              background: "var(--surface)",
              border: "1px solid var(--border)",
              color: "var(--text-secondary)",
            }}
          >
            <span style={{ color: "var(--accent)" }}>┌──(</span>
            <span style={{ color: "var(--text-primary)" }}>wijdane</span>
            <span style={{ color: "var(--accent)" }}>㉿</span>
            <span style={{ color: "var(--text-primary)" }}>security</span>
            <span style={{ color: "var(--accent)" }}>)-[</span>
            <span style={{ color: "var(--text-primary)" }}>~</span>
            <span style={{ color: "var(--accent)" }}>]</span>
            <br />
            <span style={{ color: "var(--accent)" }}>└─$</span>{" "}
            <TypingText text={t.hero.prompt} speed={80} />
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
            {showTitle ? (
              <span style={{ opacity: 1, transition: "opacity 0.5s ease" }}>
                {t.hero.name}
              </span>
            ) : (
              <span style={{ opacity: 0 }}>{t.hero.name}</span>
            )}
          </h1>

          <p className="text-xl sm:text-2xl mb-2" style={{ color: "var(--accent)" }}>
            {t.hero.title}
          </p>

          <div className="font-mono text-lg mb-4 h-8" style={{ color: "var(--text-secondary)" }}>
            <span>{typedSubtitle}</span>
            <span className="typing-cursor" />
          </div>

          <p className="flex items-center gap-2 text-sm mb-6" style={{ color: "var(--text-secondary)" }}>
            <MapPin size={16} style={{ color: "var(--accent)" }} />
            {t.hero.location}
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="/assets/CV.pdf" download className="btn-primary" aria-label={t.hero.downloadCV}>
              <Download size={18} />
              {t.hero.downloadCV}
            </a>
            <a href="#contact" className="btn-secondary" aria-label={t.hero.contact}>
              <Mail size={18} />
              {t.hero.contact}
            </a>
          </div>
        </div>

        <div className="md:col-span-2 flex justify-center">
          <div
            className="w-56 h-56 sm:w-72 sm:h-72 rounded-2xl overflow-hidden"
            style={{
              border: "2px solid var(--border)",
              boxShadow: "0 0 30px rgba(0,217,255,0.1)",
              background: "var(--surface)",
            }}
          >
            <img
              src="/assets/photo.jpg"
              alt="Photo de Wijdane Hachani, ingénieure en cybersécurité"
              width={288}
              height={288}
              loading="eager"
              decoding="async"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
                const parent = (e.target as HTMLImageElement).parentElement;
                if (parent) {
                  parent.style.display = "flex";
                  parent.style.alignItems = "center";
                  parent.style.justifyContent = "center";
                  parent.style.fontSize = "4rem";
                  parent.style.fontFamily = "JetBrains Mono, monospace";
                  parent.style.color = "var(--accent)";
                  parent.textContent = "WH";
                }
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
