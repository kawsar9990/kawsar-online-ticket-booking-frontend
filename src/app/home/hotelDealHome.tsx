"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import HotelSkeleton from "@/components/ui/skeleton/HotelDealSkeleton";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { fetchFeaturedHotelDeals, HotelDeal } from "@/services/hoteldealhome";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function HomePage() {
const [hotels, setHotels] = useState<HotelDeal[]>([]);
const [loading, setLoading] = useState<boolean>(true);

useEffect(() => {
  const loadHotels = async () => {
    try {
      const hotelData = await fetchFeaturedHotelDeals();
      setHotels(hotelData);
    } catch (error) {
      console.error("Error fetching hotel deals:", error);
      setHotels([]);
    } finally {
      setLoading(false);
    }
  };
  loadHotels();
}, []);

 
  const generateHotelLink = (hotel: HotelDeal) => {
    const checkIn = new Date();
    checkIn.setDate(checkIn.getDate() + 1); 
    const checkOut = new Date(checkIn);
    checkOut.setDate(checkOut.getDate() + 1);

    const checkInDate = checkIn.toISOString().split("T")[0];
    const checkOutDate = checkOut.toISOString().split("T")[0];
    const defaultGuests = JSON.stringify([{ adults: 4, children: [] }]);

    return `/hotel-deal/${hotel.slug}/${hotel.id}?request-origin=home_page&nationality=BD&checkInDate=${checkInDate}&checkOutDate=${checkOutDate}&numberOfGuestsInRooms=${encodeURIComponent(
    defaultGuests
    )}&name=${encodeURIComponent(hotel.name)}&starRating=${hotel.starRating}`;
  };

return (
<div className="w-full max-w-[1400px] pt-10 md:pt-15 mx-auto px-4 sm:px-6 lg:px-8 py-10">

<h2 className="text-2xl font-bold text-gray-900 mb-1">
  Best Hotels for Your Next Trip
</h2>
<p className="text-gray-500 mb-6 text-sm">
  Luxurious or budget-friendly hotels, villas or resorts, browse accommodations that meet the need.
</p>

   
{loading ? (
  <div>
    <HotelSkeleton />
  </div>
) : (
<div className="relative w-full">
<Swiper
  modules={[Pagination, Navigation, Autoplay]}
  spaceBetween={20}
  slidesPerView={1}
  slidesPerGroup={1}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  }}
  pagination={{
    el: ".hotel-slider-pagination",
    clickable: true,
  }}
  breakpoints={{
    0: { slidesPerView: 1.2, spaceBetween: 12},
    480: { slidesPerView: 1.4, spaceBetween: 16},
    640: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1024: { slidesPerView: 4 },
  }}
>     {hotels && hotels.length > 0 ? (
 hotels.map((hotel) => (
   <SwiperSlide key={hotel.id || hotel.slug}>
     <Link
       href={generateHotelLink(hotel)} target="_blank"
       className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100 group"
     >
       <div className="h-52 overflow-hidden">
    <img
      src={hotel.thumbnailUrl}
      alt={hotel.name}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
    />
  </div>
  <div className="p-4">
    <h3 className="font-semibold text-gray-800 text-base truncate group-hover:text-blue-600 transition-colors">
      {hotel.name}
    </h3>
    <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
      <span className="text-orange-500 font-bold">★ {hotel.starRating}</span>
      <span>({hotel.totalReviews} reviews)</span>
    </div>
  </div>
</Link>
</SwiperSlide>
))
  
) : (
<div className="py-8 text-center text-gray-400">
  No featured hotels found.
</div>
)}
</Swiper>

         
<div className="hotel-slider-pagination flex justify-center items-center gap-1 mt-6"></div>
</div>
)}
</div>
  );
}