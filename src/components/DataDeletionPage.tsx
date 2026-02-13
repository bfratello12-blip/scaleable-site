import { useEffect } from "react";
import { FileMinus, CheckCircle2, Mail } from "lucide-react";

export function DataDeletionPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <FileMinus className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Data Deletion
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Data Deletion Instructions – ScaleAble
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            ScaleAble is a profit analytics dashboard for Shopify merchants that
            connects to advertising platforms (such as Meta and Google Ads) to
            retrieve performance metrics for reporting purposes.
          </p>
        </header>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
          <p>
            If you would like your data deleted from ScaleAble, please follow the
            instructions below.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-12 md:gap-14">
          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              How to Request Data Deletion
            </h2>
            <p>To request deletion of your data:</p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <a
                href="mailto:support@scaleableapp.com"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                support@scaleableapp.com
              </a>
            </div>
            <div className="mt-5">
              <p>Include:</p>
              <ul className="mt-3 space-y-2">
                {[
                  "Your Shopify store domain",
                  "The email address associated with your ScaleAble account",
                  "A request stating that you would like your data deleted",
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
            <p className="mt-4 text-slate-700">
              We will confirm your identity and process your request within 7
              business days.
            </p>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              What Happens When You Request Deletion
            </h2>
            <p>Upon verified request:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Your ScaleAble account will be permanently deleted.",
                "All stored Shopify data, advertising performance data, and profit calculations associated with your store will be permanently removed from our database.",
                "Any OAuth tokens associated with Meta or Google Ads will be revoked.",
                "Historical reporting data will be deleted and cannot be recovered.",
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
              Deleting Data by Disconnecting the App
            </h2>
            <p>You may also:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Uninstall the ScaleAble app from your Shopify store",
                "Revoke access to ScaleAble from your Meta or Google account settings",
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
            <p className="mt-4 text-slate-700">
              Uninstalling the app will immediately revoke API access and
              prevent future data syncing. However, to fully delete stored
              historical data, you must email support as described above.
            </p>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Meta Platform Data
            </h2>
            <p>
              If you have connected your Meta ad account to ScaleAble and wish to
              remove Meta-related data only, you may:
            </p>
            <div className="mt-4 rounded-2xl border border-border bg-white p-6">
              <p className="font-semibold text-foreground">
                Remove ScaleAble from your Facebook Business Integrations:
              </p>
              <ul className="mt-3 space-y-2">
                {[
                  "Go to Facebook Settings → Business Integrations",
                  "Select ScaleAble",
                  "Click Remove",
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
            <p className="mt-4 text-slate-700">
              This will revoke our access to your Meta data. To ensure all
              historical Meta data is deleted from our system, please also
              contact support.
            </p>
          </section>

          <section className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white to-secondary/40 shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Contact
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              If you have questions regarding data deletion or data privacy,
              please contact:
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <a
                href="mailto:support@scaleableapp.com"
                className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                support@scaleableapp.com
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
