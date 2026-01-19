import { HelpCircle, CheckCircle2 } from "lucide-react";
import { Card } from "./ui/card";
import { motion } from "motion/react";

export function Questions() {
  const questions = [
    {
      question: "Are we still profitable at higher spend?",
      answer: "See real-time profit margins as you scale ad budgets"
    },
    {
      question: "Which products and channels scale cleanly?",
      answer: "Identify which offerings maintain margin under increased spend"
    },
    {
      question: "When does margin start to break?",
      answer: "Spot the exact inflection point before losses accelerate"
    },
    {
      question: "Did profit change because of spend, pricing, promos, or mix?",
      answer: "Track cause-and-effect relationships with event markers"
    }
  ];

  return (
    <section id="faq" className="py-28 px-6 bg-gradient-to-b from-background to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <HelpCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Key Questions</span>
          </div>
          <h2 className="text-4xl md:text-6xl mb-6 font-bold text-foreground leading-tight">
            Answer the Questions That Matter
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            ScaleAble helps you make scaling decisions based on actual profit, not surface-level ROAS
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {questions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
            >
              <Card className="p-8 border-2 border-border bg-white hover:border-primary/40 hover:shadow-xl transition-all duration-300 group h-full">
                <div className="flex items-start gap-4 mb-5">
                  <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                    <HelpCircle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground leading-snug pt-1">{item.question}</h3>
                </div>
                <div className="flex items-start gap-4 ml-14">
                  <CheckCircle2 className="h-5 w-5 text-primary/70 flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
