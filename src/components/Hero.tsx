import { Button } from "./ui/button";
import { ArrowRight, TrendingUp, Play } from "lucide-react";
import dashboardImage from "figma:asset/db1b677898e76d405af62df95ab8277374acb421.png";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative pt-40 pb-24 px-6 overflow-hidden bg-gradient-to-b from-white via-secondary/20 to-background">
      {/* Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.50]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(43, 114, 215, 0.18) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(43, 114, 215, 0.18) 1px, transparent 1px)
            `,
            backgroundSize: "64px 64px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-background" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -top-20 -left-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 backdrop-blur-sm"
          >
            <TrendingUp className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Profit-First Scaling for E-commerce
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="text-5xl md:text-7xl mb-6 tracking-tight font-bold text-foreground leading-[1.1]"
          >
            Scale Ad Spend Based on{" "}
            <span className="bg-gradient-to-b from-[#2B72D7] to-[#1f5fb8] bg-clip-text text-transparent">
              Actual Profit
            </span>
            ,
            <br />
            Not Just ROAS
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.2,
              ease: "easeOut",
            }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            ScaleAble shows whether increasing ad spend actually
            increases profit — using real costs and clear
            cause-and-effect context.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto text-base font-semibold px-8 bg-gradient-to-b from-[#2B72D7] to-[#1f5fb8] hover:opacity-90 transition-opacity"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base font-semibold px-8 border-2 hover:bg-muted/50"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.4,
              ease: "easeOut",
            }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-2xl blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border bg-white">
              <img
                src={dashboardImage}
                alt="ScaleAble Dashboard"
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}