"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ArrowRight } from "lucide-react";
import { Assets } from "@/assets";
import { PrimaryButton } from "@/components";
import { DesktopNav } from "@/components/molecules/DesktopNav";
import { MobileNav } from "@/components/molecules/MobileNav";

const PlatefulLogo = () => (
  <Link href="/" className="flex items-center gap-2" aria-label="Plateful home">
    <Image
      src={Assets.Plateful}
      alt="Plateful logo"
      width={0}
      height={0}
      priority
      className="h-12 w-auto"
    />
  </Link>
);

export const Navbar = () => {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (mobileOpen) return;
      const currentY = window.scrollY;

      if (currentY < 10) {
        setVisible(true);
        setScrolled(false);
      } else if (currentY < lastScrollY.current) {
        setVisible(true);
        setScrolled(true);
      } else if (currentY > lastScrollY.current + 5) {
        setVisible(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          visible || mobileOpen ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled
            ? "border-b border-stone-100 bg-white/90 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
        aria-label="Site header"
      >
        <div className="mx-auto flex items-center justify-between px-4 py-4 md:px-10 lg:px-30">
          <PlatefulLogo />
          <DesktopNav />
          <div className="hidden items-center md:flex">
            <PrimaryButton size="sm">
              Browse deals <ArrowRight size={14} aria-hidden="true" />
            </PrimaryButton>
          </div>

          {!mobileOpen && (
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-stone-200 bg-white text-stone-600 transition-colors hover:border-stone-300 md:hidden"
            >
              <Menu size={18} />
            </button>
          )}
        </div>
      </header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
};
