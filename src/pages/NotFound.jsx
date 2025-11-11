import { Home, Frown } from "lucide-react";

export const NotFound = () => {
  return (
    <main
      role="main"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-background to-secondary/30"
      aria-labelledby="not-found-heading"
    >
      {/* Icon */}
      <div className="mb-6 animate-bounce-slow">
        <Frown className="w-16 h-16 text-primary" aria-hidden="true" />
      </div>

      {/* Heading */}
      <h1
        id="not-found-heading"
        className="text-5xl font-bold mb-4 text-foreground"
      >
        404 - Page Not Found
      </h1>

      {/* Subtext */}
      <p className="text-muted-foreground text-lg max-w-md mb-8 leading-relaxed">
        Oops! The page you’re looking for doesn’t exist or has been moved.
        Let’s get you back to the homepage.
      </p>

      {/* Back Home Button */}
      <a
        href="/"
        className="cosmic-button flex items-center gap-2"
        aria-label="Go back to homepage"
      >
        <Home size={20} aria-hidden="true" /> Back to Home
      </a>

      {/* Decorative background */}
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background opacity-80"
        aria-hidden="true"
      ></div>
    </main>
  );
};
