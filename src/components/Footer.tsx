import React from 'react';
import { useLang } from '../context/LanguageContext';
import logo from '../assets/logo.png';

export default function Footer() {
  const { isAr } = useLang();

  return (
    <footer className="bg-[#060f1e] text-white/50 py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-center">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-14 md:h-12 object-contain rounded-xl bg-white/95 p-1.5 shadow-md"
          />
          <span className="text-center md:text-start">
            {isAr ? 'أكاديمية مستشفى تخصصي نجران الصحية' : 'Specialized Najran Hospital Health Academy'}
          </span>
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