import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { useContactForm } from "../hooks/useContactForm";

export const ContactSection = () => {
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/xblqjkdo";
  const { isSubmitting, handleSubmit } = useContactForm(FORMSPREE_ENDPOINT);

  return (
    <section
      id="contact"
      className="py-24 px-4 relative bg-secondary/30"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto max-w-5xl">
        {/* Main Section Heading */}
        <h2
          id="contact-heading"
          className="text-3xl md:text-4xl font-bold mb-4 text-center"
        >
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Feel free to reach out. I’m always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>

            {/* Contact Info should use <address> for semantics */}
            <address className="space-y-6 not-italic">
              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail aria-hidden="true" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <a
                    href="mailto:vineethkumar1607@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    vineethkumar1607@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone aria-hidden="true" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <a
                    href="tel:+917095686334"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    +91-7095686334
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin aria-hidden="true" className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Location</h4>
                  <p className="text-muted-foreground">Hyderabad, Telangana</p>
                </div>
              </div>
            </address>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/vineeth-molugu"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <FaLinkedin size={40} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form
              className="space-y-6"
              onSubmit={handleSubmit}
              noValidate
              aria-describedby="form-description"
            >
              <p id="form-description" className="sr-only">
                Fill out your name, email, and message to contact Vineeth.
              </p>

              {/* Honeypot - hidden field */}
              <input
                type="text"
                name="website"
                autoComplete="off"
                tabIndex="-1"
                className="hidden"
                aria-hidden="true"
              />

              <fieldset className="space-y-6">
                <legend className="sr-only">Contact Form Fields</legend>

                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="Your Name ..."
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                    placeholder="yourmail@gmail.com"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>
              </fieldset>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2",
                  isSubmitting && "opacity-70"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} aria-hidden="true" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
