"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Assets } from "@/assets";

const links = [
  {
    heading: "Explore",
    items: [
      { label: "Featured Deals", href: "#featured-deals" },
      { label: "Popular Cuisines", href: "#popular-cuisines" },
      { label: "Jakarta", href: "/city/jakarta" },
      { label: "Bali", href: "/city/bali" },
      { label: "Bandung", href: "/city/bandung" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About Us", href: "# " },
      { label: "Careers", href: "# " },
      { label: "Blog", href: "# " },
      { label: "Press", href: "# " },
    ],
  },
  {
    heading: "Support",
    items: [
      { label: "Help Center", href: "# " },
      { label: "Contact Us", href: "# " },
      { label: "Privacy Policy", href: "# " },
      { label: "Terms of Service", href: "# " },
    ],
  },
];

const socials = [
  {
    icon: Assets.Instagram,
    href: "instargram.com",
    label: "Follow Plateful on Instagram",
  },
  {
    icon: Assets.X,
    href: "x.com",
    label: "Follow Plateful on Twitter",
  },
  {
    icon: Assets.Youtube,
    href: "youtube.com",
    label: "Follow Plateful on YouTube",
  },
];

export const Footer = () => {
  return (
    <footer
      aria-label="Plateful footer"
      className="bg-white px-4 pt-14 md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-6xl">
        {/* Top — logo + newsletter + links */}
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand col */}
          <div className="lg:col-span-2">
            <Image
              src={Assets.Plateful}
              alt="Plateful logo"
              width={150}
              height={150}
              className="mb-4"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed font-light text-stone-400">
              Indonesia&apos;s exclusive dining deals app. Discover, book, and
              dine at 1,000+ premium restaurants across Jakarta, Bali & Bandung.
            </p>

            <div className="mt-6">
              <p className="mb-3 text-xs font-bold tracking-widest text-stone-700 uppercase">
                Get deals in your inbox
              </p>
              <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  aria-label="Email address for newsletter"
                  className="flex-1 rounded-xl border border-stone-200 bg-stone-50 px-4 py-2.5 text-sm text-stone-800 transition-colors placeholder:text-stone-400 focus:border-[#ff3131] focus:outline-none"
                />
                <button
                  aria-label="Subscribe to newsletter"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ff3131] text-white transition-all hover:bg-red-600 active:scale-95"
                >
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              {socials.map((s, i) => (
                <Link
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 text-stone-400 transition-all hover:border-[#ff3131] hover:text-[#ff3131]"
                >
                  <Image
                    src={s.icon}
                    alt={s.label}
                    width={18}
                    height={18}
                    className="object-contain"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Link cols */}
          {links.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-xs font-bold tracking-widest text-stone-700 uppercase">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm text-stone-400 transition-colors hover:text-[#ff3131]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-stone-100" />

        {/* Bottom */}
        <div className="w-full py-4">
          <div className="flex justify-center">
            <p className="flex items-center gap-2 text-xs text-stone-400">
              © {new Date().getFullYear()}
              <span className="font-bold text-stone-600">Plateful</span>. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
