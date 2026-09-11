import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "15 Best Places to Visit in Bangladesh | gokawsar",
  description:
    "Discover the top 15 tourist attractions in Bangladesh. From Cox's Bazar beach and Sundarbans to Sajek Valley and Sylhet tea gardens, plan your trip with our detailed guide.",
  openGraph: {
    title: "15 Best Places to Visit in Bangladesh | gokawsar",
    description:
      "Explore the ultimate travel destinations across Bangladesh. Detailed itinerary, best time to visit, and travel tips by Kawsar Ahmed.",
    type: "article",
    publishedTime: "2026-09-10T00:00:00.000Z",
    authors: ["Kawsar Ahmed"],
  },
};

const quickGuideData = [
  { destination: "Cox's Bazar", bestFor: "World's longest sea beach & beach relaxation", suggestedStay: "3-4 Days" },
  { destination: "The Sundarbans", bestFor: "Wildlife, mangrove forest & river cruising", suggestedStay: "3-4 Days" },
  { destination: "Sajek Valley", bestFor: "Cloudscapes and hill station views", suggestedStay: "2-3 Days" },
  { destination: "Bandarban", bestFor: "Waterfalls, mountain trekking & hill culture", suggestedStay: "3-4 Days" },
  { destination: "Sylhet", bestFor: "Tea gardens, swamp forests & river views", suggestedStay: "3-4 Days" },
  { destination: "Sreemangal", bestFor: "Tea estates, rainforests & nature walks", suggestedStay: "2-3 Days" },
  { destination: "Kuakata", bestFor: "Sunrise and sunset over the sea", suggestedStay: "2-3 Days" },
  { destination: "Saint Martin's Island", bestFor: "Coral island vibes & clear waters", suggestedStay: "2-3 Days" },
  { destination: "Rangamati", bestFor: "Kaptai Lake, boat rides & regional crafts", suggestedStay: "2-3 Days" },
  { destination: "Old Dhaka", bestFor: "Historic sites & traditional street food", suggestedStay: "1-2 Days" },
  { destination: "Sonargaon & Panam City", bestFor: "Heritage streets & folk crafts", suggestedStay: "1 Day" },
  { destination: "Bagerhat", bestFor: "Historic mosques & UNESCO heritage", suggestedStay: "1-2 Days" },
  { destination: "Paharpur", bestFor: "Ancient Buddhist monastery ruins", suggestedStay: "1 Day" },
  { destination: "Mahasthangarh", bestFor: "Ancient fortified city archaeology", suggestedStay: "1 Day" },
  { destination: "Tanguar Haor", bestFor: "Vast wetland, houseboats & bird watching", suggestedStay: "2-3 Days" },
];

const places = [
  {
    id: "1",
    title: "1. Cox's Bazar",
    desc: "Cox's Bazar is home to the world's longest natural sea beach, stretching unbroken for 120 km along the Bay of Bengal. It is the premier tourist destination in Bangladesh for relaxation, beach sports, and ocean sunsets.",
    highlights: ["Inani Beach & Himchari Drive", "Marine Drive scenic drive", "Moheshkhali Island trip", "Fresh seafood dining at local stalls"],
    bestTime: "November to March (cool and pleasant weather)",
    gettingThere: "Direct AC/Non-AC buses available from Dhaka and Chattogram, or non-stop domestic flights.",
  },
  {
    id: "2",
    title: "2. The Sundarbans",
    desc: "A UNESCO World Heritage Site, the Sundarbans is the largest mangrove forest on earth and the proud habitat of the famous Royal Bengal Tiger, spotted deer, and diverse estuarine wildlife.",
    highlights: ["Kotka & Kochikhali wildlife sanctuaries", "Karamjal crocodile breeding center", "Overnight river cruiser journey"],
    bestTime: "November to February (optimal for river cruises and spotting wildlife)",
    gettingThere: "Travel to Khulna or Mongla by bus or train, then board an organized boat cruise.",
  },
  {
    id: "3",
    title: "3. Sajek Valley",
    desc: "Nestled high up in the Hill Tracts of Rangamati district, Sajek Valley is renowned for its mesmerizing views of floating clouds, lush green hills, and tranquil indigenous village life.",
    highlights: ["Helipad sunrise & cloud views", "Konglak Para peak trekking", "Authentic bamboo-cooked local food"],
    bestTime: "October to March (clear skies and mild weather)",
    gettingThere: "Travel to Khagrachari by bus, then take a local Jeep (Chander Gari) through scenic mountain roads.",
  },
  {
    id: "4",
    title: "4. Bandarban",
    desc: "Bandarban offers high mountain peaks, dramatic waterfalls, and rich tribal heritage. It's the ultimate destination for adventure seekers and trekkers in Bangladesh.",
    highlights: ["Nilgiri & Nilachal viewpoints", "Boga Lake & Keokradong summit trek", "Nafakhum waterfall expedition"],
    bestTime: "October to February for hiking; July to September for roaring waterfalls.",
    gettingThere: "Direct intercity buses operate daily from Dhaka and Chattogram.",
  },
  {
    id: "5",
    title: "5. Sylhet",
    desc: "Sylhet is a land of rolling green hills, sprawling tea estates, crystal-clear stone rivers, and rich spiritual heritage.",
    highlights: ["Ratargul Swamp Forest boat tour", "Jaflong & Bholaganj Sada Pathor stone streams", "Shrines of Hazrat Shah Jalal & Shah Paran"],
    bestTime: "October to March for pleasant trips; Monsoon season for lush greenery.",
    gettingThere: "Accessible by direct flight, train, or luxury intercity buses from Dhaka.",
  },
  {
    id: "6",
    title: "6. Sreemangal",
    desc: "Known as the Tea Capital of Bangladesh, Sreemangal features endless tea gardens, quiet rubber plantations, and rich biodiversity.",
    highlights: ["Lawachara National Park trekking", "Baikka Beel bird sanctuary", "Famous 7-layer tea at Nilkantha Tea Cabin"],
    bestTime: "September to March for comfortable nature walks.",
    gettingThere: "Direct trains and buses run continuously from Dhaka and Sylhet.",
  },
  {
    id: "7",
    title: "7. Kuakata",
    desc: "Kuakata offers a rare, panoramic view of both sunrise and sunset over the Bay of Bengal from the very same beach.",
    highlights: ["Kuakata main beach sunrise & sunset", "Fatrar Char mangrove forest boat ride", "Rakhine tribal village & Buddhist temples"],
    bestTime: "October to March.",
    gettingThere: "Direct bus route from Dhaka via the Padma Bridge (approx. 8–10 hours).",
  },
  {
    id: "8",
    title: "8. Saint Martin's Island",
    desc: "The country's only coral island, located in the southernmost part of Bangladesh, featuring turquoise waters, coconut groves, and calm sea breezes.",
    highlights: ["Chera Dwip coral island excursion", "Night scuba diving & snorkeling", "Fresh BBQ grilled ocean fish"],
    bestTime: "November to March (when ferry ships operate from Teknaf/Cox's Bazar).",
    gettingThere: "Take a bus to Teknaf or Cox's Bazar, then board a seasonal sea ferry ship.",
  },
  {
    id: "9",
    title: "9. Rangamati",
    desc: "Surrounded by Kaptai Lake, the largest man-made lake in Bangladesh, Rangamati is a tranquil destination filled with scenic islands and tribal culture.",
    highlights: ["Kaptai Lake cruise & Hanging Bridge", "Shuvolong Waterfall boat trip", "Chakma Rajbari & tribal handicraft markets"],
    bestTime: "October to March.",
    gettingThere: "Direct AC and non-AC buses from Dhaka and Chattogram.",
  },
  {
    id: "10",
    title: "10. Old Dhaka",
    desc: "A historical treasure trove along the Buriganga River, rich with Mughal architecture, bustling narrow streets, and world-famous traditional dishes.",
    highlights: ["Lalbagh Fort & Ahsan Manzil", "Shakhari Bazar cultural walk", "Sadarghat launch terminal & Kacchi Biryani sampling"],
    bestTime: "November to February.",
    gettingThere: "Located in central Dhaka; reachable via rickshaw, rideshare, or metro.",
  },
  {
    id: "11",
    title: "11. Sonargaon & Panam City",
    desc: "The ancient capital of Bengal, featuring Panam Nagar—an abandoned 19th-century merchant township with preserved colonial architecture.",
    highlights: ["Panam Nagar ghost city walk", "Folk Art & Crafts Museum", "Goaldi Mosque"],
    bestTime: "Year-round (Best from October to March).",
    gettingThere: "Located just 30 km from Dhaka; accessible by bus or car via the Dhaka-Chittagong highway.",
  },
  {
    id: "12",
    title: "12. Bagerhat",
    desc: "An ancient Islamic city and UNESCO World Heritage Site founded in the 15th century, famous for medieval brick architecture.",
    highlights: ["Sixty Dome Mosque (Shat Gombuj Masjid)", "Mazar of Khan Jahan Ali", "Nine Dome Mosque"],
    bestTime: "October to March.",
    gettingThere: "Accessible by bus or car via Khulna or directly from Dhaka.",
  },
  {
    id: "13",
    title: "13. Paharpur",
    desc: "Somapura Mahavihara at Paharpur is one of the most significant ancient Buddhist monasteries in South Asia and a UNESCO World Heritage Site.",
    highlights: ["Central Buddhist Stupa exploration", "Terracotta plaque artwork study", "Site museum collection"],
    bestTime: "October to March.",
    gettingThere: "Located in Naogaon district; easily reached via Bogura or Rajshahi by road or rail.",
  },
  {
    id: "14",
    title: "14. Mahasthangarh",
    desc: "The oldest urban archaeological site discovered in Bangladesh, dating back to the 3rd century BCE, preserving ancient citadel walls and artifacts.",
    highlights: ["Bairagir Bhita & Govinda Bhita", "Mahasthangarh Archaeological Museum", "Vasu Bihar ruins"],
    bestTime: "October to March.",
    gettingThere: "Located 13 km north of Bogura city, accessible via direct highways from Dhaka.",
  },
  {
    id: "15",
    title: "15. Tanguar Haor",
    desc: "A unique freshwater wetland ecosystem at the foot of the Meghalaya hills, known for luxury houseboat experiences and migratory winter birds.",
    highlights: ["Houseboat night stay under stars", "Watchtower view of clear swamp waters", "Jadukata River & Shimul Bagan visit"],
    bestTime: "July to October for houseboating; November to February for migratory birds.",
    gettingThere: "Travel to Sunamganj from Dhaka or Sylhet, then board houseboats at Tahirpur ghat.",
  },
];

const faqs = [
  {
    q: "What is the number one tourist place in Bangladesh?",
    a: "Cox's Bazar is universally recognized as the most popular tourist destination in Bangladesh due to its world-record unbroken sea beach and resort infrastructure.",
  },
  {
    q: "Which places are best for a family trip?",
    a: "Cox's Bazar, Sreemangal, Sylhet, Kuakata, and Rangamati offer easy accessibility, comfortable hotels, and safe family activities.",
  },
  {
    q: "Which places are best for couples and honeymoons?",
    a: "Sajek Valley, Sreemangal tea resorts, Cox's Bazar beachfronts, and Tanguar Haor luxury houseboats are top picks for couples.",
  },
  {
    q: "Where can I see mountains and hills in Bangladesh?",
    a: "The Chittagong Hill Tracts region—specifically Sajek Valley, Bandarban, Rangamati, and Khagrachari—offers beautiful mountain landscapes.",
  },
  {
    q: "What are the UNESCO World Heritage Sites in Bangladesh?",
    a: "Bangladesh has three designated UNESCO World Heritage Sites: The Sundarbans (Natural), the Historic Mosque City of Bagerhat (Cultural), and the Ruins of the Buddhist Vihara at Paharpur (Cultural).",
  },
];

export default function page() {
  return (
    <article className="max-w-5xl lg:pt-20 mx-auto px-4 py-8 text-gray-700 leading-relaxed font-sans">

 <div className="relative w-full aspect-[16/9] mb-6 rounded-xl overflow-hidden">
    <Image
           src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1788751568/Blog-img-2-15-Best-Places_mqdcyd.png"
           alt="Best Monsoon Destinations in Bangladesh"
           fill
           priority
           className="object-cover"
         />
</div>


      <div className="mb-8 border-b border-gray-200 pb-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="bg-red-50 text-red-600 text-xs font-semibold px-3 py-1 rounded-full border border-red-100">
            Travel Guide
          </span>
          <span className="bg-emerald-50 text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full border border-emerald-100">
            Top Destinations
          </span>
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-4 leading-tight">
          15 Best Places to Visit in Bangladesh: The Ultimate Bucket List
        </h1>
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 shadow-sm">
            <img
              src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1788782828/8d9b30f492fcd1d04890e6abebb75e9946019df0bb25c2aa6b464e2856675025_yduer1.jpg"
              alt="Kawsar Ahmed"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div>
            <p className="font-bold text-gray-900 text-base">Kawsar Ahmed</p>
            <p className="text-xs text-gray-500">September 10, 2026</p>
          </div>
        </div>
      </div>


      <div className="space-y-4 text-lg text-gray-600 mb-10">
        <p>
          Bangladesh may be a small nation on the map, but it packs an incredible diversity of landscapes and rich cultural heritage into its borders. From the longest unbroken sandy beach in the world to lush green hill valleys, ancient UNESCO archaeological sites, and the planets largest mangrove forest, there is no shortage of unforgettable journeys awaiting travelers.
        </p>
        <p>
          Thanks to rapid infrastructure developments like the Padma Bridge, modern highway expansions, and online ticketing services on <strong className="text-red-600">gokawsar</strong>, exploring Bangladesh is more seamless than ever before.
        </p>
      </div>


      <section className="my-10">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-4 border-l-4 border-red-600 pl-3">
          Quick Guide to the Best Tourist Places in Bangladesh
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-900 border-b border-gray-200">
                <th className="p-3 font-bold">Destination</th>
                <th className="p-3 font-bold">Best For</th>
                <th className="p-3 font-bold">Suggested Stay</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              {quickGuideData.map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/60 transition-colors">
                  <td className="p-3 font-bold text-gray-900">{row.destination}</td>
                  <td className="p-3">{row.bestFor}</td>
                  <td className="p-3 text-red-600 font-semibold">{row.suggestedStay}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>


      <section className="space-y-12 my-12">
        {places.map((place) => (
          <div key={place.id} className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">{place.title}</h2>
            <p className="text-gray-600">{place.desc}</p>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-2">
              <h3 className="font-bold text-gray-900 text-sm">Best Things to Do:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                {place.highlights.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-xs text-gray-600 pt-2">
              <div className="p-3 bg-red-50/50 rounded-lg border border-red-100">
                <strong className="text-red-900 block mb-0.5">Best Time to Visit:</strong>
                {place.bestTime}
              </div>
              <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100">
                <strong className="text-blue-900 block mb-0.5">Getting There:</strong>
                {place.gettingThere}
              </div>
            </div>
          </div>
        ))}
      </section>


      <section className="my-12 p-6 bg-gradient-to-br from-slate-900 to-gray-800 text-white rounded-2xl shadow-xl space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">Suggested 10-Day Bangladesh Itinerary</h2>
        <div className="space-y-4 text-sm text-gray-300">
          <div className="border-l-2 border-red-500 pl-4 py-1">
            <strong className="text-white text-base block">Day 1: Explore Old Dhaka</strong>
            Visit Lalbagh Fort, Ahsan Manzil, and take a traditional wooden boat ride on the Buriganga River.
          </div>
          <div className="border-l-2 border-red-500 pl-4 py-1">
            <strong className="text-white text-base block">Day 2: Day Trip to Sonargaon & Panam City</strong>
            Explore the historical streets of Panam Nagar and Folk Art Museum, returning to Dhaka in the evening.
          </div>
          <div className="border-l-2 border-red-500 pl-4 py-1">
            <strong className="text-white text-base block">Days 3–4: Travel to Sreemangal & Sylhet</strong>
            Explore tea estates, trek Lawachara Rainforest, and visit the Ratargul Swamp Forest and Jaflong.
          </div>
          <div className="border-l-2 border-red-500 pl-4 py-1">
            <strong className="text-white text-base block">Days 5–7: Coastal Paradise at Coxs Bazar</strong>
            Relax along Marine Drive, take an excursion to Inani Beach, and enjoy fresh seafood.
          </div>
          <div className="border-l-2 border-red-500 pl-4 py-1">
            <strong className="text-white text-base block">Days 8–10: Sajek Valley or Sundarbans Cruise</strong>
            Finish your journey high in the clouds at Sajek Valley or aboard a relaxing jungle cruise in the Sundarbans.
          </div>
        </div>
      </section>


      <section className="my-12 space-y-6">
        <h2 className="text-2xl font-extrabold text-gray-900 border-l-4 border-red-600 pl-3">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="p-5 border border-gray-200 rounded-xl bg-white space-y-2">
              <h3 className="font-bold text-gray-900 text-base">{faq.q}</h3>
              <p className="text-sm text-gray-600">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

  
      <section className="p-6 bg-red-50 border border-red-100 rounded-2xl my-10 space-y-3">
        <h2 className="text-xl font-bold text-gray-900">Final Thoughts</h2>
        <p className="text-sm text-gray-700">
          The best places to visit in Bangladesh offer much more than just a getaway—they offer rich history, serene landscapes, and incredible hospitality. Whether you choose to trek hill valleys, relax on sandy shores, or discover ancient ruins, book your travel hassle-free on <strong className="text-red-600">gokawsar</strong> today!
        </p>
      </section>

      <div className="pt-6 border-t border-gray-200">
        <Link href="/blog" className="text-red-600 font-bold text-sm hover:underline inline-flex items-center gap-2">
          ‹ Back to all blogs
        </Link>
      </div>
    </article>
  );
}