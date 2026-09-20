'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import { RiWhatsappFill } from "react-icons/ri";

export default function AppDownloadSection() {
const features = [
  'Faster and easier booking',
  'Get alerts before every departure',
  'Easy access to your tickets',
  'Onboard with digital tickets',
];

return (
<section className="w-full bg-white py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        
<div className="lg:col-span-6 flex justify-center items-center relative min-h-[320px] sm:min-h-[400px]">
<Image
  src="/assets/kk.png" 
  alt="GoKawsar Mobile App Showcase"
  width={600}
  height={450}
  priority
  className="w-full max-w-lg h-auto object-contain"
/>
</div>


<div className="lg:col-span-6 space-y-6">   

<h2 className="text-3xl sm:text-4xl font-extrabold text-gray-800 tracking-tight leading-snug">
  Get More Out of <span className="text-gray-900 notranslate">GoKawsar</span> with our{' '}
  <span className="text-emerald-600 font-bold">mobile app</span>
</h2>


<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 pt-2">
  {features.map((feature, idx) => (
    <div key={idx} className="flex items-center space-x-2">
      <span className="flex items-center justify-center w-5 h-5 rounded-full border border-emerald-500 text-emerald-600">
        <ChevronRight className="w-3.5 h-3.5" />
      </span>
      <span className="text-gray-600 text-sm font-medium">
        {feature}
      </span>
    </div>
  ))}
</div>


<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-2">
            

<Link
  href="https://gokawsar.netlify.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-3 bg-black hover:bg-gray-900 text-white px-4 py-2.5 rounded-lg border border-gray-800 shadow transition duration-200"
>
  <FaGooglePlay className="w-6 h-6 text-white" />
  <div className="text-left leading-none">
    <p className="text-[9px] uppercase tracking-wider text-gray-300 font-medium">
      Android App On
    </p>
    <p className="text-sm font-bold text-white mt-0.5">
      Google Play
    </p>
  </div>
</Link>


<Link
  href="https://gokawsar.vercel.app"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-3 bg-black hover:bg-gray-900 text-white px-4 py-2.5 rounded-lg border border-gray-800 shadow transition duration-200"
>
  <FaApple className="w-7 h-7 text-white" />
  <div className="text-left leading-none">
    <p className="text-[9px] text-gray-300 font-medium">
      Download on the
    </p>
    <p className="text-sm font-bold text-white mt-0.5">
      App Store
    </p>
  </div>
</Link>

<Link
  href="https://wa.me/8801602084187"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center space-x-3 bg-black hover:bg-gray-900 text-white px-4 py-2.5 rounded-lg border border-gray-800 shadow transition duration-200"
>
 <div className="relative">
   <RiWhatsappFill className="w-7 h-7 text-white" />
 </div>
 <div className="text-right leading-none">
   <p className="text-[9px] text-gray-300 font-medium">
     Just Say &quot;Hi&quot;
   </p>
   <p className="text-sm font-bold text-white mt-0.5 tracking-wide">
     01602084187
   </p>
 </div>
        </Link>
      </div>
    </div>

</div>
</section>
);
}