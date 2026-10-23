import React from 'react';
import {
  Crown,
  ShieldCheck,
  Heart,
  Star,
  Users,
  Award,
  CheckCircle2,
  Calendar,
  Phone,
  MessageCircle,
  MapPin,
  Clock
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import { Logo } from '../components/common/Logo';

interface AboutPageProps {
  onOpenBooking: () => void;
}

const values = [
  {
    icon: Crown,
    title: '100% Certified Female Stylists',
    desc: 'Our team consists entirely of well-trained female beauty professionals who understand your unique hair, skin, and styling needs.'
  },
  {
    icon: ShieldCheck,
    title: 'Hospital-Grade Sterilization',
    desc: 'We strictly sterilize metallic implements with UV/autoclave units and utilize single-use disposables for waxing, pedicures, and facials.'
  },
  {
    icon: Award,
    title: 'Authentic Luxury Brands',
    desc: 'We never compromise on product quality. We exclusively use L\'Oréal Professionnel, MAC Cosmetics, Huda Beauty, Cheryl\'s, and Lotus Professional.'
  },
  {
    icon: Heart,
    title: 'Comfortable Private Sanctuary',
    desc: 'An ambient, peaceful retreat in Mah Plaza with dedicated private bridal suites designed for comfort and personalized beauty care.'
  }
];

const milestones = [
  { number: '5.0 ★', label: 'Google Rating', sub: '41 Verified Reviews' },
  { number: '1,000+', label: 'Happy Clients', sub: 'Across Tirunelveli' },
  { number: '18+', label: 'Signature Services', sub: 'Hair, Skin, Bridal & Nails' },
  { number: '7 Days', label: 'Open Weekly', sub: '9:30 AM – 8:00 PM' },
];

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBooking }) => {

  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Hero */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-[#9B783E] text-xs font-semibold uppercase tracking-wider mb-4">
            <Star className="w-3.5 h-3.5 fill-[#9B783E]" />
            <span>Our Heritage & Philosophy</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            Elevating Women’s Beauty Care in Tirunelveli
          </h1>

          <p className="text-zinc-600 text-sm sm:text-base mt-4 leading-relaxed">
            Welcome to Style Hub Ladies Beauty Salon. Located at Mah Plaza, KTC Nagar, we are passionate about providing every woman with a luxurious, hygienic, and personalized salon experience.
          </p>
        </div>

        {/* Story Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-14 shadow-sm border border-zinc-200/90 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-zinc-700 text-sm sm:text-base leading-relaxed">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#9B783E] block">
                The Style Hub Journey
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 leading-snug">
                Crafted with Passion, Cleanliness & Precision
              </h2>
              <p>
                Founded with a singular vision to bridge the gap between high-end metropolitan salon standards and warm, authentic local care in Tirunelveli, <strong>Style Hub</strong> has grown into the city’s top-rated destination for women's beauty.
              </p>
              <p>
                Whether it is a deluxe pedicure after a demanding week, a 24K Gold Hydra facial to rejuvenate tired skin, or the crowning glory of a South Indian Muhurtham bridal makeover, our master female artists listen attentively to your wishes.
              </p>
              <p>
                Every client is welcomed into an impeccably sanitized environment where you are treated with utmost respect, comfort, and personalized care.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-[#9B783E] via-[#C5A059] to-[#DFC085] text-white text-xs font-semibold uppercase tracking-wider shadow hover:scale-105 transition-all"
                >
                  Book an Appointment
                </button>
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="px-6 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-800 text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  Contact Us
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl border border-zinc-200">
                <img
                  src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000&auto=format&fit=crop"
                  alt="Style Hub Ladies Salon Studio"
                  width={600}
                  height={400}
                  decoding="async"
                  className="w-full h-[400px] object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-[#121316] text-white p-4 sm:p-5 rounded-2xl shadow-xl border border-[#C5A059]/40 hidden sm:flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full bg-white/10 p-1.5 border border-[#C5A059]/50 flex items-center justify-center shrink-0 shadow">
                  <Logo className="w-full h-full" variant="gold" showGlow />
                </div>
                <div>
                  <p className="font-serif text-xl sm:text-2xl font-bold text-amber-300">5.0 ★ Rating</p>
                  <p className="text-xs text-zinc-400">100% 5-Star Reviews on Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Milestones Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-3xl border border-zinc-200 shadow-sm text-center"
            >
              <span className="font-serif text-3xl sm:text-4xl font-bold text-[#9B783E] block">
                {m.number}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-zinc-900 block mt-1">
                {m.label}
              </span>
              <span className="text-[11px] text-zinc-500 block mt-0.5">
                {m.sub}
              </span>
            </div>
          ))}
        </div>

        {/* 4 Pillars of Excellence */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-zinc-900">
              Our 4 Pillars of Excellence
            </h2>
            <p className="text-zinc-600 text-sm mt-2">
              Every appointment is guided by our strict commitments to safety, quality, and care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-zinc-200/90 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#9B783E] flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-lg font-bold text-zinc-900 mb-2">
                      {v.title}
                    </h3>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Product Brands We Trust */}
        <div className="bg-[#121316] text-white rounded-3xl p-8 sm:p-12 border border-[#C5A059]/30 text-center shadow-xl">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold">
            Premium Brands We Use & Trust
          </h2>
          <p className="text-zinc-400 text-xs sm:text-sm max-w-xl mx-auto mt-2">
            We partner with globally recognized dermatological and haircare brands to ensure optimal results and safety for your hair and skin.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mt-8">
            {['L\'Oréal Professionnel', 'MAC Cosmetics', 'Huda Beauty', 'Rica Waxing', 'Cheryl\'s Dermacare', 'Lotus Professional'].map((brand, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xs font-semibold text-amber-200 tracking-wider text-center"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
