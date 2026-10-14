import React, { useState } from 'react';
import { ArrowRight, Phone, MapPin, CheckCircle2, ShieldCheck, Compass, Search } from 'lucide-react';
import { POSTCODE_AREAS } from '../data/mockData';
import { ScreenId } from '../types';

interface AreasScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenQuote: () => void;
}

export const AreasScreen: React.FC<AreasScreenProps> = ({ onNavigate, onOpenQuote }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArea, setSelectedArea] = useState<string | null>('RH16');

  const filteredAreas = POSTCODE_AREAS.filter(
    (a) =>
      a.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      a.town.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-16 sm:space-y-24 pb-16">
      {/* 1. HERO HEADER */}
      <section className="bg-gradient-to-b from-[#0a2013] to-[#123620] text-white py-14 sm:py-20 px-4 sm:px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="text-xs uppercase font-bold tracking-widest text-[#e5a918] inline-block">
            West Sussex &amp; Surrey Territory
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Where We Provide Lawn Mastery
          </h1>
          <p className="text-sm sm:text-base text-stone-200 max-w-2xl mx-auto leading-relaxed">
            Our liveried groundskeeping fleet operates throughout prestigious private residences, gated estates, and commercial greenspaces within a 25-mile operational radius of our West Sussex base.
          </p>
        </div>
      </section>

      {/* 2. INTERACTIVE ROUTE MAP & POSTCODE DISTRICTS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-white rounded-3xl border border-[#dce3d5] p-6 sm:p-10 shadow-sm space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Illustrated Vector Map Canvas */}
            <div className="lg:col-span-7 bg-[#f2f7ef] rounded-2xl border border-[#d2ded0] p-6 relative overflow-hidden aspect-[16/11]">
              {/* Map background styling */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 400 300">
                  {/* Stylized River Thames curve */}
                  <path
                    d="M 50,70 Q 150,50 220,100 T 360,90"
                    fill="none"
                    stroke="#2e7d32"
                    strokeWidth="8"
                    strokeDasharray="4 4"
                  />
                  <path
                    d="M 20,160 Q 180,180 250,230 T 390,210"
                    fill="none"
                    stroke="#2e7d32"
                    strokeWidth="4"
                  />
                </svg>
              </div>

              {/* Pins on the territory */}
              <div className="relative h-full flex flex-col justify-between">
                <div className="flex justify-between items-start text-xs font-bold text-stone-600">
                  <span className="bg-white/80 px-2 py-0.5 rounded shadow-xs">River Thames</span>
                  <span className="bg-white/80 px-2 py-0.5 rounded shadow-xs">Windsor &amp; Eton (SL4)</span>
                </div>

                <div className="grid grid-cols-3 gap-2 my-auto text-center">
                  <div className="p-2 rounded-xl bg-white/90 border border-[#c8d8c4] shadow-xs">
                    <span className="block text-xs font-bold text-[#0d2818]">Maidenhead (SL6)</span>
                    <span className="text-[10px] text-stone-500">Tue / Thu Route</span>
                  </div>

                  <div className="p-3 rounded-2xl bg-[#0f2818] text-white border-2 border-[#e5a918] shadow-lg transform scale-105">
                    <div className="w-2 h-2 rounded-full bg-[#e5a918] mx-auto animate-ping mb-1" />
                    <span className="block text-xs font-bold text-[#e5a918]">LINDFIELD HQ (RH16)</span>
                    <span className="text-[10px] text-stone-300">Central Depot</span>
                  </div>

                  <div className="p-2 rounded-xl bg-white/90 border border-[#c8d8c4] shadow-xs">
                    <span className="block text-xs font-bold text-[#0d2818]">Virginia Water</span>
                    <span className="text-[10px] text-stone-500">GU25 · Wed Route</span>
                  </div>
                </div>

                <div className="flex justify-between items-end text-xs font-bold text-stone-600">
                  <span className="bg-white/80 px-2 py-0.5 rounded shadow-xs">Bracknell (RG12)</span>
                  <span className="bg-white/80 px-2 py-0.5 rounded shadow-xs">Cobham &amp; Oxshott (KT11)</span>
                </div>

                {/* 25-Mile Radius Badge */}
                <div className="bg-[#1b4329]/90 backdrop-blur-xs text-white p-3 rounded-xl border border-white/20 mt-4 text-xs flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#e5a918]" />
                    <span>Complimentary On-Site Lawn Surveys available within our 25-mile operational radius.</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Key Postcode Districts */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-lg text-[#0d2818]">Key Postcode Districts</h3>
                  <p className="text-xs text-stone-500">
                    We maintain active route schedules across the following prime catchment areas:
                  </p>
                </div>
              </div>

              {/* Search filter */}
              <div className="relative">
                <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter by postcode or town..."
                  className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-[#cdd8c8] focus:outline-hidden focus:border-[#1b4329]"
                />
              </div>

              {/* District grid */}
              <div className="grid grid-cols-2 gap-2 max-h-72 overflow-y-auto pr-1">
                {filteredAreas.map((area) => (
                  <button
                    key={area.code}
                    onClick={() => setSelectedArea(area.code)}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      selectedArea === area.code
                        ? 'bg-[#123620] text-white border-[#123620] shadow-sm'
                        : 'bg-[#f7f9f5] border-[#dce3d5] text-[#0d2818] hover:bg-[#edf4ea]'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span className={`text-xs font-bold ${selectedArea === area.code ? 'text-[#e5a918]' : 'text-[#0d2818]'}`}>
                        {area.code}
                      </span>
                      <span className="text-[10px] opacity-70">Active Route</span>
                    </div>
                    <span className="block text-xs font-semibold mt-1 truncate">{area.town}</span>
                    <span className={`block text-[10px] mt-0.5 ${selectedArea === area.code ? 'text-stone-300' : 'text-stone-500'}`}>
                      {area.typicalDispatchDay}
                    </span>
                  </button>
                ))}
              </div>

              <div className="p-3 bg-[#f7f9f5] rounded-xl border border-[#dce3d5] text-xs text-stone-600 flex items-center justify-between">
                <span>Not sure if your estate falls inside our zone?</span>
                <button
                  onClick={onOpenQuote}
                  className="font-bold text-[#0d2818] underline hover:text-[#2b683e]"
                >
                  Quick Check ➔
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. BOTTOM CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-[#0f2818] rounded-3xl p-8 sm:p-12 text-white border border-[#2b593a]">
          <div className="max-w-2xl space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Schedule Your Grounds Assessment Today
            </h2>
            <p className="text-sm text-stone-200 leading-relaxed">
              Serving homeowners and country estates across West Sussex, Mid Sussex and Surrey.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 rounded-xl bg-[#e5a918] hover:bg-[#d89c10] text-[#0d2818] font-bold text-sm flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Request a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="tel:+447568533301"
                className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white font-bold text-sm flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-[#e5a918]" />
                <span>Direct Dispatch: +44 7568 533301</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
