"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, staggerCards } from "@/lib/animations";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section id="testimonials" className="px-6 md:px-16 py-24">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="font-[family-name:var(--font-heading)] font-medium text-3xl lg:text-[40px] leading-[1.2] text-[var(--color-foreground)]">
            Kind Words from Clients
          </h2>
          <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-text-body)]">
            Real stories from those who trusted Devika with their special moments.
          </p>
        </motion.div>

        {/* Testimonial Cards */}
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {TESTIMONIALS.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={fadeUp}
              className="relative flex flex-col gap-4 p-8 rounded-2xl backdrop-blur-[10px] bg-[var(--color-glass)] border border-[var(--color-border)] shadow-[0px_20px_40px_-10px_rgba(115,92,0,0.05)] hover:shadow-[0px_25px_50px_-12px_rgba(115,92,0,0.1)] transition-shadow duration-300"
            >
              {/* Star Rating */}
              <div className="flex gap-0.5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className="text-[var(--color-gold-accent)] fill-[var(--color-gold-accent)]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-foreground)]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="pt-2">
                <p className="font-[family-name:var(--font-heading)] text-lg leading-7 text-[var(--color-gold-primary)]">
                  {testimonial.name}
                </p>
                <p className="font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-text-body)] uppercase tracking-[1.6px]">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
