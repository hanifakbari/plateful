"use client";

import { MessageSquareQuote } from "lucide-react";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import {
  TestimonialCard,
  Testimonial,
} from "@/components/molecules/TestimonialCard";
import { useInView } from "@/hooks/useInView";

const testimonials: Testimonial[] = [
  {
    name: "Rina Sartika",
    avatar: "",
    rating: 5,
    review:
      "Plateful completely changed how we dine out. Found an amazing AYCE deal at Plataran Menteng for half the usual price. The booking took literally 30 seconds!",
    restaurant: "Plataran Menteng",
    restaurantTag: "AYCE",
    location: "Jakarta",
  },
  {
    name: "Budi Santoso",
    avatar: "",
    rating: 5,
    review:
      "We used Plateful for our anniversary dinner at Lara Djonggrang. The exclusive deal was incredible — best dining experience we've had in Jakarta.",
    restaurant: "Lara Djonggrang",
    restaurantTag: "Exclusive",
    location: "Cikini, Jakarta",
  },
  {
    name: "Dewi Rahayu",
    avatar: "",
    rating: 5,
    review:
      "Locavore in Ubud was on my bucket list for years. Plateful made it actually affordable. The set menu deal saved us IDR 300K per person!",
    restaurant: "Locavore",
    restaurantTag: "Set Menu",
    location: "Ubud, Bali",
  },
  {
    name: "Arif Wibowo",
    avatar: "",
    rating: 4,
    review:
      "Super easy to use. Booked Sarong Restaurant in Bali for 4 people in under a minute. No hidden fees, no surprises — exactly what was advertised.",
    restaurant: "Sarong Restaurant",
    restaurantTag: "Set Menu",
    location: "Seminyak, Bali",
  },
  {
    name: "Siti Nuraini",
    avatar: "",
    rating: 5,
    review:
      "I've recommended Plateful to all my friends. The deals are real and the restaurants are genuinely premium. Skye Bar for sunset dinner was unforgettable.",
    restaurant: "Skye Bar & Restaurant",
    restaurantTag: "AYCE",
    location: "Jakarta",
  },
  {
    name: "Hendra Gunawan",
    avatar: "",
    rating: 5,
    review:
      "Sushi Tei SCBD via Plateful was a game changer. Got the omakase set menu at a price that felt almost too good to be true — but it was 100% legit.",
    restaurant: "Sushi Tei SCBD",
    restaurantTag: "Set Menu",
    location: "SCBD, Jakarta",
  },
];

export const Testimonials = () => {
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <section
      ref={ref}
      id="testimonials"
      aria-labelledby="testimonials-heading"
      className="bg-white px-4 py-20 md:px-10 md:py-24 lg:px-16 lg:py-28"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          id="testimonials-heading"
          eyebrow={{
            icon: <MessageSquareQuote size={14} />,
            label: "What diners say",
          }}
          title="Loved by"
          highlight="50,000+ diners"
          description="Real reviews from real people who dined smarter with Plateful across Indonesia."
          descriptionAlign="right"
        />

        <div
          className={`mb-10 flex flex-wrap items-center gap-8 transition-all delay-100 duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {[
            { value: "4.9", label: "Average rating" },
            { value: "12,000+", label: "Reviews" },
            { value: "98%", label: "Would recommend" },
          ].map((s, i) => (
            <div key={i} className="flex items-center gap-3">
              {i > 0 && (
                <div
                  className="hidden h-8 w-px bg-stone-100 md:block"
                  aria-hidden="true"
                />
              )}
              <div>
                <p className="text-2xl leading-none font-black tracking-tight text-stone-900">
                  {s.value}
                </p>
                <p className="mt-1 text-[0.65rem] tracking-widest text-stone-400 uppercase">
                  {s.label}
                </p>
              </div>
            </div>
          ))}

          <div
            className="ml-auto flex items-center gap-1"
            aria-label="Average rating 4.9 out of 5"
          >
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="#ff3131"
                aria-hidden="true"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
          </div>
        </div>

        <div
          className={`transition-all delay-200 duration-700 ${
            isInView ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div
            className="scrollbar-hide flex gap-4 overflow-x-auto pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            aria-label="Customer testimonials"
            role="list"
          >
            {testimonials.map((t, i) => (
              <div key={i} role="listitem">
                <TestimonialCard testimonial={t} />
              </div>
            ))}
          </div>

          <p className="mt-3 text-center text-[0.7rem] text-stone-300 md:hidden">
            Swipe to read more →
          </p>
        </div>
      </div>
    </section>
  );
};
