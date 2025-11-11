import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <header
      id="hero"
      role="banner"
      aria-label="Introduction section"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      {/* Hero Content */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          {/* Main Heading */}
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight leading-tight"
            aria-label="Hi, I am Vineeth Molugu, Front-End Developer"
          >
            <span className="opacity-0 animate-fade-in">Hi, I am</span>{" "}
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              Vineeth
            </span>{" "}
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Molugu
            </span>
          </h1>

          {/* Subtitle / Tagline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Specialist Front-End Developer who crafts high-quality, stellar web
            experiences. My focus is on delivering interfaces that excel in both
            aesthetics and functionality using the latest technologies.
          </p>

          {/* Call To Action */}
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a
              href="#projects"
              className="cosmic-button"
              aria-label="View my projects section"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
        aria-hidden="true"
      >
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </header>
  );
};
