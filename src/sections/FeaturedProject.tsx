import { useRef, useEffect, useState } from "react";
import { AlertTriangle, Lightbulb, CheckCircle2, Layers, Cpu } from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function FeaturedProject() {
  const { t } = useApp();
  const sectionRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState(-1);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let step = 0;
          const interval = setInterval(() => {
            setActiveStep(step);
            step++;
            if (step > 4) {
              clearInterval(interval);
              setActiveStep(4);
            }
          }, 600);
          return () => clearInterval(interval);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const fp = t.featuredProject;

  return (
    <section
      ref={sectionRef}
      id="featured-project"
      className="max-w-6xl mx-auto px-4 sm:px-6 py-20"
      aria-label={fp.heading}
    >
      <p className="section-tag mb-2">{fp.tag}</p>
      <h2 className="section-heading mb-10">{fp.heading}</h2>

      <div className="card mb-10" style={{ padding: "2rem", overflow: "hidden" }}>
        <h3 className="font-mono text-sm mb-4" style={{ color: "var(--text-secondary)" }}>
          {fp.diagram.title}
        </h3>

        <svg
          viewBox="0 0 900 220"
          style={{ width: "100%", height: "auto" }}
          role="img"
          aria-label={fp.diagram.title}
        >
          <line x1="150" y1="110" x2="270" y2="110" stroke="var(--accent)" strokeWidth="2" className={activeStep >= 1 ? "flow-line" : ""} style={{ opacity: activeStep >= 1 ? 1 : 0.2 }} />
          <line x1="420" y1="110" x2="540" y2="110" stroke="var(--accent)" strokeWidth="2" className={activeStep >= 2 ? "flow-line" : ""} style={{ opacity: activeStep >= 2 ? 1 : 0.2 }} />
          <line x1="690" y1="110" x2="810" y2="110" stroke="var(--accent)" strokeWidth="2" className={activeStep >= 3 ? "flow-line" : ""} style={{ opacity: activeStep >= 3 ? 1 : 0.2 }} />

          <g className={activeStep >= 0 ? "flow-node-active" : ""} style={{ opacity: activeStep >= 0 ? 1 : 0.4 }}>
            <rect x="30" y="70" width="120" height="80" rx="8" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
            <text x="90" y="105" textAnchor="middle" fill="var(--text-primary)" fontSize="13" fontFamily="JetBrains Mono, monospace" fontWeight="600">
              {fp.diagram.plcn}
            </text>
            <text x="90" y="125" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontFamily="JetBrains Mono, monospace">
              OT
            </text>
          </g>
          <text x="210" y="95" textAnchor="middle" fill="var(--accent)" fontSize="10" fontFamily="JetBrains Mono, monospace" style={{ opacity: activeStep >= 1 ? 1 : 0.3 }}>
            {fp.diagram.detect}
          </text>

          <g className={activeStep >= 1 ? "flow-node-active" : ""} style={{ opacity: activeStep >= 1 ? 1 : 0.4 }}>
            <rect x="270" y="70" width="150" height="80" rx="8" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
            <text x="345" y="105" textAnchor="middle" fill="var(--text-primary)" fontSize="13" fontFamily="JetBrains Mono, monospace" fontWeight="600">
              {fp.diagram.wazuh}
            </text>
            <text x="345" y="125" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontFamily="JetBrains Mono, monospace">
              {fp.diagram.detect}
            </text>
          </g>
          <text x="480" y="95" textAnchor="middle" fill="var(--accent)" fontSize="10" fontFamily="JetBrains Mono, monospace" style={{ opacity: activeStep >= 2 ? 1 : 0.3 }}>
            {fp.diagram.analyze}
          </text>

          <g className={activeStep >= 2 ? "flow-node-active" : ""} style={{ opacity: activeStep >= 2 ? 1 : 0.4 }}>
            <rect x="540" y="70" width="150" height="80" rx="8" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
            <text x="615" y="105" textAnchor="middle" fill="var(--text-primary)" fontSize="13" fontFamily="JetBrains Mono, monospace" fontWeight="600">
              {fp.diagram.mistral}
            </text>
            <text x="615" y="125" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontFamily="JetBrains Mono, monospace">
              {fp.diagram.analyze}
            </text>
          </g>
          <text x="750" y="95" textAnchor="middle" fill="var(--accent)" fontSize="10" fontFamily="JetBrains Mono, monospace" style={{ opacity: activeStep >= 3 ? 1 : 0.3 }}>
            {fp.diagram.respond}
          </text>

          <g className={activeStep >= 3 ? "flow-node-active" : ""} style={{ opacity: activeStep >= 3 ? 1 : 0.4 }}>
            <rect x="810" y="70" width="80" height="80" rx="8" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
            <text x="850" y="105" textAnchor="middle" fill="var(--text-primary)" fontSize="13" fontFamily="JetBrains Mono, monospace" fontWeight="600">
              {fp.diagram.n8n}
            </text>
            <text x="850" y="125" textAnchor="middle" fill="var(--text-secondary)" fontSize="10" fontFamily="JetBrains Mono, monospace">
              {fp.diagram.respond}
            </text>
          </g>

          <line x1="850" y1="150" x2="850" y2="180" stroke="var(--accent)" strokeWidth="2" className={activeStep >= 4 ? "flow-line" : ""} style={{ opacity: activeStep >= 4 ? 1 : 0.2 }} />
          <line x1="850" y1="180" x2="90" y2="180" stroke="var(--accent)" strokeWidth="2" className={activeStep >= 4 ? "flow-line" : ""} style={{ opacity: activeStep >= 4 ? 1 : 0.2 }} />
          <line x1="90" y1="180" x2="90" y2="150" stroke="var(--accent)" strokeWidth="2" className={activeStep >= 4 ? "flow-line" : ""} style={{ opacity: activeStep >= 4 ? 1 : 0.2 }} />

          <g style={{ opacity: activeStep >= 4 ? 1 : 0.3 }}>
            <rect x="380" y="168" width="140" height="24" rx="4" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />
            <text x="450" y="184" textAnchor="middle" fill="var(--accent)" fontSize="11" fontFamily="JetBrains Mono, monospace" fontWeight="600">
              {fp.diagram.pfsense} — {fp.diagram.block}
            </text>
          </g>
        </svg>

        <div className="flex flex-wrap justify-center gap-2 mt-4 sm:hidden">
          {[
            { n: fp.diagram.plcn, s: 0 },
            { n: fp.diagram.wazuh, s: 1 },
            { n: fp.diagram.mistral, s: 2 },
            { n: fp.diagram.n8n, s: 3 },
            { n: fp.diagram.pfsense, s: 4 },
          ].map((step) => (
            <span
              key={step.s}
              className="badge"
              style={{
                opacity: activeStep >= step.s ? 1 : 0.4,
                fontSize: "0.7rem",
              }}
            >
              {step.n}
            </span>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="card reveal">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle size={20} style={{ color: "#f59e0b" }} />
            <h3 className="font-semibold" style={{ color: "var(--text-primary)" }}>{fp.problem.label}</h3>
          </div>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{fp.problem.text}</p>
        </div>

        <div className="card reveal">
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={20} style={{ color: "var(--accent)" }} />
            <h3 className="font-semibold" style={{ color: "var(--text-primary)" }}>{fp.solution.label}</h3>
          </div>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{fp.solution.text}</p>
        </div>

        <div className="card reveal">
          <div className="flex items-center gap-2 mb-3">
            <CheckCircle2 size={20} style={{ color: "#22c55e" }} />
            <h3 className="font-semibold" style={{ color: "var(--text-primary)" }}>{fp.result.label}</h3>
          </div>
          <p style={{ color: "var(--text-secondary)", lineHeight: 1.7 }}>{fp.result.text}</p>
        </div>

        <div className="card reveal">
          <div className="flex items-center gap-2 mb-3">
            <Layers size={20} style={{ color: "var(--accent)" }} />
            <h3 className="font-semibold" style={{ color: "var(--text-primary)" }}>{fp.stack.label}</h3>
          </div>
          <ul className="flex flex-wrap gap-2 list-none">
            {fp.stack.items.map((item, i) => (
              <li key={i}>
                <span className="badge">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
