import React from 'react';
import { Crown, Check, Heart, Calendar, Phone } from 'lucide-react';
import { SALON_INFO } from '../../data/salonData';

interface BridalStudioSectionProps {
  onOpenBooking: () => void;
}

export const BridalStudioSection: React.FC<BridalStudioSectionProps> = ({ onOpenBooking }) => {
  const bridalHighlights = [
    {
      title: "Muhurtham & Saree Draping",
      desc: "Traditional Kanjeevaram styling with crisp pleating, pin security, and all-day comfort.",
    },
    {
      title: "HD & Airbrush Bridal Makeup",
      desc: "Humidity-proof, sweat-proof base that looks radiant under 4K video and flash photography.",
    },
    {
      title: "Bridal Jada & Floral Art",
      desc: "Authentic temple jewelry jada billalu, fragrant fresh jasmine strands, and contemporary braids.",
    },
    {
      title: "Pre-Bridal Radiance Rituals",
      desc: "24K Gold facials, full-body polishing, and Rica de-tan packages tailored 1–3 weeks before wedding.",
    },
  ];

  return (
    <section id="bridal" className="py-20 sm:py-28 bg-[#121316] text-white relative overflow-hidden">
      {/* Ambient Gold Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-[#893B4D]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C5A059]/20 border border-[#C5A059]/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Crown className="w-3.5 h-3.5" />
            <span>Style Hub Bridal Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold tracking-tight text-white">
            Tirunelveli's Crown for Every Bride
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-300">
            From auspicious Muhurtham dawns to high-glam evening receptions, our bridal master artists 
            create timeless royalty for your most cherished celebration.
          </p>
        </div>

        {/* 2-Column Split: Visual Card + Bridal Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Bridal Showcase Card (5 cols) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-gradient-to-b from-zinc-800 to-zinc-900 group hover:shadow-amber-500/10 transition-shadow">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop"
                  alt="Style Hub Bridal Artistry"
                  className="w-full h-[520px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C5A059] text-black text-xs font-bold uppercase tracking-wider mb-2">
                    <Crown className="w-3.5 h-3.5" />
                    <span>Royal Bridal Suite</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    Bespoke Muhurtham & Reception
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1 line-clamp-2">
                    Complete transformation with high-definition makeup, temple floral braid setting, and saree perfection.
                  </p>
                  
                  <div className="mt-4 pt-4 border-t border-white/20 flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-zinc-400 block uppercase">Bridal Packages</span>
                      <span className="text-sm font-semibold text-amber-300">Call / WhatsApp for Quote</span>
                    </div>
                    <button
                      onClick={onOpenBooking}
                      className="px-4 py-2 rounded-xl bg-white text-black font-semibold text-xs hover:bg-amber-100 transition-colors"
                    >
                      Book Consultation
                    </button>
                  </div>
                </div>
              </div>
          </div>

          {/* Right Column: Features & Highlights (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {bridalHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-5 border border-white/10 hover:border-[#C5A059]/50 transition-colors"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/20 flex items-center justify-center text-[#DFC085] mb-3">
                    <Check className="w-4 h-4" />
                  </div>
                  <h4 className="font-serif text-lg font-bold text-amber-100 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Testimonial Quote Pill */}
            <div className="bg-gradient-to-r from-[#893B4D]/30 to-[#C5A059]/20 border border-[#C5A059]/30 rounded-2xl p-5 text-sm">
              <div className="flex items-center gap-2 text-rose-300 font-semibold mb-2">
                <Heart className="w-4 h-4 fill-rose-300" />
                <span>Bride Priya M. on Style Hub</span>
              </div>
              <p className="italic text-zinc-200 text-xs sm:text-sm">
                “Great place for hairstyle and makeup, amazing service, and friendly staff. They made me feel like an absolute queen on my special day!”
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBooking}
                className="px-8 py-4 rounded-full bg-gradient-to-r from-[#DFC085] via-[#C5A059] to-[#9B783E] text-black font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve Bridal Dates</span>
              </button>

              <a
                href={`tel:${SALON_INFO.phone}`}
                className="px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white font-medium text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-300" />
                <span>Call for Bridal Trial: {SALON_INFO.phoneDisplay}</span>
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
