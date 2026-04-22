import { motion } from "motion/react";
import { Calculator, BarChart3, Flag, GitBranch } from "lucide-react";
import profitChart from "../assets/Profit and Ad Spend Trend Chart.png";
import revenueChart from "../assets/Revenue ASP and MER Trend Charts_Profit.png";

const features = [
  {
    icon: Calculator,
    title: "True Cost Per Product",
    description:
      "Not just revenue vs spend — every product reflects its real margin after all costs (COGS, shipping, fulfillment, processing fees, packaging).",
  },
  {
    icon: BarChart3,
    title: "Profit vs Spend Clarity",
    description:
      "See exactly how profit changes as ad spend increases. Know where scaling works and where spend scales losses.",
  },
  {
    icon: Flag,
    title: "Business Event Markers",
    description:
      "Add events like price changes, budget shifts, promotions, and launches. Connect them to actual profit outcomes.",
  },
  {
    icon: GitBranch,
    title: "Cause → Effect Reporting",
    description:
      "Stop debating numbers. Understand why profit changes — not just that it changed. See the impact of every business decision.",
  },
];

export function Solution() {
  return (
    <section id="solution" className="sa-section sa-surface-tinted relative overflow-hidden">
      <div className="sa-container">
        <div style={{ maxWidth: 760 }}>
          <span className="sa-eyebrow">
            <span className="dot" />
            The ScaleAble Solution
          </span>
          <h2
            className="sa-display"
            style={{ marginTop: 20, fontSize: "clamp(34px, 4.5vw, 56px)", color: "var(--sa-ink-900)" }}
          >
            What Makes ScaleAble <span className="sa-gradient-text">Different</span>
          </h2>
          <p style={{ marginTop: 16, fontSize: 18, color: "var(--sa-ink-400)", maxWidth: 620 }}>
            ScaleAble combines Shopify revenue, ad spend, and true product costs into a single,
            profit-first view. Make scaling decisions with confidence.
          </p>
        </div>

        {/* Showcase: chart + side feature list */}
        <div
          className="grid"
          style={{
            marginTop: 56,
            gap: 32,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="sa-card"
            style={{ padding: 0, overflow: "hidden" }}
          >
            <div
              style={{
                padding: "20px 24px",
                borderBottom: "1px solid var(--sa-ink-100)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ fontSize: 12, color: "var(--sa-ink-400)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Profit & Ad Spend
                </div>
                <div className="sa-mono" style={{ fontSize: 22, color: "var(--sa-ink-900)", fontWeight: 600 }}>
                  $148,302 <span style={{ color: "var(--sa-green)", fontSize: 13, fontWeight: 600 }}>+12.4%</span>
                </div>
              </div>
              <span className="sa-chip"><span className="dot" />Live</span>
            </div>
            <img src={profitChart} alt="Profit and Ad Spend Trend Chart" style={{ width: "100%", display: "block" }} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="sa-card"
            style={{ padding: 0, overflow: "hidden" }}
          >
            <div
              style={{
                padding: "20px 24px",
                borderBottom: "1px solid var(--sa-ink-100)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div style={{ fontSize: 12, color: "var(--sa-ink-400)", textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  Revenue · ASP · MER
                </div>
                <div className="sa-mono" style={{ fontSize: 22, color: "var(--sa-ink-900)", fontWeight: 600 }}>
                  4.12<span style={{ color: "var(--sa-ink-400)", fontWeight: 400 }}>x MER</span>
                </div>
              </div>
              <span className="sa-chip"><span className="dot" />Live</span>
            </div>
            <img src={revenueChart} alt="Revenue, ASP, and MER Trend Charts" style={{ width: "100%", display: "block" }} />
          </motion.div>
        </div>

        {/* Feature 4-up */}
        <div
          className="grid"
          style={{
            marginTop: 48,
            gap: 16,
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          }}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="sa-card"
                style={{ padding: 24 }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    alignItems: "center",
                    justifyContent: "center",
                    background: "linear-gradient(180deg, var(--sa-blue-50), #FFFFFF)",
                    border: "1px solid var(--sa-blue-100)",
                    color: "var(--sa-blue-600)",
                  }}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 style={{ marginTop: 16, fontSize: 17, fontWeight: 700, color: "var(--sa-ink-900)" }}>
                  {f.title}
                </h3>
                <p style={{ marginTop: 8, fontSize: 14.5, lineHeight: 1.55, color: "var(--sa-ink-400)" }}>
                  {f.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
