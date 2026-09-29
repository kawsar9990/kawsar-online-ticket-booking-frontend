"use client";

import { useState, useRef, useEffect } from "react";
import { MapPin, Search, Flame } from "lucide-react";
import Image from "next/image";
import { LocationItem } from "@/types/locationFilter";
import { TOP_DESTINATIONS, TOP_PROPERTIES, DEFAULT_LOCATION } from "@/db/hotellocationdata";

interface LocationPickerProps {
  selectedLocation?: LocationItem;
  onSelect: (location: LocationItem) => void;
}

export default function LocationPicker({
  selectedLocation = DEFAULT_LOCATION,
  onSelect,
}: LocationPickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<LocationItem[]>([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);



  useEffect(() => {
    if (searchQuery.trim().length < 2) {
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/location?q=${encodeURIComponent(searchQuery)}&kind=all`);

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

  const handleSelect = (item: LocationItem) => {
    onSelect(item);
    setIsOpen(false);
    setSearchQuery("");
  };

return (
<div className="w-full lg:w-[200px] xl:w-[250px] shrink-0" ref={containerRef}>

<div
  onClick={() => setIsOpen(!isOpen)}
  className="flex items-center gap-3 px-4 py-2.5 border rounded-md border-slate-200 bg-white hover:border-slate-300 transition cursor-pointer w-full"
>
  <MapPin className="w-5 h-5 text-slate-400 shrink-0" />
  <div className="border-l border-slate-200 pl-3 min-w-0">
    <div className="text-[13px] font-semibold text-slate-800 truncate">
      {selectedLocation.name}
    </div>
    <div className="text-[12px] text-gray-500 truncate">
      {selectedLocation.subtitle}
    </div>
  </div>
</div>

  
{isOpen && (
<div className="absolute top-full left-0 mt-2 z-50 w-full sm:w-[500px] bg-white border border-slate-200 rounded-lg shadow-2xl overflow-hidden font-sans">
    
<div className="p-3 border-b border-slate-100 flex items-center gap-2 bg-gray-50/50">
  <Search className="w-4 h-4 text-slate-400 shrink-0" />
  <input
    type="text"
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
    placeholder="Type to search"
    className="w-full text-sm bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
    autoFocus
  />
</div>

  
<div className="max-h-125 overflow-y-auto p-3">
{searchQuery.trim().length >= 2 ? (
 
<div>
  {loading ? (
    <div className="py-6 text-center text-xs text-slate-400">Searching...</div>
  ) : searchResults.length > 0 ? (
    <div className="space-y-1">
      {searchResults.map((item) => (
        <div
          key={item.id}
          onClick={() => handleSelect(item)}
          className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50 cursor-pointer transition"
        >
          <div>
            <div className="text-sm font-semibold text-slate-800">{item.name}</div>
            <div className="text-xs text-slate-400">{item.subtitle}</div>
          </div>
          <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded capitalize">
            {item.type}
          </span>
        </div>
      ))}
    </div>
  ) : (
    <div className="py-6 text-center text-xs text-slate-400">No results found</div>
  )}
</div>
) : (
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
<div>
  <h4 className="text-xs font-bold text-slate-800 mb-3 px-1">Top Destination</h4>
  <div className="space-y-2">
    {TOP_DESTINATIONS.map((item) => (
      <div
        key={item.id}
        onClick={() => handleSelect(item)}
        className="flex items-center gap-2.5 p-1.5 rounded-md hover:bg-slate-50 cursor-pointer transition"
      >
        {item.image && (
          <Image
            src={item.image}
            alt={item.name}
            width={36}
            height={36}
            className="w-9 h-9 rounded-md object-cover shrink-0"
          />
        )}
        <div className="min-w-0 flex-1">
          <div className="text-xs font-bold text-slate-800 truncate flex items-center gap-1">
            {item.name}
            {item.hot && <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500 shrink-0" />}
          </div>
          <div className="text-[11px] text-slate-400 truncate">{item.subtitle}</div>
        </div>
      </div>
    ))}
  </div>
</div>

              
<div>
  <h4 className="text-xs font-bold text-slate-800 mb-3 px-1">Top Properties</h4>
  <div className="space-y-2">
    {TOP_PROPERTIES.map((item) => (
      <div
        key={item.id}
        onClick={() => handleSelect(item)}
        className="flex items-center gap-2.5 p-1.5 rounded-md hover:bg-slate-50 cursor-pointer transition"
      >
        {item.image && (
          <Image
            src={item.image}
            alt={item.name}
            width={36}
            height={36}
            className="w-9 h-9 rounded-md object-cover shrink-0"
          />
        )}
        <div className="min-w-0 flex-1">
          <div className="text-xs font-bold text-slate-800 truncate flex items-center gap-1">
            {item.name}
            {item.hot && <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500 shrink-0" />}
          </div>
          <div className="text-[11px] text-slate-400 truncate">{item.subtitle}</div>
        </div>
      </div>
    ))}
  </div>
</div>
  </div>
)}
  </div>
</div>
)}
</div>
  );
}