import type { ReactNode } from "react";

type FeatureLabelProps = {
  children: ReactNode;
};

export function FeatureLabel({ children }: FeatureLabelProps) {
  return (
    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-5">
      {children}
    </div>
  );
}
