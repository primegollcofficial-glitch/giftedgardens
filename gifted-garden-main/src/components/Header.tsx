import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { ScreenId } from '../types';

interface HeaderProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentScreen,
  onNavigate,
  onOpenQuote
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: ScreenId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Our Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (screen: ScreenId) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className={`sticky top-0 z-30 w-full transition-all duration-200 ${
      scrolled ? 'bg-white/95 backdrop-blur-md border-b border-[#e1e7db] shadow-sm' : 'bg-black/40 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 sm:h-20 flex items-center justify-between">
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 text-left group focus:outline-none cursor-pointer"
        >
          <span className="text-xl font-extrabold text-white group-hover:scale-102 transition-transform">GiftedGardens</span>
        </button>

        <nav className="hidden lg:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = currentScreen === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-colors py-2 relative ${scrolled
                  ? (isActive ? 'text-[#0d2818] font-bold' : 'text-[#2d4032] hover:text-[#0d2818]')
                  : (isActive ? 'text-white font-bold' : 'text-white/90 hover:text-white')}`}
              >
                {link.label}
                {!scrolled && isActive && (
                  <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-6 h-0.5 bg-white rounded-full" />
                )}
                {scrolled && isActive && (
                  <span className="absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-6 h-0.5 bg-[#0d2818] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+447568533301"
            className={`flex items-center gap-2 font-bold text-sm transition-colors ${
              scrolled ? 'text-[#0d2818] hover:text-[#1e482b]' : 'text-white hover:text-white/80'
            }`}
          >
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              scrolled ? 'bg-[#eef4ec] text-[#1c482a]' : 'bg-white/20 text-white'
            }`}>
              <Phone className="w-4 h-4" />
            </div>
            <span>07568 533 301</span>
          </a>

          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 rounded-xl bg-[#e5a918] hover:bg-[#d89c10] text-[#0f2417] font-bold text-sm shadow-sm transition-all hover:shadow-md active:scale-97 flex items-center gap-2 cursor-pointer"
          >
            <span>Get a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <a
            href="tel:+447568533301"
            className="p-2 rounded-lg bg-[#eef4ec] text-[#0d2818] hover:bg-[#e2edd9]"
            title="Call 07568 533 301"
          >
            <Phone className="w-4.5 h-4.5" />
          </a>

          <button
            onClick={onOpenQuote}
            className="px-3 py-2 rounded-lg bg-[#e5a918] text-[#0f2417] text-xs font-bold shrink-0"
          >
            Quote
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-[#2d4032] hover:bg-[#f1f5ee]"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#e1e7db] animate-in slide-in-from-top-2">
          <nav className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  currentScreen === link.id
                    ? (scrolled ? 'bg-[#eef4eb] text-[#0d2818] font-bold' : 'bg-white/20 text-white font-bold')
                    : (scrolled ? 'text-[#334637] hover:bg-[#f6f9f3]' : 'text-white/90 hover:bg-white/10 hover:text-white')
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t flex items-center gap-3">
              <a href="tel:+447568533301" className={`flex-1 text-center py-2.5 rounded-xl font-bold text-sm transition-colors ${
                scrolled ? 'bg-[#eef4ec] text-[#0d2818] hover:bg-[#e2edd9]' : 'bg-white/10 text-white hover:bg-white/20'
              }`}>Call 07568 533 301</a>
              <button onClick={onOpenQuote} className="flex-1 py-2.5 rounded-xl bg-[#e5a918] text-[#0f2417] font-bold text-sm">Get a Quote</button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};