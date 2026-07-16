import ProjectCard from "@/components/ProjectCard";
import { categories, projects } from "@/data/projects";

const placeholderProjects = [
  { title: "Project Title", description: "One-line project description." },
  { title: "Project Title", description: "One-line project description." },
  { title: "Project Title", description: "One-line project description." },
];

export default function Work() {
  return (
    <div className="px-6 md:px-10 py-16 md:py-20 space-y-20 md:space-y-28">
      {categories.map((category) => {
        const categoryProjects = projects.filter((project) => project.category === category);
        const sectionProjects = categoryProjects.length > 0 ? categoryProjects : placeholderProjects;

        return (
        <section key={category}>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            {category}
          </h2>
          <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {sectionProjects.map((project, i) => (
              <ProjectCard
                key={"slug" in project ? project.slug : i}
                title={project.title}
                description={project.description}
                thumbnail={"slug" in project ? project.thumbnail : undefined}
                thumbnailFit={
                  "slug" in project && ["Videos", "Motions", "AI"].includes(project.category)
                    ? "contain"
                    : "cover"
                }
                href={"slug" in project ? `/work/${project.slug}` : undefined}
              />
            ))}
          </div>
        </section>
      )})}
    </div>
  );
}
