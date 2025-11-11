import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "HTML/CSS", level: 95, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "React", level: 90, category: "frontend" },
  { name: "TypeScript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Bootstrap", level: 90, category: "frontend" },

  // Backend
  { name: "Node.js", level: 80, category: "backend" },
  { name: "Express", level: 75, category: "backend" },
  { name: "MongoDB", level: 70, category: "backend" },
  { name: "MySQL", level: 65, category: "backend" },
  { name: "REST API", level: 60, category: "backend" },

  // Tools
  { name: "Git/GitHub", level: 90, category: "tools" },
  { name: "VS Code", level: 95, category: "tools" },
  { name: "GitHub Actions (CI/CD)", level: 80, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2
          id="skills-heading"
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="text-primary">Skills</span>
        </h2>

        {/* Category Filter */}
        <fieldset className="flex flex-wrap justify-center gap-4 mb-12">
          <legend className="sr-only">Filter skills by category</legend>
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-foreground hover:bg-secondary/80"
              )}
            >
              {category}
            </button>
          ))}
        </fieldset>

        {/* Skills Grid */}
        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          aria-label="Skill list"
        >
          {filteredSkills.map((skill) => (
            <li
              key={skill.name}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
              aria-label={`${skill.name} proficiency ${skill.level}%`}
            >
              {/* Skill Title */}
              <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>

              {/* Skill Level Bar (using progress) */}
              <div className="relative mb-2">
                <progress
                  value={skill.level}
                  max="100"
                  className="w-full h-2 appearance-none [&::-webkit-progress-bar]:bg-secondary/50 [&::-webkit-progress-value]:bg-primary rounded-full"
                ></progress>
                <span className="sr-only">{skill.level}% proficiency</span>
              </div>

              {/* Visible percentage for visual users */}
              <p className="text-right text-sm text-muted-foreground">
                {skill.level}%
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
