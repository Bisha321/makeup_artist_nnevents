"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { fadeUp } from "@/lib/animations";
import { CONTACT } from "@/lib/constants";

export default function CTA() {
  return (
    <section id="contact" className="bg-[var(--color-surface)] px-6 md:px-16 py-24">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[768px] mx-auto"
      >
        <div className="relative flex flex-col items-center gap-6 p-8 sm:p-12 rounded-3xl backdrop-blur-[10px] bg-[var(--color-glass)] border border-[var(--color-border)] shadow-[0px_20px_40px_-10px_rgba(115,92,0,0.05)]">
          <h2 className="font-[family-name:var(--font-heading)] font-medium text-3xl lg:text-[40px] leading-[1.2] text-[var(--color-foreground)] text-center">
            Ready for Your Dream Look?
          </h2>

          <p className="font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-text-body)] text-center max-w-[512px]">
            Let&apos;s collaborate to create a stunning, personalized style for your next
            unforgettable moment.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center bg-[var(--color-gold-primary)] text-white text-xs font-semibold tracking-[0.96px] px-8 py-5 rounded-full shadow-[0px_10px_15px_-3px_rgba(115,92,0,0.2),0px_4px_6px_-4px_rgba(115,92,0,0.2)] hover:bg-[var(--color-gold-dark)] transition-all duration-300 hover:scale-105"
            >
              Book Now
            </a>
            <a
              href={CONTACT.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-whatsapp)] text-white text-xs font-semibold tracking-[0.96px] px-8 py-4 rounded-full shadow-[0px_20px_40px_-10px_rgba(115,92,0,0.05)] hover:brightness-110 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle size={20} />
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
