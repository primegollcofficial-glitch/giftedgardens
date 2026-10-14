import React, { useState } from 'react';
import { ArrowRight, Phone, Filter, Eye, X } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/mockData';
import { ScreenId } from '../types';

interface WorkScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenQuote: () => void;
}

export const WorkScreen: React.FC<WorkScreenProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof GALLERY_ITEMS[0] | null>(null);

  const galleryCategories = [
    { id: 'all', label: 'All Projects', count: GALLERY_ITEMS.length },
    { id: 'lawns', label: 'Lawns', count: GALLERY_ITEMS.filter(i => i.category === 'lawns').length },
    { id: 'hedges-trees', label: 'Hedges & Trees', count: GALLERY_ITEMS.filter(i => i.category === 'hedges-trees').length },
    { id: 'ground-work', label: 'Ground Work', count: GALLERY_ITEMS.filter(i => i.category === 'ground-work').length }
  ];

  const filteredGallery = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  const openLightbox = (item: typeof GALLERY_ITEMS[0]) => setSelectedPhoto(item);
  const closeLightbox = () => setSelectedPhoto(null);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* HERO */}
      <section className="relative text-white py-14 sm:py-20 px-4 sm:px-6 text-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://res.cloudinary.com/h0krm6ex/image/upload/v1791631618/WhatsApp_Image_2026-10-09_at_14.26.54_6_vu57qn.jpg" alt="Large estate lawn maintenance" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07170e]/90 via-[#0b2416]/70 to-[#0e2c1a]/95" />
        </div>
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#e5a918] inline-block">
            Portfolio & Reputation
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Work & Client Reviews
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed">
            Real gardens, real transformations, real feedback from homeowners across West Sussex and Surrey.
          </p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#0d2818]">Photo Gallery</h2>
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {galleryCategories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap border transition-all cursor-pointer flex items-center gap-2 ${activeCategory === cat.id
                ? 'bg-[#0d2818] text-white border-[#0d2818] shadow-sm'
                : 'bg-white text-stone-700 border-[#dce3d5] hover:bg-[#f1f6ee]'}`}
            >
              <span>{cat.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${activeCategory === cat.id ? 'bg-[#e5a918] text-[#0d2818]' : 'bg-stone-100 text-stone-600'}`}>
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredGallery.map(item => (
            <button
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-in fade-in">
            <button onClick={closeLightbox} className="absolute top-4 right-4 text-white/70 hover:text-white p-2"><X className="w-8 h-8" /></button>
            <div className="max-w-4xl w-full max-h-[85vh] flex flex-col">
              <img src={selectedPhoto.image} alt={selectedPhoto.title} className="max-h-[70vh] object-contain rounded-lg" />
            </div>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
        <button onClick={onOpenQuote} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#e5a918] hover:bg-[#d89c10] text-[#0f2417] font-bold text-sm">
          Get a Free Quote
          <ArrowRight className="w-4 h-4" />
        </button>
      </section>
    </div>
  );
}