'use client';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

interface FaqItem {
  id: number;
  category: string;
  categoryKey: string;
  questionKey: string;
  answerKey: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    category: 'Booking',
    categoryKey: 'faq.categories.booking',
    questionKey: 'faq.questions.q1',
    answerKey: 'faq.questions.a1',
  },
  {
    id: 2,
    category: 'Payment',
    categoryKey: 'faq.categories.payment',
    questionKey: 'faq.questions.q2',
    answerKey: 'faq.questions.a2',
  },
  {
    id: 3,
    category: 'Payment',
    categoryKey: 'faq.categories.payment',
    questionKey: 'faq.questions.q3',
    answerKey: 'faq.questions.a3',
  },
  {
    id: 4,
    category: 'Ticketing',
    categoryKey: 'faq.categories.ticketing',
    questionKey: 'faq.questions.q4',
    answerKey: 'faq.questions.a4',
  },
  {
    id: 5,
    category: 'Booking',
    categoryKey: 'faq.categories.booking',
    questionKey: 'faq.questions.q5',
    answerKey: 'faq.questions.a5',
  },
  {
    id: 6,
    category: 'Ticketing',
    categoryKey: 'faq.categories.ticketing',
    questionKey: 'faq.questions.q6',
    answerKey: 'faq.questions.a6',
  },
];


export default function FaqPage() {
const [openId, setOpenId] = useState<number | null>(1);
const { t } = useTranslation();
const [selectedCategory, setSelectedCategory] = useState<string>('All');


const categories = [
    { key: 'All', labelKey: 'faq.categories.all' },
    { key: 'Booking', labelKey: 'faq.categories.booking' },
    { key: 'Payment', labelKey: 'faq.categories.payment' },
    { key: 'Ticketing', labelKey: 'faq.categories.ticketing' },
  ];

const toggleFaq = (id: number) => {
  setOpenId(openId === id ? null : id);
};



const filteredFaqs =
selectedCategory === 'All'
? faqData
: faqData.filter((item) => item.category === selectedCategory);

return (
<div className="bg-[#f8fafc] md:min-h-screen pt-10 md:pt-25 py-10 px-4 sm:px-6 lg:px-8 notranslate font-sans antialiased">
<div className="max-w-4xl mx-auto space-y-8">

<div className="text-center max-w-xl mx-auto">
  <h1 className="text-[17px] md:text-2xl font-bold text-slate-900 tracking-tight">
    {t('faq.title')}
  </h1>
  <p className="mt-1.5 text-[9px] md:text-xs text-slate-500">
   {t('faq.subtitle')}
  </p>
</div>


<div className="flex flex-wrap items-center justify-center gap-2">
  {categories.map((cat) => (
    <button
      key={cat.key}
      onClick={() => setSelectedCategory(cat.key)}
      className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
        selectedCategory === cat.key
          ? 'bg-blue-600 text-white shadow-sm'
          : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
      }`}
    >
     {t(cat.labelKey)}
    </button>
  ))}
</div>


<div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
{filteredFaqs.map((item, index) => {
const isOpen = openId === item.id;
return (
<div
  key={item.id}
  className={`${
    index !== filteredFaqs.length - 1 ? 'border-b border-slate-100' : ''
  }`}
>

<button
  onClick={() => toggleFaq(item.id)}
  className={`w-full text-left px-6 py-4 flex items-center justify-between transition-colors duration-200 cursor-pointer ${
    isOpen ? 'bg-blue-50/70 text-blue-900' : 'bg-white text-slate-800 hover:bg-slate-50/50'
  }`}
>
<span className="text-[10px] md:text-[15px] font-medium pr-4 capitalize">
  {t(item.questionKey)}
</span>
                  
  <svg
    className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
      isOpen ? 'transform rotate-180 text-blue-600' : 'text-slate-400'
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
      d="M19 9l-7 7-7-7"
    />
  </svg>
</button>

  
{isOpen && (
 <div className="text-[10px] capitalize md:text-[12px] px-6 py-4 bg-white text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100/60">
   {t(item.answerKey)}
 </div>
)}
</div>
);
})}
</div>


<div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-start md:items-center md:justify-between gap-4">
<div className='flex flex-col items-start gap-3 md:gap-0'>
<h3 className="text-sm font-bold text-slate-800">{t('faq.still_help_title')}</h3>
<p className="text-[9px] md:text-xs text-slate-500 mt-0.5">
{t('faq.still_help_desc')}
</p>
</div>
<a
href="/contact"
className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-lg shadow-sm transition-all whitespace-nowrap"
>
{t('faq.contact_btn')}
</a>
</div>

</div>
</div>
  );
}