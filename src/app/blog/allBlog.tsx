'use client';

import { useState } from "react";
import Image from "next/image";
import { useLoader } from "@/context/LoaderContext";
import { useRouter } from "next/navigation";

export interface BlogItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

const allBlogsData: BlogItem[] = [
  {
    id: 1,
    title: "Tea Garden Destinations in Sylhet",
    description: "Explore Sylhet’s tea gardens, lush estates, waterfalls, and eco-resorts offering scenic beauty.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788681646/Blog-Tea-Garden-Destinations-in-Sylhet-1024x572_n3ahnb.jpg",
    link: "/blog/tea-garden-destinations-in-sylhet",
  },
  {
    id: 2,
    title: "Top Hill Tract Destinations in Bangladesh",
    description: "Plan your hill tract adventure. Visit Bandarban, Rangamati, and Khagrachhari for waterfalls.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788682350/Blog-Top-Hill-Tract-Destinations-in-Bangladesh-1024x572_maid5d.png",
    link: "/blog/top-hill-tract-destinations-in-bangladesh",
  },
  {
    id: 3,
    title: "Best Monsoon Destinations in Bangladesh",
    description: "Discover Bangladesh’s monsoon magic. Explore Sajek Valley, Cox’s Bazar, and waterfalls.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788682346/Blog-Best-Monsoon-Destinations-in-Bangladesh_ogfofb.png",
    link: "/blog/best-monsoon-destinations-in-bangladesh",
  },
  {
    id: 4,
    title: "Safe Travel Tips for Women Travelers",
    description: "Stay confident on your journeys with practical safe travel tips for women travelers.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788682348/Safe-Travel-Tips-for-Women-Travelers_kujv3j.png",
    link: "/blog/safe-travel-tips-for-women-travelers",
  },
  {
    id: 5,
    title: "Best Time to Visit Sundarbans",
    description: "Discover the best time to visit Sundarbans, explore wildlife, boat tours, and seasonal tips.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788751577/Best-Time-to-Visit-Sundarbans_fjptwy.png",
    link: "/blog/best-time-to-visit-sundarbans",
  },
  {
    id: 6,
    title: "Kuakata Tour Planning Guide",
    description: "Plan your Kuakata tour with advice on beaches, sunrise and sunset points, travel tips.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788751567/Kuakata-Tour-Planning-Guide_kzxsjo.png",
    link: "/blog/kuakata-tour-planning-guide",
  },
  {
    id: 7,
    title: "15 Best Places to Visit in Bangladesh",
    description: "Explore 15 of the most beautiful places to visit in Bangladesh. Beaches, hills, historical sites.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788751568/Blog-img-2-15-Best-Places_mqdcyd.png",
    link: "/blog/15-best-places-to-visit-in-bangladesh",
  },
  {
    id: 8,
    title: "Best Time to Visit Sajek Valley Guide",
    description: "Plan your Sajek Valley trip with this seasonal guide. Learn the best times to visit for clear skies.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788751568/Blog-img-4-Visit-Sajek-Valley_pegdwt.png",
    link: "/blog/best-time-to-visit-sajek-valley-a-complete-seasonal-guide",
  },
  {
    id: 9,
    title: "10 Best Beaches in Cox's Bazar",
    description: "Explore the 10 most stunning beaches in Cox's Bazar including Laboni, Inani, and Saint Martin.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788752243/Blog-img-1-10-Best-Beaches-in-Coxs-Bazar_sbiago.png",
    link: "/blog/10-best-beaches-in-coxs-bazar-for-your-next-trip",
  },
  {
    id: 10,
    title: "Top 10 Things to Do in Cox's Bazar",
    description: "Discover the best experiences in Cox's Bazar, from relaxing on the world's longest sea beach.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788752245/Blog-img-3-Top-10-Things-to-Do-in-Coxs-Bazar_cphnly.png",
    link: "/blog/top-10-things-to-do-in-coxs-bazar",
  },
  {
    id: 11,
    title: "Food and Drink Tips for Long Bus Journeys",
    description: "Learn what to eat and drink during long bus journeys in Bangladesh. Discover healthy snacks.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788752242/Blog-Image-1_uzlh9l.png",
    link: "/blog/food-drink-tips-for-long-bus-journeys",
  },
  {
    id: 12,
    title: "A First-Time Bus Traveler's Guide",
    description: "Traveling by bus for the first time in Bangladesh? Learn how to book tickets, choose seats.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788752245/Blog-Image-2_knsifq.png",
    link: "/blog/a-first-time-bus-travelers-guide-in-bangladesh",
  },
  {
    id: 13,
    title: "Top Things to Do in Sajek Valley",
    description: "Discover the best activities and attractions in Sajek Valley, from trekking to experiencing local culture.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788752587/Sajek_dpidna.png",
    link: "/blog/top-things-to-do-in-sajek-valley",
  },
  {
    id: 15,
    title: "Digital Transformation of Bus Travel",
    description: "Explore how technology is changing the way people travel by bus in Bangladesh.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788752586/Digital-Transformation_kmgqe0.png",
    link: "/blog/digital-transformation-of-bus-travel",
  },
  {
    id: 16,
    title: "Why Travelers Choose gokawsars",
    description: "Discover the reasons why travelers prefer using gokawsars for their bus travel needs.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788752584/Why-bdtickets_igeohd.png",
    link: "/blog/why-travelers-choose-gokawsar",
  },
  {
    id: 17,
    title: "How to Choose the Right Bus Seat",
    description: "Learn how to select the best bus seat for your comfort and travel experience.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788753111/Bus-Seat_xhovn7.png",
    link: "/blog/how-to-choose-the-right-bus-seat",
  },
  {
    id: 18,
    title: "How to Plan a Budget Trip in Bangladesh",
    description: "Discover tips and strategies for planning an affordable and enjoyable trip to Bangladesh.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788753117/Budget-Trip-Feature-Image_firhf4.png",
    link: "/blog/how-to-plan-a-budget-trip-in-bangladesh",
  },
  {
    id: 20,
    title: "Top Cultural and Heritage Destinations by Bus in Bangladesh",
    description: "Discover the fascinating cultural heritage of Bangladesh and the unique experiences it offers.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788753105/Culture-Heritage.jpg_aue06i.jpg",
    link: "/blog/top-cultural-heritage-destinations-by-bus-in-bangladesh",
  },
  {
    id: 21,
    title: "Top Bus Routes in Bangladesh: The Complete Guide for Travelers",
    description: "Your ultimate guide to the best bus routes in Bangladesh for a seamless travel experience.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788753440/Feature-image-1_ddjt3k.png",
    link: "/blog/top-bus-routes-in-bangladesh-the-complete-guide-for-travelers",
  },
  {
    id: 23,
    title: "Scenic Bus Routes Worth Experiencing in Bangladesh",
    description: "Discover the most picturesque bus routes in Bangladesh for an unforgettable travel experience.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788753445/Scenic-Bus-Routes-Feature-image-2_abfcw9.png",
    link: "/blog/scenic-bus-routes-worth-experiencing-in-bangladesh",
  },
  {
    id: 24,
    title: "Seasonal Travel Guide: Best Times to Visit Popular Destinations in",
    description: "Plan your trip to Bangladesh with our seasonal travel guide, highlighting the best times to visit popular destinations.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788753448/Seasonal-Travel-Guide-Feature-image-1-Static_psxs3f.png",
    link: "/blog/seasonal-travel-guide-best-times-to-visit-popular-destinations-in-bangladesh",
  },
  {
    id: 25,
    title: "Last-Minute Guide to Booking Bus Tickets for Eid Travel in Bangladesh",
    description: "Plan your Eid travel in Bangladesh with our last-minute guide to booking bus tickets.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788753688/Feature-image_pxc1ht.png",
    link: "/blog/last-minute-guide-booking-bus-tickets-eid-travel-bangladesh",
  },
  {
    id: 26,
    title: "How to Travel Comfortably During Ramadan While Fasting",
    description: "Learn why booking your bus tickets online can save you time and stress.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788753687/Blog-img-2_tlor4y.png",
    link: "/blog/how-to-travel-comfortably-during-ramadan-while-fasting",
  },
  {
    id: 36,
    title: "Avoid Last-Minute Rush: Why You Should Book Bus Tickets Online During Ramadan",
    description: "Discover tips for traveling during Ramadan while maintaining your fasting routine.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788753685/Blog-img-3_vzkm4k.png",
    link: "/blog/avoid-last-minute-rush-why-you-should-book-bus-tickets-online-during-ramadan",
  },
  {
    id: 27,
    title: "Best Time to Travel During Ramadan: A Complete Guide",
    description: "Plan your trip to Bangladesh during Ramadan with our complete guide to the best times to visit.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788753685/Blog-img-1_wmlxqz.png",
    link: "/blog/best-time-to-travel-during-ramadan-a-complete-guide",
  },
  {
    id: 28,
    title: "Top 10 Dhaka Weekend Bus Routes Under 2 Hours",
    description: "Discover the best weekend bus routes in Dhaka that take less than 2 hours, perfect for quick getaways.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788760623/top-destination_viqych.png",
    link: "/blog/top-10-dhaka-weekend-destinations-under-2",
  },
  {
    id: 30,
    title: "Sylhet to Cox’s Bazar by Bus: From Tea Gardens to the Coastline",
    description: "Explore the scenic journey from Sylhet to Cox’s Bazar by bus, experiencing the beauty of tea gardens and the coastline.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788760620/saintmartin-paribahan-1_n4eyog.jpg",
    link: "/blog/sylhet-to-coxs-bazar-by-bus-from-tea-gardens-to-the-coastline",
  },
  {
    id: 31,
    title: "The Complete Guide to Safe and Stress-Free Bus Travel in Bangladesh",
    description: "Learn how to travel safely and comfortably by bus in Bangladesh with our comprehensive guide.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788760622/Greenline-Bus-in-the-Road-2_khpsez.png",
    link: "/blog/safe-stress-free-bus-travel-bangladesh",
  },
  {
    id: 32,
    title: "Dhaka to Cox’s Bazar by Bus: Operators, Classes, and Fares",
    description: "Get all the information you need about traveling from Dhaka to Cox’s Bazar by bus, including operator details, class options, and fare information.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788760935/dhaka-coxs-bazar_cz780v.jpg",
    link: "/blog/dhaka-to-coxs-bazar-by-bus-operators-classes-and-fares",
  },
  {
    id: 33,
    title: "Dhaka to Chittagong Bus Guide: Night vs Day Coach, Sleeper, AC/Non-AC",
    description: "Compare the different bus options for traveling from Dhaka to Chittagong, including night and day coaches, sleeper buses, and AC/non-AC facilities.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788760935/dhaka-chittagong_f0pmvq.jpg",
    link: "/blog/dhaka-to-chittagong-bus-guide-night-vs-day-coach-sleeper-ac-non-ac",
  },
  {
    id: 34,
    title: "Dhaka To Bandarban By Bus: Hill Track Tour Guide",
    description: "Explore the scenic route from Dhaka to Bandarban by bus, discovering the natural beauty and cultural sites along the way.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788760935/dhaka-to-bandarban-2_grakdn.jpg",
    link: "/blog/dhaka-to-bandarban-by-bus-hill-track-tour-guide",
  },
  {
    id: 35,
    title: "gokawsars: Bus Ticket Refunds &amp; Cancellations | What You Should Know",
    description: "Learn about the refund and cancellation policies for bus tickets purchased through gokawsars.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788761501/Gemini_Generated_Image_xfpcc7xfpcc7xfpc_y3gqyu.jpg",
    link: "/blog/gokawsars-bus-ticket-refunds-cancellations-what-you-should-know",
  },
  {
    id: 37,
    title: "How to Book Launch/Ship Tickets In Bangladesh",
    description: "A comprehensive guide on how to book launch and ship tickets in Bangladesh for seamless travel experiences.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788761695/Gemini_Generated_Image_egmdgtegmdgtegmd_osbtgh.jpg",
    link: "/blog/book-launch-ship-tickets-in-bangladesh",
  },
    {
    id: 38,
    title: "How To Save Maximum Cost on Cox’s Bazar Tour From Dhaka",
    description: "Discover tips and tricks to minimize your expenses while exploring Cox’s Bazar from Dhaka.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788761814/Gemini_Generated_Image_wo18zwo18zwo18zw_qlublo.jpg",
    link: "/blog/how-to-save-maximum-cost-on-coxs-bazar-tour-from-dhaka",
  },
    {
    id: 39,
    title: "How to Book Cox’s Bazar to Saint Martin Ship Ticket Online",
    description: "Learn how to book ship tickets from Cox’s Bazar to Saint Martin online for a hassle-free travel experience.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788762121/Gemini_Generated_Image_tz2mu6tz2mu6tz2m_rwtalr.jpg",
    link: "/blog/how-to-book-coxs-bazar-to-saint-martin-ship-ticket-online",
  },
    {
    id: 40,
    title: "How To Save Maximum Cost on Sajek Tour From Dhaka",
    description: "Discover tips and tricks to minimize your expenses while exploring Sajek from Dhaka.",
    image: "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788762024/Gemini_Generated_Image_3svu893svu893svu_h8knhm.jpg",
    link: "/blog/how-to-save-maximum-cost-on-sajek-tour-from-dhaka",
  }
];


export default function AllBlog(){
const [visibleCount, setVisibleCount] = useState<number>(8);
const [loading, setLoading] = useState<boolean>(false);
const {showLoader, hideLoader} = useLoader();
const router = useRouter();


 const handleLoadMore = () => {
  setLoading(true);
  setTimeout(() => {
    setVisibleCount((prev) => prev + 8);
    setLoading(false);
  }, 800); 
};

const handleCardClick = (link: string) => {
    showLoader();
    router.push(link);
    hideLoader();
};

return(
<div className="max-w-7xl mx-auto py-2 md:px-4 md:py-8" style={{userSelect: 'none'}}>
<h2 className="text-2xl font-bold text-red-600 mb-6">All Blogs</h2>

<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5">
{allBlogsData.slice(0, visibleCount).map((item: BlogItem) => (
<div
  key={item.id}
  onClick={() => handleCardClick(item.link)}
  className="group block border cursor-pointer border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">

<div>
<div className="relative w-full aspect-[16/10] overflow-hidden">
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-300"
  />
</div>

  
<div className="p-2 sm:p-3">
    <h3 className="font-bold text-gray-900 text-[10px] sm:text-sm line-clamp-2 leading-snug group-hover:text-red-600 transition-colors">
      {item.title}
    </h3>
  <p className="text-gray-500 text-[8px] sm:text-xs line-clamp-2 mt-1 leading-tight">
    {item.description}
  </p>
</div>
    </div>
  </div>
))}
</div>


{visibleCount < allBlogsData.length && (
  <div className="flex flex-col items-center justify-center mt-10">
    {loading ? (
      <div className="flex items-center gap-2 text-red-600 font-semibold text-sm">
        <div className="w-5 h-5 border-2 border-red-600 border-t-transparent rounded-full animate-spin"></div>
        <span>Loading more blogs...</span>
      </div>
    ) : (
      <button
        onClick={handleLoadMore}
        className="bg-red-600 cursor-pointer hover:bg-red-700 text-white font-semibold text-sm px-8 py-3 rounded-xl transition-all duration-200 shadow-sm hover:shadow"
      >
        See more
      </button>
    )}
  </div>
)}
</div>
)
}