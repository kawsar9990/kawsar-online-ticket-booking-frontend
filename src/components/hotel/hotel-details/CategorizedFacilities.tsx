'use client'

import { useState } from "react";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { getCategoryIcon } from "@/utils/HotelcategoryIcons";


interface FacilityGroup {
  category: string;
  items: string[];
}

interface CategorizedFacilitiesProps {
  facilities?: FacilityGroup[];
}


export default function CategorizedFacilities({ facilities = [] }: CategorizedFacilitiesProps ) {
const [isOpen, setIsOpen] = useState<boolean>(false);

useLockBodyScroll(isOpen);

if (!facilities || facilities.length === 0) return null;

return (
<div>
<div className="sm:block hidden w-full max-w-[1280px] mx-auto px-4 py-4 font-sans text-gray-800">
 <h3 className="text-xl font-bold text-gray-900 mb-6">Hotel & Room facilities</h3>
    
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-start">
  {facilities.map((group, index) => {
    const IconComponent = getCategoryIcon(group.category);
    return (
      <div key={index} className="p-5 bg-slate-50/70 border border-slate-100 rounded-2xl">
        <div className="flex items-center gap-2.5 mb-4 text-emerald-800 font-bold text-base">
          <div className="p-1 bg-emerald-100/50 rounded-md text-emerald-600 shrink-0">
            <IconComponent className="w-5 h-5" />
          </div>
          <h4 className="truncate">{group.category}</h4>
        </div>
        <ul className="space-y-2.5">
          {group.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600">
              <span className="text-emerald-500 font-bold shrink-0 mt-0.5">
                ✓
              </span>
              <span className="leading-snug">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  })}
</div>
</div> 


<div className="sm:hidden block w-full max-w-[1280px] mx-auto px-4 py-4 font-sans text-gray-800">

<button
  onClick={() => setIsOpen(true)}
  className="text-sky-600 cursor-pointer font-semibold text-sm flex items-center gap-1 hover:underline focus:outline-none"
>
  Show all amenities
  <span className="text-base leading-none">›</span>
</button>


{isOpen && (
<div className="fixed inset-0 z-50 flex items-end justify-center bg-black/50">

<div
  className="absolute inset-0"
  onClick={() => setIsOpen(false)}
/>

          
<div className="relative z-10 w-full h-[85vh] max-h-[85vh] bg-white rounded-t-2xl flex flex-col overflow-hidden">
<div className="flex items-center justify-between px-5 py-5 pb-2 sticky top-0 bg-white z-20">
  <h3 className="text-base font-bold text-gray-900">
    Hotel Amenities
  </h3>
  <button
    onClick={() => setIsOpen(false)}
    className="text-gray-400 cursor-pointer hover:text-gray-600 text-xl font-bold p-1"
  >
    ✕
  </button>
</div>

     
<div data-lenis-prevent
style={{ touchAction: 'pan-y', overscrollBehavior: 'contain' }}
className="flex-1 min-h-0 overflow-y-auto px-5 py-4">
<div className="space-y-6">
{facilities.map((group, groupIdx) => (
<div key={groupIdx}>
<h4 className="text-sm font-bold text-gray-900 mb-3">
  {group.category}
</h4>

<div className="grid grid-cols-2 gap-x-4 gap-y-3">
{group.items.map((item, itemIdx) => {
return (
<div
  key={itemIdx}
  className="flex items-center gap-2 min-w-0"
>
  <span className="text-emerald-500 font-bold shrink-0 mt-0.5">
      ✓
  </span>
  <span className="text-xs text-gray-700 leading-tight line-clamp-2 truncate">
    {item}
  </span>
</div>
    );
  })}
</div>
</div>
))}
</div>
</div>
</div>
</div>
)}
</div>

</div>
);
}