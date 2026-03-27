"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowRight } from "lucide-react";

export interface Cuisine {
  image: string | StaticImageData;
  name: string;
  description: string;
  count: string;
  tag: string;
  tagColor: string;
}

interface CuisineCardProps {
  cuisine: Cuisine;
  index: number;
  isInView: boolean;
}

export const CuisineCard = ({ cuisine, index, isInView }: CuisineCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex cursor-pointer flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white transition-all duration-500 ease-out ${
        hovered
          ? "-translate-y-1 border-stone-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
          : "shadow-sm"
      } ${isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      style={{ transitionDelay: isInView ? `${index * 80}ms` : "0ms" }}
      aria-label={`Browse ${cuisine.name} restaurants — ${cuisine.count} deals available`}
    >
      {/* Image */}
      <div className="relative h-40 w-full shrink-0 overflow-hidden bg-stone-100">
        <Image
          src={cuisine.image}
          alt={`${cuisine.name} cuisine — dining deals in Indonesia`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          loading="lazy"
          className={`object-cover transition-transform duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"
          aria-hidden="true"
        />

        {/* Count overlay */}
        <div className="absolute bottom-3 left-3 rounded-xl bg-white/90 px-3 py-1.5 backdrop-blur-sm">
          <span className="text-xs font-black text-stone-900">
            {cuisine.count}
          </span>
          <span className="ml-1 text-[0.65rem] text-stone-400">deals</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-1.5 flex items-start justify-between gap-2">
          <h3 className="text-sm font-black text-stone-900 transition-colors duration-300 group-hover:text-[#ff3131]">
            {cuisine.name}
          </h3>
          <span
            className={`shrink-0 text-[0.65rem] font-bold tracking-wider uppercase ${cuisine.tagColor}`}
          >
            {cuisine.tag}
          </span>
        </div>

        <p className="flex-1 text-[0.78rem] leading-relaxed font-light text-stone-400">
          {cuisine.description}
        </p>

        <div className="mt-4 flex items-center gap-1.5 text-[0.75rem] font-semibold text-stone-400 transition-colors duration-300 group-hover:text-[#ff3131]">
          Browse deals
          <ArrowRight
            size={13}
            className={`transition-transform duration-300 ${hovered ? "translate-x-0.5" : ""}`}
            aria-hidden="true"
          />
        </div>
      </div>
    </article>
  );
};
