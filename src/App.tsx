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
import { RequestAccessPage } from "./components/RequestAccessPage";

export default function App() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground antialiased">
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
        <Route path="/request-access" element={<RequestAccessPage />} />
      </Routes>
      <Footer />
    </div>
  );
}