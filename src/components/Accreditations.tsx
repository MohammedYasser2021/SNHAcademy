import React, { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import Lightbox from './Lightbox';

import acc1 from '../assets/1.PNG';
import acc2 from '../assets/2.PNG';
import acc3 from '../assets/3.PNG';
import acc4 from '../assets/4.PNG';
import acc5 from '../assets/5.PNG';
import acc6 from '../assets/6.PNG';
import acc7 from '../assets/7.PNG';
import acc8 from '../assets/8.PNG';
import acc9 from '../assets/9.PNG';
import acc10 from '../assets/10.PNG';
import acc11 from '../assets/11.PNG';

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0a2342] mb-3">{title}</h2>
    {subtitle && <p className="text-[#7a1a3a] font-medium text-lg">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#0a2342] to-[#7a1a3a] rounded-full" />
  </div>
);

const accreditations = [
  { img: acc1, ar: 'جمعية القلب السعودية', en: 'Saudi Heart Association' },
  { img: acc2, ar: 'الهيئة السعودية للتخصصات الطبية', en: 'Saudi Commission for Health Specialties' },
  { img: acc3, ar: 'مستشفى صديق الطفل', en: 'Baby Friendly Hospital' },
  { img: acc4, ar: 'مستشفى صديق كبار السن', en: 'Age-Friendly Hospital' },
  { img: acc5, ar: 'جائزة التميز في الرعاية الصحية', en: 'Healthcare Excellence Award' },
  { img: acc6, ar: 'اعتماد سباهي (SPAHI)', en: 'SPAHI Accreditation' },
  { img: acc7, ar: 'اعتماد التعليم الطبي المستمر', en: 'CME Accreditation' },
  { img: acc8, ar: 'شهادة الأمن السيبراني', en: 'Cybersecurity Certificate' },
  { img: acc9, ar: 'شهادة مواءمة', en: 'Alignment Certificate' },
  { img: acc10, ar: 'شهادة التميز من الطبقة الأولى', en: 'First Class Excellence Certificate' },
  { img: acc11, ar: 'اعتماد جونز هوبكنز أرامكو الطبي', en: 'Johns Hopkins Aramco Medical Accreditation' },
];

const images = accreditations.map((a) => a.img);

export default function Accreditations() {
  const { isAr } = useLang();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="accreditations" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title={isAr ? 'الاعتمادات والشهادات' : 'Hospital Accreditations'}
          subtitle={isAr ? 'شهادات التميز والاعتراف الدولي' : 'Certificates of Excellence & International Recognition'}
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
          {accreditations.map((a, i) => (
            <button
              key={i}
              onClick={() => setLightboxIndex(i)}
              className="group bg-gray-50 border border-gray-100 rounded-2xl p-4 hover:shadow-lg hover:border-[#0a2342]/20 transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-3 text-center cursor-pointer"
            >
              <div className="w-full aspect-[4/3] overflow-hidden rounded-xl bg-white flex items-center justify-center">
                <img
                  src={a.img}
                  alt={isAr ? a.ar : a.en}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-[#0a2342] text-xs font-semibold leading-snug">{isAr ? a.ar : a.en}</p>
            </button>
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex((lightboxIndex - 1 + images.length) % images.length)}
          onNext={() => setLightboxIndex((lightboxIndex + 1) % images.length)}
        />
      )}
    </section>
  );
}