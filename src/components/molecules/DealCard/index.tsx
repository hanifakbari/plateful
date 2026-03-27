"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowRight, Star, Heart, MapPin } from "lucide-react";

export interface Deal {
  image: string | StaticImageData;
  name: string;
  cuisine: string;
  location: string;
  tag: string;
  price: string;
  originalPrice: string;
  rating: string;
  reviews: string;
  saved: number;
  badge: string;
  badgeColor: string;
}

interface DealCardProps {
  deal: Deal;
  index: number;
  isInView: boolean;
}

export const DealCard = ({ deal, index, isInView }: DealCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const discount = Math.round(
    ((parseInt(deal.originalPrice.replace(/\D/g, "")) -
      parseInt(deal.price.replace(/\D/g, ""))) /
      parseInt(deal.originalPrice.replace(/\D/g, ""))) *
      100,
  );

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white transition-all duration-500 ease-out ${
        hovered
          ? "-translate-y-1 border-stone-300 shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
          : "shadow-sm"
      } ${isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
      style={{ transitionDelay: isInView ? `${index * 100}ms` : "0ms" }}
      aria-label={`${deal.name} — ${deal.cuisine} — ${deal.price} per person`}
      itemScope
      itemType="https://schema.org/Restaurant"
    >
      {/* Image */}
      <div className="relative aspect-4/3 w-full overflow-hidden rounded-t-3xl bg-stone-100">
        <Image
          src={deal.image}
          alt={`${deal.name} — ${deal.cuisine} in ${deal.location}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index < 3}
          className={`object-cover transition-transform duration-700 ${
            hovered ? "scale-105" : "scale-100"
          }`}
          itemProp="image"
        />
        <div
          className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60"
          aria-hidden="true"
        />

        <div className="absolute top-4 left-4 rounded-full bg-[#ff3131] px-3 py-1.5 text-[0.65rem] font-bold tracking-wide text-white">
          Save {discount}%
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsBookmarked(!isBookmarked);
          }}
          className={`absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 ${
            isBookmarked
              ? "bg-[#ff3131] text-white"
              : "bg-white/90 text-stone-600 backdrop-blur-sm hover:text-[#ff3131]"
          }`}
          aria-label={isBookmarked ? "Remove from saved" : "Save deal"}
        >
          <Heart size={15} className={isBookmarked ? "fill-current" : ""} />
        </button>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="mb-1 flex items-start justify-between gap-2">
          <h3
            className="flex-1 text-base leading-tight font-bold text-stone-900 transition-colors duration-300 group-hover:text-[#ff3131]"
            itemProp="name"
          >
            {deal.name}
          </h3>
          <div
            className="flex shrink-0 items-center gap-1"
            aria-label={`Rating ${deal.rating}`}
          >
            <Star size={11} fill="#FBBF24" stroke="none" aria-hidden="true" />
            <span className="text-[0.75rem] font-semibold text-stone-700">
              {deal.rating}
            </span>
            <span className="text-[0.68rem] text-stone-400">
              ({deal.reviews})
            </span>
          </div>
        </div>

        <div className="mb-3 flex items-center justify-between gap-2">
          <p className="text-[0.8rem] text-stone-500" itemProp="servesCuisine">
            {deal.cuisine}
          </p>
          <div className="flex shrink-0 items-center gap-1 text-stone-400">
            <Heart size={10} aria-hidden="true" />
            <span className="text-[0.68rem]">
              {deal.saved.toLocaleString()} saved
            </span>
          </div>
        </div>

        <div className="mb-4 flex items-center gap-1.5" itemProp="address">
          <MapPin
            size={11}
            className="shrink-0 text-stone-300"
            aria-hidden="true"
          />
          <span className="text-[0.72rem] text-stone-400">{deal.location}</span>
        </div>

        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-md bg-stone-100 px-2.5 py-1 text-[0.65rem] font-bold tracking-wider text-stone-500 uppercase">
            {deal.tag}
          </span>
          <span
            className={`text-[0.65rem] font-bold tracking-wider uppercase ${deal.badgeColor}`}
          >
            {deal.badge}
          </span>
        </div>

        <div className="mt-auto flex items-end justify-between border-t border-stone-100 pt-4">
          <div>
            <p
              className="text-lg leading-none font-black text-stone-900"
              itemProp="priceRange"
            >
              {deal.price}
              <span className="ml-1 text-[0.68rem] font-normal text-stone-400">
                /pax
              </span>
            </p>
            <p className="mt-0.5 text-[0.72rem] text-stone-400 line-through">
              {deal.originalPrice}
            </p>
          </div>
          <div
            className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
              hovered
                ? "bg-[#ff3131] text-white"
                : "bg-stone-100 text-stone-400"
            }`}
            aria-hidden="true"
          >
            <ArrowRight
              size={15}
              className={`transition-transform duration-300 ${hovered ? "translate-x-0.5" : ""}`}
            />
          </div>
        </div>
      </div>
    </article>
  );
};
