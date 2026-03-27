"use client";

import { useCallback, useState } from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

export const PrimaryButton = ({
  children,
  href = "#",
  onClick,
  className = "",
  size = "md",
  fullWidth = false,
}: PrimaryButtonProps) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

  const createRipple = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const id = Date.now();
    setRipples(prev => [...prev, { x: e.clientX - rect.left, y: e.clientY - rect.top, id }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600);
  }, []);

  const sizes = {
    sm: "px-5 py-2.5 text-[0.78rem] rounded-xl",
    md: "px-7 py-4 text-[0.85rem] rounded-2xl",
    lg: "px-9 py-5 text-[0.95rem] rounded-2xl",
  };

  return (
    <a
      href={href}
      onClick={(e) => { createRipple(e); onClick?.(); }}
      className={`
        relative inline-flex items-center justify-center gap-2.5 overflow-hidden
        font-bold tracking-wide
        bg-[#ff3131] text-white
        hover:bg-[#e02020]
        transition-all duration-150
        active:scale-95 touch-manipulation
        ${sizes[size]}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
    >
      {ripples.map(r => (
        <span
          key={r.id}
          className="absolute rounded-full bg-white/25 animate-ping pointer-events-none"
          style={{ left: r.x - 10, top: r.y - 10, width: 20, height: 20 }}
        />
      ))}
      {children}
    </a>
  );
}