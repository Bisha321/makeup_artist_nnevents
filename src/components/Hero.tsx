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
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Gradient orbs */}
        <motion.div
          className="absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-[rgba(212,175,55,0.08)] to-[rgba(115,92,0,0.03)] blur-3xl"
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -20, 30, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-[10%] -right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tl from-[rgba(212,175,55,0.06)] to-[rgba(208,197,175,0.04)] blur-3xl"
          animate={{
            x: [0, -25, 15, 0],
            y: [0, 25, -15, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-[40%] left-[50%] w-[300px] h-[300px] rounded-full bg-gradient-to-r from-[rgba(212,175,55,0.04)] to-transparent blur-2xl"
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Subtle floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[var(--color-gold-accent)]"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              opacity: 0.2,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.35, 0.15],
            }}
            transition={{
              duration: 4 + i * 0.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

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
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=800&fit=crop&q=80"
              alt="High-end beauty makeup look by Devika Mahakumara"
              width={564}
              height={560}
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
