"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroTextEntrance, heroImageEntrance } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-16 py-24 overflow-hidden"
    >
      {/* Animated Background - subtle gradient */}
      <div className="absolute inset-0 opacity-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-surface)] via-transparent to-[rgba(212,175,55,0.05)]" />
      </div>

      <div className="relative max-w-[1280px] mx-auto w-full flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
        {/* Text Content */}
        <motion.div
          variants={heroTextEntrance}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col gap-6"
        >
          <h1 className="font-[family-name:var(--font-heading)] font-semibold text-4xl sm:text-5xl lg:text-[64px] leading-tight lg:leading-[72px] tracking-[-0.02em] bg-gradient-to-r from-[var(--color-gold-primary)] to-[var(--color-gold-accent)] bg-clip-text text-transparent">
            Creating Beautiful Looks for Your Special Moments
          </h1>

          <p className="font-[family-name:var(--font-body)] font-light text-base sm:text-lg leading-7 text-[var(--color-text-body)] max-w-[512px]">
            Bridal Makeup &bull; Party Makeup &bull; Fashion Makeup &bull; Costume Styling
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[var(--color-gold-primary)] text-white text-xs font-semibold tracking-[0.96px] px-8 py-4 rounded-full shadow-[0px_10px_15px_-3px_rgba(115,92,0,0.2),0px_4px_6px_-4px_rgba(115,92,0,0.2)] hover:bg-[var(--color-gold-dark)] transition-all duration-300 hover:scale-105"
            >
              Book Appointment
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center backdrop-blur-[10px] bg-[var(--color-glass)] border border-[var(--color-border)] text-[var(--color-gold-primary)] text-xs font-semibold tracking-[0.96px] px-8 py-4 rounded-full hover:bg-[rgba(255,255,255,0.9)] transition-all duration-300"
            >
              View Portfolio
            </a>
          </div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          variants={heroImageEntrance}
          initial="hidden"
          animate="visible"
          className="flex-1 w-full max-w-[564px]"
        >
          <div className="relative aspect-[564/560] rounded-2xl overflow-hidden backdrop-blur-[10px] bg-[var(--color-glass)] border border-[var(--color-border)] shadow-[0px_20px_40px_-10px_rgba(115,92,0,0.05)]">
            <Image
              src="https://images.unsplash.com/photo-1560577091-3d3c4279e118?w=800&h=800&fit=crop"
              alt="High-end beauty makeup look by Devika Mahakumara"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 564px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
