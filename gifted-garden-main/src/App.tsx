import React, { useState, useEffect } from 'react';
import { ScreenId } from './types';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { CallbackModal } from './components/CallbackModal';
import { CookieBanner } from './components/CookieBanner';

import { HomeScreen } from './screens/HomeScreen';
import { ServicesScreen } from './screens/ServicesScreen';
import { WorkScreen } from './screens/WorkScreen';
import { AboutScreen } from './screens/AboutScreen';
import { ContactScreen } from './screens/ContactScreen';
import { GalleryScreen } from './screens/GalleryScreen';
import { FaqScreen } from './screens/FaqScreen';
import { AreasScreen } from './screens/AreasScreen';

const VALID_SCREENS: ScreenId[] = [
  'home',
  'services',
  'work',
  'gallery',
  'faq',
  'areas',
  'about',
  'contact',
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenId>('home');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [callbackModalOpen, setCallbackModalOpen] = useState(false);
  const [quoteService, setQuoteService] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handlePathChange = () => {
      const path = window.location.pathname.replace(/^\/+/, '') as ScreenId;
      if (VALID_SCREENS.includes(path)) {
        setCurrentScreen(path);
      }
    };
    handlePathChange();
    window.addEventListener('popstate', handlePathChange);
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);

  const handleNavigate = (screen: ScreenId) => {
    setCurrentScreen(screen);
    window.history.pushState({}, '', `/${screen}`);
  };

  const handleOpenQuote = (service?: string) => {
    setQuoteService(service);
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f8f4] text-[#1c2d20] font-sans selection:bg-[#204e33] selection:text-white">
      <NavBar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuote()}
      />

      <main className="flex-1 w-full">
        {currentScreen === 'home' && <HomeScreen onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote()} />}
        {currentScreen === 'services' && <ServicesScreen onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote()} />}
        {currentScreen === 'work' && <WorkScreen onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote()} />}
        {currentScreen === 'gallery' && <GalleryScreen onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote()} />}
        {currentScreen === 'faq' && <FaqScreen onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote()} onOpenCallback={() => setCallbackModalOpen(true)} />}
        {currentScreen === 'areas' && <AreasScreen onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote()} />}
        {currentScreen === 'about' && <AboutScreen onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote()} />}
        {currentScreen === 'contact' && <ContactScreen onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote()} />}
      </main>

      <Footer onNavigate={handleNavigate} onOpenQuote={() => handleOpenQuote()} />

      <CookieBanner />

      <QuoteModal isOpen={quoteModalOpen} onClose={() => setQuoteModalOpen(false)} defaultService={quoteService} />
      <CallbackModal isOpen={callbackModalOpen} onClose={() => setCallbackModalOpen(false)} />
    </div>
  );
}