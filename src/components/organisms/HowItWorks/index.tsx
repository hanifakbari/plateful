"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Search,
  CalendarCheck,
  UtensilsCrossed,
  Sparkles,
  CheckCircle2,
  Lock,
  ShieldCheck,
  Zap,
  RefreshCw,
} from "lucide-react";
import { useInView } from "@/hooks";
import { CtaSection, SectionHeading, StepCard } from "@/components";
import { Assets } from "@/assets";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Discover curated deals",
    description:
      "Explore hand-picked dining experiences at 1,000+ premium restaurants across Jakarta, Bali & Bandung. Filter by cuisine, occasion, or deal type.",
    hoverBorder: "hover:border-red-500",
    textColor: "text-[#ff3131]",
    tagBg: "bg-red-50 text-[#ff3131]",
    features: [
      "1,000+ restaurants",
      "Instant filtering",
      "Best price guarantee",
    ],
    tag: "Explore",
  },
  {
    number: "02",
    icon: CalendarCheck,
    title: "Reserve instantly",
    description:
      "Secure your table in seconds. Select your preferred date, time, and party size — receive immediate confirmation without phone calls or waiting.",
    hoverBorder: "hover:border-green-500",
    textColor: "text-green-600",
    tagBg: "bg-green-50 text-green-600",
    features: ["30-second booking", "Instant confirmation", "No hidden fees"],
    tag: "Book",
  },
  {
    number: "03",
    icon: UtensilsCrossed,
    title: "Dine & delight",
    description:
      "Walk in, show your digital confirmation, and let the experience begin. Your table is ready, your deal is locked in, and the restaurant is expecting you. No surprises — just exceptional food at exceptional value.",
    hoverBorder: "hover:border-orange-500",
    textColor: "text-orange-600",
    tagBg: "bg-orange-50 text-orange-600",
    features: ["Digital check-in", "Priority seating", "Exclusive perks"],
    tag: "Enjoy",
  },
];

const trustBadges = [
  { icon: <Lock size={14} />, text: "Secure Payment" },
  { icon: <ShieldCheck size={14} />, text: "Verified Restaurants" },
  { icon: <Zap size={14} />, text: "Instant Confirmation" },
  { icon: <RefreshCw size={14} />, text: "Free Cancellation" },
];

const Step1Mockup = () => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center gap-2 rounded-xl border border-stone-100 bg-white px-3 py-2 shadow-sm">
      <Search
        size={13}
        className="shrink-0 text-stone-300"
        aria-hidden="true"
      />
      <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-stone-100">
        <div className="h-full w-2/3 rounded-full bg-[#ff3131]" />
      </div>
    </div>
    <div className="flex flex-wrap gap-1.5">
      {["Indonesian", "AYCE", "Jakarta"].map((tag, i) => (
        <span
          key={i}
          className={`rounded-full border px-2.5 py-1 text-[0.62rem] font-semibold ${
            i === 0
              ? "border-[#ff3131] bg-[#ff3131] text-white"
              : "border-stone-100 bg-white text-stone-500"
          }`}
        >
          {tag}
        </span>
      ))}
    </div>
    {[
      {
        name: "Plataran Menteng",
        image: Assets.Food9,
        tag: "AYCE",
        price: "IDR 299K",
      },
      {
        name: "Lara Djonggrang",
        image: Assets.Food7,
        tag: "Exclusive",
        price: "IDR 450K",
      },
    ].map((r, i) => (
      <div
        key={i}
        className="flex items-center justify-between rounded-xl border border-stone-100 bg-white px-3 py-2"
      >
        <div className="flex items-center gap-2">
          <Image
            src={r.image}
            alt={r.name}
            width={40}
            height={40}
            className="h-10 w-10 rounded-md object-cover"
          />
          <span className="text-[0.7rem] font-semibold text-stone-700">
            {r.name}
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="rounded-md bg-stone-100 px-1.5 py-0.5 text-[0.58rem] font-bold text-stone-500">
            {r.tag}
          </span>
          <span className="text-[0.7rem] font-black text-[#ff3131]">
            {r.price}
          </span>
        </div>
      </div>
    ))}
  </div>
);

const Step2Mockup = () => {
  const [guests, setGuests] = useState(2);
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between rounded-xl border border-stone-100 bg-white px-3 py-2.5">
        <span className="text-[0.7rem] text-stone-400">Date</span>
        <span className="text-[0.75rem] font-semibold text-stone-800">
          Tonight, 7:30 PM
        </span>
      </div>
      <div className="flex items-center justify-between rounded-xl border border-stone-100 bg-white px-3 py-2.5">
        <span className="text-[0.7rem] text-stone-400">Party size</span>
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setGuests((g) => Math.max(1, g - 1))}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-100 text-xs font-bold text-stone-500 transition-colors hover:bg-stone-200"
            aria-label="Decrease guests"
          >
            −
          </button>
          <span className="w-4 text-center text-[0.8rem] font-black text-stone-800">
            {guests}
          </span>
          <button
            onClick={() => setGuests((g) => Math.min(10, g + 1))}
            className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ff3131] text-xs font-bold text-white transition-colors hover:bg-red-600"
            aria-label="Increase guests"
          >
            +
          </button>
        </div>
      </div>
      <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#ff3131] py-2.5 text-white transition-colors hover:bg-red-600 active:scale-[0.98]">
        <CalendarCheck size={13} aria-hidden="true" />
        <span className="text-xs font-bold">Confirm Booking</span>
      </button>
    </div>
  );
};

const Step3Mockup = () => (
  <div className="flex flex-col gap-2">
    <div className="rounded-xl border border-stone-100 bg-white px-3 py-3">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[0.6rem] font-semibold tracking-wider text-stone-400 uppercase">
          Booking confirmed
        </span>
        <div className="flex items-center gap-1">
          <CheckCircle2
            size={13}
            className="text-green-500"
            aria-hidden="true"
          />
          <span className="text-[0.6rem] font-bold text-green-600">
            Verified
          </span>
        </div>
      </div>
      <p className="text-xs font-bold text-stone-800">Plataran Menteng</p>
      <p className="mt-0.5 text-[0.65rem] text-stone-400">
        Sat 12 Apr · 2 guests · 7:30 PM
      </p>
      <div className="mt-2 flex items-center justify-between border-t border-stone-50 pt-2">
        <span className="text-[0.6rem] text-stone-400">Table</span>
        <span className="text-[0.7rem] font-bold text-stone-700">
          Table 12 · Garden view
        </span>
      </div>
    </div>
    <div className="flex items-center gap-2 rounded-xl border border-green-100 bg-green-50 px-3 py-2">
      <span
        className="h-1.5 w-1.5 shrink-0 animate-pulse rounded-full bg-green-500"
        aria-hidden="true"
      />
      <span className="text-[0.65rem] font-semibold text-green-700">
        Restaurant notified — you&apos;re all set!
      </span>
    </div>
    <div className="flex flex-wrap items-center gap-1.5">
      {["Priority seat", "Chef welcome", "Free dessert"].map((perk, i) => (
        <span
          key={i}
          className="rounded-full border border-orange-100 bg-orange-50 px-2 py-1 text-[0.6rem] font-semibold text-orange-600"
        >
          {perk}
        </span>
      ))}
    </div>
  </div>
);

const mockups = [
  <Step1Mockup key={0} />,
  <Step2Mockup key={1} />,
  <Step3Mockup key={2} />,
];

export const HowItWorks = () => {
  const { ref, isInView } = useInView<HTMLElement>();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Book Restaurant Deals on Plateful",
    description:
      "Book exclusive dining deals in Indonesia in 3 simple steps: discover, reserve, and dine.",
    totalTime: "PT30S",
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      text: step.description,
    })),
  };

  return (
    <section
      ref={ref}
      id="how-it-works"
      aria-labelledby="how-it-works-heading"
      className="relative overflow-hidden bg-[#FAFAF9] px-4 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="how-it-works-heading"
          eyebrow={{ icon: <Sparkles size={14} />, label: "Simple Process" }}
          title="Book in"
          highlight="30 seconds"
          description="From discovery to reservation to dining — every interaction designed for discerning diners across Indonesia who value time and quality."
          descriptionAlign="right"
        />
        {/* Step cards */}
        <div
          className="mb-14 grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6"
          role="list"
          aria-label="How Plateful works — 3 steps"
        >
          {steps.map((step, i) => (
            <StepCard
              key={step.number}
              step={step}
              index={i}
              isInView={isInView}
              mockup={mockups[i]}
            />
          ))}
        </div>

        <div
          className={`transition-all delay-500 duration-700 ${isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <CtaSection
            title="Start saving on"
            highlight="every meal"
            description="Join 50,000+ food lovers in Indonesia who never pay full price. From Menteng to Ubud — your next unforgettable meal is one click away."
            ctaLabel="Get Started Free"
            secondaryLabel="See how it works"
            secondaryHref="#how-it-works"
          />
        </div>
        {/* Badges */}
        <div
          className={`mt-10 flex flex-wrap items-center justify-center gap-8 transition-all delay-700 duration-700 ${isInView ? "opacity-100" : "opacity-0"}`}
        >
          {trustBadges.map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-2 text-xs font-medium text-stone-400"
            >
              <span className="text-stone-300" aria-hidden="true">
                {b.icon}
              </span>
              {b.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
