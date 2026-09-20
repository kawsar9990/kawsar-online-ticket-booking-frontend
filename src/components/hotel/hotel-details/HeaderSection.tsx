"use client";

import { useState } from "react";
import FsLightbox from 'fslightbox-react'
import Link from "next/link";
import { MapPinned, MapPin } from "lucide-react";

interface HotelHeaderGalleryProps {
  hotelName: string;
  starRating?: number;
  address: string;
  distanceText?: string;
  maplink?: string;
  startingPrice: number;
  galleryImages: string[];
  description?: string;
  mapEmbedUrl?: string;
}

export default function HotelHeaderGallery({
  hotelName,
  starRating = 5,
  address,
  distanceText,
  maplink,
  description,
  mapEmbedUrl,
  startingPrice,
  galleryImages = [],
}: HotelHeaderGalleryProps) {
  
const [toggler, setToggler] = useState(false);
const [slideIndex, setSlideIndex] = useState(1);
const [isExpanded, setIsExpanded] = useState(false);


const openLightboxOnSlide = (index: number) => {
  setSlideIndex(index + 1);
  setToggler(!toggler);
};

const imagesToShow = galleryImages.slice(0, 5);

  
return (
<div className="w-full max-w-[1280px] mx-auto px-4 py-4 font-sans text-gray-800">

<div className="flex items-center justify-between text-xs sm:text-sm text-gray-500 mb-4">
  <div className="flex items-center gap-1 overflow-x-auto whitespace-nowrap">
    <span>Hotels</span>
    <span>&gt;</span>
    <span>Bangladesh</span>
    <span>&gt;</span>
    <span className="text-gray-900 capitalize font-medium">{hotelName}</span>
  </div>
  <Link href={`/`} className="text-blue-600 hover:underline font-semibold hidden sm:block">
    See all Properties
  </Link>
</div>

     
<div className="relative rounded-2xl overflow-hidden mb-6">
<div className="hidden md:grid grid-cols-4 gap-2 h-[420px]">
<div
  className="col-span-2 h-full cursor-pointer overflow-hidden group relative"
  onClick={() => openLightboxOnSlide(0)}
>
  <img
    src={imagesToShow[0] || "/placeholder.jpg"}
    alt={hotelName}
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
  />
</div>

       
<div className="col-span-2 grid grid-cols-2 gap-2 h-full">
{imagesToShow.slice(1, 5).map((imgUrl, idx) => {
const actualIndex = idx + 1;
const isLastImage = actualIndex === 4;
return (
<div
  key={idx}
  className="relative h-[206px] cursor-pointer overflow-hidden group"
  onClick={() => openLightboxOnSlide(actualIndex)}
>
  <img
    src={imgUrl}
    alt={`${hotelName} ${actualIndex}`}
     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
   />

  {isLastImage && galleryImages.length > 5 && (
    <div className="absolute inset-0 bg-black/40 flex items-end justify-end p-3">
      <span className="bg-white text-gray-900 text-xs font-bold px-3 py-1.5 rounded-lg shadow">
        Show all {galleryImages.length} photos
      </span>
    </div>
  )}
</div>
);
})}
</div>
</div>

      
<div className="block md:hidden">
<div
  className="w-full h-64 rounded-xl overflow-hidden cursor-pointer mb-2 relative"
  onClick={() => openLightboxOnSlide(0)}
>
  <img
    src={imagesToShow[0] || "/placeholder.jpg"}
    alt={hotelName}
    className="w-full h-full object-cover"
  />
  <span className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2.5 py-1 rounded-md">
    1 / {galleryImages.length}
  </span>
</div>

  <div className="grid grid-cols-3 gap-2 h-24">
    {imagesToShow.slice(1, 4).map((imgUrl, idx) => (
      <div
        key={idx}
        className="h-full rounded-lg overflow-hidden cursor-pointer"
        onClick={() => openLightboxOnSlide(idx + 1)}
      >
        <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
      </div>
    ))}
  </div>
</div>
</div>

   
<div className="flex flex-col md:flex-row justify-between items-start gap-4">
<div>
      
<div className="flex items-center gap-2 flex-wrap">
  <h1 className="text-[18px] sm:text-3xl capitalize font-bold text-gray-900 line-clamp-1 tracking-tight">{hotelName}</h1>
  <div className="flex text-amber-400 text-[13px] sm:text-lg">
    {Array.from({ length: starRating }).map((_, i) => (
      <span key={i}>★</span>
    ))}
  </div>
</div>

    
  <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-gray-600 flex-wrap">
    {distanceText && (
      <>
        <span className="text-[10px] flex flex-row items-center gap-2"><MapPinned size={15}/> {distanceText}</span>
        <span className="text-[10px] flex flex-row items-center gap-2"><MapPin size={15}/> {address}</span>
      </>
    )}
    {maplink && (
      <a
        href={maplink}
        target="_blank"
        rel="noreferrer"
        className="text-blue-600 font-semibold text-[11px] sm:block hidden hover:underline ml-1"
      >
        Show on Map
      </a>
    )}
  </div>
</div>

      
  <div className="hidden md:block text-right">
    <span className="text-xs text-gray-500 block">Starts From</span>
    <div className="text-[20px] font-bold text-blue-600">
      ৳ {startingPrice?.toLocaleString()}
    </div>
    <span className="text-xs text-gray-500 block">per night/room</span>
  </div>
</div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
  
<div className="md:col-span-2">
<h2 className="text-lg font-bold text-gray-900 mb-2">Description</h2>
<div className="text-sm text-gray-600 leading-relaxed">
{isExpanded || (description?.length ?? 0) <= 250 ? (
  <p>
    {description}{" "}
    {(description?.length ?? 0) > 250 && (
      <button
        onClick={() => setIsExpanded(false)}
        className="text-blue-600 font-semibold hover:underline ml-1 cursor-pointer"
      >
        Read Less
      </button>
    )}
  </p>
) : (
  <p>
    {description?.slice(0, 250)}...{" "}
    <button
      onClick={() => setIsExpanded(true)}
      className="text-blue-600 font-semibold hover:underline ml-1 cursor-pointer"
    >
      Read More
    </button>
  </p>
  )}
</div>
</div>

  
  <div className="md:col-span-1 hidden sm:block">
  <div className="relative rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-shadow h-36 group">
    {maplink ? (
      <a href={maplink}
        target="_blank"
        rel="noreferrer">
        <iframe
        title="Hotel Location Map"
        src={mapEmbedUrl}
        className="w-full h-full border-0 pointer-events-none"
        loading="lazy"
        allowFullScreen
      />
      </a>
    ) : (
      <div className="w-full h-full bg-gray-100 flex items-center justify-center text-xs text-gray-500">
        Map details not available
      </div>
    )}
  </div>
</div>
      </div>


      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50 bg-[#2d3748] text-white rounded-full px-5 py-3 shadow-2xl flex items-center justify-between">
        <div>
          <span className="text-[10px] text-gray-300 block leading-none">Starts from</span>
          <div className="text-[15px] flex flex-row items-center gap-2 font-bold">
            ৳ {startingPrice?.toLocaleString()} <span className="text-[10px] font-normal text-gray-300"> night per room</span>
          </div>
        </div>

        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-[10px] px-5 py-2.5 rounded-full transition-colors shadow-md"
        >
          See All Rooms
        </button>
      </div>

    
      <FsLightbox
        toggler={toggler}
        sources={galleryImages}
        slide={slideIndex}
      />
    </div>
  );
}