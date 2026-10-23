import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Search,
  MessageCircle,
  Phone,
  Crown,
  ChevronRight,
  Sparkles,
  X,
  Eye,
  Scissors,
  Gem,
  Feather,
  Sun,
  Wind,
  Flame,
  Flower2,
  Palette,
  Heart,
  ShieldCheck,
  Smile,
  HeartHandshake,
  CheckCircle2,
  type LucideIcon
} from 'lucide-react';
import { SALON_SERVICES, SALON_CATEGORIES, SALON_INFO } from '../data/salonData';
import { ServiceCard } from '../components/salon/ServiceCard';
import type { SalonService, ServiceCategory } from '../types/salon';

interface ServicesPageProps {
  onSelectServiceForBooking: (service: SalonService) => void;
}

// Dedicated beauty icon mapper for each of the 18 official categories
const getCategoryIcon = (categoryId: string): LucideIcon => {
  switch (categoryId) {
    case 'threading':
      return Eye;
    case 'hair-cut':
      return Scissors;
    case 'facial-service':
      return Gem;
    case 'wax':
      return Feather;
    case 'd-tan':
      return Sun;
    case 'hair-wash-blow-dry':
      return Wind;
    case 'bleach':
      return Flame;
    case 'facial':
      return Sparkles;
    case 'bridal-makeup':
      return Crown;
    case 'spa':
      return Flower2;
    case 'hair-straightening':
      return Flame;
    case 'hair-dye':
      return Palette;
    case 'massage':
      return Heart;
    case 'treatment':
      return ShieldCheck;
    case 'kids':
      return Smile;
    case 'hair-extension':
      return Scissors;
    case 'ear-cobe':
      return HeartHandshake;
    case 'lice-remove':
      return CheckCircle2;
    default:
      return Sparkles;
  }
};

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectServiceForBooking,
}) => {
  // Default to the #1 most frequently used category: 'threading'
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('threading');
  const [searchQuery, setSearchQuery] = useState('');
  const mobileTabTrackRef = useRef<HTMLDivElement>(null);
  const activeMobileTabRef = useRef<HTMLButtonElement | null>(null);
  const contentTopRef = useRef<HTMLDivElement>(null);
  const rightServicesScrollRef = useRef<HTMLDivElement>(null);
  const leftSidebarScrollRef = useRef<HTMLDivElement>(null);

  // Smoothly center the active tab on mobile/tablet horizontal scroll
  useEffect(() => {
    if (activeMobileTabRef.current) {
      activeMobileTabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  }, [selectedCategory]);

  // Handler for category selection with smooth view adjustment
  const handleSelectCategory = (catId: ServiceCategory) => {
    setSelectedCategory(catId);
    setSearchQuery('');

    // Reset right column scroll position to top on desktop
    if (rightServicesScrollRef.current && window.innerWidth >= 1024) {
      rightServicesScrollRef.current.scrollTo({ top: 0, behavior: 'instant' });
    }

    // Smoothly scroll content into view on both mobile and desktop
    if (contentTopRef.current) {
      const isMobile = window.innerWidth < 1024;
      // On mobile, the sticky navbar (64px) + sticky category bar (~105px) totals ~170px
      const targetOffset = isMobile ? 175 : 80;
      const rect = contentTopRef.current.getBoundingClientRect();
      const targetY = Math.max(0, window.scrollY + rect.top - targetOffset);

      if (rect.top < targetOffset || isMobile) {
        if ((window as any).lenis?.scrollTo) {
          (window as any).lenis.scrollTo(targetY, { duration: 0.7 });
        } else {
          window.scrollTo({
            top: targetY,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  // Filtered Services (Sorted in descending order of popularity)
  const filteredServices = useMemo(() => {
    const list = SALON_SERVICES.filter((service) => {
      const matchesCategory =
        selectedCategory === 'all' || service.category === selectedCategory;
      const matchesSearch =
        !searchQuery.trim() ||
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    // Sort in descending order of popularity (most frequently used services first)
    return [...list].sort((a, b) => (b.popularity ?? 0) - (a.popularity ?? 0));
  }, [selectedCategory, searchQuery]);

  const activeCategoryMeta = useMemo(() => {
    return SALON_CATEGORIES.find((c) => c.id === selectedCategory);
  }, [selectedCategory]);

  const categoryServicesCount = useMemo(() => {
    const counts: Record<string, number> = {};
    SALON_SERVICES.forEach((s) => {
      counts[s.category] = (counts[s.category] || 0) + 1;
    });
    return counts;
  }, []);

  const ActiveSpotlightIcon = selectedCategory === 'all' ? Sparkles : getCategoryIcon(selectedCategory);

  // Forward mouse wheel events from non-scrolling header areas to the respective scrollable list
  const handleRightColumnWheel = (e: React.WheelEvent<HTMLElement>) => {
    if (
      rightServicesScrollRef.current &&
      !rightServicesScrollRef.current.contains(e.target as Node)
    ) {
      rightServicesScrollRef.current.scrollTop += e.deltaY;
    }
  };

  const handleLeftColumnWheel = (e: React.WheelEvent<HTMLElement>) => {
    if (
      leftSidebarScrollRef.current &&
      !leftSidebarScrollRef.current.contains(e.target as Node)
    ) {
      leftSidebarScrollRef.current.scrollTop += e.deltaY;
    }
  };

  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-[#9B783E] text-xs font-semibold uppercase tracking-wider mb-4 shadow-sm">
            <Crown className="w-3.5 h-3.5" />
            <span>Complete Ladies Salon Menu</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            18 Categories & 78 Services
          </h1>

          <p className="text-zinc-600 text-sm sm:text-base mt-4 leading-relaxed">
            Explore our complete portfolio across all 18 dedicated categories — from daily precision threading and designer haircuts to luxury 24K gold facials and bespoke South Indian bridal makeovers.
          </p>
        </div>

        {/* Direct WhatsApp Booking & Pricing Strip */}
        <div className="bg-gradient-to-r from-[#121316] via-[#1E1C18] to-[#121316] rounded-3xl p-5 sm:p-6 text-white border border-[#C5A059]/40 shadow-lg mb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-emerald-700 flex items-center justify-center text-white shrink-0 shadow-md">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-serif text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Direct WhatsApp Booking & Latest Pricing</span>
              </h3>
              <p className="text-xs text-zinc-300 mt-0.5">
                Book any of our 78 services directly via WhatsApp. Customized pricing tailored to your hair length, skin type, and occasion.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto shrink-0">
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Style%20Hub,%20I%20would%20like%20to%20book%20a%20salon%20service%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Book on WhatsApp</span>
            </a>
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Style%20Hub,%20I%20would%20like%20to%20know%20your%20service%20pricing.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold flex items-center justify-center gap-1.5 border border-white/20 transition-colors cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp for Price</span>
            </a>
          </div>
        </div>

        {/* ── Mobile / Tablet Sticky Horizontal Tab Navigation Bar (< lg screens) ── */}
        <div
          data-lenis-prevent
          className="lg:hidden sticky top-[64px] sm:top-20 z-30 bg-[#FAF7F2]/95 backdrop-blur-md py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 border-b border-zinc-200/80 mb-6 shadow-sm"
        >
          {/* Mobile search + quick dropdown row */}
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="relative flex-1">
              <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search services..."
                className="w-full pl-9 pr-7 py-2 rounded-full bg-white border border-zinc-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#C5A059]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Quick Category Select Dropdown for 1-tap jump */}
            <select
              value={selectedCategory}
              onChange={(e) => handleSelectCategory(e.target.value as ServiceCategory)}
              aria-label="Jump to Category"
              className="py-2 px-3 rounded-full bg-white border border-zinc-200 text-xs font-semibold text-zinc-800 focus:outline-none focus:border-[#C5A059] max-w-[155px] truncate cursor-pointer shadow-2xs"
            >
              <option value="all">✨ All Services (78)</option>
              {SALON_CATEGORIES.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.order < 10 ? `0${cat.order}` : cat.order}. {cat.name} ({categoryServicesCount[cat.id] || cat.count})
                </option>
              ))}
            </select>
          </div>

          {/* Horizontal scrollable tab pills with beauty icons */}
          <div
            ref={mobileTabTrackRef}
            data-lenis-prevent
            className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-1 scroll-smooth overscroll-x-contain"
          >
            {/* All Services Pill */}
            <button
              type="button"
              ref={selectedCategory === 'all' ? activeMobileTabRef : null}
              onClick={() => handleSelectCategory('all')}
              className={`whitespace-nowrap px-4 py-2 rounded-full text-xs transition-all flex items-center gap-2 shrink-0 cursor-pointer ${selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-[#121316] via-[#1E1C18] to-[#121316] text-[#DFC085] border border-[#C5A059] shadow-md font-bold'
                  : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200 font-medium'
                }`}
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>All Services</span>
              <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${selectedCategory === 'all' ? 'bg-[#C5A059]/25 text-[#DFC085] border border-[#C5A059]/40' : 'bg-zinc-100 text-zinc-500'
                }`}>
                78
              </span>
            </button>

            {/* 18 Category Pills in Popularity Order */}
            {SALON_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              const CatIcon = getCategoryIcon(cat.id);
              const count = categoryServicesCount[cat.id] || cat.count;

              return (
                <button
                  key={cat.id}
                  type="button"
                  ref={isSelected ? activeMobileTabRef : null}
                  onClick={() => handleSelectCategory(cat.id)}
                  className={`whitespace-nowrap px-3.5 py-2 rounded-full text-xs transition-all flex items-center gap-2 shrink-0 cursor-pointer ${isSelected
                      ? 'bg-gradient-to-r from-[#121316] via-[#1E1C18] to-[#121316] text-[#DFC085] border border-[#C5A059] shadow-md font-bold'
                      : 'bg-white text-zinc-700 hover:bg-zinc-100 border border-zinc-200 font-medium'
                    }`}
                >
                  <CatIcon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#DFC085]' : 'text-[#9B783E]'}`} />
                  <span>{cat.name}</span>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${isSelected ? 'bg-[#C5A059]/25 text-[#DFC085] border border-[#C5A059]/40' : 'bg-zinc-100 text-zinc-500'
                    }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Main Side-by-Side Navigator & Service Details Area (Desktop & Tablet) ── */}
        <div ref={contentTopRef} className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start scroll-mt-24">

          {/* Left Column: Modern Sticky Category Navigation Sidebar (Desktop lg: and up) */}
          <aside
            data-lenis-prevent
            onWheel={handleLeftColumnWheel}
            className="hidden lg:flex lg:col-span-4 xl:col-span-3.5 lg:h-[calc(100vh-7.5rem)] lg:min-h-[580px] lg:max-h-[860px] lg:sticky lg:top-24 z-20"
          >
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-4.5 shadow-lg border border-[#C5A059]/25 flex flex-col w-full h-full min-h-0">

              {/* Sidebar Header */}
              <div className="pb-3 mb-2.5 border-b border-zinc-100 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-100 to-amber-200 border border-amber-300 flex items-center justify-center text-[#9B783E] shadow-2xs">
                    <Crown className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h2 className="font-serif font-bold text-xs text-zinc-900 tracking-tight">
                      Service Categories
                    </h2>
                    <p className="text-[10px] text-zinc-400">
                      Ranked by Popular Demand
                    </p>
                  </div>
                </div>

                <span className="text-[10px] font-bold text-[#9B783E] bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200/80 uppercase tracking-wider">
                  18 Tiers
                </span>
              </div>

              {/* Sidebar Search Bar */}
              <div className="relative mb-2.5 shrink-0">
                <Search className="w-3.5 h-3.5 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="                Quick search 78 services..."
                  className="w-full pl-8.5 pr-7 py-1.5 rounded-xl bg-zinc-50 border border-zinc-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#C5A059] focus:bg-white transition-all shadow-inner"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600 cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Full View Category Tabs List */}
              <div
                ref={leftSidebarScrollRef}
                data-lenis-prevent
                className="flex-1 overflow-y-auto min-h-0 space-y-1 pr-1 scrollbar-thin overscroll-contain"
              >

                {/* All Services Master Tab */}
                <button
                  type="button"
                  onClick={() => handleSelectCategory('all')}
                  className={`w-full   text-left py-1.5 px-2.5 rounded-xl transition-all duration-200 flex items-center justify-between group relative overflow-hidden cursor-pointer ${selectedCategory === 'all'
                      ? 'bg-gradient-to-r from-[#121316] via-[#1B1916] to-[#121316] text-white shadow-md border border-[#C5A059]/70'
                      : 'bg-zinc-50/70 hover:bg-amber-50/60 text-zinc-700 hover:text-zinc-900 border border-zinc-200/70 hover:border-[#C5A059]/50 shadow-2xs hover:shadow-xs'
                    }`}
                >
                  {/* Active Glowing Indicator Bar */}
                  {selectedCategory === 'all' && (
                    <div className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-gradient-to-b from-amber-400 via-[#C5A059] to-amber-500 rounded-r-full shadow-[0_0_10px_rgba(197,160,89,0.9)]" />
                  )}

                  <div className="flex items-center gap-2.5 min-w-0 pl-0.5">
                    <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 transition-all ${selectedCategory === 'all'
                        ? 'bg-gradient-to-br from-[#C5A059] to-[#9B783E] text-white shadow-2xs ring-1 ring-[#C5A059]/40'
                        : 'bg-white text-[#9B783E] border border-amber-200/80 group-hover:bg-[#121316] group-hover:text-[#DFC085] group-hover:border-[#121316]'
                      }`}>
                      <Sparkles className="w-3.5 h-3.5" />
                    </div>
                    <div className="min-w-0">
                      <span className={`block font-serif font-bold text-xs tracking-tight truncate ${selectedCategory === 'all' ? 'text-white' : 'text-zinc-900'
                        }`}>
                        All Collections
                      </span>
                      <span className={`text-[10px] block truncate ${selectedCategory === 'all' ? 'text-amber-300/80' : 'text-zinc-400'
                        }`}>
                        Complete 78 treatments portfolio
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${selectedCategory === 'all'
                        ? 'bg-[#C5A059]/25 text-[#DFC085] border border-[#C5A059]/50 shadow-inner'
                        : 'bg-zinc-100 text-zinc-500 group-hover:bg-amber-100/70 group-hover:text-[#9B783E]'
                      }`}>
                      78
                    </span>
                    <ChevronRight className={`w-3.5 h-3.5  transition-transform duration-200 ${selectedCategory === 'all' ? 'text-amber-300 translate-x-0.5' : 'text-zinc-300 group-hover:text-zinc-500 group-hover:translate-x-0.5'
                      }`} />
                  </div>
                </button>

                {/* 18 Category Tabs in Popularity Order */}
                {SALON_CATEGORIES.map((cat) => {
                  const isSelected = selectedCategory === cat.id;
                  const count = categoryServicesCount[cat.id] || cat.count;
                  const CatIcon = getCategoryIcon(cat.id);

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleSelectCategory(cat.id)}
                      className={`w-full    text-left py-3 px-2 rounded-xl transition-all   duration-200 flex items-center justify-between group relative overflow-hidden cursor-pointer ${isSelected
                          ? 'bg-gradient-to-r from-[#121316] via-[#1B1916] to-[#121316] text-white shadow-md border border-[#C5A059]/70'
                          : 'bg-zinc-50/70 hover:bg-amber-50/60 text-zinc-700 hover:text-zinc-900 border border-zinc-200/70 hover:border-[#C5A059]/50 shadow-2xs hover:shadow-xs '
                        }`}
                    >
                      {/* Active Glowing Indicator Bar */}
                      {isSelected && (
                        <div className="absolute left-0 top-1.5 bottom-1.5 w-1 bg-gradient-to-b from-amber-400 via-[#C5A059] to-amber-500 rounded-r-full shadow-[0_0_10px_rgba(197,160,89,0.9)]" />
                      )}

                      <div className="flex items-center gap-2.5 min-w-0 pl-0.5">
                        <div className={`w-8  h-8  rounded-lg flex items-center justify-center shrink-0 transition-all ${isSelected
                            ? 'bg-gradient-to-br from-[#C5A059] to-[#9B783E] text-white shadow-2xs ring-1 ring-[#C5A059]/40'
                            : 'bg-white text-[#9B783E] border border-amber-200/80 group-hover:bg-[#121316] group-hover:text-[#DFC085] group-hover:border-[#121316]'
                          }`}>
                          <CatIcon className="w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110" />
                        </div>

                        <div className="min-w-0">
                          <span className={`text-[16px] block font-serif font-bold text-xs tracking-tight truncate ${isSelected ? 'text-white' : 'text-zinc-800 group-hover:text-zinc-900'
                            }`}>
                            {cat.name}
                          </span>
                          
                        </div>
                      </div>

                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isSelected
                            ? 'bg-[#C5A059]/25 text-[#DFC085] border border-[#C5A059]/50 shadow-inner'
                            : 'bg-zinc-100 text-zinc-500 group-hover:bg-amber-100/70 group-hover:text-[#9B783E]'
                          }`}>
                          {count}
                        </span>
                        <ChevronRight className={`w-3.5 h-3.5 transition-transform duration-200 ${isSelected ? 'text-amber-300 translate-x-0.5' : 'text-zinc-300 group-hover:text-zinc-500 group-hover:translate-x-0.5'
                          }`} />
                      </div>
                    </button>
                  );
                })}

              </div>

            </div>
          </aside>

          {/* Right Column: Corresponding Service Details Beside It (Same Height on Desktop) */}
          <main
            data-lenis-prevent
            onWheel={handleRightColumnWheel}
            className="lg:col-span-8 xl:col-span-8.5 w-full min-w-0 lg:h-[calc(100vh-7.5rem)] lg:min-h-[580px] lg:max-h-[860px] lg:sticky lg:top-24 flex flex-col"
          >

            {/* Category Spotlight Detail Banner */}
            <div className="bg-gradient-to-r from-[#121316] via-[#1E1C18] to-[#121316] rounded-2xl sm:rounded-3xl p-5 sm:p-6 text-white shadow-xl border border-[#C5A059]/40 mb-3.5 relative overflow-hidden shrink-0">
              {/* Ambient Luxury Glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C5A059]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3.5 min-w-0">
                  {/* Spotlight Icon Badge */}
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-[#C5A059] to-[#9B783E] text-white flex items-center justify-center shrink-0 shadow-lg ring-3 ring-[#C5A059]/25">
                    <ActiveSpotlightIcon className="w-5 h-5" />
                  </div>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#C5A059]/25 border border-[#C5A059]/50 text-amber-300 text-[10px] font-bold uppercase tracking-wider">
                        {activeCategoryMeta ? `Category #${activeCategoryMeta.order < 10 ? `0${activeCategoryMeta.order}` : activeCategoryMeta.order} of 18` : 'Complete Portfolio'}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-white/10 text-white text-[10px] font-semibold">
                        {filteredServices.length} {filteredServices.length === 1 ? 'Service' : 'Services'} Available
                      </span>
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-[10px] font-semibold">
                        Popularity Sorted
                      </span>
                    </div>

                    <h2 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight truncate">
                      {activeCategoryMeta ? activeCategoryMeta.name : 'All Beauty & Hair Services'}
                    </h2>
                    <p className="text-zinc-300 text-xs mt-1 max-w-2xl leading-relaxed line-clamp-2">
                      {activeCategoryMeta
                        ? activeCategoryMeta.description
                        : 'Explore all 78 specialized treatments across 18 categories, arranged from most frequently requested to specialized care.'}
                    </p>
                  </div>
                </div>

                {/* Direct WhatsApp Consultation for Active Category */}
                <div className="shrink-0">
                  <a
                    href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=${encodeURIComponent(
                      activeCategoryMeta
                        ? `🌸 Hello Style Hub Ladies Salon,\n\nI would like to inquire about and book an appointment in your *${activeCategoryMeta.name}* category.`
                        : `🌸 Hello Style Hub Ladies Salon,\n\nI would like to inquire about and book a salon appointment.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-500 hover:to-emerald-600 text-white text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg hover:shadow-emerald-500/25 transition-all whitespace-nowrap cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Book {activeCategoryMeta ? activeCategoryMeta.name : 'on WhatsApp'}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Results Count & Status Indicator */}
            <div className="flex items-center justify-between mb-3 px-1 text-xs text-zinc-500 shrink-0">
              <span>
                Displaying <strong className="text-zinc-800">{filteredServices.length}</strong> services
                {activeCategoryMeta && (
                  <span> in <strong className="text-[#9B783E]">{activeCategoryMeta.name}</strong></span>
                )}
                {' '}(sorted by popularity)
              </span>

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="text-amber-700 hover:text-amber-900 font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>Clear Search ("{searchQuery}")</span>
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Services Grid: Natural document flow on mobile (< lg), smooth internal scroll on desktop (lg:) */}
            <div
              ref={rightServicesScrollRef}
              data-lenis-prevent
              className="w-full lg:flex-1 overflow-visible lg:overflow-y-auto lg:min-h-0 pr-0 lg:pr-1.5 scrollbar-thin lg:overscroll-contain"
            >
              {filteredServices.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-zinc-200 shadow-sm">
                  <Search className="w-12 h-12 text-zinc-300 mx-auto mb-3" />
                  <h3 className="font-serif text-lg font-bold text-zinc-800">No services found</h3>
                  <p className="text-zinc-500 text-xs mt-1">
                    Try searching for a different keyword or select another category from the tabs on the left.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery('');
                      handleSelectCategory('all');
                    }}
                    className="mt-4 px-5 py-2.5 rounded-full bg-zinc-900 text-white text-xs font-semibold hover:bg-[#9B783E] transition-colors cursor-pointer"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4">
                  {filteredServices.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      onBookService={onSelectServiceForBooking}
                      categoryOrder={SALON_CATEGORIES.find((c) => c.id === service.category)?.order}
                    />
                  ))}
                </div>
              )}
            </div>

          </main>

        </div>

        {/* Custom Consultation Banner (Bottom) */}
        <div className="mt-16 bg-gradient-to-r from-[#121316] to-[#252320] rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden shadow-xl border border-[#C5A059]/30">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <span className="text-amber-300 text-xs font-semibold uppercase tracking-wider block mb-2">
                Need a Custom Beauty Treatment or Combo?
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold">
                Talk to our Senior Stylists for Personalized Recommendations
              </h2>
              <p className="text-zinc-300 text-xs sm:text-sm mt-3 leading-relaxed">
                Whether you have sensitive skin, want customized hair straightening / keratin, or need a pre-wedding bridal makeover consultation, our certified female stylists are here to assist.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href={`tel:${SALON_INFO.phone}`}
                className="py-3 px-6 rounded-xl bg-gradient-to-r from-[#9B783E] to-[#C5A059] text-white text-xs font-semibold uppercase tracking-wider text-center shadow flex items-center justify-center gap-2 hover:scale-105 transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4" />
                <span>Call {SALON_INFO.phoneDisplay}</span>
              </a>

              <a
                href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Style%20Hub,%20I%20would%20like%20a%20custom%20service%20consultation.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3 px-6 rounded-xl bg-emerald-600/30 text-emerald-300 border border-emerald-500/40 text-xs font-semibold text-center flex items-center justify-center gap-2 hover:bg-emerald-600/40 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Consultation</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
