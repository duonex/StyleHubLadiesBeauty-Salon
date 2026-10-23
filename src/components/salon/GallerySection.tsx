import React, { useState } from 'react';
import { Camera, Eye } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'bridal' | 'hair' | 'skin' | 'nails';
  categoryLabel: string;
  image: string;
}

export const GallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [previewImage, setPreviewImage] = useState<GalleryItem | null>(null);

  const galleryItems: GalleryItem[] = [
    {
      id: 'g1',
      title: 'South Indian Muhurtham Bride',
      category: 'bridal',
      categoryLabel: 'Bridal Artistry',
      image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=900&auto=format&fit=crop',
    },
    {
      id: 'g2',
      title: 'Signature Layered Haircut & Blowout',
      category: 'hair',
      categoryLabel: 'Hair Transformation',
      image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=900&auto=format&fit=crop',
    },
    {
      id: 'g3',
      title: '24K Gold Hydra Facial Glow',
      category: 'skin',
      categoryLabel: 'Skin Rejuvenation',
      image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=900&auto=format&fit=crop',
    },
    {
      id: 'g4',
      title: 'Deluxe Classic Pedicure & Foot Care',
      category: 'nails',
      categoryLabel: 'Nails & Pedicure',
      image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?q=80&w=900&auto=format&fit=crop',
    },
    {
      id: 'g5',
      title: 'Traditional Floral Braid & Saree Styling',
      category: 'bridal',
      categoryLabel: 'Bridal Artistry',
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=900&auto=format&fit=crop',
    },
    {
      id: 'g6',
      title: 'Designer Nail Art & Manicure Grooming',
      category: 'nails',
      categoryLabel: 'Nails & Manicure',
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=900&auto=format&fit=crop',
    },
  ];

  const filtered = selectedCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 border border-rose-200/80 text-[#B84E67] text-xs font-semibold uppercase tracking-wider mb-3">
            <Camera className="w-3.5 h-3.5" />
            <span>Studio Portfolio & Atmosphere</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#121316] tracking-tight">
            Style Hub Visual Gallery
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-600">
            Peek into our welcoming salon, private bridal makeover suite, and real transformation stories.
          </p>
        </div>

        {/* Gallery Filter Pills */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {[
            { id: 'all', label: 'All Photos' },
            { id: 'bridal', label: 'Bridal Artistry' },
            { id: 'hair', label: 'Hair & Styling' },
            { id: 'skin', label: 'Facials & Skin' },
            { id: 'nails', label: 'Nails & Pedicure' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#121316] text-white shadow-sm'
                  : 'bg-zinc-100 text-zinc-600 hover:bg-zinc-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() => setPreviewImage(item)}
              className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#DFC085] block mb-1">
                  {item.categoryLabel}
                </span>
                <h3 className="font-serif text-lg font-bold">
                  {item.title}
                </h3>
              </div>

              <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Eye className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {previewImage && (
          <div
            onClick={() => setPreviewImage(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-zinc-900 rounded-3xl overflow-hidden max-w-2xl w-full border border-white/20 shadow-2xl relative"
            >
              <img
                src={previewImage.image}
                alt={previewImage.title}
                className="w-full max-h-[70vh] object-cover"
              />
              <div className="p-6 text-white flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#DFC085] font-semibold uppercase tracking-wider block">
                    {previewImage.categoryLabel}
                  </span>
                  <h4 className="font-serif text-xl font-bold mt-0.5">
                    {previewImage.title}
                  </h4>
                </div>
                <button
                  onClick={() => setPreviewImage(null)}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
