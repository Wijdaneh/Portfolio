import { useState, type FormEvent } from "react";
import { Send, CheckCircle2, AlertCircle, Mail, Linkedin, Github } from "lucide-react";
import { useApp } from "@/context/AppContext";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/[À_COMPLÉTER]";

export default function Contact() {
  const { t } = useApp();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData): boolean => {
    const errs: Record<string, string> = {};
    const name = (data.get("name") as string)?.trim();
    const email = (data.get("email") as string)?.trim();
    const message = (data.get("message") as string)?.trim();

    if (!name) errs.name = t.contact.requiredField;
    if (!email) errs.email = t.contact.requiredField;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = t.contact.invalidEmail;
    if (!message) errs.message = t.contact.requiredField;

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const honeypot = data.get("_gotcha") as string;
    if (honeypot) {
      setStatus("success");
      form.reset();
      return;
    }

    if (!validate(data)) return;

    setStatus("sending");
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto px-4 sm:px-6 py-20" aria-label={t.contact.heading}>
      <p className="section-tag mb-2">{t.contact.tag}</p>
      <h2 className="section-heading mb-4">{t.contact.heading}</h2>
      <p className="mb-8" style={{ color: "var(--text-secondary)" }}>{t.contact.intro}</p>

      <div className="card">
        <form onSubmit={handleSubmit} noValidate>
          <div
            style={{
              position: "absolute",
              left: "-9999px",
              top: "-9999px",
              width: 1,
              height: 1,
              overflow: "hidden",
            }}
            aria-hidden="true"
          >
            <label htmlFor="_gotcha">Do not fill this field</label>
            <input type="text" id="_gotcha" name="_gotcha" tabIndex={-1} autoComplete="off" />
          </div>

          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
              {t.contact.name}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder={t.contact.namePlaceholder}
              aria-invalid={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              className="w-full px-3 py-2.5 rounded-lg outline-none transition-colors"
              style={{
                background: "var(--bg)",
                border: `1px solid ${errors.name ? "#ef4444" : "var(--border)"}`,
                color: "var(--text-primary)",
              }}
            />
            {errors.name && (
              <p id="name-error" className="text-xs mt-1" style={{ color: "#ef4444" }} role="alert">
                {errors.name}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
              {t.contact.email}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder={t.contact.emailPlaceholder}
              aria-invalid={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              className="w-full px-3 py-2.5 rounded-lg outline-none transition-colors"
              style={{
                background: "var(--bg)",
                border: `1px solid ${errors.email ? "#ef4444" : "var(--border)"}`,
                color: "var(--text-primary)",
              }}
            />
            {errors.email && (
              <p id="email-error" className="text-xs mt-1" style={{ color: "#ef4444" }} role="alert">
                {errors.email}
              </p>
            )}
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-medium mb-1" style={{ color: "var(--text-primary)" }}>
              {t.contact.message}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder={t.contact.messagePlaceholder}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              className="w-full px-3 py-2.5 rounded-lg outline-none transition-colors resize-y"
              style={{
                background: "var(--bg)",
                border: `1px solid ${errors.message ? "#ef4444" : "var(--border)"}`,
                color: "var(--text-primary)",
              }}
            />
            {errors.message && (
              <p id="message-error" className="text-xs mt-1" style={{ color: "#ef4444" }} role="alert">
                {errors.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-primary w-full justify-center"
            aria-busy={status === "sending"}
          >
            <Send size={18} />
            {status === "sending" ? t.contact.sending : t.contact.send}
          </button>

          {status === "success" && (
            <div className="mt-4 flex items-center gap-2 p-3 rounded-lg" style={{ background: "rgba(34,197,94,0.1)", border: "1px solid rgba(34,197,94,0.3)" }} role="status">
              <CheckCircle2 size={20} style={{ color: "#22c55e" }} />
              <span className="text-sm" style={{ color: "#22c55e" }}>{t.contact.success}</span>
            </div>
          )}
          {status === "error" && (
            <div className="mt-4 flex items-center gap-2 p-3 rounded-lg" style={{ background: "rgba(239,68,68,0.1)", border: "1px solid rgba(239,68,68,0.3)" }} role="alert">
              <AlertCircle size={20} style={{ color: "#ef4444" }} />
              <span className="text-sm" style={{ color: "#ef4444" }}>{t.contact.error}</span>
            </div>
          )}
        </form>
      </div>

      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <a
          href="mailto:wijdane.hachani@example.com"
          className="flex items-center gap-2 text-sm transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          <Mail size={18} style={{ color: "var(--accent)" }} />
          {t.common.email}
        </a>
        <a
          href="[À_COMPLÉTER — URL LinkedIn]"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          <Linkedin size={18} style={{ color: "var(--accent)" }} />
          {t.common.linkedin}
        </a>
        <a
          href="[À_COMPLÉTER — URL GitHub]"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-sm transition-colors"
          style={{ color: "var(--text-secondary)" }}
        >
          <Github size={18} style={{ color: "var(--accent)" }} />
          {t.common.github}
        </a>
      </div>
    </section>
  );
}
