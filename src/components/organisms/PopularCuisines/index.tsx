"use client";

import { ChefHat } from "lucide-react";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { CuisineCard, Cuisine } from "@/components/molecules/CuisineCard";
import { useInView } from "@/hooks/useInView";
import { Assets } from "@/assets";

const cuisines: Cuisine[] = [
  {
    image: Assets.Food1,
    name: "Indonesian",
    description:
      "From rendang to nasi goreng — celebrate the rich flavours of the archipelago.",
    count: "320+",
    tag: "Most Popular",
    tagColor: "text-[#ff3131]",
  },
  {
    image: Assets.Food6,
    name: "Japanese",
    description:
      "Omakase, sushi, and ramen from Jakarta's finest Japanese dining houses.",
    count: "180+",
    tag: "Trending",
    tagColor: "text-amber-500",
  },
  {
    image: Assets.Food3,
    name: "Fine Dining",
    description:
      "Multi-course tasting menus and white-tablecloth experiences across Indonesia.",
    count: "95+",
    tag: "Editor's Pick",
    tagColor: "text-stone-500",
  },
  {
    image: Assets.Food4,
    name: "Western",
    description:
      "Contemporary European and American cuisine crafted by world-class chefs.",
    count: "140+",
    tag: "Popular",
    tagColor: "text-blue-500",
  },
  {
    image: Assets.Food5,
    name: "Seafood",
    description:
      "Fresh catches and ocean-to-table experiences from Bali to Surabaya.",
    count: "110+",
    tag: "Fresh Deals",
    tagColor: "text-emerald-500",
  },
  {
    image: Assets.Food2,
    name: "Rooftop",
    description:
      "Sky-high dining with panoramic city views across Jakarta and Bali.",
    count: "60+",
    tag: "Exclusive",
    tagColor: "text-indigo-500",
  },
];

export const PopularCuisines = () => {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="popular-cuisines"
      aria-labelledby="popular-cuisines-heading"
      className="bg-[#FAFAF9] px-4 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="popular-cuisines-heading"
          eyebrow={{ icon: <ChefHat size={14} />, label: "Popular Cuisines" }}
          title="Every craving,"
          highlight="covered"
          description="From classic Indonesian to world-class fine dining — browse by cuisine and find your next favourite table."
          descriptionAlign="right"
        />

        <div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          aria-label="Popular cuisine categories on Plateful"
        >
          {cuisines.map((c, i) => (
            <CuisineCard
              key={c.name}
              cuisine={c}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
