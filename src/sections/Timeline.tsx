import { Briefcase, GraduationCap } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Timeline() {
  const { t } = useApp();

  const isEducation = (idx: number) => idx === 0;

  return (
    <section id="timeline" className="max-w-4xl mx-auto px-4 sm:px-6 py-20" aria-label={t.timeline.heading}>
      <p className="section-tag mb-2">{t.timeline.tag}</p>
      <h2 className="section-heading mb-10">{t.timeline.heading}</h2>

      <div className="relative pl-12">
        <div className="timeline-line" />

        {t.timeline.items.map((item, i) => {
          const Icon = isEducation(i) ? GraduationCap : Briefcase;
          return (
            <div key={i} className="relative mb-10 reveal">
              <div
                className="absolute"
                style={{
                  left: "-3rem",
                  top: 0,
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "var(--surface)",
                  border: "3px solid var(--accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                }}
              >
                <Icon size={14} style={{ color: "var(--accent)" }} />
              </div>

              <div className="card" style={{ marginLeft: "1.5rem" }}>
                <span className="font-mono text-xs mb-1 block" style={{ color: "var(--accent)" }}>
                  {item.date}
                </span>
                <h3 className="font-semibold text-base mb-1" style={{ color: "var(--text-primary)" }}>
                  {item.title}
                </h3>
                <p className="font-mono text-sm mb-2" style={{ color: "var(--text-secondary)" }}>
                  {item.org}
                </p>
                <p className="text-sm" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
