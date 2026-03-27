"use client";

import Image from "next/image";
import { Smartphone, Download, CheckCircle, Star } from "lucide-react";
import { Assets } from "@/assets";
import { useInView } from "@/hooks/useInView";
import Link from "next/link";

export const AppDownload = () => {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="download"
      aria-labelledby="app-download-heading"
      className="bg-white px-4 py-20 md:px-10 md:py-24 lg:px-16 lg:py-14"
    >
      <div
        className={`relative mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-stone-900 transition-all duration-700 ${
          isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        {/* Background accents */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[#ff3131]/20 blur-[80px]" />
          <div className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-orange-500/10 blur-[80px]" />
          <div className="absolute top-0 right-0 left-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
          <div className="absolute right-0 bottom-0 left-0 h-px bg-linear-to-r from-transparent via-[#ff3131]/40 to-transparent" />
          <div className="absolute top-8 left-24 h-14 w-14 rotate-12 rounded-2xl border border-white/10" />
          <div className="absolute top-1/2 left-12 h-7 w-7 rotate-45 rounded-lg bg-[#ff3131]/20" />
        </div>

        {/* Main layout */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-end">
          {/* LEFT — text */}
          <div className="flex flex-col px-8 pt-12 pb-8 md:px-14 md:pt-16 md:pb-10 lg:flex-1 lg:pb-14">
            <div className="mb-5 inline-flex items-center gap-2 self-start rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <span
                className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400"
                aria-hidden="true"
              />
              <span className="text-[0.68rem] font-semibold tracking-widest text-white/60 uppercase">
                Available now
              </span>
            </div>

            <h2
              id="app-download-heading"
              className="mb-4 text-3xl leading-tight font-black tracking-tight text-white md:text-4xl lg:text-5xl"
            >
              Dine smarter,{" "}
              <span className="relative inline-block">
                <span className="text-[#ff3131] italic">anytime</span>
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
            </h2>

            <p className="mb-8 max-w-md text-sm leading-relaxed font-light text-stone-400 md:text-base">
              Get exclusive dining deals right in your pocket. Browse, book, and
              dine — all from the Plateful app. Available on iOS and Android.
            </p>

            {/* Store buttons */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-3.5 transition-all duration-300 hover:border-white/25 hover:bg-white/15 active:scale-95"
                aria-label="Download Plateful on App Store"
              >
                <Image
                  src={Assets.AppStore}
                  alt="App Store"
                  width={22}
                  height={22}
                  className="shrink-0"
                />
                <div className="text-left">
                  <p className="mb-0.5 text-[0.6rem] leading-none text-white/50">
                    Download on the
                  </p>
                  <p className="text-sm leading-none font-bold text-white">
                    App Store
                  </p>
                </div>
              </Link>

              <Link
                href="#"
                className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-5 py-3.5 transition-all duration-300 hover:border-white/25 hover:bg-white/15 active:scale-95"
                aria-label="Download Plateful on Google Play"
              >
                <Image
                  src={Assets.PlayStore}
                  alt="Google Play"
                  width={22}
                  height={22}
                  className="shrink-0"
                />
                <div className="text-left">
                  <p className="mb-0.5 text-[0.6rem] leading-none text-white/50">
                    Get it on
                  </p>
                  <p className="text-sm leading-none font-bold text-white">
                    Google Play
                  </p>
                </div>
              </Link>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="flex items-center gap-1"
                aria-label="Rating 4.9 out of 5"
              >
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < 4 ? "#ff3131" : "#e5e7eb"}
                    stroke="none"
                    aria-hidden="true"
                  />
                ))}
                <span className="ml-1.5 text-xs font-bold text-white">4.9</span>
              </div>
              <span className="text-xs text-stone-600" aria-hidden="true">
                ·
              </span>
              <span className="text-xs text-stone-500">50,000+ downloads</span>
            </div>
          </div>

          {/* RIGHT — mockup, all screen sizes */}
          <div className="relative flex justify-center px-8 pb-0 md:px-14 lg:w-72 lg:shrink-0 lg:px-0 xl:w-80">
            <div className="relative w-48 md:w-56 lg:w-full">
              <Image
                src={Assets.AppMockup}
                alt="Plateful app — browse and book exclusive dining deals"
                width={280}
                height={520}
                sizes="(max-width: 768px) 192px, (max-width: 1024px) 224px, 280px"
                priority
                className="w-full rounded-t-4xl object-cover object-top"
              />

              {/* Badge — booking confirmed */}
              <div className="absolute top-8 left-24 w-40 rounded-2xl border border-stone-100 bg-white px-3 py-2 shadow-xl md:top-10 md:left-20 lg:top-20 lg:left-36">
                <div className="flex items-center gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle
                      size={16}
                      className="text-emerald-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div>
                    <p className="text-[0.62rem] leading-tight font-bold text-stone-900">
                      Booking confirmed!
                    </p>
                    <p className="text-[0.55rem] text-stone-400">
                      Tonight, 7:30 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/4 -left-4 rounded-2xl border border-stone-100 bg-white px-3 py-2 shadow-xl md:-left-16 lg:left-0">
                <p className="mb-0.5 text-[0.55rem] text-stone-400">
                  You saved
                </p>
                <p className="text-sm leading-none font-black text-[#ff3131]">
                  IDR 150K
                </p>
              </div>

              <div className="absolute top-1/2 -left-4 rounded-2xl border border-stone-100 bg-white px-3 py-2 shadow-xl md:-left-16 lg:left-20">
                <p className="mb-0.5 text-[0.55rem] text-stone-400">
                  Active diners
                </p>
                <p className="text-sm leading-none font-black text-stone-900">
                  2,400+
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
