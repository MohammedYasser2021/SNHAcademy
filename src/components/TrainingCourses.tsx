import React, { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import Lightbox from './Lightbox';
import { ZoomIn } from 'lucide-react';

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0a2342] mb-3">{title}</h2>
    {subtitle && <p className="text-[#7a1a3a] font-medium text-lg">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#0a2342] to-[#7a1a3a] rounded-full" />
  </div>
);

const trainingImages = Array.from({ length: 6 }, (_, i) => `../assets/training_${i + 1}.png`);

export default function TrainingCourses() {
  const { isAr } = useLang();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="training" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title={isAr ? 'الدورات التدريبية' : 'Training Courses'}
          subtitle={isAr ? 'برامج التدريب المتخصصة' : 'Specialized Training Programs'}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingImages.map((src, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 aspect-[4/3] bg-gray-100 cursor-pointer"
            >
              <img
                src={src}
                alt={`Training ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#0a2342]/0 group-hover:bg-[#0a2342]/40 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <ZoomIn size={28} className="text-white" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white font-semibold text-sm">
                  {isAr ? `دورة تدريبية ${i + 1}` : `Training Course ${i + 1}`}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={trainingImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + trainingImages.length) % trainingImages.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % trainingImages.length)}
        />
      )}
    </section>
  );
}
