import React from 'react';
import { Phone, Mail, MapPin, Shield, CheckCircle, Clock } from 'lucide-react';
import { ScreenId } from '../types';

interface FooterProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  const handleNav = (screen: ScreenId) => {
    onNavigate(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0b1f13] text-stone-300 pt-12 pb-8 border-t border-[#183924]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-8 pb-10 border-b border-[#1b3d27]">
          <div className="lg:col-span-2 space-y-4">
            <img
              src="https://res.cloudinary.com/h0krm6ex/image/upload/v1791653754/image-removebg-preview_3_w9acfr.png"
              alt="GiftedGardens Logo"
              className="h-12 sm:h-14 w-auto object-contain"
            />
            <p className="text-sm text-stone-200 leading-relaxed max-w-sm">
              Lawn care, hedge cutting, pruning, turfing and ground work across West Sussex, Mid Sussex & Surrey.
              Local team, honest advice, no hidden charges.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 max-w-md">
              <div className="p-2.5 rounded-lg bg-[#122e1d] border border-[#234d30] text-center">
                <span className="block text-xs font-bold text-white">EA Licensed</span>
                <span className="text-[10px] text-stone-400">Waste Carrier CBDU512903</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#122e1d] border border-[#234d30] text-center">
                <span className="block text-xs font-bold text-white">NPTC Certified</span>
                <span className="text-[10px] text-stone-400">Pesticides (PA1/PA6)</span>
              </div>
              <div className="p-2.5 rounded-lg bg-[#122e1d] border border-[#234d30] text-center">
                <span className="block text-xs font-bold text-white">£5M Insurance</span>
                <span className="text-[10px] text-stone-400">Public Liability</span>
              </div>
            </div>
            <div className="pt-2 text-xs text-stone-300">
              Direct: <a href="tel:+447568533301" className="text-[#e5a918] font-bold hover:underline">07568 533 301</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4 uppercase text-[11px] text-[#e5a918]">Services</h4>
            <ul className="space-y-2.5 text-xs text-stone-200">
              <li><button onClick={() => handleNav('services')} className="hover:text-white transition-colors">Lawn Care</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-white transition-colors">Hedges, Trees & Shrubs</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-white transition-colors">Ground Work</button></li>
              <li><button onClick={() => handleNav('work')} className="hover:text-white transition-colors">Our Work & Reviews</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4 uppercase text-[11px] text-[#e5a918]">Areas</h4>
            <ul className="space-y-2.5 text-xs text-stone-200">
              <li>West Sussex (RH10–RH20)</li>
              <li>Mid Sussex (RH16–RH17, RH19)</li>
              <li>Surrey (GU5–GU8, GU25–GU27, KT11, KT16–KT20, RH1–RH2, RH5)</li>
              <li>Cobham & Oxshott (KT11)</li>
              <li><button onClick={() => handleNav('areas')} className="hover:text-white transition-colors underline underline-offset-2">View all areas we cover</button></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm tracking-wide mb-4 uppercase text-[11px] text-[#e5a918]">Contact</h4>
            <ul className="space-y-3 text-xs text-stone-200">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-[#e5a918]" /><a href="tel:+447568533301" className="hover:text-white">07568 533 301</a></li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-[#e5a918]" /><a href="mailto:James@giftedgardens.biz" className="hover:text-white">James@giftedgardens.biz</a></li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-[#e5a918]" /><span>Based in West Sussex, covering 25 miles</span></li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-[#e5a918]" /><span>Mon–Fri 7am–6pm, Sat 8am–1pm</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-stone-400">
          <p>© {new Date().getFullYear()} GiftedGardens. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button onClick={() => handleNav('gallery')} className="hover:text-white transition-colors">Gallery</button>
            <button onClick={() => handleNav('faq')} className="hover:text-white transition-colors">FAQ</button>
            <button onClick={() => handleNav('about')} className="hover:text-white transition-colors">About Us</button>
            <button onClick={() => handleNav('contact')} className="hover:text-white transition-colors">Contact</button>
            <button onClick={onOpenQuote} className="px-4 py-1.5 rounded-lg bg-[#e5a918] text-[#0f2417] font-bold hover:bg-[#d89c10]">Get a Quote</button>
          </div>
        </div>
      </div>
    </footer>
  );
};