import { useEffect } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-secondary/10 to-background border-y border-border">
      <div className="absolute -top-24 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="max-w-5xl mx-auto px-6 py-28 relative">
        <header className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">About</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.15] tracking-tight">
            Built for brands that want to scale profit — not just revenue.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A clear, profit-first approach to scaling paid media without losing
            margin clarity.
          </p>
        </header>

        <div className="mt-12 flex flex-col gap-12 md:gap-14">
          <Card className="p-8 sm:p-10 rounded-3xl border border-border bg-white shadow-lg overflow-hidden">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
              The gap between revenue and profit
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700 max-w-3xl">
              <p>
                Most brands think they’re scaling. Revenue is up. ROAS looks
                decent. Ad platforms say everything is working.
              </p>
              <p>
                But when you sit down and calculate real costs — shipping,
                fulfillment, processing fees, COGS, returns — the profit tells a
                different story.
              </p>
              <p>I’ve seen it happen hundreds of times.</p>
              <p>
                Brands push spend. Revenue grows. Margins shrink. And no one sees
                it until it’s too late.
              </p>
            </div>
          </Card>

          <Card className="p-8 sm:p-10 rounded-3xl border border-border bg-white shadow-lg overflow-hidden">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
                Why ScaleAble exists
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700 max-w-3xl">
              <p>
                I’ve worked in paid media for over a decade, managing accounts
                across Google, Meta, and other platforms. What I noticed over
                and over again:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span
                    className="mt-0.5 text-sm leading-none flex-none"
                    style={{ color: "#2563eb" }}
                    aria-hidden="true"
                  >
                    •
                  </span>
                  <span className="text-slate-700">Ad platforms optimize for revenue.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-0.5 text-sm leading-none flex-none"
                    style={{ color: "#2563eb" }}
                    aria-hidden="true"
                  >
                    •
                  </span>
                  <span className="text-slate-700">Agencies optimize for ROAS.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span
                    className="mt-0.5 text-sm leading-none flex-none"
                    style={{ color: "#2563eb" }}
                    aria-hidden="true"
                  >
                    •
                  </span>
                  <span className="text-slate-700">But almost no one optimizes for contribution profit.</span>
                </li>
              </ul>
              <p>
                So I built the dashboard I always wished existed — a system
                that connects:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Shopify revenue",
                  "Real unit-level COGS",
                  "Shipping and fulfillment costs",
                  "Payment processing fees",
                  "Google Ads spend",
                  "Meta Ads spend",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "#10b981" }}
                    />
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <p>
                And shows you what actually matters: what happens to profit as
                you scale.
              </p>
            </div>
          </Card>

          <Card className="p-8 sm:p-10 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent shadow-lg overflow-hidden">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700">
                <Sparkles className="h-3 w-3" />
                Focus
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-semibold text-foreground">
              What happens to profit as you scale.
            </h3>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed max-w-2xl">
              ScaleAble connects ad spend, costs, and revenue so you can see
              profitability in real time — not weeks later.
            </p>
          </Card>

          <Card className="p-8 sm:p-10 rounded-3xl border border-border bg-white shadow-lg overflow-hidden">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
              A profit-first mindset
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700 max-w-3xl">
              <p>ScaleAble isn’t another reporting tool. It’s a profit engine.</p>
              <p>
                Instead of asking, “How much revenue did we generate?” we ask,
                “How much money did we actually keep?”
              </p>
              <p>
                Every chart, metric, and insight is built around that principle.
              </p>
              <p>
                Because scaling ad spend without understanding contribution margin
                is one of the fastest ways to stall growth.
              </p>
            </div>
          </Card>

          <Card className="p-8 sm:p-10 rounded-3xl border border-border bg-white shadow-lg overflow-hidden">
            <h2 className="text-xl sm:text-2xl font-semibold text-foreground mb-3">
              Who it’s for
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700 max-w-3xl">
              <p>ScaleAble is built for:</p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                {[
                  "Shopify brands running paid media",
                  "Founders who care about real margins",
                  "Operators who want clarity before increasing budget",
                  "Teams tired of spreadsheet guesswork",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "#10b981" }}
                    />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-2xl border-l-4 border-primary bg-primary/5 px-6 py-5 italic text-foreground">
                If you’re scaling ads and wondering, “Are we actually more
                profitable at this spend level?”
              </div>
              <p>This is for you.</p>
            </div>
          </Card>
        </div>

        <div className="mt-16 sm:mt-20">
          <Card className="p-8 sm:p-10 rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white to-secondary/40 shadow-xl overflow-hidden text-center">
            <h2 className="text-2xl sm:text-3xl font-semibold text-foreground">
              Want clarity before you scale?
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
              Get a profit-first view of performance before you increase spend.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                asChild
                className="font-semibold bg-gradient-to-b from-[#2B72D7] to-[#1f5fb8] hover:opacity-90 transition-opacity"
              >
                <a href="/go/book-strategy">Book a call</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="font-semibold">
                <a href="/#pricing">View pricing</a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
