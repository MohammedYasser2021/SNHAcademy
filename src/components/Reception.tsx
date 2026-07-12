import React from 'react';
import { useLang } from '../context/LanguageContext';
import reception from '../assets/reception.png';
import logo from '../assets/logo.png';

export default function Reception() {
  const { isAr } = useLang();

  return (
    <section className="relative overflow-hidden">
      <div className="relative h-[50vh] md:h-[60vh]">
        <img
          src={reception}
          alt="Academy Reception"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a2342]/80 via-[#0a2342]/40 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-8 md:px-14 w-full">
            <div className="max-w-xl space-y-5">
              <div className="bg-white inline-flex rounded-xl p-3 shadow-lg">
                <img src={logo} alt="Logo" className="h-14 object-contain" />
              </div>
              <h2 className="text-white text-3xl md:text-4xl font-bold leading-snug">
                {isAr ? 'مرحباً بكم في أكاديمية مستشفى نجران المتخصص' : 'Welcome to Najran Specialized Hospital Academy'}
              </h2>
              <p className="text-white/80 text-base leading-relaxed">
                {isAr
                  ? 'نسعى دائمًا لتقديم أفضل تجربة تعليمية وتدريبية للكوادر الصحية في المنطقة.'
                  : 'We always strive to provide the best educational and training experience for health personnel in the region.'}
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-amber-400 hover:bg-amber-300 text-[#0a2342] font-bold px-8 py-3 rounded-full transition-all shadow-lg hover:scale-105 inline-block"
              >
                {isAr ? 'تواصل معنا' : 'Contact Us'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
