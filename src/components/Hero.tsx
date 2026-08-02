"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { heroTextEntrance, heroImageEntrance } from "@/lib/animations";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 md:px-16 pt-28 pb-16 overflow-hidden"
    >


      <div className="relative max-w-[1280px] mx-auto w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-10">
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

        {/* Hero Image - fixed with proper width/height and fallback */}
        <motion.div
          variants={heroImageEntrance}
          initial="hidden"
          animate="visible"
          className="flex-1 w-full max-w-[564px]"
        >
          <div className="relative rounded-2xl overflow-hidden backdrop-blur-[10px] bg-[var(--color-glass)] border border-[var(--color-border)] shadow-[0px_20px_40px_-10px_rgba(115,92,0,0.05)]">
            <Image
              src="/images/hero.webp"
              alt="Devika Mahakumara - Professional Makeup & Costume Artist"
              width={564}
              height={564}
              className="w-full h-auto object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 564px"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
