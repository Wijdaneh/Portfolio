import { Award } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Certifications() {
  const { t } = useApp();

  return (
    <section id="certifications" className="max-w-6xl mx-auto px-4 sm:px-6 py-20" aria-label={t.certifications.heading}>
      <p className="section-tag mb-2">{t.certifications.tag}</p>
      <h2 className="section-heading mb-4">{t.certifications.heading}</h2>
      <p className="font-mono text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
        {t.certifications.placeholder}
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.certifications.list.map((cert, i) => (
          <div key={i} className="card reveal flex items-center gap-4">
            <div
              className="p-3 rounded-lg flex-shrink-0"
              style={{ background: "rgba(0,217,255,0.08)" }}
            >
              <Award size={28} style={{ color: "var(--accent)" }} />
            </div>
            <div>
              <h3 className="font-semibold text-base mb-1" style={{ color: "var(--text-primary)" }}>
                {cert.name}
              </h3>
              <p className="font-mono text-xs" style={{ color: "var(--text-secondary)" }}>
                {cert.org} — {cert.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
