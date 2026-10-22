import { Github, ExternalLink, FolderGit2 } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function OtherProjects() {
  const { t } = useApp();

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 py-20" aria-label={t.otherProjects.heading}>
      <p className="section-tag mb-2">{t.otherProjects.tag}</p>
      <h2 className="section-heading mb-10">{t.otherProjects.heading}</h2>

      <div className="grid sm:grid-cols-2 gap-6">
        {t.otherProjects.items.map((project, i) => (
          <div key={i} className="card reveal">
            <div className="flex items-start justify-between mb-3">
              <FolderGit2 size={28} style={{ color: "var(--accent)" }} />
              {project.link.startsWith("http") ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t.common.viewProject}: ${project.title}`}
                  style={{ color: "var(--text-secondary)" }}
                >
                  <ExternalLink size={18} />
                </a>
              ) : (
                <span style={{ color: "var(--text-secondary)" }} aria-label={t.common.github}>
                  <Github size={18} />
                </span>
              )}
            </div>
            <h3 className="font-semibold text-lg mb-2" style={{ color: "var(--text-primary)" }}>
              {project.title}
            </h3>
            <p className="text-sm mb-4" style={{ color: "var(--text-secondary)", lineHeight: 1.6 }}>
              {project.description}
            </p>
            <ul className="flex flex-wrap gap-2 list-none">
              {project.stack.map((tech, j) => (
                <li key={j}>
                  <span className="badge">{tech}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
