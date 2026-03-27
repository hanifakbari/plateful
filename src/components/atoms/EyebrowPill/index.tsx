import { ReactNode } from "react";

interface EyebrowPillProps {
  icon: ReactNode;
  label: string;
  className?: string;
  iconClassName?: string;
}

export const EyebrowPill = ({
  icon,
  label,
  className,
  iconClassName,
}: EyebrowPillProps) => {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-stone-100 bg-white px-4 py-2 shadow-sm ${className ?? ""}`}
    >
      <span className={iconClassName ?? "text-[#ff3131]"} aria-hidden="true">
        {icon}
      </span>
      <span className="text-xs font-bold tracking-widest text-stone-500 uppercase">
        {label}
      </span>
    </div>
  );
};
