import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "figma:asset/9e77f0b9e3f695977cea5c5b951b71cf2270fb05.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "/#solution", label: "Solution" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/case-studies", label: "Case Studies" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        transition: "all 0.25s ease",
        background: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.6)",
        backdropFilter: "saturate(140%) blur(14px)",
        WebkitBackdropFilter: "saturate(140%) blur(14px)",
        borderBottom: scrolled ? "1px solid #E5EAF1" : "1px solid transparent",
        boxShadow: scrolled ? "0 6px 24px -16px rgba(15,31,53,0.18)" : "none",
      }}
    >
      <div className="sa-container" style={{ padding: "14px 24px" }}>
        <div className="flex items-center justify-between gap-6">
          <a href="/" className="flex items-center" style={{ transition: "opacity 0.15s" }}>
            <img src={logo} alt="ScaleAble" style={{ height: 36 }} />
          </a>

          <nav className="hidden lg:flex items-center" style={{ gap: 4 }}>
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="sa-nav-link">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center" style={{ gap: 10 }}>
            <a href="/admin/login" className="sa-btn sa-btn-ghost sa-btn-sm">
              Dashboard Login
            </a>
            <a href="/#pricing" className="sa-btn sa-btn-primary sa-btn-sm">
              Get Started
            </a>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            style={{
              padding: 8,
              borderRadius: 10,
              background: "transparent",
              color: "var(--sa-ink-700)",
              border: "1px solid var(--sa-ink-100)",
            }}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div
            className="lg:hidden"
            style={{
              marginTop: 12,
              paddingTop: 12,
              borderTop: "1px solid var(--sa-ink-100)",
            }}
          >
            <nav className="flex flex-col" style={{ gap: 4 }}>
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="sa-nav-link"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ padding: "12px 14px" }}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col" style={{ gap: 8, marginTop: 12 }}>
                <a
                  href="/admin/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="sa-btn sa-btn-secondary"
                  style={{ width: "100%" }}
                >
                  Dashboard Login
                </a>
                <a
                  href="/#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="sa-btn sa-btn-primary"
                  style={{ width: "100%" }}
                >
                  Get Started
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
