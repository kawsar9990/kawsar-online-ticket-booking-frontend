import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface QuickGuideItem {
  beach: string;
  bestFor: string;
  suggestedTrip: string;
}

interface BeachSpot {
  id: string;
  name: string;
  description: string;
  highlights: string[];
  bestFor: string;
  travelTip: string;
}

interface ItineraryDay {
  day: string;
  title: string;
  activities: string;
}

interface SafetyTipGroup {
  category: string;
  points: string[];
}

export const metadata: Metadata = {
  title: "10 Best Beaches in Cox's Bazar for Your Next Trip | gokawsar",
  description:
    "Explore the top 10 beaches in Cox's Bazar including Laboni, Sugandha, Inani, Patuartek, and Sonadia Island. Get travel tips, itineraries, and bus routes.",
  openGraph: {
    title: "10 Best Beaches in Cox's Bazar for Your Next Trip | gokawsar",
    description:
      "A complete guide to Cox's Bazar beaches, itinerary, and travel advice. Written by Kawsar Ahmed.",
    type: "article",
    publishedTime: "2026-09-10T00:00:00.000Z",
    authors: ["Kawsar Ahmed"],
  },
};

const quickGuideData: QuickGuideItem[] = [
  { beach: "Laboni Beach", bestFor: "Central location, local shops & sunset walks", suggestedTrip: "Half Day" },
  { beach: "Sugandha Beach", bestFor: "Street food, lively crowd & beach chairs", suggestedTrip: "Half Day" },
  { beach: "Kolatoli Beach", bestFor: "Hotel proximity, morning walks & easy access", suggestedTrip: "Quick Visit" },
  { beach: "Darianagar Beach", bestFor: "Coastal views, hill backdrop & open space", suggestedTrip: "Short Stop" },
  { beach: "Himchari Beach", bestFor: "Hills, forest scenery & hilltop viewpoints", suggestedTrip: "Half Day" },
  { beach: "Inani Beach", bestFor: "Coral stones, clear water & serene atmosphere", suggestedTrip: "Half Day" },
  { beach: "Patuartek Beach", bestFor: "Quiet rocky shores & Marine Drive views", suggestedTrip: "Short Stop" },
  { beach: "Sonapara Beach", bestFor: "Offbeat coastal walk & peaceful environment", suggestedTrip: "Short Stop" },
  { beach: "Teknaf Beach", bestFor: "Coastal road trip & wild beach landscapes", suggestedTrip: "Full Day" },
  { beach: "Sonadia Island Beach", bestFor: "Dry fish culture, mangrove & island adventures", suggestedTrip: "Full Day" },
];

const beachesData: BeachSpot[] = [
  {
    id: "laboni",
    name: "1. Laboni Beach",
    description: "Laboni Beach is one of the most popular and accessible central beaches in Cox's Bazar. It is well-lit at night and packed with local handicraft stalls and beachside seating.",
    highlights: ["Night beach walks under illuminated areas", "Handicraft and shell market shopping", "Seating chairs with umbrellas"],
    bestFor: "First-time visitors, families, and evening walks near the main city.",
    travelTip: "Visit during late afternoon to enjoy the sunset and local street shopping without extreme heat.",
  },
  {
    id: "sugandha",
    name: "2. Sugandha Beach",
    description: "Situated right next to Laboni, Sugandha Beach is famous for its lively atmosphere, street food vendors, and proximity to major hotels.",
    highlights: ["Freshly fried seafood stalls", "Beach horse rides and quad biking", "Vibrant evening crowd"],
    bestFor: "Food lovers, active crowds, and travellers staying nearby.",
    travelTip: "Always confirm prices beforehand for beach chairs, photography, and horse rides.",
  },
  {
    id: "kolatoli",
    name: "3. Kolatoli Beach",
    description: "Kolatoli is the primary entry point to Cox's Bazar beach for travellers arriving via bus. It is surrounded by hotels, restaurants, and tour desks.",
    highlights: ["Convenient beach access", "Early morning fisherman activity", "Abundant dining choices"],
    bestFor: "Quick beach visits and travellers seeking absolute convenience.",
    travelTip: "Walking along the shore from Kolatoli to Sugandha is often faster than taking local rickshaws during rush hours.",
  },
  {
    id: "darianagar",
    name: "4. Darianagar Beach",
    description: "Located along Marine Drive towards Himchari, Darianagar offers a unique combination of ocean views and lush green hills in a quieter setting.",
    highlights: ["Panoramic hill and ocean views", "Paragliding and adventure sports (seasonal)", "Less crowded shoreline"],
    bestFor: "Photography enthusiasts and short stops along Marine Drive.",
    travelTip: "Double-check safety arrangements before booking any private adventure activities.",
  },
  {
    id: "himchari",
    name: "5. Himchari Beach",
    description: "Himchari Beach sits right beside Himchari National Park. It is famous for its hilltop viewpoint overlooking the Bay of Bengal.",
    highlights: ["Himchari hill climb for panoramic sea view", "Seasonal natural waterfalls", "Quiet pine tree groves"],
    bestFor: "Nature lovers, hill-and-sea combined sightseeing.",
    travelTip: "Wear comfortable walking shoes if you plan to climb the stairs to the hilltop viewpoint.",
  },
  {
    id: "inani",
    name: "6. Inani Beach",
    description: "Famous for its unique sharp coral rocks and golden sands, Inani Beach offers crystal-clear water and a tranquil escape from city crowds.",
    highlights: ["Exploring coral rock formations during low tide", "Reflective wet sand sunsets", "Picturesque Marine Drive route"],
    bestFor: "Couples, photographers, and travellers seeking peace.",
    travelTip: "Wear sturdy sandals or footwear with good grip to avoid slipping on sharp coral stones.",
  },
  {
    id: "patuartek",
    name: "7. Patuartek Beach",
    description: "Further down Marine Drive beyond Inani, Patuartek features open coastlines, green hills, and scattered stone formations with minimal commercial activity.",
    highlights: ["Uncluttered coastal views", "Relaxing sound of ocean waves", "Great road trip stopover"],
    bestFor: "Road trips, quiet reflection, and offbeat travel.",
    travelTip: "Carry water and light snacks, as commercial shops are limited in this section.",
  },
  {
    id: "sonapara",
    name: "8. Sonapara Beach",
    description: "Sonapara is a lesser-known beach spot along Marine Drive that offers an untouched environment with very few tourists.",
    highlights: ["Open wide beaches", "Minimal commercial structures", "Peaceful nature walk"],
    bestFor: "Escaping heavy crowds and enjoying quiet coastal nature.",
    travelTip: "Visit during daylight hours and travel in groups when exploring offbeat locations.",
  },
  {
    id: "teknaf",
    name: "9. Teknaf Beach",
    description: "Located at the southernmost tip of mainland Bangladesh, Teknaf Beach features wilder waves, coastal vegetation, and nearby mangrove ecosystems.",
    highlights: ["Dramatic coastal drives", "Proximity to Teknaf nature park", "Quiet mangrove borders"],
    bestFor: "Long coastal road trips and adventure seekers.",
    travelTip: "Hire a reliable vehicle for the entire day and start early to ensure a comfortable return drive.",
  },
  {
    id: "sonadia",
    name: "10. Sonadia Island Beach",
    description: "Sonadia is a detached sanctuary island surrounded by sea on three sides, renowned for migratory birds, red crabs, and traditional dry-fish production.",
    highlights: ["Spotting red crabs and migratory birds", "Traditional dry-fish processing yards", "Pristine untouched beach"],
    bestFor: "Wildlife enthusiasts, island adventurers, and nature lovers.",
    travelTip: "Wear life jackets during boat trips and respect local wildlife and eco-sensitive zones.",
  },
];

const itineraryData: ItineraryDay[] = [
  { day: "Day 1", title: "Central Cox's Bazar Beaches", activities: "Check in at hotel, visit Kolatoli & Sugandha Beach in the afternoon. Enjoy local seafood and stroll along Laboni Beach in the evening." },
  { day: "Day 2", title: "Marine Drive & Coral Beaches", activities: "Take a Jeep ride down Marine Drive. Stop at Darianagar, climb Himchari viewpoint, spend low tide at Inani Beach, and catch sunset at Patuartek." },
  { day: "Day 3", title: "Coastal Exploration or Island Adventure", activities: "Embark on a day trip south toward Teknaf Beach or arrange a guided boat journey to Sonadia Island before heading back." },
];

const safetyTips: SafetyTipGroup[] = [
  {
    category: "Beach Safety",
    points: [
      "Always follow local red warning flags and lifeguard instructions.",
      "Avoid swimming during high tide or in deep water when waves are rough.",
      "Keep young children within arm's reach at all times near the water.",
      "Wear life jackets on all boat trips to Sonadia or Moheshkhali.",
    ],
  },
  {
    category: "Responsible Travel",
    points: [
      "Do not leave plastic bags, bottles, or food wrappers on the sand.",
      "Avoid disturbing red crabs, nesting sea turtles, or coral formations.",
      "Use reusable water bottles and support local eco-friendly businesses.",
    ],
  },
];

export default function CoxsBazarBeachesPage() {
  return (
    <article className="max-w-4xl lg:pt-20 mx-auto px-4 py-8 text-gray-700 font-sans leading-relaxed">


 <div className="relative w-full aspect-[16/9] mb-6 rounded-xl overflow-hidden">
    <Image
           src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1788752243/Blog-img-1-10-Best-Beaches-in-Coxs-Bazar_sbiago.png"
           alt="Best Monsoon Destinations in Bangladesh"
           fill
           priority
           className="object-cover"
         />
</div>


      <div className="mb-8 border-b border-gray-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
          Beach Destination Guide
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4 leading-tight">
          10 Best Beaches in Coxs Bazar for Your Next Trip
        </h1>

         <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="relative w-11 h-11 rounded-full overflow-hidden shadow-sm">
            <img
              src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1788782828/8d9b30f492fcd1d04890e6abebb75e9946019df0bb25c2aa6b464e2856675025_yduer1.jpg"
              alt="Kawsar Ahmed"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="text-sm">
            <p className="font-bold text-gray-900">Kawsar Ahmed</p>
            <p className="text-xs text-gray-500">September 10, 2026</p>
          </div>
        </div>
      </div>

      <section className="space-y-4 text-lg text-gray-600 mb-10">
        <p>
          Coxs Bazar is famous for having the worlds longest unbroken natural sandy sea beach, stretching over 120 kilometers. However, different sections of this vast coastline offer completely distinct experiences.
        </p>
        <p>
          Whether you want lively street food stalls, peaceful coral shores, or hill-backed views along Marine Drive, book your transport easily on <strong className="text-red-600">gokawsar</strong> and explore the best beach spots below.
        </p>
      </section>

      <section className="my-10">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 border-red-600 pl-3">
          Quick Guide to the Best Beaches in Coxs Bazar
        </h2>
        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="bg-gray-50 text-gray-900 border-b border-gray-200">
                <th className="p-3 font-bold">Beach</th>
                <th className="p-3 font-bold">Best For</th>
                <th className="p-3 font-bold">Suggested Trip</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-600">
              {quickGuideData.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50">
                  <td className="p-3 font-medium text-gray-900">{item.beach}</td>
                  <td className="p-3">{item.bestFor}</td>
                  <td className="p-3 text-red-600 font-semibold">{item.suggestedTrip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-10 my-12">
        {beachesData.map((beach) => (
          <div key={beach.id} className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-gray-900 border-b pb-2">{beach.name}</h2>
            <p className="text-gray-600 text-sm">{beach.description}</p>

            <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-2">
              <h3 className="font-bold text-gray-900 text-xs uppercase">Key Highlights:</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm text-gray-600">
                {beach.highlights.map((hl, i) => (
                  <li key={i}>{hl}</li>
                ))}
              </ul>
            </div>

            <div className="grid md:grid-cols-2 gap-3 text-xs pt-2">
              <div className="p-3 bg-red-50/60 border border-red-100 rounded-lg">
                <strong className="text-red-900 block mb-1">Best For:</strong>
                <p className="text-gray-700">{beach.bestFor}</p>
              </div>
              <div className="p-3 bg-blue-50/60 border border-blue-100 rounded-lg">
                <strong className="text-blue-900 block mb-1">Travel Tip:</strong>
                <p className="text-gray-700">{beach.travelTip}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="my-12 p-6 bg-slate-900 text-white rounded-2xl shadow-xl space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">A Simple 3-Day Beach-Hopping Plan</h2>
        <div className="space-y-4 text-sm text-gray-300">
          {itineraryData.map((item, idx) => (
            <div key={idx} className="border-l-2 border-red-500 pl-4 py-1">
              <strong className="text-white text-base block">{item.day}: {item.title}</strong>
              <p className="text-xs text-gray-400 mt-1">{item.activities}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-12 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-3">
          Safety & Responsible Travel Guidelines
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {safetyTips.map((group, idx) => (
            <div key={idx} className="p-5 border border-gray-200 rounded-xl bg-white space-y-3 shadow-xs">
              <h3 className="font-bold text-gray-900 text-base">{group.category}</h3>
              <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                {group.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <div className="pt-6 border-t border-gray-200 flex justify-between items-center text-xs font-bold text-red-600">
        <Link href="/blog" className="hover:underline">
          ‹ Back to all blogs
        </Link>
      </div>
    </article>
  );
}