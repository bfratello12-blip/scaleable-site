import { motion } from "motion/react";
import { Check, Sparkles } from "lucide-react";
import { useDemoModal } from "./DemoModalProvider";
import { useNavigate } from "react-router-dom";

type Plan = {
  name: string;
  price: string;
  period: string;
  description: string;
  highlighted?: boolean;
  badge?: string;
  features: string[];
  primary: { label: string; action: "request" | "demo" | "book" | "link"; href?: string };
  secondary?: { label: string; action: "request" | "demo" | "book" | "link"; href?: string };
};

const plans: Plan[] = [
  {
    name: "ScaleAble DIY",
    price: "$29",
    period: "per month",
    description: "For founders who want answers, not guesswork",
    features: [
      "Full ScaleAble platform access",
      "Blended MER, contribution and profit metrics",
      "Forward looking attribution insights",
      "Google Ads and Meta Ads integrations",
      "Initial setup and configuration",
      "One time ad account audit for Google and Meta",
      "Email support",
    ],
    primary: {
      label: "View Shopify App",
      action: "link",
      href: "https://apps.shopify.com/scaleable?search_id=6712a60d-86b3-4cb2-a7fc-f3c5c1581b69&surface_detail=scaleable&surface_inter_position=1&surface_intra_position=1&surface_type=search",
    },
    secondary: { label: "Watch Demo", action: "demo" },
  },
  {
    name: "ScaleAble Strategy",
    price: "$399",
    period: "per month",
    description: "Recommended",
    highlighted: true,
    badge: "Recommended",
    features: [
      "Everything in DIY plus",
      "Monthly 60 minute strategy call",
      "Performance review and clear action plan",
      "Budget allocation and scaling guidance",
      "Channel prioritization and decision support",
      "Priority email support",
    ],
    primary: { label: "Request Access", action: "request" },
    secondary: { label: "Book a Call", action: "book", href: "/go/book-strategy" },
  },
  {
    name: "ScaleAble Managed",
    price: "$2,500",
    period: "per month",
    description: "For brands that want profit focused growth handled end to end",
    features: [
      "Everything in Strategy plus",
      "Full Google Ads and Meta Ads management",
      "Ongoing optimization and testing",
      "Budget scaling with profit guardrails",
      "Monthly strategy and performance calls",
      "Direct email access to a senior ad manager",
      "Managed by an expert with over a decade of enterprise agency experience",
    ],
    primary: { label: "Book a Call", action: "book", href: "/go/book-managed" },
    secondary: { label: "Watch Demo", action: "demo" },
  },
];

export function Pricing() {
  const { openDemo } = useDemoModal();
  const navigate = useNavigate();

  const handle = (a: Plan["primary"]) => {
    if (a.action === "request") navigate("/request-access");
    else if (a.action === "demo") openDemo();
    else if (a.action === "link" && a.href) window.open(a.href, "_blank", "noopener,noreferrer");
    else if (a.action === "book" && a.href) navigate(a.href);
  };

  return (
    <section id="pricing" className="sa-section relative" style={{ background: "#FFFFFF" }}>
      <div className="sa-container">
        <div style={{ maxWidth: 760, textAlign: "center", margin: "0 auto" }}>
          <span className="sa-eyebrow" style={{ margin: "0 auto" }}>
            <span className="dot" />
            Transparent Pricing
          </span>
          <h2
            className="sa-display"
            style={{ marginTop: 20, fontSize: "clamp(34px, 4.5vw, 56px)", color: "var(--sa-ink-900)" }}
          >
            Choose Your <span className="sa-gradient-text">Growth Path</span>
          </h2>
          <p style={{ marginTop: 16, fontSize: 18, color: "var(--sa-ink-400)" }}>
            From DIY insights to fully managed growth — pick the plan that fits your stage
          </p>
        </div>

        <div
          className="grid"
          style={{
            marginTop: 56,
            gap: 20,
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            alignItems: "stretch",
          }}
        >
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              style={{
                position: "relative",
                borderRadius: 20,
                padding: 32,
                background: p.highlighted
                  ? "linear-gradient(180deg, #0A1628 0%, #102744 100%)"
                  : "#FFFFFF",
                border: p.highlighted ? "1px solid rgba(74,138,227,0.4)" : "1px solid var(--sa-ink-100)",
                boxShadow: p.highlighted
                  ? "0 30px 80px -20px rgba(43,114,215,0.45), inset 0 1px 0 rgba(255,255,255,0.06)"
                  : "var(--sa-shadow-soft)",
                color: p.highlighted ? "#E8EDF5" : "var(--sa-ink-900)",
                transform: p.highlighted ? "translateY(-8px)" : "none",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {p.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    padding: "6px 14px",
                    borderRadius: 999,
                    background: "linear-gradient(180deg, var(--sa-blue-400), var(--sa-blue-600))",
                    color: "#FFFFFF",
                    fontSize: 12,
                    fontWeight: 700,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    boxShadow: "0 12px 30px -10px rgba(43,114,215,0.55)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                  }}
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  {p.badge}
                </div>
              )}

              <div>
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: p.highlighted ? "#FFFFFF" : "var(--sa-ink-900)",
                  }}
                >
                  {p.name}
                </h3>
                <p
                  style={{
                    marginTop: 6,
                    fontSize: 14,
                    color: p.highlighted ? "#A8B6CC" : "var(--sa-ink-400)",
                    minHeight: 40,
                  }}
                >
                  {p.description}
                </p>
              </div>

              <div style={{ marginTop: 20, display: "flex", alignItems: "baseline", gap: 8 }}>
                <span
                  className="sa-display"
                  style={{
                    fontSize: 56,
                    color: p.highlighted ? "#FFFFFF" : "var(--sa-ink-900)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {p.price}
                </span>
                <span style={{ color: p.highlighted ? "#A8B6CC" : "var(--sa-ink-400)", fontSize: 14 }}>
                  {p.period}
                </span>
              </div>

              <div
                style={{
                  height: 1,
                  margin: "24px 0",
                  background: p.highlighted ? "rgba(255,255,255,0.10)" : "var(--sa-ink-100)",
                }}
              />

              <ul style={{ display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                {p.features.map((f) => (
                  <li
                    key={f}
                    style={{
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                      fontSize: 14.5,
                      color: p.highlighted ? "#D8E1EE" : "var(--sa-ink-700)",
                      lineHeight: 1.5,
                    }}
                  >
                    <span
                      style={{
                        flexShrink: 0,
                        width: 20,
                        height: 20,
                        borderRadius: 999,
                        marginTop: 1,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: p.highlighted ? "rgba(74,138,227,0.22)" : "var(--sa-blue-50)",
                        color: p.highlighted ? "#7DA9E8" : "var(--sa-blue-600)",
                      }}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 10 }}>
                <button
                  type="button"
                  onClick={() => handle(p.primary)}
                  className={p.highlighted ? "sa-btn sa-btn-primary" : "sa-btn sa-btn-primary"}
                  style={{ width: "100%" }}
                >
                  {p.primary.label}
                </button>
                {p.secondary && (
                  <button
                    type="button"
                    onClick={() => handle(p.secondary!)}
                    className={p.highlighted ? "sa-btn sa-btn-on-dark" : "sa-btn sa-btn-secondary"}
                    style={{ width: "100%" }}
                  >
                    {p.secondary.label}
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <p
          style={{
            marginTop: 32,
            textAlign: "center",
            color: "var(--sa-ink-400)",
            fontSize: 14,
          }}
        >
          No credit card or payment required until app install is complete.
        </p>
      </div>
    </section>
  );
}
