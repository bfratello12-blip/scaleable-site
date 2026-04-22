import { motion } from "motion/react";
import { Eye, GitCompareArrows, Calendar, Package } from "lucide-react";
import attributionImg from "../assets/Ad Attribution Trend Chart_Profit.png";
import eventImg from "../assets/Event Performance Comparison_Profit.png";
import monthlyImg from "../assets/Monthly Performance Table_Profit.png";
import productImg from "../assets/product_performance_scaleable.png";

type Feat = {
  label: string;
  icon: typeof Eye;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  alt: string;
};

const items: Feat[] = [
  {
    label: "Ad Attribution",
    icon: Eye,
    title: "Ad Attribution Over Time: Ad ROAS vs. True ROAS",
    description:
      "Compare business truth (MER (True ROAS)) vs. tracked ad return (ROAS) under forward windows. Understand how long it takes for ad spend to reach its full revenue impact.",
    bullets: [
      "Daily windowed lines show True ROAS vs Ad ROAS over time.",
      "See how ad spend is actually driving revenue through other channels over time.",
      "Spot when Ad ROAS looks great but True ROAS deteriorates.",
    ],
    image: attributionImg,
    alt: "Attribution Analysis",
  },
  {
    label: "Event Tracking",
    icon: Calendar,
    title: "Track Changes with Context",
    description:
      "Add business event markers and see exactly what changed after you made adjustments. No more guessing why performance shifted.",
    bullets: [
      "Before/after comparison shows impact of every change",
      "See how revenue, orders, profit, and AOV were affected",
      "Understand cause-and-effect for pricing, promotions, and budget changes",
    ],
    image: eventImg,
    alt: "Performance Comparison",
  },
  {
    label: "Performance History",
    icon: GitCompareArrows,
    title: "Complete Performance History",
    description:
      "Track every metric that matters across time. See trends in revenue, orders, ad spend, ROAS, AOV, and profit — all in one comprehensive view.",
    bullets: [
      "Monthly rollups with all key performance indicators",
      "Compare metrics across channels and time periods",
      "Identify seasonal patterns and scaling opportunities",
    ],
    image: monthlyImg,
    alt: "Monthly Performance",
  },
  {
    label: "Product Performance",
    icon: Package,
    title: "See Which Products Actually Drive Profit",
    description:
      "Go beyond store-level reporting and understand performance at the product level. Product Performance helps you quickly identify which items are driving revenue, profit, margin, and sales velocity so you can make better merchandising and marketing decisions.",
    bullets: [
      "View product-level revenue, profit, margin, and profit per unit",
      "Spot rising products, declining products, and low-inventory risks",
      "Identify true profit drivers and quickly find products that need attention",
    ],
    image: productImg,
    alt: "Product Performance",
  },
];

export function Features() {
  return (
    <section className="sa-section relative" style={{ background: "#FFFFFF" }}>
      <div className="sa-container">
        <div style={{ maxWidth: 760 }}>
          <span className="sa-eyebrow">
            <span className="dot" />
            Deep Insights
          </span>
          <h2 className="sa-display" style={{ marginTop: 20, fontSize: "clamp(34px, 4.5vw, 56px)", color: "var(--sa-ink-900)" }}>
            Deep Insights, <span className="sa-gradient-text">Clear Decisions</span>
          </h2>
          <p style={{ marginTop: 16, fontSize: 18, color: "var(--sa-ink-400)", maxWidth: 620 }}>
            See beyond surface metrics with attribution analysis, performance comparisons, and comprehensive data views
          </p>
        </div>

        <div style={{ marginTop: 64, display: "flex", flexDirection: "column", gap: 32 }}>
          {items.map((f, i) => {
            const Icon = f.icon;
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
                className="sa-card"
                style={{ padding: 0, overflow: "hidden" }}
              >
                <div className="grid lg:grid-cols-2" style={{ gap: 0 }}>
                  <div style={{ padding: "clamp(28px, 4vw, 56px)", order: reverse ? 2 : 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 12px", borderRadius: 999, background: "var(--sa-blue-50)", border: "1px solid var(--sa-blue-100)", color: "var(--sa-blue-700)", fontSize: 12, fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", alignSelf: "flex-start" }}>
                      <Icon className="h-3.5 w-3.5" />
                      {f.label}
                    </div>
                    <h3 className="sa-display" style={{ marginTop: 16, fontSize: "clamp(24px, 2.4vw, 34px)", color: "var(--sa-ink-900)", letterSpacing: "-0.025em", lineHeight: 1.15 }}>
                      {f.title}
                    </h3>
                    <p style={{ marginTop: 12, color: "var(--sa-ink-500)", lineHeight: 1.6, fontSize: 16 }}>
                      {f.description}
                    </p>
                    <ul style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
                      {f.bullets.map((b) => (
                        <li key={b} style={{ display: "flex", gap: 12, alignItems: "flex-start", color: "var(--sa-ink-700)", fontSize: 15, lineHeight: 1.5 }}>
                          <span style={{ flexShrink: 0, marginTop: 7, width: 6, height: 6, borderRadius: 999, background: "var(--sa-blue-500)", boxShadow: "0 0 0 4px rgba(43,114,215,0.12)" }} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div style={{ order: reverse ? 1 : 2, background: "linear-gradient(135deg, var(--sa-blue-50) 0%, #F4F8FE 100%)", padding: "clamp(20px, 3vw, 40px)", display: "flex", alignItems: "center", justifyContent: "center", borderLeft: reverse ? "none" : "1px solid var(--sa-ink-100)", borderRight: reverse ? "1px solid var(--sa-ink-100)" : "none" }}>
                    <img src={f.image} alt={f.alt} style={{ width: "100%", height: "auto", borderRadius: 12, boxShadow: "var(--sa-shadow-lift)", border: "1px solid var(--sa-ink-100)", background: "#fff" }} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
