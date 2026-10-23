import React, { useState } from 'react';
import { Star, CheckCircle, Navigation, Phone, Share2, Bookmark, ExternalLink, Heart } from 'lucide-react';
import { SALON_INFO, GOOGLE_REVIEWS } from '../../data/salonData';

export const GoogleSummarySection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Style Hub Ladies Beauty Salon',
        text: 'Check out Style Hub Ladies Beauty Salon in Tirunelveli - 5.0 Star rated on Google!',
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleSave = () => {
    setSaved(!saved);
  };

  return (
    <section id="reviews" className="py-20 bg-white relative overflow-hidden border-y border-zinc-200/80">
      {/* Background Subtle Ambient Circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-amber-50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-rose-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 text-[#9B783E] text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-200/60">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Verified Google Reviews</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight">
            100% 5-Star Rated by Women of Tirunelveli
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Real customer feedback from Google Maps. 41 out of 41 clients gave us a perfect 5-star rating for hospitality, expertise, and hygiene.
          </p>
        </div>

        {/* Google Profile Card + Testimonials Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Authentic Google Business Summary Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-zinc-200/90 relative overflow-hidden hover:shadow-2xl transition-shadow">
                
                {/* Google Official Color Bar */}
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]" />

                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">
                      Google Business Profile
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#121316] leading-snug">
                      {SALON_INFO.name}
                    </h3>
                    <p className="text-sm font-medium text-[#9B783E] mt-0.5">
                      {SALON_INFO.category}
                    </p>
                  </div>

                  {/* Google G Logo icon */}
                  <div className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center shrink-0">
                    <span className="font-bold text-lg font-sans">
                      <span className="text-[#4285F4]">G</span>
                      <span className="text-[#EA4335]">o</span>
                      <span className="text-[#FBBC05]">o</span>
                      <span className="text-[#4285F4]">g</span>
                      <span className="text-[#34A853]">l</span>
                      <span className="text-[#EA4335]">e</span>
                    </span>
                  </div>
                </div>

                {/* Rating Badge Display */}
                <div className="flex items-center gap-4 py-4 px-4 bg-amber-50/60 rounded-2xl border border-amber-100 mb-6">
                  <div className="text-center shrink-0 pr-4 border-r border-amber-200/60">
                    <div className="text-4xl sm:text-5xl font-serif font-bold text-[#121316]">
                      5.0
                    </div>
                    <div className="flex items-center justify-center text-amber-500 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-xs text-zinc-500 block mt-1 font-medium">
                      ({SALON_INFO.reviewCount} Reviews)
                    </span>
                  </div>

                  {/* Rating Breakdown Bar Chart */}
                  <div className="flex-1 space-y-1.5 text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 font-medium text-zinc-600">5</span>
                      <div className="flex-1 h-2 rounded-full bg-zinc-200 overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full w-full" />
                      </div>
                      <span className="w-6 text-right font-semibold text-zinc-700">41</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="w-2 font-medium text-zinc-400">4</span>
                      <div className="flex-1 h-2 rounded-full bg-zinc-200 overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full w-0" />
                      </div>
                      <span className="w-6 text-right text-zinc-400">0</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="w-2 font-medium text-zinc-400">3</span>
                      <div className="flex-1 h-2 rounded-full bg-zinc-200 overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full w-0" />
                      </div>
                      <span className="w-6 text-right text-zinc-400">0</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="w-2 font-medium text-zinc-400">2</span>
                      <div className="flex-1 h-2 rounded-full bg-zinc-200 overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full w-0" />
                      </div>
                      <span className="w-6 text-right text-zinc-400">0</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="w-2 font-medium text-zinc-400">1</span>
                      <div className="flex-1 h-2 rounded-full bg-zinc-200 overflow-hidden">
                        <div className="h-full bg-amber-400 rounded-full w-0" />
                      </div>
                      <span className="w-6 text-right text-zinc-400">0</span>
                    </div>
                  </div>
                </div>

                {/* Google Quick Action Buttons */}
                <div className="grid grid-cols-4 gap-2 mb-6">
                  <a
                    href={SALON_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors"
                  >
                    <Navigation className="w-4 h-4 mb-1" />
                    <span className="text-[11px] font-semibold">Directions</span>
                  </a>

                  <a
                    href={`tel:${SALON_INFO.phone}`}
                    className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 transition-colors"
                  >
                    <Phone className="w-4 h-4 mb-1" />
                    <span className="text-[11px] font-semibold">Call</span>
                  </a>

                  <button
                    onClick={handleSave}
                    className={`flex flex-col items-center justify-center p-2.5 rounded-xl transition-colors ${
                      saved ? 'bg-amber-100 text-amber-800' : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200'
                    }`}
                  >
                    <Bookmark className={`w-4 h-4 mb-1 ${saved ? 'fill-amber-600' : ''}`} />
                    <span className="text-[11px] font-semibold">{saved ? 'Saved' : 'Save'}</span>
                  </button>

                  <button
                    onClick={handleShare}
                    className="flex flex-col items-center justify-center p-2.5 rounded-xl bg-zinc-100 text-zinc-700 hover:bg-zinc-200 transition-colors"
                  >
                    <Share2 className="w-4 h-4 mb-1" />
                    <span className="text-[11px] font-semibold">{copied ? 'Copied!' : 'Share'}</span>
                  </button>
                </div>

                {/* Address & Status Pill */}
                <div className="space-y-2.5 text-xs text-zinc-600 border-t border-zinc-100 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-emerald-700 font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                      Open · Closes 8:00 PM
                    </span>
                    <a
                      href={SALON_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline flex items-center gap-1"
                    >
                      <span>View on Google</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                  <p className="line-clamp-2">
                    {SALON_INFO.address.full}
                  </p>
                </div>

              </div>
            </div>

          {/* Right Column: Highlighted Customer Testimonials (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Primary Quote Cards directly from prompt */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              {/* Review 1 */}
              <div className="bg-gradient-to-br from-amber-50/50 to-white rounded-2xl p-6 border border-amber-200/60 shadow-sm relative">
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="font-serif italic text-lg sm:text-xl font-bold text-[#121316] leading-snug mb-3">
                  “Friendly staff, excellent and perfect service”
                </blockquote>
                <div className="flex items-center justify-between text-xs text-zinc-500 pt-2 border-t border-amber-100">
                  <span className="font-semibold text-zinc-700">Kavitha R.</span>
                  <span className="flex items-center gap-1 text-emerald-600 font-medium">
                    <CheckCircle className="w-3.5 h-3.5" /> Verified Client
                  </span>
                </div>
              </div>

              {/* Review 2 */}
              <div className="bg-gradient-to-br from-rose-50/40 to-white rounded-2xl p-6 border border-rose-200/60 shadow-sm relative">
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <blockquote className="font-serif italic text-lg sm:text-xl font-bold text-[#121316] leading-snug mb-3">
                  “Good service. Friendly. Just go for it❤️”
                </blockquote>
                <div className="flex items-center justify-between text-xs text-zinc-500 pt-2 border-t border-rose-100">
                  <span className="font-semibold text-zinc-700">Deepa S.</span>
                  <span className="flex items-center gap-1 text-rose-500 font-medium">
                    <Heart className="w-3.5 h-3.5 fill-rose-500" /> Loved It
                  </span>
                </div>
              </div>

            </div>

            {/* Review 3 - Full Width Highlight */}
            <div className="bg-gradient-to-r from-zinc-900 to-[#1E1F24] rounded-2xl p-6 sm:p-7 text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/15 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center justify-between gap-4 mb-3">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-semibold text-amber-200 border border-white/15">
                  Hairstyle & Makeup Specialist
                </span>
              </div>

              <blockquote className="font-serif italic text-xl sm:text-2xl font-semibold leading-relaxed text-amber-50 mb-4">
                “Great place for hairstyle and makeup, amazing service, and friendly staff”
              </blockquote>

              <div className="flex items-center justify-between text-xs text-zinc-400 pt-3 border-t border-white/10">
                <div>
                  <span className="font-medium text-white block">Priya M.</span>
                  <span className="text-[11px] text-zinc-400">Bridal Make-up & Hair Transformation</span>
                </div>
                <span className="flex items-center gap-1 text-emerald-400 font-medium">
                  <CheckCircle className="w-3.5 h-3.5" /> 5.0 Google Review
                </span>
              </div>
            </div>

            {/* Additional Reviews Carousel / Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GOOGLE_REVIEWS.slice(3).map((rev) => (
                <div key={rev.id} className="bg-zinc-50 rounded-2xl p-5 border border-zinc-200 text-xs space-y-2">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-zinc-700 italic line-clamp-3">
                    "{rev.content}"
                  </p>
                  <div className="flex items-center justify-between text-zinc-500 pt-1 text-[11px]">
                    <span className="font-semibold text-zinc-700">{rev.author}</span>
                    <span>{rev.timeAgo}</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
