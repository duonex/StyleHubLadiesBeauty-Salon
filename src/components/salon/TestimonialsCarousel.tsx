import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  ExternalLink
} from 'lucide-react';
import { SALON_INFO, GOOGLE_REVIEWS } from '../../data/salonData';

export const TestimonialsCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Update items per view based on container / screen width
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalReviews = GOOGLE_REVIEWS.length;
  const maxIndex = Math.max(0, totalReviews - itemsPerView);

  // Clamp current index when itemsPerView changes
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerView, maxIndex, currentIndex]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay functionality with pause on hover
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      handleNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, handleNext]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      handleNext();
    } else if (diff < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-[#FAF7F2]/60 to-white relative overflow-hidden border-t border-zinc-200/70">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-[#9B783E] text-xs font-semibold uppercase tracking-wider mb-3 shadow-sm">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>Google Verified (5.0 ★ · {SALON_INFO.reviewCount} Reviews)</span>
            </div>
            
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900 tracking-tight">
              Loved by 1000+ Happy Women
            </h2>
            <p className="text-zinc-600 mt-2 text-sm sm:text-base max-w-2xl leading-relaxed">
              Read authentic feedback from real clients across Tirunelveli. From South Indian bridal makeovers to rejuvenating clinical facials.
            </p>
          </div>

          {/* Carousel Navigation Buttons & Maps Link */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#9B783E] hover:text-[#7d5e2c] bg-amber-50 hover:bg-amber-100/80 px-4 py-2.5 rounded-full border border-amber-200/80 transition-all duration-200 shadow-sm hover:shadow"
            >
              <span>View All 41 Reviews</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full bg-white hover:bg-amber-50 border border-zinc-200 hover:border-[#C5A059] text-zinc-700 hover:text-[#9B783E] flex items-center justify-center shadow-sm hover:shadow transition-all duration-200 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full bg-white hover:bg-amber-50 border border-zinc-200 hover:border-[#C5A059] text-zinc-700 hover:text-[#9B783E] flex items-center justify-center shadow-sm hover:shadow transition-all duration-200 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Container */}
        <div
          className="relative overflow-hidden -mx-3"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {GOOGLE_REVIEWS.map((rev, idx) => (
              <div
                key={rev.id || idx}
                style={{ width: `${100 / itemsPerView}%` }}
                className="shrink-0 px-3 flex"
              >
                <div className="w-full bg-[#FAF7F2] hover:bg-white p-7 sm:p-8 rounded-[2rem] border border-amber-200/70 hover:border-[#C5A059] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative overflow-hidden group">
                  
                  {/* Decorative quote icon watermark in top-right */}
                  <div className="absolute -top-2 -right-2 text-amber-200/30 group-hover:text-amber-300/40 transition-colors pointer-events-none select-none">
                    <Quote className="w-24 h-24 rotate-180" />
                  </div>

                  {/* Top rating & timestamp */}
                  <div className="relative z-10 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 fill-amber-400 text-amber-400"
                          />
                        ))}
                        <span className="text-xs font-bold text-amber-700 ml-1.5 bg-amber-100/80 px-2 py-0.5 rounded-md">
                          5.0
                        </span>
                      </div>

                      <span className="text-xs text-zinc-400 font-medium">
                        {rev.timeAgo}
                      </span>
                    </div>

                    {/* Review text */}
                    <p className="text-xs sm:text-sm text-zinc-700 italic leading-relaxed line-clamp-5">
                      "{rev.content}"
                    </p>
                  </div>

                  {/* Bottom reviewer info */}
                  <div className="relative z-10 pt-5 mt-4 border-t border-amber-200/60 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Avatar initial circle */}
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#9B783E] via-[#C5A059] to-[#DFC085] text-white flex items-center justify-center font-serif font-bold text-sm shrink-0 shadow-sm">
                        {rev.author.charAt(0)}
                      </div>

                      <div className="min-w-0">
                        <h4 className="font-serif font-bold text-xs sm:text-sm text-zinc-900 truncate">
                          {rev.author}
                        </h4>
                        {rev.serviceMentioned && (
                          <p className="text-[11px] font-medium text-[#9B783E] truncate">
                            {rev.serviceMentioned}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Verified badge */}
                    <div className="shrink-0 flex items-center gap-1 text-[10px] bg-emerald-50 text-emerald-700 font-semibold px-2.5 py-1 rounded-full border border-emerald-200/70">
                      <CheckCircle className="w-3 h-3 text-emerald-600" />
                      <span>Verified</span>
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Pagination Dots & Counter */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Mobile view all link */}
          <a
            href={SALON_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:hidden inline-flex items-center gap-2 text-xs font-semibold text-[#9B783E] bg-amber-50 px-4 py-2 rounded-full border border-amber-200"
          >
            <span>View All 41 Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          {/* Pagination Indicators */}
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? 'w-8 bg-[#9B783E]'
                    : 'w-2.5 bg-zinc-300 hover:bg-zinc-400'
                }`}
              />
            ))}
          </div>

          {/* Quick Counter */}
          <div className="text-xs text-zinc-500 font-medium hidden sm:block">
            Showing reviews <span className="font-bold text-zinc-800">{currentIndex + 1}</span> - <span className="font-bold text-zinc-800">{Math.min(currentIndex + itemsPerView, totalReviews)}</span> of <span className="font-bold text-zinc-800">{totalReviews}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
