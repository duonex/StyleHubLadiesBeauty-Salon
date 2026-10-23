import React, { useState } from 'react';
import { MapPin, Navigation, Phone, Clock, Copy, Check, ExternalLink, HelpCircle, ChevronDown } from 'lucide-react';
import { SALON_INFO, SALON_FAQS } from '../../data/salonData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALON_INFO.address.full);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scheduleDays = [
    { day: 'Monday', hours: '9:30 AM – 8:00 PM', status: 'Open' },
    { day: 'Tuesday', hours: '9:30 AM – 8:00 PM', status: 'Open' },
    { day: 'Wednesday', hours: '9:30 AM – 8:00 PM', status: 'Open' },
    { day: 'Thursday', hours: '9:30 AM – 8:00 PM', status: 'Open' },
    { day: 'Friday', hours: '9:30 AM – 8:00 PM', status: 'Open' },
    { day: 'Saturday', hours: '9:30 AM – 8:00 PM', status: 'Open' },
    { day: 'Sunday', hours: '9:30 AM – 8:00 PM', status: 'Open' },
  ];

  return (
    <section id="location" className="py-20 sm:py-28 bg-[#FAF6F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100/80 border border-amber-300/60 text-[#9B783E] text-xs font-semibold uppercase tracking-wider mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Find Style Hub in Tirunelveli</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight">
            Visit Our Ladies Beauty Salon
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Conveniently situated in Mah Plaza on Nagercoil Road, KTC Nagar. Easy parking and accessible location.
          </p>
        </div>

        {/* 2-Column Split: Contact & Hours Card + Interactive Map & Directions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Business Details & Timings (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Address Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-lg border border-zinc-200">
              <div className="flex items-center justify-between gap-4 mb-4">
                <span className="text-xs font-bold text-[#9B783E] uppercase tracking-wider">
                  Salon Address
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Open · Closes 8:00 PM
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#121316]">
                {SALON_INFO.name}
              </h3>

              <div className="mt-4 flex items-start gap-3 text-sm text-zinc-700">
                <MapPin className="w-5 h-5 text-[#C5A059] shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-zinc-900">Mah Plaza, Pothys Nagar</p>
                  <p className="text-zinc-600">{SALON_INFO.address.road}, {SALON_INFO.address.area}</p>
                  <p className="text-zinc-600">{SALON_INFO.address.city}, {SALON_INFO.address.state} - {SALON_INFO.address.pincode}</p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-zinc-100 flex items-center justify-between gap-2">
                <button
                  onClick={handleCopyAddress}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-50 hover:bg-zinc-100 text-xs font-medium text-zinc-700 border border-zinc-200 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Address Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-zinc-500" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>

                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-sm transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>

            {/* Direct Phone & WhatsApp Callout */}
            <div className="bg-gradient-to-br from-[#121316] to-[#1E1F24] rounded-3xl p-6 text-white shadow-lg border border-zinc-800">
              <span className="text-[11px] font-bold text-[#DFC085] uppercase tracking-wider block mb-1">
                Direct Salon Line
              </span>
              <p className="text-sm text-zinc-300">
                Call us directly to check walk-in availability or book private bridal suite timings:
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${SALON_INFO.phone}`}
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#9B783E] to-[#C5A059] text-white font-bold text-sm flex items-center gap-2 shadow-md hover:scale-105 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>{SALON_INFO.phoneDisplay}</span>
                </a>
                <a
                  href={`https://wa.me/${SALON_INFO.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs flex items-center gap-2 transition-colors"
                >
                  <span>WhatsApp 24/7</span>
                </a>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-zinc-200">
              <div className="flex items-center gap-2 text-xs font-bold text-zinc-800 uppercase tracking-wider mb-3">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>Weekly Salon Timings</span>
              </div>
              <div className="divide-y divide-zinc-100 text-xs">
                {scheduleDays.map((item, idx) => (
                  <div key={idx} className="py-2.5 flex items-center justify-between">
                    <span className="font-semibold text-zinc-800">{item.day}</span>
                    <span className="text-zinc-600">{item.hours}</span>
                    <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded text-[10px]">
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-zinc-400 mt-3 italic text-center">
                * Closes at 8:00 PM daily. Last service intake at 7:15 PM.
              </p>
            </div>

          </div>

          {/* Right Column: Google Maps Interactive Embed Card (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-7 shadow-lg border border-zinc-200">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#121316]">
                  Map of Style Hub Ladies Beauty Salon
                </h3>
                <p className="text-xs text-zinc-500 mt-0.5">
                  5.0 ★ · 41 Reviews · KTC Nagar, Tirunelveli
                </p>
              </div>

              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-600 hover:underline flex items-center gap-1"
              >
                <span>Open in Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Map Frame */}
            <div className="w-full h-[400px] sm:h-[480px] rounded-2xl overflow-hidden border border-zinc-200 relative bg-zinc-100">
              <iframe
                title="Style Hub Ladies Beauty Salon Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.918928670189!2d77.7289!3d8.6987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOMKwNDEnNTUuMyJOIDc3wrA0Myc0NC4wIkU!5e0!3m2!1sen!2sin!4v1689000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Map Overlay Banner */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 border border-zinc-200 shadow-lg flex items-center justify-between gap-3">
                <div className="text-xs">
                  <span className="font-bold text-zinc-900 block">Mah Plaza, Nagarcoil Road</span>
                  <span className="text-zinc-500">Pothys Nagar, KTC Nagar, Tirunelveli</span>
                </div>
                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs shrink-0 flex items-center gap-1.5 shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Navigate</span>
                </a>
              </div>
            </div>

            {/* Nearby Distance Guide */}
            <div className="mt-4 pt-4 border-t border-zinc-100 grid grid-cols-3 gap-2 text-center text-xs">
              <div className="p-2 rounded-xl bg-zinc-50">
                <span className="text-zinc-400 block text-[10px]">Landmark</span>
                <span className="font-semibold text-zinc-800">Mah Plaza</span>
              </div>
              <div className="p-2 rounded-xl bg-zinc-50">
                <span className="text-zinc-400 block text-[10px]">Highway</span>
                <span className="font-semibold text-zinc-800">Nagercoil Rd</span>
              </div>
              <div className="p-2 rounded-xl bg-zinc-50">
                <span className="text-zinc-400 block text-[10px]">Locality</span>
                <span className="font-semibold text-zinc-800">KTC Nagar</span>
              </div>
            </div>

          </div>

        </div>

        {/* Client FAQs Accordion */}
        <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-zinc-200">
          <div className="flex items-center gap-2 text-xs font-bold text-[#9B783E] uppercase tracking-wider mb-6">
            <HelpCircle className="w-4 h-4" />
            <span>Frequently Asked Questions</span>
          </div>

          <div className="space-y-3">
            {SALON_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="border border-zinc-100 rounded-2xl overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-serif text-base sm:text-lg font-bold text-[#121316] hover:text-[#9B783E] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180 text-[#9B783E]' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-zinc-600 leading-relaxed border-t border-zinc-50 pt-2 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
