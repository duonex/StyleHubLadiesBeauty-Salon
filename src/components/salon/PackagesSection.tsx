import React from 'react';
import { Crown, Check, Clock, Calendar, ArrowRight, MessageCircle, Phone } from 'lucide-react';
import { SALON_PACKAGES, SALON_INFO } from '../../data/salonData';
import type { ServicePackage } from '../../types/salon';

interface PackagesSectionProps {
  onSelectPackageForBooking: (pkg: ServicePackage) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackageForBooking
}) => {
  return (
    <section id="packages" className="py-20 sm:py-28 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/70 border border-amber-300/60 text-[#9B783E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Crown className="w-3.5 h-3.5" />
            <span>Value Bundles</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight">
            Curated Beauty & Bridal Packages
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Combine multiple signature salon treatments and enjoy exclusive bundled packages crafted for brides, celebrations, and festive makeovers. Contact us for custom combo rates.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {SALON_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`h-full rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                pkg.popular
                  ? 'bg-gradient-to-b from-white via-amber-50/30 to-white border-2 border-[#C5A059] shadow-xl hover:shadow-2xl relative'
                  : 'bg-white border border-zinc-200 shadow-md hover:shadow-xl'
              }`}
            >
                {/* Popular Ribbon */}
                {pkg.badge && (
                  <div className="absolute top-4 right-4 z-10 px-3 py-1 rounded-full bg-[#121316] text-[#DFC085] text-[11px] font-bold uppercase tracking-wider shadow-md">
                    {pkg.badge}
                  </div>
                )}

                {/* Package Image Banner */}
                <div className="relative h-44 overflow-hidden bg-zinc-100">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-white text-xs">
                    <Clock className="w-3.5 h-3.5 text-amber-300" />
                    <span>{pkg.duration}</span>
                  </div>
                </div>

                {/* Package Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#121316]">
                      {pkg.title}
                    </h3>
                    <p className="text-xs text-[#9B783E] font-medium mt-1">
                      {pkg.subtitle}
                    </p>

                    {/* Price Block */}
                    <div className="mt-4 pb-4 border-b border-zinc-100 flex items-center justify-between">
                      <div>
                        <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Package Pricing</span>
                        <span className="font-serif text-lg font-bold text-[#9B783E]">
                          Pricing on Request
                        </span>
                      </div>
                      <span className="text-[11px] px-2.5 py-1 rounded-full bg-amber-50 text-[#9B783E] border border-amber-200/80 font-medium">
                        Call / WhatsApp
                      </span>
                    </div>

                    <p className="mt-4 text-xs text-zinc-600 leading-relaxed">
                      {pkg.description}
                    </p>

                    {/* Services Included */}
                    <div className="mt-5">
                      <span className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider block mb-2">
                        Included Treatments:
                      </span>
                      <ul className="space-y-2">
                        {pkg.servicesIncluded.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-zinc-700">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Pricing Action & Booking Trigger */}
                  <div className="pt-6 mt-6 border-t border-zinc-100 space-y-2">
                    <div className="flex items-center gap-2">
                      <a
                        href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Style%20Hub,%20I%20would%20like%20to%20know%20the%20pricing%20for%20the%20${encodeURIComponent(
                          pkg.title
                        )}%20package.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>WhatsApp for Price</span>
                      </a>

                      <a
                        href={`tel:${SALON_INFO.phone}`}
                        className="p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-[#9B783E] border border-amber-200 transition-colors flex items-center justify-center"
                        title="Call for Price"
                      >
                        <Phone className="w-4 h-4" />
                      </a>
                    </div>

                    <button
                      onClick={() => onSelectPackageForBooking(pkg)}
                      className={`w-full py-2.5 rounded-xl font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 ${
                        pkg.popular
                          ? 'bg-gradient-to-r from-[#9B783E] to-[#C5A059] text-white shadow-md hover:shadow-lg'
                          : 'bg-[#121316] text-white hover:bg-zinc-800'
                      }`}
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Book Package</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
          ))}
        </div>

      </div>
    </section>
  );
};
