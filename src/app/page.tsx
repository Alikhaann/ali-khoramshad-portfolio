import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Works", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
];

export default function Home() {
  return (
    <div className="relative h-screen w-full overflow-hidden bg-[#1C3EE5]">
      <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
        <picture>
          <source
            media="(prefers-reduced-motion: reduce)"
            srcSet="/images/about/Background-static.jpg"
          />
          <img
            src="/images/about/Backgroun.gif"
            alt=""
            className="h-full w-full object-cover"
          />
        </picture>
      </div>

      <div className="absolute left-[9%] right-[9%] top-[16%] z-10 flex items-start gap-[5.5vw] md:gap-[3.2vw]">
        <div>
          <h1 className="text-[9vw] font-extrabold uppercase leading-[0.9] tracking-[0.02em] text-white md:text-[6vw]">
            <span className="block">Ali</span>
            <span className="block">Khoramshad</span>
          </h1>
          <p className="mt-2 text-[22px] text-white/90 md:mt-3 md:text-[26px]">
            Motion first. Brand always.
          </p>
        </div>

        <div className="shrink-0">
          <div className="relative aspect-[151/208] h-[16.2vw] animate-float-avatar md:h-[10.8vw]">
            <Image
              src="/images/about/Avatar.png"
              alt="Ali Khoramshad"
              fill
              priority
              style={{ imageRendering: "pixelated" }}
              className="object-contain"
            />
          </div>
          <svg
            className="mx-auto mt-6 h-[1.15vw] w-[7.64vw] animate-float-shadow md:h-[0.76vw] md:w-[5.1vw]"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <ellipse cx="50" cy="50" rx="50" ry="50" fill="#152FAC" />
          </svg>
        </div>
      </div>

      <nav className="absolute bottom-[13%] right-[9%] z-10 flex w-[45vw] flex-col items-start md:w-[27vw]">
        {navItems.map((item, i) => (
          <div
            key={item.href}
            className={`w-full ${i < navItems.length - 1 ? "border-b border-white/40" : ""}`}
          >
            <Link
              href={item.href}
              className="inline-block py-[0.6vw] text-[4.275vw] font-extrabold text-white transition-transform duration-200 ease hover:translate-x-2 md:py-[0.4vw] md:text-[2.85vw]"
            >
              {item.label}
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
}
