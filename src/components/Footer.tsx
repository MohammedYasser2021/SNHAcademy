import React from 'react';
import { useLang } from '../context/LanguageContext';
import logo from '../assets/logo.png';

export default function Footer() {
  const { isAr } = useLang();

  return (
    <footer className="bg-[#060f1e] text-white/50 py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-center">
        <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="h-10 object-contain opacity-70" />
          <span>{isAr ? 'أكاديمية مستشفى نجران المتخصص' : 'Najran Specialized Hospital Academy'}</span>
        </div>
        <p>
          {isAr
            ? `© ${new Date().getFullYear()} جميع الحقوق محفوظة`
            : `© ${new Date().getFullYear()} All Rights Reserved`}
        </p>
      </div>
    </footer>
  );
}
