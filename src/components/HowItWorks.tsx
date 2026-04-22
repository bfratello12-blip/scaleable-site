import { motion } from "motion/react";
import { Plug, Receipt, LineChart, Rocket } from "lucide-react";
import costImg from "../assets/costsettings_scaleable.png";

const steps = [
  {
    n: "01",
    icon: Plug,
    title: "Connect Your Data",
    description:
      "Link Shopify for revenue and orders. Connect ad platforms (Google, Meta) for spend data.",
  },
  {
    n: "02",
    icon: Receipt,
    title: "Add Real Costs",
    description:
      "Define COGS and add all variable costs: shipping, fulfillment, processing fees, packaging, and materials.",
  },
  {
    n: "03",
    icon: LineChart,
    title: "See Profit vs Spend",
    description:
      "Watch how profit behaves as ad spend increases. Know exactly when margin starts to erode.",
  },
  {
    n: "04",
    icon: Rocket,
    title: "Scale with Confidence",
    description:
      "Make data-driven decisions based on actual profit. Add event markers to track the impact of every change.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="sa-section sa-surface-tinted relative overflow-hidden">
      <div className="sa-container">
        <div style={{ maxWidth: 760 }}>
          <span className="sa-eyebrow">
            <span className="dot" />
            Simple Setup
          </span>
          <h2
            className="sa-display"
            style={{ marginTop: 20, fontSize: "clamp(34px, 4.5vw, 56px)", color: "var(--sa-ink-900)" }}
          >
            How <span className="sa-gradient-text">ScaleAble</span> Works
          </h2>
          <p style={{ marginTop: 16, fontSize: 18, color: "var(--sa-ink-400)" }}>
            From data connection to profit clarity in minutes
          </p>
        </div>

        <div
          className="grid"
          style={{
            marginTop: 56,
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {steps.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.n}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="sa-card"
                style={{ padding: 28, position: "relative" }}
              >
                <div className="flex items-center" style={{ justifyContent: "space-between" }}>
                  <span className="sa-step-number">{s.n}</span>
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      background: "var(--sa-blue-50)",
                      border: "1px solid var(--sa-blue-100)",
                      color: "var(--sa-blue-600)",
                    }}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 style={{ marginTop: 16, fontSize: 19, fontWeight: 700, color: "var(--sa-ink-900)" }}>
                  {s.title}
                </h3>
                <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.55, color: "var(--sa-ink-400)" }}>
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Cost settings showcase */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="sa-card"
          style={{ marginTop: 56, padding: 0, overflow: "hidden" }}
        >
          <div className="grid lg:grid-cols-5" style={{ gap: 0 }}>
            <div
              className="lg:col-span-2"
              style={{
                padding: "clamp(28px, 4vw, 48px)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <h3
                className="sa-display"
                style={{
                  fontSize: "clamp(26px, 2.6vw, 36px)",
                  color: "var(--sa-ink-900)",
                }}
              >
                Define Your <span className="sa-gradient-text">True Costs</span>
              </h3>
              <p style={{ marginTop: 12, color: "var(--sa-ink-500)", lineHeight: 1.6, fontSize: 16 }}>
                Add all variable costs to compute accurate contribution profit and Profit Return on
                Costs
              </p>
            </div>
            <div
              className="lg:col-span-3"
              style={{
                background: "linear-gradient(135deg, var(--sa-blue-50), #F4F8FE)",
                padding: "clamp(20px, 3vw, 40px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={costImg}
                alt="Cost Settings"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: 12,
                  boxShadow: "var(--sa-shadow-lift)",
                  border: "1px solid var(--sa-ink-100)",
                  background: "#fff",
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
