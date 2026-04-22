import { motion } from "motion/react";
import { Store, Gauge, Megaphone, TrendingUp, X } from "lucide-react";

const audiences = [
  {
    icon: Store,
    title: "DTC E-commerce Brands",
    description:
      "Founders and operators scaling Shopify stores who need profit clarity at every growth stage",
  },
  {
    icon: Gauge,
    title: "Performance-Driven Operators",
    description:
      "Teams tired of ROAS-driven decisions who want to scale based on real profitability metrics",
  },
  {
    icon: Megaphone,
    title: "Paid Media Teams",
    description:
      "Marketing teams managing significant ad budgets who need to prove ROI beyond surface metrics",
  },
  {
    icon: TrendingUp,
    title: "Growth-Stage Companies",
    description: "Brands ready to scale intelligently and avoid the margin erosion trap",
  },
];

export function ForWho() {
  return (
    <section id="for-who" className="sa-section relative" style={{ background: "#FFFFFF" }}>
      <div className="sa-container">
        <div style={{ maxWidth: 760 }}>
          <span className="sa-eyebrow">
            <span className="dot" />
            Who It's For
          </span>
          <h2
            className="sa-display"
            style={{ marginTop: 20, fontSize: "clamp(34px, 4.5vw, 56px)", color: "var(--sa-ink-900)" }}
          >
            Built for <span className="sa-gradient-text">Performance-Driven</span> Teams
          </h2>
          <p style={{ marginTop: 16, fontSize: 18, color: "var(--sa-ink-400)" }}>
            ScaleAble is not a general analytics dashboard — it's a profit-scaling decision tool
          </p>
        </div>

        <div
          className="grid"
          style={{
            marginTop: 48,
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {audiences.map((a, i) => {
            const Icon = a.icon;
            return (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="sa-card"
                style={{ padding: 28 }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 52,
                    height: 52,
                    borderRadius: 14,
                    background: "linear-gradient(180deg, var(--sa-blue-500), var(--sa-blue-700))",
                    color: "#FFFFFF",
                    boxShadow: "0 10px 24px -10px rgba(43,114,215,0.55)",
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 style={{ marginTop: 18, fontSize: 18, fontWeight: 700, color: "var(--sa-ink-900)" }}>
                  {a.title}
                </h3>
                <p style={{ marginTop: 10, color: "var(--sa-ink-500)", fontSize: 14.5, lineHeight: 1.55 }}>
                  {a.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Not for you */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45 }}
          style={{
            marginTop: 32,
            padding: "28px 32px",
            borderRadius: 16,
            background: "linear-gradient(180deg, #FFF6F6, #FFEFEF)",
            border: "1px solid #FBD0D0",
            display: "flex",
            gap: 20,
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              flexShrink: 0,
              width: 48,
              height: 48,
              borderRadius: 12,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "#FBE0E0",
              color: "#C0383E",
              border: "1px solid #F4B4B4",
            }}
          >
            <X className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "#7B2326" }}>Not for you if:</h3>
            <p style={{ marginTop: 8, color: "#9B3338", fontSize: 15.5, lineHeight: 1.55 }}>
              You're looking for another dashboard, better reporting, or more metrics. ScaleAble
              is about decision clarity at scale — knowing whether to increase spend, which
              products to push, and when to pull back.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
