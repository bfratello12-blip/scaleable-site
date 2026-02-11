import { useEffect } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

export function GettingStartedPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Getting Started
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Getting Started
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn how to connect Shopify, configure costs, and get your first
            profit report.
          </p>
        </header>

        <div className="flex flex-col gap-12 md:gap-16">
          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Step 1: Connect Your Shopify Store
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>
                Once you install ScaleAble, you’ll be prompted to connect your
                Shopify store.
              </p>
              <p>This allows ScaleAble to securely pull:</p>
              <ul className="space-y-2">
                {[
                  "Revenue",
                  "Orders",
                  "Line items",
                  "Unit-level product costs",
                  "Refund data",
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
                The connection is read-only. ScaleAble does not modify your
                store.
              </p>
              <p>
                After connecting, the system will begin syncing your historical
                data. Depending on your store size, this may take a few minutes.
              </p>
              <p>
                You’ll know it’s complete when your dashboard begins
                populating.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Step 2: Configure Your Cost Settings
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>
                Revenue alone doesn’t tell you profit. To generate accurate
                contribution margins, you’ll need to configure your cost
                assumptions.
              </p>
              <p>Go to Settings → Costs & Margins and review:</p>

              <div className="space-y-4">
                <div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    Product COGS
                  </h3>
                  <p>
                    ScaleAble automatically pulls unit costs from Shopify where
                    available.
                  </p>
                  <p>
                    If some products do not have a unit cost set in Shopify, you
                    can:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Add unit costs directly in Shopify, or",
                      "Set a default gross margin fallback percentage",
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
                    This ensures missing cost data doesn’t distort your profit
                    reporting.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    Shipping & Fulfillment Costs
                  </h3>
                  <p>Enter your average:</p>
                  <ul className="space-y-2">
                    {[
                      "Pick & pack cost",
                      "Shipping cost per order (if applicable)",
                      "Any fulfillment partner fees",
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
                    These costs are applied consistently across orders unless
                    overridden by unit-level data.
                  </p>
                </div>

                <div>
                  <h3 className="text-base font-semibold text-foreground mb-2">
                    Payment Processing Fees
                  </h3>
                  <p>
                    Set your typical processing rate (for example: 2.9% +
                    $0.30).
                  </p>
                  <p>
                    This ensures your contribution profit reflects real
                    transaction costs.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Step 3: Connect Ad Platforms (Optional but Recommended)
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>To see the full picture of paid performance, connect:</p>
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
                Once connected, ScaleAble will sync daily ad spend and combine
                it with your Shopify revenue and costs.
              </p>
              <p>This allows you to see:</p>
              <ul className="space-y-2">
                {[
                  "Contribution profit after ad spend",
                  "True return metrics",
                  "How profitability changes as you scale budget",
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
            <h2 className="text-2xl font-semibold text-blue-600 mb-4">
              Step 4: View Your First Profit Report
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>
                Once Shopify and costs are configured, head to your main
                dashboard.
              </p>
              <p>You’ll see:</p>
              <ul className="space-y-2">
                {[
                  "Revenue",
                  "Paid spend",
                  "Estimated COGS",
                  "Contribution profit",
                  "Profit trends over time",
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
                Instead of asking “How much revenue did we generate?”, you can
                now ask:
              </p>
              <p>“How much money did we actually keep?”</p>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Common Questions
            </h2>
            <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Why does my profit look different than Shopify’s reports?
                </h3>
                <p>Shopify shows revenue and basic costs. ScaleAble calculates:</p>
                <ul className="space-y-2">
                  {[
                    "Unit-level COGS",
                    "Shipping & fulfillment",
                    "Payment processing",
                    "Ad spend",
                    "Contribution profit",
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
                  This gives you a profit-first view instead of a revenue-first
                  view.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  What if some products don’t have cost data?
                </h3>
                <p>
                  ScaleAble uses your fallback margin setting to prevent
                  distorted results.
                </p>
                <p>
                  For best accuracy, we recommend keeping unit costs updated in
                  Shopify.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  How long does syncing take?
                </h3>
                <p>
                  Most stores populate within a few minutes. Larger stores may
                  take longer during the initial sync.
                </p>
                <p>After setup, data updates automatically.</p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white to-secondary/40 shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Next Step
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>Once your dashboard is live, the most important question becomes:</p>
              <p>Are we actually more profitable at this spend level?</p>
              <p>That’s what ScaleAble is built to answer.</p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
