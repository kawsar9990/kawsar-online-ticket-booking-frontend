import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Top 10 Dhaka Weekend Bus Routes Under 2 Hours | gokawsar",
  description:
    "Explore the top 10 quick weekend getaways from Dhaka within a 2-hour bus ride. Complete travel guide covering Sonargaon, Gazipur, Mawa Ghat, and seamless ticket booking on gokawsar.",
  openGraph: {
    title: "Top 10 Dhaka Weekend Bus Routes Under 2 Hours - gokawsar",
    description: "Plan your quick weekend trip from Dhaka! Discover 10 top destinations reachable within 2 hours by bus and book tickets on gokawsar.",
    type: "article",
    publishedTime: "2026-09-10T00:00:00.000Z",
  },
};

export default function WeekendBusRoutesBlog() {
  return (
    <article className="max-w-5xl mx-auto lg:pt-20 px-4 md:px-8 py-10 text-gray-800 font-sans leading-relaxed">
      
      <div className="relative w-full aspect-[21/9] mb-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        <Image
          src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1788760623/top-destination_viqych.png"
          alt="Top 10 Dhaka Weekend Bus Routes Under 2 Hours"
          fill
          priority
          className="object-cover"
        />
      </div>

      <header className="border-b border-gray-200 pb-8 mb-10 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Weekend Travel Guide
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-4 leading-tight">
          Top 10 Dhaka Weekend Bus Routes Under 2 Hours
        </h1>

        <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
          <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-md">
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
      </header>

      <section className="space-y-4 text-base md:text-lg text-gray-700 mb-12">
        <p>
          Life in Dhaka is fast-paced, energetic, and demanding. After a long week of work or study, taking a quick break is essential to recharge your mind. Fortunately, you do not need to take long leaves or travel far away to experience scenic beauty, heritage, and peaceful resorts.
        </p>
        <p>
          There are several incredible destinations located within a 2-hour bus journey from Dhaka. With **gokawsar**, booking your express bus seats for weekend escapes is faster and more convenient than ever before.
        </p>
      </section>

      <section className="space-y-12 mb-16">
        <h2 className="text-2xl md:text-4xl font-extrabold text-gray-900 border-b border-gray-200 pb-4">
          Top 10 Destination Breakdown
        </h2>

        <div className="space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden border border-gray-100">
            <Image
              src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1789039261/sonargaon-768x512_rzde5w.jpg"
              alt="Sonargaon Panam City"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">1. Sonargaon & Panam City (Narayanganj)</h3>
          <p className="text-xs md:text-sm text-gray-600">
            Located just around 30 km from central Dhaka via the Dhaka-Chittagong Highway, Sonargaon is one of the oldest capitals of medieval Bengal. Panam City offers a breathtaking walking tour among century-old colonial mansions and historical merchant estates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
            <p><strong>Estimated Travel Time:</strong> 1 hour to 1.5 hours</p>
            <p><strong>Main Attractions:</strong> Folk Art Museum, Panam Nagar, Meghna River Bank</p>
            <p><strong>Best Bus Routes:</strong> Dhaka Sayedabad / Gulistan to Mograpara Bus Stand</p>
            <p><strong>gokawsar Booking Tip:</strong> Reserve AC bus seats early on Friday mornings to beat highway toll traffic.</p>
          </div>
        </div>

        <div className="space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden border border-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1400&auto=format&fit=crop"
              alt="Mawa Ghat Padma Bridge"
              fill
              className="object-cover"
            />
          </div>
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">2. Mawa Ghat & Padma Bridge Viewpoint (Munshiganj)</h3>
          <p className="text-xs md:text-sm text-gray-600">
            Thanks to the Dhaka-Mawa Expressway, traveling to Mawa Ghat takes less than an hour from Jatrabari. It is the ultimate weekend destination for enjoying freshly fried Hilsha fish while admiring the majestic Padma Bridge.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
            <p><strong>Estimated Travel Time:</strong> 45 minutes to 1.2 hours</p>
            <p><strong>Main Attractions:</strong> Fresh Hilsha dining, Boat rides on Padma, Bridge Viewpoint</p>
            <p><strong>Best Bus Routes:</strong> Jatrabari / Gulistan Express Services to Old Mawa Ghat</p>
            <p><strong>gokawsar Booking Tip:</strong> Book afternoon return slots on gokawsar to catch sunset views over the river.</p>
          </div>
        </div>

        <div className="space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">3. Gazipur Bhawal National Park & Eco Resorts</h3>
          <p className="text-xs md:text-sm text-gray-600">
            Bhawal National Park offers vast evergreen Shal forest canopies, quiet walking trails, and serene lakes. It is perfect for family picnics, birdwatching, and nature photography right on the northern edge of the capital.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
            <p><strong>Estimated Travel Time:</strong> 1.5 hours to 2 hours</p>
            <p><strong>Main Attractions:</strong> Shal Forest Trails, Wildlife Sanctuary, Eco Resorts</p>
            <p><strong>Best Bus Routes:</strong> Mohakhali / Uttara to Rajendrapur / Gazipur Intersection</p>
            <p><strong>gokawsar Booking Tip:</strong> Choose early morning departure times to avoid Gazipur intersection bottlenecks.</p>
          </div>
        </div>

        <div className="space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">4. Jahangirnagar University Campus (Savar)</h3>
          <p className="text-xs md:text-sm text-gray-600">
            Famous for its lush green foliage, red-water lily ponds, and thousands of migratory winter birds, the Jahangirnagar University campus in Savar is an eco-friendly paradise for peaceful weekend strolls.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
            <p><strong>Estimated Travel Time:</strong> 1 hour to 1.5 hours</p>
            <p><strong>Main Attractions:</strong> Guest Bird Ponds, Botanical Garden, Campus Monuments</p>
            <p><strong>Best Bus Routes:</strong> Gabtoli / Mirpur Express Lines to JU Main Gate</p>
            <p><strong>gokawsar Booking Tip:</strong> Pair your visit with nearby National Martyrs Memorial (Jatiya Smriti Soudho).</p>
          </div>
        </div>

        <div className="space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">5. Zinjira Fort & Idrakpur Fort (Munshiganj / Keraniganj)</h3>
          <p className="text-xs md:text-sm text-gray-600">
            Built during the Mughal era to protect Dhaka from river pirates, these historic water forts offer an intriguing look into Bengal’s military heritage and defense architecture along the Buriganga and Dhaleshwari rivers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
            <p><strong>Estimated Travel Time:</strong> 1 hour to 1.5 hours</p>
            <p><strong>Main Attractions:</strong> Mughal Architecture, River Views, Photography Spots</p>
            <p><strong>Best Bus Routes:</strong> Postogola / Sadarghat Inter-district Bus Links</p>
            <p><strong>gokawsar Booking Tip:</strong> Book morning tickets to combine both fort visits in a single half-day itinerary.</p>
          </div>
        </div>

        <div className="space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">6. Baliati Palace (Saturia, Manikganj)</h3>
          <p className="text-xs md:text-sm text-gray-600">
            Baliati Zamindar Bari is one of the grandest 19th-century palaces in Bangladesh, featuring seven massive structures, intricate neoclassical pillars, broad courtyards, and deep heritage ponds.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
            <p><strong>Estimated Travel Time:</strong> 1.5 hours to 2 hours</p>
            <p><strong>Main Attractions:</strong> Zamindar Palace Museum, Neoclassical Pillars, Courtyards</p>
            <p><strong>Best Bus Routes:</strong> Gabtoli to Saturia / Manikganj Direct Bus Service</p>
            <p><strong>gokawsar Booking Tip:</strong> Direct express tickets are available on gokawsar with guaranteed return seats.</p>
          </div>
        </div>

        <div className="space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">7. Mainamati & Shalban Vihara (Comilla Border Express)</h3>
          <p className="text-xs md:text-sm text-gray-600">
            Connected via the rapid Dhaka-Chittagong Highway express coaches, eastern Comilla’s archaeological sites like Shalban Vihara showcase 8th-century Buddhist monastery ruins and rich historical museums.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
            <p><strong>Estimated Travel Time:</strong> 1.8 hours to 2 hours</p>
            <p><strong>Main Attractions:</strong> Shalban Vihara Ruins, Archaeological Museum, War Cemetery</p>
            <p><strong>Best Bus Routes:</strong> Sayedabad Highway Express Services to Comilla Cantonment</p>
            <p><strong>gokawsar Booking Tip:</strong> Book early morning AC seats for maximum speed along the express highway.</p>
          </div>
        </div>

        <div className="space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">8. Golap Gram / Rose Village (Sadullapur, Savar)</h3>
          <p className="text-xs md:text-sm text-gray-600">
            Sadullapur village in Savar is covered in endless fields of red roses and commercial flower plantations, creating a picturesque countryside escape right outside city borders.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
            <p><strong>Estimated Travel Time:</strong> 1 hour to 1.5 hours</p>
            <p><strong>Main Attractions:</strong> Commercial Rose Fields, Turag River Boat Rides</p>
            <p><strong>Best Bus Routes:</strong> Mirpur 1 / Birulia Bridge Bus Connectors</p>
            <p><strong>gokawsar Booking Tip:</strong> Visit during winter months for peak flower blooming season.</p>
          </div>
        </div>

        <div className="space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">9. Wari-Bateshwar Archaeological Site (Narsingdi)</h3>
          <p className="text-xs md:text-sm text-gray-600">
            Located along the Dhaka-Sylhet Highway, Wari-Bateshwar is a 2,500-year-old ancient fort-city archaeological excavation zone containing punch-marked coins, ancient beads, and historical exhibits.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
            <p><strong>Estimated Travel Time:</strong> 1.5 hours to 2 hours</p>
            <p><strong>Main Attractions:</strong> Ancient City Dig Sites, Local Heritage Museum</p>
            <p><strong>Best Bus Routes:</strong> Mohakhali / Sayedabad to Narsingdi Express Buses</p>
            <p><strong>gokawsar Booking Tip:</strong> Book non-stop express coaches to bypass local town stops.</p>
          </div>
        </div>

        <div className="space-y-6 bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">10. Zayeda Garden & Eco Parks (Pubail, Gazipur)</h3>
          <p className="text-xs md:text-sm text-gray-600">
            Pubail offers open village landscapes, rustic shooting spots, and quiet riverside eco-resorts where visitors can spend a peaceful weekend surrounded by nature.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
            <p><strong>Estimated Travel Time:</strong> 1 hour to 1.5 hours</p>
            <p><strong>Main Attractions:</strong> Rustic Countryside, Shooting Spots, Resort Lawns</p>
            <p><strong>Best Bus Routes:</strong> Tongi / Pragati Sarani Link Buses to Pubail</p>
            <p><strong>gokawsar Booking Tip:</strong> Reserve tickets on gokawsar for morning trips to enjoy a full day in nature.</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6 mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 border-b border-gray-100 pb-3">
          Summary & Travel Planning Matrix
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm text-gray-700 border-collapse">
            <thead>
              <tr className="bg-emerald-900 text-white border-b border-emerald-950">
                <th className="p-3 font-bold">Destination</th>
                <th className="p-3 font-bold">Distance</th>
                <th className="p-3 font-bold">Estimated Time</th>
                <th className="p-3 font-bold">Key Travel Highlight</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="p-3 font-medium text-emerald-950">1. Sonargaon & Panam City</td>
                <td className="p-3">30 km</td>
                <td className="p-3 text-emerald-700 font-bold">1 - 1.5 Hours</td>
                <td className="p-3">Ancient Heritage & Folk Art</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-emerald-950">2. Mawa Ghat (Padma Bridge)</td>
                <td className="p-3">40 km</td>
                <td className="p-3 text-emerald-700 font-bold">45 Mins - 1.2 Hours</td>
                <td className="p-3">Fresh Hilsha & Express Highway</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-emerald-950">3. Bhawal National Park</td>
                <td className="p-3">45 km</td>
                <td className="p-3 text-emerald-700 font-bold">1.5 - 2 Hours</td>
                <td className="p-3">Shal Forest & Wildlife</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-emerald-950">4. Jahangirnagar University</td>
                <td className="p-3">32 km</td>
                <td className="p-3 text-emerald-700 font-bold">1 - 1.5 Hours</td>
                <td className="p-3">Lakes & Migratory Winter Birds</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-emerald-950">5. Idrakpur / Zinjira Forts</td>
                <td className="p-3">28 km</td>
                <td className="p-3 text-emerald-700 font-bold">1 - 1.5 Hours</td>
                <td className="p-3">Mughal River Fort Architecture</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-emerald-950">6. Baliati Zamindar Palace</td>
                <td className="p-3">55 km</td>
                <td className="p-3 text-emerald-700 font-bold">1.5 - 2 Hours</td>
                <td className="p-3">Grand Neoclassical Palace</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-emerald-950">7. Mainamati & Shalban Vihara</td>
                <td className="p-3">85 km</td>
                <td className="p-3 text-emerald-700 font-bold">1.8 - 2 Hours</td>
                <td className="p-3">8th Century Buddhist Monastery</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-emerald-950">8. Golap Gram (Rose Village)</td>
                <td className="p-3">25 km</td>
                <td className="p-3 text-emerald-700 font-bold">1 - 1.5 Hours</td>
                <td className="p-3">Vast Red Rose Plantations</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-emerald-950">9. Wari-Bateshwar Site</td>
                <td className="p-3">70 km</td>
                <td className="p-3 text-emerald-700 font-bold">1.5 - 2 Hours</td>
                <td className="p-3">2,500-Year-Old Ancient Fort City</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-emerald-950">10. Pubail Eco Village</td>
                <td className="p-3">30 km</td>
                <td className="p-3 text-emerald-700 font-bold">1 - 1.5 Hours</td>
                <td className="p-3">Quiet Countryside & Shooting Resorts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-emerald-950 text-white p-6 md:p-8 rounded-2xl mb-12 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          Book Your Weekend Getaway Bus Tickets on gokawsar!
        </h2>
        <p className="text-xs md:text-sm text-emerald-100 leading-relaxed">
          Dont waste time waiting at terminal counters. Select your preferred seat, compare top bus operators, and book instantly with smooth digital payments on gokawsar.
        </p>
      </section>

      <div className="pt-6 border-t border-gray-200 flex justify-between items-center text-xs md:text-sm font-bold text-emerald-700">
        <Link href="/blog" className="hover:underline">
          ‹ Back to all blogs
        </Link>

      </div>

    </article>
  );
}