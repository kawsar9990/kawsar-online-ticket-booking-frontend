"use client";

import Link from "next/link";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How to book hotels from GoKawsar?",
    answer:
      "Select your destination, check-in and check-out dates, and number of guests on GoKawsar. Browse through available options, select your preferred room, and proceed with online payment to confirm your booking instantly.",
  },
  {
    question: "Are the clients able to see whether the preferred hotel has rooms or not?",
    answer:
      "Yes, all hotel listings on GoKawsar display real-time room availability. If a room is visible and bookable, it is available for your selected dates.",
  },
  {
    question: "What is the refund policy?",
    answer:
      "Refund policies vary depending on the hotel and room type selected. You can view the specific cancellation and refund terms on the booking review page before confirming.",
  },
  {
    question: "Can we check in early since I will reach there early?",
    answer:
      "Early check-in is subject to room availability upon arrival at the hotel. You may request it directly at the front desk or contact our support team in advance.",
  },
  {
    question: "Is there a geyser service in our room? If not, how can I add this service?",
    answer:
      "Most listed hotels provide hot water/geyser facilities. You can check the room amenities section before booking or request extra assistance via hotel support.",
  },
  {
    question: "Can I get a pair of the connected room?",
    answer:
      "Connected rooms can be requested during booking or directly with the hotel staff upon arrival, subject to availability.",
  },
  {
    question: "Can we change our garden view to a beach view?",
    answer:
      "Room view upgrades depend on availability and hotel policies. Additional charges may apply for upgrading to a premium view room.",
  },
  {
    question: "Can I get a smoking room?",
    answer:
      "You can select non-smoking or smoking room preferences under special requests during checkout, depending on hotel availability.",
  },
  {
    question: "Can we upgrade our rooms?",
    answer:
      "Yes, room upgrades can be requested at the hotel reception upon check-in or by contacting GoKawsar customer support prior to your trip.",
  },
];

export default function HotelFAQ() {

const [openIndex, setOpenIndex] = useState<number | null>(null);

const toggleFAQ = (index: number) => {
  setOpenIndex(openIndex === index ? null : index);
};

return (
<div className="w-full max-w-[1000px] mx-auto px-4 py-12 font-sans text-gray-800">

<div className="text-center mb-8">
  <h2 className="text-2xl sm:text-3xl font-bold text-[#1e293b] mb-2">
    Frequently Asked Questions
  </h2>
  <p className="text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
    Find quick answers to common queries. Simplify your travel planning with our concise and
    informative FAQ section.
  </p>
</div>

  
<div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm mb-10">
{faqData.map((item, index) => {
  const isOpen = openIndex === index;
  return (
<div
  key={index}
  className={`border-b border-gray-200 cursor-pointer last:border-b-0 transition-colors ${
    isOpen ? "bg-gray-50/50" : "bg-white"
  }`}
>
<button
  onClick={() => toggleFAQ(index)}
  className="w-full py-4 px-6 flex items-center cursor-pointer justify-between text-left hover:bg-gray-50/80 transition-colors focus:outline-none"
>
  <span className="font-semibold cursor-pointer text-sm sm:text-base text-gray-800 pr-4">
    {item.question}
  </span>
  <span className="text-xl cursor-pointer font-light text-gray-500 shrink-0">
    {isOpen ? "−" : "+"}
  </span>
</button>

{isOpen && (
  <div className="px-6 pb-4 pt-1 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-gray-100">
    {item.answer}
  </div>
)}
</div>
);
})}
</div>


<div className="bg-[#eef5ff] rounded-2xl p-8 text-center border border-blue-100">
  <h3 className="text-lg font-bold text-gray-900 mb-1">Still have Questions?</h3>
  <p className="text-xs sm:text-sm text-gray-500 mb-4">
    Cant find the answer youre looking for?
    <br />
    Our support team is waiting to help you 24/7
  </p>
  <Link
    href="/contact" target="_blank"
    className="bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition-all duration-200 hover:shadow-lg"
  >
    Lets Chat Now
  </Link>
</div>
</div>
  );
}