import { Mail } from "lucide-react";
import logo from "../assets/ScaleAble_Logo1.png";

const productLinks = [
  { label: "Features", href: "/#solution" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "FAQ", href: "/#faq" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "/contact" },
];

const resourceLinks = [
  { label: "Documentation", href: "/documentation" },
  { label: "Data Deletion", href: "/data-deletion" },
  { label: "Help Center", href: "/help-center" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background:
          "radial-gradient(900px 500px at 90% 0%, rgba(43,114,215,0.18), transparent 60%), linear-gradient(180deg, #08111F 0%, #050B16 100%)",
        color: "#A8B6CC",
        paddingTop: 80,
        paddingBottom: 40,
      }}
    >
      <div className="sa-container" style={{ padding: "0 24px" }}>
        <div
          className="grid"
          style={{
            gap: 48,
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          }}
        >
          {/* Brand */}
          <div style={{ gridColumn: "span 2", minWidth: 260 }}>
            <a href="/" style={{ display: "inline-block" }}>
              <img
                src={logo}
                alt="ScaleAble"
                style={{
                  height: 40,
                  filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.4))",
                }}
              />
            </a>
            <p
              style={{
                marginTop: 18,
                color: "#8593A8",
                fontSize: 14.5,
                lineHeight: 1.6,
                maxWidth: 360,
              }}
            >
              Scale ad spend based on actual profit. Make confident decisions with real costs and
              clear cause-and-effect context.
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=support@scaleableapp.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: 18,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                color: "#BFD6FF",
                fontSize: 14,
                fontWeight: 500,
                padding: "8px 12px",
                borderRadius: 999,
                background: "rgba(43,114,215,0.14)",
                border: "1px solid rgba(106,161,236,0.28)",
              }}
            >
              <Mail className="h-4 w-4" />
              support@scaleableapp.com
            </a>
          </div>

          <FooterColumn title="Product" links={productLinks} />
          <FooterColumn title="Company" links={companyLinks} />
          <FooterColumn title="Resources" links={resourceLinks} />
        </div>

        <div
          style={{
            marginTop: 64,
            paddingTop: 24,
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            flexWrap: "wrap",
            gap: 16,
            alignItems: "center",
            justifyContent: "space-between",
            color: "#6B798F",
            fontSize: 13,
          }}
        >
          <div>
            © {year} ScaleAble. All rights reserved. ·{" "}
            <span style={{ color: "#8593A8" }}>ScaleAble is operated by Brian M Fratello</span>
          </div>
          <div style={{ display: "flex", gap: 18 }}>
            <a href="/privacy-policy" style={{ color: "#8593A8" }}>Privacy</a>
            <a href="/terms" style={{ color: "#8593A8" }}>Terms</a>
            <a href="/cookies" style={{ color: "#8593A8" }}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4
        style={{
          color: "#FFFFFF",
          fontSize: 13,
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: 16,
        }}
      >
        {title}
      </h4>
      <ul style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              style={{
                color: "#A8B6CC",
                fontSize: 14.5,
                transition: "color 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#A8B6CC")}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
