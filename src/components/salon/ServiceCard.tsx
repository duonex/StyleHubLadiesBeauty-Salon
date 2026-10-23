import React from 'react';
import { Clock, MessageCircle, ArrowRight, Star } from 'lucide-react';
import { SALON_INFO } from '../../data/salonData';
import type { SalonService } from '../../types/salon';

interface ServiceCardProps {
  service: SalonService;
  onBookService?: (service: SalonService) => void;
  categoryOrder?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = React.memo(({
  service,
  categoryOrder
}) => {
  const whatsappBookingQuery =
    `🌸 *New Appointment Booking - Style Hub Ladies Beauty Salon*\n\n` +
    `Hello Style Hub,\n` +
    `I would like to book an appointment for:\n` +
    `✨ Service: *${service.name}*\n` +
    `🏷️ Category: ${service.categoryName}\n` +
    `⏱️ Duration: ${service.duration}\n\n` +
    `Please share available time slots and confirmation. Thank you!`;
  const whatsappBookingUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappBookingQuery)}`;

  const whatsappPriceQuery = `Hello Style Hub Beauty Salon, I would like to know the latest pricing and availability for *${service.name}* (${service.categoryName}).`;
  const whatsappPriceUrl = `https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(whatsappPriceQuery)}`;

  return (
    <div className="group relative bg-white rounded-3xl border border-zinc-200/90 hover:border-[#C5A059]/60 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(197,160,89,0.12)] hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between overflow-hidden">
      
      {/* Top Media Header */}
      <div>
        <div className="relative h-56 sm:h-60 overflow-hidden bg-zinc-100">
          <img
            src={service.image}
            alt={service.name}
            width={400}
            height={240}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          
          {/* Rich Multi-stop Dark Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />

          {/* Top Row Badges */}
          <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
            {/* Category Tag */}
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold tracking-wider uppercase shadow-sm">
              {categoryOrder && (
                <span className="text-[#DFC085] font-semibold">#{categoryOrder}</span>
              )}
              <span>{service.categoryName}</span>
            </span>

            {/* Trending / Popular / Special Tag */}
            {(service.tag || service.popular) && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 to-[#C5A059] text-white text-[11px] font-bold tracking-wide shadow-md">
                <Star className="w-3 h-3 fill-white" />
                <span>{service.tag || 'Popular'}</span>
              </span>
            )}
          </div>

          {/* Bottom Row Information Pills */}
          <div className="absolute bottom-3 left-3.5 right-3.5 flex items-center justify-between text-white text-xs font-medium">
            {/* Duration Pill */}
            <div className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 text-[11px] shadow-sm">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>{service.duration}</span>
            </div>

            {/* Pricing on Request Gold Capsule */}
            <div className="inline-flex items-center gap-1 bg-gradient-to-r from-[#9B783E]/90 to-[#C5A059]/90 text-white text-[11px] font-bold tracking-wide px-3 py-1.5 rounded-full border border-amber-300/40 shadow-sm">
              <span>Pricing on Request</span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {/* Service Title */}
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-zinc-900 group-hover:text-[#9B783E] transition-colors leading-tight">
            {service.name}
          </h3>

          {/* Service Description */}
          <p className="text-zinc-600 text-xs sm:text-sm mt-2 leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>

      {/* Action Area & Direct WhatsApp Booking */}
      <div className="p-6 pt-0 mt-auto">
        <div className="pt-4 border-t border-zinc-100 flex flex-col gap-2.5">
          
          {/* Primary CTA: Direct Book on WhatsApp */}
          <a
            href={whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-700 to-emerald-600 hover:from-emerald-500 hover:via-emerald-600 hover:to-emerald-500 text-white text-xs font-bold uppercase tracking-wider shadow-[0_4px_14px_rgba(16,185,129,0.35)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group/btn"
            title={`Book ${service.name} directly on WhatsApp`}
          >
            <MessageCircle className="w-4 h-4 shrink-0 fill-white/20" />
            <span>Book on WhatsApp</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-200 group-hover/btn:translate-x-1 transition-transform" />
          </a>

          {/* Secondary Action: Direct WhatsApp Price Inquiry */}
          <a
            href={whatsappPriceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-zinc-50 hover:bg-emerald-50/70 text-zinc-700 hover:text-emerald-800 border border-zinc-200/80 hover:border-emerald-300/80 text-xs font-semibold transition-all duration-200 flex items-center justify-center gap-1.5"
            title={`Inquire pricing for ${service.name} on WhatsApp`}
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span>WhatsApp for Price</span>
          </a>

        </div>
      </div>

    </div>
  );
});
