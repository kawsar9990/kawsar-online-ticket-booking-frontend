import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bus Ticket Refunds & Cancellations: What You Should Know | gokawsar",
  description:
    "Learn all about gokawsar bus ticket cancellation policy, refund calculation, operator rules, and step-by-step instructions for quick ticket refunds.",
  openGraph: {
    title: "Bus Ticket Refunds & Cancellations: What You Should Know - gokawsar",
    description:
      "Need to cancel your bus ticket or request a refund on gokawsar? Check out our complete refund guide, cancellation charges, and process details.",
    type: "article",
    publishedTime: "2026-09-10T00:00:00.000Z",
  },
};

export default function BusTicketRefundsBlog() {
  return (
    <article className="max-w-5xl lg:pt-20 mx-auto px-4 md:px-8 py-10 text-gray-800 font-sans leading-relaxed">
      

      <div className="relative w-full aspect-[21/9] mb-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100">
        <Image
          src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1788761501/Gemini_Generated_Image_xfpcc7xfpcc7xfpc_y3gqyu.jpg"
          alt="Digital Transformation of Bus Travel"
          fill
          priority
          className="object-cover"
        />
      </div>


      <header className="border-b border-gray-200 pb-8 mb-10">
        <span className="text-xs font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-3 py-1 rounded-full border border-rose-200">
          Customer Policy & Guide
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-gray-900 mt-4 mb-4 leading-tight">
          Bus Ticket Refunds &amp; Cancellations: What You Should Know
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
      </header>


      <section className="space-y-4 text-base md:text-lg text-gray-700 mb-12">
        <p>
          Plans change, journeys get delayed, and emergencies happen. At **<span className="notranslate"> GoKawsar </span>**, we understand that flexibility is key to a smooth travel experience. Whether you need to cancel a bus ticket due to a schedule shift or understand how refund processing works across different bus operators, this guide details everything you need to know.
        </p>
        <p>
          While **<span className="notranslate"> GoKawsar </span>** provides a unified platform for instant digital ticketing and automated cancellation requests, specific refund eligibility, cut-off timings, and service charges depend on individual bus operator policies.
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
              Cancellation cut-off times and deduction percentages vary per operator. Always check operator rules shown during checkout on <span className="notranslate"> GoKawsar </span>.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-rose-100 shadow-sm space-y-2">
            <strong className="text-rose-950 font-bold text-base block">2. Self-Service Cancellation</strong>
            <p className="text-gray-600">
              Initiate cancellations quickly under <strong>My Bookings</strong> on the <span className="notranslate"> GoKawsar </span> portal or contact customer support for fast manual assistance.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-rose-100 shadow-sm space-y-2">
            <strong className="text-rose-950 font-bold text-base block">3. Service & Gateway Fees</strong>
            <p className="text-gray-600">
              Standard cancellation charges apply. Convenience fees, payment gateway charges, and promotional voucher discounts are strictly non-refundable.
            </p>
          </div>

          <div className="bg-white p-5 rounded-xl border border-rose-100 shadow-sm space-y-2">
            <strong className="text-rose-950 font-bold text-base block">4. Full Refund for Operator Trip Trip Cancellation</strong>
            <p className="text-gray-600">
              If the bus operator cancels the coach schedule due to technical issues, weather, or road hazards, you receive a 100% refund of the ticket fare.
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
                <th className="p-3 font-bold">Time Before Bus Departure</th>
                <th className="p-3 font-bold">Estimated Refund Percentage</th>
                <th className="p-3 font-bold">Applicable Deductions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr>
                <td className="p-3 font-medium text-gray-900">More than 24 hours</td>
                <td className="p-3 font-bold text-emerald-700">Up to 80% - 90% Refund</td>
                <td className="p-3 text-gray-600">Standard service fee + 10-20% operator fee</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-gray-900">Between 12 to 24 hours</td>
                <td className="p-3 font-bold text-amber-700">50% - 70% Refund</td>
                <td className="p-3 text-gray-600">Operator late-cancellation fee</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-gray-900">Between 4 to 12 hours</td>
                <td className="p-3 font-bold text-orange-700">25% - 50% Refund</td>
                <td className="p-3 text-gray-600">High cancellation penalty applies</td>
              </tr>
              <tr>
                <td className="p-3 font-medium text-gray-900">Less than 4 hours / After Departure</td>
                <td className="p-3 font-bold text-rose-700">0% Refund (No-Show)</td>
                <td className="p-3 text-gray-600">Non-refundable ticket status</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

   
      <section className="space-y-6 mb-12">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 border-b border-gray-200 pb-3">
          How to Request a Refund on <span className="notranslate"> GoKawsar </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs md:text-sm">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-rose-600 text-white font-bold text-xs">1</span>
            <h3 className="font-bold text-gray-900">Go to My Bookings</h3>
            <p className="text-gray-600">Log in to your <span className="notranslate"> GoKawsar </span> account and open your active ticket trip under dashboard history.</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-rose-600 text-white font-bold text-xs">2</span>
            <h3 className="font-bold text-gray-900">Click Cancel Ticket</h3>
            <p className="text-gray-600">Press the Cancel Ticket button to review applicable operator deductions and net refund sum.</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-rose-600 text-white font-bold text-xs">3</span>
            <h3 className="font-bold text-gray-900">Confirm Request</h3>
            <p className="text-gray-600">Submit cancellation reason. An automated confirmation SMS and email will be sent immediately.</p>
          </div>

          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-2">
            <span className="w-7 h-7 flex items-center justify-center rounded-full bg-rose-600 text-white font-bold text-xs">4</span>
            <h3 className="font-bold text-gray-900">Receive Payment</h3>
            <p className="text-gray-600">Approved refunds are disbursed to your original payment channel (bKash, Nagad, Card) within 3-7 days.</p>
          </div>
        </div>
      </section>


      <section className="bg-rose-950 text-white p-6 md:p-8 rounded-2xl mb-12 space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          Need Help With Your Existing Booking?
        </h2>
        <p className="text-xs md:text-sm text-rose-100 leading-relaxed">
          If you face any issues cancelling your ticket online or have queries about an ongoing refund request, contact our 24/7 <span className="notranslate"> GoKawsar </span> support helpline or manage your tickets directly in your user portal.
        </p>
      </section>


      <div className="pt-6 border-t border-gray-200 flex justify-between items-center text-xs md:text-sm font-bold text-rose-700">
        <Link href="/blog" className="hover:underline">
          ‹ Back to all blogs
        </Link>
      </div>

    </article>
  );
}