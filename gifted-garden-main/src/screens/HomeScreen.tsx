import React from 'react';
import { ArrowRight, Phone, CheckCircle2, ShieldCheck, Truck } from 'lucide-react';
import { ScreenId } from '../types';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenQuote: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* HERO */}
      <section className="relative text-white pt-20 sm:pt-28 pb-20 sm:pb-28 px-4 sm:px-6 overflow-hidden min-h-[520px] sm:min-h-[600px] min-h-screen">
        <div className="absolute inset-0 pointer-events-none">
          <img src="https://res.cloudinary.com/dqffphhit/image/upload/v1791577722/lawn-surrounded-by-border-planting--the-lowes-garden--the-coach-house--haslemere--surrey--uk-126016171-5c45374946e0fb0001a006de_rq9ojc.jpg" alt="Pristine lawn background" className="w-full h-full object-cover object-center" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#07170e]/90 via-[#0b2416]/50 to-[#0e2c1a]/80" />
        </div>

        {/* CENTERED LOGO OVERLAY - positioned between nav bar and hero text */}
        <div className="absolute top-[4%] left-1/2 -translate-x-1/2 z-10 pointer-events-none">
          <img
            src="https://res.cloudinary.com/h0krm6ex/image/upload/v1791653754/image-removebg-preview_3_w9acfr.png"
            alt="GiftedGardens Logo"
            className="h-32 sm:h-40 md:h-56 lg:h-72 w-auto object-contain drop-shadow-2xl opacity-90"
          />
        </div>

        {/* HERO CONTENT */}
        <div className="max-w-7xl mx-auto relative z-10 pt-28 sm:pt-36">
          <div className="max-w-2xl text-left space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1] text-white mt-8">
              A Sharp Eye for a Perfect Lawn.
              <span className="text-[#a5e064] underline decoration-[#e5a918]/60 underline-offset-4 sm:underline-offset-8">
              </span>
            </h1>
            <p className="text-sm sm:text-base text-stone-200 leading-relaxed">
              Lawn care, hedge cutting, pruning, turfing and ground work across West Sussex, Mid Sussex & Surrey. Local team, honest advice, no hidden charges.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button onClick={onOpenQuote} className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-xl bg-[#e5a918] hover:bg-[#d89c10] text-[#0f2417] font-bold text-sm sm:text-base shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-transform active:scale-98">
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button onClick={() => onNavigate('services')} className="w-full sm:w-auto px-6 sm:px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold text-sm sm:text-base transition-colors flex items-center justify-center gap-2 cursor-pointer">
                <span>Our Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* THREE SERVICE CATEGORY CARDS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2818] tracking-tight">What We Do</h2>
          <p className="text-stone-600 mt-2">Three clear categories — tap one to see the details.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <button onClick={() => onNavigate('services')} className="group bg-white rounded-2xl border border-[#dce3d5] p-6 shadow-xs hover:shadow-md transition-shadow text-left">
            <div className="w-12 h-12 rounded-xl bg-[#eef4ec] text-[#1c482a] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
            </div>
            <h3 className="text-xl font-bold text-[#0d2818] mb-2">Lawn Care</h3>
            <p className="text-sm text-stone-600 mb-4">Scarification, aeration, seasonal treatments, regular cutting.</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0d2818] group-hover:gap-2 transition-gap">View services <ArrowRight className="w-4 h-4" /></span>
          </button>

          <button onClick={() => onNavigate('services')} className="group bg-white rounded-2xl border border-[#dce3d5] p-6 shadow-xs hover:shadow-md transition-shadow text-left">
            <div className="w-12 h-12 rounded-xl bg-[#eef4ec] text-[#1c482a] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-[#0d2818] mb-2">Hedges, Trees & Shrubs</h3>
            <p className="text-sm text-stone-600 mb-4">Hedge cutting, pruning, fruit trees, shrub trimming.</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0d2818] group-hover:gap-2 transition-gap">View services <ArrowRight className="w-4 h-4" /></span>
          </button>

          <button onClick={() => onNavigate('services')} className="group bg-white rounded-2xl border border-[#dce3d5] p-6 shadow-xs hover:shadow-md transition-shadow text-left">
            <div className="w-12 h-12 rounded-xl bg-[#eef4ec] text-[#1c482a] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3m0 14a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2m2 0h10a2 2 0 012 2v2" /></svg>
            </div>
            <h3 className="text-xl font-bold text-[#0d2818] mb-2">Ground Work</h3>
            <p className="text-sm text-stone-600 mb-4">Top dressing, turfing, rotovating, overseeding.</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0d2818] group-hover:gap-2 transition-gap">View services <ArrowRight className="w-4 h-4" /></span>
          </button>
        </div>
      </section>

      {/* RESIDENTIAL & COMMERCIAL */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d2818] tracking-tight">Residential & Commercial Garden Maintenance</h2>
          <p className="text-stone-600 mt-2">From private gardens to estate grounds and commercial properties across West Sussex, Mid Sussex & Surrey.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <button onClick={() => onNavigate('services')} className="group bg-white rounded-2xl border border-[#dce3d5] p-6 shadow-xs hover:shadow-md transition-shadow text-left h-full">
            <div className="w-12 h-12 rounded-xl bg-[#eef4ec] text-[#1c482a] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22l9-7 9 7" /></svg>
            </div>
            <h3 className="text-xl font-bold text-[#0d2818] mb-2">Residential Gardens</h3>
            <p className="text-sm text-stone-600 mb-4">Private homes, estates & gardens. Lawn care, hedges, pruning, turfing & seasonal maintenance plans tailored to your property.</p>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2b683e]" />Weekly/fortnightly lawn cutting & edging</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2b683e]" />Seasonal treatments, scarification & aeration</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2b683e]" />Hedge cutting, pruning & fruit tree care</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2b683e]" />Turfing, overseeding & ground work</li>
            </ul>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0d2818] group-hover:gap-2 transition-gap mt-4 block">View residential services <ArrowRight className="w-4 h-4" /></span>
          </button>
          <button onClick={() => onNavigate('services')} className="group bg-white rounded-2xl border border-[#dce3d5] p-6 shadow-xs hover:shadow-md transition-shadow text-left h-full">
            <div className="w-12 h-12 rounded-xl bg-[#eef4ec] text-[#1c482a] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
            </div>
            <h3 className="text-xl font-bold text-[#0d2818] mb-2">Commercial & Estate Grounds</h3>
            <p className="text-sm text-stone-600 mb-4">Office parks, schools, care homes, event venues & large estates. Scheduled grounds maintenance, sports turf & landscape management.</p>
            <ul className="space-y-2 text-sm text-stone-600">
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2b683e]" />Scheduled grounds maintenance contracts</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2b683e]" />Sports turf & pitch maintenance</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2b683e]" />Estate & woodland management</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#2b683e]" />Schools, care homes & commercial sites</li>
            </ul>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0d2818] group-hover:gap-2 transition-gap mt-4 block">View commercial services <ArrowRight className="w-4 h-4" /></span>
          </button>
        </div>
      </section>

      {/* WHY CHOOSE US - ENHANCED */}
      <section className="bg-white border-y border-[#e5ebdf] py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0d2818]">Why Choose GiftedGardens</h2>
            <p className="text-stone-600 mt-2">Professional lawn & garden maintenance across West Sussex, Mid Sussex & Surrey since 2010.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-xl bg-[#eef4ec] text-[#1c482a] flex items-center justify-center mx-auto mb-3"><CheckCircle2 className="w-6 h-6" /></div>
              <h3 className="font-bold text-[#0d2818] mb-1">Local & Reliable</h3>
              <p className="text-sm text-stone-600">Based in West Sussex covering Mid Sussex & Surrey daily. We turn up when we say we will.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-xl bg-[#eef4ec] text-[#1c482a] flex items-center justify-center mx-auto mb-3"><ShieldCheck className="w-6 h-6" /></div>
              <h3 className="font-bold text-[#0d2818] mb-1">Fully Insured & Licensed</h3>
              <p className="text-sm text-stone-600">£5M public liability, EA licensed waste carriers, NPTC certified.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-xl bg-[#eef4ec] text-[#1c482a] flex items-center justify-center mx-auto mb-3"><Truck className="w-6 h-6" /></div>
              <h3 className="font-bold text-[#0d2818] mb-1">Professional Equipment</h3>
              <p className="text-sm text-stone-600">Camon scarifiers, Allett cylinders, Hayter rotaries — all ours, maintained in-house.</p>
            </div>
            <div className="text-center p-4">
              <div className="w-12 h-12 rounded-xl bg-[#eef4ec] text-[#1c482a] flex items-center justify-center mx-auto mb-3"><Phone className="w-6 h-6" /></div>
              <h3 className="font-bold text-[#0d2818] mb-1">Direct Contact</h3>
              <p className="text-sm text-stone-600">Speak to James directly — no call centres, no subcontractors.</p>
            </div>
          </div>

          {/* Trust Signals */}
          <div className="bg-[#f0f5ec] p-6 sm:p-8 rounded-2xl border border-[#d2ded0]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-3xl sm:text-4xl font-extrabold text-[#0d2818]">14+</p>
                <p className="text-sm text-stone-600 mt-1">Years Experience</p>
              </div>
              <div className="border-l border-[#dce3d5] sm:border-l-0 sm:border-t sm:pt-6">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#0d2818]">850+</p>
                <p className="text-sm text-stone-600 mt-1">Gardens Maintained</p>
              </div>
              <div className="border-l border-[#dce3d5] sm:border-l-0 sm:border-t sm:pt-6">
                <p className="text-3xl sm:text-4xl font-extrabold text-[#0d2818]">5.0</p>
                <p className="text-sm text-stone-600 mt-1">Rating — 180+ Reviews</p>
              </div>
            </div>
            <p className="text-sm text-stone-600 text-center mt-6 italic">"We turn up when we say we will, do the job properly, and keep every garden looking its best all year round."</p>
          </div>
        </div>
      </section>

      {/* PHONE & QUOTE BANNER */}
      <section className="bg-[#0d2818] text-white py-12 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-center sm:text-left">
          <div>
            <p className="text-xs uppercase font-bold tracking-widest text-[#e5a918] mb-1">Ready to Book?</p>
            <p className="text-lg sm:text-xl font-semibold">Call James Direct</p>
            <a href="tel:+447568533301" className="text-xl sm:text-2xl font-extrabold text-[#e5a918] hover:text-white transition-colors inline-block mt-1">07568 533 301</a>
          </div>
          <button onClick={onOpenQuote} className="w-full sm:w-auto px-6 sm:px-8 py-3 rounded-xl bg-[#e5a918] hover:bg-[#d89c10] text-[#0f2417] font-bold text-sm shadow-lg flex items-center justify-center gap-2 shrink-0">
            <span>Get a Free Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* AREAS COVERED BADGE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <p className="text-xs text-stone-500 uppercase tracking-widest font-semibold">
          Proudly serving <span className="text-[#0d2818] font-bold">West Sussex</span>, <span className="text-[#0d2818] font-bold">Mid Sussex</span> & <span className="text-[#0d2818] font-bold">Surrey</span>
        </p>
      </section>
    </div>
  );
}