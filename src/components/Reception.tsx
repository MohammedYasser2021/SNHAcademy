import React from 'react';
import { useLang } from '../context/LanguageContext';
import reception from '../assets/reception.png';
import logo from '../assets/logo.png';

export default function Reception() {
  const { isAr } = useLang();

  return (
    <section className="relative w-full bg-white overflow-hidden">
      <div
        className={`flex flex-col ${
          isAr ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } min-h-[560px]`}
      >
        {/* Content panel — solid white, always readable, no dependency on the photo */}
        <div className="w-full lg:w-1/2 flex items-center px-6 sm:px-10 md:px-14 py-14 lg:py-0 order-2 lg:order-none">
          <div className={`max-w-xl mx-auto lg:mx-0 space-y-6 text-center ${isAr ? 'lg:text-end' : 'lg:text-start'}`}>
            <div className="bg-gray-50 border border-gray-100 inline-flex rounded-xl p-3 shadow-sm">
              <img src={logo} alt="Logo" className="h-24 sm:h-28 lg:h-40 object-contain" />
            </div>

            <h1 className="text-[#0a2342] text-2xl sm:text-3xl md:text-4xl font-bold leading-tight tracking-tight">
              {isAr
                ? 'مرحباً بكم في مستشفى تخصصي نجران الصحية '
                : 'Welcome to Specialized Najran Hospital Health Academy'}
            </h1>

            <p className="text-gray-500 text-sm sm:text-base md:text-lg leading-relaxed">
              {isAr
                ? 'نسعى دائمًا لتقديم أفضل تجربة تعليمية وتدريبية للكوادر الصحية في المنطقة.'
                : 'We always strive to provide the best educational and training experience for health personnel in the region.'}
            </p>

            <div className={`flex flex-col sm:flex-row flex-wrap gap-4 pt-2 justify-center ${isAr ? 'lg:justify-end' : 'lg:justify-start'}`}>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-56 lg:w-auto bg-amber-400 hover:bg-amber-300 text-[#0a2342] font-bold px-8 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-center"
              >
                {isAr ? 'تواصل معنا' : 'Contact Us'}
              </button>

              <button
                onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-56 lg:w-auto bg-[#0a2342]/5 hover:bg-[#0a2342]/10 border border-[#0a2342]/15 text-[#0a2342] font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 text-center"
              >
                {isAr ? 'استكشف البرامج' : 'Explore Programs'}
              </button>
            </div>
          </div>
        </div>

        {/* Image panel — its own cropped box, so the photo can only ever
            fill this box cleanly; no empty region of the photo can show
            through as blank space */}
        <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-auto order-1 lg:order-none">
          <img
            src={reception}
            alt={isAr ? 'استقبال الأكاديمية' : 'Academy Reception'}
            className="absolute inset-0 w-full h-full object-cover object-[75%_center]"
          />
          {/* Soft edge blending into the white panel, on the side touching the text */}
          <div
            className={`hidden lg:block absolute inset-y-0 ${
              isAr
                ? 'right-0 w-24 bg-gradient-to-l from-white to-transparent'
                : 'left-0 w-24 bg-gradient-to-r from-white to-transparent'
            }`}
          />
        </div>
      </div>
    </section>
  );
}