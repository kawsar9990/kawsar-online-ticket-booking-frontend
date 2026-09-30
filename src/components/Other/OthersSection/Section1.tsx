'use client'

import { Search, MousePointerClick, Smartphone } from 'lucide-react';

interface StepItem {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: StepItem[] = [
  {
    id: 1,
    title: 'Search',
    description: 'Choose your origin, destination, journey dates and search for buses',
    icon: <Search className="w-8 h-8 text-[#00A651]" />,
  },
  {
    id: 2,
    title: 'Select',
    description: 'Select your desired trip and choose your seats',
    icon: <MousePointerClick className="w-8 h-8 text-[#00A651]" />,
  },
  {
    id: 3,
    title: 'Pay',
    description: 'Pay by bank cards or mobile banking',
    icon: <Smartphone className="w-8 h-8 text-[#00A651]" />,
  },
];

export default function HowToBuyTickets(){
return (
<div className='bg-[#FFFFFF]'>
<section className="py-12 px-4 max-w-6xl mx-auto text-center font-sans">

 <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-12">
   <span className="text-[#00A651]">Buy tickets</span> in 3 easy steps
 </h2>


<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
  {steps.map((step) => (
    <div key={step.id} className="flex items-start gap-4 text-left">
      <div className="p-4 bg-[#F2F9F5] rounded-2xl flex-shrink-0 flex items-center justify-center">
        {step.icon}
      </div>


  <div className="pt-1">
    <h3 className="text-2xl font-bold text-gray-800 mb-2">
      {step.title}
    </h3>
    <p className="text-gray-500 text-sm leading-relaxed">
      {step.description}
    </p>
  </div>
</div>
    ))}
  </div>
</section>
</div>
  );
};
