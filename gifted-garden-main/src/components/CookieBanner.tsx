import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [accepted, setAccepted] = useState<'all' | 'essential' | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const handleAccept = (type: 'all' | 'essential') => {
    localStorage.setItem('cookie-consent', type);
    setAccepted(type);
    setShowBanner(false);
  };

  const handleReject = () => {
    localStorage.setItem('cookie-consent', 'essential');
    setAccepted('essential');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-[#dce3d5] shadow-xl animate-in slide-in-from-bottom-4" role="dialog" aria-label="Cookie consent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="w-8 h-8 rounded-lg bg-[#eef4ec] text-[#1c482a] flex items-center justify-center shrink-0 mt-0.5">
              <Check className="w-4 h-4" />
            </div>
            <div className="text-sm text-[#1c2d20] leading-relaxed">
              <p className="font-semibold">We use cookies</p>
              <p className="text-stone-600 mt-0.5">
                This site uses essential cookies to function properly. With your consent, we may also use analytics cookies to understand how you use our site and improve your experience. <a href="/privacy" className="text-[#0d2818] underline hover:text-[#e5a918]">Read our Cookie Policy</a>.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              onClick={() => handleAccept('all')}
              className="px-5 py-2.5 rounded-xl bg-[#0d2818] text-white font-bold text-sm hover:bg-[#163a23] transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleReject}
              className="px-5 py-2.5 rounded-xl border border-[#dce3d5] text-[#1c2d20] font-bold text-sm hover:bg-stone-50 transition-colors"
            >
              Essential Only
            </button>
            <button
              onClick={() => setShowBanner(false)}
              className="sm:hidden p-2 text-stone-400 hover:text-stone-600"
              aria-label="Dismiss"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};