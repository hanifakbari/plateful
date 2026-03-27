"use client";

import { useState, ElementType } from "react";
import { CheckCircle2 } from "lucide-react";

export interface Step {
  number: string;
  icon: ElementType;
  title: string;
  description: string;
  hoverBorder: string;
  textColor: string;
  tagBg: string;
  features: string[];
  tag: string;
}

interface StepCardProps {
  step: Step;
  index: number;
  isInView: boolean;
  mockup: React.ReactNode;
}

export const StepCard = ({ step, index, isInView, mockup }: StepCardProps) => {
  const [hovered, setHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const Icon = step.icon;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={handleMouseMove}
      className={`relative flex flex-col transition-all duration-700 ease-out ${
        isInView ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
      itemScope
      itemType="https://schema.org/HowToStep"
    >
      <div
        onMouseMove={handleMouseMove}
        className={`relative z-10 flex h-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-stone-200 bg-white p-6 transition-all duration-300 md:p-7 ${step.hoverBorder}`}
        style={{
          transform: hovered
            ? `perspective(1000px) rotateX(${(mousePos.y - 0.5) * -3}deg) rotateY(${(mousePos.x - 0.5) * 3}deg) translateY(-6px)`
            : "perspective(1000px) rotateX(0) rotateY(0) translateY(0)",
          boxShadow: hovered
            ? "0 24px 48px -12px rgba(0,0,0,0.1)"
            : "0 2px 8px -2px rgba(0,0,0,0.04)",
          transition:
            "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
        }}
      >
        <div className="mb-6 flex items-start justify-between">
          <span className="text-6xl leading-none font-black tracking-tighter text-stone-100 select-none">
            {step.number}
          </span>
          <span
            className={`rounded-full px-3 py-1 text-[0.68rem] font-bold tracking-wider uppercase ${step.tagBg}`}
          >
            {step.tag}
          </span>
          <meta itemProp="position" content={String(index + 1)} />
        </div>
        <div
          className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl transition-transform duration-300 ${
            hovered ? "scale-110 -rotate-6" : ""
          }`}
        >
          <Icon
            size={30}
            strokeWidth={1.8}
            className={step.textColor}
            aria-hidden="true"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <h3
            className="mb-2 text-lg leading-tight font-black tracking-tight text-stone-900"
            itemProp="name"
          >
            {step.title}
          </h3>
          <p
            className="mb-5 text-sm leading-relaxed font-light text-stone-400"
            itemProp="text"
          >
            {step.description}
          </p>
          <ul className="mb-5 flex flex-col gap-1.5">
            {step.features.map((f, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-xs font-medium text-stone-600"
              >
                <CheckCircle2
                  size={13}
                  className={step.textColor}
                  aria-hidden="true"
                />
                {f}
              </li>
            ))}
          </ul>
          <div className="mt-auto border-t border-stone-100 pt-4">{mockup}</div>
        </div>
      </div>
    </article>
  );
};
