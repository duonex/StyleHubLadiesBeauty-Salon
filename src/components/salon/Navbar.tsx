import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Phone, Clock, MapPin, Star, Menu, X, MessageCircle, Calendar } from 'lucide-react';
import { SALON_INFO } from '../../data/salonData';
import { Logo } from '../common/Logo';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from '../common/SocialIcons';

interface NavbarProps {
  onOpenBooking: () => void;
}

const navLinks = [
  { name: 'Home', to: '/' },
  { name: 'Services', to: '/services' },
  { name: 'Bridal Studio', to: '/bridal' },
  { name: 'Gallery', to: '/gallery' },
  { name: 'About', to: '/about' },
  { name: 'Contact', to: '/contact' },
];

export const Navbar: React.FC<NavbarProps> = React.memo(({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page navigation and lock body scroll when open
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notification Announcement Bar */}
      <div className="bg-[#121316] text-white/90 text-xs py-2 px-4 border-b border-[#C5A059]/20 hidden sm:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href={SALON_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-amber-300 font-medium hover:text-amber-200 transition-colors"
            >
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>5.0 Google Rated (41 Reviews)</span>
            </a>
            <span className="flex items-center gap-1.5 text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Open Daily · Closes 8:00 PM</span>
            </span>
            <Link
              to="/contact"
              className="flex items-center gap-1.5 text-zinc-300 hover:text-white transition-colors hidden md:flex"
            >
              <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Mah Plaza, KTC Nagar, Tirunelveli</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="flex items-center gap-1.5 text-amber-200 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span className="font-semibold">{SALON_INFO.phoneDisplay}</span>
            </a>
            <span className="text-zinc-600">|</span>
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Style%20Hub%20Ladies%20Beauty%20Salon,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Glassmorphic Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled || location.pathname !== '/'
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-zinc-200/80'
            : 'bg-[#0B0C0E]/50 backdrop-blur-md py-3.5 border-b border-white/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & Brand Identity */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-full bg-[#121316] p-1.5 border border-[#C5A059]/40 shadow-md group-hover:border-[#C5A059] group-hover:scale-105 group-hover:shadow-[0_0_15px_rgba(197,160,89,0.3)] transition-all duration-300 flex items-center justify-center shrink-0">
              <Logo className="w-full h-full" variant="gold" showGlow />
            </div>
            <div>
              <span
                className={`block font-serif text-lg sm:text-xl font-bold tracking-wider uppercase leading-tight transition-colors ${
                  isScrolled || location.pathname !== '/'
                    ? 'text-[#121316] group-hover:text-[#9B783E]'
                    : 'text-white group-hover:text-[#DFC085]'
                }`}
              >
                Style Hub
              </span>
              <span
                className={`block text-[10px] sm:text-[11px] font-sans tracking-widest uppercase font-semibold ${
                  isScrolled || location.pathname !== '/' ? 'text-[#9B783E]' : 'text-[#DFC085]'
                }`}
              >
                Ladies Beauty Salon
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-5 xl:space-x-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `text-sm font-medium transition-all relative py-1 ${
                    isActive
                      ? isScrolled || location.pathname !== '/'
                        ? 'text-[#9B783E] font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#C5A059]'
                        : 'text-[#DFC085] font-semibold after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#DFC085]'
                      : isScrolled || location.pathname !== '/'
                      ? 'text-zinc-700 hover:text-[#9B783E] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300'
                      : 'text-zinc-200 hover:text-[#DFC085] after:content-[\'\'] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#DFC085] hover:after:w-full after:transition-all after:duration-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Right Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className={`p-2.5 rounded-full border transition-colors ${
                isScrolled || location.pathname !== '/'
                  ? 'bg-amber-50 text-[#9B783E] border-amber-200/60 hover:bg-amber-100'
                  : 'bg-white/10 text-[#DFC085] border-white/20 hover:bg-white/20'
              }`}
              title="Call Salon"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#9B783E] via-[#C5A059] to-[#DFC085] text-white text-xs font-semibold tracking-wider uppercase shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 rounded-full bg-gradient-to-r from-[#9B783E] to-[#C5A059] text-white text-[11px] font-semibold tracking-wide"
            >
              Book
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${
                mobileMenuOpen
                  ? 'text-white bg-white/15'
                  : isScrolled || location.pathname !== '/'
                  ? 'text-zinc-700 hover:text-black hover:bg-zinc-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu & Backdrop */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop Overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 top-[56px] sm:top-[64px] bg-black/70 backdrop-blur-xs z-40 lg:hidden animate-in fade-in duration-200"
            aria-hidden="true"
          />

          {/* Luxury Obsidian Drawer */}
          <div className="lg:hidden fixed top-[56px] sm:top-[64px] left-0 right-0 z-50 bg-[#121316] text-white border-b border-[#C5A059]/40 shadow-2xl px-5 py-5 animate-in slide-in-from-top duration-300 max-h-[calc(100vh-68px)] overflow-y-auto">
            <div className="flex flex-col space-y-3.5">
              
              {/* Salon Identity Strip */}
              {/* <div className="pb-3 border-b border-white/10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#18191D] p-1.5 border border-[#C5A059]/50 flex items-center justify-center shrink-0 shadow-md">
                  <Logo className="w-full h-full" variant="gold" />
                </div>
                <div>
                  <p className="text-xs font-serif font-bold text-white uppercase tracking-wider">
                    Style Hub Ladies Salon
                  </p>
                 
                </div>
              </div> */}

              {/* High-Contrast Luxury Navigation Links */}
              <div className="flex flex-col space-y-2 pt-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-sm py-3 px-4 rounded-xl transition-all flex items-center justify-between border cursor-pointer ${
                        isActive
                          ? 'bg-gradient-to-r from-[#C5A059]/25 via-[#C5A059]/15 to-transparent text-[#DFC085] font-bold border-[#C5A059]/70 shadow-sm ring-1 ring-[#C5A059]/30'
                          : 'bg-white/[0.05] hover:bg-white/[0.09] text-white hover:text-[#DFC085] border-white/10 hover:border-[#C5A059]/40 font-medium'
                      }`
                    }
                  >
                    <span className="tracking-wide">{link.name}</span>
                    <span className="text-xs text-[#DFC085] font-bold transition-transform duration-200">→</span>
                  </NavLink>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenBooking();
                  }}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#9B783E] via-[#C5A059] to-[#DFC085] text-white text-xs font-bold tracking-wider uppercase text-center shadow-lg hover:shadow-[#C5A059]/20 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-[0.99]"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Appointment</span>
                </button>

                <div className="grid grid-cols-2 gap-2 mt-0.5">
                  <a
                    href={`tel:${SALON_INFO.phone}`}
                    className="py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold text-center border border-white/15 flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#DFC085]" />
                    <span>Call Us</span>
                  </a>
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Style%20Hub,%20I%20would%20like%20to%20book%20an%20appointment.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold text-center shadow-sm flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Mobile Social Links Bar */}
                <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-xs text-zinc-400 font-medium">Follow Style Hub:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={SALON_INFO.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/10 hover:bg-pink-600/30 text-white border border-white/10 hover:border-pink-500/50 transition-colors cursor-pointer"
                      title="Instagram"
                    >
                      <InstagramIcon size={18} />
                    </a>
                    <a
                      href={SALON_INFO.social.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/10 hover:bg-blue-600/30 text-white border border-white/10 hover:border-blue-500/50 transition-colors cursor-pointer"
                      title="Facebook"
                    >
                      <FacebookIcon size={18} />
                    </a>
                    <a
                      href={SALON_INFO.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl bg-white/10 hover:bg-emerald-600/30 text-white border border-white/10 hover:border-emerald-500/50 transition-colors cursor-pointer"
                      title="WhatsApp"
                    >
                      <WhatsAppIcon size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
});
