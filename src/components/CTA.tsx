import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTA() {
  return (
    <section className="sa-section relative overflow-hidden">
      <div className="sa-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="sa-surface-dark"
          style={{
            position: "relative",
            borderRadius: 28,
            padding: "clamp(48px, 7vw, 96px) clamp(28px, 5vw, 72px)",
            overflow: "hidden",
            border: "1px solid rgba(74,138,227,0.22)",
            textAlign: "center",
          }}
        >
          <div className="sa-noise" />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px),linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage: "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 75%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 60% 60% at 50% 50%, #000 30%, transparent 75%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative" }}>
            <span className="sa-eyebrow on-dark" style={{ margin: "0 auto" }}>
              <Sparkles className="h-3.5 w-3.5" />
              Get Started Today
            </span>

            <h2
              className="sa-display"
              style={{
                marginTop: 20,
                fontSize: "clamp(36px, 5.5vw, 68px)",
                color: "#FFFFFF",
              }}
            >
              Ready to Scale with{" "}
              <span style={{
                background: "linear-gradient(135deg, #7DA9E8 0%, #FFFFFF 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}>
                Confidence?
              </span>
            </h2>
            <p
              style={{
                marginTop: 18,
                fontSize: 18,
                color: "#A8B6CC",
                maxWidth: 680,
                margin: "18px auto 0",
                lineHeight: 1.55,
              }}
            >
              Stop guessing. Start scaling based on actual profit. See exactly how your margins
              behave as ad spend increases.
            </p>

            <div
              className="flex flex-wrap"
              style={{ gap: 12, justifyContent: "center", marginTop: 32 }}
            >
              <a href="/go/book-demo" className="sa-btn sa-btn-primary sa-btn-lg">
                Book a Demo
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#pricing" className="sa-btn sa-btn-on-dark sa-btn-lg">
                Get Started
              </a>
            </div>

            <p
              style={{
                marginTop: 20,
                color: "#7E8DA5",
                fontSize: 13,
              }}
            >
              No credit card or payment required until after install • Cancel anytime
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
