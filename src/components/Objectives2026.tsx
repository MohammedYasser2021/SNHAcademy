import React from 'react';
import { useLang } from '../context/LanguageContext';
import { Target, CheckCircle2 } from 'lucide-react';

interface Objective {
  numAr: string;
  numEn: string;
  ar: string;
  en: string;
  descAr: string;
  descEn: string;
  target: string;
  unit: (isAr: boolean) => string;
}

const objectives: Objective[] = [
  {
    numAr: '01',
    numEn: '01',
    ar: 'رفع عدد الساعات التعليمية المعتمدة',
    en: 'Increase Accredited Educational Hours',
    descAr:
      'تحقيق 2000+ ساعة تعليمية معتمدة من الهيئة السعودية للتخصصات الطبية خلال عام 2026.',
    descEn:
      'Achieve 2000+ accredited educational hours from the Saudi Commission for Health Specialties during 2026.',
    target: '2,000+',
    unit: (isAr: boolean) => (isAr ? 'ساعة' : 'Hours'),
  },
  {
    numAr: '02',
    numEn: '02',
    ar: 'تطوير برامج جديدة',
    en: 'Develop New Programs',
    descAr:
      'إطلاق 10 برامج تدريبية جديدة في تخصصات طبية وإدارية متنوعة.',
    descEn:
      'Launch 10 new training programs in various medical and administrative specialties.',
    target: '10',
    unit: (isAr: boolean) => (isAr ? 'برامج' : 'Programs'),
  },
  {
    numAr: '03',
    numEn: '03',
    ar: 'زيادة أعداد المتدربين',
    en: 'Increase Number of Trainees',
    descAr:
      'استقبال أكثر من 500 متدرب من داخل وخارج المستشفى خلال عام 2026.',
    descEn:
      'Welcome more than 500 trainees from inside and outside the hospital during 2026.',
    target: '500+',
    unit: (isAr: boolean) => (isAr ? 'متدرب' : 'Trainees'),
  },
  {
    numAr: '04',
    numEn: '04',
    ar: 'الحصول على اعتمادات إضافية',
    en: 'Obtain Additional Accreditations',
    descAr:
      'السعي للحصول على 3 اعتمادات دولية إضافية في مجال التعليم الطبي والجودة.',
    descEn:
      'Pursue 3 additional international accreditations in medical education and quality.',
    target: '3',
    unit: (isAr: boolean) => (isAr ? 'اعتمادات' : 'Accreditations'),
  },
  {
    numAr: '05',
    numEn: '05',
    ar: 'الشراكات الأكاديمية',
    en: 'Academic Partnerships',
    descAr:
      'إبرام 5 اتفاقيات شراكة مع مؤسسات أكاديمية وطبية محلية ودولية.',
    descEn:
      'Sign 5 partnership agreements with local and international academic and medical institutions.',
    target: '5',
    unit: (isAr: boolean) => (isAr ? 'شراكات' : 'Partnerships'),
  },
  {
    numAr: '06',
    numEn: '06',
    ar: 'نشر الأبحاث العلمية',
    en: 'Publish Scientific Research',
    descAr:
      'دعم نشر 20 ورقة بحثية علمية في مجلات طبية محكّمة على المستوى المحلي والدولي.',
    descEn:
      'Support the publication of 20 scientific research papers in peer-reviewed medical journals locally and internationally.',
    target: '20',
    unit: (isAr: boolean) => (isAr ? 'بحثًا' : 'Papers'),
  },
];

export default function Objectives2026() {
  const { isAr } = useLang();

  return (
    <section id="objectives" className="py-24 bg-[#0a2342]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            {isAr ? 'أهداف الأكاديمية 2026' : 'Academy Objectives 2026'}
          </h2>

          <p className="text-amber-300 font-medium text-lg">
            {isAr
              ? 'خطتنا الاستراتيجية للتميز'
              : 'Our Strategic Plan for Excellence'}
          </p>

          <div className="mt-4 mx-auto w-20 h-1 bg-amber-400 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map((obj, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 flex flex-col gap-4"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target size={22} className="text-[#0a2342]" />
                </div>

                <div>
                  <span className="text-amber-400/60 text-xs font-mono">
                    {isAr ? obj.numAr : obj.numEn}
                  </span>

                  <h3 className="text-white font-bold text-base leading-tight">
                    {isAr ? obj.ar : obj.en}
                  </h3>
                </div>
              </div>

              <p className="text-white/60 text-sm leading-relaxed">
                {isAr ? obj.descAr : obj.descEn}
              </p>

              <div className="mt-auto pt-4 border-t border-white/10 flex items-center gap-3">
                <CheckCircle2 size={18} className="text-amber-400" />

                <span className="text-amber-300 font-bold text-xl">
                  {obj.target}
                </span>

                <span className="text-white/50 text-sm">
                  {obj.unit(isAr)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}