import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Layers, X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { SCREENS_ORDER } from '../data/mockData';
import { ScreenId } from '../types';

interface ScreenOrderBarProps {
  currentScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
}

export const ScreenOrderBar: React.FC<ScreenOrderBarProps> = ({
  currentScreen,
  onNavigate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  const currentIndex = SCREENS_ORDER.findIndex((s) => s.id === currentScreen);
  const currentMeta = SCREENS_ORDER[currentIndex] || SCREENS_ORDER[0];

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prevScreen = SCREENS_ORDER[currentIndex - 1];
      onNavigate(prevScreen.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (currentIndex < SCREENS_ORDER.length - 1) {
      const nextScreen = SCREENS_ORDER[currentIndex + 1];
      onNavigate(nextScreen.id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectScreen = (screenId: ScreenId) => {
    onNavigate(screenId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-20 sm:bottom-6 right-4 z-40 flex items-center gap-2 bg-[#1b4329] text-white px-3.5 py-2 rounded-full shadow-lg border border-[#e5a918]/40 hover:bg-[#143420] transition-all text-xs font-semibold"
        title="Show Screen Flow Navigator"
      >
        <Layers className="w-4 h-4 text-[#e5a918]" />
        <span>Screen {currentMeta.order} of {SCREENS_ORDER.length}: {currentMeta.shortTitle}</span>
      </button>
    );
  }

  return (
    <>
      {/* Floating Bottom Navigator for Desktop and Mobile */}
      <aside aria-label="Screen Flow Navigator" className="fixed bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-xl">
        <div className="bg-[#122b1c]/95 backdrop-blur-md text-white border border-[#2e593d] shadow-2xl rounded-2xl p-2 px-3 sm:px-4 flex items-center justify-between gap-2 sm:gap-4 transition-all">
          {/* Previous Screen Button */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              currentIndex === 0
                ? 'opacity-35 cursor-not-allowed text-stone-400'
                : 'text-stone-200 hover:text-white hover:bg-white/10 active:scale-95'
            }`}
            title="Previous Screen"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="hidden sm:inline">Prev</span>
          </button>

          {/* Current Screen Selector Pill */}
          <div className="flex-1 flex items-center justify-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/15 transition-all text-left max-w-full"
            >
              <span className="w-5 h-5 rounded-full bg-[#e5a918] text-[#122b1c] text-[11px] font-bold flex items-center justify-center shrink-0">
                {currentMeta.order}
              </span>
              <div className="truncate">
                <span className="text-xs sm:text-sm font-semibold text-white truncate block">
                  {currentMeta.title}
                </span>
              </div>
              <Layers className="w-3.5 h-3.5 text-[#e5a918] shrink-0 ml-1" />
            </button>
          </div>

          {/* Next Screen Button */}
          <button
            onClick={handleNext}
            disabled={currentIndex === SCREENS_ORDER.length - 1}
            className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              currentIndex === SCREENS_ORDER.length - 1
                ? 'opacity-35 cursor-not-allowed text-stone-400'
                : 'bg-[#e5a918] text-[#122b1c] font-semibold hover:bg-[#d49811] active:scale-95'
            }`}
            title="Next Screen"
          >
            <span className="hidden sm:inline">Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Minimize toggle */}
          <button
            onClick={() => setIsMinimized(true)}
            className="text-stone-400 hover:text-white p-1 rounded-md transition-colors"
            title="Minimize"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </aside>

      {/* Screen Selection Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="bg-[#0f2417] border border-[#2b553a] rounded-2xl max-w-lg w-full p-5 text-white shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
            <div className="flex items-center justify-between pb-3 border-b border-[#23452f]">
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-[#e5a918]/20 rounded-lg text-[#e5a918]">
                  <Layers className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-base text-white">All Aligned Screens</h3>
                  <p className="text-xs text-stone-300">
                    Sequenced in exact design order (1 to {SCREENS_ORDER.length})
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-stone-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="overflow-y-auto py-3 space-y-2 flex-1 pr-1">
              {SCREENS_ORDER.map((screen) => {
                const isActive = screen.id === currentScreen;
                return (
                  <button
                    key={screen.id}
                    onClick={() => handleSelectScreen(screen.id)}
                    className={`w-full text-left p-3 rounded-xl border transition-all flex items-start gap-3 ${
                      isActive
                        ? 'bg-[#1b4329] border-[#e5a918] text-white shadow-md'
                        : 'bg-[#143020]/60 border-[#23452f] text-stone-300 hover:bg-[#1a3d28] hover:text-white'
                    }`}
                  >
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 ${
                        isActive
                          ? 'bg-[#e5a918] text-[#122b1c]'
                          : 'bg-[#23452f] text-stone-300'
                      }`}
                    >
                      {screen.order}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-semibold text-sm text-white flex items-center gap-1.5">
                          {screen.title}
                          {screen.badge && (
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/10 text-amber-300 font-normal">
                              {screen.badge}
                            </span>
                          )}
                        </span>
                        {isActive && (
                          <CheckCircle2 className="w-4 h-4 text-[#e5a918] shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-stone-300 mt-0.5 line-clamp-1">
                        {screen.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="pt-3 border-t border-[#23452f] flex items-center justify-between text-xs text-stone-400">
              <span>Navigate between views freely</span>
              <button
                onClick={() => setIsOpen(false)}
                className="px-3 py-1.5 bg-[#e5a918] text-[#122b1c] font-semibold rounded-lg hover:bg-[#d49811]"
              >
                Close Menu
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
