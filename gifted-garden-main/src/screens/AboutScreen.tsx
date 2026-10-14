import React from 'react';
import { ArrowRight, Phone, MapPin, Heart } from 'lucide-react';
import { ScreenId } from '../types';

interface AboutScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenQuote: () => void;
}

export const AboutScreen: React.FC<AboutScreenProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* HERO */}
      <section className="bg-white pt-10 sm:pt-14 pb-8 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-5 mt-8">
            <span className="text-xs uppercase font-bold tracking-widest text-[#2e683e] block">About GiftedGardens</span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0d2818] tracking-tight">
              Passionate About Lawns. Committed to Quality.
            </h1>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              Welcome to GiftedGardens, your local lawn care specialist, dedicated to helping you achieve a healthier, greener lawn that you can be proud of.
            </p>
          </div>

          <div className="relative rounded-3xl overflow-hidden aspect-[21/9] border border-[#dce3d5] shadow-md mt-10">
            <img src="https://res.cloudinary.com/h0krm6ex/image/upload/v1791631621/WhatsApp_Image_2026-10-09_at_14.26.51_zzbowp.jpg" alt="GiftedGardens team working on a lawn" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-6 sm:p-8">
              <div className="bg-[#0f2818]/90 backdrop-blur-md p-4 sm:p-5 rounded-2xl border border-white/10 text-white max-w-xl">
                <div className="flex items-center gap-3">
                  <img src="https://res.cloudinary.com/h0krm6ex/image/upload/v1791639719/73a921af-df64-40b2-acb6-6fe825d82f6f-removebg-preview_nqz93x.png" alt="GiftedGardens Logo" className="w-10 h-10 rounded-xl bg-white p-1 object-contain shadow-sm shrink-0" />
                  <div>
                    <h3 className="font-bold text-base text-white">GiftedGardens</h3>
                    <p className="text-xs text-stone-300">Giving your garden the care it deserves.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-5">
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            My name is James, and I have over 10 years of experience in the landscaping and lawn care industry. Over the years, I've built my business around providing reliable, professional service and taking pride in every garden I work on.
          </p>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            At GiftedGardens, I understand that every lawn is different. Whether your grass needs regular maintenance, some much-needed attention, or a complete seasonal refresh, I take the time to understand what your lawn needs to look its best.
          </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] border border-[#dce3d5] shadow-md">
              <img src="https://res.cloudinary.com/h0krm6ex/image/upload/v1791631620/WhatsApp_Image_2026-10-09_at_14.26.50_cvc2q9.jpg" alt="James inspecting a lawn" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL SERVICE */}
      <section className="bg-[#f0f4ec] py-16 px-4 sm:px-6 border-y border-[#dbe3d4]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl space-y-5">
            <span className="text-xs uppercase font-bold tracking-widest text-[#2e683e] block">A Personal Service You Can Rely On</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2818] tracking-tight">A Personal Service You Can Rely On</h2>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              As an independent lawn care specialist, I believe in doing things properly, paying attention to the details, and treating every customer's garden with the same care and respect I'd give my own.
            </p>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              I offer a friendly, reliable and professional service, with a focus on quality workmanship and helping customers get the best from their outdoor spaces.
            </p>
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
              My services include lawn treatments, lawn mowing, scarification, hedge cutting and general garden maintenance, tailored to suit your garden's needs.
            </p>

            <div className="p-6 rounded-2xl bg-white border-l-4 border-[#e5a918] border-y border-r border-[#dce3d5] space-y-2">
              <p className="font-serif italic text-base sm:text-lg text-[#0d2818]">"A good lawn isn't an accident of nature — it's the result of patience, sharp equipment, and genuine pride in the work."</p>
              <div className="text-xs font-bold text-[#2e683e] uppercase tracking-wider">James — Founder & Head Groundsman</div>
            </div>
          </div>
        </div>
      </section>

      {/* LOCAL COMMUNITY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl space-y-5">
          <span className="text-xs uppercase font-bold tracking-widest text-[#2e683e] block">Proudly Serving My Local Community</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2818] tracking-tight">Proudly Serving My Local Community</h2>
          <p className="flex items-start gap-3 text-base sm:text-lg text-stone-600 leading-relaxed">
            <MapPin className="w-5 h-5 text-[#2b683e] shrink-0 mt-1.5" />
            Based in Lindfield, I cover a wide area across Surrey and the surrounding areas, including Redhill, Reigate and Epsom.
          </p>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Whether you're looking for regular lawn maintenance or help bringing a tired lawn back to life, I'm here to help.
          </p>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            At GiftedGardens, my goal is simple: to provide a service you can trust and results you'll love.
          </p>
          <p className="text-base sm:text-lg text-stone-600 leading-relaxed">
            Get in touch today to discuss your lawn care needs and find out how I can help your garden reach its full potential.
          </p>
        </div>
      </section>

      {/* TAGLINE */}
      <section className="bg-[#0f2818] text-white py-14 px-4 sm:px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-4">
          <Heart className="w-8 h-8 text-[#e5a918] mx-auto" />
          <p className="text-2xl sm:text-3xl font-extrabold">GiftedGardens – Giving your garden the care it deserves</p>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0f2818] rounded-3xl p-8 sm:p-12 text-white border border-[#2b593a] relative overflow-hidden">
          <div className="max-w-2xl space-y-4 relative z-10">
            <span className="text-[11px] uppercase tracking-widest font-bold text-[#e5a918] block">Ready When You Are</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">Let Us Look After Your Garden</h2>
            <p className="text-sm text-stone-200 leading-relaxed">Fortnightly mowing, annual scarification, hedge cutting, new turf — whatever you need, our groundskeepers are ready to visit.</p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button onClick={onOpenQuote} className="px-6 py-3 rounded-xl bg-[#e5a918] hover:bg-[#d89c10] text-[#0d2818] font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"><span>Request a Free Quote</span><ArrowRight className="w-4 h-4" /></button>
              <a href="tel:+447568533301" className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2"><Phone className="w-4 h-4 text-[#e5a918]" /><span>Call Direct: 07568 533 301</span></a>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-stone-300 pt-3">
              <span>Prompt call back within 2 hours</span>
              <span>No hard sell</span>
              <span>Free on-site lawn health survey</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};