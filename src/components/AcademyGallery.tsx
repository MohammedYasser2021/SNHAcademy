import React, { useState, useRef } from 'react';
import { useLang } from '../context/LanguageContext';
import Lightbox from './Lightbox';
import { ZoomIn, Play, Pause, Volume2, VolumeX } from 'lucide-react';

{/* @ts-ignore */}
import academy1 from '../assets/academy_imgs/academy_1.png';
{/* @ts-ignore */}
import academy2 from '../assets/academy_imgs/academy_2.png';
{/* @ts-ignore */}
import academy3 from '../assets/academy_imgs/academy_3.JPG';
{/* @ts-ignore */}
import academy4 from '../assets/academy_imgs/academy_4.JPG';
{/* @ts-ignore */}
import academy5 from '../assets/academy_imgs/academy_5.JPG';
{/* @ts-ignore */}
import academy6 from '../assets/academy_imgs/academy_6.JPG';
{/* @ts-ignore */}
import academy7 from '../assets/academy_imgs/academy_7.JPG';
{/* @ts-ignore */}
import academy8 from '../assets/academy_imgs/academy_8.JPG';
{/* @ts-ignore */}
import academy9 from '../assets/academy_imgs/academy_9.JPG';
{/* @ts-ignore */}
import academy10 from '../assets/academy_imgs/academy_10.JPG';
{/* @ts-ignore */}
import academy11 from '../assets/academy_imgs/academy_11.JPG';
{/* @ts-ignore */}
import academy12 from '../assets/academy_imgs/academy_12.JPG';
{/* @ts-ignore */}
import academy13 from '../assets/academy_imgs/academy_13.JPG';
{/* @ts-ignore */}
import academy14 from '../assets/academy_imgs/academy_14.JPG';
{/* @ts-ignore */}
import academy15 from '../assets/academy_imgs/academy_15.JPG';
{/* @ts-ignore */}
import academy16 from '../assets/academy_imgs/academy_16.JPG';
{/* @ts-ignore */}
import academy17 from '../assets/academy_imgs/academy_17.JPG';
{/* @ts-ignore */}
import academy18 from '../assets/academy_imgs/academy_18.JPG';
{/* @ts-ignore */}
import academy19 from '../assets/academy_imgs/academy_19.JPG';
{/* @ts-ignore */}
import academy20 from '../assets/academy_imgs/academy_20.JPG';
{/* @ts-ignore */}
import academy21 from '../assets/academy_imgs/academy_21.JPG';
{/* @ts-ignore */}
import academy22 from '../assets/academy_imgs/academy_22.JPG';
{/* @ts-ignore */}
import academy23 from '../assets/academy_imgs/academy_23.JPG';
{/* @ts-ignore */}
import academyVid from '../assets/academy_vid.mp4';


const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0a2342] mb-3">{title}</h2>
    {subtitle && <p className="text-[#7a1a3a] font-medium text-lg">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#0a2342] to-[#7a1a3a] rounded-full" />
  </div>
);

const galleryImages = [
  academy1, academy2, academy3, academy4, academy5, academy6, academy7,
  academy8, academy9, academy10, academy11, academy12, academy13, academy14,
  academy15, academy16, academy17, academy18, academy19, academy20, academy21,
  academy22, academy23,
];

function AcademyVideoShowcase() {
  const { isAr } = useLang();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setIsMuted(v.muted);
  };

  return (
    <div className="mb-16">
      <div className="text-center mb-8">
        <span className="inline-block text-[#7a1a3a] font-semibold text-sm tracking-widest uppercase mb-2">
          {isAr ? 'فيديو تعريفي' : 'Featured Video'}
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-[#0a2342]">
          {isAr ? 'جولة داخل أكاديمية مستشفى تخصصي نجران الصحية' : 'A Tour Inside SNH Academy'}
        </h3>
      </div>

      <div className="relative">
        {/* Glow / accent frame */}
        <div className="absolute -inset-1 bg-gradient-to-r from-[#0a2342] via-[#7a1a3a] to-[#0a2342] rounded-3xl opacity-20 blur-xl" />

        <div
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-black group"
          onMouseEnter={() => setShowControls(true)}
          onMouseLeave={() => !isPlaying && setShowControls(false)}
        >
          {/* Top accent bar */}
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0a2342] via-[#7a1a3a] to-[#0a2342] z-20" />

          <video
            ref={videoRef}
            src={academyVid}
            muted={isMuted}
            playsInline
            loop
            preload="metadata"
            onClick={togglePlay}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            className="w-full aspect-video object-cover cursor-pointer"
          />

          {/* Dark overlay when paused for cinematic feel */}
          {!isPlaying && (
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-black/30 pointer-events-none transition-opacity duration-300" />
          )}

          {/* Center play button */}
          <button
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pause video' : 'Play video'}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
              isPlaying && !showControls ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <span className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white/95 shadow-xl transition-transform duration-300 group-hover:scale-110">
              <span className="absolute inset-0 rounded-full bg-white animate-ping opacity-30" />
              {isPlaying ? (
                <Pause size={34} className="text-[#0a2342] relative" fill="currentColor" />
              ) : (
                <Play size={34} className="text-[#0a2342] relative translate-x-0.5" fill="currentColor" />
              )}
            </span>
          </button>

          {/* Mute toggle */}
          <button
            onClick={toggleMute}
            aria-label={isMuted ? 'Unmute' : 'Mute'}
            className={`absolute bottom-4 ${isAr ? 'left-4' : 'right-4'} z-20 w-11 h-11 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white transition-opacity duration-300 hover:bg-black/70 ${
              showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function AcademyGallery() {
  const { isAr } = useLang();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [loaded, setLoaded] = useState<Set<number>>(new Set());

  const markLoaded = (i: number) =>
    setLoaded((prev) => (prev.has(i) ? prev : new Set(prev).add(i)));

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title={isAr ? 'معرض صور الأكاديمية' : 'Academy Photo Gallery'}
          subtitle={isAr ? 'لمحة من داخل الأكاديمية' : 'A Glimpse Inside the Academy'}
        />

        <AcademyVideoShowcase />

        {/* Masonry-style grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((src, i) => {
            const isAboveFold = i < 4; // first row(s): load immediately, rest lazily
            const isLoaded = loaded.has(i);

            return (
              <button
                key={i}
                onClick={() => setLightboxIndex(i)}
                className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 w-full block cursor-pointer break-inside-avoid mb-4 bg-gray-200"
                style={{ contentVisibility: isAboveFold ? 'visible' : 'auto', containIntrinsicSize: '0 260px' }}
              >
                {/* Skeleton shown until the image finishes decoding, avoids blank flashes */}
                {!isLoaded && (
                  <div className="absolute inset-0 animate-pulse bg-gray-200" aria-hidden="true" />
                )}

                <img
                  src={src}
                  alt={`Academy ${i + 1}`}
                  loading={isAboveFold ? 'eager' : 'lazy'}
                  fetchPriority={isAboveFold ? 'high' : 'auto'}
                  decoding="async"
                  onLoad={() => markLoaded(i)}
                  className={`w-full object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
                    isLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onError={(e) => {
                    (e.target as HTMLImageElement).style.display = 'none';
                    markLoaded(i);
                  }}
                />
                <div className="absolute inset-0 bg-[#0a2342]/0 group-hover:bg-[#0a2342]/40 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                    <ZoomIn size={22} className="text-white" />
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + galleryImages.length) % galleryImages.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % galleryImages.length)}
        />
      )}
    </section>
  );
}