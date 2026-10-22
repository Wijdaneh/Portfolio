import { Linkedin, Github, Mail, ShieldCheck } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function Footer() {
  const { t } = useApp();

  return (
    <footer
      className="px-4 sm:px-6 py-10"
      style={{ borderTop: "1px solid var(--border)", background: "var(--surface)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4">
        <div className="flex items-center gap-2">
          <ShieldCheck size={18} style={{ color: "var(--accent)" }} />
          <span className="font-mono font-semibold" style={{ color: "var(--text-primary)" }}>
            Wijdane Hachani
          </span>
        </div>

        <div className="flex gap-4">
          <a
            href="mailto:wijdane.hachani@example.com"
            aria-label={t.common.email}
            style={{ color: "var(--text-secondary)" }}
            className="transition-colors hover:text-[var(--accent)]"
          >
            <Mail size={20} />
          </a>
          <a
            href="[À_COMPLÉTER — URL LinkedIn]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.common.linkedin}
            style={{ color: "var(--text-secondary)" }}
            className="transition-colors hover:text-[var(--accent)]"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="[À_COMPLÉTER — URL GitHub]"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.common.github}
            style={{ color: "var(--text-secondary)" }}
            className="transition-colors hover:text-[var(--accent)]"
          >
            <Github size={20} />
          </a>
        </div>

        <div className="text-center">
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            {t.footer.rights}
          </p>
          <p className="text-xs mt-1 font-mono" style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
            {t.footer.built}
          </p>
        </div>
      </div>
    </footer>
  );
}
