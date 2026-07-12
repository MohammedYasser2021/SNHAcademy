import React from 'react';
import { useLang } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

export default function Hero() {
  const { isAr } = useLang();

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 lg:pt-24 pb-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a2342] via-[#0d3060] to-[#7a1a3a]" />
      {/* Decorative circles */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#7a1a3a]/20 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[url('/assets/cover.jpg')] bg-cover bg-center opacity-10" />

      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-8">
        <div className="bg-white rounded-2xl p-4 md:p-5 shadow-2xl animate-fade-in mt-4">
          <img
            src={logo}
            alt="SNH Academy Logo"
            className="h-20 md:h-32 lg:h-40 object-contain"
          />
        </div>

        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {isAr ? 'أكاديمية مستشفى تخصصي نجران الصحية' : 'Specialized Najran Hospital Health Academy'}
          </h1>
          <p className="text-xl md:text-2xl text-amber-300 font-semibold tracking-wide">
            {isAr ? 'قوة المعرفة وجودة الحياة' : 'Power of Knowledge & Quality of Life'}
          </p>
          <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            {isAr
              ? 'نحو مستقبل صحي أفضل من خلال التعليم والتدريب والتطوير المهني المستمر'
              : 'Towards a better health future through education, training, and continuous professional development'}
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-56 bg-amber-400 hover:bg-amber-300 text-[#0a2342] font-bold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-amber-400/30 hover:scale-105"
          >
            {isAr ? 'اكتشف المزيد' : 'Discover More'}
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-56 border-2 border-white/40 hover:border-white text-white font-bold px-8 py-3 rounded-full transition-all hover:bg-white/10"
          >
            {isAr ? 'تواصل معنا' : 'Contact Us'}
          </button>
        </div>

        <button
          onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-white/60 hover:text-white animate-bounce transition mt-2"
        >
          <ChevronDown size={36} />
        </button>
      </div>
    </section>
  );
}