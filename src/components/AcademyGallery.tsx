import React, { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import Lightbox from './Lightbox';
import { ZoomIn } from 'lucide-react';

import academy1 from '../assets/academy_imgs/academy_1.png';
import academy2 from '../assets/academy_imgs/academy_2.png';
import academy3 from '../assets/academy_imgs/academy_3.jpg';
import academy4 from '../assets/academy_imgs/academy_4.jpg';
import academy5 from '../assets/academy_imgs/academy_5.jpg';
import academy6 from '../assets/academy_imgs/academy_6.jpg';
import academy7 from '../assets/academy_imgs/academy_7.jpg';
import academy8 from '../assets/academy_imgs/academy_8.jpg';
import academy9 from '../assets/academy_imgs/academy_9.jpg';
import academy10 from '../assets/academy_imgs/academy_10.jpg';
import academy11 from '../assets/academy_imgs/academy_11.jpg';
import academy12 from '../assets/academy_imgs/academy_12.jpg';
import academy13 from '../assets/academy_imgs/academy_13.jpg';
import academy14 from '../assets/academy_imgs/academy_14.jpg';
import academy15 from '../assets/academy_imgs/academy_15.jpg';
import academy16 from '../assets/academy_imgs/academy_16.jpg';
import academy17 from '../assets/academy_imgs/academy_17.jpg';
import academy18 from '../assets/academy_imgs/academy_18.jpg';
import academy19 from '../assets/academy_imgs/academy_19.jpg';
import academy20 from '../assets/academy_imgs/academy_20.jpg';
import academy21 from '../assets/academy_imgs/academy_21.jpg';
import academy22 from '../assets/academy_imgs/academy_22.jpg';
import academy23 from '../assets/academy_imgs/academy_23.jpg';

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

export default function AcademyGallery() {
  const { isAr } = useLang();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title={isAr ? 'معرض صور الأكاديمية' : 'Academy Photo Gallery'}
          subtitle={isAr ? 'لمحة من داخل الأكاديمية' : 'A Glimpse Inside the Academy'}
        />

        {/* Masonry-style grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="group relative overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 w-full block cursor-pointer break-inside-avoid mb-4"
            >
              <img
                src={src}
                alt={`Academy ${i + 1}`}
                className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-[#0a2342]/0 group-hover:bg-[#0a2342]/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <ZoomIn size={22} className="text-white" />
                </div>
              </div>
            </button>
          ))}
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