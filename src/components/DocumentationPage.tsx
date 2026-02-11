import { useEffect } from "react";
import { BookOpen, CheckCircle2 } from "lucide-react";

export function DocumentationPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <BookOpen className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Documentation
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Documentation
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical overview of how ScaleAble collects, processes, and
            calculates your data.
          </p>
        </header>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
          <p>
            ScaleAble is built to provide accurate, profit-first reporting across
            Shopify and paid media platforms.
          </p>
          <p>This page explains how the system works.</p>
        </div>

        <div className="mt-12 flex flex-col gap-12 md:gap-14">
          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Data Sources
            </h2>
            <p>ScaleAble pulls data from three primary sources:</p>

            <div className="mt-4 grid gap-6 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-white p-5">
                <h3 className="text-base font-semibold text-foreground">Shopify</h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {[
                    "Revenue",
                    "Orders",
                    "Line items",
                    "Product unit costs",
                    "Refunds",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 flex-none"
                        style={{ color: "#10b981" }}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-slate-700">
                  Shopify serves as the source of truth for revenue and
                  product-level data.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-5">
                <h3 className="text-base font-semibold text-foreground">
                  Google Ads (Optional)
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {["Daily ad spend", "Campaign-level performance data"].map(
                    (item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 flex-none"
                          style={{ color: "#10b981" }}
                        />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>

              <div className="rounded-2xl border border-border bg-white p-5">
                <h3 className="text-base font-semibold text-foreground">
                  Meta Ads (Optional)
                </h3>
                <ul className="mt-3 space-y-2 text-sm text-slate-700">
                  {["Daily ad spend", "Campaign-level performance data"].map(
                    (item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 flex-none"
                          style={{ color: "#10b981" }}
                        />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>

            <p className="mt-6">
              Ad spend is synced and stored daily, then blended with Shopify
              revenue to calculate contribution profit.
            </p>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Data Syncing
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Initial Sync
                </h3>
                <p>When you first connect your store:</p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Historical Shopify revenue is pulled",
                    "Line-item data is aggregated",
                    "Unit costs are synced",
                    "Connected ad platform spend is imported",
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
                <p className="mt-3 text-slate-700">
                  Depending on store size, this may take several minutes.
                </p>
              </div>

              <div>
                <h3 className="text-base font-semibold text-foreground mb-2">
                  Ongoing Sync
                </h3>
                <p>After setup:</p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Shopify revenue syncs daily",
                    "Ad spend syncs daily",
                    "Profit calculations are recalculated automatically",
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
                <p className="mt-3 text-slate-700">
                  You do not need to manually update reports.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Cost Configuration
            </h2>
            <p>ScaleAble combines:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Unit-level product costs from Shopify",
                "Per-order shipping and fulfillment assumptions",
                "Payment processing fees",
                "Ad spend",
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
            <p className="mt-3 text-slate-700">
              If product unit costs are missing, a fallback gross margin
              percentage is applied.
            </p>
            <p className="mt-3 text-slate-700">
              This ensures profit reporting remains stable and realistic.
            </p>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Profit Calculation Logic
            </h2>
            <p>At a simplified level:</p>
            <div className="mt-4 rounded-2xl border border-primary/20 bg-primary/5 px-6 py-4 text-sm sm:text-base text-slate-800 font-semibold">
              Contribution Profit =
              <br />
              Revenue
              <br />
              – Product COGS
              <br />
              – Shipping & Fulfillment
              <br />
              – Payment Processing Fees
              <br />
              – Paid Ad Spend
            </div>
            <p className="mt-4 text-slate-700">
              All values are calculated on a daily basis and aggregated over
              your selected date range.
            </p>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Handling Missing Cost Data
            </h2>
            <p>If a product does not have a unit cost set in Shopify:</p>
            <ul className="mt-3 space-y-2">
              {[
                "ScaleAble estimates COGS using your configured fallback margin",
                "This prevents artificially inflated profit",
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
            <p className="mt-3 text-slate-700">
              For best accuracy, keep unit costs updated in Shopify.
            </p>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Attribution Philosophy
            </h2>
            <p>ScaleAble does not attempt to override platform attribution.</p>
            <p className="mt-3 text-slate-700">Instead:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Revenue is taken directly from Shopify",
                "Ad spend is taken directly from platforms",
                "MER and profit metrics are calculated at the blended level",
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
            <p className="mt-3 text-slate-700">
              This avoids reliance on imperfect attribution models.
            </p>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Data Security
            </h2>
            <ul className="space-y-2">
              {[
                "Store connections are read-only",
                "ScaleAble does not modify Shopify data",
                "Credentials are securely stored",
                "Access is scoped per client",
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
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              When Numbers May Differ from Other Reports
            </h2>
            <p>You may notice differences between:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Shopify analytics",
                "Google Ads reports",
                "Meta Ads reports",
                "ScaleAble dashboard",
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
            <p className="mt-3 text-slate-700">This is typically due to:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Attribution differences",
                "Refund timing",
                "Cost assumptions",
                "Platform-specific reporting windows",
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
            <p className="mt-3 text-slate-700">
              ScaleAble prioritizes consistent, blended profitability reporting
              over channel-specific reporting.
            </p>
          </section>

          <section className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white to-secondary/40 shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Summary
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>ScaleAble is not a revenue dashboard.</p>
              <p>
                It is a contribution profit engine designed to help you
                understand how profitability changes as you scale.
              </p>
              <p>
                If you need deeper clarification on any metric, see the
                <a
                  href="/help-center/metrics-definitions"
                  className="ml-1 text-primary font-semibold hover:text-primary/80 transition-colors"
                >
                  Metrics & Definitions page
                </a>
                .
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
