import React, { useState, useEffect } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { SALON_INFO } from '../../data/salonData';
import { SocialSpeedDial } from '../common/SocialSpeedDial';

export const FloatingActions: React.FC = React.memo(() => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowBackToTop(window.scrollY > 400);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* LEFT SIDE: Back to Top Button */}
      <div className="fixed bottom-6 left-6 z-40 pointer-events-none">
        {showBackToTop && (
          <div className="relative pointer-events-auto group animate-in fade-in slide-in-from-bottom-3 duration-300">
            {/* Tooltip on hover (desktop) */}
            <div className="absolute left-full ml-3 top-1/2 -translate-y-1/2 hidden sm:block pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0">
              <div className="bg-[#121316]/95 backdrop-blur-md text-white text-[11px] font-medium py-1 px-2.5 rounded-xl whitespace-nowrap shadow-xl border border-[#C5A059]/40">
                Back to Top
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="p-3.5 rounded-full bg-[#18191E]/95 backdrop-blur-xl border border-[#C5A059]/40 hover:border-[#C5A059] text-white shadow-xl hover:shadow-[0_0_20px_rgba(197,160,89,0.35)] hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center"
              title=""
              aria-label="Back to Top"
            >
              <ArrowUp className="w-5 h-5 text-[#DFC085] group-hover:text-white group-hover:-translate-y-0.5 transition-all" />
            </button>
          </div>
        )}
      </div>

      {/* RIGHT SIDE: Floating Quick Actions & Social Speed Dial */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-none">
        {/* Floating Quick Call Button (Mobile Only) */}
        <a
          href={`tel:${SALON_INFO.phone}`}
          className="pointer-events-auto sm:hidden p-3.5 rounded-full bg-[#18191E]/95 backdrop-blur-xl text-white shadow-xl hover:bg-zinc-800 transition-all hover:scale-105 active:scale-95 flex items-center justify-center border border-[#C5A059]/40"
          title="Call Style Hub"
          aria-label="Call Style Hub"
        >
          <Phone className="w-5 h-5 text-[#DFC085]" />
        </a>

        {/* Single Social Media Button (Expands to Instagram, Facebook, WhatsApp) */}
        <SocialSpeedDial variant="floating" />
      </div>
    </>
  );
});
