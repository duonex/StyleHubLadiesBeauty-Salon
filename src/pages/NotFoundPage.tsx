import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Home, ArrowLeft, Calendar, Phone } from 'lucide-react';
import { SALON_INFO } from '../data/salonData';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-36 pb-28 bg-[#FAF7F2] min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 text-center">
        <div className="w-16 h-16 rounded-full bg-amber-100 text-[#9B783E] flex items-center justify-center mx-auto mb-6 shadow-inner">
          <Heart className="w-8 h-8 fill-[#9B783E]/20" />
        </div>

        <span className="font-serif text-6xl sm:text-7xl font-bold text-zinc-900 block tracking-tight">
          404
        </span>

        <h1 className="font-serif text-2xl font-bold text-zinc-900 mt-2">
          Page Not Found
        </h1>

        <p className="text-zinc-600 text-xs sm:text-sm mt-3 leading-relaxed">
          The beauty page you are looking for might have moved or is temporarily unavailable. Let's get you back on track!
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-gradient-to-r from-[#9B783E] via-[#C5A059] to-[#DFC085] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:scale-105 transition-all flex items-center justify-center gap-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          <Link
            to="/services"
            className="w-full sm:w-auto px-6 py-3 rounded-full bg-white border border-zinc-200 text-zinc-800 text-xs font-semibold uppercase tracking-wider hover:bg-zinc-50 transition-all flex items-center justify-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Explore Services</span>
          </Link>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-200/80 text-xs text-zinc-500">
          <span>Need quick assistance? Call us at </span>
          <a href={`tel:${SALON_INFO.phone}`} className="font-semibold text-zinc-800 hover:text-[#9B783E]">
            {SALON_INFO.phoneDisplay}
          </a>
        </div>
      </div>
    </div>
  );
};
