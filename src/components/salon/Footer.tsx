import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Star, MessageCircle, ChevronRight, Calendar } from 'lucide-react';
import { SALON_INFO } from '../../data/salonData';
import { Logo } from '../common/Logo';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'Services', to: '/services' },
    { name: 'Bridal Studio', to: '/bridal' },
    { name: 'Gallery', to: '/gallery' },
    { name: 'About', to: '/about' },
    { name: 'Contact & Directions', to: '/contact' },
  ];

  const popularServices = [
    { name: 'Bridal Makeup & Saree Draping', to: '/bridal' },
    { name: '24K Gold & Hydra Facials', to: '/services' },
    { name: 'Hair Straightening & Keratin', to: '/services' },
    { name: 'Layer, Step & Feather Hair Cuts', to: '/services' },
    { name: 'Hot Oil Massage & Hair Spa', to: '/services' },
    { name: 'Eyebrow & Face Threading', to: '/services' },
    { name: 'D-Tan & Herbal Bleach Care', to: '/services' },
    { name: 'Full Body Rica & Honey Wax', to: '/services' },
  ];

  return (
    <footer className="bg-[#121316] text-white pt-16 pb-12 border-t border-[#C5A059]/30 relative overflow-hidden">
      {/* Decorative Gold Glow Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#DFC085]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-zinc-800">
          {/* Column 1: Brand, Ratings & Social Media Button */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full bg-[#18191E] p-2 border border-[#C5A059]/40 flex items-center justify-center text-white shadow-lg group-hover:border-[#C5A059] group-hover:shadow-[0_0_20px_rgba(197,160,89,0.3)] transition-all shrink-0">
                <Logo className="w-full h-full" variant="gold" showGlow />
              </div>
              <div>
                <span className="block font-serif text-lg font-bold tracking-wider text-white uppercase group-hover:text-[#DFC085] transition-colors">
                  Style Hub
                </span>
                <span className="block text-[10px] font-sans tracking-widest text-[#DFC085] uppercase">
                  Ladies Beauty Salon
                </span>
              </div>
            </Link>

            <p className="text-zinc-400 text-sm leading-relaxed">
              Tirunelveli's premier luxury salon dedicated exclusively to women. Delivering bespoke bridal transformations, hair styling, dermacare facials, and pedicure care in KTC Nagar.
            </p>

            {/* Google Rating Badge */}
            <div className="inline-flex items-center gap-3 p-3 rounded-2xl bg-zinc-900/90 border border-[#C5A059]/30 shadow-inner">
              <div className="w-9 h-9 rounded-xl bg-white text-zinc-900 flex items-center justify-center font-bold text-base shadow">
                G
              </div>
              <div>
                <div className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <span className="font-bold text-sm text-white">{SALON_INFO.rating}.0</span>
                  <span className="text-xs text-zinc-400">({SALON_INFO.reviewCount} Reviews)</span>
                </div>
                <span className="text-[11px] text-zinc-400 block font-medium">
                  100% 5-Star Customer Satisfaction
                </span>
              </div>
            </div>

          
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#DFC085] mb-5 flex items-center gap-2">
             
              <span>Explore Website</span>
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.to}
                    className="text-sm text-zinc-300 hover:text-[#DFC085] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Popular Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#DFC085] mb-5 flex items-center gap-2">
             
              <span>Popular Services</span>
            </h4>
            <ul className="space-y-2.5">
              {popularServices.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.to}
                    className="text-sm text-zinc-300 hover:text-[#DFC085] transition-colors flex items-center gap-2 group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#C5A059] group-hover:translate-x-1 transition-transform" />
                    <span>{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-widest text-[#DFC085] mb-5 flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#C5A059]" />
              <span>Visit & Contact</span>
            </h4>

            <div className="space-y-3 text-sm text-zinc-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#DFC085] flex-shrink-0 mt-1" />
                <p className="leading-snug">
                  Mah Plaza, Pothys Nagar, Nagercoil Road, KTC Nagar, Tirunelveli, Tamil Nadu 627011
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#DFC085] flex-shrink-0" />
                <p>Open Daily · 09:30 AM – 08:00 PM</p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#DFC085] flex-shrink-0" />
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="font-semibold text-white hover:text-amber-300 transition-colors"
                >
                  {SALON_INFO.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="pt-2 flex flex-col gap-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#9B783E] via-[#C5A059] to-[#DFC085] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Style%20Hub,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 border border-emerald-500/40 text-xs font-medium flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom copyright & Modern Social Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Style Hub Ladies Beauty Salon. All rights reserved.</p>
          
          {/* Quick Modern Social Icons */}
          

         
        </div>
      </div>
    </footer>
  );
};
