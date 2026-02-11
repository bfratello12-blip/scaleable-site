import { useEffect } from "react";
import { BookOpen, LifeBuoy, Mail, Search } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

const supportEmail = "support@scaleableapp.com";
const supportEmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${supportEmail}`;

export function HelpCenterPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <header className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <LifeBuoy className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Help Center
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            How can we help?
          </h1>
          <p className="mt-4 mb-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about onboarding, metrics, and
            connecting your ad platforms.
          </p>
        </header>

        <div className="mt-8 grid gap-6 md:grid-cols-3 mb-12">
          <Card className="p-8">
            <a
              href="/help-center/getting-started"
              className="flex items-start gap-4 hover:opacity-90 transition-opacity"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Getting started
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Learn how to connect Shopify, configure costs, and get your
                  first profit report.
                </p>
              </div>
            </a>
          </Card>
          <Card className="p-8">
            <a
              href="/help-center/metrics-definitions"
              className="flex items-start gap-4 hover:opacity-90 transition-opacity"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Search className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Metrics & definitions
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Understand MER, contribution profit, and how ScaleAble
                  calculates profitability.
                </p>
              </div>
            </a>
          </Card>
          <Card className="p-8">
            <a
              href="/contact"
              className="flex items-start gap-4 hover:opacity-90 transition-opacity"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  Contact support
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Reach the team for troubleshooting or account questions.
                </p>
              </div>
            </a>
          </Card>
        </div>

        <Card className="p-8 rounded-3xl border border-border bg-white shadow-lg overflow-hidden text-center">
          <h3 className="text-2xl font-semibold text-foreground">
            Still need help?
          </h3>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Send us a message with your store URL and a brief description of the
            issue. We’ll get back to you quickly.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button asChild className="font-semibold">
              <a href={supportEmailLink} target="_blank" rel="noreferrer">
                Email support
              </a>
            </Button>
            <a
              href={supportEmailLink}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {supportEmail}
            </a>
          </div>
        </Card>
      </div>
    </section>
  );
}
