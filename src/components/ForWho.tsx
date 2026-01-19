import { Users, Target, Rocket, BarChart } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";

export function ForWho() {
  const audiences = [
    {
      icon: Rocket,
      title: "DTC E-commerce Brands",
      description: "Founders and operators scaling Shopify stores who need profit clarity at every growth stage"
    },
    {
      icon: Target,
      title: "Performance-Driven Operators",
      description: "Teams tired of ROAS-driven decisions who want to scale based on real profitability metrics"
    },
    {
      icon: BarChart,
      title: "Paid Media Teams",
      description: "Marketing teams managing significant ad budgets who need to prove ROI beyond surface metrics"
    },
    {
      icon: Users,
      title: "Growth-Stage Companies",
      description: "Brands ready to scale intelligently and avoid the margin erosion trap"
    }
  ];

  return (
    <section id="for-who" className="py-28 px-6 bg-white border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Users className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Who It's For</span>
          </div>
          <h2 className="text-4xl md:text-6xl mb-6 font-bold text-foreground leading-tight">
            Built for Performance-Driven Teams
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            ScaleAble is not a general analytics dashboard — it's a profit-scaling decision tool
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-5xl mx-auto">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
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
                      <h3 className="mb-3 text-xl font-bold text-foreground">{audience.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{audience.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <Card className="p-10 border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-primary/10 shadow-lg">
            <p className="text-center text-xl font-bold text-foreground mb-4">
              Not for you if:
            </p>
            <p className="text-center text-lg text-muted-foreground leading-relaxed">
              You're looking for another dashboard, better reporting, or more metrics. ScaleAble is about decision clarity at scale — knowing whether to increase spend, which products to push, and when to pull back.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
