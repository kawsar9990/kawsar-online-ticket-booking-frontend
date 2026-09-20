import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Dhaka To Bandarban By Bus: Hill Track Tour Guide | gokawsar",
  description:
    "Comprehensive guide for traveling from Dhaka to Bandarban by bus. Detailed bus operator comparisons, ticket prices, boarding points, hill tract guidelines, sightseeing spots, and safety tips.",
  openGraph: {
    title: "Dhaka To Bandarban By Bus: Ultimate Hill Track Travel Guide",
    description: "Everything you need to know about bus operators, ticket fares, routes, permissions, and top tourist spots in Bandarban.",
    type: "article",
    publishedTime: "2026-09-10T00:00:00.000Z",
  },
};

export default function DhakaToBandarbanBlog() {
  return (
    <article className="max-w-5xl lg:pt-20 mx-auto px-4 md:px-8 py-10 text-gray-800 font-sans leading-relaxed">
     
      <div className="relative w-full aspect-[21/9] mb-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        <Image
          src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1788760935/dhaka-to-bandarban-2_grakdn.jpg"
          alt="Dhaka to Bandarban Bus Travel Guide"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="mb-8 border-b border-gray-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Hill Tract Travel Guide
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-4 leading-tight">
          Dhaka To Bandarban By Bus: Ultimate Hill Track Tour & Travel Guide
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
            <p className="text-gray-500">September 10, 2026</p>
          </div>
        </div>
      </div>


      <section className="space-y-4 text-base md:text-lg text-gray-700 mb-12">
        <p>
          The journey from Dhaka to Bandarban is one of the most scenic highway routes in Bangladesh. Bandarban, nestled in the Chittagong Hill Tracts, is famous for its soaring peaks, winding mountain roads, roaring waterfalls, and rich indigenous cultural heritage.
        </p>
        <p>
          Traveling to Bandarban by bus is the most convenient, budget-friendly, and direct transport option available. Covering a distance of roughly 320 kilometers, direct long-distance buses take about 8 to 10 hours depending on traffic and route conditions. This complete guide provides all the necessary details on bus services, ticket prices, boarding counters, travel permits, sight-seeing destinations, and essential safety tips for an unforgettable trip.
        </p>
      </section>


      <section className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6 mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 border-b border-gray-100 pb-3">
          Top Bus Operators on the Dhaka to Bandarban Route
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          Several reputed bus operators serve this route daily. Whether you prefer luxury sleeper coaches or budget-friendly Non-AC options, you have multiple choices:
        </p>

        <div className="space-y-6 text-xs md:text-sm text-gray-700">
          <div className="border border-gray-100 p-4 rounded-xl bg-gray-50/60">
            <strong className="text-gray-900 text-base block mb-1">1. Shyamoli Paribahan</strong>
            <p className="text-gray-600 mb-2">Known for its vast fleet and reliable schedules, Shyamoli offers both Non-AC and Non-AC Hino 1J Chair Coaches as well as comfortable Hyundai AC buses.</p>
            <span className="text-emerald-700 font-semibold">Best for: Budget travellers and frequent departure times.</span>
          </div>

          <div className="border border-gray-100 p-4 rounded-xl bg-gray-50/60">
            <strong className="text-gray-900 text-base block mb-1">2. Saintmartin Paribahan</strong>
            <p className="text-gray-600 mb-2">Offers high-end Scania and MAN Multi-Axle AC buses with spacious reclining seats and ample legroom, ensuring a restful overnight ride.</p>
            <span className="text-emerald-700 font-semibold">Best for: Luxury seekers and smooth overnight sleep.</span>
          </div>

          <div className="border border-gray-100 p-4 rounded-xl bg-gray-50/60">
            <strong className="text-gray-900 text-base block mb-1">3. Saudiya Air Con & Non-AC</strong>
            <p className="text-gray-600 mb-2">One of the oldest operators on Chittagong and Bandarban routes, providing reliable drivers experienced in mountain highway curves.</p>
            <span className="text-emerald-700 font-semibold">Best for: On-time arrivals and route expertise.</span>
          </div>

          <div className="border border-gray-100 p-4 rounded-xl bg-gray-50/60">
            <strong className="text-gray-900 text-base block mb-1">4. Unique Service & S. Alam Paribahan</strong>
            <p className="text-gray-600 mb-2">Offers regular non-AC services connecting major terminals in Dhaka directly to Bandarban sadar bus stand.</p>
            <span className="text-emerald-700 font-semibold">Best for: Economy travel and last-minute booking availability.</span>
          </div>
        </div>
      </section>


      <section className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-200 mb-12 space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
          Ticket Prices, Departure Timing & Boarding Points
        </h2>
        <p className="text-xs md:text-sm text-gray-600">
          Most travelers prefer taking night buses departing between 9:00 PM and 11:30 PM to arrive early in Bandarban by dawn.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm text-gray-700 border-collapse">
            <thead>
              <tr className="bg-emerald-800 text-white border-b border-emerald-900">
                <th className="p-3 font-bold">Bus Type</th>
                <th className="p-3 font-bold">Price Range (BDT)</th>
                <th className="p-3 font-bold">Key Boarding Points (Dhaka)</th>
                <th className="p-3 font-bold">Typical Departure Times</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="p-3 font-medium">Non-AC Chair Coach</td>
                <td className="p-3">৳ 800 - ৳ 950</td>
                <td className="p-3">Sayedabad, Arambagh, Gabtoli</td>
                <td className="p-3">10:00 PM - 11:30 PM</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Economy AC Coach</td>
                <td className="p-3">৳ 1,200 - ৳ 1,400</td>
                <td className="p-3">Fakirapool, Kalabagan, Sayedabad</td>
                <td className="p-3">9:30 PM - 11:00 PM</td>
              </tr>
              <tr>
                <td className="p-3 font-medium">Business / Multi-Axle AC</td>
                <td className="p-3">৳ 1,600 - ৳ 1,900</td>
                <td className="p-3">Arambagh, Kalabagan, Kamalapur</td>
                <td className="p-3">10:00 PM - 11:15 PM</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6 mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 border-b border-gray-100 pb-3">
          Essential Travel Rules & Security Checkpoints
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          Because Bandarban is part of the Chittagong Hill Tracts administration, special travel guidelines apply to all local and foreign visitors.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs md:text-sm text-gray-700">
          <div className="border border-emerald-100 bg-emerald-50/40 p-5 rounded-xl space-y-2">
            <strong className="text-emerald-900 text-base block">1. NID & Photo ID Copy</strong>
            <p className="text-gray-600">Carry at least 4 to 6 photocopies of your National ID card, Passport, or Birth Certificate. Security checkpoints at entry points like Keranihat and Bandarban Sadar require registration.</p>
          </div>

          <div className="border border-emerald-100 bg-emerald-50/40 p-5 rounded-xl space-y-2">
            <strong className="text-emerald-900 text-base block">2. Foreigner Travel Permission</strong>
            <p className="text-gray-600">Foreign nationals must obtain prior clearance from the Ministry of Home Affairs or Bangladesh District Commissioner (DC) office before traveling to hill areas.</p>
          </div>

          <div className="border border-emerald-100 bg-emerald-50/40 p-5 rounded-xl space-y-2">
            <strong className="text-emerald-900 text-base block">3. Local Guide Requirement</strong>
            <p className="text-gray-600">Hiring a registered local guide is compulsory when trekking to remote sites like Boga Lake, Keokradong, Amiakhum, or Jadipai waterfalls.</p>
          </div>

          <div className="border border-emerald-100 bg-emerald-50/40 p-5 rounded-xl space-y-2">
            <strong className="text-emerald-900 text-base block">4. Chander Gari (4x4 Jeep) Booking</strong>
            <p className="text-gray-600">Mountain terrain beyond Bandarban Sadar requires four-wheel-drive local vehicles (Chander Gari) booked directly from the official Jeep Samity counter.</p>
          </div>
        </div>
      </section>

  
      <section className="space-y-6 mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Must-Visit Tourist Attractions in Bandarban
        </h2>
        <p className="text-sm md:text-base text-gray-600">
          Once your bus arrives in Bandarban town, explore these iconic places:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs md:text-sm">
          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-2">
            <h3 className="text-base font-bold text-gray-900">Nilgiri Hill Resort</h3>
            <p className="text-gray-600">Located 3,500 feet above sea level, offering breathless cloud views managed by the Bangladesh Army.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-2">
            <h3 className="text-base font-bold text-gray-900">Nilachal Viewpoint</h3>
            <p className="text-gray-600">Just 5 km from town, famous for stunning sunset views across endless green hill ranges.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-2">
            <h3 className="text-base font-bold text-gray-900">Boga Lake</h3>
            <p className="text-gray-600">A mysterious natural high-altitude freshwater lake situated 1,200 feet above sea level in Ruma Upazila.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-2">
            <h3 className="text-base font-bold text-gray-900">Keokradong Peak</h3>
            <p className="text-gray-600">One of the highest peaks in Bangladesh, a favorite spot for adventurous mountain trekkers.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-2">
            <h3 className="text-base font-bold text-gray-900">Golden Temple (Buddha Dhatu Jadi)</h3>
            <p className="text-gray-600">The largest Theravada Buddhist temple in Bangladesh, famous for its magnificent ornamental architecture.</p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm space-y-2">
            <h3 className="text-base font-bold text-gray-900">Nafakhum & Amiakhum</h3>
            <p className="text-gray-600">Spectacular deep-forest waterfalls located in Thanchi upazila for hardcore adventure lovers.</p>
          </div>
        </div>
      </section>


      <section className="bg-emerald-950 text-white p-6 md:p-8 rounded-2xl mb-12 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          Pro Travel Tips for a Smooth Trip
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-emerald-100 leading-relaxed">
          <li><strong>Motion Sickness:</strong> Mountain roads beyond Keranihat have continuous hairpin bends. Keep motion sickness medicine ready if you are prone to dizziness.</li>
          <li><strong>Cash Is King:</strong> Mobile networks and ATM booths can be limited in interior regions like Ruma and Thanchi. Always carry enough cash.</li>
          <li><strong>Book Early:</strong> During winter peak travel season, bus tickets sell out quickly. Reserve your seats 5–7 days in advance using <span className="notranslate"> GoKawsar </span>.</li>
        </ul>
      </section>

      <div className="pt-6 border-t border-gray-200 flex justify-between items-center text-xs md:text-sm font-bold text-red-600">
        <Link href="/blog" className="hover:underline">
          ‹ Back to all blogs
        </Link>
      </div>

    </article>
  );
}