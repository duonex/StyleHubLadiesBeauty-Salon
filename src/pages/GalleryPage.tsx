import React, { useState } from 'react';
import {
  Camera,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Calendar,
  Eye
} from 'lucide-react';
import { SALON_INFO } from '../data/salonData';
import BridalFloralJadaHairArt from "../assets/Gallery-images/Bridal Floral Jada & Hair Art.jpg";
import Deluxe from "../assets/Gallery-images/Deluxe Pedicure & Foot Reflexology.jpg";
import Feather from "../assets/Gallery-images/Feather Layer Cut & Bouncy Blowout.jpg";
import goldfacial from "../assets/Gallery-images/Goldfacial.jpg";
import Keratin from "../assets/Gallery-images/Keratin & Argan Hair Conditioning Treatment.jpg";
import Luxury from "../assets/Gallery-images/Luxury French Gel Manicure.jpg";
import Private from "../assets/Gallery-images/Private Bridal Makeover Lounge.jpg";
import Reception from "../assets/Gallery-images/Reception Glam Makeover.jpg";
import Salon from "../assets/Gallery-images/Salon Ambience.png";
import SkinCareRejuvenationTherapy from "../assets/Gallery-images/SkinCareRejuvenationTherapy.jpg";
import TraditionalSouth from "../assets/Gallery-images/TraditionalSouth ndianMuhurthamBride.jpg";
import Voluminous from "../assets/Gallery-images/Voluminous Hollywood Glam Waves.jpg";


interface GalleryItem {
  id: string;
  category: 'bridal' | 'hair' | 'skin' | 'nails' | 'ambience';
  title: string;
  subtitle: string;
  image: string;
}

interface GalleryPageProps {
  onOpenBooking: () => void;
}

const galleryItems: GalleryItem[] = [
  {
    id: 'g-1',
    category: 'bridal',
    title: 'Traditional South Indian Muhurtham Bride',
    subtitle: 'Silk saree draping, temple jewelry & fresh jasmine jada',
    image: TraditionalSouth
  },
  {
    id: 'g-2',
    category: 'hair',
    title: 'Feather Layer Cut & Bouncy Blowout',
    subtitle: 'Face framing layers with ceramic shine finish',
    image: Feather
  },
  {
    id: 'g-3',
    category: 'skin',
    title: '24K Gold Hydra Facial Glow',
    subtitle: 'Deep extraction, hydration & radiant bridal skin',
    image: goldfacial
  },
  {
    id: 'g-4',
    category: 'nails',
    title: 'Deluxe Pedicure & Foot Reflexology',
    subtitle: 'Antimicrobial herbal soak with chip-resistant polish',
    image: Deluxe
  },
  {
    id: 'g-5',
    category: 'bridal',
    title: 'Reception Glam Makeover',
    subtitle: 'Smokey eye artistry & long-stay airbrush makeup',
    image: Reception
  },
  {
    id: 'g-6',
    category: 'hair',
    title: 'Voluminous Hollywood Glam Waves',
    subtitle: 'Heat styled bouncy curls for festive occasions',
    image: Voluminous
  },
  {
    id: 'g-7',
    category: 'skin',
    title: 'Skin Care & Rejuvenation Therapy',
    subtitle: 'Pore cleansing & botanical mask therapy',
    image: SkinCareRejuvenationTherapy
  },
  {
    id: 'g-8',
    category: 'ambience',
    title: 'Mah Plaza Styling Floor & Mirrors',
    subtitle: 'Hygienic salon stations & sterilized tools',
    image: Salon
  },
  {
    id: 'g-9',
    category: 'nails',
    title: 'Luxury French Gel Manicure',
    subtitle: 'Hydrating cuticle care with precision nail art',
    image: Luxury
  },
  {
    id: 'g-10',
    category: 'ambience',
    title: 'Private Bridal Makeover Lounge',
    subtitle: 'Hollywood vanity mirrors & comfortable private dressing room',
    image: Private
  },
  {
    id: 'g-11',
    category: 'bridal',
    title: 'Bridal Floral Jada & Hair Art',
    subtitle: 'Traditional braid with fragrant jasmine & rose adornment',
    image: BridalFloralJadaHairArt
  },
  {
    id: 'g-12',
    category: 'hair',
    title: 'Keratin & Argan Hair Conditioning Treatment',
    subtitle: 'Deep conditioning scalp treatment & thermal micro-steam',
    image: Keratin
  }
];

const categories = [
  { key: 'all', label: 'All Photos' },
  { key: 'bridal', label: 'Bridal Looks' },
  { key: 'hair', label: 'Hair Styling' },
  { key: 'skin', label: 'Facials & Skin' },
  { key: 'nails', label: 'Nails & Pedicure' },
  { key: 'ambience', label: 'Salon Ambience' },
];

export const GalleryPage: React.FC<GalleryPageProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredItems = React.useMemo(() => {
    return galleryItems.filter(
      (item) => selectedCategory === 'all' || item.category === selectedCategory
    );
  }, [selectedCategory]);

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handlePrevLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(
      activeLightboxIndex === 0 ? filteredItems.length - 1 : activeLightboxIndex - 1
    );
  };

  const handleNextLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex(
      activeLightboxIndex === filteredItems.length - 1 ? 0 : activeLightboxIndex + 1
    );
  };

  // Lightbox keyboard navigation
  React.useEffect(() => {
    if (activeLightboxIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowLeft') handlePrevLightbox();
      if (e.key === 'ArrowRight') handleNextLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  return (
    <div className="pt-28 sm:pt-32 pb-24 bg-[#FAF7F2] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-100/80 border border-amber-300 text-[#9B783E] text-xs font-semibold uppercase tracking-wider mb-4">
            <Camera className="w-3.5 h-3.5" />
            <span>Visual Portfolio</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-zinc-900 tracking-tight">
            Our Makeover & Studio Gallery
          </h1>

          <p className="text-zinc-600 text-sm sm:text-base mt-4 leading-relaxed">
            Take a visual tour through real client transformations, radiant South Indian bridal looks, precision haircuts, and our serene salon ambience in Tirunelveli.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelectedCategory(cat.key)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-medium transition-all ${
                selectedCategory === cat.key
                  ? 'bg-gradient-to-r from-[#9B783E] via-[#C5A059] to-[#DFC085] text-white shadow-md font-semibold'
                  : 'bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => handleOpenLightbox(index)}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-zinc-200/80 group cursor-pointer"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={288}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                <div className="absolute top-4 right-4 p-2 rounded-full bg-black/40 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="w-4 h-4" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-semibold text-amber-300 uppercase tracking-widest block mb-1">
                    {item.category}
                  </span>
                  <h3 className="font-serif font-bold text-base leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1 line-clamp-1">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div className="mt-16 text-center bg-white rounded-3xl p-8 sm:p-12 border border-zinc-200 shadow-sm max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900">
            Love What You See?
          </h2>
          <p className="text-zinc-600 text-xs sm:text-sm mt-2 max-w-md mx-auto">
            Book your slot now or visit us at Mah Plaza, KTC Nagar for your next makeover.
          </p>
          <div className="mt-6 flex justify-center">
            <button
              onClick={onOpenBooking}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-[#9B783E] via-[#C5A059] to-[#DFC085] text-white text-xs font-semibold uppercase tracking-wider shadow-md hover:shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Transformation</span>
            </button>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={handlePrevLightbox}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={handleNextLightbox}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-20"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-4xl max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredItems[activeLightboxIndex].image}
              alt={filteredItems[activeLightboxIndex].title}
              className="max-h-[70vh] w-auto max-w-full object-contain rounded-2xl shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <h3 className="font-serif text-xl font-bold">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm mt-1">
                {filteredItems[activeLightboxIndex].subtitle}
              </p>
              <span className="text-[11px] text-amber-400 block mt-1">
                {activeLightboxIndex + 1} of {filteredItems.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
