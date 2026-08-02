"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { fadeUp, scaleIn } from "@/lib/animations";
import { PORTFOLIO_CATEGORIES, PORTFOLIO_IMAGES } from "@/lib/constants";

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? PORTFOLIO_IMAGES
      : PORTFOLIO_IMAGES.filter((img) => img.category === activeCategory);

  return (
    <section id="portfolio" className="px-6 md:px-16 py-14 lg:py-16">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <h2 className="font-[family-name:var(--font-heading)] font-medium text-3xl lg:text-[40px] leading-[1.2] text-[var(--color-foreground)] text-center">
            Curated Portfolio
          </h2>

          {/* Category Filters */}
          <div className="flex items-center gap-4">
            {PORTFOLIO_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-base uppercase tracking-[1.6px] font-[family-name:var(--font-body)] transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[var(--color-gold-accent)] text-[var(--color-gold-dark)]"
                    : "backdrop-blur-[10px] bg-[var(--color-glass)] border border-[var(--color-border)] text-[var(--color-text-body)] hover:border-[var(--color-gold-accent)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Bento Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 grid-rows-[250px_250px_250px] gap-4"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                variants={scaleIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative group rounded-2xl overflow-hidden shadow-[0px_20px_40px_-10px_rgba(115,92,0,0.05)] ${image.span}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-[family-name:var(--font-body)] text-sm font-medium">
                    {image.alt}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
