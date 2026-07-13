import React, { useState, useEffect } from 'react';
import { useLang } from '../context/LanguageContext';
import { ChevronDown } from 'lucide-react';
{/* @ts-ignore */}
import logo from '../assets/logo.png';
{/* @ts-ignore */}
import cover from '../assets/cover.jpg';
{/* @ts-ignore */}
import mainHospital from '../assets/mainhospital.jpeg';

const slides = [logo, cover, mainHospital];

export default function Hero() {
  const { isAr } = useLang();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 md:pt-40 lg:pt-48 pb-10 bg-white">
      {/* Decorative subtle circles */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-[#0d3060]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#7a1a3a]/5 rounded-full blur-3xl" />

      <div className="relative z-10 text-center px-6 flex flex-col items-center gap-6 w-full">
        {/* Slideshow */}
        <div className="w-full max-w-3xl animate-fade-in">
          <div className="relative w-full aspect-[16/10] md:aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100">
            {slides.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`slide-${index}`}
                className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 ease-in-out ${
                  index === current ? 'opacity-100' : 'opacity-0'
                }`}
              />
            ))}
          </div>

          {/* Dots - below the image */}
          <div className="flex justify-center gap-2 mt-5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2.5 rounded-full transition-all ${
                  index === current ? 'w-6 bg-[#0a2342]' : 'w-2.5 bg-[#0a2342]/30'
                }`}
                aria-label={`slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="space-y-4 animate-fade-in-up">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0a2342] leading-tight">
            {isAr ? 'أكاديمية مستشفى تخصصي نجران الصحية' : 'Specialized Najran Hospital Health Academy'}
          </h1>
          <p className="text-xl md:text-2xl text-[#7a1a3a] font-semibold tracking-wide">
            {isAr ? 'قوة المعرفة وجودة الحياة' : 'Power of Knowledge & Quality of Life'}
          </p>
          <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
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
            className="w-56 bg-[#0a2342] hover:bg-[#0d3060] text-white font-bold px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-[#0a2342]/30 hover:scale-105"
          >
            {isAr ? 'تواصل معنا' : 'Contact Us'}
          </button>
        </div>

        <button
          onClick={() => document.getElementById('vision')?.scrollIntoView({ behavior: 'smooth' })}
          className="text-[#0a2342]/50 hover:text-[#0a2342] animate-bounce transition mt-2"
        >
          <ChevronDown size={36} />
        </button>
      </div>
    </section>
  );
}