const paragraphs = [
  "I'm a designer working across motion, brand, and interface. I recently completed my MFA in Digital Arts at Bowling Green State University, where I built interactive installations and taught digital imaging.",
  "Before moving to the US, I spent six years leading design and R&D at IELTSDAILY, one of Iran's largest language academies, where I shipped hundreds of motion, brand, and editorial projects. I bring AI into my pipeline whenever it earns its place.",
  "I care about systems, craft, and clarity, in that order.",
  "Open to opportunities across the US and remote.",
];

export default function About() {
  return (
    <section className="flex-1 flex items-center px-6 md:px-10 py-16 md:py-20">
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_400px] gap-10 md:gap-16 items-center">
        <div className="max-w-2xl order-2 md:order-1">
          <p className="text-2xl md:text-4xl font-extrabold tracking-tight mb-8 md:mb-10">
            Hi, I&apos;m Ali.
          </p>
          <div className="space-y-6 md:space-y-8">
            {paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className="text-lg md:text-2xl leading-relaxed text-foreground/80"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div className="order-1 md:order-2 aspect-square border border-foreground/10 overflow-hidden">
          <video
            src="/images/about/Picture.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
