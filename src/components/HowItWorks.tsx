import { ShoppingCart, DollarSign, TrendingUp, Tag, Zap } from "lucide-react";
import costsImage from "figma:asset/3386e895368e33b39547812024f2ec1681ff2376.png";
import { motion } from "motion/react";

export function HowItWorks() {
  const steps = [
    {
      icon: ShoppingCart,
      number: "01",
      title: "Connect Your Data",
      description: "Link Shopify for revenue and orders. Connect ad platforms (Google, Meta) for spend data."
    },
    {
      icon: Tag,
      number: "02",
      title: "Add Real Costs",
      description: "Define COGS and add all variable costs: shipping, fulfillment, processing fees, packaging, and materials."
    },
    {
      icon: TrendingUp,
      number: "03",
      title: "See Profit vs Spend",
      description: "Watch how profit behaves as ad spend increases. Know exactly when margin starts to erode."
    },
    {
      icon: DollarSign,
      number: "04",
      title: "Scale with Confidence",
      description: "Make data-driven decisions based on actual profit. Add event markers to track the impact of every change."
    }
  ];

  return (
    <section id="how-it-works" className="py-28 px-6 bg-gradient-to-b from-white to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Simple Setup</span>
          </div>
          <h2 className="text-4xl md:text-6xl mb-6 font-bold text-foreground leading-tight">
            How ScaleAble Works
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From data connection to profit clarity in minutes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                className="relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 relative">
                    <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-lg shadow-primary/25">
                      <Icon className="h-11 w-11 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-12 h-12 rounded-xl bg-white border-2 border-primary shadow-lg flex items-center justify-center">
                      <span className="text-base font-bold text-primary">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Cost Settings Example */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-center mb-10"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-b from-[#2B72D7] to-[#1f5fb8] bg-clip-text text-transparent mb-4">Define Your True Costs</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Add all variable costs to compute accurate contribution profit and Profit Return on Costs
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-border bg-white">
              <img
                src={costsImage}
                alt="Cost Settings"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}