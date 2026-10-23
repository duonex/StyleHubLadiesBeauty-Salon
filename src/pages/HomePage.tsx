import React from 'react';
import { Link } from 'react-router-dom';
import {
  Star,
  MessageCircle,
  Calendar,
  ShieldCheck,
  Award,
  Clock,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Crown
} from 'lucide-react';
import { HeroSection } from '../components/salon/HeroSection';
import { ServiceCard } from '../components/salon/ServiceCard';
import { TestimonialsCarousel } from '../components/salon/TestimonialsCarousel';
import { SALON_INFO, SALON_SERVICES, SALON_PACKAGES, SALON_CATEGORIES } from '../data/salonData';
import type { SalonService, ServicePackage } from '../types/salon';
import TraditionalSouth from "../assets/Gallery-images/TraditionalSouth ndianMuhurthamBride.jpg";

interface HomePageProps {
  onOpenBooking: () => void;
  onSelectService: (service: SalonService) => void;
  onSelectPackage: (pkg: ServicePackage) => void;
}

const POPULAR_SERVICES = SALON_SERVICES.filter((s) => s.popular).slice(0, 6);
const FEATURED_PACKAGES = SALON_PACKAGES.slice(0, 3);

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBooking,
  onSelectService,
  onSelectPackage,
}) => {
  const handleExploreServices = React.useCallback(() => {
    const el = document.getElementById('featured-services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <div className="space-y-0">
      {/* 1. Hero Section with Atmosphere Tabs */}
      <HeroSection
        onOpenBooking={onOpenBooking}
        onExploreServices={handleExploreServices}
      />

      {/* 2. Authentic Luxury Brands & Assurance Strip */}
      <section className="bg-[#121316] text-white py-6 sm:py-8 border-y border-[#C5A059]/25 relative z-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-[#9B783E] to-[#DFC085] flex items-center justify-center text-[#121316] shadow-md">
                <Crown className="w-5 h-5" />
              </div>
              <div>
                <p className="font-serif font-bold text-base text-white">Authentic Global Brands</p>
                <p className="text-xs text-[#DFC085]">Exclusively Premium & Dermatologically Safe Products</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-end gap-3 sm:gap-6 text-zinc-300 text-xs sm:text-sm font-serif">
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-medium">
                L’Oréal Professionnel
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-medium">
                M·A·C Cosmetics
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-medium">
                Huda Beauty
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-medium">
                Cheryl's Dermacare
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-medium">
                Rica Wax Italy
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Featured Services Section */}
      <section id="featured-services" className="py-20 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-[#9B783E] text-xs font-semibold uppercase tracking-wider mb-3">
                <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
                <span>Popular Treatments</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-zinc-900">
                Signature Beauty & Hair Services
              </h2>
              <p className="text-zinc-600 mt-2 max-w-xl text-sm sm:text-base">
                Discover our most requested salon and beauty treatments crafted by certified female stylists in Tirunelveli.
              </p>
            </div>

            <Link
              to="/services"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-sm font-semibold text-[#9B783E] hover:text-[#7d5e2c] group"
            >
              <span>Explore All 18 Categories</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {POPULAR_SERVICES.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onBookService={onSelectService}
                categoryOrder={SALON_CATEGORIES.find((c) => c.id === service.category)?.order}
              />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#121316] text-white text-sm font-semibold uppercase tracking-wider shadow-lg hover:bg-zinc-800 hover:scale-105 transition-all"
            >
              <span>View All 18 Categories (78 Services)</span>
              <ArrowRight className="w-4 h-4 text-amber-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Bridal Studio Spotlight Section */}
      <section className="py-20 bg-gradient-to-r from-[#1A1310] via-[#2A1E1A] to-[#1A1310] text-white relative overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#C5A059]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#E8A598]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-semibold uppercase tracking-wider mb-4">
                <Crown className="w-3.5 h-3.5" />
                <span>South Indian & Contemporary Bridal Studio</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Your Dream Bridal Makeover in Tirunelveli
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base mt-4 leading-relaxed">
                Step into our private bridal lounge at Mah Plaza. From flawless HD/Airbrush makeup and traditional Muhurtham jada braiding with fresh flowers, to professional saree pre-pleating and jewelry adornment, we ensure every bride looks like royalty.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-serif text-2xl font-bold text-amber-300 block">HD & Airbrush</span>
                  <span className="text-xs text-zinc-400 mt-1 block">4K Camera-Ready Waterproof Makeup</span>
                </div>
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="font-serif text-2xl font-bold text-amber-300 block">Floral Jada & Saree</span>
                  <span className="text-xs text-zinc-400 mt-1 block">Authentic Traditional South Indian Styling</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/bridal"
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#9B783E] via-[#C5A059] to-[#DFC085] text-white text-xs font-semibold uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center gap-2"
                >
                  <span>Explore Bridal Studio</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={onOpenBooking}
                  className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  Book Bridal Consultation
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img
                  src={TraditionalSouth}
                  alt="Style Hub South Indian Bridal Makeover"
                  width={600}
                  height={450}
                  decoding="async"
                  className="w-full h-[450px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white font-serif font-bold text-lg">Royal Muhurtham Suite</p>
                      <p className="text-amber-300 text-xs">Complete Pre-Wedding & Wedding Day Package</p>
                    </div>
                    <span className="text-xs font-semibold text-amber-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/20">Call / WhatsApp for Quote</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Curated Beauty & Bridal Packages Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-[#9B783E] text-xs font-semibold uppercase tracking-wider mb-3">
              <Crown className="w-3.5 h-3.5" />
              <span>Special Offers & Combos</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-zinc-900">
              Curated Beauty & Bridal Packages
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2">
              Save big with our all-in-one head-to-toe beauty packages. Contact us for custom rates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_PACKAGES.map((pkg) => (
              <div
                key={pkg.id}
                className={`rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 border ${
                  pkg.popular
                    ? 'bg-gradient-to-b from-[#FAF5EC] to-white border-[#C5A059] shadow-xl relative'
                    : 'bg-[#FAF7F2] border-zinc-200/80 shadow-sm hover:shadow-md'
                }`}
              >
                {pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-[#9B783E] to-[#C5A059] text-white text-[11px] font-bold uppercase tracking-wider shadow">
                    {pkg.badge}
                  </span>
                )}

                <div>
                  <div className="flex items-baseline justify-between">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-zinc-900">{pkg.title}</h3>
                      <p className="text-xs text-zinc-500 mt-1">{pkg.subtitle}</p>
                    </div>
                  </div>

                  <div className="mt-6 flex items-center justify-between pb-3 border-b border-zinc-200">
                    <div>
                      <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider block">Package Pricing</span>
                      <span className="font-serif text-lg font-bold text-[#9B783E]">Pricing on Request</span>
                    </div>
                    <span className="text-xs text-zinc-500 flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/60">
                      <Clock className="w-3.5 h-3.5 text-[#C5A059]" />
                      {pkg.duration}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-600 mt-3 leading-relaxed">{pkg.description}</p>

                  <div className="mt-6 pt-5 border-t border-zinc-200">
                    <p className="text-xs font-semibold text-zinc-800 uppercase tracking-wider mb-3">
                      Package Inclusions:
                    </p>
                    <ul className="space-y-2">
                      {pkg.servicesIncluded.slice(0, 4).map((inc, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-zinc-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#9B783E] to-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all"
                  >
                    Book This Package
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#9B783E] hover:text-[#7d5e2c]"
            >
              <span>Explore All Salon Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Why Choose Us Section */}
      <section className="py-20 bg-[#FAF7F2] border-t border-zinc-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-zinc-900">
              Why Women in Tirunelveli Choose Style Hub
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base mt-2">
              Our 5-star standard is built upon strict hygiene, master artists, and genuine customer care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-zinc-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#9B783E] flex items-center justify-center mb-4">
                <Crown className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-zinc-900">100% Female Staff</h3>
              <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                A private, safe, and comfortable sanctuary where you receive attentive, gentle care by certified female stylists.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-zinc-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-zinc-900">Hospital-Grade Hygiene</h3>
              <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                UV & autoclave sterilized metallic tools, single-use wax cartridges, and disposable pedicure kits for every client.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-zinc-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-zinc-900">Premium Global Brands</h3>
              <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                We exclusively use authentic international cosmetics like L'Oréal Professionnel, MAC, Huda Beauty, and Cheryl's Dermacare.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-zinc-200/80 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-lg font-bold text-zinc-900">Convenient KTC Nagar Spot</h3>
              <p className="text-xs text-zinc-600 mt-2 leading-relaxed">
                Located at Mah Plaza on Nagercoil Road with hassle-free parking and open 7 days a week till 8:00 PM.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials Carousel */}
      <TestimonialsCarousel />

      {/* 8. Ready to Glow CTA Banner */}
      <section className="py-16 bg-gradient-to-r from-[#9B783E] via-[#C5A059] to-[#DFC085] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold">
            Ready for Your Luxury Makeover?
          </h2>
          <p className="text-white/90 max-w-xl mx-auto text-sm sm:text-base mt-2">
            Book your appointment today at Mah Plaza, KTC Nagar, Tirunelveli.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 rounded-full bg-[#121316] text-white text-xs font-semibold uppercase tracking-wider shadow-xl hover:bg-zinc-900 hover:scale-105 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Now</span>
            </button>

            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Style%20Hub,%20I%20would%20like%20to%20book%20an%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-4 rounded-full bg-white text-zinc-900 hover:bg-zinc-100 text-xs font-semibold uppercase tracking-wider shadow-lg transition-all flex items-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
