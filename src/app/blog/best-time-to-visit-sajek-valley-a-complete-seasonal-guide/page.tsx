import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";


interface QuickGuideItem {
  season: string;
  bestMonths: string;
}

interface SeasonSection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  expectations: string[];
  advantages: string[];
  disadvantages: string[];
  verdict: string;
}

interface MonthlyGuideItem {
  month: string;
  description: string;
  bestFor: string;
}

interface PackingItem {
  category: string;
  items: string[];
}

interface FAQItem {
  question: string;
  answer: string;
}

export const metadata: Metadata = {
  title: "Best Time to Visit Sajek Valley: A Complete Seasonal Guide | gokawsar",
  description:
    "Planning a trip to Sajek Valley? Learn about the weather, cloud views, road conditions, and seasonal tips for Autumn, Winter, Monsoon, and Spring.",
  openGraph: {
    title: "Best Time to Visit Sajek Valley: A Complete Seasonal Guide | gokawsar",
    description:
      "A complete month-by-month and seasonal guide to visiting Sajek Valley. Author: Kawsar Ahmed.",
    type: "article",
    publishedTime: "2026-09-10T00:00:00.000Z",
    authors: ["Kawsar Ahmed"],
  },
};

const quickGuideData: QuickGuideItem[] = [
  { season: "Peak Cloud Season", bestMonths: "October to November" },
  { season: "Cool & Pleasant Weather", bestMonths: "December to February" },
  { season: "Quiet Season & Lower Budget", bestMonths: "March to May" },
  { season: "Deep Green & Heavy Cloudscape", bestMonths: "June to August" },
  { season: "Fresh Post-Monsoon Views", bestMonths: "September" },
];

const seasonalData: SeasonSection[] = [
  {
    id: "autumn",
    title: "Sajek in Autumn: September to November",
    subtitle: "Best for Green Hills, Clouds and Comfortable Travel",
    description:
      "September to November is one of the most attractive periods in Sajek. The heavy monsoon rain gradually decreases while hills stay fresh and green. October is often considered the best month for travellers wanting the classic Sajek cloud experience.",
    expectations: [
      "Green hills after the monsoon",
      "Morning mist and floating clouds",
      "Better road conditions than peak monsoon",
      "Comfortable mornings and evenings",
      "Growing crowds as winter approaches",
    ],
    advantages: [
      "Offers great weather variety with cloud coverage and clear sunsets",
      "Road travel is generally safer and easier",
      "Outdoor activities become much more comfortable",
    ],
    disadvantages: [
      "October can still receive occasional sudden rain showers",
      "November weekends can get crowded, requiring early resort booking",
    ],
    verdict: "October and November are the overall best months to visit Sajek for most people.",
  },
  {
    id: "winter",
    title: "Sajek in Winter: December to February",
    subtitle: "Best for Clear Mountain Views and Cool Weather",
    description:
      "Mornings and evenings feel cool and crisp during winter. Rainfall is at its lowest, making December and January the driest months of the year for Rangamati and Sajek.",
    expectations: [
      "Cool mornings and chilly nights",
      "Lower chance of rain",
      "Clearer distant mountain views",
      "Busy resorts and viewpoints",
      "Less intense greenery compared to monsoon",
    ],
    advantages: [
      "Easier travel for families with children and elderly travelers",
      "Dry roads reduce travel risks",
      "Pleasant daytime walking conditions without intense heat",
    ],
    disadvantages: [
      "Peak travel months lead to higher resort and jeep prices",
      "Popular viewpoints can get crowded during sunrise and sunset",
      "Nights feel colder than expected; warm clothing is required",
    ],
    verdict: "Choose December to February if comfortable weather matters more to you than maximum greenery.",
  },
  {
    id: "monsoon",
    title: "Sajek During the Monsoon: June to August",
    subtitle: "Best for Clouds, Rain, and Deep Green Scenery",
    description:
      "Monsoon transforms Sajek into an intensely green paradise with dramatic clouds hovering directly over cottages and hills. However, heavy rains make road travel challenging.",
    expectations: [
      "Frequent heavy rain",
      "Thick clouds and dense fog",
      "Deep green hills and roaring waterfalls",
      "Limited visibility at times",
    ],
    advantages: [
      "Breathtaking cloud formation and lush rainforest atmosphere",
      "Lower resort room rates compared to winter peak",
    ],
    disadvantages: [
      "Slippery mountain roads and potential landslide risks",
      "Delayed transport or sudden travel restrictions",
      "Outdoor walking can be difficult due to mud and rain",
    ],
    verdict: "Choose June to August only if you are comfortable with rain, flexible plans, and road delays.",
  },
];

const monthlyGuideData: MonthlyGuideItem[] = [
  { month: "January", description: "Cool mornings, dry weather, clear views. Peak winter tourist season.", bestFor: "Families, couples, comfortable sightseeing" },
  { month: "February", description: "Pleasant weather with rising daytime temperatures towards late month.", bestFor: "Clear views and relaxed outdoor trips" },
  { month: "March", description: "Warmer days begin, but mornings stay pleasant. Fewer crowds.", bestFor: "Short budget trips before summer heat" },
  { month: "April", description: "Hotter days with occasional sudden afternoon thunderstorms.", bestFor: "Budget travellers comfortable with warm days" },
  { month: "May", description: "Humidity rises along with pre-monsoon shower activity.", bestFor: "Flexible travellers seeking quieter spots" },
  { month: "June", description: "Monsoon starts; clouds and greenery increase rapidly.", bestFor: "Monsoon lovers and nature photographers" },
  { month: "July", description: "Wettest month of the year with heavy rainfall and cloud cover.", bestFor: "Experienced travellers prepared for rain" },
  { month: "August", description: "Rain continues; dramatic cloudscapes on clear breaks.", bestFor: "Cloud views subject to safe weather" },
];

const packingData: PackingItem[] = [
  {
    category: "Winter Packing",
    items: ["Light jacket or sweater", "Comfortable walking shoes", "Lip balm & moisturizer", "Warm cap or scarf", "Basic medicine"],
  },
  {
    category: "Monsoon Packing",
    items: ["Raincoat / Poncho", "Waterproof footwear", "Umbrella", "Dry bags for electronics", "Extra clothes & Insect repellent"],
  },
  {
    category: "Summer Packing",
    items: ["Light cotton clothing", "Sunscreen & Sunglasses", "Cap/Hat", "Reusable water bottle", "Electrolyte packets"],
  },
];

const faqData: FAQItem[] = [
  {
    question: "Is October a good time to visit Sajek?",
    answer: "Yes, October is widely considered one of the best months due to vibrant green hills, frequent morning clouds, and comfortable temperatures.",
  },
  {
    question: "Is December a good time to visit Sajek?",
    answer: "December offers excellent dry, cool weather and clear views, though resort prices and crowd levels are higher.",
  },
  {
    question: "Which month has the most clouds in Sajek?",
    answer: "June through October usually offer the highest chance of seeing thick clouds floating through the valley.",
  },
  {
    question: "Is Sajek safe during the rainy season?",
    answer: "Sajek is accessible, but heavy rains can cause landslides or slippery road conditions. Always check official weather warnings before travelling.",
  },
  {
    question: "Should I book my transport early?",
    answer: "Yes, booking bus tickets to Khagrachari and local Jeeps (Chander Gari) via gokawsar in advance is recommended during peak months.",
  },
];

export default function SajekSeasonalGuidePage() {
  return (
    <article className="max-w-4xl mx-auto lg:pt-20 px-4 py-8 text-gray-700 font-sans leading-relaxed">

      <div className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden bg-gray-200 mb-8 border border-gray-100 shadow-md">
        <Image
          src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1788751568/Blog-img-4-Visit-Sajek-Valley_pegdwt.png"
          alt="Sajek Valley Cloudscapes"
          fill
          className="object-cover"
          priority
        />
      </div>


      <header className="border-b border-gray-200 pb-6 mb-8">
        <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
          Seasonal Travel Guide
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4 leading-tight">
          Best Time to Visit Sajek Valley: A Complete Seasonal Guide
        </h1>

        <div className="flex items-center gap-4 mt-4">
          <div className="relative w-11 h-11 rounded-full overflow-hidden shadow-sm">
            <img
              src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1788782828/8d9b30f492fcd1d04890e6abebb75e9946019df0bb25c2aa6b464e2856675025_yduer1.jpg"
              alt="Kawsar Ahmed"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-sm">
            <p className="font-bold text-gray-900">Kawsar Ahmed</p>
            <p className="text-xs text-gray-500">September 10, 2026 </p>
          </div>
        </div>
      </header>

      <section className="space-y-4 text-lg text-gray-600 mb-10">
        <p>
          Sajek Valley is located among the hills of the Kasalong range in Rangamati District. Sitting at an elevation of around 450 meters, it is widely known for its scenic high viewpoints and cloud-covered landscapes.
        </p>
        <p>
          Because of its hilltop location, weather conditions can change quickly. Understanding the seasons will help you choose the ideal time to book your trip via <strong className="text-red-600">gokawsar</strong>.
        </p>
      </section>


      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-red-600 pl-3">
          Quick Answer: When Is the Best Time to Visit Sajek?
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-900 border-b border-gray-200">
                <th className="p-3 font-bold">Travel Preference</th>
                <th className="p-3 font-bold">Best Months</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              {quickGuideData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50">
                  <td className="p-3 font-medium text-gray-900">{item.season}</td>
                  <td className="p-3 text-red-600 font-semibold">{item.bestMonths}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>


      <section className="space-y-10 my-12">
        {seasonalData.map((season) => (
          <div key={season.id} className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm space-y-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">{season.title}</h2>
              <p className="text-xs font-semibold text-red-600 uppercase tracking-wide mt-1">{season.subtitle}</p>
            </div>
            <p className="text-gray-600 text-sm">{season.description}</p>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-2">
              <h3 className="font-bold text-gray-900 text-xs uppercase">What to Expect:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                {season.expectations.map((exp, i) => (
                  <li key={i}>{exp}</li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-4 text-xs pt-2">
              <div className="p-3 bg-emerald-50/60 border border-emerald-100 rounded-lg">
                <strong className="text-emerald-900 block mb-1">Advantages:</strong>
                <ul className="list-disc pl-4 space-y-1 text-gray-700">
                  {season.advantages.map((adv, i) => (
                    <li key={i}>{adv}</li>
                  ))}
                </ul>
              </div>

              <div className="p-3 bg-amber-50/60 border border-amber-100 rounded-lg">
                <strong className="text-amber-900 block mb-1">Disadvantages:</strong>
                <ul className="list-disc pl-4 space-y-1 text-gray-700">
                  {season.disadvantages.map((dis, i) => (
                    <li key={i}>{dis}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="p-3 bg-gray-100 rounded-lg text-xs font-semibold text-gray-800">
              Verdict: {season.verdict}
            </div>
          </div>
        ))}
      </section>

   
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-l-4 border-red-600 pl-3">
          Month-by-Month Sajek Travel Guide
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {monthlyGuideData.map((m, idx) => (
            <div key={idx} className="p-4 border border-gray-200 rounded-xl bg-white shadow-xs space-y-2">
              <h3 className="font-bold text-lg text-gray-900">{m.month}</h3>
              <p className="text-xs text-gray-600">{m.description}</p>
              <span className="inline-block text-xs text-red-600 font-semibold bg-red-50 px-2 py-0.5 rounded">
                Best for: {m.bestFor}
              </span>
            </div>
          ))}
        </div>
      </section>

    
      <section className="my-12 bg-slate-900 text-white p-6 rounded-2xl shadow-lg space-y-6">
        <h2 className="text-2xl font-bold text-white">What to Pack for Sajek</h2>
        <div className="grid md:grid-cols-3 gap-6 text-sm">
          {packingData.map((pkg, idx) => (
            <div key={idx} className="space-y-2">
              <h3 className="font-bold text-red-400 text-base">{pkg.category}</h3>
              <ul className="list-disc pl-4 space-y-1 text-gray-300 text-xs">
                {pkg.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>


      <section className="my-12 space-y-4">
        <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-3">
          Frequently Asked Questions
        </h2>
        <div className="space-y-3">
          {faqData.map((faq, idx) => (
            <div key={idx} className="p-4 border border-gray-200 rounded-xl bg-white space-y-1">
              <h3 className="font-bold text-gray-900 text-sm">{faq.question}</h3>
              <p className="text-xs text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

  
      <div className="pt-6 border-t border-gray-200 flex justify-between items-center text-xs font-bold text-red-600">
        <Link href="/blog" className="hover:underline">
          ‹ Back to all blogs
        </Link>
        <Link href="/bus" className="hover:underline">
          Book Transport on gokawsar ›
        </Link>
      </div>
    </article>
  );
}