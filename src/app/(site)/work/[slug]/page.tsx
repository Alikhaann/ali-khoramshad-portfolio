import Image from "next/image";
import Link from "next/link";
import { getProject, projects } from "@/data/projects";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);

  if (!project) notFound();

  const compactGallery = ["logos", "other", "packaging", "thumbnails"].includes(project.slug);
  const compactMedia = compactGallery || ["Videos", "Motions", "AI"].includes(project.category);

  return (
    <article className="px-6 py-16 md:px-10 md:py-20">
      <Link
        href="/work"
        className="inline-block text-sm font-bold uppercase tracking-wide transition-colors hover:text-cobalt"
      >
        ← Back to work
      </Link>

      <header className="mt-12 max-w-4xl">
        <p className="text-sm font-bold uppercase tracking-wide text-cobalt">{project.category}</p>
        <h1 className="mt-3 text-5xl font-extrabold tracking-tight md:text-8xl">
          {project.title}
        </h1>
        {project.description && (
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/70">
            {project.description}
          </p>
        )}
      </header>

      <div
        className={`mt-12 grid gap-8 md:mt-16 md:gap-10 ${
          compactMedia ? "md:grid-cols-2 lg:grid-cols-3" : ""
        }`}
      >
        {project.media.map((item) =>
          item.type === "youtube" ? (
            <div
              key={item.src}
              className="relative aspect-video border border-foreground/10 bg-foreground/5"
            >
              <iframe
                src={`https://www.youtube.com/embed/${item.src}`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
          ) : item.type === "video" ? (
            <div
              key={item.src}
              className={`border border-foreground/10 bg-foreground/5 ${
                compactMedia ? "relative aspect-video" : ""
              }`}
            >
              <video
                className={compactMedia ? "absolute inset-0 h-full w-full object-contain" : "block w-full"}
                controls
                loop
                preload="metadata"
                poster={project.thumbnail}
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ) : compactGallery ? (
            <div key={item.src} className="relative aspect-square overflow-hidden border border-foreground/10 bg-foreground/5">
              <Image
                src={item.src}
                alt={`${project.title} project image`}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
          ) : (
            <div key={item.src} className="relative overflow-hidden border border-foreground/10 bg-foreground/5">
              <Image
                src={item.src}
                alt={`${project.title} project image`}
                width={1800}
                height={1800}
                className="h-auto w-full"
              />
            </div>
          ),
        )}
      </div>
    </article>
  );
}
