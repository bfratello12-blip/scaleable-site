import { motion } from "motion/react";
import { ArrowRight, Play, TrendingUp, Sparkles } from "lucide-react";
import dashboardImage from "../assets/scaleabledashboard_homescreenview.webp";
import { useDemoModal } from "./DemoModalProvider";

export function Hero() {
  const { openDemo } = useDemoModal();

  return (
    <section
      className="relative overflow-hidden"
      style={{ paddingTop: 140, paddingBottom: 80, paddingLeft: "1.5rem", paddingRight: "1.5rem", background: "#FFFFFF" }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 sa-grid-bg pointer-events-none" />
      <div
        className="absolute pointer-events-none"
        style={{
          top: -200,
          right: -200,
          width: 700,
          height: 700,
          background: "radial-gradient(circle, rgba(43,114,215,0.18), transparent 60%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          top: 200,
          left: -200,
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(74,138,227,0.14), transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      <div className="sa-container">
        <div className="grid grid-cols-1 lg:grid-cols-12" style={{ gap: 48, alignItems: "center" }}>
          {/* Left: Copy */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <span className="sa-eyebrow" style={{ marginBottom: 24 }}>
              <span className="dot" />
              <TrendingUp className="h-3.5 w-3.5" />
              Profit-First Scaling for E-commerce
            </span>

            <h1
              className="sa-display"
              style={{
                marginTop: 24,
                fontSize: "clamp(40px, 6.2vw, 76px)",
                color: "var(--sa-ink-900)",
              }}
            >
              Scale Ad Spend Based on{" "}
              <span className="sa-gradient-text">Actual Profit</span>,
              <br />
              Not Just ROAS
            </h1>

            <p
              style={{
                marginTop: 24,
                fontSize: "clamp(17px, 1.4vw, 20px)",
                lineHeight: 1.55,
                color: "var(--sa-ink-400)",
                maxWidth: 560,
              }}
            >
              ScaleAble shows whether increasing ad spend actually increases profit — using real
              costs and clear cause-and-effect context.
            </p>

            <div className="flex flex-wrap" style={{ gap: 12, marginTop: 32 }}>
              <a href="#pricing" className="sa-btn sa-btn-primary sa-btn-lg">
                Get Started
                <ArrowRight className="h-5 w-5" />
              </a>
              <button type="button" onClick={() => openDemo()} className="sa-btn sa-btn-secondary sa-btn-lg">
                <Play className="h-4 w-4" />
                Watch Demo
              </button>
            </div>

            {/* Inline trust strip */}
            <div
              className="flex flex-wrap"
              style={{ gap: 24, marginTop: 36, color: "var(--sa-ink-400)", fontSize: 13 }}
            >
              <div className="flex items-center" style={{ gap: 8 }}>
                <Sparkles className="h-4 w-4" style={{ color: "var(--sa-blue-500)" }} />
                Shopify + Google + Meta
              </div>
              <div className="flex items-center" style={{ gap: 8 }}>
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: 999,
                    background: "var(--sa-green)",
                    boxShadow: "0 0 0 3px rgba(16,185,129,0.18)",
                  }}
                />
                No credit card required
              </div>
            </div>
          </motion.div>

          {/* Right: Dashboard with floating chips */}
          <motion.div
            className="lg:col-span-6 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          >
            <div
              className="absolute"
              style={{
                inset: -24,
                background:
                  "radial-gradient(ellipse at center, rgba(43,114,215,0.30), transparent 65%)",
                filter: "blur(40px)",
                pointerEvents: "none",
              }}
            />
            <div
              style={{
                position: "relative",
                borderRadius: 20,
                overflow: "hidden",
                background: "#fff",
                border: "1px solid var(--sa-ink-100)",
                boxShadow: "var(--sa-shadow-lift), var(--sa-shadow-glow)",
              }}
            >
              {/* fake browser chrome */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "10px 14px",
                  borderBottom: "1px solid var(--sa-ink-100)",
                  background: "linear-gradient(180deg, #FAFBFD, #F4F6FA)",
                }}
              >
                <span style={{ width: 10, height: 10, borderRadius: 999, background: "#FF5F57" }} />
                <span style={{ width: 10, height: 10, borderRadius: 999, background: "#FEBC2E" }} />
                <span style={{ width: 10, height: 10, borderRadius: 999, background: "#28C840" }} />
                <span
                  className="sa-mono"
                  style={{
                    marginLeft: 12,
                    fontSize: 11,
                    color: "var(--sa-ink-400)",
                  }}
                >
                  app.scaleableapp.com / dashboard
                </span>
              </div>
              <img src={dashboardImage} alt="ScaleAble Dashboard" style={{ width: "100%", display: "block" }} />
            </div>

            {/* Floating chip 1 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden md:flex sa-chip"
              style={{ position: "absolute", top: -14, left: -18 }}
            >
              <span className="dot" />
              True Profit +28.4%
            </motion.div>

            {/* Floating chip 2 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              className="hidden md:flex sa-chip"
              style={{ position: "absolute", bottom: -16, right: -16 }}
            >
              <span style={{ color: "var(--sa-blue-500)", fontWeight: 700 }}>MER</span>
              4.12x · live
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
