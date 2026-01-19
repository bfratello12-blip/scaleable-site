import { Check, Star, DollarSign } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { motion } from "motion/react";

export function Pricing() {
  const plans = [
    {
      name: "ScaleAble DIY",
      price: "$79",
      period: "per month",
      description:
        "For founders who want answers, not guesswork",
      features: [
        "Full ScaleAble platform access",
        "Blended MER, contribution and profit metrics",
        "Forward looking attribution insights",
        "Google Ads and Meta Ads integrations",
        "Initial setup and configuration",
        "One time ad account audit for Google and Meta",
        "Email support",
      ],
      secondaryCta: "Watch Demo",
      highlighted: false,
    },
    {
      name: "ScaleAble Strategy",
      price: "$399",
      period: "per month",
      description: "Recommended",
      features: [
        "Everything in DIY plus",
        "Monthly 60 minute strategy call",
        "Performance review and clear action plan",
        "Budget allocation and scaling guidance",
        "Channel prioritization and decision support",
        "Priority email support",
      ],
      secondaryCta: "Book a Call",
      highlighted: true,
    },
    {
      name: "ScaleAble Managed",
      price: "$2,500",
      period: "per month",
      description:
        "For brands that want profit focused growth handled end to end",
      features: [
        "Everything in Strategy plus",
        "Full Google Ads and Meta Ads management",
        "Ongoing optimization and testing",
        "Budget scaling with profit guardrails",
        "Monthly strategy and performance calls",
        "Direct email access to a senior ad manager",
        "Managed by an expert with over a decade of enterprise agency experience",
      ],
      secondaryCta: "Book a Call",
      highlighted: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-28 px-6 bg-white border-y border-border"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <DollarSign className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Transparent Pricing
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl mb-6 font-bold text-foreground leading-tight">
            Choose Your Growth Path
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From DIY insights to fully managed growth — pick the
            plan that fits your stage
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <Card
                className={`relative p-8 flex flex-col h-full transition-all duration-300 ${
                  plan.highlighted
                    ? "border-2 border-primary shadow-2xl shadow-primary/20 scale-[1.05] bg-white z-10"
                    : "border-2 border-border shadow-lg bg-white hover:border-primary/30 hover:shadow-xl"
                }`}
              >
                {/* Recommended Badge */}
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 bg-gradient-to-r from-primary to-primary/90 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg shadow-primary/40">
                      <Star className="h-4 w-4 fill-current" />
                      <span>Recommended</span>
                    </div>
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {plan.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed min-h-[3rem]">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing */}
                <div className="mb-8">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground font-medium">
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Primary CTA Button */}
                <Button
                  size="lg"
                  className="w-full mb-3 font-semibold text-base bg-gradient-to-b from-[#2B72D7] to-[#1f5fb8] hover:opacity-90 transition-opacity"
                >
                  Get Started
                </Button>

                {/* Secondary CTA */}
                <button className="w-full mb-8 text-sm font-medium text-primary hover:text-primary/80 transition-colors">
                  {plan.secondaryCta}
                </button>

                {/* Features */}
                <div className="space-y-4 flex-grow">
                  <p className="text-sm font-bold text-foreground mb-5 uppercase tracking-wide">
                    Includes
                  </p>
                  <ul className="space-y-4">
                    {plan.features.map(
                      (feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                              plan.highlighted
                                ? "bg-primary/15 border border-primary/30"
                                : "bg-muted border border-border"
                            }`}
                          >
                            <Check
                              className={`h-3.5 w-3.5 ${
                                plan.highlighted
                                  ? "text-primary"
                                  : "text-primary/70"
                              }`}
                            />
                          </div>
                          <span
                            className={`leading-relaxed ${
                              featureIndex === 0 && index > 0
                                ? "font-semibold text-foreground"
                                : "text-muted-foreground"
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.4,
            delay: 0.3,
            ease: "easeOut",
          }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-muted-foreground">
            All plans include a{" "}
            <span className="font-semibold text-foreground">
              14-day free trial
            </span>
            . No credit card required.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
