import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { ScreenId } from '../types';

interface NavBarProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onOpenQuote: () => void;
}

export const NavBar: React.FC<NavBarProps> = ({
  currentScreen,
  onNavigate,
  onOpenQuote
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8; // ~80% of viewport
      setScrolled(window.scrollY > heroHeight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: ScreenId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'work', label: 'Our Work' },
    { id: 'faq', label: 'FAQ' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (screen: ScreenId) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const transparentPages = ['home', 'work', 'contact', 'gallery', 'faq', 'areas'];
  const isTransparentPage = transparentPages.includes(currentScreen);
  const hasSolidBg = currentScreen === 'services' || currentScreen === 'about' || (isTransparentPage && scrolled);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-20 w-full px-4 sm:px-6 py-3 transition-all duration-300 ${
        hasSolidBg ? 'bg-[#0d2818]/95 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-white/90 hover:text-white font-medium text-sm transition-colors ${
                  currentScreen === link.id ? 'text-white font-semibold' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:+447568533301"
              className="text-white font-semibold text-sm hover:text-[#e5a918]"
            >
              07568 533 301
            </a>
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 rounded-xl bg-[#e5a918] hover:bg-[#d89c10] text-[#0f2417] font-bold text-sm"
            >
              Get a Quote
            </button>
          </div>
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white p-2"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-30 bg-black/90 backdrop-blur-sm md:hidden animate-in slide-in-from-top-2">
          <div className="flex flex-col items-center justify-center h-full gap-6">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="text-white text-2xl font-medium hover:text-[#e5a918]"
              >
                {link.label}
              </button>
            ))}
            <div className="flex flex-col items-center gap-4 pt-8">
              <a href="tel:+447568533301" className="text-white text-xl font-semibold hover:text-[#e5a918]">
                07568 533 301
              </a>
              <button
                onClick={() => { onOpenQuote(); setMobileMenuOpen(false); }}
                className="px-6 py-3 rounded-xl bg-[#e5a918] hover:bg-[#d89c10] text-[#0f2417] font-bold text-lg"
              >
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};