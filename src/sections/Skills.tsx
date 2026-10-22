import { ShieldAlert, Network, Server, Terminal, ClipboardCheck, Database, type LucideIcon } from "lucide-react";
import { useApp } from "@/context/AppContext";

const iconMap: Record<string, LucideIcon> = {
  ShieldAlert,
  Network,
  Server,
  Terminal,
  ClipboardCheck,
  Database,
};

export default function Skills() {
  const { t } = useApp();

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 py-20" aria-label={t.skills.heading}>
      <p className="section-tag mb-2">{t.skills.tag}</p>
      <h2 className="section-heading mb-10">{t.skills.heading}</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {t.skills.categories.map((cat, i) => {
          const Icon = iconMap[cat.icon] ?? Terminal;
          return (
            <div key={i} className="card reveal">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-2 rounded-lg"
                  style={{ background: "rgba(0,217,255,0.08)" }}
                >
                  <Icon size={22} style={{ color: "var(--accent)" }} />
                </div>
                <h3 className="font-semibold text-lg" style={{ color: "var(--text-primary)" }}>
                  {cat.title}
                </h3>
              </div>
              <ul className="flex flex-wrap gap-2 list-none">
                {cat.items.map((item, j) => (
                  <li key={j}>
                    <span className="badge" title={`${item.name} — ${item.level}`}>
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
