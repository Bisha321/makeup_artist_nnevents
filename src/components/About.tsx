"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { STATS } from "@/lib/constants";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-16 py-24">
      <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Image */}
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-5"
        >
          <div className="relative aspect-[464/580] rounded-2xl overflow-hidden backdrop-blur-[10px] bg-[var(--color-glass)] border border-[var(--color-border)] shadow-[0px_20px_40px_-10px_rgba(115,92,0,0.05)]">
            <Image
              src="https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=600&h=750&fit=crop"
              alt="Portrait of Devika Mahakumara"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 466px"
            />
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          variants={slideInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="lg:col-span-6 lg:col-start-7 flex flex-col gap-8"
        >
          <h2 className="font-[family-name:var(--font-heading)] font-medium text-3xl lg:text-[40px] leading-[1.2] text-[var(--color-foreground)]">
            The Art of Elegance
          </h2>

          <p className="font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-text-body)]">
            With over a decade of experience in the beauty and fashion industry, Devika
            brings a sophisticated, personalized approach to every client. Her philosophy
            centers on enhancing natural beauty while delivering flawless, long-lasting
            looks tailored to your unique features and event requirements.
          </p>

          {/* Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 gap-6 pt-6"
          >
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="flex flex-col items-center gap-2 p-6 rounded-xl backdrop-blur-[10px] bg-[var(--color-glass)] border border-[var(--color-border)]"
              >
                <span className="font-[family-name:var(--font-heading)] text-base text-[var(--color-gold-primary)]">
                  {stat.value}
                </span>
                <span className="font-[family-name:var(--font-body)] text-base text-[var(--color-text-body)] uppercase tracking-[1.6px] text-center">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
