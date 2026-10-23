import React from 'react';
import { useState, useEffect } from 'react';
import { X, Calendar, Clock, Star, CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';
import { SALON_INFO, SALON_SERVICES, SALON_PACKAGES, SALON_CATEGORIES } from '../../data/salonData';
import type { SalonService, ServicePackage } from '../../types/salon';
import { Logo } from '../common/Logo';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: SalonService | null;
  preSelectedPackage?: ServicePackage | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
  preSelectedPackage,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('11:00 AM');
  const [notes, setNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Set today's date as min
  const today = new Date().toISOString().split('T')[0];

  // Sync preSelected values
  useEffect(() => {
    if (preSelectedService) {
      setSelectedServiceId(`service-${preSelectedService.id}`);
    } else if (preSelectedPackage) {
      setSelectedServiceId(`pkg-${preSelectedPackage.id}`);
    } else if (!selectedServiceId && SALON_SERVICES.length > 0) {
      setSelectedServiceId(`service-${SALON_SERVICES[0].id}`);
    }
  }, [preSelectedService, preSelectedPackage]);

  useEffect(() => {
    if (isOpen) {
      setIsSubmitted(false);
      setErrorMessage('');
      if (!selectedDate) {
        setSelectedDate(today);
      }
    }
  }, [isOpen, today, selectedDate]);

  if (!isOpen) return null;

  const timeSlots = [
    '10:00 AM',
    '11:30 AM',
    '01:00 PM',
    '02:30 PM',
    '04:00 PM',
    '05:30 PM',
    '06:45 PM',
  ];

  // Helper to find title
  const getSelectedTitle = () => {
    if (selectedServiceId.startsWith('service-')) {
      const id = selectedServiceId.replace('service-', '');
      const s = SALON_SERVICES.find(srv => srv.id === id);
      return s ? `${s.name} (${s.categoryName})` : 'Salon Service';
    } else if (selectedServiceId.startsWith('pkg-')) {
      const id = selectedServiceId.replace('pkg-', '');
      const p = SALON_PACKAGES.find(pkg => pkg.id === id);
      return p ? p.title : 'Beauty Package';
    }
    return 'Custom Appointment';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName.trim()) {
      setErrorMessage('Please enter your full name');
      return;
    }

    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number');
      return;
    }

    setErrorMessage('');
    setIsSubmitted(true);
    handleSendWhatsApp();

    // Confetti celebration (dynamically loaded on demand)
    import('canvas-confetti')
      .then(({ default: confetti }) => {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#C5A059', '#E8A598', '#9B783E', '#FAF6F0'],
        });
      })
      .catch(() => {
        // Fallback
      });
  };

  const handleSendWhatsApp = () => {
    const serviceName = getSelectedTitle();
    const text = `🌸 *New Appointment Booking - Style Hub Ladies Beauty Salon*%0A%0A` +
      `*Client Name:* ${encodeURIComponent(fullName)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Service / Category:* ${encodeURIComponent(serviceName)}%0A` +
      `*Date:* ${encodeURIComponent(selectedDate)}%0A` +
      `*Preferred Time:* ${encodeURIComponent(selectedTime)}%0A` +
      (notes ? `*Special Request:* ${encodeURIComponent(notes)}%0A%0A` : `%0A`) +
      `_Requested from Style Hub Official Website_`;

    window.open(`https://wa.me/${SALON_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-3xl max-w-lg w-full shadow-2xl border border-zinc-200 overflow-hidden animate-in zoom-in-95 duration-200"
      >
        {/* Modal Top Bar */}
        <div className="bg-gradient-to-r from-[#121316] via-[#1E1F24] to-[#121316] p-6 text-white relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-zinc-300 hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3.5 pr-8">
            <div className="w-12 h-12 rounded-full bg-white/10 p-1.5 border border-[#C5A059]/40 flex items-center justify-center shrink-0 shadow-inner">
              <Logo className="w-full h-full" variant="gold" showGlow />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#C5A059]/20 text-[#DFC085] text-[11px] font-semibold uppercase tracking-wider mb-1 border border-[#C5A059]/40">
                <Star className="w-3 h-3 fill-[#DFC085]" />
                <span>Style Hub Appointment Desk</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white leading-tight">
                {isSubmitted ? 'Appointment Requested!' : 'Book Your Beauty Experience'}
              </h3>
              <p className="text-[11px] text-zinc-300 mt-0.5">
                Mah Plaza, Nagercoil Road, KTC Nagar · Open Daily
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7">
          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-4 space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center border-2 border-emerald-200 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="font-serif text-2xl font-bold text-[#121316]">
                  Thank You, {fullName}!
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 mt-2 max-w-sm mx-auto leading-relaxed">
                  Your appointment request for <strong className="text-[#9B783E]">{getSelectedTitle()}</strong> on <strong className="text-zinc-900">{selectedDate}</strong> at <strong className="text-zinc-900">{selectedTime}</strong> has been opened directly in WhatsApp.
                </p>
              </div>

              <div className="p-4 bg-emerald-50/70 rounded-2xl border border-emerald-200/80 text-left text-xs text-zinc-700 space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Booking Channel:</span>
                  <span className="font-semibold text-emerald-700">Direct WhatsApp</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Address:</span>
                  <span className="font-semibold">Mah Plaza, KTC Nagar, Tirunelveli</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500">Timing:</span>
                  <span className="font-semibold text-emerald-700">Open Daily · Closes 8:00 PM</span>
                </div>
              </div>

              {/* Action Buttons - WhatsApp Only */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={handleSendWhatsApp}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white font-bold text-xs uppercase tracking-wider shadow-lg flex items-center justify-center gap-2 transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Open WhatsApp Confirmation</span>
                </button>

                <button
                  onClick={onClose}
                  className="w-full py-2.5 text-xs text-zinc-500 hover:text-zinc-800 transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Select Treatment or Package (18 Categories)
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-xs sm:text-sm text-zinc-800 focus:outline-none focus:border-[#C5A059]"
                >
                  {SALON_CATEGORIES.map((category) => {
                    const servicesInCat = SALON_SERVICES.filter((s) => s.category === category.id);
                    if (servicesInCat.length === 0) return null;
                    return (
                      <optgroup key={category.id} label={`${category.order}. ${category.name} (${servicesInCat.length})`}>
                        {servicesInCat.map((s) => (
                          <option key={s.id} value={`service-${s.id}`}>
                            {s.name} ({s.duration})
                          </option>
                        ))}
                      </optgroup>
                    );
                  })}
                  <optgroup label="Curated Beauty & Bridal Packages">
                    {SALON_PACKAGES.map((p) => (
                      <option key={p.id} value={`pkg-${p.id}`}>
                        {p.title} ({p.duration})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              {/* Full Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. Ananya Rajan"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-xs sm:text-sm text-zinc-800 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="094886 76151"
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-xs sm:text-sm text-zinc-800 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-[#9B783E]" />
                    <span>Preferred Date</span>
                  </label>
                  <input
                    type="date"
                    min={today}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 bg-zinc-50 text-xs sm:text-sm text-zinc-800 focus:outline-none focus:border-[#C5A059]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 mb-1.5 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Time Slot (Closes 8 PM)</span>
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-zinc-200 bg-zinc-50 text-xs sm:text-sm text-zinc-800 focus:outline-none focus:border-[#C5A059]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold text-zinc-700 mb-1.5">
                  Special Requests or Questions (Optional)
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="e.g. Sensitive skin, bridal trial inquiries, specific hair style..."
                  className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 bg-zinc-50 text-xs sm:text-sm text-zinc-800 focus:outline-none focus:border-[#C5A059] resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#9B783E] via-[#C5A059] to-[#DFC085] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Appointment Request</span>
                </button>
                <p className="text-[11px] text-zinc-400 text-center mt-2">
                  No advance payment required online. Pay at salon counter.
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
