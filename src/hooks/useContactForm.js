// src/hooks/useContactForm.js
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

/**
 * Custom hook to handle contact form submission via Formspree.
 *
 * @param {string} endpoint - The Formspree endpoint URL.
 * @returns {object} { isSubmitting, handleSubmit }
 */
export const useContactForm = (endpoint) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;

    // Simple honeypot check (anti-spam)
    if (form.website && form.website.value) {
      setIsSubmitting(false);
      return;
    }

    const formData = new FormData(form);

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      const json = await res.json();

      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks — I'll reply as soon as I can.",
        });
        form.reset();
      } else {
        toast({
          title: "Error",
          description: json?.error || "Failed to send message.",
        });
      }
    } catch (err) {
      toast({ title: "Error", description: "Network error. Try again." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, handleSubmit };
};
