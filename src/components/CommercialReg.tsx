import React, { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import Lightbox from './Lightbox';
import { ZoomIn, FileText } from 'lucide-react';

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0a2342] mb-3">{title}</h2>
    {subtitle && <p className="text-[#7a1a3a] font-medium text-lg">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#0a2342] to-[#7a1a3a] rounded-full" />
  </div>
);

export default function CommercialReg() {
  const { isAr } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <section id="cr" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading
          title={isAr ? 'السجل التجاري' : 'Commercial Registration'}
          subtitle={isAr ? 'الهوية القانونية للأكاديمية' : 'Academy Legal Identity'}
        />

        <div className="flex flex-col md:flex-row items-center gap-10 bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100">
          <div className="flex-shrink-0">
            <div className="w-16 h-16 bg-[#0a2342] rounded-2xl flex items-center justify-center">
              <FileText size={32} className="text-white" />
            </div>
          </div>
          <div className="flex-1 text-center md:text-start">
            <h3 className="text-[#0a2342] font-bold text-xl mb-2">
              {isAr ? 'أكاديمية مستشفى نجران المتخصص' : 'Najran Specialized Hospital Academy'}
            </h3>
            <p className="text-gray-500 text-sm mb-6">
              {isAr
                ? 'انقر على الصورة أدناه لعرض شهادة السجل التجاري بصيغة أكبر'
                : 'Click the image below to view the Commercial Registration certificate in full size'}
            </p>
            <button
              onClick={() => setOpen(true)}
              className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 inline-block cursor-pointer"
            >
              <img
                src="src/assets/nn.png"
                alt="Commercial Registration"
                className="max-h-80 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-[#0a2342]/0 group-hover:bg-[#0a2342]/30 transition-all duration-300 flex items-center justify-center rounded-2xl">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <ZoomIn size={28} className="text-white" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <Lightbox
          images={['/assets/nn.png']}
          index={0}
          onClose={() => setOpen(false)}
          onPrev={() => {}}
          onNext={() => {}}
        />
      )}
    </section>
  );
}
