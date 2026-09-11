"use client";

import Image from 'next/image';
import Link from 'next/link';
import { 
  Zap, 
  ShieldCheck, 
  Tag, 
  Smartphone, 
  Headphones, 
  CheckCircle2, 
  MapPin, 
  Mail, 
  Globe,
} from 'lucide-react';




export default function AboutPage() {
const features = [
    {
      icon: <Zap className="w-6 h-6 text-blue-600" />,
      title: "Instant Confirmations",
      description: "No more waiting in uncertainty. Get real-time status updates and instant booking vouchers."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      title: "Safe & Secure Payments",
      description: "Integrated with top-tier secure payment gateways to ensure your transactions are always protected."
    },
    {
      icon: <Tag className="w-6 h-6 text-blue-600" />,
      title: "Best Price Guarantee",
      description: "Transparent pricing with zero hidden fees. What you see on screen is exactly what you pay."
    },
    {
      icon: <Smartphone className="w-6 h-6 text-blue-600" />,
      title: "Fully Responsive",
      description: "Whether you are on desktop, tablet, or mobile, gokawsar works seamlessly across all devices."
    },
    {
      icon: <Headphones className="w-6 h-6 text-blue-600" />,
      title: "24/7 Dedicated Support",
      description: "Our support team is always on standby to assist you with any booking inquiries or changes."
    }
  ];

  
  
return (
<div className="bg-white text-gray-800 min-h-screen font-sans xl:pt-7 selection:bg-blue-500 selection:text-white">
      

<section className="bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-gray-100">
  <div className="max-w-7xl mx-auto space-y-6">
    <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight">
      Who we are?
    </h2>
<p className="text-left text-gray-600 text-base sm:text-lg leading-relaxed font-normal max-w-4xl mx-auto">
  We started with one simple goal— to make booking effortless! As a tech-driven platform, <strong className="text-gray-900 font-semibold">gokawsar</strong> empowers users to choose, compare, and secure bookings in just a few taps. More than just a booking service, <strong className="text-gray-900 font-semibold">gokawsar</strong> is built to simplify your everyday travel and booking needs!
</p>
  </div>
</section>



<div className="max-w-6xl mx-auto px-5 py-10 space-y-15 sm:space-y-20">
        
<section className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-12 items-center">
<div className="lg:col-span-7 space-y-6">
<div className="inline-block bg-blue-50 border border-blue-100 text-blue-700 px-3 py-1 rounded-md text-xs sm:text-sm font-semibold uppercase tracking-wider">
  Who We Are
</div>
<h2 className="text-2xl sm:text-4xl font-bold text-gray-900 tracking-tight">
  Driven by Passion & Technical Innovation
</h2>
<p className="text-gray-600 text-sm sm:text-base leading-relaxed">
  <strong className="text-gray-800">gokawsar</strong> was founded by <strong className="text-gray-900">Kawsar Ahmed</strong>, a passionate web engineer with a vision to redefine how users interact with booking services online.
</p>
<p className="text-gray-600 text-sm sm:text-base leading-relaxed">
  Recognizing the friction users face with slow interfaces, redundant forms, and security concerns, Kawsar built this platform with a laser focus on high performance, reliable logic, and an intuitive user experience.
</p>
            
  <div className="space-y-3 pt-2">
    <div className="flex items-center gap-3">
      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
      <span className="text-gray-700 text-sm sm:text-base font-medium">Lightning-fast booking processing speed</span>
    </div>
    <div className="flex items-center gap-3">
      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
      <span className="text-gray-700 text-sm sm:text-base font-medium">Clean, simple UI/UX for frictionless navigation</span>
    </div>
    <div className="flex items-center gap-3">
      <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0" />
      <span className="text-gray-700 text-sm sm:text-base font-medium">End-to-end encrypted user data protection</span>
    </div>
  </div>
</div>


  <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-2xl border border-gray-100 shadow-xl shadow-gray-200/50 text-center space-y-4">
    <div className="w-28 h-28 sm:w-32 sm:h-32 mx-auto relative rounded-full overflow-hidden ring-4 ring-blue-500/20 bg-gray-100">
      <Image 
        src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1785502454/WhatsApp_Image_2025-03-02_at_3.38.51_PM_jzylal.jpg" 
        alt="Kawsar Ahmed" 
        fill 
        className="object-cover" 
      />
    </div>
    <div>
      <h3 className="text-lg sm:text-xl font-bold text-gray-900">Kawsar Ahmed</h3>
      <p className="text-xs sm:text-sm text-blue-600 font-medium">Founder & Lead Developer</p>
    </div>
    <blockquote className="italic text-gray-500 text-xs sm:text-sm border-t border-gray-100 pt-4 mt-2 leading-relaxed">
      &quot;Building gokawsar has always been about solving real problems. I wanted to create a platform where technology meets convenience.&quot;
    </blockquote>
  </div>
</section>

  
<section className="space-y-10 sm:space-y-12">
<div className="text-center space-y-3">
  <h2 className="text-2xl sm:text-4xl font-bold text-gray-900">Why Choose gokawsar?</h2>
  <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
    We don’t just process bookings; we craft reliable and hassle-free digital experiences.
  </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
  {features.map((feature, index) => (
    <div 
      key={index} 
      className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors duration-300">
        {feature.icon}
      </div>
      <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
      <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
    </div>
  ))}
</div>
</section>


<section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-sky-50/50 to-indigo-50 p-8 sm:p-12 rounded-3xl border border-blue-100 text-center space-y-6 shadow-sm">
  <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
    Have Questions or Business Inquiries?
  </h2>
  <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
    We are constantly evolving and adding new booking services. We’d love to connect and hear your feedback!
  </p>
  
  <div className="flex flex-wrap justify-center gap-6 sm:gap-8 pt-4 text-xs sm:text-sm text-gray-700 font-medium">
    <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
      <Globe className="w-4 h-4 text-blue-600" />
      <Link href="http://gokawsar.netlify.app" target='_blank' className="hover:underline">http://gokawsar.netlify.app</Link>
    </div>
    <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
      <Mail className="w-4 h-4 text-blue-600" />
      <span>kawsar158464@gmail.com</span>
    </div>
    <div className="flex items-center gap-2 hover:text-blue-600 transition-colors">
      <MapPin className="w-4 h-4 text-blue-600" />
      <span>Tangail, Dhaka, Bangladesh</span>
    </div>
  </div>
</section>

</div>
</div>
  );
}