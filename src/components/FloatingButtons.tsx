import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

const WHATSAPP_NUMBER = '966502300110';

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M11.98 0C5.363 0 0 5.363 0 11.98c0 2.119.557 4.108 1.528 5.836L0 24l6.335-1.61A11.943 11.943 0 0011.98 24C18.597 24 24 18.637 24 12.02 24 5.406 18.597 0 11.98 0zm0 21.818a9.817 9.817 0 01-5.028-1.384l-.36-.214-3.752.953.981-3.655-.235-.374A9.785 9.785 0 012.18 11.98c0-5.42 4.41-9.83 9.8-9.83 5.422 0 9.832 4.41 9.832 9.83 0 5.39-4.41 9.838-9.832 9.838z" />
    </svg>
  );
}

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      {/* WhatsApp - bottom left */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-[#25d366] hover:bg-[#1ebe5d] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#25d366]/40 hover:scale-110 transition-all duration-300"
        aria-label="WhatsApp"
      >
        <WhatsAppIcon />
      </a>

      {/* Scroll to top - bottom right */}
  <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#7B043C] hover:bg-[#5c0330] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-[#7B043C]/40 hover:scale-110 transition-all duration-300 ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={22} />
      </button>
    </>
  );
}
