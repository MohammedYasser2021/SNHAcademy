import React from 'react';
import { useLang } from '../context/LanguageContext';

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0a2342] mb-3">{title}</h2>
    {subtitle && <p className="text-[#7a1a3a] font-medium text-lg">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#0a2342] to-[#7a1a3a] rounded-full" />
  </div>
);

// Simple pill/rounded box used for every node in the chart
function OrgBox({
  text,
  pill = false,
  bold = false,
}: {
  text: string;
  pill?: boolean;
  bold?: boolean;
}) {
  return (
    <div
      className={[
        'text-white text-center shadow-md px-6 py-3 min-w-[180px] max-w-[260px]',
        pill ? 'rounded-full' : 'rounded-xl',
        bold ? 'font-bold' : 'font-semibold',
        'text-sm md:text-base',
      ].join(' ')}
      style={{ backgroundColor: '#1e4d8c' }}
    >
      {text}
    </div>
  );
}

// Vertical connector line with an arrowhead pointing down
function VLine({ height = 28 }: { height?: number }) {
  return (
    <div className="flex flex-col items-center" style={{ height }}>
      <div className="w-0.5 flex-1 bg-[#1e293b]" />
      <div
        className="w-0 h-0"
        style={{
          borderLeft: '5px solid transparent',
          borderRight: '5px solid transparent',
          borderTop: '7px solid #1e293b',
        }}
      />
    </div>
  );
}

export default function OrgChart() {
  const { isAr } = useLang();

  const labels = {
    title: isAr ? 'الهيكل التنظيمي للأكاديمية' : 'Academy Organizational structure',
    coo: isAr ? 'الرئيس التنفيذي للعمليات' : 'COO',
    director: isAr ? 'مدير الأكاديمية' : 'Academy Director',
    children: [
      isAr ? 'سكرتير الأكاديمية' : 'Academy Secretary',
      isAr ? 'مشرف التعليم' : 'Education Supervisor',
      isAr ? 'مشرف الشؤون الإدارية' : 'Admin Supervisor',
    ],
  };

  return (
    <section id="org-chart" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title={isAr ? 'الهيكل التنظيمي' : 'Organizational Structure'}
          subtitle={isAr ? 'أكاديمية مستشفى نجران المتخصص' : 'Najran Specialized Hospital Academy'}
        />

        <div className="overflow-x-auto">
        <div className="flex flex-col items-center gap-0 min-w-[700px] max-w-3xl mx-auto py-2">
          {/* Title pill */}
          <OrgBox text={labels.title} pill bold />
          <VLine />

          {/* COO pill */}
          <OrgBox text={labels.coo} pill bold />
          <VLine />

          {/* Academy Director box */}
          <OrgBox text={labels.director} bold />

          {/* Branch down from director to horizontal bar */}
          <div className="w-0.5 h-6 bg-[#1e293b]" />

          {/* Connector zone: horizontal bar + 3 vertical arrows, positioned
              at exact column centers (1/6, 3/6, 5/6) so it lines up with the
              boxes below regardless of LTR/RTL direction */}
          <div className="relative w-full" style={{ height: 34, direction: 'ltr' }}>
            {/* horizontal line: spans from the center of the first column to
                the center of the last column, i.e. 1/6 to 5/6 of the width */}
            <div
              className="absolute bg-[#1e293b]"
              style={{ top: 0, height: 1, left: '16.6667%', right: '16.6667%' }}
            />
            {/* vertical drop + arrowhead at each column center.
                Outer two (first/last) are thin; middle stays bold. */}
            {[16.6667, 50, 83.3333].map((pct, i) => {
              const thin = i !== 1;
              return (
                <div
                  key={i}
                  className="absolute flex flex-col items-center"
                  style={{ left: `${pct}%`, top: 0, height: 34, transform: 'translateX(-50%)' }}
                >
                  <div
                    className="flex-1 bg-[#1e293b]"
                    style={{ width: thin ? 1 : 2 }}
                  />
                  <div
                    className="w-0 h-0"
                    style={{
                      borderLeft: `${thin ? 4 : 5}px solid transparent`,
                      borderRight: `${thin ? 4 : 5}px solid transparent`,
                      borderTop: `${thin ? 5 : 7}px solid #1e293b`,
                    }}
                  />
                </div>
              );
            })}
          </div>

          {/* Three child nodes, one per equal-width column so their centers
              match the connector positions above exactly */}
          <div className="w-full grid grid-cols-3">
            {labels.children.map((label, i) => (
              <div key={i} className="flex justify-center px-1">
                <OrgBox text={label} />
              </div>
            ))}
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}