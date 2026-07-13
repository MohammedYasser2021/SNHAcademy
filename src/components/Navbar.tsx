import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
{/* @ts-ignore */}
import logo from '../assets/logoOo.png';

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

// روابط السوشيال ميديا — عدّل الـ href حسب حسابات المؤسسة الفعلية
const socialLinks = [
  {
    id: 'snapchat',
    href: 'https://snapchat.com',
    label: 'Snapchat',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M12.003 2c3.6 0 5.5 2.42 5.57 4.9.02.72.02 1.36.01 1.94.55.24 1.09.35 1.42.4.4.06.72.4.71.83-.02.72-1.02 1.16-1.55 1.36.06.24.36 1.02 1.24 1.6.3.2.42.58.28.92-.4.94-1.9 1.14-2.85 1.24-.1.28-.24.7-.4 1.03-.14.28-.4.4-.78.36-.36-.03-.85-.14-1.4-.14-.5 0-1 .18-1.5.5-.6.4-1.28.98-2.6.98s-2-.58-2.6-.98c-.5-.32-1-.5-1.5-.5-.55 0-1.04.11-1.4.14-.38.04-.64-.08-.78-.36-.16-.33-.3-.75-.4-1.03-.95-.1-2.45-.3-2.85-1.24-.14-.34-.02-.72.28-.92.88-.58 1.18-1.36 1.24-1.6-.53-.2-1.53-.64-1.55-1.36-.01-.43.31-.77.71-.83.33-.05.87-.16 1.42-.4-.01-.58-.01-1.22.01-1.94.07-2.48 1.97-4.9 5.57-4.9Z"/>
      </svg>
    ),
  },
  {
    id: 'instagram',
    href: 'https://instagram.com',
    label: 'Instagram',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-3.5 h-3.5">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    id: 'x',
    href: 'https://x.com',
    label: 'X',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
        <path d="M18.244 2H21.5l-7.36 8.41L22.8 22h-6.77l-5.3-6.93L4.6 22H1.34l7.87-9L1 2h6.94l4.79 6.33L18.24 2Zm-1.19 18.06h1.8L7.03 3.86h-1.9L17.05 20.06Z"/>
      </svg>
    ),
  },
  {
    id: 'tiktok',
    href: 'https://tiktok.com',
    label: 'TikTok',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M16.6 5.82a4.28 4.28 0 0 1-2.66-1.34 4.3 4.3 0 0 1-1.05-2.4h-3.02v13.8a2.52 2.52 0 1 1-2.16-2.5v-3.06a5.6 5.6 0 1 0 5.19 5.58V9.1a7.2 7.2 0 0 0 4.2 1.34V7.4a4.28 4.28 0 0 1-.5-1.58Z"/>
      </svg>
    ),
  },
  {
    id: 'linkedin',
    href: 'https://linkedin.com',
    label: 'LinkedIn',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4V9Z"/>
      </svg>
    ),
  },
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
        scrolled ? 'bg-[#7B043C] shadow-lg' : 'bg-[#7B043C]/90 backdrop-blur-sm'
      }`}
    >
      {/*
        dir="ltr" bel thabbet el 3 a3mida el kobar (social - nav - lang/logo).
        3ala mobile: grid 3 a3mida (social shemal / logo fel nos / lang+hamburger yemin).
        3ala desktop (xl): byrga3 flex 3ady, w el nav bard-ha bt-akhod dir munasib
        3ashan tertib el ro-abet yeb2a sa7 fel 3araby (awel 3onsor yemin) w fel english (awel 3onsor shemal).
      */}
      <div
        dir="ltr"
        className="max-w-7xl mx-auto px-4 h-20 lg:h-24 grid grid-cols-3 items-center xl:flex xl:justify-between"
      >
        {/* Social Icons - always left */}
        <div className="flex items-center gap-2 justify-self-start">
          {socialLinks.map((s) => (
            <a
              key={s.id}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-7 h-7 rounded-full bg-white/15 hover:bg-white/25 flex items-center justify-center text-white transition-colors"
            >
              {s.icon}
            </a>
          ))}
        </div>

        {/* Logo - centered on mobile only */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="justify-self-center xl:hidden"
        >
          <img src={logo} alt="SNH Academy" className="h-16 object-contain" />
        </button>

        {/* Desktop Nav - reading order flips per language so it stops reversing in Arabic */}
        <nav
          dir={isAr ? 'rtl' : 'ltr'}
          className="hidden xl:flex items-center gap-1 justify-center"
        >
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

        {/* Right side: lang + hamburger (mobile) / lang + logo (desktop, lang just left of logo) */}
        <div className="flex items-center gap-3 justify-self-end">
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
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hidden xl:block flex-shrink-0"
          >
            <img src={logo} alt="SNH Academy" className="h-16 lg:h-24 object-contain" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div dir="ltr" className="xl:hidden bg-[#7B043C] border-t border-white/10 px-4 pb-4">
          {navLinks.map((l) => (
            <button
              key={l.id}
              onClick={() => scrollTo(l.id)}
              className={`block w-full py-2.5 border-b border-white/10 text-sm text-white/90 hover:text-white ${
                isAr ? 'text-right' : 'text-left'
              }`}
              dir={isAr ? 'rtl' : 'ltr'}
            >
              {isAr ? l.ar : l.en}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}