import React, { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { InstagramIcon, FacebookIcon, WhatsAppIcon, SocialHubIcon } from './SocialIcons';
import { SALON_INFO } from '../../data/salonData';

export interface SocialSpeedDialProps {
  variant?: 'floating' | 'inline';
  className?: string;
}

const SOCIAL_LINKS = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: SALON_INFO.social.whatsapp,
    icon: <WhatsAppIcon size={26} />,
    bg: 'hover:bg-emerald-500/20 hover:border-emerald-500/60 shadow-[0_4px_15px_rgba(37,211,102,0.25)]',
    tooltip: 'Chat on WhatsApp',
    delay: '0ms'
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: SALON_INFO.social.facebook,
    icon: <FacebookIcon size={26} />,
    bg: 'hover:bg-blue-600/20 hover:border-blue-500/60 shadow-[0_4px_15px_rgba(24,119,242,0.25)]',
    tooltip: 'Style Hub on Facebook',
    delay: '50ms'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: SALON_INFO.social.instagram,
    icon: <InstagramIcon size={26} />,
    bg: 'hover:bg-pink-500/20 hover:border-pink-500/60 shadow-[0_4px_15px_rgba(225,48,108,0.25)]',
    tooltip: 'Follow on Instagram',
    delay: '100ms'
  }
];

export const SocialSpeedDial: React.FC<SocialSpeedDialProps> = React.memo(({
  variant = 'floating',
  className = ''
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center ${
        variant === 'floating' ? 'items-end' : ''
      } ${className}`}
    >
      {/* Expanded Icon-Only Speed Dial Action Buttons */}
      {isOpen && (
        <div
          className={`flex ${
            variant === 'inline' ? 'flex-row' : 'flex-col-reverse'
          } items-center gap-3 mb-3 pointer-events-auto animate-in fade-in slide-in-from-bottom-3 duration-300`}
        >
          {SOCIAL_LINKS.map((item) => (
            <div key={item.id} className="relative group/btn flex items-center">
              {/* Optional Floating Hover Tooltip (Desktop only) */}
              {variant === 'floating' && (
                <div className="absolute right-full mr-3 hidden sm:block pointer-events-none opacity-0 group-hover/btn:opacity-100 transition-all duration-200 translate-x-1 group-hover/btn:translate-x-0">
                  <div className="bg-[#121316]/95 backdrop-blur-md text-white text-[11px] font-medium py-1 px-2.5 rounded-xl whitespace-nowrap shadow-xl border border-[#C5A059]/40">
                    {item.tooltip}
                  </div>
                </div>
              )}

              {/* Icon Only Action Button */}
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                title={item.tooltip}
                aria-label={item.name}
                onClick={() => setIsOpen(false)}
                className={`w-12 h-12 rounded-full bg-[#18191E]/95 backdrop-blur-xl border border-[#C5A059]/40 ${item.bg} flex items-center justify-center transition-all duration-300 hover:scale-115 active:scale-95 shadow-xl hover:shadow-2xl`}
              >
                <div className="transition-transform duration-300 group-hover/btn:scale-110 flex items-center justify-center">
                  {item.icon}
                </div>
              </a>
            </div>
          ))}
        </div>
      )}

      {/* Main Single Social Media Trigger Button */}
      <div className="relative pointer-events-auto group">
        {/* Glow Ring */}
        {!isOpen && (
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#9B783E] via-[#DFC085] to-[#C5A059] opacity-40 blur-md group-hover:opacity-80 transition duration-500 animate-pulse pointer-events-none" />
        )}

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close social media menu" : "Open social media menu"}
          title={isOpen ? "Close" : "Social Media (Instagram, Facebook, WhatsApp)"}
          className={`relative p-3.5 sm:p-4 rounded-full shadow-2xl transition-all duration-500 active:scale-95 flex items-center justify-center ${
            isOpen
              ? 'bg-[#18191E] text-white border-2 border-[#C5A059] rotate-90 scale-105 shadow-[0_0_25px_rgba(197,160,89,0.5)]'
              : 'bg-gradient-to-tr from-[#121316] via-[#1E1F24] to-[#2B2D33] text-white border border-[#C5A059]/60 hover:border-[#C5A059] hover:scale-110 shadow-[0_10px_25px_rgba(0,0,0,0.5)]'
          }`}
        >
          {isOpen ? (
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-[#DFC085] transition-transform duration-300" />
          ) : (
            <div className="relative flex items-center justify-center">
              <SocialHubIcon
                size={24}
                className="text-[#DFC085] group-hover:text-white transition-colors"
              />
              {/* Online indicator dot */}
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-[#121316] flex items-center justify-center">
                <span className="w-1 h-1 rounded-full bg-white animate-ping" />
              </span>
            </div>
          )}
        </button>
      </div>
    </div>
  );
});
