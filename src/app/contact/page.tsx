
import ContactForm from './ContactFrom';
import Map from '@/components/common/Map/Map';

export const metadata = {
  title: 'Contact Us | GoKawsar',
  description: 'Get in touch with GoKawsar support team. Have questions about bus ticket booking or destination guides? Reach out to us anytime.',
};


export default function page(){
return(
<div className='pt-5 lg:pt-20 bg-[#f8fafc]'>
<div className="bg-[#f8fafc] min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans antialiased">
<div className="max-w-6xl mx-auto space-y-8">
        
<div className="text-center max-w-xl mx-auto">
  <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
    Let’s Build Something Great Together
  </h1>
  <p className="mt-1.5 text-xs sm:text-sm text-slate-500">
   Have a project in mind, need technical support, or just want to connect with Kawsar Developer? Drop a message below.
  </p>
</div>


<div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
          
<div className="lg:col-span-5 bg-white rounded-xl p-4 border border-slate-200/80 shadow-sm flex flex-col justify-between">
<div>

<div className="relative w-full h-56 rounded-lg overflow-hidden mb-4 bg-slate-100 border border-slate-100">
  <img
    src="/assets/5.jpeg"
    alt="Kawsar"
   className="w-full h-full object-cover object-[center_20%] transform hover:scale-105 transition-transform duration-500"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>
  <div className="absolute bottom-3 left-3 right-3 text-white">
    <span className="inline-block px-2 py-0.5 bg-blue-600/80 backdrop-blur-md rounded text-[10px] font-medium mb-1">
      Verified Support
    </span>
    <p className="text-sm font-semibold tracking-wide notranslate">GoKawsar Contact</p>
    <p className="text-[11px] text-slate-300">Tangail, Dhaka, Bangladesh</p>
  </div>
</div>

<h2 className="text-sm font-bold text-slate-800">Direct Passenger Support</h2>
<p className="text-xs text-slate-500 mt-1 leading-relaxed">
  Reach out for bus booking inquiries, schedule updates, ticket cancellations, or trip assistance.
</p>
</div>

  <div className="mt-4 pt-3 border-t border-slate-100 grid grid-cols-2 gap-2.5 text-center">
    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
      <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Response</p>
      <p className="text-xs font-semibold text-slate-700 mt-0.5">&lt; 24 Hours</p>
    </div>
    <div className="bg-slate-50 p-2 rounded-lg border border-slate-100">
      <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Status</p>
      <p className="text-xs font-semibold text-emerald-600 mt-0.5">Active Online</p>
    </div>
  </div>
</div>


<div className="lg:col-span-7 flex flex-col justify-between gap-3">
            
<div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm hover:border-slate-300 transition-colors flex items-center gap-3.5">
  <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  </div>
  <div className="flex-1 flex items-center justify-between">
    <div>
      <h3 className="text-[10px] lg:text-[12px] font-semibold text-slate-400 capitalize tracking-wider">Location</h3>
      <p className="text-[10px] lg:text-[12px] font-semibold text-slate-800 mt-0.5">Tangail, Dhaka, Bangladesh</p>
    </div>
    <span className="text-[9px] lg:text-[12px] text-slate-400 bg-slate-50 px-1 py-1 lg:px-2 lg:py-1 rounded border border-slate-100">Main Office</span>
  </div>
</div>

  
<div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm hover:border-slate-300 transition-colors flex items-center gap-3.5">
  <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  </div>
  <div className="flex-1 flex items-center justify-between">
    <div>
      <h3 className="text-[10px] lg:text-[12px] font-semibold text-slate-400 capitalize tracking-wider">Email</h3>
      <p className="text-[10px] lg:text-[12px] font-semibold text-slate-800 mt-0.5">kawsar158464@gmail.com</p>
    </div>
    <span className="text-[9px] lg:text-[12px] text-slate-400 bg-slate-50 px-1 py-1 lg:px-2 lg:py-1 rounded border border-slate-100">Official</span>
  </div>
</div>


<div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm hover:border-slate-300 transition-colors flex items-center gap-3.5">
  <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  </div>
  <div className="flex-1 flex items-center justify-between">
    <div>
      <h3 className="text-[10px] lg:text-[12px] font-semibold text-slate-400 capitalize tracking-wider">Phone</h3>
      <p className="text-[10px] lg:text-[12px] font-semibold text-slate-800 mt-0.5">+8801602084187</p>
    </div>
    <span className="text-[9px] lg:text-[12px] text-slate-400 bg-slate-50 px-1 py-1 lg:px-2 lg:py-1 rounded border border-slate-100">Toll Free</span>
  </div>
</div>


<div className="bg-white p-3.5 rounded-xl border border-slate-200/80 shadow-sm hover:border-slate-300 transition-colors flex items-center gap-3.5">
  <div className="p-2 rounded-lg bg-slate-100 text-slate-700 shrink-0">
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  </div>
  <div className="flex-1 flex items-center justify-between">
    <div>
      <h3 className="text-[10px] lg:text-[12px] font-semibold text-slate-400 capitalize tracking-wider">Schedule</h3>
      <p className="text-[10px] lg:text-[12px] font-semibold text-slate-800 mt-0.5">Sat - Thu (08:00 AM - 07:00 PM)</p>
    </div>
    <span className="text-[9px] lg:text-[12px] text-emerald-600 bg-emerald-50 px-1 py-1 lg:px-2 lg:py-1 rounded border border-emerald-100 font-medium">Open Now</span>
  </div>
</div>

</div>
</div>


<div className="w-full">
  <ContactForm />
</div>


<div className="w-full space-y-2">
  <div className="flex items-center justify-between">
    <h3 className="text-base font-semibold text-slate-800">Our Map Location</h3>
    <span className="text-xs text-slate-400">Tangail, Bangladesh</span>
  </div>
  <Map />
</div>

</div>
</div>
</div>
)
}