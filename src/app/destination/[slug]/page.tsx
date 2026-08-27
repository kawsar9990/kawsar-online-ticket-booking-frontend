'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getCityDestinations } from '@/services/cityDestinationService';
import { useLoader } from '@/context/LoaderContext';


interface SubCategory {
  name: string;
  image: string;
  district: string;
  description: string;
}

interface CityDestination {
  _id: string;
  name: string;
  slug?: string;
  homeimg: string;
  homedescription: string;
  subCategories: SubCategory[];
}


export default function DestinationDetailPage(){

const slugparam = useParams();
const slug = slugparam?.slug as string;

const [destination, setDestination] = useState<CityDestination | null>(null);
const [hasFetched, setHasFetched] = useState<boolean>(false);
const { showLoader, hideLoader } = useLoader();


useEffect(()=> {
const fetchSingleDestination = async () => {
try{
showLoader()
const resData = await getCityDestinations();
const allDestinations : CityDestination[] = resData.data;

const found = allDestinations.find((item) => {
const itemSlug = item.slug ? item.slug.toLowerCase() : item.name?.toLowerCase().trim();
return itemSlug === slug?.toLowerCase().trim();
});
setDestination(found || null);
}
catch(error){
console.error('Error fetching destination details:', error);
}
finally{
 hideLoader();
 setHasFetched(true);
}
};

if (slug) {
fetchSingleDestination();
}
},[slug])


if (!destination && hasFetched) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-800">Destination Not Found!</h2>
      <p className="text-gray-500 text-sm">
        No data found for slug: <span className="font-mono text-red-500">{slug}</span>
      </p>
      <Link
        href="/"
        className="px-5 py-2.5 bg-emerald-600 text-white font-medium rounded-lg hover:bg-emerald-700 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}


if (!destination) return null;


return(
<div className='lg:pt-18' style={{userSelect : "none"}}>
<main className="w-full bg-gray-50/50 min-h-screen pb-20">

<div className="relative w-full h-[280px] sm:h-[380px] md:h-[450px]">
  <Image
    src={destination.homeimg}
    alt={destination.name}
    fill
    className="object-cover"
    
  />
  <div className="absolute inset-0 bg-black/20" />
</div>

  
<div className="max-w-5xl mx-auto px-4 sm:px-6 mt-8 mb-14">
<div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4 mb-4">
<h1 className="text-3xl sm:text-4xl font-extrabold text-emerald-600">
  {destination.name}
</h1>

  <button className="px-5 py-2.5 bg-emerald-600 cursor-pointer hover:bg-emerald-700 text-white font-semibold rounded-lg text-sm transition-colors shadow-sm flex items-center gap-2">
    Search for Tickets <span>→</span>
  </button>
</div>

  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
    {destination.homedescription}
  </p>
</div>


<div className="max-w-5xl mx-auto px-4 sm:px-6">
  <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
    Must-see attractions
  </h2>

<div className="space-y-6">
{destination.subCategories?.map((spot, index) => (
  <div
    key={index}
    className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-6 items-start"
  >
    <div className="relative w-full md:w-[280px] h-[190px] flex-shrink-0 rounded-xl overflow-hidden">
      <Image
        src={spot.image}
        alt={spot.name}
        fill
        className="object-cover"
      />
    </div>

  <div className="flex-1">
    <h3 className="text-xl font-bold text-gray-900 mb-1">
  {spot.name}
</h3>
<p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">
  {spot.district}
</p>
<p className="text-gray-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line">
  {spot.description}
</p>
</div>
</div>
))}
</div>
</div>
</main>
</div>
)    
}