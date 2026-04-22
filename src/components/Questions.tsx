import { motion } from "motion/react";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";

const items = [
  {
    q: "Are we still profitable at higher spend?",
    a: "See real-time profit margins as you scale ad budgets",
  },
  {
    q: "Can we continue to scale profitably?",
    a: "Understand which ad channels push profitability, or diminish returns.",
  },
  {
    q: "When does margin start to break?",
    a: "Spot the exact inflection point before losses accelerate",
  },
  {
    q: "Did profit change because of spend, pricing, promos, or mix?",
    a: "Track cause-and-effect relationships with event markers",
  },
];

export function Questions() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="sa-section sa-surface-dark relative overflow-hidden">
      <div className="sa-noise" />
      <div className="sa-container">
        <div
          className="grid lg:grid-cols-12"
          style={{ gap: 48, alignItems: "start" }}
        >
          <div className="lg:col-span-5">
            <span className="sa-eyebrow on-dark">
              <span className="dot" />
              Key Questions
            </span>
            <h2
              className="sa-display"
              style={{
                marginTop: 20,
                fontSize: "clamp(34px, 4.5vw, 52px)",
                color: "#FFFFFF",
              }}
            >
              Answer the Questions That <span style={{ color: "#7DA9E8" }}>Matter</span>
            </h2>
            <p style={{ marginTop: 16, fontSize: 17, color: "#A8B6CC", lineHeight: 1.6 }}>
              ScaleAble helps you make scaling decisions based on actual profit, not surface-level
              ROAS
            </p>
          </div>

          <div className="lg:col-span-7" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {items.map((it, i) => {
              const isOpen = open === i;
              return (
                <motion.div
                  key={it.q}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="sa-card-dark"
                  style={{ overflow: "hidden" }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    style={{
                      width: "100%",
                      display: "flex",
                      gap: 16,
                      alignItems: "flex-start",
                      padding: 22,
                      textAlign: "left",
                      color: "#FFFFFF",
                      cursor: "pointer",
                      background: "transparent",
                      border: 0,
                    }}
                  >
                    <div
                      style={{
                        flexShrink: 0,
                        width: 36,
                        height: 36,
                        borderRadius: 10,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: "rgba(43,114,215,0.16)",
                        color: "#7DA9E8",
                        border: "1px solid rgba(106,161,236,0.28)",
                      }}
                    >
                      <HelpCircle className="h-4 w-4" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontWeight: 600, fontSize: 16.5, lineHeight: 1.4 }}>{it.q}</div>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.25 }}
                          style={{
                            marginTop: 10,
                            color: "#A8B6CC",
                            fontSize: 15,
                            lineHeight: 1.6,
                          }}
                        >
                          {it.a}
                        </motion.div>
                      )}
                    </div>
                    <div
                      style={{
                        flexShrink: 0,
                        width: 32,
                        height: 32,
                        borderRadius: 999,
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: isOpen ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.04)",
                        color: "#E8EDF5",
                      }}
                    >
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </div>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
