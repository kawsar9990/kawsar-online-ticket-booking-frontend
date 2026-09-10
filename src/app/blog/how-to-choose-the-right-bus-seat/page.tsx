import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Choose the Right Bus Seat | gokawsar",
  description:
    "Master guide on selecting the best bus seat for long-distance travel in Bangladesh. Learn pros and cons of Front, Middle, Window, Aisle, and Sleeper seats on gokawsar.",
  openGraph: {
    title: "How to Choose the Right Bus Seat: Expert Guide by gokawsar",
    description: "Avoid motion sickness, enjoy scenic views, or get maximum legroom. Discover how to pick the perfect bus seat using gokawsar interactive seat maps.",
    type: "article",
    publishedTime: "2026-09-10T00:00:00.000Z",
  },
};

export default function ChooseRightBusSeatBlog() {
  return (
    <article className="max-w-5xl mx-auto lg:pt-20 px-4 md:px-8 py-10 text-gray-800 font-sans leading-relaxed">
      
      <div className="relative w-full aspect-[21/9] mb-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        <Image
          src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1788753111/Bus-Seat_xhovn7.png"
          alt="How to Choose the Right Bus Seat"
          fill
          priority
          className="object-cover"
        />
      </div>

      <header className="border-b border-gray-200 pb-8 mb-10 text-center md:text-left">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          Passenger Comfort & Bus Safety Tips
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-4 leading-tight">
          How to Choose the Right Bus Seat: The Ultimate Comfort & Safety Guide
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
            <p className="text-gray-500">September 10, 2026</p>
          </div>
        </div>
      </header>

      <section className="space-y-4 text-base md:text-lg text-gray-700 mb-12">
        <p>
          When planning a long bus journey across Bangladesh—whether heading down the Dhaka-Coxs Bazar highway, crossing the Padma Bridge to Khulna, or traveling overnight to Sylhet—choosing the right seat can completely transform your travel experience.
        </p>
        <p>
          Your seat selection determines your comfort, susceptibility to motion sickness, quality of sleep, and peace of mind. With **gokawsar**, you can view interactive live seat maps and reserve your exact position in advance. Here is a comprehensive guide to picking the perfect bus seat for every journey.
        </p>
      </section>

      <section className="bg-emerald-50/60 p-6 md:p-8 rounded-2xl border border-emerald-100 mb-12 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-emerald-950 border-b border-emerald-200 pb-2">
          1. Front Seats (Rows 1 to 3)
        </h2>
        <p className="text-xs md:text-sm text-gray-600">
          Front seats are positioned right behind the driver and entry doors, offering exceptional visibility and stability:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-gray-700 pt-2">
          <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm space-y-2">
            <strong className="block text-emerald-900 font-bold">Key Benefits:</strong>
            <p className="text-gray-600">Minimizes road sway and bumpiness, drastically reducing motion sickness and nausea. Offers rapid boarding and quick exit during highway meal breaks.</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-emerald-100 shadow-sm space-y-2">
            <strong className="block text-emerald-900 font-bold">Best For:</strong>
            <p className="text-gray-600">Travelers prone to travel sickness, elderly passengers needing easy entry, and those who want an unobstructed view of the highway ahead.</p>
          </div>
        </div>
        <p className="text-xs font-semibold text-emerald-800 bg-white p-3 rounded-lg border border-emerald-200">
          Travel Tip: Front rows fill up rapidly on gokawsar. Always book 3 to 5 days early for long routes like Dhaka-Chittagong.
        </p>
      </section>

      <section className="bg-blue-50/60 p-6 md:p-8 rounded-2xl border border-blue-100 mb-12 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-blue-950 border-b border-blue-200 pb-2">
          2. Middle Seats (Center Rows)
        </h2>
        <p className="text-xs md:text-sm text-gray-600">
          Located near the center gravity axis of the coach, middle rows provide the most balanced suspension ride:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-gray-700 pt-2">
          <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm space-y-2">
            <strong className="block text-blue-900 font-bold">Key Benefits:</strong>
            <p className="text-gray-600">Offers the smoothest ride with minimal vibration, reduced road noise, and neutral climate control balance away from cold door drafts.</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-blue-100 shadow-sm space-y-2">
            <strong className="block text-blue-900 font-bold">Best For:</strong>
            <p className="text-gray-600">Families with young children, readers, corporate travelers needing a quiet workspace, and passengers seeking uninterrupted sleep.</p>
          </div>
        </div>
        <p className="text-xs font-semibold text-blue-800 bg-white p-3 rounded-lg border border-blue-200">
          Travel Tip: Select middle seats in 2+1 Scania or Volvo luxury coaches on gokawsar for extra elbow room and private reclining space.
        </p>
      </section>

      <section className="bg-purple-50/60 p-6 md:p-8 rounded-2xl border border-purple-100 mb-12 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-purple-950 border-b border-purple-200 pb-2">
          3. Window Seats
        </h2>
        <p className="text-xs md:text-sm text-gray-600">
          The timeless choice for scenic sightseeing and comfortable wall support:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-purple-700 pt-2">
          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm space-y-2">
            <strong className="block text-purple-900 font-bold">Key Benefits:</strong>
            <p className="text-gray-600">Unmatched panoramic views along scenic river routes, personal wall support for resting travel pillows, and zero disruption from aisle foot traffic.</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-purple-100 shadow-sm space-y-2">
            <strong className="block text-purple-900 font-bold">Best For:</strong>
            <p className="text-gray-600">Daytime travelers, photographers, solo passengers seeking privacy, and those who like focusing on distant horizons to prevent dizziness.</p>
          </div>
        </div>
        <p className="text-xs font-semibold text-purple-800 bg-white p-3 rounded-lg border border-purple-200">
          Travel Tip: On daytime routes like Dhaka-Sylhet, choose window seats away from direct afternoon sunlight.
        </p>
      </section>

      <section className="bg-amber-50/60 p-6 md:p-8 rounded-2xl border border-amber-100 mb-12 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-amber-950 border-b border-amber-200 pb-2">
          4. Aisle Seats & Sleeper Berths
        </h2>
        <p className="text-xs md:text-sm text-gray-600">
          Designed for maximum mobility during daytime trips or complete flat-bed comfort for overnight sleeper coaches:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm text-amber-900 pt-2">
          <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm space-y-2">
            <strong className="block text-amber-900 font-bold">Aisle Seats (Easy Mobility):</strong>
            <p className="text-gray-600">Provides extra legroom to stretch into the walkway, easier access to luggage racks, and effortless freedom to step out at rest stops without disturbing neighbors.</p>
          </div>

          <div className="bg-white p-4 rounded-xl border border-amber-100 shadow-sm space-y-2">
            <strong className="block text-amber-900 font-bold">Sleeper Berths (Flat-Bed Sleep):</strong>
            <p className="text-gray-600">Full 180-degree lying berths with privacy curtains, reading lights, and charging ports. Ideal for overnight journeys to Rajshahi, Rangpur, or Coxs Bazar.</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6 mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 border-b border-gray-100 pb-3">
          Quick Comparison Matrix: Which Seat Suits Your Travel Style?
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm text-gray-700 border-collapse">
            <thead>
              <tr className="bg-emerald-900 text-white border-b border-emerald-950">
                <th className="p-3 font-bold">Seat Category</th>
                <th className="p-3 font-bold">Comfort Rating</th>
                <th className="p-3 font-bold">Motion Stability</th>
                <th className="p-3 font-bold">Ideal Traveler Profile</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="p-3 font-medium text-emerald-900">Front Rows (1-3)</td>
                <td className="p-3">★★★★☆</td>
                <td className="p-3 font-bold text-emerald-700">Highest (Lowest Bumpiness)</td>
                <td className="p-3">Seniors & motion sickness sufferers</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-emerald-900">Middle Rows (4-7)</td>
                <td className="p-3">★★★★★</td>
                <td className="p-3 font-bold text-emerald-700">High (Neutral Balance)</td>
                <td className="p-3">Families, children & remote workers</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-emerald-900">Window Seats</td>
                <td className="p-3">★★★★☆</td>
                <td className="p-3 font-bold text-emerald-700">Moderate</td>
                <td className="p-3">Sightseers & solo travelers</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-emerald-900">Aisle Seats</td>
                <td className="p-3">★★★☆☆</td>
                <td className="p-3 font-bold text-emerald-700">Moderate</td>
                <td className="p-3">Tall passengers needing extra legroom</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-emerald-900">Sleeper Berths</td>
                <td className="p-3">★★★★★</td>
                <td className="p-3 font-bold text-emerald-700">High (Flat-bed resting)</td>
                <td className="p-3">Overnight travelers & tourists</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-rose-700">Back Rows (Avoid)</td>
                <td className="p-3">★★☆☆☆</td>
                <td className="p-3 font-bold text-rose-600">Low (High Bumps & Engine Heat)</td>
                <td className="p-3">Last-minute budget travelers only</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-rose-50 p-6 md:p-8 rounded-2xl border border-rose-200 mb-12 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-rose-950 border-b border-rose-200 pb-2">
          Safety Tips & Seats to Avoid
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-rose-900 leading-relaxed">
          <li><strong>Avoid Back Row Seats:</strong> The rear axle experiences maximum bounce over highway speed bumps, higher engine heat, and louder diesel exhaust noise.</li>
          <li><strong>Female Passengers Traveling Solo:</strong> gokawsar clearly highlights female-allocated adjacent seats on interactive seat maps for added privacy and security.</li>
          <li><strong>Buckle Up Always:</strong> Modern Hyundai Universe and Scania coaches feature seatbelts on all seats. Always fasten your belt immediately after boarding.</li>
        </ul>
      </section>

      <section className="bg-emerald-950 text-white p-6 md:p-8 rounded-2xl mb-12 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          Book Your Preferred Bus Seat in Seconds on gokawsar
        </h2>
        <p className="text-xs md:text-sm text-emerald-100 leading-relaxed">
          Ready for a smooth and comfortable highway ride? Open the gokawsar web platform or mobile app, search your desired route, select your preferred seat directly on the live floor chart, and enjoy instant booking with bKash, Nagad, or bank cards!
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