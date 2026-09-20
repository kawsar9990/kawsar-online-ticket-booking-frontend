'use client'

import Link from 'next/link';
import { useTranslation } from 'react-i18next';


export default function HowToUsePage() {
const { t } = useTranslation();

const steps = [
   {
      number: '01',
      titleKey: 'how_to_use.step1_title',
      descKey: 'how_to_use.step1_desc',
    },
    {
      number: '02',
      titleKey: 'how_to_use.step2_title',
      descKey: 'how_to_use.step2_desc',
    },
    {
      number: '03',
      titleKey: 'how_to_use.step3_title',
      descKey: 'how_to_use.step3_desc',
    },
    {
      number: '04',
      titleKey: 'how_to_use.step4_title',
      descKey: 'how_to_use.step4_desc',
    },
];

return (
<main className="min-h-screen lg:pt-25 bg-[#f8fafc] py-12 md:py-20 px-4 sm:px-6 lg:px-8 font-sans notranslate antialiased">
<div className="max-w-4xl mx-auto space-y-12">
        

<div className="space-y-3">
  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
    {t('how_to_use.title')}
  </h1>
  <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
    {t('how_to_use.subtitle_end')}
  </p>
</div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {steps.map((step) => (
    <div
      key={step.number}
      className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex items-start gap-4"
    >
      <span className="text-sm font-semibold text-blue-600 bg-blue-50 border border-blue-100 rounded-lg px-2.5 py-1">
        {step.number}
      </span>
      <div className="space-y-1">
        <h3 className="text-base font-semibold text-slate-900">
          {t(step.titleKey)}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {t(step.descKey)}
        </p>
      </div>
    </div>
  ))}
</div>


<div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
  <div className="space-y-0.5">
    <h3 className="text-sm font-semibold text-slate-900">{t('how_to_use.need_help_title')}</h3>
    <p className="text-xs text-slate-500">
     {t('how_to_use.need_help_desc')}
    </p>
  </div>
  <div className="flex gap-3 shrink-0">
    <Link
      href="/faq"
      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs rounded-lg transition-colors"
    >
      {t('how_to_use.faq_btn')}
    </Link>
    <Link
      href="/contact"
      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-lg transition-colors"
    >
      {t('how_to_use.contact_btn')}
    </Link>
  </div>
</div>

</div>
</main>
);
}