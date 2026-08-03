"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";
import { NAV_LINKS, CONTACT } from "@/lib/constants";

/* Custom social media icons as inline SVGs */
function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
    </svg>
  );
}

const socialLinks = [
  { platform: "Facebook", href: "https://www.facebook.com", icon: FacebookIcon },
  { platform: "Instagram", href: "https://www.instagram.com", icon: InstagramIcon },
  { platform: "YouTube", href: "https://www.youtube.com", icon: YoutubeIcon },
  { platform: "TikTok", href: "https://www.tiktok.com", icon: TikTokIcon },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-border-lighter)] pt-14 pb-10">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-[1280px] mx-auto px-6 md:px-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-8">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            <h3 className="font-[family-name:var(--font-heading)] text-[30px] leading-9 text-[var(--color-gold-primary)]">
              Devika Mahakumara
            </h3>
            <p className="font-[family-name:var(--font-body)] text-base leading-[26px] text-[var(--color-text-body)] max-w-[384px]">
              Elevating natural beauty with a touch of quiet luxury. Professional Makeup
              &amp; Costume Artistry for your most cherished moments.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow on ${social.platform}`}
                    className="flex items-center justify-center w-10 h-10 rounded-full backdrop-blur-[10px] bg-[var(--color-glass)] border border-[var(--color-border)] text-[var(--color-text-body)] hover:text-[var(--color-gold-primary)] hover:border-[var(--color-gold-accent)] transition-all duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation Column */}
          <div className="md:col-span-2 md:col-start-7 flex flex-col gap-6">
            <h4 className="font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-foreground)] uppercase tracking-[1.6px] pb-2 border-b border-[var(--color-border-light)]">
              Navigation
            </h4>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-text-body)] hover:text-[var(--color-gold-primary)] transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="md:col-span-4 md:col-start-9 flex flex-col gap-6">
            <h4 className="font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-foreground)] uppercase tracking-[1.6px] pb-2 border-b border-[var(--color-border-light)]">
              Contact
            </h4>
            <ul className="flex flex-col gap-5">
              {/* Mobile */}
              <li className="flex items-start gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-gold-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-[family-name:var(--font-body)] text-sm text-[var(--color-text-body)] uppercase tracking-wider">
                    Mobile
                  </span>
                  <a
                    href={`tel:${CONTACT.phone}`}
                    className="font-[family-name:var(--font-body)] text-base text-[var(--color-gold-primary)] hover:underline"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-gold-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0 mt-0.5"
                >
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="flex flex-col">
                  <span className="font-[family-name:var(--font-body)] text-sm text-[var(--color-text-body)] uppercase tracking-wider">
                    Address
                  </span>
                  <p className="font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-foreground)]">
                    Salon Devika
                  </p>
                  <p className="font-[family-name:var(--font-body)] text-sm leading-5 text-[var(--color-text-body)]">
                    416/16A, Pincowattha,<br />
                    Waliweriya,<br />
                    Sri Lanka.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 mt-16 border-t border-[var(--color-border-lighter)]">
          <p className="font-[family-name:var(--font-body)] text-sm leading-5 text-[var(--color-text-body)]">
            &copy; 2024 Devika Mahakumara. All rights reserved.
          </p>
          <p className="font-[family-name:var(--font-body)] text-sm leading-5 text-[var(--color-text-body)]">
            Designed by{" "}
            <a
              href="https://www.fortxcore.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-gold-primary)] hover:underline"
            >
              FortXcore
            </a>
            .
          </p>
        </div>
      </motion.div>
    </footer>
  );
}
