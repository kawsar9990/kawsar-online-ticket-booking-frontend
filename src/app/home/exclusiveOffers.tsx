'use client'


import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Offer {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

const offers: Offer[] = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209513/1789010334_Super-Deal-Saturday-home-page-Thumbnail_ayuj1p.jpg",
    title: "Every Saturday: Extra 8% OFF + FREE Delivery",
    description:
      "Enjoy an extra flat 8% discount on a minimum purchase of BDT 10,000, plus FREE Delivery & exclusive benefits.",
    link: "/promotions/Super-deal-Saturday-shopping",
  },

  {
    id: 2,
    image:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209513/1776587042_Homepage_thumbnail_ciaxae.png",
    title: "Special rate on Domestic Hotels & Resorts with bKash",
    description:
      "Enjoy amazing discounts on selected hotels and resorts. Book now and enjoy premium stays at special prices.",
    link: "/promotions/Hotel-bkash",
  },

  {
    id: 3,
    image:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209513/Student-fare-home-page-thumbnail_1_igv6bn.png",
    title: "Exclusive Air Fare Deals for International Students",
    description:
      "Discover exciting travel offers and save big on your next holiday booking with exclusive member benefits.",
    link: "/promotions/Exclusive-Student-Fare",
  },

  {
    id: 4,
    image:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209512/1777362503_Domestic_flight_KV_April_Update_2026_Home_Thumb_jvr68b.png",
    title: "Get the special rate on flight bookings",
    description:
      "Enjoy special airfare discounts on selected destinations and make your next journey more affordable.",
    link: "/promotions/Flight-Campaign",
  },

  {
    id: 5,
    image:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209513/B2C_Homepage_Thumbnail_zzw8tt.jpg",
    title: "Weekend Getaway",
    description:
      "Plan your perfect weekend getaway with exclusive hotel rates, exciting experiences and special discounts.",
    link: "/promotions/Inbound-Tour-Package",
  },

  {
    id: 6,
    image:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209512/1763272903_Meghna_bank_home_page_thumbnail_ar3rjc.png",
    title: "0% EMI for 6 Months with exclusive...",
    description:
      "0% EMI for 6 Months with exclusive discount for Meghna Bank credit cardholders.",
    link: "/promotions/Meghna-Bank-EMI-Offer",
  },

  {
    id: 7,
    image:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209512/1776230648_TripAdd-Web-home-thumb2026_ahhfyh.png",
    title: "Elevate Your Experience with Flight Add-ons",
    description:
      "Explore beautiful cities with our exclusive travel offers and enjoy comfortable stays at amazing prices.",
    link: "/promotions/Flight-AddOns",
  },

  {
    id: 8,
    image:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209512/1783917819_updated_banglalink_logo_78__hotel_resort_home_page_thumbnail_evevl6.png",
    title: "Exclusive offer on Domestic Hotels & Resorts for Banglalink Orange Club Members",
    description:
      "Experience luxury hotels and resorts with special discounts available exclusively for our members.",
    link: "/promotions/STAYORANGE",
  },

  {
    id: 9,
    image:
      "https://res.cloudinary.com/dkmzakgx2/image/upload/v1789209512/1777788082_Flight_Promotion_with_Nagad_Home_Thumb_j3ol9i.png",
    title: "Best rate on the base fare of domestic flights with Nagad",
    description:
      "Enjoy premium accommodation, excellent service and special rates for your next unforgettable trip.",
    link: "/promotions/nagad-domestic",
  },
];

export default function ExclusiveOffers(){
  
  
  
const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

return (
<section className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-5 md:px-8 lg:px-10">

<h2 className="mb-7 text-[24px] font-bold text-[#062d55] sm:text-[28px] md:text-[36px] lg:text-[40px]">
  Exclusive Offers
</h2>


<div className="exclusive-offers-slider w-full">
 <Slider {...settings}>
   {offers.map((offer) => (
     <div key={offer.id} className="px-1.5 sm:px-2">
       <a href={offer.link} className="block cursor-pointer" aria-label={offer.title}>
<div
  className="group relative aspect-[1.9/1] w-full overflow-hidden rounded-[16px] border border-blue-100 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
>
    
<img src={offer.image} alt={offer.title} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105" />


<div className="absolute inset-0 flex translate-y-full flex-col justify-start overflow-hidden bg-gradient-to-br from-[#087df5] via-[#238cf5] to-[#5aabff] px-5 py-4 text-white opacity-0 transition-all duration-500 ease-out group-hover:translate-y-0 group-hover:opacity-100 sm:px-6 sm:py-5 md:px-7 md:py-6">

<div className="pointer-events-none absolute -left-14 -top-16 h-36 w-36 rounded-full bg-white/10" />

<div className="pointer-events-none absolute -bottom-16 -right-10 h-36 w-36 rounded-full bg-white/10" />

<div className="pointer-events-none absolute right-8 top-10 h-20 w-20 rounded-full bg-white/5" />

<div className="relative z-10">
<h3 className="line-clamp-1 font-bold leading-[1.2] text-[9px] sm:text-[17px] md:text-[20px] lg:text-[22px]">
  {offer.title}
</h3>

<p className="mt-1 sm:mt-2 line-clamp-3 text-[5px] leading-[1.4] sm:text-[13px] md:mt-3 md:text-[15px] lg:text-[16px]">
  {offer.description}
</p>


<div className="mt-3 hidden sm:block text-[6px] font-bold sm:mt-4 sm:text-[14px] md:mt-5 md:text-[16px]">
  View Details →
</div>

</div>
  </div>
</div>
  </a>
</div>
  ))}
</Slider>
</div>
</section>
  );
};