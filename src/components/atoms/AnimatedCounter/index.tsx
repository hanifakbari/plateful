"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: string;
}

export const AnimatedCounter = ({ target }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const numeric = parseInt(target.replace(/\D/g, "")) || 0;
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          let startTime: number;
          const animate = (ts: number) => {
            if (!startTime) startTime = ts;
            const p = Math.min((ts - startTime) / 2000, 1);
            setCount(Math.floor((1 - Math.pow(1 - p, 4)) * numeric));
            if (p < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [numeric]);

  const formatted = target.includes("+")
    ? `${count.toLocaleString()}+`
    : target.includes("K")
      ? `${count}K`
      : count.toLocaleString();

  return <span ref={ref}>{formatted}</span>;
};
