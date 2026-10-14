import React, { useState } from 'react';
import { ArrowRight, Phone, CheckCircle2, Instagram, Facebook, Filter, Eye, X } from 'lucide-react';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';
import { GALLERY_ITEMS, BEFORE_AFTER_ITEMS } from '../data/mockData';
import { ScreenId, GalleryItem } from '../types';

interface GalleryScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenQuote: () => void;
}

export const GalleryScreen: React.FC<GalleryScreenProps> = ({ onNavigate, onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects', count: 8 },
    { id: 'striping', label: 'Lawn Mowing & Striping', count: 3 },
    { id: 'hedges', label: 'Hedges & Topiary', count: 2 },
    { id: 'scarifying', label: 'Scarifying & Moss Removal', count: 2 },
    { id: 'treatments', label: 'Lawn Treatments', count: 1 },
    { id: 'maintenance', label: 'Garden Maintenance', count: 2 }
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-[#0a2013] to-[#123620] text-white py-14 sm:py-20 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#e5a918] inline-block">
            Portfolio of Craftsmanship
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Work &amp; Lawn Transformations
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed">
            Explore real estates, domestic lawns, and seasonal restorations completed by our master grounds team across West Sussex and Surrey.
          </p>

          <div className="flex flex-wrap justify-center items-center gap-3 pt-3 text-xs text-stone-300">
            <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#e5a918]" /> Over 850+ Gardens Revived
            </span>
            <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#e5a918]" /> 100% In-House Team
            </span>
            <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/15 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#e5a918]" /> Before &amp; After Proven Results
            </span>
          </div>
        </div>
      </section>

      {/* 2. CATEGORY FILTERS & PHOTO GALLERY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Interactive Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap border transition-all cursor-pointer flex items-center gap-2 ${
                activeCategory === cat.id
                  ? 'bg-[#0d2818] text-white border-[#0d2818] shadow-sm'
                  : 'bg-white text-stone-700 border-[#dce3d5] hover:bg-[#f1f6ee]'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  activeCategory === cat.id
                    ? 'bg-[#e5a918] text-[#0d2818]'
                    : 'bg-stone-100 text-stone-600'
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedPhoto(item)}
              className="group bg-white rounded-2xl border border-[#dce3d5] overflow-hidden shadow-xs hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-3 py-1.5 rounded-lg bg-white/90 text-[#0d2818] text-xs font-bold flex items-center gap-1.5 shadow-md">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Detail</span>
                  </span>
                </div>
                <span className="absolute top-3 left-3 bg-[#0d2818]/90 text-[#e5a918] text-[10px] font-bold px-2.5 py-1 rounded-md border border-[#234d31]">
                  {item.categoryLabel}
                </span>
              </div>

              <div className="p-4 space-y-1">
                <h3 className="font-bold text-sm text-[#0d2818] group-hover:text-[#2b683e] transition-colors line-clamp-1">
                  {item.title}
                </h3>
                <p className="text-xs text-stone-500 line-clamp-1">{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. DRAMATIC LAWN TRANSFORMATIONS (Interactive Sliders) */}
      <section className="bg-[#f0f4ec] py-16 px-4 sm:px-6 border-y border-[#dbe3d4]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs uppercase font-bold tracking-widest text-[#2e683e] block mb-1">
              Verified Case Studies
            </span>
            <h2 className="text-3xl font-extrabold text-[#0d2818] tracking-tight">
              Dramatic Lawn Transformations
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-1">
              Drag the gold handle across each project to reveal the real transformation delivered by our horticultural specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {BEFORE_AFTER_ITEMS.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl border border-[#dce3d5] p-4 shadow-xs space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <BeforeAfterSlider
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                    beforeLabel="BEFORE"
                    afterLabel="AFTER"
                    aspectRatio="aspect-[4/3]"
                  />
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-500 block">
                      {item.location}
                    </span>
                    <h3 className="font-bold text-sm text-[#0d2818] line-clamp-2 mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <div className="space-y-2 border-t border-[#edf1e8] pt-3 text-xs">
                  <div className="flex justify-between text-stone-600">
                    <span>Timeframe:</span>
                    <strong className="text-[#0d2818]">{item.timeframe}</strong>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Treatments:</span>
                    <span className="font-medium text-[#2e683e]">{item.treatments}</span>
                  </div>
                  <div className="flex justify-between text-stone-600">
                    <span>Result:</span>
                    <strong className="text-[#0d2818]">{item.resultMetric}</strong>
                  </div>
                  <div className="pt-2 text-[11px] text-stone-500 italic bg-[#f7f9f5] p-2 rounded-lg">
                    {item.afterDescription}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BEHIND THE SCENES ON SITE (Social Feed) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-xl mx-auto mb-8">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2e683e] block mb-1">
            Behind the Scenes on Site
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0d2818]">
            Follow Our Work On Instagram &amp; Facebook
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1">
            <strong className="text-[#0d2818]">@GiftedGardensUK</strong> · Daily updates, striping satisfaction, and behind-the-scenes grounds care.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {[
            { img: 'https://images.unsplash.com/photo-1558904541-efa8c4a08931?auto=format&fit=crop&w=400&q=80', caption: 'Lindfield stripes' },
            { img: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=400&q=80', caption: 'Sharpening mower reel' },
            { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80', caption: 'James with van' },
            { img: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=400&q=80', caption: 'On-site grounds care' },
            { img: 'https://images.unsplash.com/photo-1592417817098-8f3d6910985c?auto=format&fit=crop&w=400&q=80', caption: 'Extracted moss bags' },
            { img: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=400&q=80', caption: 'Yew hedge leveled' }
          ].map((post, idx) => (
            <div key={idx} className="relative rounded-xl overflow-hidden aspect-square group shadow-xs">
              <img src={post.img} alt={post.caption} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-2 text-center text-white text-[10px] font-semibold">
                {post.caption}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-3">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl border border-[#cdd8c8] hover:bg-stone-50 text-[#0d2818] font-bold text-xs flex items-center gap-2"
          >
            <Instagram className="w-4 h-4 text-pink-600" />
            <span>Follow on Instagram</span>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-2.5 rounded-xl border border-[#cdd8c8] hover:bg-stone-50 text-[#0d2818] font-bold text-xs flex items-center gap-2"
          >
            <Facebook className="w-4 h-4 text-blue-600" />
            <span>Like on Facebook</span>
          </a>
        </div>
      </section>

      {/* 5. BOTTOM CONVERSION CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0f2818] rounded-3xl p-8 sm:p-12 text-white border border-[#2b593a]">
          <div className="max-w-2xl space-y-4">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#e5a918] block">
              Transform Your Grounds
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Want Results Like These for Your Garden?
            </h2>
            <p className="text-sm text-stone-200 leading-relaxed">
              Book your free, no-obligation on-site lawn health assessment. Our head groundsman will survey your grass, soil, and borders.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 rounded-xl bg-[#e5a918] hover:bg-[#d89c10] text-[#0d2818] font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+447568533301"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#e5a918]" />
                <span>Call Dispatch: +44 7568 533301</span>
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-stone-300 pt-3">
              <span>✓ Free On-Site Lawn Survey</span>
              <span>✓ No Obligation Proposal</span>
              <span>✓ 48-Hour Slot Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-xs p-4">
          <div className="relative max-w-3xl w-full bg-[#0f2417] text-white rounded-2xl overflow-hidden shadow-2xl border border-[#2b593a] animate-in zoom-in-95">
            <div className="flex items-center justify-between p-4 border-b border-[#23452f]">
              <div>
                <span className="text-[10px] text-[#e5a918] font-bold uppercase tracking-wider block">
                  {selectedPhoto.categoryLabel}
                </span>
                <h3 className="font-bold text-base">{selectedPhoto.title}</h3>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1 rounded-lg text-stone-300 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="aspect-[16/10] bg-black">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 bg-[#143121] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
              <div>
                <p className="text-stone-300">{selectedPhoto.description}</p>
                <span className="text-[11px] text-stone-400 mt-0.5 block">{selectedPhoto.location}</span>
              </div>
              <button
                onClick={() => {
                  setSelectedPhoto(null);
                  onOpenQuote();
                }}
                className="px-4 py-2 bg-[#e5a918] text-[#0f2417] font-bold rounded-lg shrink-0 hover:bg-[#d89c10]"
              >
                Request Similar Service
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
