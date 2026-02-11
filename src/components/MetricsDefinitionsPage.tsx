import { useEffect } from "react";
import { CheckCircle2, Search, Sparkles } from "lucide-react";

export function MetricsDefinitionsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Search className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Metrics & Definitions
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Metrics & Definitions
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Understand MER, contribution profit, and how ScaleAble calculates
            profitability.
          </p>
        </header>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
          <p>ScaleAble is built around one principle:</p>
          <p className="text-lg font-semibold text-foreground">Revenue doesn’t equal profit.</p>
          <p className="mb-4">
            This page explains the key metrics you’ll see in your dashboard and
            how they’re calculated.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-12 md:gap-14">
          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              Contribution Profit
            </h2>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-4 text-sm sm:text-base text-slate-800 font-semibold">
              Contribution Profit = Revenue – Product COGS – Shipping/Fulfillment – Payment Processing – Paid Ad Spend
            </div>
            <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>This is the core metric inside ScaleAble.</p>
              <p>
                It shows how much money your business keeps after the direct
                costs required to generate that revenue.
              </p>
              <p>Unlike platform-reported metrics, contribution profit reflects:</p>
              <ul className="space-y-2">
                {[
                  "Real unit-level product costs",
                  "Operational costs per order",
                  "Ad spend",
                  "Transaction fees",
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
              <p>This is the number that determines whether scaling is sustainable.</p>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              MER (Marketing Efficiency Ratio)
            </h2>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 px-6 py-4 text-sm sm:text-base text-slate-800 font-semibold">
              MER = Total Revenue ÷ Total Paid Ad Spend
            </div>
            <div className="mt-4 space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>MER gives you a blended view of marketing performance across channels.</p>
              <p>Instead of looking at Google ROAS or Meta ROAS in isolation, MER answers:</p>
              <p className="font-semibold text-foreground">
                How much total revenue are we generating for every $1 spent on paid media?
              </p>
              <p>MER is especially useful when:</p>
              <ul className="space-y-2">
                {[
                  "Multiple channels are contributing",
                  "Attribution isn’t perfectly tracked",
                  "You want a true blended performance metric",
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
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              True Return (Profit-Based Return)
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>While traditional ROAS focuses on revenue, ScaleAble focuses on profitability.</p>
              <p>Profit-based return considers:</p>
              <ul className="space-y-2">
                {["Ad spend", "Product cost", "Operational cost"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "#10b981" }}
                    />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                This helps you avoid situations where ROAS looks healthy but
                margins are shrinking.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              Estimated COGS
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>ScaleAble calculates product costs using:</p>
              <ul className="space-y-2">
                {[
                  "Unit-level cost data pulled directly from Shopify (when available)",
                  "A fallback gross margin percentage for products missing cost data",
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
              <p>
                If a product has no unit cost set in Shopify, your fallback margin
                ensures your profit calculations remain realistic.
              </p>
              <p>For best accuracy, keep your Shopify unit costs up to date.</p>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              Revenue
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>Revenue is pulled directly from Shopify and includes:</p>
              <ul className="space-y-2">
                {[
                  "Orders",
                  "Line items",
                  "Refund adjustments (when applicable)",
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
              <p>ScaleAble does not alter or inflate your revenue data.</p>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              Paid Spend
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>Paid spend is synced from connected ad platforms, such as:</p>
              <ul className="space-y-2">
                {["Google Ads", "Meta Ads"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 flex-none"
                      style={{ color: "#10b981" }}
                    />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p>
                This allows profit to be calculated against real ad costs, not
                estimated averages.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
              <Sparkles className="h-3 w-3" />
              Why ScaleAble Doesn’t Rely on ROAS Alone
            </div>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>ROAS answers:</p>
              <p className="font-semibold text-foreground">“How much revenue did we generate?”</p>
              <p>ScaleAble answers:</p>
              <p className="font-semibold text-foreground">“How much money did we actually keep?”</p>
              <p>A campaign can have strong ROAS and still reduce profit if:</p>
              <ul className="space-y-2">
                {[
                  "Margins are thin",
                  "Shipping costs are high",
                  "Processing fees add up",
                  "Scaling increases cost per acquisition",
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
              <p>That’s why contribution profit is the primary lens inside ScaleAble.</p>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              How Profit Updates Over Time
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>ScaleAble recalculates profitability as:</p>
              <ul className="space-y-2">
                {[
                  "Unit costs change",
                  "New data syncs",
                  "Additional ad spend is recorded",
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
              <p>
                This ensures your dashboard reflects current conditions — not
                outdated assumptions.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white to-secondary/40 shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              The Bottom Line
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>If you’re increasing ad spend, the most important question is not:</p>
              <p className="text-lg font-semibold text-foreground">“Is ROAS stable?”</p>
              <p>It’s:</p>
              <p className="text-lg font-semibold text-foreground">
                “Is contribution profit increasing as we scale?”
              </p>
              <p>That’s what ScaleAble is designed to show.</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
