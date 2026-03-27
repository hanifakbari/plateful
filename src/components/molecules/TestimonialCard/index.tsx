"use client";

import { Star } from "lucide-react";

export interface Testimonial {
  name: string;
  avatar: string;
  rating: number;
  review: string;
  restaurant: string;
  restaurantTag: string;
  location: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <article
      className="flex w-72 shrink-0 flex-col gap-4 rounded-3xl border border-stone-200 bg-white p-6 shadow-sm"
      itemScope
      itemType="https://schema.org/Review"
    >
      <div
        className="flex items-center gap-1"
        aria-label={`Rating ${testimonial.rating} out of 5`}
      >
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={14}
            fill={i < testimonial.rating ? "#ff3131" : "#e5e7eb"}
            stroke="none"
            aria-hidden="true"
          />
        ))}
      </div>

      <p
        className="flex-1 text-sm leading-relaxed font-light text-stone-600"
        itemProp="reviewBody"
      >
        &ldquo;{testimonial.review}&rdquo;
      </p>

      <div className="flex items-center gap-2 rounded-2xl border border-stone-100 bg-stone-50 px-3 py-2">
        <div
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3131]"
          aria-hidden="true"
        />
        <div className="min-w-0">
          <p
            className="truncate text-[0.7rem] font-bold text-stone-800"
            itemProp="itemReviewed"
          >
            {testimonial.restaurant}
          </p>
          <p className="text-[0.62rem] text-stone-400">
            {testimonial.restaurantTag} · {testimonial.location}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 border-t border-stone-50 pt-1">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-200">
          <span className="text-xs font-black text-stone-500">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <p className="text-xs font-bold text-stone-800" itemProp="author">
            {testimonial.name}
          </p>
          <p className="text-[0.62rem] text-stone-400">Verified diner</p>
        </div>
      </div>
    </article>
  );
};
