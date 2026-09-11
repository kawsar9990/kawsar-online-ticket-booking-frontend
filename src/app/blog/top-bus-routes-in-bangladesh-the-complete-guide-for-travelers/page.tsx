import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Top Bus Routes in Bangladesh: The Complete Guide for Travelers | gokawsar",
  description:
    "Explore the top bus routes in Bangladesh connecting Dhaka to Cox's Bazar, Chittagong, Sylhet, Bandarban, Kuakata, Rajshahi, and Mymensingh.",
  openGraph: {
    title: "Top Bus Routes in Bangladesh: The Complete Guide for Travelers",
    description: "Comprehensive guide for road travelers covering major routes, bus types, travel times, and highlights.",
    type: "article",
    publishedTime: "2026-09-10T00:00:00.000Z",
  },
};


export default function TopBusRoutesBlog() {
  return (
    <article className="max-w-5xl mx-auto px-4 lg:pt-20 md:px-8 py-10 text-gray-800 font-sans leading-relaxed">
      

      <div className="relative w-full aspect-[21/9] mb-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        <Image
          src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1788753440/Feature-image-1_ddjt3k.png"
          alt="Top Bus Routes in Bangladesh"
          fill
          priority
          className="object-cover"
        />
      </div>


     <div className="mb-8 border-b border-gray-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
          Comprehensive Travel Guide
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-4 leading-tight">
          Top Bus Routes in Bangladesh: The Complete Guide for Travelers
        </h1>

          <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center font-bold text-gray-600">
            <img
              src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1788782828/8d9b30f492fcd1d04890e6abebb75e9946019df0bb25c2aa6b464e2856675025_yduer1.jpg"
              alt="Kawsar Ahmed"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-xs md:text-sm text-left">
            <p className="font-bold text-gray-900">Kawsar Ahmed</p>
            <p className="text-gray-500">September 10, 2026 </p>
          </div>
        </div>
      </div>


      <section className="space-y-4 text-base md:text-lg text-gray-700 mb-12">
        <p>
          Bangladesh is a country of vibrant cities, lush greens, and historic places—all interconnected with an extensive network of buses. Long-distance buses are the heartbeat of internal travel in Bangladesh, carrying millions of passengers every day.
        </p>
        <p>
          For travelers, bus journeys are not just practical; they are part of the adventure—offering views of scenic rivers, rural life, and coastlines. Below is the ultimate travel guide covering major highways, travel durations, key attractions, and essential tips for smooth journeys across Bangladesh.
        </p>
      </section>


      <div className="space-y-12 mb-16">

   
        <section className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 border-b border-gray-100 pb-3">
            1. Dhaka to Coxs Bazar: Gateway to the Sea
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Coxs Bazar is the ultimate beach destination in Bangladesh, home to the worlds longest natural sand beach.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl text-xs md:text-sm">
            <p><strong>Travel Time:</strong> 10 – 12 hours</p>
            <p><strong>Bus Types:</strong> Non-AC, AC, Sleeper Coaches</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-gray-900 text-sm">Top Highlights:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-gray-600">
              <li><strong>Laboni Point:</strong> The most iconic beach area for sunset views and local seafood.</li>
              <li><strong>Himchari National Park:</strong> Famous for lush green hills overlooking the Bay of Bengal.</li>
              <li><strong>Inani Beach:</strong> Known for golden sand and unique coral rock formations.</li>
            </ul>
          </div>
        </section>


        <section className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 border-b border-gray-100 pb-3">
            2. Dhaka to Chittagong: The Commercial Hub
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Chittagong, Bangladeshs main port city, is a busy center for both business travelers and tourists headed to the Hill Tracts.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl text-xs md:text-sm">
            <p><strong>Travel Time:</strong> 6 – 8 hours</p>
            <p><strong>Bus Types:</strong> AC, Non-AC, Executive Business Class</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-gray-900 text-sm">Top Highlights:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-gray-600">
              <li><strong>Patenga Beach:</strong> Popular spot for locals and tourists enjoying sea breezes.</li>
              <li><strong>Foys Lake:</strong> Amusement park and natural lake surrounded by scenic hills.</li>
              <li><strong>Ethnological Museum:</strong> Showcases the rich cultural history of ethnic communities.</li>
            </ul>
          </div>
        </section>


        <section className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 border-b border-gray-100 pb-3">
            3. Dhaka to Sylhet: Tea Gardens & Natural Beauty
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Sylhet is famous worldwide for its endless tea estates, fresh rivers, and serene rain-forest landscapes.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl text-xs md:text-sm">
            <p><strong>Travel Time:</strong> 5 – 6 hours</p>
            <p><strong>Bus Types:</strong> AC, Non-AC Coaches</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-gray-900 text-sm">Top Highlights:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-gray-600">
              <li><strong>Tea Gardens:</strong> Endless green rolling hills around Malnicherra estate.</li>
              <li><strong>Ratargul Swamp Forest:</strong> Freshwater swamp forest ideal for monsoon boat rides.</li>
              <li><strong>Jaflong:</strong> Picturesque stone collections along the Khasi hill rivers.</li>
            </ul>
          </div>
        </section>


        <section className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 border-b border-gray-100 pb-3">
            4. Dhaka to Bandarban: Hill Track Adventure
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Bandarban is a paradise for outdoor adventure seekers, offering mountain trekking, tribal villages, and waterfalls.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl text-xs md:text-sm">
            <p><strong>Travel Time:</strong> 7 – 8 hours</p>
            <p><strong>Bus Types:</strong> AC, Non-AC Night Coaches</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-gray-900 text-sm">Top Highlights:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-gray-600">
              <li><strong>Nilgiri Hills:</strong> Breathtaking cloud views at high altitude resorts.</li>
              <li><strong>Boga Lake:</strong> A mysterious natural lake surrounded by mountains for trekkers.</li>
              <li><strong>Nafakhum Waterfall:</strong> One of the largest waterfalls in the hill tracts.</li>
            </ul>
          </div>
        </section>

  
        <section className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 border-b border-gray-100 pb-3">
            5. Dhaka to Kuakata: Sagor Konya – Daughter of the Sea
          </h2>
          <p className="text-sm md:text-base text-gray-600">
            Kuakata is uniquely famous for offering unobstructed panoramic views of both sunrise and sunset over the sea.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gray-50 p-4 rounded-xl text-xs md:text-sm">
            <p><strong>Travel Time:</strong> 10 – 12 hours (via Padma Bridge)</p>
            <p><strong>Bus Types:</strong> AC, Non-AC Coaches</p>
          </div>
          <div className="space-y-2">
            <p className="font-bold text-gray-900 text-sm">Top Highlights:</p>
            <ul className="list-disc pl-5 space-y-1 text-xs md:text-sm text-gray-600">
              <li><strong>Sunrise & Sunset:</strong> Watch both from the same sandy beach line.</li>
              <li><strong>Rakhain Village:</strong> Experience traditional tribal culture and ancient Buddhist temples.</li>
            </ul>
          </div>
        </section>


        <section className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-4">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 border-b border-gray-100 pb-3">
            6. Dhaka to Rajshahi & Mymensingh
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm text-gray-600">
            <div className="space-y-2">
              <strong className="text-gray-900 text-base block">Dhaka to Rajshahi (Silk City):</strong>
              <p>Known for the Padma River sunset views, mango orchards, Varendra Museum, and Puthia Rajbari temples.</p>
            </div>
            <div className="space-y-2">
              <strong className="text-gray-900 text-base block">Dhaka to Mymensingh:</strong>
              <p>Short 3-4 hour trip perfect for weekend gateways, visiting Zainul Abedin Museum and Brahmaputra riverfront.</p>
            </div>
          </div>
        </section>

      </div>


      <section className="bg-red-50/50 p-6 md:p-8 rounded-2xl border border-red-100 mb-12 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-red-200 pb-2">
          Seasonal Travel Insights
        </h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-gray-700">
          <li className="bg-white p-3 rounded-lg shadow-sm">
            <strong>Winter (Nov – Feb):</strong> Best for mountain trekking in Bandarban, Sajek, and hill trips in Sylhet.
          </li>
          <li className="bg-white p-3 rounded-lg shadow-sm">
            <strong>Summer (Mar – May):</strong> Ideal for beach trips to Coxs Bazar and Kuakata for coastal winds.
          </li>
          <li className="bg-white p-3 rounded-lg shadow-sm">
            <strong>Monsoon (Jun – Sep):</strong> Perfect for visiting waterfalls and lush green swamp forests in Sylhet.
          </li>
          <li className="bg-white p-3 rounded-lg shadow-sm">
            <strong>Festive Seasons (Eid):</strong> High demand period; plan and reserve bus journeys well in advance.
          </li>
        </ul>
      </section>


      <section className="space-y-4 mb-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b pb-2">
          Travel Tips for Bus Journeys
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs md:text-sm">
          <div className="border border-gray-200 p-4 rounded-xl bg-gray-50">
            <strong className="text-gray-900 block mb-1">Book Seats Early</strong>
            <p className="text-gray-600">Reserve tickets 2-3 days prior to secure your preferred seats, especially for overnight journeys.</p>
          </div>
          <div className="border border-gray-200 p-4 rounded-xl bg-gray-50">
            <strong className="text-gray-900 block mb-1">Travel Light & Safe</strong>
            <p className="text-gray-600">Keep essential medication, power banks, and valuables in your hand luggage onboard.</p>
          </div>
          <div className="border border-gray-200 p-4 rounded-xl bg-gray-50">
            <strong className="text-gray-900 block mb-1">Check Pick-up Point</strong>
            <p className="text-gray-600">Verify counter locations and reach the terminal at least 20 minutes before departure.</p>
          </div>
        </div>
      </section>

    
      <section className="bg-gray-900 text-white p-6 md:p-8 rounded-2xl mb-12 space-y-3">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          Conclusion
        </h2>
        <p className="text-xs md:text-sm text-gray-300 leading-relaxed">
          Bangladesh offers endless destinations, and buses remain the most accessible way to explore them all. From the sunny beaches of Coxs Bazar to the misty hills of Bandarban, every route tells a unique story. Plan smart, choose the right route, and enjoy a safe and comfortable journey across Bangladesh!
        </p>
      </section>

  
      <div className="pt-6 border-t border-gray-200 flex justify-between items-center text-xs md:text-sm font-bold text-red-600">
        <Link href="/blog" className="hover:underline">
          ‹ Back to all blogs
        </Link>
      </div>

    </article>
  );
}