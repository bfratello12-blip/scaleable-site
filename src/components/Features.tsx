import attributionImage from "../assets/Ad Attribution Trend Chart_Profit.png";
import performanceImage from "../assets/Event Performance Comparison_Profit.png";
import monthlyImage from "../assets/Monthly Performance Table_Profit.png";
import productPerformanceImage from "../assets/productperformancescaleable.png";
import { BarChart3 } from "lucide-react";
import { motion } from "motion/react";
import { FeatureLabel } from "./FeatureLabel";

const gradientText =
  "bg-gradient-to-b from-[#2B72D7] to-[#1f5fb8] bg-clip-text text-transparent";

export function Features() {
  return (
    <section className="py-28 px-6 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <BarChart3 className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Deep Insights
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl mb-6 font-bold text-foreground leading-tight">
            Deep Insights, Clear Decisions
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            See beyond surface metrics with attribution
            analysis, performance comparisons, and comprehensive
            data views
          </p>
        </motion.div>

        <div className="space-y-32">
          {/* Attribution Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <FeatureLabel>Ad Attribution</FeatureLabel>
              <h3 className="text-3xl md:text-4xl mb-5 font-bold text-foreground leading-tight">
                <span className={gradientText}>
                  Ad Attribution Over Time
                </span>
                : Ad ROAS vs. True ROAS
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Compare business truth (MER (True ROAS))
                vs. tracked ad return (ROAS) under forward
                windows. Understand how long it takes for
                ad spend to reach its full revenue impact.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    Daily windowed lines show True ROAS vs Ad ROAS
                    over time.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    See how ad spend is actually driving
                    revenue through other channels over time.
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    Spot when Ad ROAS looks great but True ROAS
                    deteriorates.
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border bg-white">
                <img
                  src={attributionImage}
                  alt="Attribution Analysis"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* Performance Comparison */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-bl from-primary/10 to-primary/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border bg-white">
                <img
                  src={performanceImage}
                  alt="Performance Comparison"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="order-1 lg:order-2"
            >
              <FeatureLabel>Event Tracking</FeatureLabel>
              <h3 className="text-3xl md:text-4xl mb-5 font-bold text-foreground leading-tight">
                <span className={gradientText}>
                  Track Changes
                </span>{" "}
                with Context
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Add business event markers and see exactly what
                changed after you made adjustments. No more
                guessing why performance shifted.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    Before/after comparison shows impact of
                    every change
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    See how revenue, orders, profit, and AOV
                    were affected
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    Understand cause-and-effect for pricing,
                    promotions, and budget changes
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>

          {/* Monthly Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <FeatureLabel>Performance History</FeatureLabel>
              <h3 className="text-3xl md:text-4xl mb-5 font-bold text-foreground leading-tight">
                Complete{" "}
                <span className={gradientText}>
                  Performance History
                </span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Track every metric that matters across time. See
                trends in revenue, orders, ad spend, ROAS, AOV,
                and profit — all in one comprehensive view.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    Monthly rollups with all key performance
                    indicators
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    Compare metrics across channels and time
                    periods
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    Identify seasonal patterns and scaling
                    opportunities
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary/10 to-primary/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border bg-white">
                <img
                  src={monthlyImage}
                  alt="Monthly Performance"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* Product Performance */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.5,
                delay: 0.2,
                ease: "easeOut",
              }}
              className="order-2 lg:order-1 relative"
            >
              <div className="absolute -inset-4 bg-gradient-to-bl from-primary/10 to-primary/5 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border bg-white">
                <img
                  src={productPerformanceImage}
                  alt="Product Performance"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="order-1 lg:order-2"
            >
              <FeatureLabel>Product Performance</FeatureLabel>
              <h3 className="text-3xl md:text-4xl mb-5 font-bold text-foreground leading-tight">
                See Which Products Actually Drive {" "}
                <span className={gradientText}>Profit</span>
              </h3>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Go beyond store-level reporting and understand performance at the
                product level. Product Performance helps you quickly identify which
                items are driving revenue, profit, margin, and sales velocity so
                you can make better merchandising and marketing decisions.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    View product-level revenue, profit, margin, and profit per
                    unit
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    Spot rising products, declining products, and low-inventory
                    risks
                  </span>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2.5 flex-shrink-0" />
                  <span className="text-muted-foreground leading-relaxed">
                    Identify true profit drivers and quickly find products that
                    need attention
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}