import React, { useState } from 'react';
import { useLang } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const SectionHeading = ({ title, subtitle, light }: { title: string; subtitle?: string; light?: boolean }) => (
  <div className="text-center mb-14">
    <h2 className={`text-3xl md:text-4xl font-bold mb-3 ${light ? 'text-white' : 'text-[#0a2342]'}`}>{title}</h2>
    {subtitle && <p className={`font-medium text-lg ${light ? 'text-amber-300' : 'text-[#7a1a3a]'}`}>{subtitle}</p>}
    <div className={`mt-4 mx-auto w-20 h-1 rounded-full ${light ? 'bg-amber-400' : 'bg-gradient-to-r from-[#0a2342] to-[#7a1a3a]'}`} />
  </div>
);

const contactInfo = [
  {
    icon: <Phone size={22} />,
    ar: 'الهاتف',
    en: 'Phone',
    value: '0502300110',
    link: 'tel:+966502300110',
  },
  {
    icon: <Mail size={22} />,
    ar: 'البريد الإلكتروني',
    en: 'Email',
    value: 'academic.affairs@najransh.sa',
    link: 'mailto:academic.affairs@najransh.sa',
  },
  {
    icon: <MapPin size={22} />,
    ar: 'الموقع',
    en: 'Location',
    value: 'مستشفى نجران المتخصص، نجران، المملكة العربية السعودية',
    valueEn: 'Najran Specialized Hospital, Najran, Saudi Arabia',
  },
  {
    icon: <Clock size={22} />,
    ar: 'ساعات العمل',
    en: 'Working Hours',
    value: 'الأحد – الخميس: 8:00ص – 4:00م',
    valueEn: 'Sunday – Thursday: 8:00 AM – 4:00 PM',
  },
];

export default function Contact() {
  const { isAr } = useLang();
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '', email: '', message: '' });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-[#0a2342]">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeading
          title={isAr ? 'تواصل معنا' : 'Contact Us'}
          subtitle={isAr ? 'الحجز والاستفسار' : 'Booking & Inquiries'}
          light
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-6">
            <p className="text-white/70 leading-relaxed text-base">
              {isAr
                ? 'نرحب بتواصلكم واستفساراتكم حول برامج الأكاديمية، الدورات التدريبية، والاعتمادات. فريقنا جاهز للإجابة على جميع استفساراتكم.'
                : "We welcome your inquiries about the Academy's programs, training courses, and accreditations. Our team is ready to answer all your questions."}
            </p>

            <div className="space-y-4">
              {contactInfo.map((c, i) => (
                <div key={i} className="flex items-start gap-4 bg-white/5 rounded-xl p-5 hover:bg-white/10 transition-colors">
                  <div className="w-10 h-10 bg-amber-400 rounded-xl flex items-center justify-center flex-shrink-0 text-[#0a2342]">
                    {c.icon}
                  </div>
                  <div>
                    <p className="text-amber-300/70 text-xs mb-1">{isAr ? c.ar : c.en}</p>
                    {c.link ? (
                      <a href={c.link} className="text-white font-medium hover:text-amber-300 transition-colors text-sm md:text-base">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium text-sm md:text-base">
                        {isAr ? c.value : (c.valueEn || c.value)}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {sent && (
              <div className="bg-green-500/20 border border-green-400/30 text-green-300 rounded-xl p-4 text-sm text-center">
                {isAr ? 'تم إرسال رسالتك بنجاح! سنتواصل معك قريبًا.' : 'Your message has been sent successfully! We will contact you soon.'}
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-white/60 text-xs mb-2 block">{isAr ? 'الاسم الكامل' : 'Full Name'}</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 transition text-sm"
                  placeholder={isAr ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                />
              </div>
              <div>
                <label className="text-white/60 text-xs mb-2 block">{isAr ? 'رقم الجوال' : 'Phone Number'}</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 transition text-sm"
                  placeholder={isAr ? '05xxxxxxxx' : '05xxxxxxxx'}
                />
              </div>
            </div>
            <div>
              <label className="text-white/60 text-xs mb-2 block">{isAr ? 'البريد الإلكتروني' : 'Email'}</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 transition text-sm"
                placeholder={isAr ? 'example@email.com' : 'example@email.com'}
              />
            </div>
            <div>
              <label className="text-white/60 text-xs mb-2 block">{isAr ? 'رسالتك / استفسارك' : 'Your Message'}</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-amber-400 transition text-sm resize-none"
                placeholder={isAr ? 'اكتب رسالتك أو استفسارك هنا...' : 'Write your message or inquiry here...'}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-amber-400 hover:bg-amber-300 text-[#0a2342] font-bold py-4 rounded-xl transition-all hover:scale-[1.02] flex items-center justify-center gap-3 shadow-lg"
            >
              <Send size={20} />
              {isAr ? 'إرسال الرسالة' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
