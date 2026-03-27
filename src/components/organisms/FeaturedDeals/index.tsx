"use client";

import { useState } from "react";
import { ArrowRight, ChevronRight, Flame } from "lucide-react";
import { DealCard, PrimaryButton, SectionHeading } from "@/components";
import { Assets } from "@/assets";
import { useInView } from "@/hooks";
import { Deal } from "@/components/molecules/DealCard";
import Link from "next/link";

const categories = ["All", "AYCE", "Set Menu", "Exclusive"] as const;
type Category = (typeof categories)[number];

const deals: Deal[] = [
  {
    image: Assets.Food1,
    name: "Plataran Menteng",
    cuisine: "Indonesian · Fine Dining",
    location: "Menteng, Jakarta",
    tag: "AYCE",
    price: "IDR 299K",
    originalPrice: "IDR 450K",
    rating: "4.9",
    reviews: "2.4k",
    saved: 3200,
    badge: "Best Seller",
    badgeColor: "text-[#ff3131]",
  },
  {
    image: Assets.Food6,
    name: "Sushi Tei SCBD",
    cuisine: "Japanese · Omakase",
    location: "SCBD, Jakarta",
    tag: "Set Menu",
    price: "IDR 188K",
    originalPrice: "IDR 280K",
    rating: "4.8",
    reviews: "1.8k",
    saved: 1900,
    badge: "Trending",
    badgeColor: "text-orange-500",
  },
  {
    image: Assets.Food2,
    name: "Lara Djonggrang",
    cuisine: "Indonesian · Heritage",
    location: "Cikini, Jakarta",
    tag: "Exclusive",
    price: "IDR 450K",
    originalPrice: "IDR 650K",
    rating: "5.0",
    reviews: "986",
    saved: 2400,
    badge: "Editor's Pick",
    badgeColor: "text-stone-500",
  },
  {
    image: Assets.Food4,
    name: "Sarong Restaurant",
    cuisine: "International · Fusion",
    location: "Seminyak, Bali",
    tag: "Set Menu",
    price: "IDR 380K",
    originalPrice: "IDR 520K",
    rating: "4.9",
    reviews: "3.1k",
    saved: 4100,
    badge: "Popular",
    badgeColor: "text-blue-500",
  },
  {
    image: Assets.Food5,
    name: "Locavore",
    cuisine: "Modern Indonesian",
    location: "Ubud, Bali",
    tag: "Exclusive",
    price: "IDR 550K",
    originalPrice: "IDR 800K",
    rating: "4.9",
    reviews: "4.2k",
    saved: 5600,
    badge: "Editor's Pick",
    badgeColor: "text-stone-500",
  },
  {
    image: Assets.Food3,
    name: "Skye Bar & Restaurant",
    cuisine: "International · Rooftop",
    location: "MH Thamrin, Jakarta",
    tag: "AYCE",
    price: "IDR 320K",
    originalPrice: "IDR 480K",
    rating: "4.7",
    reviews: "1.5k",
    saved: 2800,
    badge: "Trending",
    badgeColor: "text-orange-500",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Featured Dining Deals in Indonesia — Plateful",
  description:
    "Exclusive dining deals at premium restaurants across Jakarta, Bali, and Bandung.",
  itemListElement: deals.map((d, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: d.name,
    description: `${d.cuisine} — ${d.location} — from ${d.price} per person`,
  })),
};

export const FeaturedDeals = () => {
  const { ref, isInView } = useInView<HTMLElement>();
  const [active, setActive] = useState<Category>("All");

  const filtered =
    active === "All" ? deals : deals.filter((d) => d.tag === active);

  return (
    <section
      ref={ref}
      id="featured-deals"
      aria-labelledby="featured-deals-heading"
      className="bg-white px-4 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="featured-deals-heading"
          eyebrow={{ icon: <Flame size={14} />, label: "Featured Deals" }}
          title="Deals worth"
          highlight="celebrating"
          rightContent={
            <Link
              href="# "
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#ff3131] hover:underline"
              aria-label="See all dining deals"
            >
              See all deals <ChevronRight size={15} aria-hidden="true" />
            </Link>
          }
        />

        {/* Filter tabs */}
        <div
          className={`mb-8 flex flex-wrap items-center gap-2 transition-all delay-100 duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          role="tablist"
          aria-label="Filter deals by type"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              role="tab"
              aria-selected={active === cat}
              className={`rounded-full border px-4 py-2 text-xs font-bold transition-all duration-200 ${
                active === cat
                  ? "border-[#ff3131] bg-[#ff3131] text-white shadow-sm"
                  : "border-stone-200 bg-white text-stone-500 hover:border-stone-300 hover:text-stone-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Deal cards */}
        <div
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          role="list"
          aria-label="Featured dining deals in Indonesia"
        >
          {filtered.map((deal, i) => (
            <DealCard
              key={deal.name}
              deal={deal}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>

        <div
          className={`mt-12 flex flex-col items-center justify-between gap-4 rounded-3xl border border-stone-100 bg-stone-50 px-7 py-6 transition-all delay-300 duration-700 sm:flex-row ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <p className="text-base font-black tracking-tight text-stone-900">
              Explore 1,000+ deals across Indonesia
            </p>
            <p className="mt-0.5 text-sm font-light text-stone-400">
              Jakarta · Bali · Bandung · Surabaya · and more
            </p>
          </div>
          <PrimaryButton size="md">
            Browse all deals <ArrowRight size={16} aria-hidden="true" />
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};
