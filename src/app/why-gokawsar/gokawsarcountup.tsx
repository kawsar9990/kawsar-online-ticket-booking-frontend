'use client'

const statsData = [
  {
    id: 1,
    title: 'Active Visitors',
    value: '0',
    bgGradient: 'bg-gradient-to-b from-[#ff80bf] via-[#ffb3da] to-[#ffe6f2]',
  },
  {
    id: 2,
    title: 'Happy User',
    value: '0',
    bgGradient: 'bg-gradient-to-b from-[#00d4ff] via-[#80eaefff] to-[#e6faff]',
  },
  {
    id: 3,
    title: 'Total Bookings',
    subtitle: '(Monthly Average)',
    value: '0',
    bgGradient: 'bg-gradient-to-b from-[#90f2b3] via-[#bcf8d2] to-[#ebfef2]',
  },
  {
    id: 4,
    title: '24 Hours Support Team',
    value: 'Real Time Ticketing',
    bgGradient: 'bg-gradient-to-b from-[#b366ff] via-[#d9b3ff] to-[#f4e6ff]',
  },
];



export default function WhyUs() {
return (
<section className="w-full bg-[#f8fafc] lg:pt-25 py-12 px-4 sm:px-6 lg:px-8">
<div className="max-w-7xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-sm border border-slate-100">
        

 <div className="mb-8">
   <h2 className="text-2xl sm:text-3xl font-bold text-[#1e293b] inline-block relative pb-2">
     Why Us
     <span className="absolute bottom-0 left-0 w-full h-1 bg-[#3b82f6] rounded-full" />
   </h2>
 </div>


<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
  {statsData.map((item) => (
    <div
      key={item.id}
      className={`relative overflow-hidden rounded-xl h-44 flex flex-col justify-center items-center text-center p-4 ${item.bgGradient} transition-all duration-300 hover:shadow-md`}
    >

<div className="absolute inset-0 flex flex-col justify-center items-center pointer-events-none select-none overflow-hidden space-y-1">
  <span className="text-3xl sm:text-4xl font-black uppercase text-white/30 whitespace-nowrap tracking-wider">
    WHY GoKawsar
  </span>
  <span className="text-3xl sm:text-4xl font-black uppercase text-white/30 whitespace-nowrap tracking-wider">
    WHY GoKawsar
  </span>
  <span className="text-3xl sm:text-4xl font-black uppercase text-white/30 whitespace-nowrap tracking-wider">
    WHY GoKawsar
  </span>
</div>


<div className="relative z-10 flex flex-col justify-center items-center">
  <h3 className="text-sm sm:text-base font-extrabold text-black tracking-tight flex items-center justify-center gap-1">
    {item.title}
    {item.subtitle && (
      <span className="text-[10px] font-bold text-slate-800 tracking-normal">
        {item.subtitle}
      </span>
    )}
  </h3>
  <p className="text-2xl sm:text-3xl font-extrabold text-[#1a237e] mt-2 tracking-tight">
    {item.value}
  </p>
</div>
</div>
))}
</div>
</div>
    </section>
  );
}