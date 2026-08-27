import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'How to Use | GoKawsar',
  description: 'A simple guide on how to search, select seats, and book bus tickets on GoKawsar.',
};

export default function HowToUsePage() {
const steps = [
    {
      number: '01',
      title: 'Search Route',
      description: 'Select your starting location, destination, travel date, and search for available buses.',
    },
    {
      number: '02',
      title: 'Select Bus & Seat',
      description: 'Filter options by operator, time, or AC type, and choose your preferred seats from the seat map.',
    },
    {
      number: '03',
      title: 'Passenger Info',
      description: 'Enter the passenger details like Name, Phone Number, and Email for ticket issuance.',
    },
    {
      number: '04',
      title: 'Payment & Confirmation',
      description: 'Complete the payment through your preferred method to instantly receive your E-Ticket via SMS and Email.',
    },
];

return (
<main className="min-h-screen lg:pt-25 bg-[#f8fafc] py-12 md:py-20 px-4 sm:px-6 lg:px-8 font-sans antialiased">
<div className="max-w-4xl mx-auto space-y-12">
        

<div className="space-y-3">
  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
    How to Book Tickets
  </h1>
  <p className="text-sm text-slate-500 leading-relaxed max-w-2xl">
    Booking bus tickets on GoKawsar is quick and straightforward. Follow these steps to complete your reservation in just a few minutes.
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
          {step.title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {step.description}
        </p>
      </div>
    </div>
  ))}
</div>


<div className="bg-white p-6 rounded-xl border border-slate-200/80 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
  <div className="space-y-0.5">
    <h3 className="text-sm font-semibold text-slate-900">Need help with your booking?</h3>
    <p className="text-xs text-slate-500">
      Check our frequently asked questions or contact support for assistance.
    </p>
  </div>
  <div className="flex gap-3 shrink-0">
    <Link
      href="/faq"
      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-medium text-xs rounded-lg transition-colors"
    >
      FAQ
    </Link>
    <Link
      href="/contact"
      className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-lg transition-colors"
    >
      Contact Us
    </Link>
  </div>
</div>

</div>
</main>
);
}