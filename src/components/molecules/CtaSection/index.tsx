"use client";

import { ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components";

interface DarkCTAStripProps {
  title: string;
  highlight: string;
  description: string;
  ctaLabel: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export const CtaSection = ({
  title,
  highlight,
  description,
  ctaLabel,
  secondaryLabel = "See how it works",
  secondaryHref = "#how-it-works",
}: DarkCTAStripProps) => {
  return (
    <div className="relative overflow-hidden rounded-[2.5rem] bg-stone-900">
      <div
        className="pointer-events-none absolute inset-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-[#ff3131]/20 blur-[80px]" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[80px]" />
        <div className="absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute right-0 bottom-0 left-0 h-px bg-linear-to-r from-transparent via-[#ff3131]/40 to-transparent" />
        <div className="absolute top-8 right-24 h-14 w-14 rotate-12 rounded-2xl border border-white/10" />
        <div className="absolute bottom-8 left-16 h-10 w-10 rounded-full border border-white/10" />
        <div className="absolute top-1/2 right-12 h-7 w-7 rotate-45 rounded-lg bg-[#ff3131]/20" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-between gap-8 px-8 py-12 md:px-14 md:py-14 lg:flex-row">
        {/* Left — text */}
        <div className="text-center lg:text-left">
          <h3 className="mb-4 text-3xl leading-[1.05] font-black tracking-tight text-white md:text-4xl lg:text-5xl">
            {title}{" "}
            <span className="relative inline-block">
              {highlight}
              <svg
                className="absolute -bottom-1 left-0 w-full"
                viewBox="0 0 200 8"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  d="M2 4 Q50 0 100 4 Q150 8 198 4"
                  stroke="#ff3131"
                  strokeWidth="3"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h3>
          <p className="max-w-md text-sm leading-relaxed font-light text-stone-400 md:text-base">
            {description}
          </p>
        </div>

        {/* Right — CTA */}
        <div className="flex shrink-0 flex-col items-center gap-3 lg:items-end">
          <PrimaryButton size="lg">
            {ctaLabel}
            <ArrowRight size={18} aria-hidden="true" />
          </PrimaryButton>
          <div className="flex items-center gap-4 text-xs text-stone-500">
            <a
              href={secondaryHref}
              className="flex items-center gap-1 font-medium transition-colors hover:text-white"
            >
              {secondaryLabel} <ArrowRight size={11} aria-hidden="true" />
            </a>
            <span aria-hidden="true">·</span>
            <span>No credit card required</span>
          </div>
        </div>
      </div>
    </div>
  );
};
