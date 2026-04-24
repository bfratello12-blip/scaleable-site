import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Sparkles, TrendingUp, ArrowRight, Calendar, Quote } from "lucide-react";
import brand1Image from "../assets/Brand 1 Performance.png";
import brand2Image from "../assets/Brand 2 Performance.png";
import brand3Image from "../assets/Brand 3 Performance.png";

type Highlight = { label: string; value: string; tone?: "positive" | "neutral" };

type CaseStudy = {
  slug: string;
  brand: string;
  industry: string;
  headline: string;
  summary: string;
  image: string;
  timeframe: string;
  hero: Highlight;
  highlights: Highlight[];
  pull: string;
};

const caseStudies: CaseStudy[] = [
  {
    slug: "brand-1",
    brand: "Brand 1",
    industry: "DTC Apparel",
    headline: "+97% profit and +34% True ROAS within 30 days.",
    summary:
      "By shifting spend toward profit-positive campaigns and trimming hidden margin leaks, Brand 1 nearly doubled profit in a single month while improving True ROAS by 34%.",
    image: brand1Image,
    timeframe: "30 Days",
    hero: { label: "Profit Growth", value: "+97.3%", tone: "positive" },
    highlights: [
      { label: "True ROAS (MER)", value: "+34.0%", tone: "positive" },
      { label: "Revenue", value: "+45.3%", tone: "positive" },
      { label: "Orders", value: "+29.3%", tone: "positive" },
    ],
    pull: "We finally saw which campaigns were actually making us money, not just driving revenue.",
  },
  {
    slug: "brand-2",
    brand: "Brand 2",
    industry: "Health & Wellness",
    headline: "+76% profit growth for a brand previously at a plateau.",
    summary:
      "After months of stagnant returns, Brand 2 used profit-first reporting to identify wasted spend and reallocate budget — unlocking a 76% jump in profit without scaling spend recklessly.",
    image: brand2Image,
    timeframe: "Quarter Over Quarter",
    hero: { label: "Profit Growth", value: "+75.7%", tone: "positive" },
    highlights: [
      { label: "Revenue", value: "+110.7%", tone: "positive" },
      { label: "Orders", value: "+91.4%", tone: "positive" },
      { label: "AOV", value: "+10.1%", tone: "positive" },
    ],
    pull: "ScaleAble showed us exactly where our margin was leaking, the plateau finally broke.",
  },
  {
    slug: "brand-3",
    brand: "Brand 3",
    industry: "Home Goods",
    headline: "+32% profit growth within the first three weeks.",
    summary:
      "Brand 3 plugged ScaleAble in and saw real cost-and-margin clarity for the first time. Within three weeks, profit climbed 32% while ad efficiency stayed strong.",
    image: brand3Image,
    timeframe: "First 3 Weeks",
    hero: { label: "Profit Growth", value: "+32.3%", tone: "positive" },
    highlights: [
      { label: "Orders", value: "+114.6%", tone: "positive" },
      { label: "Revenue", value: "+14.6%", tone: "positive" },
      { label: "MER", value: "Healthy", tone: "neutral" },
    ],
    pull: "Within weeks we knew our true profit per dollar of spend, game changer.",
  },
];

const PRIMARY = "#2b72d7";
const INK_900 = "#0a1628";
const INK_700 = "#1f3759";
const INK_500 = "#4a607f";
const INK_300 = "#8593A8";
const INK_50 = "#F4F7FB";
const BORDER = "#E5EAF1";
const POSITIVE = "#10b981";

export function CaseStudiesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #F4F7FB 40%, #FFFFFF 100%)",
        borderTop: `1px solid ${BORDER}`,
        borderBottom: `1px solid ${BORDER}`,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: -120,
          right: -80,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "rgba(43,114,215,0.10)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: -120,
          left: -80,
          width: 480,
          height: 480,
          borderRadius: "50%",
          background: "rgba(43,114,215,0.10)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <div
        className="sa-container"
        style={{ padding: "140px 24px 120px", position: "relative" }}
      >
        <header
          style={{ maxWidth: 760, margin: "0 auto 96px", textAlign: "center" }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 16px",
              borderRadius: 999,
              background: "rgba(43,114,215,0.10)",
              border: "1px solid rgba(43,114,215,0.22)",
              marginBottom: 20,
            }}
          >
            <Sparkles style={{ width: 16, height: 16, color: PRIMARY }} />
            <span
              style={{
                fontSize: 13,
                fontWeight: 600,
                color: PRIMARY,
                letterSpacing: 0.4,
              }}
            >
              CASE STUDIES
            </span>
          </div>
          <h1
            style={{
              fontSize: "clamp(36px, 5vw, 60px)",
              lineHeight: 1.1,
              fontWeight: 700,
              color: INK_900,
              letterSpacing: -0.5,
              margin: 0,
            }}
          >
            Real brands.{" "}
            <span
              style={{
                background: `linear-gradient(135deg, ${PRIMARY} 0%, #6aa1ec 100%)`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Real profit growth.
            </span>
          </h1>
          <p
            style={{
              marginTop: 24,
              fontSize: 19,
              lineHeight: 1.6,
              color: INK_500,
              maxWidth: 620,
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            Snapshots from inside the ScaleAble dashboard — showing what
            profit-first reporting unlocks for ecommerce brands.
          </p>
          <div
            style={{
              marginTop: 32,
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <a href="/request-access" className="sa-btn sa-btn-primary">
              Get a free profit audit
            </a>
            <a href="/#pricing" className="sa-btn sa-btn-secondary">
              See pricing
            </a>
          </div>
        </header>

        <div style={{ display: "flex", flexDirection: "column", gap: 96 }}>
          {caseStudies.map((cs, i) => (
            <CaseStudyCard
              key={cs.slug}
              cs={cs}
              index={i}
              onCta={() => navigate("/request-access")}
            />
          ))}
        </div>

        <div
          style={{
            marginTop: 120,
            borderRadius: 28,
            border: `1px solid ${BORDER}`,
            background: `linear-gradient(135deg, ${INK_900} 0%, #102a4c 100%)`,
            color: "#fff",
            padding: "64px 32px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            boxShadow: "0 20px 60px -20px rgba(10,22,40,0.45)",
          }}
        >
          <div
            aria-hidden
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(700px 280px at 80% 0%, rgba(106,161,236,0.35), transparent 60%)",
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative" }}>
            <h2
              style={{
                fontSize: "clamp(26px, 3.2vw, 38px)",
                fontWeight: 700,
                margin: 0,
                lineHeight: 1.2,
              }}
            >
              Want results like these for your brand?
            </h2>
            <p
              style={{
                marginTop: 16,
                fontSize: 17,
                color: "#BFD0E6",
                maxWidth: 620,
                marginLeft: "auto",
                marginRight: "auto",
                lineHeight: 1.6,
              }}
            >
              Request a free profit audit and we'll show you exactly where your
              margin is leaking — and how much you could be scaling profitably.
            </p>
            <div
              style={{
                marginTop: 32,
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 12,
              }}
            >
              <a href="/request-access" className="sa-btn sa-btn-primary">
                Request free profit audit
              </a>
              <a
                href="/go/book-strategy"
                className="sa-btn sa-btn-secondary"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                <Calendar style={{ width: 16, height: 16, marginRight: 8 }} />
                Book a strategy call
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({
  cs,
  index,
  onCta,
}: {
  cs: CaseStudy;
  index: number;
  onCta: () => void;
}) {
  const [imgError, setImgError] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <article
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        borderRadius: 28,
        background: "#fff",
        border: `1px solid ${BORDER}`,
        boxShadow: hover
          ? "0 30px 70px -25px rgba(15,31,53,0.28)"
          : "0 18px 50px -25px rgba(15,31,53,0.18)",
        overflow: "hidden",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
        transform: hover ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 24,
          left: 24,
          zIndex: 2,
          width: 44,
          height: 44,
          borderRadius: 14,
          background: `linear-gradient(135deg, ${PRIMARY} 0%, #1a5bb8 100%)`,
          color: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 700,
          fontSize: 16,
          boxShadow: "0 8px 24px -10px rgba(43,114,215,0.6)",
        }}
      >
        0{index + 1}
      </div>

      {/* Hero strip */}
      <div
        style={{
          position: "relative",
          padding: "44px 40px 36px",
          paddingLeft: 88,
          background: `linear-gradient(135deg, ${INK_900} 0%, #102a4c 60%, #1a3a6b 100%)`,
          color: "#fff",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(600px 220px at 95% 0%, rgba(106,161,236,0.35), transparent 60%)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: 24,
          }}
        >
          <div style={{ minWidth: 0, flex: "1 1 320px" }}>
            <div
              style={{
                display: "flex",
                gap: 10,
                alignItems: "center",
                marginBottom: 10,
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: 2,
                  color: "#6aa1ec",
                  textTransform: "uppercase",
                }}
              >
                {cs.brand}
              </span>
              <span
                style={{
                  width: 4,
                  height: 4,
                  borderRadius: "50%",
                  background: "#3b5680",
                }}
              />
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  letterSpacing: 1.2,
                  color: "#8aa6ce",
                  textTransform: "uppercase",
                }}
              >
                {cs.industry}
              </span>
            </div>
            <h2
              style={{
                fontSize: "clamp(22px, 2.4vw, 30px)",
                lineHeight: 1.25,
                fontWeight: 700,
                color: "#fff",
                margin: 0,
                maxWidth: 560,
                letterSpacing: -0.2,
              }}
            >
              {cs.headline}
            </h2>
          </div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "8px 14px",
              borderRadius: 999,
              background: "rgba(16,185,129,0.18)",
              border: "1px solid rgba(16,185,129,0.4)",
              alignSelf: "flex-start",
            }}
          >
            <TrendingUp style={{ width: 14, height: 14, color: "#6ee7b7" }} />
            <span
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: 1.2,
                color: "#a7f3d0",
                textTransform: "uppercase",
              }}
            >
              {cs.timeframe}
            </span>
          </div>
        </div>
      </div>

      {/* Stats row */}
      <div
        className="sa-cs-stats-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          background: "linear-gradient(180deg, #FAFCFF 0%, #FFFFFF 100%)",
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <StatCell hero highlight={cs.hero} />
        {cs.highlights.map((h, i) => (
          <StatCell key={i} highlight={h} />
        ))}
      </div>

      {/* Body */}
      <div className="sa-cs-body">
        <div
          className="sa-cs-image-cell"
          style={{
            padding: 28,
            background: INK_50,
            borderRight: `1px solid ${BORDER}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {!imgError ? (
            <img
              src={cs.image}
              alt={`${cs.brand} dashboard snapshot`}
              loading="lazy"
              onError={() => setImgError(true)}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 14,
                boxShadow: "0 20px 50px -20px rgba(15,31,53,0.35)",
                border: "1px solid rgba(15,31,53,0.08)",
              }}
            />
          ) : (
            <div
              style={{
                width: "100%",
                aspectRatio: "16/10",
                borderRadius: 14,
                background: "#E5EAF1",
                border: `1px dashed ${INK_300}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: INK_500,
                fontSize: 14,
              }}
            >
              Image missing
            </div>
          )}
        </div>

        <div
          style={{
            padding: "40px 40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              padding: "20px 22px 20px 56px",
              background: "rgba(43,114,215,0.06)",
              border: "1px solid rgba(43,114,215,0.18)",
              borderRadius: 16,
              marginBottom: 22,
            }}
          >
            <Quote
              style={{
                position: "absolute",
                top: 18,
                left: 18,
                width: 22,
                height: 22,
                color: PRIMARY,
                opacity: 0.85,
              }}
            />
            <p
              style={{
                margin: 0,
                fontSize: 15,
                lineHeight: 1.55,
                color: INK_700,
                fontStyle: "italic",
                fontWeight: 500,
              }}
            >
              "{cs.pull}"
            </p>
          </div>

          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.65,
              color: INK_500,
            }}
          >
            {cs.summary}
          </p>

          <button
            type="button"
            onClick={onCta}
            className="sa-btn sa-btn-primary"
            style={{
              marginTop: 28,
              alignSelf: "flex-start",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Get my free profit audit
            <ArrowRight style={{ width: 16, height: 16, marginLeft: 8 }} />
          </button>
        </div>
      </div>

      <style>{`
        .sa-cs-body {
          display: grid;
          grid-template-columns: 1.35fr 1fr;
        }
        @media (max-width: 900px) {
          .sa-cs-body {
            grid-template-columns: 1fr !important;
          }
          .sa-cs-image-cell {
            border-right: none !important;
            border-bottom: 1px solid ${BORDER} !important;
          }
          .sa-cs-stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 560px) {
          .sa-cs-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </article>
  );
}

function StatCell({
  highlight,
  hero = false,
}: {
  highlight: Highlight;
  hero?: boolean;
}) {
  const color =
    highlight.tone === "positive"
      ? POSITIVE
      : highlight.tone === "neutral"
      ? PRIMARY
      : INK_900;

  return (
    <div
      style={{
        padding: hero ? "28px 28px" : "22px 22px",
        borderRight: `1px solid ${BORDER}`,
        position: "relative",
        background: hero ? "rgba(43,114,215,0.04)" : "transparent",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 700,
          color: INK_500,
          letterSpacing: 1.4,
          textTransform: "uppercase",
        }}
      >
        {highlight.label}
      </div>
      <div
        style={{
          marginTop: 8,
          fontSize: hero ? 38 : 26,
          fontWeight: 800,
          color,
          letterSpacing: -0.5,
          fontVariantNumeric: "tabular-nums",
          lineHeight: 1,
        }}
      >
        {highlight.value}
      </div>
      {hero && (
        <div
          style={{
            marginTop: 10,
            fontSize: 12,
            color: INK_500,
            fontWeight: 500,
          }}
        >
          North-star result
        </div>
      )}
    </div>
  );
}
