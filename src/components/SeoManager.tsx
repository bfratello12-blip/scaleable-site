import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const baseUrl = "https://scaleableapp.com";

const routeMeta: Record<string, { title: string; description: string }> = {
  "/": {
    title: "ScaleAble | Profit-first paid media analytics",
    description:
      "Scale ad spend based on actual profit. Make confident decisions with real costs and clear cause-and-effect context.",
  },
  "/about": {
    title: "About ScaleAble",
    description: "Built for brands that want to scale profit — not just revenue.",
  },
  "/contact": {
    title: "Contact ScaleAble",
    description: "Reach the ScaleAble team for support, access, or questions.",
  },
  "/help-center": {
    title: "Help Center | ScaleAble",
    description:
      "Find answers about onboarding, metrics, and connecting your ad platforms.",
  },
  "/help-center/getting-started": {
    title: "Getting Started | ScaleAble",
    description:
      "Learn how to connect Shopify, configure costs, and get your first profit report.",
  },
  "/help-center/metrics-definitions": {
    title: "Metrics & Definitions | ScaleAble",
    description:
      "Understand MER, contribution profit, and how ScaleAble calculates profitability.",
  },
  "/documentation": {
    title: "Documentation | ScaleAble",
    description:
      "Technical overview of how ScaleAble collects, processes, and calculates your data.",
  },
  "/privacy-policy": {
    title: "Privacy Policy | ScaleAble",
    description: "How ScaleAble handles privacy and data.",
  },
  "/terms": {
    title: "Terms of Service | ScaleAble",
    description: "ScaleAble terms of service.",
  },
  "/cookies": {
    title: "Cookies Policy | ScaleAble",
    description:
      "How ScaleAble uses cookies and similar technologies when you visit the site.",
  },
  "/request-access": {
    title: "Request Access | ScaleAble",
    description: "Request access to ScaleAble.",
  },
  "/go/book-strategy": {
    title: "Redirecting | ScaleAble",
    description: "Redirecting to booking.",
  },
  "/go/book-managed": {
    title: "Redirecting | ScaleAble",
    description: "Redirecting to booking.",
  },
  "/go/book-demo": {
    title: "Redirecting | ScaleAble",
    description: "Redirecting to booking.",
  },
};

function ensureMetaTag(selector: string, attributes: Record<string, string>) {
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    document.head.appendChild(tag);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    tag!.setAttribute(key, value);
  });
}

function ensureLinkTag(selector: string, attributes: Record<string, string>) {
  let tag = document.querySelector(selector);
  if (!tag) {
    tag = document.createElement("link");
    document.head.appendChild(tag);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    tag!.setAttribute(key, value);
  });
}

export function SeoManager() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const meta =
      routeMeta[path] ??
      (path.startsWith("/go/")
        ? {
            title: "Redirecting | ScaleAble",
            description: "Redirecting to booking.",
          }
        : {
            title: "Page not found | ScaleAble",
            description: "The page you are looking for does not exist.",
          });

    const canonicalUrl = `${baseUrl}${path === "/" ? "/" : path}`;

    document.title = meta.title;

    ensureMetaTag('meta[name="description"]', {
      name: "description",
      content: meta.description,
    });

    ensureLinkTag('link[rel="canonical"]', {
      rel: "canonical",
      href: canonicalUrl,
    });

    ensureMetaTag('meta[property="og:title"]', {
      property: "og:title",
      content: meta.title,
    });

    ensureMetaTag('meta[property="og:description"]', {
      property: "og:description",
      content: meta.description,
    });

    ensureMetaTag('meta[property="og:type"]', {
      property: "og:type",
      content: "website",
    });

    ensureMetaTag('meta[property="og:url"]', {
      property: "og:url",
      content: canonicalUrl,
    });
  }, [location.pathname]);

  return null;
}
