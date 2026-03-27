import Link from "next/link";

const navLinks = [
  { label: "Why Plateful", href: "#why-plateful" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Deals", href: "#featured-deals" },
  { label: "Download", href: "#download" },
];

export const DesktopNav = () => (
  <nav
    aria-label="Main navigation"
    className="hidden items-center gap-8 md:flex"
  >
    {navLinks.map((link) => (
      <Link
        key={link.label}
        href={link.href}
        className="cursor-pointer text-sm font-medium text-stone-500 transition-colors hover:text-[#ff3131]"
      >
        {link.label}
      </Link>
    ))}
  </nav>
);
