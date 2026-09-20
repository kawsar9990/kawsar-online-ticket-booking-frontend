'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';

interface BannerSlide {
  id: string | number;
  link: string;
  image: string;
  alt?: string;
}

interface BannerAdProps {
  slides?: BannerSlide[];
}

export default function BannerAd({ slides = [] }: BannerAdProps) {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      style={{
        width: '100%',
        maxWidth: '1200px',
        aspectRatio: '16 / 5', 
        borderRadius: '12px', 
        overflow: 'hidden', 
      }}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Link href={slide.link} rel="noreferrer" style={{ display: 'block', width: '100%', height: '100%' }}>
            <img
              src={slide.image}
              alt={slide.alt || 'ad-banner'}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', 
                objectPosition: 'center',
              }}
            />
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}