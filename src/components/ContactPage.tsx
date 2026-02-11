import { useEffect } from "react";
import { Mail, Clock, MessageCircle } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { Card } from "./ui/card";
import { cn } from "./ui/utils";

const supportEmail = "support@scaleableapp.com";

export function ContactPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <MessageCircle className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Contact
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Let’s talk about your growth
          </h1>
          <p className="mt-4 mb-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            Reach out with questions about ScaleAble, onboarding, or
            partnerships. We’ll respond quickly and point you to the right
            next step.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="p-8">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Email support
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Send us a message and we’ll follow up with next steps.
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <a
                    href={`mailto:${supportEmail}`}
                    onClick={(event) => {
                      event.preventDefault();
                      window.location.href = `mailto:${supportEmail}`;
                    }}
                    className={cn(buttonVariants({}), "font-semibold")}
                  >
                    Email us
                  </a>
                  <a
                    href={`mailto:${supportEmail}`}
                    onClick={(event) => {
                      event.preventDefault();
                      window.location.href = `mailto:${supportEmail}`;
                    }}
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    {supportEmail}
                  </a>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  Response time
                </h2>
                <p className="mt-2 text-muted-foreground">
                  We typically reply within 1 business day. Complex
                  requests may take up to 2 business days.
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Support hours: Monday–Friday, 9am–5pm PT.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-gradient-to-b from-white to-secondary/30 p-8">
          <h3 className="text-xl font-semibold text-foreground">
            What to include in your message
          </h3>
          <ul className="mt-4 space-y-2 text-muted-foreground">
            <li>• Your company name and website</li>
            <li>• What you want to achieve with ScaleAble</li>
            <li>• Any timelines or launch dates</li>
            <li>• The best way for us to follow up</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
