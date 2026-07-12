import React, { useEffect, useCallback, useState, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, RotateCcw } from 'lucide-react';

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const MIN_SCALE = 1;
const MAX_SCALE = 4;
const ZOOM_STEP = 0.5;

export default function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const [scale, setScale] = useState(1);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const dragState = useRef<{ dragging: boolean; startX: number; startY: number; originX: number; originY: number }>({
    dragging: false,
    startX: 0,
    startY: 0,
    originX: 0,
    originY: 0,
  });
  const imgRef = useRef<HTMLImageElement>(null);

  const resetZoom = useCallback(() => {
    setScale(1);
    setPos({ x: 0, y: 0 });
  }, []);

  // Reset zoom whenever the displayed image changes
  useEffect(() => {
    resetZoom();
  }, [index, resetZoom]);

  const clampScale = (v: number) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, v));

  const zoomIn = useCallback(() => {
    setScale((s) => clampScale(s + ZOOM_STEP));
  }, []);

  const zoomOut = useCallback(() => {
    setScale((s) => {
      const next = clampScale(s - ZOOM_STEP);
      if (next === MIN_SCALE) setPos({ x: 0, y: 0 });
      return next;
    });
  }, []);

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
      if (e.key === '+' || e.key === '=') zoomIn();
      if (e.key === '-' || e.key === '_') zoomOut();
      if (e.key === '0') resetZoom();
    },
    [onClose, onPrev, onNext, zoomIn, zoomOut, resetZoom]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  // Scroll wheel zoom, centered roughly on cursor
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -ZOOM_STEP : ZOOM_STEP;
    setScale((s) => {
      const next = clampScale(s + delta);
      if (next === MIN_SCALE) setPos({ x: 0, y: 0 });
      return next;
    });
  };

  // Drag to pan when zoomed in
  const handlePointerDown = (e: React.PointerEvent) => {
    if (scale <= MIN_SCALE) return;
    e.stopPropagation();
    dragState.current = {
      dragging: true,
      startX: e.clientX,
      startY: e.clientY,
      originX: pos.x,
      originY: pos.y,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragState.current.dragging) return;
    e.stopPropagation();
    const dx = e.clientX - dragState.current.startX;
    const dy = e.clientY - dragState.current.startY;
    setPos({ x: dragState.current.originX + dx, y: dragState.current.originY + dy });
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    dragState.current.dragging = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scale > MIN_SCALE) {
      resetZoom();
    } else {
      setScale(2);
    }
  };

  const zoomed = scale > MIN_SCALE;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center overflow-hidden"
      onClick={onClose}
      onWheel={handleWheel}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition z-10"
      >
        <X size={28} />
      </button>

      {images.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
            className="absolute left-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition z-10"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onNext(); }}
            className="absolute right-4 text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition z-10"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      <img
        ref={imgRef}
        src={images[index]}
        alt=""
        draggable={false}
        onClick={(e) => e.stopPropagation()}
        onDoubleClick={handleDoubleClick}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl select-none touch-none"
        style={{
          transform: `translate(${pos.x}px, ${pos.y}px) scale(${scale})`,
          transition: dragState.current.dragging ? 'none' : 'transform 0.2s ease-out',
          cursor: zoomed ? 'grab' : 'zoom-in',
        }}
      />

      {/* Zoom controls */}
      <div
        className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={zoomOut}
          disabled={scale <= MIN_SCALE}
          className="text-white bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-2 transition"
        >
          <ZoomOut size={20} />
        </button>
        <span className="text-white/80 text-xs font-medium min-w-[42px] text-center">
          {Math.round(scale * 100)}%
        </span>
        <button
          onClick={zoomIn}
          disabled={scale >= MAX_SCALE}
          className="text-white bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed rounded-full p-2 transition"
        >
          <ZoomIn size={20} />
        </button>
        {zoomed && (
          <button
            onClick={resetZoom}
            className="text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition"
          >
            <RotateCcw size={18} />
          </button>
        )}
      </div>

      {images.length > 1 && (
        <div className="absolute bottom-4 text-white/60 text-sm">
          {index + 1} / {images.length}
        </div>
      )}
    </div>
  );
}