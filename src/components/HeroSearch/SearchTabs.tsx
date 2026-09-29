
'use client';

import { useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperType } from 'swiper';

import 'swiper/css';

import {
  Bus,
  Palmtree,
  Hotel,
  FileText,
  Sparkles,
  LucideIcon,
} from 'lucide-react';

// import BusForm from './forms/BusForm';
// import HolidayForm from './forms/HolidayForm';
import HotelForm from './Hotel/HotelFrom';
// import EventForm from './forms/EventForm';
// import ParkForm from './forms/ParkForm';

interface TabItem {
  id: string;
  label: string;
  icon: LucideIcon;
}

const TABS: TabItem[] = [
  { id: 'bus', label: 'Bus', icon: Bus },
  { id: 'holiday', label: 'Holiday', icon: Palmtree },
  { id: 'hotel', label: 'Hotel', icon: Hotel },
  { id: 'Visa', label: 'Event', icon: FileText },
  { id: 'park', label: 'Park', icon: Sparkles },
];

export default function SearchTabs() {
  const [activeTab, setActiveTab] = useState('hotel');
  const [swiper, setSwiper] = useState<SwiperType | null>(null);

  const handleTabClick = (id: string, index: number) => {
    setActiveTab(id);
    swiper?.slideTo(index);
  };

return (
<div className="relative mx-auto w-full max-w-[1100px] px-3 sm:px-6">


<div className="relative pt-[25px] sm:pt-[30px]">

<div className="absolute left-1/2 top-0 z-20 w-[90%] max-w-[660px] -translate-x-1/2 overflow-hidden border border-slate-100 bg-white shadow-lg rounded-lg">

<Swiper
  onSwiper={setSwiper}
  slidesPerView={4}
  spaceBetween={0}
  grabCursor
  watchOverflow
  resistance
  resistanceRatio={0.85}
  breakpoints={{
    640: {
      slidesPerView: 5,
      allowTouchMove: true,
    },
  }}
  className="w-full h-[50px] sm:h-[60px]"
>
{TABS.map((tab, index) => {
  const Icon = tab.icon;
  const isActive = activeTab === tab.id;

  return (
    <SwiperSlide
      key={tab.id}
      className="h-full" 
>
  <button
    type="button"
    onClick={() => handleTabClick(tab.id, index)}
    className={`relative flex w-full items-center cursor-pointer justify-center gap-2 whitespace-nowrap px-3 py-2 sm:py-5 text-sm font-semibold transition-colors sm:h-[59px] sm:gap-2 sm:px-4 sm:text-base lg:text-[13px] ${
      isActive
        ? 'text-[#080D91]'
        : 'text-slate-600 hover:text-[#080D91]'
                }`}
              >
<div className='flex-col cursor-pointer sm:flex-row flex items-center sm:gap-2'>
   <Icon
     size={23}
     strokeWidth={1.6}
     className={`shrink-0 w-4 h-5 sm:h-6 sm:w-6 ${
       isActive
         ? 'text-[#080D91]'
         : 'text-gray-500'
         }`}
       />
       <span className='text-[10px]'>{tab.label}</span>
     </div>

{isActive && (
  <span className="absolute cursor-pointer bottom-0 left-0 h-[3px] w-full bg-[#FFC900]" />
)}
</button>
</SwiperSlide>
);
})}
</Swiper>
</div>

      
<div className="relative z-10 min-h-[150px] border border-slate-100 bg-white pb-8 rounded-md sm:px-6 sm:pb-10 pt-5 sm:pt-10 lg:px-8">

  <div className="w-full">
  {/* {activeTab === 'bus' && <BusForm />} */}
  {/* {activeTab === 'holiday' && <HolidayForm />} */}
   {activeTab === 'hotel' && <HotelForm />}
  {/* {activeTab === 'event' && <EventForm />} */}
  {/* {activeTab === 'park' && <ParkForm />} */}
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-30">
  <button
    type="button"
    className="bg-[#FFC900] cursor-pointer hover:bg-[#e6b500] text-slate-900 font-bold px-8 py-3 rounded-xl shadow-md transition-all text-sm sm:text-base whitespace-nowrap min-w-[140px]"
  >
    Search
  </button>
</div>

        </div>

      </div>
    </div>
  );
}