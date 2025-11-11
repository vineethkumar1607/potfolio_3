import { ArrowRight, ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

const projects = [
  {
    id: 1,
    title: "Netflix-AI-Assistance",
    description:
      "AI-powered Netflix Clone for movie discovery and real-time content browsing.",
    image: "/public/projects/netflix_ai.png",
    tags: ["React", "Redux", "TailwindCSS", "Firebase"],
    demoUrl: "https://ai-assistance-projectx.netlify.app/",
    githubUrl: "https://github.com/vineethkumar1607/Netflix--AI-Assistance",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/public/projects/project_Banner.png",
    tags: ["TypeScript"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Project title",
    description: "",
    image: "/public/projects/project_Banner.png",
    tags: ["React"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2
          id="projects-heading"
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Project List */}
        <ul
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          aria-label="Project list"
        >
          {projects.map((project) => (
            <li key={project.id}>
              <article
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col"
                aria-labelledby={`project-${project.id}-title`}
              >
                {/* Project Image */}
                <figure className="h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={`Screenshot of ${project.title}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <figcaption className="sr-only">
                    {project.title} preview image
                  </figcaption>
                </figure>

                {/* Project Details */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Tech Stack */}
                  <ul className="flex flex-wrap gap-2 mb-4" aria-label="Project technologies">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* Title & Description */}
                  <h3
                    id={`project-${project.id}-title`}
                    className="text-xl font-semibold mb-1"
                  >
                    {project.title}
                  </h3>

                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description || "A project built with modern web technologies."}
                  </p>

                  {/* Action Links */}
                  <div className="flex justify-between items-center mt-auto">
                    <div className="flex space-x-3">
                      {/* Live Demo Link */}
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View live demo of ${project.title}`}
                        className="relative group/tooltip text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} aria-hidden="true" />
                        <span className="absolute bg-card left-1/2 -top-9 -translate-x-1/2 whitespace-nowrap rounded bg-popover px-2 py-1 text-xs font-medium text-popover-foreground opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md border z-10">
                          Live Demo
                        </span>
                      </a>

                      {/* GitHub Link */}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`View source code of ${project.title} on GitHub`}
                        className="relative group/tooltip text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <FiGithub size={20} aria-hidden="true" />
                        <span className="absolute bg-card left-1/2 -top-9 -translate-x-1/2 whitespace-nowrap rounded bg-popover px-2 py-1 text-xs font-medium text-popover-foreground opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-300 pointer-events-none shadow-md border z-10">
                          Source Code
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            </li>
          ))}
        </ul>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/vineethkumar1607"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View all projects on GitHub"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My GitHub <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};
