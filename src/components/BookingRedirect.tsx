import { useEffect } from "react";

const BOOKING_URL = "https://calendar.app.google/CVU6Bay3NPVta1qW7";
const REDIRECT_DELAY_MS = 200;

type BookingOffer = "strategy" | "managed" | "demo";

type BookingRedirectProps = {
  offer: BookingOffer;
};

export function BookingRedirect({ offer }: BookingRedirectProps) {
  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    if (typeof window.gtag === "function") {
      window.gtag("event", "book_call_click", { offer });
    }

    const timer = window.setTimeout(() => {
      window.location.href = BOOKING_URL;
    }, REDIRECT_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [offer]);

  return (
    <div className="min-h-screen bg-white text-foreground flex items-center justify-center px-6">
      <div className="text-center">
        <p className="text-lg font-semibold">Redirecting…</p>
        <p className="text-sm text-muted-foreground">
          Taking you to the booking page.
        </p>
      </div>
    </div>
  );
}
