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
          alt="Najran Specialized Hospital Health Academy"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a2342] via-[#0a2342]/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14">
          <h2 className="text-white text-3xl md:text-5xl font-bold mb-4 drop-shadow">
            {isAr ? 'أكاديمية مستشفى تخصصي نجران الصحية' : 'Specialized Najran Hospital Health Academy'}
          </h2>
          <p className="text-white/80 text-base md:text-lg max-w-2xl leading-relaxed">
            {isAr
              ? 'صرح تعليمي وتدريبي رائد في منطقة نجران، يُعنى بإعداد وتأهيل الكوادر الصحية وفق أعلى المعايير العالمية، مع التزام راسخ بالتطوير المهني المستمر والابتكار في التعليم الصحي.'
              : 'A leading educational and training institution in the Najran region, dedicated to preparing and qualifying healthcare personnel according to the highest international standards, with a firm commitment to continuous professional development and innovation in health education.'}
          </p>
        </div>
      </div>


      {/* About text */}
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-lg leading-[1.9] mb-6">
            {isAr
              ? 'تُعدّ أكاديمية مستشفى تخصصي نجران الصحية من أبرز المنصات التعليمية والتدريبية في المنطقة الجنوبية للمملكة العربية السعودية، إذ تقدم برامج تدريبية وتعليمية شاملة تغطي مختلف التخصصات الصحية الدقيقة والعامة. تتميز الأكاديمية باستقطاب نخبة من الكوادر التدريبية والأكاديمية المتخصصة، وتوظيف أحدث الوسائل التعليمية والتقنيات التفاعلية في التدريب.'
              : 'Specialized Najran Hospital Health Academy is one of the most prominent educational and training platforms in the southern region of Saudi Arabia, offering comprehensive training and educational programs covering various specialized and general health disciplines. The academy is distinguished by attracting a distinguished group of specialized training and academic personnel, and employing the latest educational tools and interactive training technologies.'}
          </p>
          <p className="text-gray-600 text-lg leading-[1.9]">
            {isAr
              ? 'حصلت الأكاديمية على العديد من الاعتمادات الدولية والمحلية المرموقة، مما يؤكد ريادتها في تقديم تعليم وتدريب صحي متميز يواكب أحدث المستجدات العلمية، ويُسهم في بناء كفاءات صحية وطنية قادرة على تحقيق رؤية المملكة 2030 نحو رعاية صحية متكاملة وعالية الجودة.'
              : 'The academy has obtained many prestigious international and local accreditations, affirming its leadership in providing distinguished health education and training that keeps pace with the latest scientific developments, and contributes to building national health competencies capable of achieving Saudi Vision 2030 towards comprehensive and high-quality healthcare.'}
          </p>
        </div>
      </div>
    </section>
  );
}