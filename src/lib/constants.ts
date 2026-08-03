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

/** Portfolio images */
export const PORTFOLIO_IMAGES = [
  { id: 1, src: "/images/portfolio/portfolio-01.webp", alt: "Bridal makeup look", category: "Bridal" },
  { id: 2, src: "/images/portfolio/portfolio-02.webp", alt: "Bridal elegance", category: "Bridal" },
  { id: 3, src: "/images/portfolio/portfolio-03.webp", alt: "Fashion editorial", category: "Fashion" },
  { id: 5, src: "/images/portfolio/portfolio-05.webp", alt: "Bridal glam look", category: "Bridal" },
  { id: 6, src: "/images/portfolio/portfolio-06.webp", alt: "Salon styling", category: "Fashion" },
  { id: 7, src: "/images/portfolio/portfolio-07.webp", alt: "Bridal makeup artistry", category: "Bridal" },
  { id: 8, src: "/images/portfolio/portfolio-08.webp", alt: "Fashion makeup", category: "Fashion" },
  { id: 9, src: "/images/portfolio/portfolio-09.webp", alt: "Bridal beauty", category: "Bridal" },
  { id: 10, src: "/images/portfolio/portfolio-10.webp", alt: "Fashion look", category: "Fashion" },
  { id: 11, src: "/images/portfolio/portfolio-11.webp", alt: "Bridal transformation", category: "Bridal" },
  { id: 12, src: "/images/portfolio/portfolio-12.webp", alt: "Party makeup", category: "Fashion" },
  { id: 13, src: "/images/portfolio/portfolio-13.webp", alt: "Bridal styling", category: "Bridal" },
  { id: 14, src: "/images/portfolio/portfolio-14.webp", alt: "Fashion editorial look", category: "Fashion" },
  { id: 15, src: "/images/portfolio/portfolio-15.webp", alt: "Bridal radiance", category: "Bridal" },
  { id: 16, src: "/images/portfolio/portfolio-16.webp", alt: "Glamorous makeup", category: "Fashion" },
  { id: 17, src: "/images/portfolio/portfolio-17.webp", alt: "Bridal perfection", category: "Bridal" },
  { id: 18, src: "/images/portfolio/portfolio-18.webp", alt: "Fashion styling", category: "Fashion" },
  { id: 19, src: "/images/portfolio/portfolio-19.webp", alt: "Bridal glow", category: "Bridal" },
  { id: 20, src: "/images/portfolio/portfolio-20.webp", alt: "Event makeup", category: "Fashion" },
  { id: 21, src: "/images/portfolio/portfolio-21.webp", alt: "Bridal look", category: "Bridal" },
  { id: 22, src: "/images/portfolio/portfolio-22.webp", alt: "Fashion beauty", category: "Fashion" },
  { id: 23, src: "/images/portfolio/portfolio-23.webp", alt: "Bridal elegance", category: "Bridal" },
  { id: 24, src: "/images/portfolio/portfolio-24.webp", alt: "Creative styling", category: "Fashion" },
  { id: 25, src: "/images/portfolio/portfolio-25.webp", alt: "Bridal makeover", category: "Bridal" },
  { id: 26, src: "/images/portfolio/portfolio-26.webp", alt: "Fashion glam", category: "Fashion" },
  { id: 27, src: "/images/portfolio/portfolio-27.webp", alt: "Bridal beauty artistry", category: "Bridal" },
  { id: 28, src: "/images/portfolio/portfolio-28.webp", alt: "Editorial beauty", category: "Fashion" },
  { id: 29, src: "/images/portfolio/portfolio-29.webp", alt: "Bridal finishing touches", category: "Bridal" },
  { id: 30, src: "/images/portfolio/portfolio-30.webp", alt: "Fashion portrait", category: "Fashion" },
  { id: 31, src: "/images/portfolio/portfolio-31.webp", alt: "Bridal grace", category: "Bridal" },
  { id: 32, src: "/images/portfolio/portfolio-32.webp", alt: "Costume styling", category: "Fashion" },
  { id: 33, src: "/images/portfolio/portfolio-33.webp", alt: "Bridal charm", category: "Bridal" },
  { id: 34, src: "/images/portfolio/portfolio-34.webp", alt: "Fashion makeup look", category: "Fashion" },
  { id: 35, src: "/images/portfolio/portfolio-35.webp", alt: "Bridal sophistication", category: "Bridal" },
  { id: 36, src: "/images/portfolio/portfolio-36.webp", alt: "Party glam", category: "Fashion" },
  { id: 37, src: "/images/portfolio/portfolio-37.webp", alt: "Bridal natural beauty", category: "Bridal" },
  { id: 38, src: "/images/portfolio/portfolio-38.webp", alt: "Fashion statement", category: "Fashion" },
  { id: 39, src: "/images/portfolio/portfolio-39.webp", alt: "Bridal classic look", category: "Bridal" },
] as const;

/** Testimonials data */
export const TESTIMONIALS = [
  {
    name: "Nadeesha Perera",
    role: "Bride",
    quote:
      "I was so nervous about my wedding day makeup but Devika akka made me feel so relaxed. My makeup lasted from morning poruwa ceremony all the way through the reception — even after all the crying! Everyone kept asking who did my makeup.",
    rating: 5,
  },
  {
    name: "Kavindi Rajapakse",
    role: "Party Makeup Client",
    quote:
      "Got my makeup done for my best friend's homecoming and I couldn't stop looking at myself the whole night. She really listens to what you want and the end result was exactly what I had in mind. Super friendly and punctual too.",
    rating: 5,
  },
  {
    name: "Sanduni Wickramasinghe",
    role: "Bride",
    quote:
      "Devika did makeup for me and all five of my bridesmaids. She came to our place early morning and finished everyone on time without rushing. The photos came out beautiful — very natural but still glamorous. Highly recommend!",
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
  { platform: "Facebook", href: "https://www.facebook.com", icon: "facebook" },
  { platform: "Instagram", href: "https://www.instagram.com", icon: "instagram" },
  { platform: "YouTube", href: "https://www.youtube.com", icon: "youtube" },
  { platform: "TikTok", href: "https://www.tiktok.com", icon: "tiktok" },
] as const;

/** Contact info */
export const CONTACT = {
  phone: "0764154407",
  whatsapp: "https://wa.me/94764154407",
  email: "dewikamahakumara29@gmail.com",
  location: "Colombo, Sri Lanka",
} as const;
