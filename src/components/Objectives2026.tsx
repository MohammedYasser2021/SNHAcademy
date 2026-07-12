import React from 'react';
import { useLang } from '../context/LanguageContext';

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0a2342] mb-3">{title}</h2>
    {subtitle && <p className="text-[#7a1a3a] font-medium text-lg">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#0a2342] to-[#7a1a3a] rounded-full" />
  </div>
);

interface Column {
  titleAr: string;
  titleEn: string;
  itemsAr: string[];
  itemsEn: string[];
}

const columns: Column[] = [
  {
    titleAr: 'LSTC',
    titleEn: 'LSTC',
    itemsAr: [
      'التقدم للحصول على الاعتماد لجميع الدورات الإلزامية للهيئة السعودية للتخصصات الصحية.',
      'التواصل المستمر مع جميع المرافق الصحية والشركات وجامعات العلوم الصحية.',
    ],
    itemsEn: [
      'Apply for accreditation for all SHA mandatory courses.',
      'Continuous communication with all healthcare facilities, companies, and health science universities.',
    ],
  },
  {
    titleAr: 'التدريب السريري',
    titleEn: 'Clinical Training',
    itemsAr: [
      'التواصل المستمر مع جميع المرافق الصحية والشركات وجامعات العلوم الصحية وكافة الجهات التعليمية (الخاصة والحكومية) لاستكشاف فرص التدريب لطلاب الدراسات العليا والجامعية والامتياز والتطوير المهني من الهيئة السعودية للتخصصات الصحية.',
    ],
    itemsEn: [
      "Continuous communication with all healthcare facilities, companies, health science universities and all teaching institutions (private and governmental) to grasp the opportunities for post-graduate, under-graduate, internship and professional development trainings from SCFHS.",
    ],
  },
  {
    titleAr: 'الأكاديمية الصحية',
    titleEn: 'Health Academy',
    itemsAr: [
      'متابعة البرنامج التدريبي التاسع لكل فرع (PCT، CSSD، EEG، ECG، مساعد أسنان، Ortho-Cast، الاستجابة الأولى، البصريات، الترميز السريري).',
    ],
    itemsEn: [
      'Follow up the 9th training program per branch (PCT, CSSD, EEG, ECG, Dental Asst., Ortho-Cast, First Responder, Optics, Clinical Coding).',
    ],
  },
  {
    titleAr: 'CPD/CME',
    titleEn: 'CPD/CME',
    itemsAr: [
      'متابعة تنفيذ الخطة الأكاديمية والعلمية لمستشفى نجران 2025.',
      'تفعيل جميع الأيام الصحية العالمية.',
      'تصميم دبلوم RCM.',
    ],
    itemsEn: [
      'Follow up the implement of 2025 HNH Academic and Scientific Plan.',
      "Activate all Int'l Health Days.",
      'Design RCM diploma.',
    ],
  },
  {
    titleAr: 'المؤتمرات',
    titleEn: 'Conferences',
    itemsAr: [
      'تنظيم مؤتمر علمي دولي واحد على الأقل خارج المملكة العربية السعودية.',
      'متابعة تفعيل الجولات الطبية والتمريضية الكبرى.',
    ],
    itemsEn: [
      'Conduct at least 1 International Scientific Conference outside KSA.',
      'Follow up activating the Medical and Nursing Grand Rounds.',
    ],
  },
  {
    titleAr: 'برنامج الإقامة السعودي',
    titleEn: 'Saudi Residency Program',
    itemsAr: ['التقدم لبرنامج إقامة واحد في النساء والولادة بالمدينة المنورة.'],
    itemsEn: ['Apply for 1 Residency Obg&Gyne Madinah.'],
  },
];

export default function Objectives2026() {
  const { isAr } = useLang();

  return (
    <section id="objectives" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title={isAr ? 'أهداف الأكاديمية 2026' : 'Academy Objectives 2026'}
          subtitle={isAr ? 'خطتنا الاستراتيجية للتميز' : 'Our Strategic Plan for Excellence'}
        />

        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px] border-collapse border border-gray-300">
            <thead>
              <tr>
                {columns.map((col, i) => (
                  <th
                    key={i}
                    className="border border-gray-300 px-4 py-3 text-amber-700 font-bold text-center align-middle text-[15px]"
                  >
                    {isAr ? col.titleAr : col.titleEn}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                {columns.map((col, i) => (
                  <td
                    key={i}
                    className="border border-gray-300 px-4 py-4 align-top text-[#0a2342] text-sm leading-relaxed"
                  >
                    <div className="flex flex-col gap-4">
                      {(isAr ? col.itemsAr : col.itemsEn).map((item, j) => (
                        <p key={j}>{item}</p>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}