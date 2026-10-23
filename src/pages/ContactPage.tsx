import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  MessageCircle,
  Star,
  Send,
  Navigation,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { SALON_INFO, SALON_CATEGORIES } from '../data/salonData';
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from '../components/common/SocialIcons';

interface ContactPageProps {
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBooking }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceOfInterest, setServiceOfInterest] = useState('General Inquiry');
  const [preferredDate, setPreferredDate] = useState('');
  const [message, setMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hello Style Hub Salon,%0A%0A*Name:* ${name}%0A*Phone:* ${phone}%0A*Service:* ${serviceOfInterest}%0A*Preferred Date:* ${preferredDate || 'Flexible'}%0A*Message:* ${message || 'I would like to inquire about appointments.'}`;
    window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-[#9B783E] text-xs font-semibold uppercase tracking-wider mb-4">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us in Tirunelveli</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            Contact & Location Details
          </h1>

          <p className="text-zinc-600 text-sm sm:text-base mt-4 leading-relaxed">
            We are conveniently located at Mah Plaza, Pothys Nagar, Nagercoil Road, KTC Nagar, Tirunelveli. Feel free to call, WhatsApp, or drop by!
          </p>
        </div>

        {/* 4 Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: Phone */}
          <div className="bg-white p-6 rounded-3xl border border-zinc-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#9B783E] flex items-center justify-center mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-zinc-900">Direct Phone</h3>
              <p className="text-xs text-zinc-500 mt-1">Speak with our front desk stylist</p>
              <p className="font-bold text-sm text-zinc-900 mt-3">{SALON_INFO.phoneDisplay}</p>
            </div>
            <div className="mt-6">
              <a
                href={`tel:${SALON_INFO.phone}`}
                className="w-full py-2.5 rounded-xl bg-amber-50 text-[#9B783E] hover:bg-amber-100 text-xs font-semibold text-center border border-amber-200 block transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>

          {/* Card 2: WhatsApp */}
          <div className="bg-white p-6 rounded-3xl border border-zinc-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                <MessageCircle className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-zinc-900">WhatsApp Chat</h3>
              <p className="text-xs text-zinc-500 mt-1">Instant replies for bookings & quotes</p>
              <p className="font-bold text-sm text-zinc-900 mt-3">+91 94886 76151</p>
            </div>
            <div className="mt-6">
              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Style%20Hub,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-emerald-50 text-emerald-700 hover:bg-emerald-100 text-xs font-semibold text-center border border-emerald-200 block transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* Card 3: Hours */}
          <div className="bg-white p-6 rounded-3xl border border-zinc-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mb-4">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-zinc-900">Operating Hours</h3>
              <p className="text-xs text-zinc-500 mt-1">Open 7 days a week</p>
              <p className="font-bold text-xs text-zinc-900 mt-3">09:30 AM – 08:00 PM</p>
            </div>
            <div className="mt-6">
              <span className="w-full py-2.5 rounded-xl bg-blue-50 text-blue-700 text-xs font-semibold text-center border border-blue-200 block">
                Open Daily
              </span>
            </div>
          </div>

          {/* Card 4: Location */}
          <div className="bg-white p-6 rounded-3xl border border-zinc-200/90 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-base text-zinc-900">Salon Address</h3>
              <p className="text-xs text-zinc-500 mt-1">Mah Plaza, KTC Nagar</p>
              <p className="text-[11px] text-zinc-700 mt-3 leading-snug">
                Pothys Nagar, Nagercoil Rd, Tirunelveli 627011
              </p>
            </div>
            <div className="mt-6">
              <a
                href={SALON_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 text-xs font-semibold text-center border border-rose-200 block transition-colors"
              >
                Open Google Maps
              </a>
            </div>
          </div>
        </div>

        {/* Map & Inquiry Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Interactive Map Embed & Landmark Guide (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-serif text-xl font-bold text-zinc-900">
                    Find Us on Google Maps
                  </h3>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    Mah Plaza, Nagercoil Road, KTC Nagar, Tirunelveli
                  </p>
                </div>

                <a
                  href={SALON_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-full bg-zinc-100 text-zinc-700 hover:text-black hover:bg-zinc-200 transition-colors"
                  title="Open full map"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              {/* Responsive Google Map Iframe */}
              <div className="w-full h-80 rounded-2xl overflow-hidden border border-zinc-200 shadow-inner">
                <iframe
                  title="Style Hub Ladies Beauty Salon Tirunelveli Location Map"
                  src="https://maps.google.com/maps?q=Style+Hub+Ladies+Beauty+Salon+Mah+plaza+nagarcoil+road+KTC+Nagar+Tirunelveli&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>

              {/* Landmark notes */}
              <div className="mt-6 pt-4 border-t border-zinc-100 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-zinc-600">
                <div className="flex items-start gap-2">
                  <Navigation className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                  <span><strong>Landmark:</strong> Near Pothys Nagar junction on main Nagercoil Road.</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Parking:</strong> Ample dedicated two-wheeler and four-wheeler parking right in front of Mah Plaza.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Message / Quick Inquiry Form (5 cols) */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-zinc-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#9B783E] uppercase tracking-wider mb-2">
                <Star className="w-4 h-4 fill-[#C5A059]/20" />
                <span>Send a Direct Message</span>
              </div>
              <h3 className="font-serif text-xl font-bold text-zinc-900 mb-1">
                Have a Question or Inquiry?
              </h3>
              <p className="text-zinc-500 text-xs mb-6">
                Fill out the form below and we'll instantly connect with you on WhatsApp.
              </p>

              <form onSubmit={handleSendMessage} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Priya"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Phone Number (WhatsApp) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Service Category
                    </label>
                    <select
                      value={serviceOfInterest}
                      onChange={(e) => setServiceOfInterest(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      {SALON_CATEGORIES.map((cat) => (
                        <option key={cat.id} value={`${cat.order}. ${cat.name}`}>
                          {cat.order}. {cat.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full px-3 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                    Message or Question (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you would like to know..."
                    className="w-full px-4 py-2.5 rounded-xl bg-zinc-50 border border-zinc-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#9B783E] via-[#C5A059] to-[#DFC085] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send WhatsApp Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Modern Social Media Connect Section */}
        <div className="bg-gradient-to-br from-[#121316] via-[#18191E] to-[#121316] rounded-3xl p-8 sm:p-10 border border-[#C5A059]/30 text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/5 border border-[#C5A059]/30 text-[#DFC085] text-xs font-semibold uppercase tracking-wider mb-3">
                <Star className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Stay Connected With Us</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-wide">
                Join Style Hub on Social Media
              </h2>
              <p className="text-zinc-400 text-xs sm:text-sm mt-2">
                Follow our daily bridal transformations, client stories, hair styling videos, and festive discount announcements.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {/* Instagram Card */}
              <a
                href={SALON_INFO.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-pink-500/50 hover:bg-gradient-to-b hover:from-pink-500/10 hover:to-zinc-900 transition-all duration-300 hover:scale-[1.02] flex items-center gap-4 shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center p-2.5 shadow-[0_0_20px_rgba(225,48,108,0.3)] shrink-0 group-hover:scale-110 transition-transform">
                  <InstagramIcon size={32} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-sm text-white group-hover:text-[#DFC085] transition-colors">
                      Instagram
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-pink-400 transition-colors" />
                  </div>
                  <p className="text-[11px] text-zinc-400 truncate">@stylehub_ladies_beauty_salon</p>
                  <span className="text-[10px] text-pink-400 font-medium mt-1 inline-block">
                    Photos, Reels & Trends →
                  </span>
                </div>
              </a>

              {/* Facebook Card */}
              <a
                href={SALON_INFO.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-[#1877F2]/50 hover:bg-gradient-to-b hover:from-blue-600/10 hover:to-zinc-900 transition-all duration-300 hover:scale-[1.02] flex items-center gap-4 shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center p-2.5 shadow-[0_0_20px_rgba(24,119,242,0.3)] shrink-0 group-hover:scale-110 transition-transform">
                  <FacebookIcon size={32} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-sm text-white group-hover:text-[#DFC085] transition-colors">
                      Facebook
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <p className="text-[11px] text-zinc-400 truncate">Style Hub Ladies Salon</p>
                  <span className="text-[10px] text-blue-400 font-medium mt-1 inline-block">
                    Updates & Community →
                  </span>
                </div>
              </a>

              {/* WhatsApp Card */}
              <a
                href={SALON_INFO.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 hover:border-emerald-500/50 hover:bg-gradient-to-b hover:from-emerald-600/10 hover:to-zinc-900 transition-all duration-300 hover:scale-[1.02] flex items-center gap-4 shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center p-2.5 shadow-[0_0_20px_rgba(37,211,102,0.3)] shrink-0 group-hover:scale-110 transition-transform">
                  <WhatsAppIcon size={32} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif font-bold text-sm text-white group-hover:text-[#DFC085] transition-colors">
                      WhatsApp
                    </h3>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-500 group-hover:text-emerald-400 transition-colors" />
                  </div>
                  <p className="text-[11px] text-zinc-400 truncate">+91 94886 76151</p>
                  <span className="text-[10px] text-emerald-400 font-medium mt-1 inline-flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Instant Chat & Queries →
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
