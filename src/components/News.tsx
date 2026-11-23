import React, { useEffect, useMemo, useState } from 'react';
import { Play, Calendar, X, ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { useLang } from '../context/LanguageContext';
import { news, NewsItem } from '../data/news';

/* ---------- ملفات الصور/الفيديو: أي ملف داخل src/assets/news بيتعرف لوحده ---------- */
// @ts-ignore
const mediaFiles = import.meta.glob('../assets/news/*', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const IMAGE_EXT = ['jpg', 'jpeg', 'png', 'webp', 'gif', 'avif', 'svg'];
const VIDEO_EXT = ['mp4', 'webm', 'mov', 'm4v', 'ogg'];

// تقدر تكتب اسم الملف بالامتداد (news_1.mp4) أو من غير امتداد (news_1)
const resolveMedia = (name: string | undefined, kind: 'image' | 'video'): string | undefined => {
  if (!name) return undefined;
  if (/^(https?:)?\/\//.test(name) || name.startsWith('/')) return name;
  const allowed = kind === 'image' ? IMAGE_EXT : VIDEO_EXT;
  const wanted = name.toLowerCase();
  const hit = Object.keys(mediaFiles).find((k) => {
    const file = (k.split('/').pop() || '').toLowerCase();
    const dot = file.lastIndexOf('.');
    const base = dot >= 0 ? file.slice(0, dot) : file;
    const ext = dot >= 0 ? file.slice(dot + 1) : '';
    return (file === wanted || (base === wanted && allowed.includes(ext))) && allowed.includes(ext);
  });
  if (!hit && typeof console !== 'undefined') {
    console.warn(`[News] الملف "${name}" مش موجود في src/assets/news/`);
  }
  return hit ? mediaFiles[hit] : undefined;
};

const getYouTubeId = (url?: string): string | null => {
  if (!url) return null;
  const m = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
  return m ? m[1] : null;
};

/* ---------- بيانات جاهزة للعرض ---------- */
interface ResolvedNews {
  id: number | string;
  date: string;
  title: { ar: string; en?: string };
  body: { ar: string; en?: string };
  image?: string;
  video?: string;
  youtubeId: string | null;
}

const resolveItem = (n: NewsItem): ResolvedNews => {
  const youtubeId = getYouTubeId(n.video);
  return {
    id: n.id,
    date: n.date,
    title: n.title,
    body: n.body,
    image: resolveMedia(n.image, 'image'),
    video: youtubeId ? undefined : resolveMedia(n.video, 'video'),
    youtubeId,
  };
};

const hasVideo = (n: ResolvedNews) => !!n.video || !!n.youtubeId;

const formatDate = (d: string, isAr: boolean) => {
  const date = new Date(d + 'T00:00:00');
  if (isNaN(date.getTime())) return d;
  return date.toLocaleDateString(isAr ? 'ar-SA' : 'en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const clamp = (lines: number): React.CSSProperties => ({
  display: '-webkit-box',
  WebkitLineClamp: lines,
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
});

const SectionHeading = ({ title, subtitle }: { title: string; subtitle?: string }) => (
  <div className="text-center mb-14">
    <h2 className="text-3xl md:text-4xl font-bold text-[#0a2342] mb-3">{title}</h2>
    {subtitle && <p className="text-[#7a1a3a] font-medium text-lg">{subtitle}</p>}
    <div className="mt-4 mx-auto w-20 h-1 bg-gradient-to-r from-[#0a2342] to-[#7a1a3a] rounded-full" />
  </div>
);

/* ---------- صورة مصغرة (صورة / أول فريم من الفيديو / يوتيوب / placeholder) ---------- */
function Thumb({ item, className = '' }: { item: ResolvedNews; className?: string }) {
  const video = hasVideo(item);
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-[#0a2342] to-[#7a1a3a] ${className}`}>
      {item.image ? (
        <img
          src={item.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : item.video ? (
        <video
          src={`${item.video}#t=0.1`}
          preload="metadata"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
      ) : item.youtubeId ? (
        <img
          src={`https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg`}
          alt=""
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : null}

      {video && (
        <span className="absolute inset-0 flex items-center justify-center bg-black/20">
          <span className="w-14 h-14 rounded-full bg-white/95 shadow-xl flex items-center justify-center">
            <Play size={24} className="text-[#0a2342] translate-x-0.5" fill="currentColor" />
          </span>
        </span>
      )}
    </div>
  );
}

/* ---------- النافذة المنبثقة (تفاصيل الخبر) ---------- */
function NewsModal({
  item,
  onClose,
  onPrev,
  onNext,
  hasNav,
}: {
  item: ResolvedNews;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  hasNav: boolean;
}) {
  const { isAr } = useLang();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  const title = (isAr ? item.title.ar : item.title.en) || item.title.ar;
  const body = (isAr ? item.body.ar : item.body.en) || item.body.ar;
  const paragraphs = body.split(/\n\s*\n|\n/).filter(Boolean);
  const PrevIcon = isAr ? ArrowRight : ArrowLeft;
  const NextIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <div
      className="fixed inset-0 z-[999] bg-black/80 flex items-start md:items-center justify-center p-0 md:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        dir={isAr ? 'rtl' : 'ltr'}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white w-full max-w-3xl md:rounded-3xl shadow-2xl overflow-hidden my-0 md:my-auto min-h-screen md:min-h-0"
      >
        <div className="h-1.5 bg-gradient-to-r from-[#0a2342] via-[#7a1a3a] to-[#0a2342]" />

        <button
          onClick={onClose}
          aria-label="Close"
          className={`absolute top-5 ${isAr ? 'left-4' : 'right-4'} z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 text-white flex items-center justify-center transition`}
        >
          <X size={20} />
        </button>

        {/* فيديو */}
        {item.youtubeId && (
          <div className="aspect-video bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${item.youtubeId}`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        )}
        {item.video && (
          <video
            key={item.video}
            src={item.video}
            poster={item.image}
            controls
            playsInline
            preload="metadata"
            className="w-full max-h-[70vh] bg-black"
          />
        )}

        {/* صورة (تظهر لو مفيش فيديو، أو بعد الفيديو لو الاتنين موجودين) */}
        {item.image && (
          <img
            src={item.image}
            alt={title}
            className={`w-full max-h-[70vh] object-cover ${hasVideo(item) ? 'border-t border-gray-100' : ''}`}
          />
        )}

        <div className="p-6 md:p-8">
          <div className="flex items-center gap-2 text-[#7a1a3a] text-sm font-semibold mb-3">
            <Calendar size={16} />
            {formatDate(item.date, isAr)}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-[#0a2342] leading-snug mb-5">{title}</h3>
          <div className="space-y-4 text-gray-700 leading-8">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {hasNav && (
            <div className="flex justify-between mt-8 pt-5 border-t border-gray-100">
              <button
                onClick={onPrev}
                className="flex items-center gap-2 text-sm font-semibold text-[#0a2342] hover:text-[#7a1a3a] transition"
              >
                <PrevIcon size={18} />
                {isAr ? 'الخبر الأحدث' : 'Newer'}
              </button>
              <button
                onClick={onNext}
                className="flex items-center gap-2 text-sm font-semibold text-[#0a2342] hover:text-[#7a1a3a] transition"
              >
                {isAr ? 'الخبر الأقدم' : 'Older'}
                <NextIcon size={18} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------- السكشن ---------- */
const PAGE_SIZE = 6;

export default function News() {
  const { isAr } = useLang();
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // الأحدث أولًا — تلقائي
  const items = useMemo(
    () =>
      [...news]
        .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))
        .map(resolveItem),
    []
  );

  if (items.length === 0) return null;

  const shown = items.slice(0, visible);
  const t = (n: ResolvedNews) => (isAr ? n.title.ar : n.title.en) || n.title.ar;
  const b = (n: ResolvedNews) => (isAr ? n.body.ar : n.body.en) || n.body.ar;

  return (
    <section id="news" className="relative py-24 bg-gradient-to-b from-slate-100 to-slate-200/70 overflow-hidden">
      {/* زخرفة خفيفة في الخلفية */}
      <div className="pointer-events-none absolute -top-24 -right-24 w-72 h-72 rounded-full bg-[#7a1a3a]/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-[#0a2342]/5 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        <SectionHeading
          title={isAr ? 'آخر الأخبار' : 'Latest News'}
          subtitle={isAr ? 'تابع أحدث مستجدات الأكاديمية' : 'Stay Up to Date with the Academy'}
        />

        {/* كل الأخبار بنفس الحجم جنب بعض — لو العدد قليل بتتوسّط */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8" dir={isAr ? 'rtl' : 'ltr'}>
          {shown.map((n, idx) => (
            <button
              key={n.id}
              onClick={() => setOpenIndex(idx)}
              className="group relative flex flex-col w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-22px)] max-w-[520px] md:max-w-none rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 text-start ring-1 ring-black/5"
            >
              <Thumb item={n} className="aspect-[16/10]" />

              {/* شارة التاريخ فوق الصورة */}
              <span className={`absolute top-4 ${isAr ? 'right-4' : 'left-4'} z-10 inline-flex items-center gap-1.5 rounded-full bg-white/95 backdrop-blur px-3 py-1.5 text-xs font-bold text-[#7a1a3a] shadow`}>
                <Calendar size={13} />
                {formatDate(n.date, isAr)}
              </span>

              <div className="flex flex-col flex-1 p-6">
                <h4 className="text-lg md:text-xl font-bold text-[#0a2342] leading-snug mb-3 group-hover:text-[#7a1a3a] transition-colors" style={clamp(2)}>
                  {t(n)}
                </h4>
                <p className="text-gray-600 text-sm leading-7 mb-5" style={clamp(3)}>
                  {b(n)}
                </p>

                <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#7a1a3a] pt-4 border-t border-gray-100">
                  {isAr ? 'اقرأ المزيد' : 'Read more'}
                  {isAr ? (
                    <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
                  ) : (
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                  )}
                </span>
              </div>

              {/* خط لوني سفلي يظهر عند الـ hover */}
              <span className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-[#0a2342] via-[#7a1a3a] to-[#0a2342] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center" />
            </button>
          ))}
        </div>

        {items.length > visible && (
          <div className="text-center mt-12">
            <button
              onClick={() => setVisible((v) => v + PAGE_SIZE)}
              className="inline-flex items-center gap-2 rounded-full bg-[#0a2342] hover:bg-[#7a1a3a] text-white font-semibold px-7 py-3 shadow-lg transition-colors"
            >
              {isAr ? 'عرض المزيد من الأخبار' : 'Show more news'}
              <ChevronDown size={18} />
            </button>
          </div>
        )}
      </div>

      {openIndex !== null && items[openIndex] && (
        <NewsModal
          item={items[openIndex]}
          hasNav={items.length > 1}
          onClose={() => setOpenIndex(null)}
          // الأحدث = index أصغر
          onPrev={() => setOpenIndex((openIndex - 1 + items.length) % items.length)}
          onNext={() => setOpenIndex((openIndex + 1) % items.length)}
        />
      )}
    </section>
  );
}
