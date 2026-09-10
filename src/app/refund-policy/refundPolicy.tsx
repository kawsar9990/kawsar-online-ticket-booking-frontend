"use client";

import { useState } from "react";

type Language = "en" | "bn";

interface ContentSection {
  id: number;
  title: string;
  body: string[];
}

interface PolicyContent {
  mainTitle: string;
  langBtnText: string;
  sections: ContentSection[];
}

const policyData: Record<Language, PolicyContent> = {
  en: {
    mainTitle: "Refund & Cancellation Policy",
    langBtnText: "বাংলা",
    sections: [
      {
        id: 1,
        title: "1. Refund Processing Time",
        body: [
          "Refunds will be processed within 1 to 14 business days, depending on the payment method used.",
          "The refund will be credited via the same payment channel used for payment.",
        ],
      },
      {
        id: 2,
        title: "2. Flight Bookings",
        body: [
          "GoKawsar follows the airline's cancellation and reissue policies.",
          "Travelers must request cancellations or changes at least 48 hours before departure to avoid no-show charges.",
          "Cancellations or reissues require contacting GoKawsar support or via GoKawsar Chat.",
          "Airlines may charge a cancellation or reissue fee, and GoKawsar may impose additional service fees beyond airline fees.",
          "EMI-related charges, if applicable, will be deducted from the refund amount.",
          "Convenience charges are non-refundable.",
        ],
      },
      {
        id: 3,
        title: "3. Hotel Bookings",
        body: [
          "GoKawsar follows each property's cancellation policy.",
          "Travelers must cancel bookings via GoKawsar Chat or by contacting GoKawsar support.",
          "Cancellation fees may apply based on the hotel's terms and cancellation timing.",
          "Changes are dependent on hotel's terms and conditions.",
          "Black-out date bookings are non-cancellable and non-refundable.",
          "EMI-related charges, if applicable, will be deducted from the refund amount.",
          "Convenience charges are non-refundable.",
        ],
      },
      {
        id: 4,
        title: '4. "GoKawsar Flex Search" Bookings',
        body: [
          '"GoKawsar Flex Search" combines flights from different airlines under one itinerary, each subject to individual airline policies.',
          'If a flight in a "GoKawsar Flex Search" is not booked or issued, it will be refunded or reissued as per the respective airline\'s policy.',
          "Flight fares are subject to change based on airline availability and policies.",
          "Any changes or cancellations must be handled directly with the respective airline.",
          "Refund, cancellation, or date change requests will follow airline policies along with GoKawsar's service fees.",
          "GoKawsar is not liable for issues arising from combining flights from different airlines.",
          "Travel insurance is recommended to cover unforeseen events.",
        ],
      },
      {
        id: 5,
        title: "5. Visa Services",
        body: [
          "Visa fees and service charges are strictly non-refundable, even in cases where a visa is denied.",
        ],
      },
      {
        id: 6,
        title: "6. Force Majeure & Unforeseen Circumstances",
        body: [
          "GoKawsar is not liable for disruptions due to natural disasters, strikes, or government-imposed restrictions.",
        ],
      },
    ],
  },
  bn: {
    mainTitle: "ফেরত এবং বাতিলকরণ নীতি",
    langBtnText: "English",
    sections: [
      {
        id: 1,
        title: "১. ফেরত প্রক্রিয়াকরণের সময়",
        body: [
          "ব্যবহৃত পেমেন্ট পদ্ধতির উপর নির্ভর করে, ফেরত ১ থেকে ১৪ কার্যদিবসের মধ্যে প্রক্রিয়া করা হবে।",
          "বুকিংয়ের জন্য ব্যবহৃত একই পেমেন্ট চ্যানেলের মাধ্যমে ফেরত জমা করা হবে।",
        ],
      },
      {
        id: 2,
        title: "২. ফ্লাইট বুকিং",
        body: [
          "GoKawsar এয়ারলাইনের বাতিল এবং পুনরায় ইস্যু করার নীতি অনুসরণ করে।",
          "নো-শো চার্জ এড়াতে যাত্রীদের অবশ্যই ভ্রমণের কমপক্ষে ৪৮ ঘণ্টা আগে বাতিল বা পরিবর্তনের অনুরোধ করতে হবে।",
          "বাতিল বা পুনরায় ইস্যু করার জন্য GoKawsar সাপোর্ট নম্বরে বা GoKawsar চ্যাটের মাধ্যমে যোগাযোগ করতে হবে।",
          "এয়ারলাইন বাতিল বা পুনরায় ইস্যু করার জন্য ফি নিতে পারে এবং GoKawsar এয়ারলাইনের ফি ছাড়াও অতিরিক্ত সার্ভিস চার্জ নিতে পারে।",
          "ইএমআই-সম্পর্কিত চার্জ, যদি প্রযোজ্য হয়, ফেরত পরিমাণ থেকে কেটে নেওয়া হবে।",
          "সুবিধা চার্জ (Convenience Charge) ফেরতযোগ্য নয়।",
        ],
      },
      {
        id: 3,
        title: "৩. হোটেল বুকিং",
        body: [
          "GoKawsar প্রতিটি সম্পত্তির বাতিলকরণ নীতি অনুসরণ করে।",
          "যাত্রীদের GoKawsar চ্যাটের মাধ্যমে বা সাপোর্ট নম্বরে GoKawsar এর সাথে যোগাযোগ করে বুকিং বাতিল করতে হবে।",
          "হোটেলের শর্তাবলী এবং বাতিলের সময়ের উপর ভিত্তি করে বাতিলের ফি প্রযোজ্য হতে পারে।",
          "পরিবর্তন হোটেলের শর্তাবলীর উপর নির্ভরশীল।",
          "ব্ল্যাক-আউট তারিখের বুকিং বাতিল বা ফেরতযোগ্য নয়।",
          "ইএমআই-সম্পর্কিত চার্জ, যদি প্রযোজ্য হয়, ফেরত পরিমাণ থেকে কেটে নেওয়া হবে।",
          "সুবিধা চার্জ ফেরতযোগ্য নয়।",
        ],
      },
      {
        id: 4,
        title: '৪. "GoKawsar ফ্লেক্স সার্চ" বুকিং',
        body: [
          '"GoKawsar ফ্লেক্স সার্চ" একটি ভ্রমণসূচির অধীনে বিভিন্ন এয়ারলাইনের ফ্লাইটকে একত্রিত করে, প্রতিটি পৃথক এয়ারলাইনের নীতির আওতায়।',
          'যদি "GoKawsar ফ্লেক্স সার্চ"-এর কোনো ফ্লাইট বুক বা ইস্যু করা না হয়, তবে তা সংশ্লিষ্ট এয়ারলাইনের নীতি অনুযায়ী ফেরত বা পুনরায় ইস্যু করা হবে।',
          "এয়ারলাইনের প্রাপ্যতা এবং নীতির উপর ভিত্তি করে ফ্লাইটের ভাড়া পরিবর্তন সাপেক্ষ।",
          "যেকোনো পরিবর্তন বা বাতিল সরাসরি সংশ্লিষ্ট এয়ারলাইনের সাথে পরিচালনা করতে হবে।",
          "ফেরত, বাতিল বা তারিখ পরিবর্তনের অনুরোধ GoKawsar এর পরিষেবা ফি সহ এয়ারলাইনের নীতি অনুসরণ করবে।",
          "বিভিন্ন এয়ারলাইনের ফ্লাইট একত্রিত করার ফলে উদ্ভূত সমস্যার জন্য GoKawsar দায়ী নয়।",
          "অপ্রত্যাশিত ঘটনাগুলি মোকাবিলার জন্য ভ্রমণ বীমা করার পরামর্শ দেওয়া হচ্ছে।",
        ],
      },
      {
        id: 5,
        title: "৫. ভিসা পরিষেবা",
        body: [
          "ভিসা ফি এবং পরিষেবা চার্জ কঠোরভাবে অ-ফেরতযোগ্য, এমনকি যদি ভিসা প্রত্যাখ্যান করা হয়।",
        ],
      },
      {
        id: 6,
        title: "৬. অননিবার্য পরিস্থিতি ও অপ্রত্যাশিত ঘটনা",
        body: [
          "প্রাকৃতিক দুর্যোগ, ধর্মঘট বা সরকার কর্তৃক আরোপিত বিধিনিষেধের কারণে ব্যাঘাত ঘটলে GoKawsar দায়ী নয়।",
        ],
      },
    ],
  },
};



export default function RefundPolicy() {
const [lang, setLang] = useState<Language>("en");

const currentContent = policyData[lang];

const toggleLanguage = () => {
  setLang((prev) => (prev === "en" ? "bn" : "en"));
};

return (
<div className="lg:px-10 lg:py-20">
<main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
<div className="mx-auto max-w-5xl rounded-lg bg-white p-6 shadow-sm md:p-12">

<div className="flex items-center justify-between pb-8">
 <h1 className="text-[19px] sm:text-2xl font-bold text-[#1E293B] md:text-3xl">
   {currentContent.mainTitle}
 </h1>

  <button
    onClick={toggleLanguage}
    className="rounded bg-[#2B388F] px-5 py-1.5 text-sm font-medium text-white transition-colors hover:bg-[#1f296d]"
  >
    {currentContent.langBtnText}
  </button>
</div>


<div className="space-y-8">
  {currentContent.sections.map((section, index) => (
<div key={section.id}>
<div className="space-y-3">
  <h2 className="text-base font-bold text-[#334155] md:text-lg">
    {section.title}
  </h2>
  <div className="space-y-1.5 text-sm leading-relaxed text-[#475569]">
    {section.body.map((text, i) => (
      <p key={i}>{text}</p>
    ))}
  </div>
</div>
           
  {index !== currentContent.sections.length - 1 && (
    <hr className="mt-8 border-t border-gray-200" />
    )}
  </div>
))}
</div>
</div>
</main>
</div>
);
}