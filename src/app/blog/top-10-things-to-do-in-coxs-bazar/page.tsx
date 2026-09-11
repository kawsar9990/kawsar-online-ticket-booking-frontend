import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

interface Activity {
  id: string;
  number: string;
  title: string;
  description: string[];
  travelTip?: string;
  foodsToTry?: string[];
}

interface ItineraryDay {
  day: string;
  title: string;
  details: string;
}

export const metadata: Metadata = {
  title: "Top 10 Things to Do in Cox's Bazar | gokawsar",
  description:
    "Discover the top 10 activities and attractions in Cox's Bazar, including sea beaches, Marine Drive, Himchari, Inani, Maheshkhali, Ramu, local seafood, and Burmese Market.",
  openGraph: {
    title: "Top 10 Things to Do in Cox's Bazar",
    description:
      "Comprehensive travel guide for Cox's Bazar with key highlights, tips, itineraries, and local insights.",
    type: "article",
    publishedTime: "2026-09-10T00:00:00.000Z",
  },
};

const activitiesData: Activity[] = [
  {
    id: "beach",
    number: "1",
    title: "Spend Time at Cox's Bazar Sea Beach",
    description: [
      "Laboni Beach, Sugandha Beach, and Kolatoli Beach are the main beach points in Cox's Bazar. Each area offers a slightly different atmosphere, from bustling street markets to quiet spots along the shore.",
      "The main attraction is walking along the continuous shoreline, watching the sunset, or sitting under beach umbrellas while relaxing near the water.",
      "For a quieter experience, walking early in the morning is ideal. The crowd is lighter, the air is fresh, and the soft morning light is great for photography.",
      "You can also find options for casual beach games, local snacks, quad bike rides, and short horse rides in selected areas."
    ],
    travelTip: "Avoid leaving personal belongings unattended while swimming or walking along the shoreline."
  },
  {
    id: "marine-drive",
    number: "2",
    title: "Take a Drive Along Marine Drive",
    description: [
      "Marine Drive stretches along the coast from Cox's Bazar to Teknaf, offering stunning views of the ocean on one side and green hills on the other.",
      "The scenic drive passes through quiet fishing communities, coconut groves, and less crowded sections of the beach.",
      "You can rent an open-roof auto-rickshaw (Tomtom) or a private vehicle for a half-day or full-day ride to experience the fresh coastal breeze and scenic stops."
    ],
    travelTip: "Avoid unnecessary travel after dark, especially on unfamiliar sections of the road."
  },
  {
    id: "himchari",
    number: "3",
    title: "Visit Himchari National Park",
    description: [
      "Himchari National Park is located a short drive south of Cox's Bazar town, known for its green hills, coastal views, and peaceful natural surroundings.",
      "One of the main activities is climbing the stairs to the hilltop viewpoint. The climb may feel tiring, but the view from the top overlooking Marine Drive and the ocean is worth it.",
      "Himchari is also known for its waterfall, though the water volume depends on the season (most visible during or after the rainy season)."
    ],
    travelTip: "Visit in the morning when the weather is cooler and the area is less crowded."
  },
  {
    id: "inani",
    number: "4",
    title: "Explore Inani Beach",
    description: [
      "Inani Beach is famous for its open coastline and unique coral rock formations that appear along the shore during low tide.",
      "The natural rock landscape makes Inani a prime location for photography, walking along the damp sands, or enjoying fresh coconut water from local stalls.",
      "Late afternoon is a great time to visit so you can enjoy the cool breeze and stay for sunset before returning to town."
    ],
    travelTip: "The stones can be sharp and slippery. Wear suitable footwear and walk carefully."
  },
  {
    id: "maheshkhali",
    number: "5",
    title: "Take a Day Trip to Maheshkhali Island",
    description: [
      "Maheshkhali is an ideal destination for travellers wanting to experience island life, local culture, and religious heritage.",
      "Engineered boats and speedboats operate regularly from the Cox's Bazar Jetty to Maheshkhali. Upon arrival, local rickshaws or auto-rickshaws can be hired to explore.",
      "Key attractions include the historic Adinath Temple situated on Mainak Hill, local Buddhist temples, mangrove areas, and traditional dry-fish yards."
    ],
    travelTip: "Start the trip early and confirm the last available return boat before exploring the island."
  },
  {
    id: "ramu",
    number: "6",
    title: "Discover the Buddhist Heritage of Ramu",
    description: [
      "Ramu is known for its serene Buddhist temples, monasteries, and rich cultural traditions, located a short distance from Cox's Bazar town.",
      "Visitors can see large reclining Buddha statues, peaceful wooden monasteries, and traditional architecture that offers a calm contrast to the lively beaches.",
      "Always respect local customs and ask for permission before taking photos of monks, residents, or religious rituals."
    ],
    travelTip: "Visit in the morning or late afternoon to avoid the midday heat."
  },
  {
    id: "dulahazra",
    number: "7",
    title: "Visit Dulahazra Safari Park",
    description: [
      "Located in Chakaria along the Cox's Bazar highway, Dulahazra Safari Park is a popular attraction for families and wildlife lovers.",
      "The park features large forested enclosures where visitors can observe deer, elephants, crocodiles, birds, and other animals in natural habitats.",
      "It is a great educational stop, especially for children, offering a green sanctuary break from coastal activities."
    ],
    travelTip: "Do not feed, touch, or disturb the animals inside the park enclosures."
  },
  {
    id: "radiant-fish-world",
    number: "8",
    title: "Explore Radiant Fish World",
    description: [
      "Radiant Fish World is an indoor marine aquarium located in the Jhautala area of Cox's Bazar, featuring native and exotic freshwater and marine fish displays.",
      "The themed underwater-style viewing tunnels make it a popular hit for families, children, and visitors looking for indoor activities during rainy hours."
    ],
    travelTip: "Visit earlier in the day to avoid larger evening crowds."
  },
  {
    id: "burmese-market",
    number: "9",
    title: "Shop at the Burmese Market",
    description: [
      "The Burmese Market is one of the best-known shopping hubs in Cox's Bazar, selling a wide variety of imported snacks, pickles, handloom fabrics, cosmetics, and souvenirs.",
      "It is a great place to buy gifts for family and friends, particularly dried fruits, local hand-woven shawls, and traditional handicraft items."
    ],
    travelTip: "Carry cash, as smaller vendors inside the market may not accept cards or mobile payments."
  },
  {
    id: "seafood",
    number: "10",
    title: "Enjoy Fresh Seafood and Local Food",
    description: [
      "A trip to Cox's Bazar is incomplete without sampling the coastal cuisine. Seafood restaurants offer fish, prawns, crab, squid, and regional specialties grilled, fried, or curried.",
      "You can also enjoy traditional rice meals served with fish curry, bhorta (mashed preparations), fresh vegetables, and dal at popular local eateries."
    ],
    foodsToTry: [
      "Grilled Fish & Crab Curry",
      "Prawn Masala & Fish Bhorta",
      "Dried Fish (Shutki) Dishes",
      "Local Green Coconut Water & Pickles"
    ]
  }
];

const itineraryPlan: ItineraryDay[] = [
  {
    day: "Day 1",
    title: "Cox's Bazar Town",
    details: "Check in to your hotel and rest. Visit the main sea beach in the afternoon, watch the sunset, explore the Burmese Market, and finish with a seafood dinner."
  },
  {
    day: "Day 2",
    title: "Himchari, Marine Drive and Inani",
    details: "Start early with a drive down Marine Drive. Visit Himchari National Park, continue to Inani Beach for low tide exploration, and return to town before dark."
  },
  {
    day: "Day 3",
    title: "Choose a Day Trip",
    details: "Visit Maheshkhali Island for cultural sights, or explore Ramu Buddhist Temples and Dulahazra Safari Park for a family-friendly excursion."
  },
  {
    day: "Day 4",
    title: "Relax or Explore More",
    details: "Use your final day to visit Radiant Fish World, pick up last-minute souvenirs, or enjoy a quiet morning walk along the shore."
  }
];

export default function ThingsToDoInCoxsBazar() {
  return (
    <article className="max-w-4xl lg:pt-20 mx-auto px-4 py-8 text-gray-700 font-sans leading-relaxed">

    <div className="relative w-full aspect-[16/9] mb-6 rounded-xl overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1788752245/Blog-img-3-Top-10-Things-to-Do-in-Coxs-Bazar_cphnly.png"
          alt="Top Hill Tract Destinations in Bangladesh"
          fill
          priority
          className="object-cover"
        />
      </div>


      <div className="mb-8 border-b border-gray-200 pb-6">
        <span className="text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50 px-3 py-1 rounded-full border border-red-100">
          Travel Guide
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mt-3 mb-4 leading-tight">
          Top 10 Things to Do in Coxs Bazar
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
            <p className="text-xs text-gray-500">September 10, 2026</p>
          </div>
        </div>
      </div>

      <section className="space-y-4 text-base md:text-lg text-gray-600 mb-10">
        <p>
          Coxs Bazar is one of the most famous tourist destinations in Bangladesh, best known for having the worlds longest natural sandy sea beach. Beyond the main shoreline, the region offers scenic road trips, island heritage, national parks, and vibrant local cuisine.
        </p>
        <p>
          Whether you are planning a relaxed weekend trip or an adventurous family vacation, here are the top 10 things to do in Coxs Bazar.
        </p>
      </section>

      <section className="space-y-10 my-12">
        {activitiesData.map((item) => (
          <div key={item.id} className="p-6 border border-gray-200 rounded-2xl bg-white shadow-sm space-y-4">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b pb-2">
              {item.number}. {item.title}
            </h2>
            
            <div className="space-y-3 text-sm text-gray-600 leading-relaxed">
              {item.description.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {item.foodsToTry && (
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-100 space-y-2">
                <strong className="font-bold text-gray-900 text-xs uppercase block">Foods to try:</strong>
                <ul className="list-disc pl-5 space-y-1 text-xs text-gray-600">
                  {item.foodsToTry.map((food, i) => (
                    <li key={i}>{food}</li>
                  ))}
                </ul>
              </div>
            )}

            {item.travelTip && (
              <div className="p-3 bg-red-50/60 border border-red-100 rounded-lg text-xs">
                <strong className="text-red-900 block mb-0.5">Travel Tip:</strong>
                <p className="text-gray-700">{item.travelTip}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <section className="my-12 p-6 bg-gray-900 text-white rounded-2xl shadow-xl space-y-6">
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">
          How Many Days Should You Spend in Coxs Bazar?
        </h2>
        <p className="text-sm text-gray-300">
          Three days are enough to visit the main attractions. A four-day trip will feel more relaxed. Here is a simple travel plan:
        </p>

        <div className="space-y-4 text-sm">
          {itineraryPlan.map((plan, idx) => (
            <div key={idx} className="border-l-2 border-red-500 pl-4 py-1">
              <strong className="text-white text-base block">{plan.day}: {plan.title}</strong>
              <p className="text-xs text-gray-400 mt-1">{plan.details}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="my-12 p-6 border border-gray-200 rounded-2xl bg-white space-y-4 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-3">
          Best Time to Visit Coxs Bazar
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          November to February is usually the most comfortable period to visit Coxs Bazar. The weather is cooler, rainfall is lower, and outdoor activities are more enjoyable. However, this is also the busiest travel season.
        </p>
        <p className="text-sm text-gray-600 leading-relaxed">
          The rainy season offers greener landscapes, but heavy rain can affect road trips and boat journeys. Keep your plans flexible if travelling during monsoon months.
        </p>
      </section>

      <section className="my-12 p-6 border border-gray-200 rounded-2xl bg-white space-y-4 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 border-l-4 border-red-600 pl-3">
          Useful Tips for Your Trip
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-xs md:text-sm text-gray-600">
          <li>Book hotel and bus tickets early during busy peak periods.</li>
          <li>Carry sunscreen, drinking water, comfortable walking shoes, and a light rain jacket.</li>
          <li>Agree on transport fares before starting local trips with rickshaws or Tomtoms.</li>
          <li>Keep cash handy for small shops, roadside food stalls, and local markets.</li>
          <li>Avoid swimming when the sea is rough and respect local guidelines.</li>
          <li>Do not leave plastic bottles or litter on the beach.</li>
        </ul>
      </section>

      <div className="pt-6 border-t border-gray-200 flex justify-between items-center text-xs font-bold text-red-600">
        <Link href="/blog" className="hover:underline">
          ‹ Back to all blogs
        </Link>
      </div>
    </article>
  );
}