import React, { useState, useEffect, useRef } from 'react';
import {
  Crown,
  Heart,
  Calendar,
  Phone,
  MessageCircle,
  CheckCircle2,
  Clock,
  Star,
  Camera,
  ArrowRight,
  Flower2,
  Check,
  Sparkles,
  Play,
  Pause,
  RotateCcw
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SALON_INFO, BRIDAL_PACKAGES } from '../data/salonData';
import type { BridalPackage } from '../types/salon';
import TraditionalSouth from "../assets/Gallery-images/TraditionalSouth ndianMuhurthamBride.jpg";
import Reception from "../assets/Gallery-images/Reception Glam Makeover.jpg";
import Bridaljada from "../assets/Gallery-images/Bridal Floral Jada & Hair Art.jpg";
import Goldfacial from "../assets/Gallery-images/Goldfacial.jpg";


gsap.registerPlugin(ScrollTrigger);

interface BridalPageProps {
  onOpenBooking: () => void;
  onSelectPackage?: (pkg: any) => void;
}

const bridalPillars = [
  {
    title: 'Private AC Bridal Suite',
    desc: 'Exclusive private lounge at Mah Plaza, Tirunelveli for the bride and family to prepare in utmost peace and luxury.',
    icon: Crown,
    tag: 'Mah Plaza Suite'
  },
  {
    title: 'Fresh Floral Veni & Jada',
    desc: 'Authentic Madurai malli (jasmine), fragrant rose petal nets, and antique golden hair billa setting.',
    icon: Flower2,
    tag: 'Fresh Flowers'
  },
  {
    title: 'Saree Pre-Pleating & Draping',
    desc: 'Crease-free box pre-pleating for heavy Kanchipuram silk sarees & lehengas so your drape looks immaculate in 5 minutes.',
    icon: Heart,
    tag: '5-Min Drape'
  },
  {
    title: '4K Camera & Stage Proof',
    desc: 'High-definition, sweat-resistant, waterproof base formulated to look breathtaking under studio lights and 4K lenses.',
    icon: Camera,
    tag: 'HD & Airbrush'
  }
];

const bridalSteps = [
  {
    step: '01',
    title: 'Pre-Bridal Radiance Ritual',
    timeframe: '2 - 3 Weeks Before',
    desc: 'Deep de-tan brightening, 24K gold hydra facial, body waxing, and hair conditioning for smooth, luminous bridal skin.'
  },
  {
    step: '02',
    title: 'Look Consultation & Attire Pairing',
    timeframe: '1 Week Before',
    desc: 'Shade matching, hairstyle discussion, and accessory coordination tailored specifically to your Muhurtham & Reception sarees.'
  },
  {
    step: '03',
    title: 'Saree Pre-Pleating & Jewelry Check',
    timeframe: '1 - 2 Days Before',
    desc: 'Precision pre-pleating and steaming of your wedding sarees, jewelry matching, and final schedule alignment.'
  },
  {
    step: '04',
    title: 'The Sacred Muhurtham Transformation',
    timeframe: 'On Your Sacred Day',
    desc: 'Flawless makeup application, fragrant floral veni fixing, saree draping, and setting mist lock for 24-hour perfection.'
  }
];

const bridalGallery = [
  {
    title: 'Traditional Muhurtham Look',
    sub: 'Kanchipuram silk draping, temple jewelry & fresh veni',
    image: TraditionalSouth
  },
  {
    title: 'Reception Glam Makeup',
    sub: 'Luminous HD base, defined lashes & Hollywood curls',
    image: Reception
  },
  {
    title: 'Intricate Bridal Floral Jada',
    sub: 'Fresh jasmine spirals, rose petals & golden billas',
    image:Bridaljada
  },
  {
    title: 'Pre-Wedding Radiance Glow',
    sub: '24K Gold bridal facial & glass skin finish',
    image: Goldfacial
  }
];

/* ─── Bridal Package Card (Compact Responsive Grid Card) ─── */
const BridalPackageCard: React.FC<{
  pkg: BridalPackage;
  index: number;
  highlighted?: boolean;
}> = ({ pkg, index, highlighted }) => {
  const whatsappUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    `🌸 Hello Style Hub Ladies Salon,\n\nI would like to inquire about and book the *${pkg.name}* Bridal Package.\n\nPlease share current pricing, schedule availability, and bridal consultation details. Thank you!`
  )}`;

  const whatsappPricingUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
    `Hello Style Hub, I would like to know the exact pricing and custom combo options for the *${pkg.name}* Bridal Package.`
  )}`;

  return (
    <div
      className={`bridal-grid-card group relative rounded-[2rem] bg-gradient-to-b from-[#0E1A29] via-[#0B1522] to-[#070D16] border transition-all duration-500 flex flex-col justify-between overflow-hidden h-full ${
        highlighted
          ? 'border-[#C5A059] shadow-[0_0_45px_rgba(197,160,89,0.4)] ring-2 ring-[#C5A059] scale-[1.02]'
          : pkg.popular
          ? 'border-[#C5A059] shadow-[0_0_35px_rgba(197,160,89,0.22)] ring-1 ring-[#C5A059]/40 hover:shadow-[0_0_50px_rgba(197,160,89,0.35)]'
          : 'border-white/10 hover:border-[#C5A059]/60 shadow-[0_8px_30px_rgba(0,0,0,0.4)] hover:shadow-[0_12px_40px_rgba(197,160,89,0.15)]'
      } hover:-translate-y-2`}
    >
      {/* Top Media Header with Badges */}
      <div className="relative h-60 sm:h-64 overflow-hidden bg-zinc-950">
        <img
          src={pkg.image}
          alt={pkg.name}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
        />
        {/* Soft gradient & glows */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1A29] via-[#0E1A29]/40 to-black/20" />
        <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-[#C5A059]/20 rounded-full blur-2xl pointer-events-none" />

        {/* Floating Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
          <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[#DFC085] text-[10px] font-bold tracking-widest uppercase shadow">
            0{index + 1} / 06
          </span>

          {pkg.badge && (
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 via-[#C5A059] to-amber-600 text-white text-[10px] font-bold tracking-wider uppercase shadow-lg flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" />
              <span>{pkg.badge}</span>
            </span>
          )}
        </div>

        {/* Duration + Pricing on image bottom */}
        <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none z-10">
          <div className="inline-flex items-center gap-1.5 bg-black/65 backdrop-blur-md px-3 py-1 rounded-full border border-white/15 text-white text-[11px] font-medium shadow">
            <Clock className="w-3.5 h-3.5 text-amber-300" />
            <span>{pkg.duration}</span>
          </div>

          <div className="inline-flex items-center gap-1 bg-gradient-to-r from-[#9B783E]/90 to-[#C5A059]/90 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-amber-300/40 shadow">
            <span>Pricing on Request</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
        <div>
          {/* Header row with crown & recommended flag */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[#C5A059]/30 to-[#9B783E]/20 border border-[#C5A059]/40 flex items-center justify-center text-amber-300 shadow-sm">
                <Crown className="w-4 h-4" />
              </div>
              <span className="text-[11px] font-bold tracking-widest text-[#DFC085] uppercase">
                Bridal Studio
              </span>
            </div>

            {pkg.popular && (
              <span className="px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <Star className="w-3 h-3 fill-amber-300" />
                <span>Recommended</span>
              </span>
            )}
          </div>

          {/* Name & Tagline */}
          <h3 className="font-serif text-2xl font-bold text-white group-hover:text-amber-200 transition-colors duration-300 leading-snug">
            {pkg.name}
          </h3>
          <p className="text-amber-300/90 text-xs font-medium mt-1 tracking-wide">
            {pkg.tagline}
          </p>

          {/* Gold separator */}
          <div className="mt-4 mb-4 h-px bg-gradient-to-r from-transparent via-[#C5A059]/35 to-transparent" />

          {/* Description */}
          <p className="text-zinc-300 text-xs leading-relaxed">
            {pkg.description}
          </p>

          {/* Inclusions */}
          <div className="mt-5">
            <div className="flex items-center justify-between mb-2.5">
              <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-amber-400" />
                Package Inclusions
              </span>
              <span className="text-[10px] text-amber-300 font-semibold bg-amber-500/15 px-2 py-0.5 rounded-full border border-amber-400/25">
                {pkg.inclusions.length} Inclusions
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {pkg.inclusions.map((inc, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] text-zinc-200 font-medium hover:bg-[#C5A059]/15 hover:border-[#C5A059]/30 hover:text-amber-200 transition-colors cursor-default"
                >
                  <CheckCircle2 className="w-3 h-3 text-amber-400 shrink-0" />
                  <span>{inc}</span>
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Direct Action Buttons */}
        <div className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-2.5">
          {/* WhatsApp Direct Booking Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-600 hover:from-emerald-500 hover:via-emerald-600 hover:to-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_4px_16px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_24px_rgba(16,185,129,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-2 group/btn"
          >
            <MessageCircle className="w-4 h-4 fill-white/20" />
            <span>Book on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-200 group-hover/btn:translate-x-1 transition-transform" />
          </a>

          {/* Secondary WhatsApp Price Inquiry */}
          <a
            href={whatsappPricingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-3 rounded-lg bg-white/5 hover:bg-[#C5A059]/15 text-zinc-300 hover:text-amber-200 border border-white/10 hover:border-[#C5A059]/30 text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>WhatsApp for Pricing Details</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export const BridalPage: React.FC<BridalPageProps> = ({
  onOpenBooking,
}) => {
  const [brideName, setBrideName] = useState('');
  const [phone, setPhone] = useState('');
  const [weddingDate, setWeddingDate] = useState('');
  const [selectedPackageId, setSelectedPackageId] = useState('ultra-hd-makeup');
  const [eventType, setEventType] = useState('Muhurtham & Reception');
  const [notes, setNotes] = useState('');
  const sectionHeaderRef = useRef<HTMLDivElement>(null);
  const cardsGridRef = useRef<HTMLDivElement>(null);

  // ── Continuous Running Marquee Carousel State for 6 Bridal Packages ──
  const [isPaused, setIsPaused] = useState(false);
  const [speed, setSpeed] = useState<'normal' | 'slow' | 'fast'>('normal');
  const [direction, setDirection] = useState<'normal' | 'reverse'>('normal');
  const [highlightedId, setHighlightedId] = useState<string | null>(null);

  const durationMap = {
    slow: 58,
    normal: 38,
    fast: 22,
  };

  // Staggered scroll animation for header and continuous carousel container
  useEffect(() => {
    const headerEl = sectionHeaderRef.current;
    const gridEl = cardsGridRef.current;

    const ctx = gsap.context(() => {
      if (headerEl) {
        gsap.fromTo(
          headerEl.querySelectorAll('.bridal-header-animate'),
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headerEl,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }

      if (gridEl) {
        gsap.fromTo(
          gridEl,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: gridEl,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  const handleBridalInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const pkgObj = BRIDAL_PACKAGES.find(p => p.id === selectedPackageId);
    const text = `Hello Style Hub Ladies Beauty Salon, I would like to inquire about your Bridal Studio Wedding Packages.%0A%0A*Bride Name:* ${brideName}%0A*Phone:* ${phone}%0A*Wedding Date:* ${weddingDate}%0A*Preferred Package:* ${pkgObj ? pkgObj.name : selectedPackageId}%0A*Event Type:* ${eventType}%0A*Special Requests:* ${notes || 'None'}`;
    window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Hero Banner: Luxury Midnight Dark Navy & Gold Aesthetic */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#060D15] via-[#0B1724] to-[#08111B] text-white p-8 sm:p-14 lg:p-20 shadow-2xl border border-[#C5A059]/40 mb-16">
          {/* Ambient Lighting */}
          <div className="absolute top-0 right-0 w-[480px] h-[480px] bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#9B783E]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-[#DFC085] text-xs font-semibold uppercase tracking-wider mb-6">
              <Crown className="w-4 h-4 text-amber-300" />
              <span>Tirunelveli's Premier South Indian Bridal Studio · Mah Plaza</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Where Every South Indian Bride Looks Like Royalty
            </h1>

            <p className="text-zinc-300 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl">
              Step into Style Hub's private bridal lounge at Mah Plaza. Our master makeup artists specialize in South Indian Muhurtham transformations, flawless 4K camera-ready finishes, traditional veni floral styling, and precision Kanchipuram saree draping.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#bridal-packages"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#9B783E] via-[#C5A059] to-[#DFC085] text-white text-xs font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Crown className="w-4 h-4" />
                <span>Explore 6 Bridal Packages</span>
              </a>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Style%20Hub,%20I%20would%20like%20to%20consult%20with%20your%20bridal%20makeup%20artist%20about%20wedding%20packages.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Bridal Stylist</span>
              </a>

              <a
                href={`tel:${SALON_INFO.phone}`}
                className="px-6 py-4 rounded-full bg-amber-500/15 hover:bg-amber-500/25 border border-amber-400/40 text-amber-200 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call {SALON_INFO.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>

        {/* 2. Four Bridal Studio Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {bridalPillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 sm:p-7 rounded-3xl border border-zinc-200/90 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-[#9B783E] border border-amber-200/80 flex items-center justify-center shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold text-[#9B783E] uppercase tracking-wider bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* ═══════════════════════════════════════════════════════════════
          3. REDESIGNED: 6 Signature Bridal Wedding Packages
          Full-width cinematic section with scroll-triggered animations
         ═══════════════════════════════════════════════════════════════ */}
      <div id="bridal-packages" className="scroll-mt-24 relative">

        {/* Full-width dark background wrapper */}
        <div className="bg-gradient-to-b from-[#060D15] via-[#0B1826] to-[#060D15] relative overflow-hidden">

          {/* Large ambient decorative glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#C5A059]/8 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-[#1A365D]/20 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[#C5A059]/6 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-[#1A365D]/15 rounded-full blur-[120px] pointer-events-none" />

          {/* Section Header */}
          <div ref={sectionHeaderRef} className="max-w-5xl mx-auto text-center pt-16 sm:pt-24 lg:pt-28 pb-10 sm:pb-16 px-4 sm:px-6 relative z-10">
            <div className="bridal-header-animate inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#C5A059]/15 border border-[#C5A059]/40 text-amber-300 text-xs font-semibold uppercase tracking-[0.2em] mb-6 shadow-lg shadow-[#C5A059]/5">
              <Crown className="w-4 h-4" />
              <span>Bespoke South Indian Bridal Collections</span>
            </div>
            
            <h2 className="bridal-header-animate font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
              6 Signature Bridal<br className="hidden sm:block" /> Wedding Packages
            </h2>

            {/* Decorative gold line */}
            <div className="bridal-header-animate mx-auto mt-6 mb-6 flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C5A059]/60" />
              <Sparkles className="w-4 h-4 text-amber-400/60" />
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C5A059]/60" />
            </div>
            
            <p className="bridal-header-animate text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
              Every bridal package is meticulously designed to match your wedding events — from intimate betrothals and vibrant sangeets to the sacred Muhurtham and grand evening reception.
            </p>
          </div>

          {/* ── 6 Signature Bridal Wedding Packages: Continuous Running Marquee Carousel ── */}
          <div ref={cardsGridRef} className="relative z-10 w-full pb-14 sm:pb-20">
            
            {/* Control & Status Toolbar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 flex flex-wrap items-center justify-between gap-4">
              
              {/* Left: Continuous Running Indicator & Counter */}
              <div className="flex items-center gap-3">
                <div
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                    isPaused
                      ? 'bg-amber-500/10 border-amber-400/30 text-amber-300 shadow-sm'
                      : 'bg-emerald-500/10 border-emerald-400/30 text-emerald-300 shadow-[0_0_15px_rgba(16,185,129,0.15)]'
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      isPaused ? 'bg-amber-400' : 'bg-emerald-400 animate-pulse'
                    }`}
                  />
                  <span>{isPaused ? 'Carousel Paused' : 'Continuous Running Carousel'}</span>
                </div>

                <span className="text-xs text-zinc-400 hidden sm:inline">
                  Featuring all <strong className="text-amber-300 font-serif">6 Signature Packages</strong> · Non-stop Live Showcase
                </span>
              </div>

              {/* Right: Controls Toolbar (Speed Selector, Direction, Play/Pause) */}
            
            </div>

            {/* Continuous Running Marquee Viewport with Left & Right Vignette Dissolves */}
            <div
              className="relative w-full overflow-hidden py-3 select-none group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Left ambient dissolve gradient */}
              <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-r from-[#060D15] via-[#060D15]/80 to-transparent z-20 pointer-events-none" />

              {/* Right ambient dissolve gradient */}
              <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 md:w-40 bg-gradient-to-l from-[#060D15] via-[#060D15]/80 to-transparent z-20 pointer-events-none" />

              {/* Running Track */}
              <div
                className="flex w-max animate-bridal-continuous"
                style={{
                  animationDuration: `${durationMap[speed]}s`,
                  animationDirection: direction,
                  animationPlayState: isPaused ? 'paused' : 'running',
                }}
              >
                {/* Group 1: 6 Signature Cards */}
                <div className="flex gap-6 pr-6 shrink-0">
                  {BRIDAL_PACKAGES.map((pkg, idx) => (
                    <div
                      key={`g1-${pkg.id}`}
                      className="w-[320px] sm:w-[360px] md:w-[390px] shrink-0"
                    >
                      <BridalPackageCard
                        pkg={pkg}
                        index={idx}
                        highlighted={highlightedId === pkg.id}
                      />
                    </div>
                  ))}
                </div>

                {/* Group 2: Identical 6 Cards for 100% Seamless Infinite Glide */}
                <div className="flex gap-6 pr-6 shrink-0">
                  {BRIDAL_PACKAGES.map((pkg, idx) => (
                    <div
                      key={`g2-${pkg.id}`}
                      className="w-[320px] sm:w-[360px] md:w-[390px] shrink-0"
                    >
                      <BridalPackageCard
                        pkg={pkg}
                        index={idx}
                        highlighted={highlightedId === pkg.id}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 6 Interactive Package Highlight Tabs */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8">
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
                {BRIDAL_PACKAGES.map((pkg, idx) => {
                  const isHighlighted = highlightedId === pkg.id;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() => setHighlightedId(isHighlighted ? null : pkg.id)}
                      onMouseEnter={() => setHighlightedId(pkg.id)}
                      onMouseLeave={() => setHighlightedId(null)}
                      className={`py-2 px-3 sm:px-4 rounded-xl text-xs font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer border ${
                        isHighlighted
                          ? 'bg-gradient-to-r from-[#1B2838] via-[#22344A] to-[#1B2838] text-amber-200 border-[#C5A059] shadow-[0_0_20px_rgba(197,160,89,0.3)] ring-1 ring-[#C5A059] scale-105'
                          : 'bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white border-white/10 hover:border-white/20'
                      }`}
                    >
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isHighlighted ? 'bg-amber-400 shadow-[0_0_6px_rgba(251,191,36,0.9)]' : 'bg-zinc-500'
                        }`}
                      />
                      <span className="font-mono text-[10px] text-amber-300/80">0{idx + 1}</span>
                      <span className="truncate max-w-[110px] sm:max-w-none">{pkg.name}</span>
                    </button>
                  );
                })}
              </div>

              <p className="text-center text-[11px] text-zinc-400 mt-4 flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Continuous running carousel · Hover cursor over any card to pause and book on WhatsApp</span>
              </p>
            </div>

          </div>

          {/* Custom Combo Consultation Banner */}
          <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24 relative z-10">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-white/[0.04] to-white/[0.08] border border-white/10 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C5A059]/25 to-[#9B783E]/15 border border-[#C5A059]/30 flex items-center justify-center text-[#DFC085] shrink-0 shadow-lg">
                  <Crown className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-serif text-lg sm:text-xl font-bold text-white">
                    Need a Customized 2-Day Wedding + Reception Combo?
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                    We offer tailored bridal combos including pre-bridal skincare, muhurtham styling, and evening sangeet looks.
                  </p>
                </div>
              </div>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Style%20Hub,%20I%20would%20like%20a%20customized%202-day%20bridal%20and%20reception%20package%20quote.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-7 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2 shrink-0"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Get Custom Combo Quote</span>
              </a>
            </div>
          </div>

        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 4. The 4-Stage Bridal Journey */}
        <div className="mb-20 mt-20 sm:mt-24">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-[#9B783E] text-xs font-semibold uppercase tracking-wider mb-3">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Step-by-Step Experience</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-zinc-900">
              The Style Hub Bridal Journey
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm mt-2">
              From your initial consultation to the final sacred Muhurtham veil, we ensure every detail is flawless.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bridalSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-zinc-200/90 shadow-sm relative flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-9 h-9 rounded-2xl bg-[#121316] text-[#DFC085] font-serif font-bold text-xs flex items-center justify-center shadow">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-semibold text-[#9B783E] bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/80">
                      {step.timeframe}
                    </span>
                  </div>

                  <h3 className="font-serif text-base font-bold text-zinc-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Bridal Transformations Gallery */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-zinc-900">
              Real Bridal Transformations
            </h2>
            <p className="text-zinc-600 text-xs sm:text-sm mt-2">
              Captured moments of radiant brides styled by Style Hub at Mah Plaza, Tirunelveli.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bridalGallery.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-200/80 group hover:shadow-lg transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={256}
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h4 className="font-serif font-bold text-sm text-amber-200">{item.title}</h4>
                    <p className="text-[11px] text-zinc-300 mt-0.5">{item.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Bridal Consultation Inquiry Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-zinc-200 max-w-3xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#9B783E] flex items-center justify-center mx-auto mb-3 shadow-sm">
              <Crown className="w-6 h-6" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900">
              Request a Bridal Consultation
            </h2>
            <p className="text-zinc-500 text-xs sm:text-sm mt-1">
              Share your wedding dates and package interest; our senior bridal stylist will connect with you directly on WhatsApp.
            </p>
          </div>

          <form onSubmit={handleBridalInquiry} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Bride's Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={brideName}
                  onChange={(e) => setBrideName(e.target.value)}
                  placeholder="e.g. Ananya Rajan"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Phone Number (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. 9876543210"
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Tentative Wedding / Event Date *
                </label>
                <input
                  type="date"
                  required
                  value={weddingDate}
                  onChange={(e) => setWeddingDate(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                  Select Preferred Bridal Package *
                </label>
                <select
                  value={selectedPackageId}
                  onChange={(e) => setSelectedPackageId(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white font-medium text-zinc-800"
                >
                  {BRIDAL_PACKAGES.map((pkg, idx) => (
                    <option key={pkg.id} value={pkg.id}>
                      0{idx + 1}. {pkg.name} ({pkg.inclusions.length} Inclusions)
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                Event Requirement *
              </label>
              <select
                value={eventType}
                onChange={(e) => setEventType(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white"
              >
                <option value="Muhurtham & Reception">Muhurtham & Reception (2 Sessions)</option>
                <option value="Muhurtham Morning Only">Muhurtham Morning Only</option>
                <option value="Reception / Sangeet Only">Reception / Sangeet Only</option>
                <option value="Engagement Makeover">Engagement Makeover</option>
                <option value="Complete 3-Day Wedding Extravaganza">Complete 3-Day Wedding Extravaganza</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1.5">
                Special Requests or Notes (Optional)
              </label>
              <textarea
                rows={3}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Mention your attire colors, saree draping preferences, jewelry styling needs..."
                className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#9B783E] via-[#C5A059] to-[#DFC085] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Send WhatsApp Bridal Inquiry</span>
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
