import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  aspectRatio = 'aspect-[16/10]'
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  return (
    <div
      ref={containerRef}
      className={`relative select-none overflow-hidden rounded-xl border border-[#d6dfce] shadow-sm ${aspectRatio} group cursor-ew-resize`}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* After image (background layer) */}
      <img
        src={afterImage}
        alt="After lawn restoration"
        className="absolute inset-0 h-full w-full object-cover"
        draggable={false}
      />

      {/* Before image (clipped overlay) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPosition}%` }}
      >
        <img
          src={beforeImage}
          alt="Before lawn restoration"
          className="absolute inset-0 h-full w-full max-w-none object-cover"
          style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : '100%' }}
          draggable={false}
        />
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-amber-400 shadow-[0_0_10px_rgba(0,0,0,0.5)] z-10"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Handle pill */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#e5a918] border-2 border-white shadow-lg flex items-center justify-center cursor-ew-resize hover:scale-110 active:scale-95 transition-transform">
          <div className="flex items-center gap-0.5">
            <svg className="w-2.5 h-2.5 text-stone-900 rotate-180" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            <svg className="w-2.5 h-2.5 text-stone-900" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Before tag badge */}
      <div className="absolute top-3 left-3 z-10 px-2.5 py-1 bg-black/75 backdrop-blur-xs text-white text-[11px] font-bold tracking-wider uppercase rounded-md shadow-sm border border-white/10 pointer-events-none">
        {beforeLabel}
      </div>

      {/* After tag badge */}
      <div className="absolute top-3 right-3 z-10 px-2.5 py-1 bg-[#1b4329]/90 backdrop-blur-xs text-amber-300 text-[11px] font-bold tracking-wider uppercase rounded-md shadow-sm border border-amber-400/30 pointer-events-none">
        {afterLabel}
      </div>

      {/* Instruction hint */}
      <div className="absolute bottom-2 inset-x-0 flex justify-center pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity">
        <span className="text-[10px] text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-0.5 rounded-full font-medium tracking-tight">
          Drag slider to compare
        </span>
      </div>
    </div>
  );
};
