import React from 'react';
import { useLang } from '../context/LanguageContext';
import { GraduationCap, Stethoscope, FlaskConical, Microscope, BookOpen, HeartPulse } from 'lucide-react';

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0a2342] mb-3">{title}</h2>
    {subtitle && <p className="text-[#7a1a3a] font-medium text-lg">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#0a2342] to-[#7a1a3a] rounded-full" />
  </div>
);

const programs = [
  {
    icon: <Stethoscope size={30} />,
    ar: 'التعليم الطبي المستمر (CME)',
    en: 'Continuing Medical Education (CME)',
    descAr: 'برامج اعتمادية لتطوير المعرفة الطبية ومواكبة أحدث الممارسات السريرية للأطباء والمتخصصين.',
    descEn: 'Accredited programs to develop medical knowledge and keep up with the latest clinical practices for physicians and specialists.',
    color: 'bg-blue-50 border-blue-100',
    iconColor: 'text-[#0a2342]',
  },
  {
    icon: <GraduationCap size={30} />,
    ar: 'برامج الزمالة والإقامة',
    en: 'Fellowship & Residency Programs',
    descAr: 'برامج تدريبية طويلة الأمد للأطباء الراغبين في التخصص الدقيق ضمن بيئة سريرية متميزة.',
    descEn: 'Long-term training programs for physicians seeking sub-specialization within a distinguished clinical environment.',
    color: 'bg-red-50 border-red-100',
    iconColor: 'text-[#7a1a3a]',
  },
  {
    icon: <HeartPulse size={30} />,
    ar: 'دورات التمريض وإدارة الرعاية',
    en: 'Nursing & Care Management Courses',
    descAr: 'دورات متخصصة في التمريض الحديث وإدارة الرعاية التمريضية وفق أحدث المعايير الدولية.',
    descEn: 'Specialized courses in modern nursing and nursing care management according to the latest international standards.',
    color: 'bg-amber-50 border-amber-100',
    iconColor: 'text-amber-600',
  },
  {
    icon: <FlaskConical size={30} />,
    ar: 'برامج المختبرات والتشخيص',
    en: 'Laboratory & Diagnostic Programs',
    descAr: 'تدريب متخصص في علوم المختبرات السريرية، التصوير الطبي، والتشخيص المتقدم.',
    descEn: 'Specialized training in clinical laboratory sciences, medical imaging, and advanced diagnostics.',
    color: 'bg-green-50 border-green-100',
    iconColor: 'text-green-600',
  },
  {
    icon: <Microscope size={30} />,
    ar: 'البحث العلمي والأوراق البحثية',
    en: 'Scientific Research & Papers',
    descAr: 'دعم الباحثين في إعداد الدراسات الطبية ونشرها في المجلات العلمية المحكّمة.',
    descEn: 'Supporting researchers in preparing medical studies and publishing them in peer-reviewed scientific journals.',
    color: 'bg-purple-50 border-purple-100',
    iconColor: 'text-purple-600',
  },
  {
    icon: <BookOpen size={30} />,
    ar: 'برامج تنمية المهارات القيادية',
    en: 'Leadership Skills Development',
    descAr: 'برامج لتطوير المهارات الإدارية والقيادية لرؤساء الأقسام والكوادر الإشرافية في القطاع الصحي.',
    descEn: 'Programs to develop administrative and leadership skills for department heads and supervisory staff in the health sector.',
    color: 'bg-teal-50 border-teal-100',
    iconColor: 'text-teal-600',
  },
];

export default function Programs() {
  const { isAr } = useLang();

  return (
    <section id="programs" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title={isAr ? 'برامج الأكاديمية' : 'Academy Programs'}
          subtitle={isAr ? 'برامج تعليمية وتدريبية متخصصة' : 'Specialized Educational & Training Programs'}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <div
              key={i}
              className={`rounded-2xl p-7 border ${p.color} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4`}
            >
              <div className={`w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm ${p.iconColor}`}>
                {p.icon}
              </div>
              <h3 className="text-[#0a2342] font-bold text-lg">{isAr ? p.ar : p.en}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{isAr ? p.descAr : p.descEn}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
