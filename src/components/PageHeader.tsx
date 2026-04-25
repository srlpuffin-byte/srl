import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: ReactNode;
};

export function PageHeader({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-gradient-to-br from-[hsl(215,45%,15%)] via-[hsl(214,90%,25%)] to-[hsl(200,95%,35%)] text-white overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {eyebrow && (
          <div className="text-xs uppercase tracking-[0.3em] text-white/70 mb-4">
            {eyebrow}
          </div>
        )}
        <h1 className="text-3xl md:text-5xl font-semibold max-w-3xl leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
