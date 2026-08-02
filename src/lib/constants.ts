/** Navigation links */
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
] as const;

/** Services data */
export const SERVICES = [
  {
    title: "Bridal Makeup",
    description:
      "Flawless, enduring looks for your most important day, blending traditional elegance with modern techniques.",
    icon: "crown",
  },
  {
    title: "Party Makeup",
    description:
      "Glamorous and striking styles designed to make you stand out at any evening event or celebration.",
    icon: "sparkles",
  },
  {
    title: "Fashion Makeup",
    description:
      "High-impact, editorial looks perfect for photoshoots, runways, and commercial projects.",
    icon: "camera",
  },
  {
    title: "Costume Styling",
    description:
      "Complete character transformation combining specialized makeup artistry with thematic costume curation.",
    icon: "palette",
  },
  {
    title: "Graduation",
    description:
      "Fresh, radiant looks to celebrate your academic achievements with confidence.",
    icon: "graduationCap",
  },
  {
    title: "Home Visit",
    description:
      "Premium makeup services delivered in the comfort and privacy of your own location.",
    icon: "home",
  },
] as const;

/** Portfolio filter categories */
export const PORTFOLIO_CATEGORIES = ["All", "Bridal", "Fashion"] as const;

/** Portfolio images - replace these with actual portfolio photos */
export const PORTFOLIO_IMAGES = [
  {
    id: 1,
    src: "/images/hero.webp",
    alt: "Elegant bridal makeup look",
    category: "Bridal",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    src: "/images/IMG10.webp",
    alt: "Fashion editorial makeup",
    category: "Fashion",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    src: "/images/hero.webp",
    alt: "Glamorous party look",
    category: "Fashion",
    span: "col-span-1 row-span-2",
  },
  {
    id: 4,
    src: "/images/IMG10.webp",
    alt: "Natural bridal beauty",
    category: "Bridal",
    span: "col-span-1 row-span-1",
  },
  {
    id: 5,
    src: "/images/hero.webp",
    alt: "Creative costume styling",
    category: "Fashion",
    span: "col-span-2 row-span-1",
  },
] as const;

/** Testimonials data */
export const TESTIMONIALS = [
  {
    name: "Sarah Mendis",
    role: "Bride",
    quote:
      "Devika made me feel like the most beautiful version of myself on my wedding day. The makeup was flawless and lasted through all the tears and dancing!",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Fashion Model",
    quote:
      "Her editorial eye is unmatched. For our high-fashion shoot, she created a look that was both bold and sophisticated. A true artist.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    quote:
      "The costume styling and makeup for our production were incredible. Devika's attention to detail and character depth is exceptional.",
    rating: 5,
  },
] as const;

/** FAQ data */
export const FAQ_ITEMS = [
  {
    question: "How do I book a session?",
    answer:
      "You can book directly through our website using the 'Book Appointment' button or contact us via WhatsApp for personalized scheduling.",
  },
  {
    question: "Do you travel for home visits?",
    answer:
      "Yes, we offer premium home visit services. Travel fees may apply depending on the location and distance from our main studio.",
  },
  {
    question: "What products do you use?",
    answer:
      "We use only high-end, professional-grade products from luxury brands like MAC, Dior, and Charlotte Tilbury to ensure a flawless and long-lasting finish.",
  },
  {
    question: "Are trial sessions available?",
    answer:
      "Absolutely. We highly recommend bridal trials to perfect your look before the big day. Trials are scheduled at our studio by appointment.",
  },
] as const;

/** Stats data for About section */
export const STATS = [
  { value: "500+", label: "Happy Clients" },
  { value: "200+", label: "Bridal Makeovers" },
  { value: "10+", label: "Years Exp." },
  { value: "150+", label: "Events" },
] as const;

/** Social media links */
export const SOCIAL_LINKS = [
  { platform: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { platform: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { platform: "YouTube", href: "https://youtube.com", icon: "youtube" },
  { platform: "TikTok", href: "https://tiktok.com", icon: "tiktok" },
] as const;

/** Contact info */
export const CONTACT = {
  phone: "+94 77 123 4567",
  whatsapp: "https://wa.me/94771234567",
  email: "hello@devikamahakumara.com",
  location: "Colombo, Sri Lanka",
} as const;
