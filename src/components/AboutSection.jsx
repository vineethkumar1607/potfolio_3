import { Code } from "lucide-react";

export const AboutSection = () => {
  const RESUME_FILE_PATH = "/Vineeth_Molugu_Resume.pdf";

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 px-4 relative"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Section Title */}
        <h2
          id="about-heading"
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: About Text */}
          <article aria-label="About Vineeth Molugu" className="space-y-6">
            <header>
              <h3 className="text-2xl font-semibold">
                Passionate Web Developer
              </h3>
            </header>

            <p className="text-muted-foreground leading-relaxed">
              With over 1.5 years of experience in web development, I specialize
              in creating responsive, accessible, and performant web
              applications using modern technologies.
            </p>

            <p className="leading-relaxed">
              I’m passionate about creating elegant solutions to complex
              problems and constantly learning new technologies to stay at the
              forefront of the ever-evolving web landscape.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
              <a
                href="#contact"
                className="cosmic-button"
                aria-label="Contact Vineeth"
              >
                Get In Touch
              </a>

              <a
                href={RESUME_FILE_PATH}
                download="Vineeth_Molugu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Vineeth Molugu Resume (PDF)"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                Download Resume
              </a>
            </div>
          </article>

          {/* Right: Skills/Highlights */}
          <aside aria-label="Development specializations" className="grid gap-6">
            <article
              className="gradient-border p-6 card-hover rounded-lg"
              aria-labelledby="web-dev-title"
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full bg-primary/10"
                  aria-hidden="true"
                >
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4
                    id="web-dev-title"
                    className="font-semibold text-lg text-foreground"
                  >
                    Web Development
                  </h4>
                  <p className="text-muted-foreground leading-snug">
                    Creating responsive websites and web applications using
                    modern frameworks.
                  </p>
                </div>
              </div>
            </article>

            <article
              className="gradient-border p-6 card-hover rounded-lg"
              aria-labelledby="mern-dev-title"
            >
              <div className="flex items-start gap-4">
                <div
                  className="p-3 rounded-full bg-primary/10"
                  aria-hidden="true"
                >
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4
                    id="mern-dev-title"
                    className="font-semibold text-lg text-foreground"
                  >
                    MERN Stack Developer
                  </h4>
                  <p className="text-muted-foreground leading-snug">
                    Crafting end-to-end solutions with dynamic data and modern
                    JavaScript frameworks.
                  </p>
                </div>
              </div>
            </article>
          </aside>
        </div>
      </div>
    </section>
  );
};
