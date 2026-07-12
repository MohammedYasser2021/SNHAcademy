import React from 'react';
import { useLang } from '../context/LanguageContext';

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0a2342] mb-3">{title}</h2>
    {subtitle && <p className="text-[#7a1a3a] font-medium text-lg">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#0a2342] to-[#7a1a3a] rounded-full" />
  </div>
);

interface OrgNode {
  ar: string;
  en: string;
  color?: string;
  children?: OrgNode[];
}

const orgTree: OrgNode = {
  ar: 'مدير الأكاديمية',
  en: 'Academy Director',
  color: '#0a2342',
  children: [
    {
      ar: 'وحدة التعليم الطبي المستمر',
      en: 'CME Unit',
      color: '#7a1a3a',
      children: [
        { ar: 'برامج CME', en: 'CME Programs' },
        { ar: 'الاعتماد والجودة', en: 'Accreditation & Quality' },
      ],
    },
    {
      ar: 'وحدة التدريب والتطوير',
      en: 'Training & Development Unit',
      color: '#7a1a3a',
      children: [
        { ar: 'التدريب السريري', en: 'Clinical Training' },
        { ar: 'التطوير المهني', en: 'Professional Development' },
      ],
    },
    {
      ar: 'وحدة البحث العلمي',
      en: 'Research Unit',
      color: '#7a1a3a',
      children: [
        { ar: 'الأبحاث الصحية', en: 'Health Research' },
        { ar: 'النشر العلمي', en: 'Scientific Publication' },
      ],
    },
    {
      ar: 'وحدة الشؤون الأكاديمية',
      en: 'Academic Affairs Unit',
      color: '#7a1a3a',
      children: [
        { ar: 'شؤون المتدربين', en: 'Trainee Affairs' },
        { ar: 'الجداول والبرامج', en: 'Scheduling & Programs' },
      ],
    },
  ],
};

function NodeBox({ node, isAr, level = 0 }: { node: OrgNode; isAr: boolean; level?: number }) {
  const bg = node.color || '#1e4d8c';
  const isLeaf = !node.children || node.children.length === 0;

  return (
    <div className="flex flex-col items-center">
      <div
        className="rounded-xl px-5 py-3 text-white text-center font-semibold shadow-md text-sm md:text-base min-w-[140px] max-w-[180px]"
        style={{ backgroundColor: bg }}
      >
        {isAr ? node.ar : node.en}
      </div>

      {node.children && node.children.length > 0 && (
        <>
          {/* vertical connector */}
          <div className="w-0.5 h-6 bg-gray-300" />
          {/* horizontal bar */}
          <div className="relative flex items-start justify-center gap-0">
            <div
              className="absolute top-0 left-[calc(50%+70px)] right-[calc(50%+70px)] h-0.5 bg-gray-300"
              style={{ left: '10%', right: '10%' }}
            />
            <div className="flex gap-4 md:gap-6 lg:gap-8">
              {node.children.map((child, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-0.5 h-6 bg-gray-300" />
                  <NodeBox node={child} isAr={isAr} level={level + 1} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default function OrgChart() {
  const { isAr } = useLang();

  const secondLevel = orgTree.children || [];

  return (
    <section id="org-chart" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title={isAr ? 'الهيكل التنظيمي' : 'Organizational Structure'}
          subtitle={isAr ? 'أكاديمية مستشفى نجران المتخصص' : 'Najran Specialized Hospital Academy'}
        />

        <div className="overflow-x-auto">
          <div className="min-w-[700px] flex flex-col items-center gap-0 py-4">
            {/* Root */}
            <div
              className="rounded-xl px-8 py-4 text-white text-center font-bold shadow-lg text-lg"
              style={{ backgroundColor: '#0a2342' }}
            >
              {isAr ? orgTree.ar : orgTree.en}
            </div>
            <div className="w-0.5 h-8 bg-gray-300" />

            {/* Second level with horizontal connector */}
            <div className="relative w-full flex justify-center">
              <div className="flex items-start gap-6 md:gap-10 relative">
                {/* Horizontal top bar */}
                <div className="absolute top-0 left-[50px] right-[50px] h-0.5 bg-gray-300" />
                {secondLevel.map((node, i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="w-0.5 h-8 bg-gray-300" />
                    {/* Level 2 box */}
                    <div
                      className="rounded-xl px-4 py-3 text-white text-center font-semibold shadow-md text-sm min-w-[140px] max-w-[170px]"
                      style={{ backgroundColor: '#7a1a3a' }}
                    >
                      {isAr ? node.ar : node.en}
                    </div>

                    {/* Level 3 children */}
                    {node.children && (
                      <div className="flex flex-col items-center">
                        <div className="w-0.5 h-6 bg-gray-300" />
                        <div className="flex gap-3">
                          {node.children.map((child, j) => (
                            <div key={j} className="flex flex-col items-center">
                              <div className="w-0.5 h-6 bg-gray-300" />
                              <div className="bg-blue-50 border border-[#0a2342]/20 text-[#0a2342] rounded-lg px-3 py-2 text-xs font-medium text-center min-w-[110px] max-w-[130px] shadow-sm">
                                {isAr ? child.ar : child.en}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
