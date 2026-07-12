import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../context/LanguageContext';

const navLinks = [
  { id: 'vision', ar: 'الرؤية والرسالة', en: 'Vision & Mission' },
  { id: 'org-chart', ar: 'الهيكل التنظيمي', en: 'Org Chart' },
  { id: 'hospital', ar: 'المستشفى', en: 'Hospital' },
  { id: 'programs', ar: 'البرامج', en: 'Programs' },
  { id: 'accreditations', ar: 'الاعتمادات', en: 'Accreditations' },
  { id: 'training', ar: 'التدريب', en: 'Training' },
  { id: 'gallery', ar: 'الصور', en: 'Gallery' },
  { id: 'objectives', ar: 'أهداف 2026', en: 'Goals 2026' },
  { id: 'services', ar: 'الخدمات', en: 'Services' },
  { id: 'contact', ar: 'تواصل معنا', en: 'Contact' },
];

export default function Navbar() {
  const { lang, setLang, isAr } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a2342] shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="flex-shrink-0">
          <img src="src/assets/logo.png" alt="SNH Academy" className="h-10 lg:h-14 object-contain" />
        </button>

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="text-white/90 hover:text-white text-[13px] font-medium px-3 py-1.5 rounded hover:bg-white/10 transition-all whitespace-nowrap"
            >
              {isAr ? l.ar : l.en}
            </button>
          ))}
        </nav>

        {/* Lang + Hamburger */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setLang(lang === 'ar' ? 'en' : 'ar')}
            className="text-white border border-white/40 hover:bg-white/10 rounded-full px-3 py-1 text-sm font-semibold transition"
          >
            {lang === 'ar' ? 'EN' : 'عربي'}
          </button>
          <button
            className="xl:hidden text-white p-1"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="xl:hidden bg-[#0a2342] border-t border-white/10 px-4 pb-4">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className="block w-full text-start text-white/90 hover:text-white py-2.5 border-b border-white/10 text-sm"
            >
              {isAr ? l.ar : l.en}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
