"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { FAQ_ITEMS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[var(--color-surface)] px-6 md:px-16 py-24">
      <div className="max-w-[768px] mx-auto flex flex-col gap-16">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          <h2 className="font-[family-name:var(--font-heading)] font-medium text-3xl lg:text-[40px] leading-[1.2] text-[var(--color-foreground)]">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col"
        >
          {FAQ_ITEMS.map((item, index) => (
            <motion.div
              key={item.question}
              variants={fadeUp}
              className={`border-b border-[var(--color-border-light)] ${
                index > 0 ? "pt-4" : ""
              } pb-4`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between text-left py-2 group"
                aria-expanded={openIndex === index}
              >
                <span className="font-[family-name:var(--font-body)] font-semibold text-base leading-6 text-[var(--color-foreground)] pr-4">
                  {item.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 text-[var(--color-text-body)] group-hover:text-[var(--color-gold-primary)] transition-colors"
                >
                  <ChevronDown size={16} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-text-body)] pt-2 pb-2">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
