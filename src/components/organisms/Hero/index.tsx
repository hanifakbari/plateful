"use client";

import Image from "next/image";
import { ArrowRight, Play, Star, Flame, ChevronRight } from "lucide-react";
import {
  AnimatedCounter,
  FlipBoard,
  PrimaryButton,
  RestaurantCard,
} from "@/components";
import { Assets } from "@/assets";

const highlights = [
  {
    image: Assets.Food1,
    name: "Plataran Menteng",
    tag: "AYCE",
    tagColor: "bg-orange-50 text-orange-600 border border-orange-200",
    price: "IDR 299K / person",
    rating: "4.9",
    cuisine: "Indonesian · Fine Dining",
  },
  {
    image: Assets.Food6,
    name: "Sushi Tei SCBD",
    tag: "Set Menu",
    tagColor: "bg-rose-50 text-rose-600 border border-rose-200",
    price: "IDR 188K / person",
    rating: "4.8",
    cuisine: "Japanese · Jakarta",
  },
  {
    image: Assets.Food3,
    name: "Lara Djonggrang",
    tag: "Exclusive",
    tagColor: "bg-amber-50 text-amber-600 border border-amber-200",
    price: "IDR 450K / person",
    rating: "5.0",
    cuisine: "Indonesian · Cikini",
  },
];

const diners = [
  {
    name: "Rina S.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&q=80",
    time: "2m ago",
  },
  {
    name: "Budi T.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&q=80",
    time: "5m ago",
  },
  {
    name: "Dewi W.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&q=80",
    time: "12m ago",
  },
];

const stats = [
  { value: "1,000+", label: "Restaurants" },
  { value: "10+", label: "Cities in Indonesia" },
  { value: "Best Price", label: "Guaranteed" },
];

export const Hero = () => {
  return (
    <section
      aria-label="Plateful — Exclusive dining deals at top restaurants in Indonesia"
      className="flex min-h-screen items-center bg-[#FAFAF9] px-4 py-20 md:px-10 md:py-24 lg:px-30 lg:py-28"
    >
      <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row lg:gap-12">
        {/* LEFT */}
        <div className="order-1 flex w-full flex-col lg:order-1 lg:w-1/2">
          <p className="mb-5 flex items-center gap-2 text-xs font-semibold tracking-widest text-stone-400 uppercase">
            <span
              className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500"
              aria-hidden="true"
            />
            Live deals · Jakarta, Bali &amp; Bandung
          </p>

          <h1 className="mb-6 text-5xl leading-none font-black tracking-tighter text-stone-900 md:text-6xl lg:text-7xl">
            Eat more, <span className="text-[#ff3131] italic">pay less</span>,
            <br />
            <span className="relative inline-block">
              dine{" "}
              <span className="relative">
                better
                <svg
                  className="absolute -bottom-1 left-0 w-full lg:-bottom-2"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <path
                    d="M2 8 Q25 2 50 8 Q75 14 100 8 Q125 2 150 8 Q175 14 198 8"
                    stroke="#ff3131"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </span>
          </h1>

          <p className="mb-8 max-w-lg text-sm leading-relaxed font-light text-stone-500 md:text-base">
            <strong className="font-semibold text-stone-800">Plateful</strong>{" "}
            is Indonesia&apos;s exclusive dining deals app — connecting you to{" "}
            <strong className="font-semibold text-stone-800">
              1,000+ premium restaurants
            </strong>{" "}
            across Jakarta, Bali &amp; Bandung. All You Can Eat, curated set
            menus, and fixed-price feasts at prices worth celebrating.
          </p>

          <div className="mb-6 flex flex-wrap items-center gap-3">
            <PrimaryButton size="md" href="#featured-deals">
              Browse deals now <ArrowRight size={16} aria-hidden="true" />
            </PrimaryButton>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2.5 rounded-2xl border border-stone-200 px-6 py-4 text-sm font-medium text-stone-800 transition-colors hover:border-stone-800 active:scale-95"
            >
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-stone-900 text-white"
                aria-hidden="true"
              >
                <Play size={10} fill="currentColor" strokeWidth={0} />
              </span>
              See how it works
            </a>
          </div>

          {/* Social proof */}
          <div className="mb-8 flex flex-wrap items-center gap-3 border-t border-b border-stone-100 py-4">
            <div className="flex -space-x-2" aria-label="Active Plateful users">
              {diners.map((d, i) => (
                <div key={i} className="group relative">
                  <div className="h-7 w-7 overflow-hidden rounded-full border-2 border-white transition-all duration-200 group-hover:z-10 group-hover:scale-110 md:h-8 md:w-8">
                    <Image
                      src={d.image}
                      alt={`${d.name} — Plateful user`}
                      width={32}
                      height={32}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div
                    className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 -translate-x-1/2 rounded-md bg-stone-900 px-2 py-1 text-[0.65rem] whitespace-nowrap text-white opacity-0 transition-all duration-200 group-hover:opacity-100"
                    role="tooltip"
                  >
                    {d.name} · {d.time}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-stone-900" />
                  </div>
                </div>
              ))}
              <div className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-[#ff3131] text-[0.6rem] font-bold text-white md:h-8 md:w-8">
                +2.4k
              </div>
            </div>
            <p className="text-xs text-stone-400">
              <strong className="font-semibold text-stone-800">2,400+</strong>{" "}
              diners this week · Now featuring
            </p>
            <FlipBoard />
          </div>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            {stats.map((s, i) => (
              <div key={i} className="flex items-center gap-4 md:gap-8">
                {i > 0 && (
                  <div
                    className="hidden h-9 w-px bg-stone-100 md:block"
                    aria-hidden="true"
                  />
                )}
                <div>
                  <p className="text-lg leading-none font-black tracking-tight text-stone-900 md:text-xl">
                    {s.value.includes("+") ? (
                      <AnimatedCounter target={s.value} />
                    ) : (
                      s.value
                    )}
                  </p>
                  <p className="mt-1 text-[0.65rem] tracking-widest text-stone-400 uppercase">
                    {s.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="order-2 flex w-full flex-col gap-4 lg:order-2 lg:w-1/2">
          <div className="relative h-64 w-full overflow-hidden rounded-3xl bg-stone-100 md:h-80 lg:h-96">
            <Image
              src={Assets.Hero}
              alt="Exclusive dining experience at premium restaurants in Indonesia with Plateful"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div
              className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent"
              aria-hidden="true"
            />
            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-3 py-1.5 backdrop-blur-md">
              <span
                className="h-2 w-2 animate-pulse rounded-full bg-green-400"
                aria-hidden="true"
              />
              <span className="text-xs font-semibold tracking-wide text-white">
                Live deals available now
              </span>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-red-100 bg-red-50 p-4 md:p-5">
            <div
              className="pointer-events-none absolute top-3 right-3 opacity-40"
              aria-hidden="true"
            >
              <svg width="60" height="60" viewBox="0 0 72 72" fill="none">
                {[0, 1, 2, 3].flatMap((row) =>
                  [0, 1, 2, 3].map((col) => (
                    <circle
                      key={`${row}-${col}`}
                      cx={8 + col * 18}
                      cy={8 + row * 18}
                      r="2.5"
                      fill="#ff3131"
                      opacity="0.2"
                    />
                  )),
                )}
              </svg>
            </div>

            <div className="mb-3 flex items-center justify-between md:mb-4">
              <div className="flex items-center gap-2">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-lg bg-red-100 md:h-7 md:w-7"
                  aria-hidden="true"
                >
                  <Flame size={13} className="text-[#ff3131]" />
                </div>
                <h2 className="text-sm font-black tracking-tight text-stone-800">
                  Trending this week
                </h2>
                <span className="animate-pulse rounded-full bg-[#ff3131] px-2 py-0.5 text-[0.55rem] font-black tracking-wider text-white uppercase">
                  Hot
                </span>
              </div>
              <a
                href="/restaurants"
                className="flex items-center gap-1 text-[0.7rem] font-semibold text-[#ff3131] hover:underline"
                aria-label="See all trending restaurants"
              >
                See all <ChevronRight size={12} aria-hidden="true" />
              </a>
            </div>

            <div className="flex flex-col gap-2">
              {highlights.map((r, i) => (
                <RestaurantCard
                  key={r.name}
                  restaurant={r}
                  index={i}
                  priority={i === 0}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
