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
      icon: <Eye size={32} />,
      accent: 'from-[#0a2342] to-[#0d3060]',
      iconBg: 'bg-[#0a2342]/10',
      iconColor: 'text-[#0a2342]',
      titleAr: 'الرؤية',
      titleEn: 'Vision',
      textAr: 'تسعى أكاديمية SNH للرعاية الصحية لأن تكون مركزًا للتميز في التعليم الصحي والتدريب المهني، من خلال تقديم برامج تعليمية معترف بها دوليًا تُسهم في إعداد كوادر صحية مؤهلة، ودعم التطوير المهني المستمر، والمساهمة في تطوير الخدمات الصحية في المملكة العربية السعودية بما يتماشى مع رؤية المملكة 2030.',
      textEn: 'SNH Healthcare Academy strives to be a center of excellence in healthcare education and professional training by delivering internationally recognized learning programs that develop competent healthcare professionals, support continuous professional development, and contribute to the advancement of healthcare services in the Kingdom of Saudi Arabia in alignment with Saudi Vision 2030.',
      type: 'text',
    },
{ 
  icon: <Target size={32} />, 
  accent: 'from-[#7a1a3a] to-[#9c2449]', 
  iconBg: 'bg-[#7a1a3a]/10', 
  iconColor: 'text-[#7a1a3a]', 
  titleAr: 'الرسالة', 
  titleEn: 'Mission', 
  textAr: 'تلتزم أكاديمية SNH للرعاية الصحية بتقديم تعليم عالي الجودة، وتدريب قائم على الكفاءات، وتطوير سريري، وتعليم قيادي، وفرص بحثية تُمكّن الكوادر الصحية من تحقيق التميز في رعاية المرضى، مع تعزيز الابتكار، والممارسة الأخلاقية، والتعلم المستمر، والأداء المؤسسي، طبقًا لمعايير وأنظمة الهيئة السعودية للتخصصات الصحية.', 
  textEn: 'SNH Healthcare Academy is committed to delivering high-quality education, competency-based training, clinical development, leadership education, and research opportunities that empower healthcare professionals to achieve excellence in patient care while fostering innovation, ethical practice, continuous learning, and organizational performance, in accordance with the standards and regulations of the Saudi Commission for Health Specialties.', 
  type: 'text', 
},
    {
      icon: <Star size={32} />,
      accent: 'from-teal-600 to-teal-700',
      iconBg: 'bg-teal-600/10',
      iconColor: 'text-teal-700',
      titleAr: 'القيم',
      titleEn: 'Values',
      valuesAr: ['التميز', 'النزاهة', 'الابتكار', 'التعاون', 'الجودة', 'المسؤولية المجتمعية'],
      valuesEn: ['Excellence', 'Integrity', 'Innovation', 'Collaboration', 'Quality', 'Social Responsibility'],
      type: 'tags',
    },
  ];

  return (
    <section id="vision" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#0a2342]/[0.03] rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative">
        <SectionHeading
          title={isAr ? 'الرؤية والرسالة' : 'Vision & Mission'}
          subtitle={isAr ? 'قوة المعرفة وجودة الحياة' : 'Power of Knowledge & Quality of Life'}
        />

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((c, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 flex flex-col items-center text-center gap-5 overflow-hidden"
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r ${c.accent}`} />

              {/* Icon */}
              <div
                className={`w-20 h-20 ${c.iconBg} ${c.iconColor} rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
              >
                {c.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#0a2342]">
                {isAr ? c.titleAr : c.titleEn}
              </h3>

              {c.type === 'text' ? (
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {isAr ? c.textAr : c.textEn}
                </p>
              ) : (
                <div className="flex flex-wrap justify-center gap-2.5 mt-1">
                  {(isAr ? c.valuesAr : c.valuesEn)!.map((v, idx) => (
                    <span
                      key={idx}
                      className="bg-teal-50 text-teal-700 border border-teal-200 px-4 py-1.5 rounded-full text-sm font-semibold"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}