import React from 'react';
import { useLang } from '../context/LanguageContext';

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0a2342] mb-3">{title}</h2>
    {subtitle && <p className="text-[#7a1a3a] font-medium text-lg">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#0a2342] to-[#7a1a3a] rounded-full" />
  </div>
);

const programs = [
  { ar: 'تدريب الدعم الحيوي', en: 'Life Support Training' },
  { ar: 'برامج ساعات التعليم الطبي المستمر', en: 'CME Hours Programs' },
  { ar: 'برامج الأكاديمية الصحية', en: 'Health Academy Programs' },
  { ar: 'المؤتمرات وورش العمل', en: 'Conferences & Workshop' },
  { ar: 'تثقيف المرضى', en: 'Patient Education' },
  { ar: 'تدريب الموظفين', en: 'Staff Training' },
  { ar: 'برنامج التفتيش', en: 'INSP PROG' },
  { ar: 'مركز التدريب الدولي', en: 'International Training Center' },
];

export default function Programs() {
  const { isAr } = useLang();

  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <SectionHeading
          title={isAr ? 'برامج الأكاديمية' : 'Academy Programs'}
          subtitle={isAr ? 'برامج تعليمية وتدريبية متخصصة' : 'Specialized Educational & Training Programs'}
        />

        <div className="grid sm:grid-cols-2 gap-5">
          {programs.map((p, i) => (
            <div
              key={i}
              className="rounded-full px-8 py-5 text-white text-center font-bold shadow-md hover:shadow-lg transition-shadow duration-300 flex items-center justify-center min-h-[70px]"
              style={{ backgroundColor: '#3b6ea5' }}
            >
              {isAr ? p.ar : p.en}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}