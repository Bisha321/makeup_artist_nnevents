"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { fadeUp, slideInLeft, slideInRight } from "@/lib/animations";

const GOOGLE_MAPS_QUERY = "416/16A,+Pincowattha,+Waliweriya,+Sri+Lanka";
const GOOGLE_MAPS_EMBED_URL = `https://www.google.com/maps?q=${GOOGLE_MAPS_QUERY}&output=embed`;
const GOOGLE_MAPS_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=${GOOGLE_MAPS_QUERY}`;

export default function SalonLocation() {
  return (
    <section id="location" className="px-6 md:px-16 py-14 lg:py-16">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center gap-4"
        >
          <h2 className="font-[family-name:var(--font-heading)] font-medium text-3xl lg:text-[40px] leading-[1.2] text-[var(--color-foreground)] text-center">
            Visit Our Salon
          </h2>
          <p className="font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-text-body)] text-center max-w-[512px]">
            Experience luxury beauty services in a comfortable and elegant environment.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Salon Image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="relative aspect-[4/3] lg:aspect-auto rounded-2xl overflow-hidden backdrop-blur-[10px] bg-[var(--color-glass)] border border-[var(--color-border)] shadow-[0px_20px_40px_-10px_rgba(115,92,0,0.05)]"
          >
            <Image
              src="/images/portfolio/Salon.webp"
              alt="Salon Tharushi - Professional beauty salon"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              unoptimized
            />
          </motion.div>

          {/* Salon Details & Map */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col gap-6"
          >
            {/* Salon Info Card */}
            <div className="flex flex-col gap-5 p-8 rounded-2xl backdrop-blur-[10px] bg-[var(--color-glass)] border border-[var(--color-border)]">
              {/* Salon Name */}
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-gold-accent)]/20">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-gold-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                    <polyline points="9 22 9 12 15 12 15 22" />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-heading)] font-medium text-2xl text-[var(--color-foreground)]">
                  Salon Tharushi
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[var(--color-gold-accent)]/20 shrink-0 mt-0.5">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--color-gold-primary)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <p className="font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-text-body)]">
                    416/16A, Pincowattha,
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-text-body)]">
                    Waliweriya,
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-text-body)]">
                    Sri Lanka.
                  </p>
                </div>
              </div>

              {/* Get Directions Button */}
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[var(--color-gold-primary)] text-white text-xs font-semibold tracking-[0.96px] px-8 py-4 rounded-full shadow-[0px_10px_15px_-3px_rgba(115,92,0,0.2),0px_4px_6px_-4px_rgba(115,92,0,0.2)] hover:bg-[var(--color-gold-dark)] transition-all duration-300 hover:scale-105 w-fit"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="3 11 22 2 13 21 11 13 3 11" />
                </svg>
                Get Directions
              </a>
            </div>

            {/* Embedded Google Map */}
            <div className="flex-1 min-h-[250px] rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-[0px_20px_40px_-10px_rgba(115,92,0,0.05)]">
              <iframe
                src={GOOGLE_MAPS_EMBED_URL}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "250px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Salon Tharushi location on Google Maps"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
