import React, { useState } from 'react';
import { ArrowRight, Phone, Search, ChevronDown, ChevronUp, ShieldCheck, CheckCircle2, MessageCircle } from 'lucide-react';
import { FAQ_ITEMS } from '../data/mockData';
import { ScreenId } from '../types';

interface FaqScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenQuote: () => void;
  onOpenCallback: () => void;
}

export const FaqScreen: React.FC<FaqScreenProps> = ({
  onOpenQuote,
  onOpenCallback
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true
  });

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'pricing', label: 'Pricing & Quotes' },
    { id: 'booking', label: 'Booking & Access' },
    { id: 'treatments', label: 'Services & Treatments' },
    { id: 'aftercare', label: 'Aftercare & Lawn Health' },
    { id: 'weather', label: 'Weather & Scheduling' }
  ];

  const popularTags = ['Pricing', 'Rain policy', 'Waste disposal', 'Mowing frequency', 'Dog & Pet Safety'];

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const filteredFaqs = FAQ_ITEMS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags?.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-[#0a2013] to-[#123620] text-white py-14 sm:py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Frequently Asked Questions
          </h1>

          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our precision lawn care, seasonal treatments, scheduling, and garden maintenance services across West Sussex &amp; Surrey.
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto pt-2">
            <div className="relative flex items-center bg-white rounded-2xl p-1.5 shadow-xl border border-[#dce3d5]">
              <Search className="w-5 h-5 text-stone-400 ml-3 mr-2 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search questions (e.g. scarification, rain policy, pricing, green waste)..."
                className="w-full text-xs sm:text-sm text-[#0d2818] placeholder:text-stone-400 focus:outline-hidden py-2"
              />
              <button
                type="button"
                className="px-5 py-2.5 bg-[#0d2818] text-white rounded-xl text-xs font-bold hover:bg-[#194527] transition-colors shrink-0"
              >
                Search
              </button>
            </div>

            {/* Popular tags */}
            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-xs text-stone-300">
              <span className="text-[11px] text-stone-400">Popular tags:</span>
              {popularTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSearchQuery(tag)}
                  className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-stone-200 text-[11px] transition-colors"
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. CATEGORIES FILTER & QUESTIONS LIST */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start sm:justify-center">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setActiveCategory(c.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap border transition-all cursor-pointer ${
                activeCategory === c.id
                  ? 'bg-[#0d2818] text-white border-[#0d2818] shadow-xs'
                  : 'bg-white text-stone-700 border-[#dce3d5] hover:bg-[#f1f6ee]'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Questions Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl border border-[#dce3d5] p-6">
              <p className="text-stone-500 text-sm">No questions found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="mt-3 text-xs font-bold text-[#2e683e] underline"
              >
                Reset filters
              </button>
            </div>
          ) : (
            filteredFaqs.map((faq) => {
              const isOpen = !!openItems[faq.id];
              return (
                <div
                  key={faq.id}
                  className="bg-white rounded-2xl border border-[#dce3d5] overflow-hidden shadow-xs transition-shadow hover:shadow-sm"
                >
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-[#0d2818] hover:bg-[#fafbf9]"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-[#f0f5ec] text-[#2e683e] font-extrabold text-xs flex items-center justify-center shrink-0">
                        {faq.number}
                      </span>
                      <span>{faq.question}</span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#2b683e] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-stone-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-5 pt-0 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-[#edf1e8] bg-[#fcfdfb] space-y-4">
                      <p>{faq.answer}</p>

                      {faq.id === 'faq-1' && (
                        <div className="p-3.5 rounded-xl bg-[#f0f5ec] border border-[#d2ded0] text-xs text-[#1c4829] flex items-start gap-2.5">
                          <ShieldCheck className="w-4 h-4 text-[#2b683e] shrink-0 mt-0.5" />
                          <span>
                            <strong>The GiftedGardens Assurance:</strong> You receive a written breakdown prior to any work starting. We never apply unexpected surcharges, fuel levies, or disposal markups.
                          </span>
                        </div>
                      )}

                      {faq.tags && (
                        <div className="flex items-center gap-2 text-[10px] text-stone-400 pt-1">
                          <span>Tags:</span>
                          {faq.tags.map((t) => (
                            <span key={t} className="bg-stone-100 text-stone-600 px-2 py-0.5 rounded">
                              {t}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </section>

      {/* 3. STILL HAVE QUESTIONS? WE'RE HERE TO HELP */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="bg-[#f0f4ec] rounded-3xl p-6 sm:p-10 border border-[#dbe3d4] space-y-6">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#2e7d32]" />
            <span className="text-xs font-bold text-[#2e683e]">
              Average response under 2 hours during working hours
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold text-[#0d2818]">
              Still Have Questions? We’re Here to Help
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
              Can't find the specific answer you're looking for? Speak directly with James. We're always delighted to provide free, honest horticultural guidance tailored to your garden's exact soil and aspect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <a
              href="tel:+447568533301"
              className="px-6 py-3 rounded-xl bg-[#e5a918] hover:bg-[#d89c10] text-[#0d2818] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Call Us: +44 7568 533301</span>
            </a>

            <button
              onClick={onOpenCallback}
              className="px-6 py-3 rounded-xl bg-[#0d2818] hover:bg-[#1a4329] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-4 h-4 text-[#e5a918]" />
              <span>Request Call Back</span>
            </button>
          </div>

          <div className="flex flex-wrap gap-4 text-xs text-stone-500 border-t border-[#dce3d5] pt-4">
            <span>⏱ Mon – Sat: 7:30am – 6:30pm</span>
            <span>📍 West Sussex &amp; Surrey Dispatch</span>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0f2818] rounded-3xl p-8 sm:p-12 text-white border border-[#2b593a]">
          <div className="max-w-2xl space-y-4">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#e5a918] block">
              Complimentary On-Site Diagnostic
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Ready for a Pristine, Striped Lawn?
            </h2>
            <p className="text-sm text-stone-200 leading-relaxed">
              Book your complimentary on-site lawn survey and diagnostic quote today. No pushy sales calls, just genuine advice from local lawn specialists.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 rounded-xl bg-[#e5a918] hover:bg-[#d89c10] text-[#0d2818] font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Get Your Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+447568533301"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#e5a918]" />
                <span>+44 7568 533301</span>
              </a>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-stone-300 pt-3">
              <span>✓ £5M Public Liability Cover</span>
              <span>✓ EA Licensed Waste Carrier</span>
              <span>✓ NPTC Qualified Applicators</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
