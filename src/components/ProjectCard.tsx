import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  title: string;
  description?: string;
  thumbnail?: string;
  thumbnailFit?: "cover" | "contain";
  href?: string;
};

export default function ProjectCard({
  title,
  description,
  thumbnail,
  thumbnailFit = "cover",
  href,
}: ProjectCardProps) {
  const preview = (
    <div className="group relative aspect-square overflow-hidden bg-foreground/5 border border-foreground/10">
      {thumbnail ? (
        <Image
          src={thumbnail}
          alt={`${title} thumbnail`}
          fill
          className={`${thumbnailFit === "contain" ? "object-contain" : "object-cover"} transition-transform duration-300 group-hover:scale-105`}
        />
      ) : (
        <div className="flex h-full items-center justify-center">
          <span className="text-xs uppercase tracking-wide text-foreground/40">
            Image coming soon
          </span>
        </div>
      )}
      {href && (
        <span className="absolute bottom-0 left-0 bg-cobalt px-3 py-2 text-xs font-bold uppercase tracking-wide text-white">
          View project
        </span>
      )}
    </div>
  );

  return (
    <div>
      {href ? (
        <Link href={href} aria-label={`View ${title}`}>
          {preview}
        </Link>
      ) : (
        preview
      )}
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      {description && <p className="mt-1 text-sm text-foreground/60">{description}</p>}
    </div>
  );
}
