import Image from "next/image";

export default function Home() {
  return (
    <section className="flex-1 flex flex-col justify-center px-6 md:px-10">
      <h1 className="font-extrabold tracking-tight leading-[0.78] text-[12vw] md:text-[9vw]">
        <span className="block">Ali</span>
        <span className="mt-[0.1em] inline-flex items-center gap-2.5 md:gap-5">
          <span>Khoramshad</span>
          <span className="relative inline-block h-[0.58em] md:h-[1.05em] aspect-[151/208] shrink-0">
            <Image
              src="/images/about/Avatar.png"
              alt="Ali Khoramshad"
              fill
              priority
              style={{ imageRendering: "pixelated" }}
              className="object-contain"
            />
          </span>
        </span>
      </h1>
      <p className="mt-10 md:mt-12 max-w-xl text-lg md:text-2xl text-foreground/70">
        Designer working across motion, brand, and interface.
      </p>
    </section>
  );
}
