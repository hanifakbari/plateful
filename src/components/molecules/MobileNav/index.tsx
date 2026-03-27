"use client";

import Link from "next/link";
import { X, ArrowRight } from "lucide-react";
import { PrimaryButton } from "@/components";
import { Assets } from "@/assets";
import Image from "next/image";

const navLinks = [
  { label: "Why Plateful", href: "#why-plateful" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Deals", href: "#featured-deals" },
  { label: "Download", href: "#download" },
];

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export const MobileNav = ({ open, onClose }: MobileNavProps) => (
  <div
    className={`fixed inset-0 z-60 flex flex-col bg-white transition-all duration-300 ease-out md:hidden ${
      open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
    }`}
    inert={!open ? true : undefined}
  >
    <div className="flex items-center justify-between border-b border-stone-100 p-4">
      <Image
        src={Assets.Plateful}
        alt="Plateful logo"
        width={0}
        height={0}
        priority
        className="h-12 w-auto"
      />
      <button
        onClick={onClose}
        aria-label="Close menu"
        className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 text-stone-500 transition-colors hover:bg-stone-100"
      >
        <X size={18} />
      </button>
    </div>

    <nav
      aria-label="Mobile navigation"
      className="flex flex-1 flex-col gap-1 px-6 pt-4"
    >
      {navLinks.map((link, i) => (
        <Link
          key={link.label}
          href={link.href}
          onClick={onClose}
          className={`flex items-center justify-between rounded-xl px-3 py-4 text-base font-medium text-stone-700 transition-all hover:bg-stone-50 hover:text-[#ff3131] ${
            open ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
          }`}
          style={{ transitionDelay: open ? `${i * 60}ms` : "0ms" }}
        >
          {link.label}
          <ArrowRight size={15} className="text-stone-300" aria-hidden="true" />
        </Link>
      ))}
    </nav>

    <div className="border-t border-stone-100 px-6 pt-4 pb-10">
      <PrimaryButton
        size="md"
        href="#featured-deals"
        className="mb-4 w-full justify-center"
      >
        Browse deals <ArrowRight size={15} aria-hidden="true" />
      </PrimaryButton>
      <p className="text-center text-xs text-stone-400">
        1,000+ deals across Indonesia
      </p>
    </div>
  </div>
);
