import { useApp } from "@/context/AppContext";

export default function About() {
  const { t } = useApp();

  return (
    <section id="about" className="max-w-6xl mx-auto px-4 sm:px-6 py-20" aria-label={t.about.heading}>
      <p className="section-tag mb-2">{t.about.tag}</p>
      <h2 className="section-heading mb-10">{t.about.heading}</h2>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{t.about.text1}</p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{t.about.text2}</p>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{t.about.text3}</p>
        </div>

        {/* Key metrics */}
        <div className="flex flex-col gap-4">
          {t.about.metrics.map((m, i) => (
            <div
              key={i}
              className="card text-center"
              style={{ padding: "1.25rem" }}
            >
              <div
                className="font-mono font-bold text-3xl mb-1"
                style={{ color: "var(--accent)" }}
              >
                {m.value}
              </div>
              <div className="text-sm" style={{ color: "var(--text-secondary)" }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
