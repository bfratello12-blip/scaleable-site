import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Features } from "./components/Features";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { Questions } from "./components/Questions";
import { ForWho } from "./components/ForWho";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";
import { RequestAccessPage } from "./components/RequestAccessPage";
import { DemoModalProvider } from "./components/DemoModalProvider";
import { BookingRedirect } from "./components/BookingRedirect";
import { ContactPage } from "./components/ContactPage";
import { AboutPage } from "./components/AboutPage";
import { HelpCenterPage } from "./components/HelpCenterPage";
import { GettingStartedPage } from "./components/GettingStartedPage";
import { MetricsDefinitionsPage } from "./components/MetricsDefinitionsPage";
import { DocumentationPage } from "./components/DocumentationPage";
import { CookiesPolicyPage } from "./components/CookiesPolicyPage";
import { SeoManager } from "./components/SeoManager";
import { NotFoundPage } from "./components/NotFoundPage";

export default function App() {
  return (
    <DemoModalProvider>
      <div className="w-full min-h-screen bg-background text-foreground antialiased">
        <SeoManager />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main className="w-full">
                <Hero />
                <Problem />
                <Solution />
                <Features />
                <HowItWorks />
                <Pricing />
                <Questions />
                <ForWho />
                <CTA />
              </main>
            }
          />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/request-access" element={<RequestAccessPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/help-center" element={<HelpCenterPage />} />
          <Route path="/help-center/getting-started" element={<GettingStartedPage />} />
          <Route
            path="/help-center/metrics-definitions"
            element={<MetricsDefinitionsPage />}
          />
          <Route path="/documentation" element={<DocumentationPage />} />
          <Route path="/cookies" element={<CookiesPolicyPage />} />
          <Route
            path="/go/book-strategy"
            element={<BookingRedirect offer="strategy" />}
          />
          <Route
            path="/go/book-managed"
            element={<BookingRedirect offer="managed" />}
          />
          <Route
            path="/go/book-demo"
            element={<BookingRedirect offer="demo" />}
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </DemoModalProvider>
  );
}