"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { ArrowRight, Star } from "lucide-react";

interface Restaurant {
  image: string | StaticImageData;
  name: string;
  tag: string;
  tagColor: string;
  price: string;
  rating: string;
  cuisine: string;
}

interface RestaurantCardProps {
  restaurant: Restaurant;
  priority?: boolean;
  index: number;
}

export const RestaurantCard = ({
  restaurant,
  index,
  priority,
}: RestaurantCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <article
      onClick={handleClick}
      onKeyDown={(e) => e.key === "Enter" && handleClick()}
      className="group flex cursor-pointer items-center gap-3 rounded-2xl border border-stone-200 bg-white p-2.5 transition-all duration-200 hover:translate-x-1 hover:border-red-200 hover:shadow-sm active:scale-[0.98]"
      tabIndex={0}
      role="button"
      aria-label={`View deal at ${restaurant.name} — ${restaurant.cuisine} — ${restaurant.price}`}
    >
      <span
        className="w-4 shrink-0 text-center text-[0.6rem] font-black text-stone-300"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-stone-100">
        {!imageLoaded && (
          <div
            className="absolute inset-0 flex items-center justify-center"
            aria-hidden="true"
          >
            <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#ff3131] border-t-transparent" />
          </div>
        )}
        <Image
          src={restaurant.image}
          alt={`${restaurant.name} — ${restaurant.cuisine}`}
          width={44}
          height={44}
          priority={priority}
          onLoad={() => setImageLoaded(true)}
          className={`h-full w-full object-cover transition-transform duration-300 group-hover:scale-110 ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="mb-1 truncate text-xs font-bold text-stone-800">
          {restaurant.name}
        </h3>
        <div className="flex items-center gap-1.5">
          <span
            className={`rounded-md border px-1.5 py-0.5 text-[0.58rem] font-bold ${restaurant.tagColor}`}
          >
            {restaurant.tag}
          </span>
          <span className="truncate text-[0.62rem] text-stone-400">
            {restaurant.cuisine}
          </span>
        </div>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-1">
        <p className="text-xs font-black text-[#ff3131]">{restaurant.price}</p>
        <div className="flex items-center gap-0.5 text-[0.62rem] text-stone-400">
          <Star size={9} fill="#FBBF24" stroke="none" aria-hidden="true" />
          <span>{restaurant.rating}</span>
        </div>
      </div>

      <div
        className={`transition-all duration-200 ${
          isLoading
            ? "opacity-100"
            : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
        } ml-1 shrink-0 text-stone-300`}
        aria-hidden="true"
      >
        {isLoading ? (
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-[#ff3131] border-t-transparent" />
        ) : (
          <ArrowRight size={14} />
        )}
      </div>
    </article>
  );
};
