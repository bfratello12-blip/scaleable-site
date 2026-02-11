import { useEffect } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

export function NotFoundPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="bg-white border-t border-border">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Card className="p-8 sm:p-10 rounded-3xl border border-border bg-white shadow-lg text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground">
            Page not found
          </h1>
          <p className="mt-4 text-muted-foreground">
            The page you are looking for does not exist.
          </p>
          <div className="mt-6">
            <Button asChild>
              <a href="/">Back to home</a>
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
