import React from 'react';
import { useLang } from '../context/LanguageContext';
import { Eye, Target, Star } from 'lucide-react';

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0a2342] mb-3">{title}</h2>
    {subtitle && <p className="text-[#7a1a3a] font-medium text-lg">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#0a2342] to-[#7a1a3a] rounded-full" />
  </div>
);

export default function VisionMission() {
  const { isAr } = useLang();

  const cards = [
    {
      icon: <Eye size={36} className="text-[#0a2342]" />,
      titleAr: 'الرؤية',
      titleEn: 'Vision',
      textAr: 'أن تكون الأكاديمية مرجعًا إقليميًا رائدًا في التعليم الصحي والتدريب المهني المتميز، ومنصةً لبناء كفاءات صحية تُسهم في تحقيق رؤية المملكة 2030 نحو رعاية صحية متكاملة وعالية الجودة.',
      textEn: 'To be a leading regional reference in health education and professional training, and a platform for building health competencies that contribute to achieving Saudi Vision 2030 towards comprehensive and high-quality healthcare.',
    },
    {
      icon: <Target size={36} className="text-[#7a1a3a]" />,
      titleAr: 'الرسالة',
      titleEn: 'Mission',
      textAr: 'تقديم برامج تدريبية وتعليمية متخصصة وفق أعلى المعايير العالمية، تُعزز الكفاءات المهنية والأكاديمية للكوادر الصحية، وتدعم ثقافة التعلم المستمر والتطوير المؤسسي لتحسين جودة الرعاية الصحية المقدمة للمرضى والمجتمع.',
      textEn: 'To provide specialized training and educational programs according to the highest international standards, enhancing the professional and academic competencies of health personnel, and supporting a culture of continuous learning and institutional development to improve the quality of healthcare provided to patients and the community.',
    },
    {
      icon: <Star size={36} className="text-amber-500" />,
      titleAr: 'القيم',
      titleEn: 'Values',
      textAr: 'التميز • النزاهة • الابتكار • التعاون • الجودة • المسؤولية المجتمعية',
      textEn: 'Excellence • Integrity • Innovation • Collaboration • Quality • Social Responsibility',
    },
  ];

  return (
    <section id="vision" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title={isAr ? 'الرؤية والرسالة' : 'Vision & Mission'}
          subtitle={isAr ? 'قوة المعرفة وجودة الحياة' : 'Power of Knowledge & Quality of Life'}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 flex flex-col gap-5"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center border border-gray-100">
                {c.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0a2342]">
                {isAr ? c.titleAr : c.titleEn}
              </h3>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {isAr ? c.textAr : c.textEn}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
