/**
 * ============================================================
 *  ملف الأخبار — كل خبر جديد = أضف Object هنا وخلاص ✅
 * ============================================================
 *
 *  الخطوات:
 *  1) حط الصورة و/أو الفيديو داخل المجلد:  src/assets/news/
 *  2) انسخ أي خبر من تحت والصقه فوق الباقي، وغيّر البيانات.
 *  3) احفظ الملف — الخبر بيظهر في الموقع فورًا.
 *
 *  ترتيب الأخبار تلقائي: الأحدث (حسب date) يظهر أولًا ويبقى هو الخبر المميز.
 *
 *  الحقول:
 *   id      : رقم أو نص فريد لكل خبر (ما يتكررش)
 *   date    : التاريخ بصيغة 'YYYY-MM-DD'
 *   title   : العنوان { ar, en }   (en اختياري)
 *   body    : نص الخبر { ar, en }  (en اختياري) — سطر فاضي = فقرة جديدة
 *   image   : اسم ملف الصورة داخل src/assets/news/  (اختياري) — الامتداد اختياري
 *   video   : اسم ملف الفيديو داخل src/assets/news/ (اختياري) — الامتداد اختياري: 'news_1' أو 'news_1.mp4'
 *             أو لينك يوتيوب كامل  (اختياري)
 *
 *  - الخبر ممكن يكون: نص فقط / نص + صورة / نص + فيديو / نص + صورة + فيديو
 *  - لو حطيت image مع video، الصورة بتتستخدم كـ غلاف للفيديو (poster) وبتظهر برضه في الخبر.
 *  - تقدر بدل اسم الملف تكتب لينك كامل (https://...) أو مسار من public (/news/a.jpg).
 */

export interface NewsItem {
  id: number | string;
  date: string;
  title: { ar: string; en?: string };
  body: { ar: string; en?: string };
  image?: string;
  video?: string;
}

export const news: NewsItem[] = [
  {
    id: 2,
    date: '2026-09-29',
    title: {
      ar: 'تدشين أكاديمية مستشفى تخصصي نجران الصحية برعاية أمير المنطقة',
      en: 'Najran Specialist Hospital Health Academy Launched Under the Patronage of the Regional Governor',
    },
    body: {
      ar: 'برعاية كريمة من صاحب السمو الأمير جلوي بن عبدالعزيز بن مساعد، أمير منطقة نجران، تم تدشين أكاديمية مستشفى تخصصي نجران الصحية؛ لتبدأ مرحلة جديدة من الاستثمار في الكفاءات الوطنية، وتطوير التدريب والتأهيل في القطاع الصحي.\n\nوتأتي الأكاديمية امتدادًا لرسالة مستشفى تخصصي نجران في دعم التعليم والتدريب الصحي، والإسهام في إعداد كوادر مؤهلة وفق أعلى المعايير المهنية؛ بما يعزز جودة الرعاية الصحية ويخدم أبناء وبنات المنطقة.\n\nتخصصي نجران.. رعاية تصنع المستقبل.\n\n#مستشفى_تخصصي_نجران #أكاديمية_تخصصي_نجران #نجران',
      en: 'Under the generous patronage of HRH Prince Jalawi bin Abdulaziz bin Musaed, Governor of Najran Region, the Najran Specialist Hospital Health Academy was launched, opening a new phase of investment in national talent and in health-sector training and qualification.\n\nThe Academy extends the mission of Najran Specialist Hospital in supporting health education and training and in preparing qualified professionals to the highest professional standards, enhancing the quality of healthcare and serving the people of the region.\n\nNajran Specialist Hospital.. care that shapes the future.\n\n#مستشفى_تخصصي_نجران #أكاديمية_تخصصي_نجران #نجران',
    },
    video: 'news_2',
  },
  {
    id: 1,
    date: '2026-09-29',
    title: {
      ar: 'أكاديمية تخصصي نجران.. رعاية تصنع المستقبل',
      en: 'SNH Academy.. Care That Shapes the Future',
    },
    body: {
      ar: 'برعاية كريمة من صاحب السمو الأمير جلوي بن عبدالعزيز بن مساعد، أمير منطقة نجران، تم تدشين أكاديمية مستشفى تخصصي نجران الصحية؛ لتبدأ مرحلة جديدة من الاستثمار في الكفاءات الوطنية، وتطوير التدريب والتأهيل في القطاع الصحي.\n\nوتأتي الأكاديمية امتدادًا لرسالة مستشفى تخصصي نجران في دعم التعليم والتدريب الصحي، والإسهام في إعداد كوادر مؤهلة وفق أعلى المعايير المهنية؛ بما يعزز جودة الرعاية الصحية ويخدم أبناء وبنات المنطقة.\n\nتخصصي نجران.. رعاية تصنع المستقبل.\n\n#مستشفى_تخصصي_نجران #أكاديمية_تخصصي_نجران #نجران',
      en: 'Under the generous patronage of HRH Prince Jalawi bin Abdulaziz bin Musaed, Governor of Najran Region, the Najran Specialist Hospital Health Academy was launched, opening a new phase of investment in national talent and in health-sector training and qualification.\n\nThe Academy extends the mission of Najran Specialist Hospital in supporting health education and training and in preparing qualified professionals to the highest professional standards, enhancing the quality of healthcare and serving the people of the region.\n\nNajran Specialist Hospital.. care that shapes the future.\n\n#مستشفى_تخصصي_نجران #أكاديمية_تخصصي_نجران #نجران',
    },
    video: 'news_1',
  },
];
