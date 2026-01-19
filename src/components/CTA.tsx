import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export function CTA() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white to-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary to-primary/90 p-16 md:p-20 text-center shadow-2xl"
        >
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-8"
            >
              <Sparkles className="h-4 w-4 text-white" />
              <span className="text-sm font-semibold text-white">Start Free Today</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
              className="text-4xl md:text-6xl text-white mb-6 font-bold leading-tight"
            >
              Ready to Scale with Confidence?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.4, ease: "easeOut" }}
              className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed"
            >
              Stop guessing. Start scaling based on actual profit. See exactly how your margins behave as ad spend increases.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
            >
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base font-bold px-8 shadow-xl hover:shadow-2xl transition-all">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="ghost" className="w-full sm:w-auto text-base font-bold px-8 text-white hover:bg-white/10 border border-white/30">
                Get Started
              </Button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
              className="text-white/80 font-medium"
            >
              No credit card required • 14-day free trial • Cancel anytime
            </motion.p>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2" />
        </motion.div>
      </div>
    </section>
  );
}