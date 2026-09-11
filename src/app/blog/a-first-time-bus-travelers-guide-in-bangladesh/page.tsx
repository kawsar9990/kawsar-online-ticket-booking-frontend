import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A First-Time Bus Traveler's Guide in Bangladesh | gokawsar",
  description:
    "Planning your first bus journey in Bangladesh? Read our complete step-by-step guide to booking tickets, choosing bus services, and traveling comfortably.",
  openGraph: {
    title: "A First-Time Bus Traveler's Guide in Bangladesh - gokawsar",
    description: "Learn how to plan, book, and enjoy a hassle-free bus journey across Bangladesh.",
    type: "article",
    publishedTime: "2026-09-10T00:00:00.000Z",
  },
};

export default function FirstTimeBusTravelerGuide() {
  return (
    <article className="max-w-3xl lg:pt-20 mx-auto px-4 py-8 text-gray-700 font-sans leading-relaxed">
      

      <div className="relative w-full aspect-[16/9] mb-8 rounded-lg overflow-hidden shadow-sm">
        <Image
          src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1788752245/Blog-Image-2_knsifq.png"
          alt="A First-Time Bus Traveler's Guide in Bangladesh"
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
            A First-Time Bus Travelers Guide in Bangladesh
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



      <section className="space-y-4 text-sm md:text-base text-gray-600 mb-8">
        <p>
          Traveling by bus is one of the most accessible and affordable ways to explore Bangladesh. Whether you are heading to Coxs Bazar for the beach, Sylhet for tea gardens, or Rajshahi for historic sights, long-distance buses connect almost every corner of the country.
        </p>
        <p>
          However, if you have never traveled by bus before, the experience can feel a bit overwhelming. Questions about booking tickets, choosing boarding points, finding luggage space, and on-board amenities are very common.
        </p>
        <p>
          This guide will walk you through everything you need to know to make your first bus journey in Bangladesh smooth, comfortable, and worry-free.
        </p>
      </section>

  
      <section className="mb-8 space-y-3">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 border-b pb-2">
          Why Choose Bus Travel in Bangladesh?
        </h2>
        <p className="text-sm text-gray-600">
          Bus travel offers exceptional flexibility compared to other transport options in Bangladesh. With hundreds of long-distance routes, frequent departures, and modern coaches, it is often the preferred choice for travel across the country.
        </p>
        
        <p className="text-sm font-semibold text-gray-800 pt-1">Key benefits of bus travel:</p>
        <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-1 pl-2">
          <li>Extensive network connecting remote locations</li>
          <li>Flexible timing with day and night coaches</li>
          <li>Multiple vehicle categories, including AC, Non-AC, Business Class, and Sleeper Coaches</li>
          <li>Frequent boarding points across major cities</li>
        </ul>
        <p className="text-xs text-gray-500 pt-1">
          If you are wondering whether to travel by train or bus, check out our guide on{" "}
          <Link href="#" className="text-rose-600 underline">
            Benefits and Disadvantages of Bus Travel in Bangladesh
          </Link>{" "}
          to help you decide.
        </p>
      </section>

      <section className="mb-8 space-y-3">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 border-b pb-2">
          Step 1: Book Your Ticket in Advance
        </h2>
        <p className="text-sm text-gray-600">
          One of the biggest mistakes first-time travelers make is leaving ticket booking for the last minute.
        </p>
        <p className="text-sm text-gray-600">
          Popular routes fill up quickly, especially during weekends, public holidays, Ramadan, and Eid festivals.
        </p>
        <p className="text-sm font-semibold text-gray-800 pt-1">Booking online allows you to:</p>
        <ul className="list-disc list-inside text-xs md:text-sm text-gray-600 space-y-1 pl-2">
          <li>Compare seat layouts and schedule</li>
          <li>Select your preferred seats</li>
          <li>Avoid long queues at bus counters</li>
          <li>Receive instant digital tickets via e-mail</li>
        </ul>
        <p className="text-xs text-gray-500 pt-1">
          If you need help with booking, check out our step-by-step guide on{" "}
          <Link href="#" className="text-rose-600 underline">
            How to Book a Bus Ticket Online in Bangladesh
          </Link>.
        </p>
      </section>

      <section className="mb-8 space-y-3">
        <h2 className="text-lg md:text-xl font-bold text-gray-900 border-b pb-2">
          Step 2: Choose the Right Bus Service
        </h2>
        <p className="text-sm text-gray-600">
          Buses in Bangladesh range from basic Non-AC options to luxurious Multi-Axle Volvo or Scania coaches and comfortable Sleeper berths. Choose according to your budget and distance.
        </p>
      </section>




<section className="bg-rose-50/60 p-6 md:p-8 rounded-2xl border border-rose-100 mb-12 space-y-6">
        <h2 className="text-2xl md:text-3xl font-black text-rose-950 border-b border-rose-200 pb-3">
          Key Takeaways At A Glance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs md:text-sm">
          <div className="bg-white p-5 rounded-xl border border-rose-100 shadow-sm space-y-2">
            <strong className="text-rose-950 font-bold text-base block">1. Operator-Dependent Rules</strong>
            <p className="text-gray-600">
              Cancellation cut-off times and deduction percentages vary per bus operator. Always verify operator rules displayed during checkout or on your ticket confirmation slip.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-rose-100 shadow-sm space-y-2">
            <strong className="text-rose-950 font-bold text-base block">2. Self-Service Digital Cancellation</strong>
            <p className="text-gray-600">
              Initiate instant cancellations directly under <strong>My Bookings</strong> inside your gokawsar account dashboard without needing to visit physical counters.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-rose-100 shadow-sm space-y-2">
            <strong className="text-rose-950 font-bold text-base block">3. Non-Refundable Components</strong>
            <p className="text-gray-600">
              Convenience fees, payment gateway service charges, and promotional voucher discounts are strictly non-refundable during ticket cancellation.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-rose-100 shadow-sm space-y-2">
            <strong className="text-rose-950 font-bold text-base block">4. Full 100% Refund Guarantee</strong>
            <p className="text-gray-600">
              If a bus trip is canceled by the operator due to mechanical malfunction, extreme weather, or road blockades, you receive a full 100% refund of the base fare.
            </p>
          </div>
        </div>
      </section>



<section className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6 mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 border-b border-gray-100 pb-3">
          Standard Cancellation Timelines & Deduction Matrix
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs md:text-sm text-gray-700 border-collapse">
            <thead>
              <tr className="bg-rose-900 text-white border-b border-rose-950">
                <th className="p-3 font-bold">Time Frame Before Bus Departure</th>
                <th className="p-3 font-bold">Estimated Refund Fare</th>
                <th className="p-3 font-bold">Applicable Deductions & Policy Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="p-3 font-medium text-gray-900">More than 24 hours prior</td>
                <td className="p-3 font-bold text-emerald-700">80% - 90% Refund</td>
                <td className="p-3 text-gray-600">Standard gokawsar service fee + 10-20% bus operator cancellation charge.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-gray-900">12 hours to 24 hours prior</td>
                <td className="p-3 font-bold text-amber-700">50% - 70% Refund</td>
                <td className="p-3 text-gray-600">Mid-tier operator cancellation penalty applied.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-gray-900">4 hours to 12 hours prior</td>
                <td className="p-3 font-bold text-orange-700">25% - 50% Refund</td>
                <td className="p-3 text-gray-600">Late cancellation penalty. Seat availability released back to counter.</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-gray-900">Less than 4 hours / After Departure</td>
                <td className="p-3 font-bold text-rose-700">0% Refund (No-Show)</td>
                <td className="p-3 text-gray-600">Strict non-refundable policy applies. Ticket marked as No-Show.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
 


      <section className="space-y-8 mb-16">
        <div className="border-b border-gray-200 pb-4">
          <h2 className="text-2xl md:text-4xl font-black text-gray-900">
            Step-by-Step Guide: How to Request a Refund on gokawsar (Step 1 to Step 7)
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            Follow this complete 7-step process to cancel your ticket and track your refund status directly from your device.
          </p>
        </div>

        <div className="space-y-4 text-xs md:text-sm">
          
  
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-start gap-4">
            <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-rose-600 text-white font-black text-lg">
              1
            </span>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-gray-900">Step 1: Log in to Your gokawsar Account</h3>
              <p className="text-gray-600 leading-relaxed">
                Open the <strong>gokawsar</strong> website or mobile web portal. Log in using the registered mobile number or email address that was used when purchasing your bus ticket.
              </p>
            </div>
          </div>


          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-start gap-4">
            <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-rose-600 text-white font-black text-lg">
              2
            </span>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-gray-900">Step 2: Navigate to My Bookings Dashboard</h3>
              <p className="text-gray-600 leading-relaxed">
                Click on your profile avatar on the top right navigation bar and select <strong>My Bookings</strong>. Here you will see all active, completed, and canceled ticket history.
              </p>
            </div>
          </div>


          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-start gap-4">
            <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-rose-600 text-white font-black text-lg">
              3
            </span>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-gray-900">Step 3: Select Active Ticket & Click Cancel Ticket</h3>
              <p className="text-gray-600 leading-relaxed">
                Locate the upcoming bus ticket you wish to cancel. Click on the <strong>View Details</strong> or <strong>Cancel Ticket</strong> button next to the PNR/Ticket ID.
              </p>
            </div>
          </div>

  
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-start gap-4">
            <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-rose-600 text-white font-black text-lg">
              4
            </span>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-gray-900">Step 4: Review Refund Breakdown & Operator Charges</h3>
              <p className="text-gray-600 leading-relaxed">
                The portal will automatically calculate and show a breakdown of your base ticket price, operator deduction penalty, convenience charges, and the exact <strong>Net Refund Amount</strong> you will receive.
              </p>
            </div>
          </div>


          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-start gap-4">
            <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-rose-600 text-white font-black text-lg">
              5
            </span>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-gray-900">Step 5: Select Reason & Submit Cancellation Request</h3>
              <p className="text-gray-600 leading-relaxed">
                Choose a cancellation reason from the drop-down menu (e.g., schedule change, emergency, personal reason) and click <strong>Confirm Cancellation</strong>. An OTP may be sent to your registered mobile for verification.
              </p>
            </div>
          </div>

  
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-start gap-4">
            <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-rose-600 text-white font-black text-lg">
              6
            </span>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-gray-900">Step 6: Receive Instant Cancellation Confirmation</h3>
              <p className="text-gray-600 leading-relaxed">
                Upon confirmation, your ticket status changes to <strong>Cancelled</strong> instantly. An SMS and email notification containing your Refund Ticket Reference Code will be sent immediately to your phone.
              </p>
            </div>
          </div>

      
          <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex flex-col md:flex-row items-start gap-4">
            <span className="w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-rose-600 text-white font-black text-lg">
              7
            </span>
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-gray-900">Step 7: Track Disbursement to Your Payment Method</h3>
              <p className="text-gray-600 leading-relaxed">
                Approved refund amounts are automatically disbursed back to your original source payment method (bKash, Nagad, Rocket, or Credit/Debit Card) within <strong>3 to 7 working days</strong> depending on bank settlement cycles.
              </p>
            </div>
          </div>

        </div>
      </section>



<section className="bg-amber-50/70 p-6 md:p-8 rounded-2xl border border-amber-200 mb-12 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-amber-950 border-b border-amber-200 pb-2">
          Special Conditions & Important Policy Notes
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-amber-900">
          <li><strong>Festival & Holiday Bookings:</strong> Tickets purchased for Eid holidays, Puja, or major long weekends may carry strict non-refundable or 100% deduction policies imposed by bus operators.</li>
          <li><strong>Discounted & Promotional Tickets:</strong> Special discounted tickets or promo code purchases follow customized refund terms and may not qualify for cash refunds.</li>
          <li><strong>Partial Seat Cancellation:</strong> If you booked 4 seats and wish to cancel 2, you can perform partial seat cancellation under My Bookings before the cut-off time.</li>
        </ul>
      </section>

  
      <section className="bg-rose-950 text-white p-6 md:p-8 rounded-2xl mb-12 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          Need Instant Assistance with Your Refund?
        </h2>
        <p className="text-xs md:text-sm text-rose-100 leading-relaxed">
          If you encounter any issues while cancelling your ticket or if your refund is delayed beyond 7 working days, reach out to **gokawsar** customer care team anytime with your Ticket ID.
        </p>
      </section>



      <div className="pt-6 border-t border-gray-200 flex justify-between items-center text-xs font-semibold text-rose-600">
        <Link href="/blog" className="hover:underline">
          ‹ Back to all blogs
        </Link>
      </div>

    </article>
  );
}