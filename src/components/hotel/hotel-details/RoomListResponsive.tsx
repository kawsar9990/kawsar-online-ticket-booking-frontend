'use client';

import { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import { Check, X, Clock, Plus, HelpCircle, DoorClosed } from 'lucide-react';
import { amenityIconMap } from "@/utils/amenityIcons";
import Link from 'next/link';

interface Option {
  title: string;
  pricePerNight: number;
  totalPrice: number;
  benefits: string[];
  nonBenefits: string[];
  isAvailable: boolean;
}

interface Room {
  name: string;
  availableCount: number;
  availableCountText: string;
  bedType: string;
  maxAdults: number;
  maxChildren: number;
  viewType: string;
  area: string;
  quickAmenities: string[];
  images: string[];
  options: Option[];
}

interface GuestRoom {
  adults: number;
  childrenAges: number[];
}

interface RoomListProps {
  rooms?: Room[];
  guestRooms?: GuestRoom[];
}


export default function RoomListResponsisve({ rooms = [], guestRooms = [] }: RoomListProps) {
  const [toggler, setToggler] = useState(false);
  const [lightboxSources, setLightboxSources] = useState<string[]>([]);
  const [slideIndex, setSlideIndex] = useState(1);
  const [openAmenitiesRoomIdx, setOpenAmenitiesRoomIdx] = useState<number | null>(null);

  const openLightboxOnSlide = (images: string[], index: number = 0) => {
    if (!images || images.length === 0) return;
    setLightboxSources(images);
    setSlideIndex(index + 1);
    setToggler((prev) => !prev);
  };


  const filteredRooms = rooms.filter((room) => {
  if (guestRooms.length === 0) return true;

  if (room.availableCount < guestRooms.length) {
    return false;
  }

  return guestRooms.every(
    (guestRoom) =>
      room.maxAdults >= guestRoom.adults &&
      room.maxChildren >= guestRoom.childrenAges.length
  );
});



  if (!rooms || rooms.length === 0 || filteredRooms.length === 0) {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-3 sm:px-4 md:px-6 font-sans">
      <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-12 md:p-16 border border-slate-100 shadow-sm flex flex-col items-center justify-center text-center my-4 sm:my-6">

        <div className="w-14 h-14 sm:w-20 sm:h-20 bg-slate-50 rounded-2xl flex items-center justify-center mb-4 sm:mb-5 text-slate-800 border border-slate-100/80 shrink-0">
          <DoorClosed className="w-7 h-7 sm:w-10 sm:h-10 text-slate-700" />
        </div>

        <h3 className="text-lg sm:text-2xl font-bold text-slate-900 mb-2 tracking-tight">
          Check Room Availability
        </h3>

        <p className="text-xs sm:text-sm text-slate-500 max-w-xs sm:max-w-md mb-6 leading-relaxed">
          Enter your dates to see available rooms and find the perfect fit for your stay. Your ideal getaway is just a few clicks away! 🏨✨
        </p>

        <Link
          href="/"
          className="bg-[#525E75] hover:bg-[#414B5E] text-white font-medium text-xs sm:text-sm px-5 sm:px-6 py-2.5 rounded-xl transition-all duration-200 shadow-sm active:scale-95 cursor-pointer inline-flex items-center justify-center"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}


return (
<div className="w-full max-w-[1280px] mx-auto px-2 sm:px-4 space-y-4 sm:space-y-5 font-sans text-gray-800">
 
<div className="flex items-center gap-2 bg-[#FFF8EE] border border-[#FFE8CC] text-[#D97706] px-3 py-2 rounded-lg text-[10px]">
  <span className="w-4 h-4 bg-[#F59E0B] text-white rounded-full flex items-center justify-center font-bold text-[10px] shrink-0">
    !
  </span>
  <span className="leading-tight text-black">
    Room photos and layout may vary, and ShareTrip does not guarantee an exact match.
  </span>
</div>

{filteredRooms.length > 0 && filteredRooms.map((room, roomIdx) => {
const optionCount = room.options?.length || 0;
const visibleAmenities = room.quickAmenities?.slice(0, 5) || [];
const extraAmenities = room.quickAmenities?.slice(5) || [];
const roomImages = room.images || [];
const isAmenitiesOpen = openAmenitiesRoomIdx === roomIdx;

return (
<div
  key={roomIdx}
  className="bg-[#F5F7FA] rounded-2xl shadow-sm flex flex-col lg:flex-row overflow-hidden border border-slate-200/80"
>
  <div className="w-full lg:w-[290px] p-3.5 sm:p-4 bg-white flex flex-col justify-between shrink-0 border-b lg:border-b-0 lg:border-r border-slate-200/80">
<div className="space-y-2">
 <div
   onClick={() => openLightboxOnSlide(roomImages, 0)}
   className="w-full h-44 sm:h-48 lg:h-40 bg-slate-100 rounded-xl overflow-hidden cursor-pointer relative group"
 >
   {roomImages[0] && (
     <img
       src={roomImages[0]}
       alt={room.name}
       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
     />
   )}
 </div>

    
<div className="grid grid-cols-2 gap-2">
  {roomImages.slice(1, 3).map((img, imgIdx) => (
    <div
      key={imgIdx}
      onClick={() => openLightboxOnSlide(roomImages, imgIdx + 1)}
      className="w-full h-16 sm:h-20 lg:h-16 bg-slate-100 rounded-lg overflow-hidden cursor-pointer relative group"
    >
      <img
        src={img}
        alt=""
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
  ))}
</div>
</div>

    
<div className="mt-4 pt-3 border-t border-slate-100">
<div className="flex items-center justify-between mb-2">
  <h4 className="font-bold text-xs text-slate-900">
    Room Specifications
  </h4>
  <button
    onClick={() => openLightboxOnSlide(roomImages, 0)}
    className="text-[11px] cursor-pointer text-sky-600 hover:underline font-semibold"
  >
    View images
  </button>
</div>

    <div className="space-y-1.5 text-[11px] text-slate-600">
      <div className="flex justify-between">
        <span className="w-20 text-slate-500">Bed Type</span>
        <span className="flex-1 font-medium text-slate-800">
          : {room.bedType}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="w-20 text-slate-500">Capacity</span>
        <span className="flex-1 font-medium text-slate-800">
          : Adult x {room.maxAdults}, Child x {room.maxChildren}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="w-20 text-slate-500">View Type</span>
        <span className="flex-1 font-medium text-slate-800">
          : {room.viewType}
        </span>
      </div>
      <div className="flex justify-between">
        <span className="w-20 text-slate-500">Area</span>
        <span className="flex-1 font-medium text-slate-800">
          : {room.area}
        </span>
      </div>
    </div>
  </div>
</div>

          
 <div className="flex-1 p-3.5 sm:p-5 flex flex-col justify-between bg-[#F5F7FA] min-w-0">
<div>
 <div className="flex justify-between items-start gap-2 mb-2">
   <div>
     <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
       {room.name}
     </h3>
     <div className="flex items-center gap-1 text-amber-600 text-xs mt-0.5 font-medium">
       <Clock className="w-3.5 h-3.5 shrink-0" />
       <span>{room.availableCountText}</span>
     </div>
   </div>
   <span className="text-[11px] font-semibold text-slate-600 bg-slate-200/80 px-2.5 py-1 rounded-full shrink-0">
     {optionCount} {optionCount > 1 ? "Options" : "Option"}
   </span>
 </div>

              
<div className="flex flex-wrap items-center gap-1.5 my-3 relative">
{visibleAmenities.map((amenity, index) => {
  const Icon = amenityIconMap[amenity] || HelpCircle;
  return (
    <div
      key={index}
      className="flex items-center gap-1 px-2.5 py-1 bg-white border border-slate-200/60 text-slate-700 rounded-lg text-xs font-medium shadow-xs"
    >
      <Icon className="w-3.5 h-3.5 text-slate-500 shrink-0" />
      <span className="whitespace-nowrap">{amenity}</span>
    </div>
  );
})}

{extraAmenities.length > 0 && (
  <div className="relative">
<button
  onClick={() =>
    setOpenAmenitiesRoomIdx(
      isAmenitiesOpen ? null : roomIdx
    )
  }
  className="flex items-center gap-0.5 text-sky-600 text-xs font-semibold hover:underline cursor-pointer px-1 py-1"
>
  <Plus className="w-3.5 h-3.5" />
  <span>
    {isAmenitiesOpen
      ? "Show less"
      : `${extraAmenities.length} more`}
  </span>
</button>

    {isAmenitiesOpen && (
      <div className="absolute left-0 top-full mt-2 w-56 sm:w-64 p-3 bg-white border border-slate-200 rounded-xl shadow-xl z-30 flex flex-wrap gap-1.5">
        {extraAmenities.map((amenity, index) => {
          const Icon = amenityIconMap[amenity] || HelpCircle;
          return (
            <div
              key={index}
              className="flex items-center gap-1 px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium"
            >
              <Icon className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>{amenity}</span>
            </div>
          );
        })}
      </div>
    )}
  </div>
)}
</div>
</div>

<div className="mt-2 w-full">
  <div
    className={
      optionCount === 1
        ? "w-full"
        : "w-full overflow-x-auto touch-pan-x pb-3 scrollbar-thin scrollbar-thumb-slate-300"
    }
  >
<div
  className={
    optionCount === 1
      ? "w-full"
      : "flex gap-3 sm:gap-4 min-w-max"
  }
>
  {room.options?.map((option, optIdx) => (
<div
  key={optIdx}
  className={`${
    optionCount === 1
      ? "w-full"
      : "w-[260px] sm:w-[280px] shrink-0"
  } bg-white p-3.5 sm:p-4 rounded-xl shadow-sm border border-slate-200/80 flex flex-col justify-between`}
>
<div className="space-y-2.5">
  <h4 className="font-bold text-sm text-slate-900 leading-snug">
    {option.title}
  </h4>

<div>
  <div className="text-xs text-slate-500">
    <span className="font-extrabold text-sky-600 text-base">
      ৳ {option.pricePerNight?.toLocaleString()}
    </span>{" "}
    per night/room
  </div>
  <p className="text-[10px] text-slate-400">
    + taxes and fees apply
  </p>
</div>

                  
  <div className="space-y-1.5 pt-2 border-t border-slate-100 max-h-[140px] sm:max-h-[160px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-200">
    {option.benefits?.map((b, bIdx) => (
      <div
        key={bIdx}
        className="flex items-start gap-1.5 text-xs text-slate-700"
      >
        <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
        <span className="leading-tight">{b}</span>
      </div>
    ))}
    {option.nonBenefits?.map((nb, nbIdx) => (
      <div
        key={nbIdx}
        className="flex items-start gap-1.5 text-xs text-slate-500"
      >
        <X className="w-3.5 h-3.5 text-rose-500 shrink-0 mt-0.5" />
        <span className="leading-tight">{nb}</span>
      </div>
    ))}
  </div>
</div>

<div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
  <div className="flex justify-between items-baseline">
    <span className="text-[10px] sm:text-[11px] text-slate-500 font-medium">
      For 1 Room, 1 Night
    </span>
    <span className="text-sm sm:text-base font-extrabold text-slate-900">
      ৳ {option.totalPrice?.toLocaleString()}
    </span>
  </div>
  <button
    disabled={!option.isAvailable}
    className="w-full bg-sky-500 hover:bg-sky-600 active:bg-sky-700 text-white font-bold text-xs py-2.5 rounded-xl transition-all cursor-pointer disabled:opacity-50"
  >
    Book Now
  </button>
</div>
</div>
  ))}
</div>
  </div>
</div>
  </div>
</div>
  );
})}

      {lightboxSources.length > 0 && (
        <FsLightbox
          key={lightboxSources.join("")}
          toggler={toggler}
          sources={lightboxSources}
          slide={slideIndex}
        />
      )}
    </div>
  );
}