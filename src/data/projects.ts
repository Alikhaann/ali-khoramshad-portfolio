export type Media = {
  src: string;
  type: "image" | "video" | "youtube";
};

export type Project = {
  slug: string;
  title: string;
  category: "Videos" | "Motions" | "Statics" | "AI";
  thumbnail: string;
  media: Media[];
  description?: string;
};

const works = "/Works";

const motionYoutubeOverrides: Record<string, string> = {
  "Mock-test": "ZSTd0RSOKIc",
  "Paper-Correction": "gvG4aZP3O_o",
  "Placement-Test": "bdYe2RG5wEg",
};

export const projects: Project[] = [
  {
    slug: "birthday",
    title: "Birthday",
    category: "Videos",
    thumbnail: `${works}/videos/Birthday/Thumbnail.jpg`,
    media: [
      { src: "jnYEJUtwjwM", type: "youtube" },
      { src: `${works}/videos/Birthday/Birthday-Backstage.mp4`, type: "video" },
    ],
  },
  {
    slug: "norouz",
    title: "Norouz",
    category: "Videos",
    thumbnail: `${works}/videos/Norouz/thumbnail.jpg`,
    media: [{ src: `${works}/videos/Norouz/Norouz.mp4`, type: "video" }],
  },
  {
    slug: "starlight",
    title: "Starlight",
    category: "Videos",
    thumbnail: `${works}/videos/Starlight/thumbnail.jpg`,
    media: [
      { src: "j09pAAKDBHg", type: "youtube" },
      { src: `${works}/videos/Starlight/Starlight%20Backstage.mp4`, type: "video" },
    ],
  },
  {
    slug: "valentine",
    title: "Valentine",
    category: "Videos",
    thumbnail: `${works}/videos/Valentine/thumbnail.jpg`,
    media: [
      { src: `${works}/videos/Valentine/Valentine.mp4`, type: "video" },
      { src: `${works}/videos/Valentine/Valentine-StopMotion.mp4`, type: "video" },
      { src: `${works}/videos/Valentine/Valentine-%20backstage.mp4`, type: "video" },
    ],
  },
  ...[
    "Farsi-Capital",
    "Lantern",
    "Mock-test",
    "Night-drift",
    "ONLINE%20Classes",
    "PAPAYA",
    "Paper-Correction",
    "Placement-Test",
    "Practice",
    "Taste-of%20-home",
  ].map((name) => ({
    slug: `motion-${name.toLowerCase().replaceAll("%20", "-")}`,
    title: name.replaceAll("%20", " ").replaceAll("-", " "),
    category: "Motions" as const,
    thumbnail: `${works}/motions/${name}.jpg`,
    media: motionYoutubeOverrides[name]
      ? [{ src: motionYoutubeOverrides[name], type: "youtube" as const }]
      : [{ src: `${works}/motions/${name}.mp4`, type: "video" as const }],
  })),
  {
    slug: "helium",
    title: "Helium",
    category: "Statics",
    thumbnail: `${works}/statics/Branding/Helium/Thumbnail.jpg`,
    media: [{ src: `${works}/statics/Branding/Helium/Detail.jpg`, type: "image" }],
  },
  {
    slug: "papaya-branding",
    title: "PAPAYA",
    category: "Statics",
    thumbnail: `${works}/statics/Branding/PAPAYA/Thaumbnail.jpg`,
    media: [{ src: `${works}/statics/Branding/PAPAYA/Detail.jpg`, type: "image" }],
  },
  {
    slug: "samen",
    title: "Samen",
    category: "Statics",
    thumbnail: `${works}/statics/Branding/Samen/Thumbnail.jpg`,
    media: [{ src: `${works}/statics/Branding/Samen/Detail.png`, type: "image" }],
  },
  {
    slug: "logos",
    title: "Logos",
    category: "Statics",
    thumbnail: `${works}/statics/Logos/Thumbnail.JPG`,
    media: [
      { src: `${works}/statics/Logos/Dasht.JPG`, type: "image" },
      { src: `${works}/statics/Logos/MAAVA.jpg`, type: "image" },
      { src: `${works}/statics/Logos/Spranza.jpg`, type: "image" },
    ],
  },
  {
    slug: "packaging",
    title: "Packaging",
    category: "Statics",
    thumbnail: `${works}/statics/Packaging/Thumbnail.jpg`,
    media: [0, 1, 2, 3, 4].map((index) => ({
      src: `${works}/statics/Packaging/Detail${index}.jpg`,
      type: "image" as const,
    })),
  },
  {
    slug: "thumbnails",
    title: "Thumbnails",
    category: "Statics",
    thumbnail: `${works}/statics/thumbnails/Thumbnail.jpg`,
    media: [1, 2, 3, 4, 5, 6, 7].map((index) => ({
      src: `${works}/statics/thumbnails/${index}.jpg`,
      type: "image" as const,
    })),
  },
  {
    slug: "other",
    title: "Other",
    category: "Statics",
    thumbnail: `${works}/statics/Other/Thumbnail.jpg`,
    media: [
      { src: `${works}/statics/Other/1.jpg`, type: "image" },
      { src: `${works}/statics/Other/2.jpg`, type: "image" },
      { src: `${works}/statics/Other/3.jpg`, type: "image" },
    ],
  },
  {
    slug: "next-opponent",
    title: "Next Opponent",
    category: "AI",
    description: "An AI-generated short film.",
    thumbnail: `${works}/AI/Next%20Opponent/Thumbnail.jpg`,
    media: [{ src: `${works}/AI/Next%20Opponent/Video.mp4`, type: "video" }],
  },
  {
    slug: "i-was-in-the-scene",
    title: "I Was in the Scene",
    category: "AI",
    thumbnail: `${works}/AI/I%20Was%20in%20the%20Scene/thumbnail.jpg`,
    media: [
      {
        src: `${works}/AI/I%20Was%20in%20the%20Scene/I%20Was%20in%20the%20Scene.mp4`,
        type: "video",
      },
    ],
  },
];

// Product Design remains available in the project model but is hidden until work is added.
export const categories = ["Videos", "Motions", "Statics", "AI"] as const;

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
