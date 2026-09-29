"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { MapPin, Flame, ChevronLeft, XCircle } from "lucide-react";
import Image from "next/image";
import { LocationItem } from "@/types/locationFilter";
import {
  TOP_DESTINATIONS,
  TOP_PROPERTIES,
  DEFAULT_LOCATION,
} from "@/db/hotellocationdata";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";

interface LocationPickerProps {
  selectedLocation?: LocationItem;
  onSelect: (location: LocationItem) => void;
}

export default function ResponsiveLocationPicker({
  selectedLocation = DEFAULT_LOCATION,
  onSelect,
}: LocationPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<LocationItem[]>([]);
  const [loading, setLoading] = useState(false);

  const [activeTab, setActiveTab] = useState<
    "destination" | "properties"
  >("destination");

  const containerRef = useRef<HTMLDivElement>(null);
  const popupRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(isOpen);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchQuery.trim().length < 2) {
        setSearchResults([]);
        return;
      }
      setLoading(true);
      try {
        const res = await fetch(
          `/api/location?q=${encodeURIComponent(searchQuery)}&kind=all`
        );
        if (!res.ok) {
          setSearchResults([]);
          return;
        }
        const contentType = res.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const data = await res.json();
          setSearchResults(data.items || []);
        } else {
          setSearchResults([]);
        }
      } catch (err) {
        console.error("Search fetch error:", err);
        setSearchResults([]);
      } finally {
        setLoading(false);
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [searchQuery]);


  useEffect(() => {
    if (!isOpen) return;
    function handleClickOutside(event: MouseEvent) {
      const target = event.target as Node;

      const clickedInsideContainer =
        containerRef.current?.contains(target);

      const clickedInsidePopup =
        popupRef.current?.contains(target);

      if (!clickedInsideContainer && !clickedInsidePopup) {
        setIsOpen(false);
        setSearchQuery("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        setSearchQuery("");
      }
    }

    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  const handleSelect = (item: LocationItem) => {
    onSelect(item);
    setIsOpen(false);
    setSearchQuery("");
  };

  const handleClose = () => {
    setIsOpen(false);
    setSearchQuery("");
  };

return (
<>
  <div
    className="relative w-full"
    ref={containerRef}
>
  <div
    onClick={() => setIsOpen(true)}
    className="flex items-center gap-2.5 px-3.5 py-2.5
               border rounded-md border-slate-200 bg-white
               hover:border-slate-300 transition cursor-pointer
               w-full overflow-hidden"
  >
    <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
    <div className="border-l border-slate-200 pl-2.5 min-w-0 flex-1 overflow-hidden">
      <div className="text-[13px] font-semibold text-slate-800 truncate block w-full">
        {selectedLocation.name}
      </div>
      <div className="text-[11px] text-gray-500 truncate block w-full">
        {selectedLocation.subtitle}
      </div>
    </div>
  </div>
</div>


{mounted &&
  isOpen &&
  createPortal(
    <div
      className="fixed inset-0 z-[2147483647] bg-white
       flex flex-col overflow-hidden font-sans
       md:inset-0 md:bg-black/30
       md:items-center md:justify-start
       md:pt-24"
    >

<div
  className="absolute inset-0 hidden md:block"
  onClick={handleClose}
/>
<div
  ref={popupRef}
  role="dialog"
  aria-modal="true"
  aria-label="Choose location"
  className="relative z-[1] flex flex-col
             w-full h-full min-h-0
             bg-white overflow-hidden
             md:w-[600px] lg:w-[650px]
             md:h-auto md:max-h-[520px]
             md:rounded-xl md:border
             md:border-slate-200 md:shadow-2xl"
>

  <div
    className="p-3.5 border-b border-slate-100
               flex items-center gap-3 bg-white shrink-0"
  >
<button
  type="button"
  onClick={handleClose}
  className="p-1 text-slate-500 cursor-pointer
             hover:text-slate-800 transition
             rounded-full hover:bg-slate-100 shrink-0"
  aria-label="Close location picker"
>
  <ChevronLeft className="w-6 h-6" />
</button>

<input
  type="text"
  value={searchQuery}
  onChange={(e) =>
    setSearchQuery(e.target.value)
  }
  placeholder="Type to search"
  className="w-full text-base md:text-sm
             bg-transparent outline-none
             text-slate-700
             placeholder:text-slate-400"
  autoFocus
/>

{searchQuery && (
  <button
    type="button"
    onClick={() => setSearchQuery("")}
    className="p-1 text-slate-400 cursor-pointer
               hover:text-slate-600 transition shrink-0"
    aria-label="Clear search"
  >
    <XCircle className="w-5 h-5 fill-slate-300 text-white" />
  </button>
)}
  </div>


<div
  data-lenis-prevent
  className="flex-1 min-h-0 overflow-y-auto
             overscroll-contain touch-pan-y
             p-4 custom-scrollbar"
>
{searchQuery.trim().length >= 2 ? (
  <div>
    {loading ? (
      <div className="py-10 text-center text-xs text-slate-400">
        Searching...
      </div>
    ) : searchResults.length > 0 ? (
      <div className="divide-y divide-slate-100">
{searchResults.map((item) => (
<div
  key={item.id}
  onClick={() => handleSelect(item)}
  className="flex items-center justify-between
             py-3 px-2 hover:bg-slate-50
             rounded-md cursor-pointer transition"
>
<div className="min-w-0 flex-1 pr-3">
  <div className="text-sm font-semibold text-slate-800 truncate">
    {item.name}
  </div>

<div className="text-xs text-slate-400 truncate">
  {item.subtitle}
</div>
</div>
<span className="text-xs font-semibold text-sky-600 capitalize shrink-0">
  {item.type}
</span>
  </div>
))}
  </div>
) : (
    <div className="py-10 text-center text-xs text-slate-400">
      No results found
    </div>
  )}
</div>
) : (
<div>
           
<div className="hidden sm:grid sm:grid-cols-2 gap-6">
<div>
<h4 className="text-sm cursor-pointer font-bold text-slate-900 mb-3 border-b pb-2">
  Top Destination
</h4>

<div className="space-y-3">
  {TOP_DESTINATIONS.map((item) => (
    <div
      key={item.id}
      onClick={() => handleSelect(item)}
      className="flex items-center gap-3 p-1
                 rounded-lg hover:bg-slate-50
                 cursor-pointer transition"
    >
      {item.image && (
        <Image
          src={item.image}
          alt={item.name}
          width={44}
          height={44}
          className="w-11 h-11 rounded-lg object-cover shrink-0"
        />
      )}

   <div className="min-w-0 flex-1">
     <div className="text-xs font-bold text-slate-800 truncate flex items-center gap-1">
       {item.name}
       {item.hot && (
         <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500 shrink-0" />
       )}
     </div>
       <div className="text-[11px] text-slate-400 truncate">
         {item.subtitle}
       </div>
     </div>
   </div>
 ))}
  </div>
 </div>

                
<div className="cursor-pointer">
  <h4 className="text-sm font-bold cursor-pointer text-slate-900 mb-3 border-b pb-2">
    Top Properties
  </h4>
  <div className="space-y-3">
    {TOP_PROPERTIES.map((item) => (
      <div
        key={item.id}
        onClick={() => handleSelect(item)}
        className="flex items-center gap-3 p-1
                   rounded-lg hover:bg-slate-50
                   cursor-pointer transition"
      >
        {item.image && (
          <Image
            src={item.image}
            alt={item.name}
            width={44}
            height={44}
            className="w-11 h-11 rounded-lg object-cover shrink-0"
          />
    )}

<div className="min-w-0 flex-1">
  <div className="text-xs font-bold text-slate-800 truncate flex items-center gap-1">
    {item.name}
    {item.hot && (
      <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500 shrink-0" />
    )}
  </div>
    <div className="text-[11px] text-slate-400 truncate">
      {item.subtitle}
    </div>
  </div>
</div>
  ))}
</div>
  </div>
</div>

           
<div className="block sm:hidden">
  <div className="flex border-b border-slate-200 mb-4">
    <button
      type="button"
      onClick={() =>
        setActiveTab("destination")
      }
      className={`pb-2 text-xs cursor-pointer font-bold transition border-b-2 mr-6 ${
        activeTab === "destination"
          ? "border-blue-900 text-blue-900"
          : "border-transparent text-slate-500"
      }`}
    >
      Top Destination
    </button>

<button
  type="button"
  onClick={() =>
    setActiveTab("properties")
  }
  className={`pb-2 cursor-pointer text-xs font-bold transition border-b-2 ${
    activeTab === "properties"
      ? "border-blue-900 text-blue-900"
      : "border-transparent text-slate-500"
  }`}
>
  Top Properties
</button>
  </div>

<div className="space-y-3">
  {(
    activeTab === "destination"
      ? TOP_DESTINATIONS
      : TOP_PROPERTIES
  ).map((item) => (
    <div
      key={item.id}
      onClick={() => handleSelect(item)}
      className="flex items-center gap-3 p-1
                 rounded-lg hover:bg-slate-50
                 cursor-pointer transition"
    >
      {item.image && (
        <Image
          src={item.image}
          alt={item.name}
          width={44}
          height={44}
          className="w-11 h-11 rounded-lg object-cover shrink-0"
        />
      )}

<div className="min-w-0 flex-1">
  <div className="text-xs font-bold text-slate-800 truncate flex items-center gap-1">
    {item.name}
    {item.hot && (
      <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500 shrink-0" />
    )}
  </div>
  <div className="text-[11px] text-slate-400 truncate">
    {item.subtitle}
  </div>
</div>
  </div>
    ))}
  </div>
</div>
  </div>
)}
  </div>
</div>
  </div>,
  document.body
)}
</>
);
}