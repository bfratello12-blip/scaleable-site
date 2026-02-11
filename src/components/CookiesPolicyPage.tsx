import { useEffect } from "react";
import { Cookie, CheckCircle2, Mail } from "lucide-react";

export function CookiesPolicyPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-5">
            <Cookie className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Cookies Policy
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Cookies Policy
          </h1>
          <p className="mt-4 text-sm text-muted-foreground">
            Last updated: February 11, 2026
          </p>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            This Cookies Policy explains how ScaleAble uses cookies and similar
            technologies when you visit our website.
          </p>
        </header>

        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700">
          <p>We believe in clarity, so here’s exactly what that means.</p>
        </div>

        <div className="mt-12 flex flex-col gap-12 md:gap-14">
          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              What Are Cookies?
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>Cookies are small text files stored on your device when you visit a website.</p>
              <p>
                They help websites function properly, improve performance, and
                provide insight into how visitors interact with pages.
              </p>
              <p>Cookies do not give us access to your device or personal files.</p>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              How We Use Cookies
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              We use cookies for a limited set of purposes:
            </p>

            <div className="mt-6 space-y-8">
              <div className="rounded-2xl border border-border bg-white p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  1. Essential Cookies
                </h3>
                <p className="mt-2 text-slate-700">
                  These cookies are necessary for the website to function
                  properly.
                </p>
                <p className="mt-3 text-slate-700">They may be used to:</p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Maintain basic site functionality",
                    "Support security",
                    "Ensure forms and pages load correctly",
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
                  Without these cookies, parts of the site may not function as intended.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  2. Analytics Cookies
                </h3>
                <p className="mt-2 text-slate-700">
                  We may use analytics tools (such as Google Analytics) to
                  understand how visitors use the site.
                </p>
                <p className="mt-3 text-slate-700">These tools help us see:</p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Which pages are visited",
                    "How long visitors stay",
                    "General usage patterns",
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
                  This data is aggregated and does not identify individual users.
                </p>
                <p className="mt-3 text-slate-700">
                  Analytics cookies help us improve clarity, performance, and user experience.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-white p-6">
                <h3 className="text-lg font-semibold text-foreground">
                  3. Advertising & Marketing Cookies
                </h3>
                <p className="mt-2 text-slate-700">
                  We may use advertising technologies such as:
                </p>
                <ul className="mt-3 space-y-2">
                  {["Google Ads", "Meta (Facebook) Pixel"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 flex-none"
                        style={{ color: "#10b981" }}
                      />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-slate-700">These tools help us:</p>
                <ul className="mt-3 space-y-2">
                  {[
                    "Measure the effectiveness of campaigns",
                    "Understand how users interact with ads",
                    "Improve marketing performance",
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
                  These cookies may track interactions across websites.
                </p>
              </div>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              How You Can Control Cookies
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>
                You can control or delete cookies at any time through your browser settings.
              </p>
              <p>Most browsers allow you to:</p>
              <ul className="space-y-2">
                {[
                  "Block cookies",
                  "Delete stored cookies",
                  "Disable third-party tracking",
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
                Please note that disabling certain cookies may affect website
                functionality.
              </p>
              <p>
                If you are located in a region that requires consent for
                non-essential cookies, you will be presented with a consent
                option where applicable.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-3">
              Changes to This Policy
            </h2>
            <div className="space-y-3 text-sm sm:text-base leading-relaxed text-slate-700">
              <p>We may update this Cookies Policy from time to time.</p>
              <p>
                When changes are made, the updated version will be posted on
                this page with a revised “Last updated” date.
              </p>
            </div>
          </section>

          <section className="rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/10 via-white to-secondary/40 shadow-lg p-8 sm:p-10">
            <h2 className="text-2xl font-semibold text-foreground mb-4">
              Contact Us
            </h2>
            <p className="text-sm sm:text-base text-slate-700">
              If you have questions about this Cookies Policy, please contact:
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
