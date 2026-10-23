import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Star,
  Calendar,
  ArrowRight,
  ChevronRight,
} from 'lucide-react';
import { getPublicAssetUrl } from '../../utils/assets';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenBooking,
  onExploreServices,
}) => {
  const containerRef = useRef<HTMLElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaGroupRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);

  // Background slides
  const [activeBgIndex, setActiveBgIndex] = useState(0);

  const heroBackgrounds = [
    {
      id: 'salon-floor',
      webpUrl: getPublicAssetUrl('images/hero-salon-floor.webp'),
      mobileWebpUrl: getPublicAssetUrl('images/hero-salon-floor-mobile.webp'),
      url: getPublicAssetUrl('images/hero-salon-floor.jpg'),
      fallbackUrl: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=85&w=2000&auto=format&fit=crop',
      title: 'Styling Floor',
    },
    {
      id: 'bridal-suite',
      webpUrl: getPublicAssetUrl('images/hero-bridal-suite.webp'),
      mobileWebpUrl: getPublicAssetUrl('images/hero-bridal-suite-mobile.webp'),
      url: getPublicAssetUrl('images/hero-bridal-suite.jpg'),
      fallbackUrl: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=85&w=2000&auto=format&fit=crop',
      title: 'Bridal Suite',
    },
    {
      id: 'facial-spa',
      webpUrl: getPublicAssetUrl('images/hero-facial-spa.webp'),
      mobileWebpUrl: getPublicAssetUrl('images/hero-facial-spa-mobile.webp'),
      url: getPublicAssetUrl('images/hero-facial-spa.jpg'),
      fallbackUrl: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=85&w=2000&auto=format&fit=crop',
      title: 'Facial Spa',
    },
  ];

  // Auto-cycle through backgrounds (pauses when tab inactive or off-screen)
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    const interval = setInterval(() => {
      if (isVisible && !document.hidden) {
        setActiveBgIndex((prev) => (prev + 1) % heroBackgrounds.length);
      }
    }, 7000);

    return () => {
      clearInterval(interval);
      observer.disconnect();
    };
  }, [heroBackgrounds.length]);

  // GSAP Smooth Entrance
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      if (eyebrowRef.current) {
        tl.fromTo(
          eyebrowRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.1
        );
      }

      if (titleRef.current) {
        tl.fromTo(
          titleRef.current,
          { opacity: 0, y: 35, filter: 'blur(8px)' },
          { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1, ease: 'expo.out' },
          0.25
        );
      }

      if (subheadRef.current) {
        tl.fromTo(
          subheadRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.55
        );
      }

      if (ctaGroupRef.current) {
        tl.fromTo(
          ctaGroupRef.current,
          { opacity: 0, y: 20, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          0.7
        );
      }

      if (bottomBarRef.current) {
        tl.fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.9
        );
      }

      // Parallax on scroll
      if (containerRef.current && contentWrapperRef.current) {
        gsap.to(contentWrapperRef.current, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 0.6,
          },
          yPercent: -15,
          opacity: 0.2,
          ease: 'none',
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative w-full h-[100vh] h-[100dvh] min-h-[600px] flex flex-col justify-between items-center overflow-hidden bg-[#07080A] select-none pt-24 sm:pt-28 pb-6 sm:pb-8"
    >
      {/* 1. CINEMATIC BACKGROUND CANVAS */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {heroBackgrounds.map((bg, index) => {
          const isActive = index === activeBgIndex;
          return (
            <div
              key={bg.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out will-change-transform ${
                isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
              }`}
            >
              <picture className="w-full h-full block">
                <source
                  type="image/webp"
                  srcSet={`${bg.mobileWebpUrl} 768w, ${bg.webpUrl} 1376w`}
                  sizes="100vw"
                />
                <img
                  src={bg.url}
                  alt={bg.title}
                  width={1376}
                  height={768}
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'low'}
                  decoding={index === 0 ? 'sync' : 'async'}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== bg.fallbackUrl) {
                      target.src = bg.fallbackUrl;
                    }
                  }}
                  className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] animate-ken-burns will-change-transform"
                />
              </picture>
            </div>
          );
        })}

        {/* Ambient Top Light & Contrast Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#060709]/90 via-[#08090C]/25 to-[#060709]/90" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[800px] h-[350px] bg-[#C5A059]/15 rounded-full blur-[140px] pointer-events-none animate-gold-glow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(6,7,9,0.1)_0%,rgba(6,7,9,0.65)_65%,rgba(6,7,9,0.95)_100%)]" />
      </div>

      {/* 2. TOP SPACER (Keeps perfect balance) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4" />

      {/* 3. CLEAN, EDITORIAL & PROFESSIONAL CENTER */}
      <div
        ref={contentWrapperRef}
        className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 text-center flex flex-col items-center justify-center my-auto py-2"
      >
        {/* Minimalist Eyebrow */}
        <div
          ref={eyebrowRef}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#C5A059]/40 text-[#DFC085] text-[11px] sm:text-xs font-semibold uppercase tracking-[0.25em] shadow-lg mb-4 sm:mb-5"
        >
          <Star className="w-3.5 h-3.5 fill-[#DFC085] text-[#DFC085]" />
          <span>Tirunelveli's Premier Ladies Salon</span>
        </div>

        {/* Elegant Headline Typography */}
        <div ref={titleRef} className="flex flex-col items-center">
          <span className="font-serif italic font-light text-2xl sm:text-3xl md:text-4xl text-amber-100/90 tracking-wide mb-1 sm:mb-2">
            Where Everyday Elegance
          </span>
          <h1 className="font-heading font-serif font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tight bg-gradient-to-r from-[#FFFFFF] via-[#FFF3D6] via-[#DFC085] to-[#B88E44] bg-clip-text text-transparent drop-shadow-[0_12px_40px_rgba(0,0,0,0.95)] leading-tight uppercase">
            Meets Royal Luxury
          </h1>
        </div>

        {/* Crisp Professional Subheading */}
        <p
          ref={subheadRef}
          className="mt-4 sm:mt-6 max-w-2xl text-zinc-300 text-xs sm:text-sm md:text-base font-light leading-relaxed px-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
        >
          Exclusive sanctuary at Mah Plaza, KTC Nagar dedicated to bespoke South Indian bridal makeovers, rejuvenating 24K gold facials & precision hair styling.
        </p>

        {/* Minimalist & High-End CTA Buttons */}
        <div
          ref={ctaGroupRef}
          className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto px-4"
        >
          {/* Primary CTA: Book Appointment */}
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto relative group overflow-hidden inline-flex items-center justify-center gap-2.5 px-8 sm:px-9 py-4 rounded-full bg-gradient-to-r from-[#9B783E] via-[#C5A059] to-[#DFC085] text-[#121316] font-sans font-bold text-xs sm:text-sm tracking-wider uppercase shadow-[0_10px_35px_rgba(197,160,89,0.5)] hover:shadow-[0_15px_45px_rgba(197,160,89,0.75)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            <Calendar className="w-4 h-4 text-[#121316] shrink-0" />
            <span>Book Appointment</span>
            <ChevronRight className="w-4 h-4 text-[#121316] group-hover:translate-x-1 transition-transform shrink-0" />
          </button>

          {/* Secondary CTA: View Services */}
          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-4 rounded-full bg-white/[0.08] backdrop-blur-xl border border-white/25 hover:border-[#DFC085] hover:bg-white/[0.18] text-white font-sans font-medium text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 group shadow-lg"
          >
            <span>View Services</span>
            <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-[#DFC085] group-hover:translate-x-1 transition-all duration-300 shrink-0" />
          </button>
        </div>
      </div>

      {/* 4. SLEEK MINIMALIST BOTTOM BAR */}
      <div
        ref={bottomBarRef}
        className="relative z-20 w-full max-w-4xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-zinc-400 text-xs pointer-events-auto"
      >
        {/* Discrete Trust Indicator */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-amber-300">
            <Star className="w-3.5 h-3.5 fill-current" />
            <span className="font-bold text-white">5.0</span>
          </div>
          <span>·</span>
          <span>41+ Google Reviews</span>
          <span>·</span>
          <span className="text-[#DFC085]">100% Female Staff</span>
          <span className="hidden sm:inline">·</span>
          <span className="hidden sm:inline">Mah Plaza, KTC Nagar</span>
        </div>

        {/* Scene Dots */}
        <div className="flex items-center gap-2">
          {heroBackgrounds.map((bg, idx) => (
            <button
              key={bg.id}
              onClick={() => setActiveBgIndex(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                activeBgIndex === idx ? 'w-6 bg-[#DFC085]' : 'w-1.5 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Switch to ${bg.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
