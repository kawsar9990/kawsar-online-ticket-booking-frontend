import type { Metadata } from 'next';
import Footerpromt from '../footerpro';

export const metadata : Metadata = {
  title: 'Discover Bangladesh | GoKawsar',
  description: 'GoKawsar – Explore the heritage, culture, and nature of Bangladesh with our curated tour packages by KS GOKAWSAR.',
};


interface PackageItem {
  id: number;
  name: string;
  price: string;
  link: string;
}

const packages: PackageItem[] = [
  {
    id: 1,
    name: "A Journey from Mughal Grandeur to the Dynamism of Modern - Day Bangladesh",
    price: "USD 651",
    link: "#",
  },
  {
    id: 2,
    name: "Agriculture– Bangladesh's Main Economic Driving Force",
    price: "USD 1385",
    link: "#",
  },
  {
    id: 3,
    name: "An Immersive Journey Through Bangladesh – The Land of Rivers and Heritage",
    price: "USD 800",
    link: "#",
  },
  {
    id: 4,
    name: "Bangladesh: Home of Ancient Wonders",
    price: "USD 1780",
    link: "#",
  },
  {
    id: 5,
    name: "Colors of Bengal Photography Expedition",
    price: "USD 816",
    link: "#",
  },
  {
    id: 6,
    name: "Explore the Cultural Heritage and History of Bangladesh",
    price: "USD 1480",
    link: "#",
  },
  {
    id: 7,
    name: "Explore the UNESCO World Heritage Sites of Bangladesh",
    price: "USD 1055",
    link: "#",
  },
  {
    id: 8,
    name: "Meet the Artisans of Bangladesh",
    price: "USD 1586",
    link: "#",
  },
];

const termsAndConditions: string[] = [
  "All services are subject to availability and are not being held in advance.",
  "KS GOKAWSAR Ltd. will make every effort to anticipate and address potential issues to ensure a smooth travel experience.",
  "Itinerary timing may vary due to weather conditions or traffic congestion.",
  "Alternate destinations may be visited if any listed site is closed on the day of the visit.",
  "The tour schedule is flexible; the coordinator may adjust plans based on real-time conditions for a better experience.",
  "For changes or modifications, customers are requested to email inbound@ksgokawsar.com for confirmation.",
  "Please review the cancellation policy for your selected package before confirming the booking.",
  "While we strive to ensure a flawless experience, unforeseen circumstances such as traffic, infrastructure challenges, or force majeure events may occasionally cause disruptions.",
  "The mentioned package price is not valid during blackout periods (e.g., Eid, New Year, or long public holidays).",
  "A gratuity of USD 1 per person per day is required.",
  "Any services not specifically included in the package must be paid for by the customer.",
  "In case of extraordinary events such as natural disasters, government restrictions, or other force majeure incidents, KS GOKAWSAR Ltd. may offer a full refund or reschedule the tour at its sole discretion.",
];

export default function DiscoverBangladesh() {
  
return (
<div className="min-h-screen lg:pt-20 bg-gray-100 font-sans text-gray-800">

<main className="max-w-5xl mx-auto py-2 px-2">
        

<h1 className="text-2xl text-left font-bold text-gray-900 mb-6">
  Discover Bangladesh
</h1>

      
<div className="w-full rounded-lg overflow-hidden mb-8 shadow-sm">
  <img
    src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1789230206/Landing_Page_Web_Banner_n5udhl.jpg" 
    alt="Discover Bangladesh Banner"
    className="w-full h-64 object-cover"
  />
</div>


<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
  
<h2 className="text-xl font-bold text-center text-gray-900 mb-6">
  Inbound Tour Package
</h2>

   
<div className="overflow-x-auto mb-10">
  <table className="w-full border-collapse border border-gray-300 text-sm">
    <thead>
      <tr className="bg-gray-50 text-gray-800">
        <th className="border border-gray-300 px-4 py-3 text-center font-bold">
          Package Name
        </th>
        <th className="border border-gray-300 px-4 py-3 text-center font-bold w-28">
          Starting Price
        </th>
        <th className="border border-gray-300 px-4 py-3 text-center font-bold">
          Package Link
        </th>
      </tr>
    </thead>
    <tbody>
      {packages.map((pkg) => (
        <tr key={pkg.id} className="hover:bg-gray-50 transition">
          <td className="border border-gray-300 px-4 py-3 text-gray-700">
            {pkg.name}
          </td>
          <td className="border border-gray-300 px-4 py-3 text-center font-medium text-gray-800 whitespace-nowrap">
            {pkg.price}
          </td>
          <td className="border border-gray-300 px-4 py-3 text-center">
            <a
              href={pkg.link}
              className="text-blue-600 hover:underline font-semibold"
            >
              {pkg.name}
            </a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

        
<div className="border border-gray-300 rounded-lg p-5 bg-white">
  <h3 className="text-base font-bold text-gray-900 mb-4">
    Terms & Conditions
  </h3>
  <ul className="space-y-2 text-xs md:text-sm text-gray-600 list-disc pl-5 leading-relaxed">
    {termsAndConditions.map((term, index) => (
      <li key={index}>{term}</li>
    ))}
  </ul>
</div>

</div>

<Footerpromt /> 
</main>
</div>
  );
}