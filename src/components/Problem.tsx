import { motion } from "motion/react";
import { TrendingDown, AlertTriangle, HelpCircle } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Revenue grows, profit shrinks",
    description:
      "You increase ad spend, sales go up, but profit disappears. Without tracking real costs, you're scaling losses.",
  },
  {
    icon: AlertTriangle,
    title: "ROAS doesn't tell the full story",
    description:
      "A 4x ROAS looks great until you factor in COGS, shipping, fees, and fulfillment. What's the actual contribution profit?",
  },
  {
    icon: HelpCircle,
    title: "No clear cause and effect",
    description:
      "Profit changed. But why? Was it the price increase, the promotion, the budget shift, or something else entirely?",
  },
];

export function Problem() {
  return (
    <section className="sa-section sa-surface-dark relative overflow-hidden">
      <div className="sa-noise" />
      <div className="sa-container">
        <div style={{ maxWidth: 720 }}>
          <span className="sa-eyebrow on-dark">
            <span className="dot" style={{ background: "#FF6B6B", boxShadow: "0 0 0 3px rgba(255,107,107,0.18)" }} />
            The Problem
          </span>
          <h2
            className="sa-display"
            style={{
              marginTop: 20,
              fontSize: "clamp(34px, 4.5vw, 56px)",
              color: "#F4F8FE",
            }}
          >
            ROAS is lying to you. <span style={{ color: "#7DA9E8" }}>Profit is the truth.</span>
          </h2>
          <p style={{ marginTop: 16, fontSize: 18, color: "#A8B6CC", maxWidth: 580 }}>
            Three reasons most growth-stage brands hit a wall when scaling — and don't see it
            until margin has already eroded.
          </p>
        </div>

        <div
          className="grid"
          style={{
            marginTop: 56,
            gap: 20,
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          }}
        >
          {problems.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.08, ease: "easeOut" }}
                className="sa-card-dark"
                style={{ padding: 28 }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: "linear-gradient(180deg, rgba(255,107,107,0.16), rgba(255,107,107,0.04))",
                    border: "1px solid rgba(255,107,107,0.22)",
                    color: "#FF8A8A",
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3
                  style={{
                    marginTop: 18,
                    fontSize: 20,
                    fontWeight: 700,
                    color: "#FFFFFF",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {p.title}
                </h3>
                <p style={{ marginTop: 10, color: "#A8B6CC", lineHeight: 1.6 }}>{p.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
