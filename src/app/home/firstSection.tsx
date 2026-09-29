
'use client';

import SearchTabs from '@/components/HeroSearch/SearchTabs';

export default function FirstSection() {
  return (
    <section className="relative z-30 w-full">

      <div className="relative h-[380px] w-full overflow-hidden sm:h-[460px] lg:h-[520px]">
        <video
          autoPlay
          muted
          loop={true}
          playsInline
          preload="auto"
          poster="/assets/home.webp"
          className="absolute inset-0 h-full w-full object-cover object-center"
        >
          <source src="/video/ks.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-40 -mt-[230px] pb-14 sm:-mt-[250px] sm:pb-16 lg:-mt-[260px]">
        <SearchTabs />
      </div>
    </section>
  );
}