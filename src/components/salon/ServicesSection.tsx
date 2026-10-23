import React, { useState, useMemo } from 'react';
import { Search, Star, Clock, Check, MessageCircle, Calendar, ChevronRight, Layers, LayoutGrid, Phone } from 'lucide-react';
import { SALON_SERVICES, SALON_CATEGORIES, SALON_INFO } from '../../data/salonData';
import { ServiceCard } from './ServiceCard';
import type { ServiceCategory, SalonService } from '../../types/salon';

interface ServicesSectionProps {
  onSelectServiceForBooking: (service: SalonService) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectServiceForBooking
}) => {
  const [activeCategory, setActiveCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grouped' | 'grid'>('grouped');

  // Filtered services
  const filteredServices = useMemo(() => {
    return SALON_SERVICES.filter((service) => {
      const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
      const matchesSearch =
        service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.categoryName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        service.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  // Group services by category for grouped view
  const groupedCategories = useMemo(() => {
    return SALON_CATEGORIES.map((cat) => {
      const services = filteredServices.filter((s) => s.category === cat.id);
      return {
        ...cat,
        services,
      };
    }).filter((cat) => cat.services.length > 0);
  }, [filteredServices]);

  const activeCategoryMeta = SALON_CATEGORIES.find((c) => c.id === activeCategory);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#FAF7F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-[#9B783E] text-xs font-semibold uppercase tracking-wider mb-3">
            <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
            <span>Complete Care Menu</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight">
            18 Categories & 78 Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            From precision threading and revitalizing facials to advanced hair botox, smoothing, and royal bridal makeovers. Explore our complete salon menu.
          </p>
        </div>

        {/* Prominent Pricing Notice Strip */}
        <div className="mb-10 bg-gradient-to-r from-[#121316] via-[#1E1F24] to-[#121316] rounded-3xl p-5 sm:p-6 text-white border border-[#C5A059]/40 shadow-lg flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-center md:text-left">
            <div className="w-11 h-11 rounded-2xl bg-[#C5A059]/20 border border-[#C5A059]/40 flex items-center justify-center text-[#DFC085] shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <p className="font-serif font-bold text-base text-white">Call or WhatsApp Us for Latest Pricing</p>
              <p className="text-xs text-zinc-300 mt-0.5">Contact our team directly for customized packages, bridal quotes, and current service pricing.</p>
            </div>
          </div>

          <div className="flex items-center gap-2.5 w-full md:w-auto shrink-0 justify-center">
            <a
              href={`tel:${SALON_INFO.phone}`}
              className="flex-1 md:flex-initial px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider border border-white/20 transition-all flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#DFC085]" />
              <span>Call {SALON_INFO.phoneDisplay}</span>
            </a>
            <a
              href={`https://wa.me/${SALON_INFO.whatsappNumber}?text=Hello%20Style%20Hub,%20I%20would%20like%20to%20inquire%20about%20service%20pricing.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 md:flex-initial px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Pricing</span>
            </a>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white rounded-3xl p-4 sm:p-5 border border-zinc-200/80 shadow-sm mb-10 space-y-4">
          
          {/* Top row: Search, Dropdown & View Mode */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Search Input */}
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search all 78 services or categories..."
                className="w-full pl-9 pr-4 py-2.5 rounded-full bg-zinc-50 border border-zinc-200 text-xs sm:text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-[#C5A059] focus:bg-white transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-zinc-600 font-bold"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Mobile Category Select Dropdown */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end">
              <div className="sm:hidden flex-1">
                <select
                  value={activeCategory}
                  onChange={(e) => setActiveCategory(e.target.value as ServiceCategory)}
                  aria-label="Filter by Category"
                  className="w-full py-2.5 px-3 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-semibold text-zinc-800 focus:outline-none focus:border-[#C5A059]"
                >
                  <option value="all">All 18 Categories (78 Services)</option>
                  {SALON_CATEGORIES.map((cat) => (
                    <option key={cat.id} value={cat.id}>
                      {cat.order}. {cat.name} ({cat.count})
                    </option>
                  ))}
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="inline-flex items-center bg-zinc-100 p-1 rounded-full border border-zinc-200 text-xs font-semibold shrink-0">
                <button
                  onClick={() => setViewMode('grouped')}
                  className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                    viewMode === 'grouped'
                      ? 'bg-white text-zinc-900 shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                  title="Grouped by 18 Categories"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">By Category</span>
                </button>
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-1.5 rounded-full transition-all flex items-center gap-1.5 ${
                    viewMode === 'grid'
                      ? 'bg-white text-zinc-900 shadow-sm'
                      : 'text-zinc-500 hover:text-zinc-900'
                  }`}
                  title="View as Grid"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                  <span className="hidden md:inline">All Cards</span>
                </button>
              </div>
            </div>
          </div>

          {/* Desktop/Tablet Horizontal Category Pills (18 Categories) */}
          <div className="hidden sm:flex items-center gap-2 overflow-x-auto pb-1.5 pt-1 scrollbar-none border-t border-zinc-100">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 ${
                activeCategory === 'all'
                  ? 'bg-[#121316] text-white shadow-md'
                  : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200/80'
              }`}
            >
              <span>All Services</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  activeCategory === 'all'
                    ? 'bg-[#C5A059] text-white'
                    : 'bg-white text-zinc-600'
                }`}
              >
                78
              </span>
            </button>

            {SALON_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-[#121316] text-white shadow-md font-semibold'
                    : 'bg-zinc-100 text-zinc-700 hover:bg-zinc-200/80'
                }`}
              >
                <span>{cat.order}. {cat.name}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat.id
                      ? 'bg-[#C5A059] text-white'
                      : 'bg-white text-zinc-500'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

        </div>

        {/* Active Category Header Notice if a specific category is chosen */}
        {activeCategory !== 'all' && activeCategoryMeta && (
          <div className="mb-8 p-6 rounded-3xl bg-gradient-to-r from-[#121316] to-[#22211F] text-white shadow-lg border border-[#C5A059]/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C5A059]/20 text-amber-300 text-xs font-bold uppercase tracking-wider mb-2">
                <span>Category #{activeCategoryMeta.order} of 18</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                {activeCategoryMeta.name}
              </h3>
              <p className="text-zinc-300 text-xs sm:text-sm mt-1 max-w-xl leading-relaxed">
                {activeCategoryMeta.description}
              </p>
            </div>

            <button
              onClick={() => setActiveCategory('all')}
              className="self-start md:self-center px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs text-zinc-200 transition-colors"
            >
              Show All 18 Categories
            </button>
          </div>
        )}

        {/* Results Counter & Search Indicator */}
        <div className="flex items-center justify-between mb-6 px-1 text-xs text-zinc-500">
          <span>
            Showing <strong className="text-zinc-900">{filteredServices.length}</strong> services
            {activeCategory !== 'all' ? ` in ${activeCategoryMeta?.name}` : ' across all 18 categories'}
          </span>
          {searchQuery && (
            <span className="truncate max-w-xs">
              Filtering by: "<strong>{searchQuery}</strong>"
            </span>
          )}
        </div>

        {/* Main Content Area */}
        {filteredServices.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-3xl border border-zinc-200 shadow-sm max-w-md mx-auto p-8">
            <Search className="w-10 h-10 text-zinc-300 mx-auto mb-3" />
            <p className="font-serif text-lg font-bold text-zinc-800">No services match "{searchQuery}"</p>
            <p className="text-xs text-zinc-500 mt-1">
              Try searching another service (e.g., facial, straight cut, henna, bleach, wax, hydra) or select another category.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('all');
              }}
              className="mt-4 px-5 py-2.5 rounded-full bg-[#121316] text-white text-xs font-semibold hover:bg-[#9B783E] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grouped' && activeCategory === 'all' && !searchQuery ? (
          /* Grouped by Category Layout */
          <div className="space-y-16">
            {groupedCategories.map((category) => (
              <div key={category.id} className="relative">
                
                {/* Category Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-4 mb-6 border-b border-zinc-200">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-full bg-[#121316] text-[#DFC085] font-serif font-bold text-xs flex items-center justify-center shadow-sm">
                      {category.order}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#121316]">
                        {category.name}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  <span className="text-xs font-semibold text-[#9B783E] self-start sm:self-auto bg-amber-50 px-3 py-1 rounded-full border border-amber-200/60">
                    {category.services.length} {category.services.length === 1 ? 'Service' : 'Services'}
                  </span>
                </div>

                {/* Service Cards for this Category */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {category.services.map((service) => (
                    <ServiceCard
                      key={service.id}
                      service={service}
                      onBookService={onSelectServiceForBooking}
                      categoryOrder={category.order}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Flat Grid Layout (Used when filtering or in flat view) */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </section>
  );
};


