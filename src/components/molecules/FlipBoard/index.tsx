"use client";

import { useEffect, useState } from "react";

const dealTypes = ["All You Can Eat", "Set Menu", "Exclusive Dining"];

export const FlipBoard = () => {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % dealTypes.length);
        setIsAnimating(false);
      }, 400);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="inline-flex items-center gap-2"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <span className="sr-only">Now featuring: {dealTypes[index]}</span>
      <span
        className={`rounded-lg border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-black tracking-tight text-[#ff3131] transition-all duration-400 ease-out ${
          isAnimating
            ? "-translate-y-2 scale-95 opacity-0"
            : "translate-y-0 scale-100 opacity-100"
        }`}
        aria-hidden="true"
      >
        {dealTypes[index]}
      </span>
      <div className="flex items-center gap-1" aria-hidden="true">
        {dealTypes.map((_, i) => (
          <div
            key={i}
            className={`h-0.75 rounded-full transition-all duration-300 ${
              i === index ? "w-4 bg-[#ff3131]" : "w-1.25 bg-stone-200"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
