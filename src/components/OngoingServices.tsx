import React, { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import Lightbox from './Lightbox';
import { ZoomIn } from 'lucide-react';
{/* @ts-ignore */}
import services from '../assets/services.PNG';

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0a2342] mb-3">{title}</h2>
    {subtitle && <p className="text-[#7a1a3a] font-medium text-lg">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#0a2342] to-[#7a1a3a] rounded-full" />
  </div>
);

export default function OngoingServices() {
  const { isAr } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <SectionHeading
          title={isAr ? 'الخدمات الجارية في 2026' : 'On Going Services 2026'}
          subtitle={isAr ? 'مركز الامتحانات الدولي للأكاديمية' : 'Academy International Examination Centre'}
        />

        <div className="flex flex-col lg:flex-row gap-10 items-center">
          <div className="flex-1 space-y-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
              <h3 className="text-[#0a2342] font-bold text-xl mb-4">
                {isAr ? 'مركز الامتحانات الدولي' : 'International Examination Centre'}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                {isAr
                  ? 'تتيح الأكاديمية مركزًا للامتحانات الدولية يخدم الكوادر الصحية في المنطقة، مما يُتيح الوصول إلى الشهادات الدولية المعتمدة دون الحاجة إلى السفر.'
                  : 'The Academy provides an international examination center serving health personnel in the region, enabling access to internationally recognized certifications without the need to travel.'}
              </p>
              <ul className="space-y-3">
                {[
                  { ar: 'امتحانات الهيئة السعودية للتخصصات الطبية', en: 'Saudi Commission for Health Specialties Exams' },
                  { ar: 'اختبارات اللغة الإنجليزية الطبية', en: 'Medical English Language Tests' },
                  { ar: 'شهادات كفاءة الإسعاف والطوارئ', en: 'Emergency & First Aid Competency Certificates' },
                  { ar: 'اختبارات الاعتماد المهني الدولي', en: 'International Professional Accreditation Tests' },
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600 text-sm">
                    <div className="w-2 h-2 bg-[#7a1a3a] rounded-full flex-shrink-0" />
                    {isAr ? item.ar : item.en}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex-1">
            <button
              onClick={() => setOpen(true)}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 w-full block cursor-pointer"
            >
              <img
                src={services}
                alt="Services"
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500 rounded-2xl"
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
          images={[services]}
          index={0}
          onClose={() => setOpen(false)}
          onPrev={() => {}}
          onNext={() => {}}
        />
      )}
    </section>
  );
}
