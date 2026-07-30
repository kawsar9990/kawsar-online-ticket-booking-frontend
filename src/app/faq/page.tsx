'use client';

import { useState } from 'react';


interface FaqItem {
  id: number;
  question: string;
  answer: string;
  category: string;
}

const faqData: FaqItem[] = [
  {
    id: 1,
    category: 'Booking',
    question: 'Can I buy any Bus Tickets from GoKawsar?',
    answer:
      'Ofcourse you can. With GoKawsar you can compare, book any available bus route at that moment from one screen seamlessly.',
  },
  {
    id: 2,
    category: 'Payment',
    question: 'What kind of payment do you accept?',
    answer:
      'We accept all major payment options in Bangladesh including bKash, Nagad, Rocket, Visa, Mastercard, and Internet Banking.',
  },
  {
    id: 3,
    category: 'Payment',
    question: 'Do you accept Cash payments?',
    answer:
      'Yes, cash payments are accepted for counter collections. However, for instant online seat confirmation, digital payment is recommended.',
  },
  {
    id: 4,
    category: 'Ticketing',
    question: 'How do I get my Ticket?',
    answer:
      'Once your payment is confirmed, an E-Ticket with booking ID will be sent to your email & phone via SMS. You can also download it directly from your account dashboard.',
  },
  {
    id: 5,
    category: 'Booking',
    question: 'Can I cancel or reschedule my bus ticket?',
    answer:
      'Yes, you can request a cancellation or schedule change from your user dashboard at least 6 hours before the bus departure time.',
  },
  {
    id: 6,
    category: 'Ticketing',
    question: 'Do I need to print my E-Ticket?',
    answer:
      'In most cases, showing the SMS or digital PDF ticket on your mobile phone at the bus counter is sufficient to collect your boarding pass.',
  },
];

export default function FaqPage() {
const [openId, setOpenId] = useState<number | null>(1);
const [selectedCategory, setSelectedCategory] = useState<string>('All');
const categories = ['All', 'Booking', 'Payment', 'Ticketing'];
const toggleFaq = (id: number) => {
  setOpenId(openId === id ? null : id);
};

const filteredFaqs =
selectedCategory === 'All'
? faqData
: faqData.filter((item) => item.category === selectedCategory);

return (
<div className="bg-[#f8fafc] md:min-h-screen pt-10 md:pt-25 py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased">
<div className="max-w-4xl mx-auto space-y-8">

<div className="text-center max-w-xl mx-auto">
  <span className="text-xs font-semibold tracking-widest text-blue-600 uppercase bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
    Help & Support
  </span>
  <h1 className="text-[17px] md:text-2xl font-bold text-slate-900 tracking-tight mt-3">
    Frequently Asked Questions
  </h1>
  <p className="mt-1.5 text-[9px] md:text-xs text-slate-500">
    Have questions about booking bus tickets on GoKawsar? Reach out to Kawsar Developer or find fast answers right here.
  </p>
</div>


<div className="flex flex-wrap items-center justify-center gap-2">
  {categories.map((cat) => (
    <button
      key={cat}
      onClick={() => setSelectedCategory(cat)}
      className={`px-4 py-1.5 text-xs font-medium rounded-full transition-all duration-200 cursor-pointer ${
        selectedCategory === cat
          ? 'bg-blue-600 text-white shadow-sm'
          : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
      }`}
    >
      {cat}
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
  {item.question}
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
   {item.answer}
 </div>
)}
</div>
);
})}
</div>


<div className="bg-white p-5 rounded-xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-start md:items-center md:justify-between gap-4">
<div className='flex flex-col items-start gap-3 md:gap-0'>
<h3 className="text-sm font-bold text-slate-800">Still need help?</h3>
<p className="text-[9px] md:text-xs text-slate-500 mt-0.5">
  Can't find the answer you are looking for? Please contact Kawsar Developer & our support team.
</p>
</div>
<a
href="/contact"
className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-lg shadow-sm transition-all whitespace-nowrap"
>
Contact Support
</a>
</div>

</div>
</div>
  );
}