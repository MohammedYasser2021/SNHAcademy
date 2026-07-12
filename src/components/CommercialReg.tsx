import React, { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import Lightbox from './Lightbox';
import { ZoomIn, FileText, ShieldCheck } from 'lucide-react';
import nn from '../assets/nn.PNG';

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
      <div className="max-w-5xl mx-auto px-4">
        <SectionHeading
          title={isAr ? 'السجل التجاري' : 'Commercial Registration'}
          subtitle={isAr ? 'الهوية القانونية للأكاديمية' : 'Academy Legal Identity'}
        />

        <div className="grid md:grid-cols-2 gap-0 bg-gray-50 rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          {/* Info side */}
          <div className="flex flex-col justify-center gap-5 p-8 md:p-12 text-center md:text-start">
            <div className="flex items-center justify-center md:justify-start gap-3">
              <div className="w-14 h-14 bg-[#0a2342] rounded-2xl flex items-center justify-center flex-shrink-0">
                <FileText size={26} className="text-white" />
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full">
                <ShieldCheck size={14} />
                {isAr ? 'موثّق ومعتمد' : 'Verified & Accredited'}
              </span>
            </div>

            <h3 className="text-[#0a2342] font-bold text-xl md:text-2xl leading-snug">
              {isAr ? 'أكاديمية مستشفى تخصصي نجران الصحية' : 'Specialized Najran Hospital Health Academy'}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
              {isAr
                ? 'وثيقة السجل التجاري الرسمية التي تثبت الهوية القانونية للأكاديمية. انقر على الصورة لعرضها بالحجم الكامل.'
                : 'The official Commercial Registration document confirming the academy\u2019s legal identity. Click the certificate to view it in full size.'}
            </p>

            <button
              onClick={() => setOpen(true)}
              className="mt-2 inline-flex items-center justify-center md:justify-start gap-2 text-[#0a2342] font-semibold text-sm hover:text-[#7a1a3a] transition-colors duration-300 w-fit mx-auto md:mx-0"
            >
              <ZoomIn size={18} />
              {isAr ? 'عرض الشهادة بالحجم الكامل' : 'View full-size certificate'}
            </button>
          </div>

          {/* Image side: fills its column fully, responsive height */}
          <button
            onClick={() => setOpen(true)}
            className="group relative w-full h-64 md:h-full min-h-[280px] overflow-hidden cursor-pointer bg-white"
          >
            <img
              src={nn}
              alt={isAr ? 'شهادة السجل التجاري' : 'Commercial Registration certificate'}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
            <div className="absolute inset-0 bg-[#0a2342]/0 group-hover:bg-[#0a2342]/40 transition-colors duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 backdrop-blur-sm rounded-full p-4">
                <ZoomIn size={28} className="text-white" />
              </div>
            </div>
          </button>
        </div>
      </div>

      {open && (
        <Lightbox
          images={[nn]}
          index={0}
          onClose={() => setOpen(false)}
          onPrev={() => {}}
          onNext={() => {}}
        />
      )}
    </section>
  );
}