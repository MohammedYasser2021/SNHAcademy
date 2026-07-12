import React from 'react';
import { useLang } from '../context/LanguageContext';
import { Heart, Users, Award, Building2 } from 'lucide-react';
import cover from '../assets/cover.jpg';

const stats = [
  { icon: <Bed />, numAr: '+500', numEn: '500+', labelAr: 'سرير', labelEn: 'Beds' },
  { icon: <Users size={28} className="text-white" />, numAr: '+1500', numEn: '1500+', labelAr: 'كادر طبي', labelEn: 'Medical Staff' },
  { icon: <Heart size={28} className="text-white" />, numAr: '+50', numEn: '50+', labelAr: 'تخصص طبي', labelEn: 'Specialties' },
  { icon: <Award size={28} className="text-white" />, numAr: '+11', numEn: '11+', labelAr: 'اعتماد دولي', labelEn: 'Accreditations' },
];

function Bed() {
  return <Building2 size={28} className="text-white" />;
}

export default function Hospital() {
  const { isAr } = useLang();

  return (
    <section id="hospital" className="relative py-0 overflow-hidden">
      {/* Cover image */}
      <div className="relative h-[60vh] md:h-[70vh] overflow-hidden">
        <img
          src={cover}
          alt="Najran Specialized Hospital"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2342] via-[#0a2342]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow">
            {isAr ? 'مستشفى نجران المتخصص' : 'Najran Specialized Hospital'}
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
            {isAr
              ? 'صرح طبي رائد في منطقة نجران، يقدم خدمات صحية متكاملة بأعلى معايير الجودة والسلامة، مع الالتزام الراسخ بالاعتماد الدولي والتميز في الرعاية.'
              : 'A leading medical institution in the Najran region, providing comprehensive health services with the highest standards of quality and safety, with a firm commitment to international accreditation and excellence in care.'}
          </p>
        </div>
      </div>

      {/* Stats bar */}
      <div className="bg-[#0a2342] text-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/10">
          {stats.map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2 py-8 px-4">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                {s.icon}
              </div>
              <span className="text-3xl font-bold text-amber-300">{isAr ? s.numAr : s.numEn}</span>
              <span className="text-white/70 text-sm">{isAr ? s.labelAr : s.labelEn}</span>
            </div>
          ))}
        </div>
      </div>

      {/* About text */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg leading-[1.9] mb-6">
            {isAr
              ? 'يُعدّ مستشفى نجران المتخصص من أبرز المستشفيات في المنطقة الجنوبية للمملكة العربية السعودية، إذ يقدم خدمات طبية شاملة تغطي مختلف التخصصات الدقيقة والعامة. يتميز المستشفى باستقطاب نخبة من الكوادر الطبية المتخصصة، وتوظيف أحدث التقنيات الطبية والأجهزة التشخيصية والعلاجية.'
              : 'Najran Specialized Hospital is one of the most prominent hospitals in the southern region of Saudi Arabia, providing comprehensive medical services covering various medical specialties. The hospital is distinguished by attracting a distinguished group of specialized medical personnel and employing the latest medical technologies and diagnostic and therapeutic devices.'}
          </p>
          <p className="text-gray-600 text-lg leading-[1.9]">
            {isAr
              ? 'حصل المستشفى على العديد من الاعتمادات الدولية والمحلية المرموقة، في مقدمتها اعتماد جونز هوبكنز أرامكو الطبي، فضلًا عن شهادات التميز من الهيئات الصحية الوطنية والدولية، مما يؤكد ريادته في تقديم رعاية صحية آمنة ومتميزة.'
              : 'The hospital has obtained many prestigious international and local accreditations, most notably the Johns Hopkins Aramco Medical accreditation, as well as certificates of excellence from national and international health bodies, affirming its leadership in providing safe and distinguished healthcare.'}
          </p>
        </div>
      </div>
    </section>
  );
}
