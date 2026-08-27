'use client'

import Image from "next/image";

export default function FirstSection() {
  return (
    <div className="w-full h-50 md:h-150 lg:h-screen relative overflow-hidden">
      <Image 
        src="/assets/home.webp"
        alt="kawsarhome"
        fill
        className="object-cover h-40 object-top lg:object-cover"
      />
    </div>
  );
}
