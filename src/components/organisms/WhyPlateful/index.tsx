"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  BadgeDollarSign,
  Users,
  Clock,
  TrendingUp,
} from "lucide-react";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { useInView } from "@/hooks";
import { Assets } from "@/assets";

const features = [
  {
    icon: ShieldCheck,
    stat: "1,000+",
    label: "Verified Deals",
    note: "Every deal is hand-picked and confirmed by our team before it goes live. No fakes, no surprises.",
    textColor: "text-green-500",
    hoverBorder: "hover:border-green-300",
    tagBg: "bg-green-50 text-green-600",
    tag: "Deals",
  },
  {
    icon: BadgeDollarSign,
    stat: "Zero",
    label: "Hidden Fees",
    note: "The price you see is exactly what you pay. Zero service charges, zero booking fees — always transparent.",
    textColor: "text-[#ff3131]",
    hoverBorder: "hover:border-red-300",
    tagBg: "bg-red-50 text-[#ff3131]",
    tag: "Pricing",
  },
  {
    icon: Users,
    stat: "50K+",
    label: "Happy Diners",
    note: "A growing community of food lovers across Indonesia who discover premium dining experiences every day.",
    textColor: "text-blue-500",
    hoverBorder: "hover:border-blue-300",
    tagBg: "bg-blue-50 text-blue-600",
    tag: "Community",
  },
  {
    icon: Clock,
    stat: "< 30s",
    label: "Instant Booking",
    note: "Skip the calls and waiting. Reserve your table in seconds and get instant confirmation on your phone.",
    textColor: "text-orange-500",
    hoverBorder: "hover:border-orange-300",
    tagBg: "bg-orange-50 text-orange-600",
    tag: "Speed",
  },
];

const galleryItems = [
  {
    src: Assets.Food2,
    alt: "Premium fine dining plating at top Indonesian restaurant",
    label: "Fine Dining",
    sub: "Jakarta",
  },
  {
    src: Assets.Food4,
    alt: "Curated Indonesian cuisine spread",
    label: "Curated Menu",
    sub: "All You Can Eat",
  },
  {
    src: Assets.Food9,
    alt: "Japanese omakase experience in Jakarta",
    label: "Omakase",
    sub: "Set Menu",
  },
  {
    src: Assets.Food5,
    alt: "Elegant restaurant interior with warm lighting",
    label: "Exclusive Venues",
    sub: "Bali & Bandung",
  },
  {
    src: Assets.Food8,
    alt: "Premium table setup at luxury restaurant",
    label: "Premium Setup",
    sub: "Exclusive Dining",
  },
];

const FeatureCard = ({
  feature,
  index,
  isInView,
}: {
  feature: (typeof features)[0];
  index: number;
  isInView: boolean;
}) => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const Icon = feature.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className={`transition-all duration-700 ease-out ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div
        className={`relative flex h-full cursor-default flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 md:p-7 ${feature.hoverBorder}`}
        style={{
          transform: hovered
            ? `perspective(1000px) rotateX(${(mousePos.y - 0.5) * -3}deg) rotateY(${(mousePos.x - 0.5) * 3}deg) translateY(-6px)`
            : "perspective(1000px) rotateX(0) rotateY(0) translateY(0)",
          boxShadow: hovered
            ? "0 24px 48px -12px rgba(0,0,0,0.1)"
            : "0 2px 8px -2px rgba(0,0,0,0.04)",
          transition:
            "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div className="mb-6 flex items-center justify-between">
          <div
            className={`flex items-center justify-center rounded-xl transition-transform duration-300 ${hovered ? "scale-110 -rotate-6" : ""}`}
          >
            <Icon
              size={30}
              strokeWidth={1.8}
              className={feature.textColor}
              aria-hidden="true"
            />
          </div>
          <span
            className={`rounded-full px-3 py-1 text-[0.68rem] font-bold tracking-wider uppercase ${feature.tagBg}`}
          >
            {feature.tag}
          </span>
        </div>

        <p
          className={`text-4xl font-black ${feature.textColor} mb-1 leading-none tracking-tight`}
        >
          {feature.stat}
        </p>
        <h3 className="mt-1 mb-2 text-base font-black tracking-tight text-stone-900">
          {feature.label}
        </h3>
        <p className="flex-1 text-sm leading-relaxed font-light text-stone-400">
          {feature.note}
        </p>
      </div>
    </div>
  );
};

const HorizontalGallery = ({ isInView }: { isInView: boolean }) => {
  return (
    <div
      className={`mb-16 transition-all delay-100 duration-700 ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-px w-6 bg-[#ff3131]" aria-hidden="true" />
          <p className="text-xs font-semibold tracking-widest text-stone-400 uppercase">
            Dining experiences across Indonesia
          </p>
        </div>
        <p className="hidden text-xs text-stone-300 md:block">
          Scroll to explore →
        </p>
      </div>

      <div
        className="scrollbar-hide flex gap-3 overflow-x-auto pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        aria-label="Gallery of dining experiences"
      >
        {galleryItems.map((img, i) => (
          <div
            key={i}
            className={`group relative shrink-0 overflow-hidden rounded-2xl transition-all duration-700 ${
              isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } ${i === 0 ? "h-52 w-72" : i === 2 ? "h-52 w-56" : "h-52 w-48"}`}
            style={{ transitionDelay: `${i * 80 + 100}ms` }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={400}
              height={300}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute right-3 bottom-3 left-3 flex items-end justify-between">
              <div>
                <p className="text-xs leading-tight font-bold text-white">
                  {img.label}
                </p>
                <p className="mt-0.5 text-[0.62rem] text-white/60">{img.sub}</p>
              </div>
              <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/20 bg-white/10 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-[0.55rem] font-bold text-white">↗</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const WhyPlateful = () => {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      aria-labelledby="why-plateful-heading"
      className="relative overflow-hidden bg-white px-4 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="why-plateful-heading"
          eyebrow={{ icon: <TrendingUp size={14} />, label: "Why Plateful" }}
          title="Why we're"
          highlight="different"
          description="We make dining out more fun, affordable, and completely hassle-free — from the first tap to the last bite."
          descriptionAlign="right"
        />

        <HorizontalGallery isInView={isInView} />
        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          role="list"
          aria-label="Why choose Plateful"
        >
          {features.map((f, i) => (
            <FeatureCard
              key={f.label}
              feature={f}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
