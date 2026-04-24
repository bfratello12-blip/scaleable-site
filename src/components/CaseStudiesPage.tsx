import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, TrendingUp, ArrowRight, Calendar } from "lucide-react";
import { Card } from "./ui/card";

type CaseStudy = {
  slug: string;
  brand: string;
  headline: string;
  summary: string;
  image: string;
  timeframe: string;
  highlights: { label: string; value: string }[];
};

const caseStudies: CaseStudy[] = [
  {
    slug: "brand-1",
    brand: "Brand 1",
    headline: "+97% profit and +34% True ROAS within 30 days.",
    summary:
      "By shifting spend toward profit-positive campaigns and trimming hidden margin leaks, Brand 1 nearly doubled profit in a single month while improving True ROAS by 34%.",
    image: "/case-studies/brand-1.png",
    timeframe: "30 days",
    highlights: [
      { label: "Profit", value: "+97.3%" },
      { label: "True ROAS (MER)", value: "+34.0%" },
      { label: "Revenue", value: "+45.3%" },
      { label: "Orders", value: "+29.3%" },
    ],
  },
  {
    slug: "brand-2",
    brand: "Brand 2",
    headline: "+76% profit growth for a brand previously at a plateau.",
    summary:
      "After months of stagnant returns, Brand 2 used profit-first reporting to identify wasted spend and reallocate budget — unlocking a 76% jump in profit without scaling spend recklessly.",
    image: "/case-studies/brand-2.png",
    timeframe: "Quarter over quarter",
    highlights: [
      { label: "Profit", value: "+75.7%" },
      { label: "Revenue", value: "+110.7%" },
      { label: "Orders", value: "+91.4%" },
      { label: "AOV", value: "+10.1%" },
    ],
  },
  {
    slug: "brand-3",
    brand: "Brand 3",
    headline: "+32% profit growth within the first three weeks.",
    summary:
      "Brand 3 plugged ScaleAble in and saw real cost-and-margin clarity for the first time. Within three weeks, profit climbed 32% while ad efficiency stayed strong.",
    image: "/case-studies/brand-3.png",
    timeframe: "First 3 weeks",
    highlights: [
      { label: "Profit", value: "+32.3%" },
      { label: "Revenue", value: "+14.6%" },
      { label: "Orders", value: "+114.6%" },
      { label: "MER", value: "Healthy" },
    ],
  },
];

export function CaseStudiesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-secondary/10 to-background border-y border-border">
      <div className="absolute -top-24 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 py-28 relative">
        <header className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Case Studies</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-[1.15] tracking-tight">
            Real brands. Real profit growth.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Snapshots from inside the ScaleAble dashboard — showing what
            profit-first reporting unlocks for ecommerce brands.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="/request-access" className="sa-btn sa-btn-primary">
              Get a free profit audit
            </a>
            <a href="/#pricing" className="sa-btn sa-btn-secondary">
              See pricing
            </a>
          </div>
        </header>

        <div className="flex flex-col gap-12 md:gap-16">
          {caseStudies.map((cs, idx) => (
            <CaseStudyCard
              key={cs.slug}
              caseStudy={cs}
              index={idx}
              onCta={() => navigate("/request-access")}
            />
          ))}
        </div>

        <div className="mt-20 rounded-3xl border border-border bg-white shadow-lg p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
            Want results like these for your brand?
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Request a free profit audit and we’ll show you exactly where your
            margin is leaking — and how much you could be scaling profitably.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="/request-access" className="sa-btn sa-btn-primary">
              Request free profit audit
            </a>
            <a href="/go/book-strategy" className="sa-btn sa-btn-secondary">
              <Calendar className="h-4 w-4 mr-2" />
              Book a strategy call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({
  caseStudy,
  index,
  onCta,
}: {
  caseStudy: CaseStudy;
  index: number;
  onCta: () => void;
}) {
  const [imgError, setImgError] = useState(false);
  const reversed = index % 2 === 1;

  return (
    <Card className="rounded-3xl border border-border bg-white shadow-lg overflow-hidden">
      <div
        className={`grid gap-0 lg:grid-cols-2 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-4 sm:p-6 flex items-center justify-center">
          {!imgError ? (
            <img
              src={caseStudy.image}
              alt={`${caseStudy.brand} dashboard snapshot`}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-auto rounded-xl shadow-2xl ring-1 ring-white/10"
            />
          ) : (
            <div className="w-full aspect-[16/10] rounded-xl bg-slate-700/40 border border-dashed border-white/20 flex items-center justify-center text-slate-300 text-sm text-center px-6">
              Add image at{" "}
              <code className="ml-1 px-1 py-0.5 bg-black/30 rounded">
                {caseStudy.image}
              </code>
            </div>
          )}
        </div>

        <div className="p-8 sm:p-10 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-4">
            <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />
            <span className="text-xs font-semibold text-emerald-700 tracking-wide uppercase">
              {caseStudy.timeframe}
            </span>
          </div>

          <p className="text-sm font-semibold text-primary tracking-wide uppercase">
            {caseStudy.brand}
          </p>
          <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-foreground leading-tight">
            {caseStudy.headline}
          </h2>
          <p className="mt-4 text-base text-slate-700 leading-relaxed">
            {caseStudy.summary}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {caseStudy.highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-border bg-secondary/30 px-4 py-3"
              >
                <div className="text-xs text-muted-foreground uppercase tracking-wide">
                  {h.label}
                </div>
                <div className="mt-1 text-lg font-bold text-foreground">
                  {h.value}
                </div>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onCta}
            className="sa-btn sa-btn-primary mt-7 self-start inline-flex items-center"
          >
            Get my free profit audit
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </Card>
  );
}
