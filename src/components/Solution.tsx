import { CheckCircle2, TrendingUp, Package, Calendar } from "lucide-react";
import { Card } from "./ui/card";
import trendsImage from "figma:asset/d82ab57a4d53539cff20cade376cc42e06e55865.png";
import { motion } from "motion/react";

export function Solution() {
  const features = [
    {
      icon: Package,
      title: "True Cost Per Product",
      description: "Not just revenue vs spend — every product reflects its real margin after all costs (COGS, shipping, fulfillment, processing fees, packaging)."
    },
    {
      icon: TrendingUp,
      title: "Profit vs Spend Clarity",
      description: "See exactly how profit changes as ad spend increases. Know where scaling works and where spend scales losses."
    },
    {
      icon: Calendar,
      title: "Business Event Markers",
      description: "Add events like price changes, budget shifts, promotions, and launches. Connect them to actual profit outcomes."
    },
    {
      icon: CheckCircle2,
      title: "Cause → Effect Reporting",
      description: "Stop debating numbers. Understand why profit changes — not just that it changed. See the impact of every business decision."
    }
  ];

  return (
    <section id="solution" className="py-28 px-6 bg-gradient-to-b from-background to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <CheckCircle2 className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">The ScaleAble Solution</span>
          </div>
          <h2 className="text-4xl md:text-6xl mb-6 font-bold text-foreground leading-tight">
            What Makes ScaleAble Different
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            ScaleAble combines Shopify revenue, ad spend, and true product costs into a single, profit-first view. Make scaling decisions with confidence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
              >
                <Card className="p-8 border-2 border-border bg-white hover:border-primary/40 hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                      <Icon className="h-7 w-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-3 text-xl font-bold bg-gradient-to-b from-[#2B72D7] to-[#1f5fb8] bg-clip-text text-transparent">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Visual Representation */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="absolute -inset-6 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-3xl" />
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border bg-white">
            <img
              src={trendsImage}
              alt="Profit vs Spend Analysis"
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}