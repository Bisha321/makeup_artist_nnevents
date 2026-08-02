"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section
      const sections = NAV_LINKS.map((link) => link.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-md bg-[rgba(252,249,248,0.9)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] border-b border-[rgba(208,197,175,0.1)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1280px] mx-auto flex items-center justify-between px-6 md:px-16 py-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#home");
          }}
          className="flex items-center"
          aria-label="Devika Mahakumara - Home"
        >
          <span className="font-[family-name:var(--font-heading)] text-[var(--color-gold-primary)] text-xl font-medium">
            DM
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className={`text-xs uppercase tracking-[1.6px] font-[family-name:var(--font-body)] transition-colors duration-200 ${
                activeSection === link.href.replace("#", "")
                  ? "text-[var(--color-gold-primary)] font-semibold border-b-2 border-[var(--color-gold-primary)] pb-0.5"
                  : "text-[var(--color-text-body)] font-normal hover:text-[var(--color-gold-primary)]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA Button - Desktop */}
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#contact");
          }}
          className="hidden lg:flex items-center justify-center bg-[var(--color-gold-accent)] text-[var(--color-gold-dark)] text-xs font-semibold tracking-[0.96px] px-6 py-3 rounded-full shadow-[0px_20px_40px_-10px_rgba(115,92,0,0.05)] hover:bg-[var(--color-gold-primary)] hover:text-white transition-all duration-300"
        >
          Book Appointment
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[var(--color-text-body)]"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden backdrop-blur-md bg-[rgba(252,249,248,0.98)] border-b border-[var(--color-border-light)]"
          >
            <div className="flex flex-col items-center gap-6 py-8 px-6">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-sm uppercase tracking-[1.6px] font-[family-name:var(--font-body)] transition-colors duration-200 ${
                    activeSection === link.href.replace("#", "")
                      ? "text-[var(--color-gold-primary)] font-semibold"
                      : "text-[var(--color-text-body)] font-normal"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                className="mt-2 bg-[var(--color-gold-accent)] text-[var(--color-gold-dark)] text-xs font-semibold tracking-[0.96px] px-6 py-3 rounded-full"
              >
                Book Appointment
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
