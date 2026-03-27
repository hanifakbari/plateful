import { ReactNode } from "react";

interface EyebrowPillProps {
  icon: ReactNode;
  label: string;
  /** Optional: override bg. Default white */
  className?: string;
}

export const EyebrowPill = ({ icon, label, className }: EyebrowPillProps) => {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border border-stone-100 bg-white px-4 py-2 shadow-sm ${className ?? ""}`}
    >
      <span aria-hidden="true">{icon}</span>
      <span className="text-xs font-bold tracking-widest text-stone-500 uppercase">
        {label}
      </span>
    </div>
  );
};
