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

export default function App() {
  return (
    <div className="w-full min-h-screen bg-background text-foreground antialiased">
      <Header />
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
      <Footer />
    </div>
  );
}