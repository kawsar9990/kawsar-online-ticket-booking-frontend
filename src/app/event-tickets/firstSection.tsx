"use client";

import Image from "next/image"; 
import EventSearchBar from "./searchbox"; 

export default function HeroBanner() {
  return (
    <div className="relative w-full bg-white pb-16 sm:pb-20">
      

      <div className="relative w-full h-[220px] sm:h-[280px] md:h-[340px] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1790677614/Corporate-Event-Management-TOP-1-Event-Management-BD-Event-Management-Bangladesh-Event-Management-Dhaka-TOP-1-Event-Grey-BD-Dot-TOP-all-Event-Support-BD-Event-2_xsvfot.jpg"
          alt="Event Banner"
          fill
          priority
          className="object-cover object-center"
        />


        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-4 sm:px-6 -mt-16 sm:-mt-20">
        <EventSearchBar />
      </div>

    </div>
  );
}