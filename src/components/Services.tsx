"use client";

import { motion } from "framer-motion";
import { Crown, Sparkles, Camera, Palette, GraduationCap, Home } from "lucide-react";
import { fadeUp, staggerCards } from "@/lib/animations";
import { SERVICES } from "@/lib/constants";

const iconMap = {
  crown: Crown,
  sparkles: Sparkles,
  camera: Camera,
  palette: Palette,
  graduationCap: GraduationCap,
  home: Home,
} as const;

export default function Services() {
  return (
    <section id="services" className="bg-[var(--color-surface)] px-6 md:px-16 py-24">
      <div className="max-w-[1280px] mx-auto flex flex-col items-center gap-16">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-[672px]"
        >
          <h2 className="font-[family-name:var(--font-heading)] font-medium text-3xl lg:text-[40px] leading-[1.2] text-[var(--color-foreground)]">
            Signature Services
          </h2>
          <p className="mt-4 font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-text-body)]">
            Tailored artistry for every occasion, ensuring you look and feel your absolute
            best.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={staggerCards}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          {SERVICES.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group relative flex flex-col items-center p-8 rounded-2xl backdrop-blur-[10px] bg-[var(--color-glass)] border border-[var(--color-border)] shadow-[0px_20px_40px_-10px_rgba(115,92,0,0.05)] hover:shadow-[0px_25px_50px_-12px_rgba(115,92,0,0.1)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Icon */}
                <div className="mb-4 text-[var(--color-gold-primary)] group-hover:scale-110 transition-transform duration-300">
                  <Icon size={30} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="font-[family-name:var(--font-heading)] text-xl leading-7 text-[var(--color-foreground)] mb-3 text-center">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-text-body)] text-center">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
