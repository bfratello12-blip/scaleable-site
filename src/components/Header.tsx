import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "figma:asset/9e77f0b9e3f695977cea5c5b951b71cf2270fb05.png";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "#solution", label: "Solution" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#pricing", label: "Pricing" },
    { href: "#for-who", label: "For Who" },
    { href: "#faq", label: "FAQ" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center transition-opacity hover:opacity-80">
            <img src={logo} alt="ScaleAble" className="h-9" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="font-semibold">Sign In</Button>
            <Button className="font-semibold shadow-sm bg-gradient-to-b from-[#2B72D7] to-[#1f5fb8] hover:opacity-90 transition-opacity">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-2 border-t border-border mt-4">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-muted/50 rounded-lg transition-all"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
                <Button variant="ghost" className="w-full font-semibold">Sign In</Button>
                <Button className="w-full font-semibold bg-gradient-to-b from-[#2B72D7] to-[#1f5fb8] hover:opacity-90 transition-opacity">Get Started</Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}