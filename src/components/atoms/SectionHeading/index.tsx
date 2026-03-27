import { ReactNode } from "react";
import { EyebrowPill } from "../EyebrowPill";

interface SectionHeadingProps {
  eyebrow: {
    icon: ReactNode;
    label: string;
  };
  title: string;
  highlight: string;
  description?: string;
  rightContent?: ReactNode;
  descriptionAlign?: "left" | "right";
  id: string;
}

export const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  description,
  rightContent,
  descriptionAlign = "left",
  id,
}: SectionHeadingProps) => {
  return (
    <header className="mb-12 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
      <div className="max-w-xl">
        <div className="mb-5">
          <EyebrowPill icon={eyebrow.icon} label={eyebrow.label} />
        </div>

        <h2
          id={id}
          className="text-4xl leading-none font-black tracking-tighter text-stone-900 md:text-5xl lg:text-6xl"
        >
          {title}{" "}
          <span className="relative inline-block">
            <span className="text-[#ff3131] italic">{highlight}</span>
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M2 8 Q25 2 50 8 Q75 14 100 8 Q125 2 150 8 Q175 14 198 8"
                stroke="#ff3131"
                strokeWidth="4"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </h2>
      </div>

      {rightContent ? (
        <div className="lg:max-w-sm lg:text-right">{rightContent}</div>
      ) : description ? (
        <p
          className={`max-w-xs text-sm leading-relaxed font-light text-stone-400 ${
            descriptionAlign === "right" ? "lg:text-right" : ""
          }`}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
};
