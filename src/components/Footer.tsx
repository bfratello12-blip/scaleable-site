import { Mail } from "lucide-react";
import logo from "figma:asset/9e77f0b9e3f695977cea5c5b951b71cf2270fb05.png";

export function Footer() {
  const footerLinks = {
    Product: [
      { label: "Features", href: "#solution" },
      { label: "How It Works", href: "#how-it-works" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" }
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Contact", href: "#" }
    ],
    Resources: [
      { label: "Documentation", href: "#" },
      { label: "Help Center", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" }
    ]
  };

  return (
    <footer className="bg-white border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img src={logo} alt="ScaleAble" className="h-9 mb-6" />
            <p className="text-muted-foreground mb-8 max-w-sm leading-relaxed">
              Scale ad spend based on actual profit. Make confident decisions with real costs and clear cause-and-effect context.
            </p>
            <div className="flex items-center gap-3 text-muted-foreground group">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <a href="mailto:hello@scaleable.com" className="hover:text-foreground transition-colors font-medium">
                hello@scaleable.com
              </a>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="mb-6 font-bold text-foreground">{category}</h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors font-medium"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} ScaleAble. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Privacy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Terms
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors font-medium">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}