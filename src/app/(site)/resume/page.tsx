const workExperience = [
  {
    date: "2025–08 to 2026–05",
    role: "Instructor of Record & Graduate Teaching Assistant",
    org: "Bowling Green State University, Ohio",
    bullets: [
      "Taught ARTC 2210 Digital Imaging as instructor of record",
      "Designed curriculum covering Adobe Creative Suite, image manipulation, and digital design principles",
      "Mentored undergraduate students in portfolio development",
    ],
  },
  {
    date: "2024–08 to Present",
    role: "Freelance Content Designer",
    org: "Independent, remote",
    bullets: [
      "Producing short-form educational video content and social media strategy for a NYC-based brand",
      "Developed brand voice guidelines and content production system",
      "Deliver 40+ video pieces per month within strict brand and format specifications",
    ],
  },
  {
    date: "2019–10 to 2023–08",
    role: "Design & R&D Supervisor",
    org: "IELTSDAILY Academy, Iran",
    bullets: [
      "Led design and R&D team at one of Iran's largest language academies",
      "Shipped hundreds of motion graphics, brand identity, and editorial design projects",
      "Directed content creation, publishing, and podcast/book production",
      "Trained and supervised new designers in animation and motion workflows",
    ],
  },
  {
    date: "2019–02 to 2019–11",
    role: "Graphic Designer",
    org: "Chap-Chin Studio, Iran",
    bullets: [
      "Designed brand identities, print materials, and digital displays for local businesses",
      "Managed client relationships from brief to final delivery",
    ],
  },
];

const skillGroups = [
  {
    title: "Design",
    items: [
      "Motion Design",
      "Brand Identity",
      "Editorial & Print",
      "UI / UX Design",
      "Graphic Design",
    ],
  },
  {
    title: "Tools",
    items: [
      "Adobe Creative Suite (After Effects, Photoshop, Illustrator, Premiere, InDesign)",
      "Figma",
      "TouchDesigner",
    ],
  },
  {
    title: "AI & Emerging",
    items: [
      "Kling, Nano Banana (video generation)",
      "Claude Code (development workflow)",
      "MediaPipe (interactive installations)",
    ],
  },
];

const education = [
  {
    date: "2024–08 to 2026–05",
    degree: "MFA, Digital Arts",
    school: "Bowling Green State University, Ohio",
  },
  {
    date: "2015–01 to 2017–02",
    degree: "BA, Graphic Design",
    school: "Applied Science Center of Chini Maghsoud, Iran",
  },
  {
    date: "2011–09 to 2014–06",
    degree: "Associate Degree, Computer Science",
    school: "Montazeri Technical College, Iran",
  },
];

const awards = [
  {
    title: "SIGGRAPH 2026 DAC Speculative Futures",
    detail: "Honorable Mention — International Student Competition",
    description: 'For "Between Two Worlds," interactive installation',
  },
  {
    title: "Society for News Design SND47",
    detail: "Award of Excellence",
    description: "For Best of BG Magazine",
  },
];

function SectionRow({
  title,
  titleClassName = "",
  children,
}: {
  title: string;
  titleClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-y-8 gap-x-10 lg:gap-x-16">
      <h2
        className={`md:col-span-1 md:sticky md:top-16 self-start text-3xl md:text-4xl font-extrabold tracking-tight ${titleClassName}`}
      >
        {title}
      </h2>
      <div className="md:col-span-3">{children}</div>
    </div>
  );
}

function Timeline({
  entries,
}: {
  entries: { date: string; title: string; subtitle: string; bullets?: string[] }[];
}) {
  return (
    <div className="space-y-12 md:space-y-16">
      {entries.map((entry) => (
        <div
          key={entry.title}
          className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-3 md:gap-10"
        >
          <div className="text-xs md:text-sm uppercase tracking-wide text-foreground/50">
            {entry.date}
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold">{entry.title}</h3>
            <p className="mt-1 text-base md:text-lg text-foreground/60">
              {entry.subtitle}
            </p>
            {entry.bullets && (
              <ul className="mt-4 space-y-2">
                {entry.bullets.map((bullet, i) => (
                  <li
                    key={i}
                    className="text-base md:text-lg text-foreground/80 leading-relaxed"
                  >
                    — {bullet}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Resume() {
  return (
    <div className="flex-1 flex flex-col">
      <section className="px-6 md:px-10 pt-16 md:pt-20 pb-10 md:pb-14">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Resume
        </h1>
        <p className="mt-4 text-lg md:text-xl text-foreground/60">
          Designer — Motion, Brand, Interface
        </p>
      </section>

      <section className="px-6 md:px-10 pt-10 md:pt-14 pb-16 md:pb-24">
        <SectionRow title="Work Experience">
          <Timeline
            entries={workExperience.map((item) => ({
              date: item.date,
              title: item.role,
              subtitle: item.org,
              bullets: item.bullets,
            }))}
          />
        </SectionRow>
      </section>

      <section className="w-full bg-cobalt text-white px-6 md:px-10 pt-10 md:pt-14 pb-16 md:pb-24">
        <SectionRow title="Skills">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 md:gap-10">
            {skillGroups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm uppercase tracking-wide text-white/60 mb-4">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-base md:text-lg leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </SectionRow>
      </section>

      <section className="px-6 md:px-10 pt-10 md:pt-14 pb-16 md:pb-24">
        <SectionRow title="Education">
          <Timeline
            entries={education.map((item) => ({
              date: item.date,
              title: item.degree,
              subtitle: item.school,
            }))}
          />
        </SectionRow>
      </section>

      <section className="w-full bg-cobalt text-white px-6 md:px-10 pt-10 md:pt-14 pb-16 md:pb-24">
        <SectionRow title="Awards & Recognition">
          <div className="space-y-10 md:space-y-12">
            {awards.map((award) => (
              <div key={award.title}>
                <h3 className="text-xl md:text-2xl font-bold">{award.title}</h3>
                <p className="mt-1 text-base md:text-lg text-white/80">
                  {award.detail}
                </p>
                <p className="mt-1 text-base md:text-lg text-white/60">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </SectionRow>
      </section>
    </div>
  );
}
