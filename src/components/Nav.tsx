"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/resume", label: "Resume" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="shrink-0 flex items-center justify-between px-6 md:px-10 py-6 md:py-8">
      <Link href="/" className="text-base md:text-lg font-extrabold tracking-tight">
        Ali Khoramshad
      </Link>

      <nav className="flex items-center gap-6 md:gap-10">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative pb-1 text-sm font-medium uppercase tracking-wide transition-colors ${
                isActive ? "text-cobalt" : "text-foreground hover:text-cobalt"
              }`}
            >
              {link.label}
              {isActive && (
                <span className="absolute -bottom-[2px] left-0 h-[3px] w-full bg-cobalt" />
              )}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
