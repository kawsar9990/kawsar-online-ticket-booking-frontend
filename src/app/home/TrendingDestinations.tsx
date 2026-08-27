'use client'

import Image from 'next/image';
import Link from 'next/link';


interface Destination {
  id: number;
  name: string;
  image: string;
  slug: string;
}

const destinations: Destination[] = [
  {
    id: 1,
    name: 'Chittagong',
    image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1785498607/Chittagong-1440x600_vyo8qp.jpg',
    slug: 'chittagong',
  },
  {
    id: 2,
    name: 'Dhaka',
    image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1785498607/Dhaka-1440x600_gxjajc.jpg',
    slug: 'dhaka',
  },
  {
    id: 3,
    name: 'Rajshahi',
    image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1785498607/Rajshahi-1440x600_hrf9yz.webp',
    slug: 'rajshahi',
  },
  {
    id: 4,
    name: 'Rangpur',
    image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1785498607/Rangpur-1440x600_chhrvx.webp',
    slug: 'rangpur',
  },
  {
    id: 5,
    name: 'Sylhet',
    image: 'https://res.cloudinary.com/dkmzakgx2/image/upload/v1785498607/Sylhet-1440x600_roszxh.jpg',
    slug: 'sylhet',
  },
];



export default function TrendingDestinations() {
  
  
  
  
return (
<section className="w-full max-w-[1400px] pt-30 mx-auto px-4 sm:px-6 lg:px-8 py-10">

<h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-8">
  Discover Trending Destinations
</h2>


<div className="grid grid-cols-1 md:grid-cols-6 gap-4 sm:gap-5 lg:gap-6">
{destinations.map((item, index) => {
const isTopRow = index < 2;

 const colSpanClass = isTopRow
   ? 'md:col-span-3 lg:col-span-3 h-[240px] sm:h-[300px] lg:h-[350px] xl:h-[380px]'
   : 'md:col-span-2 lg:col-span-2 h-[220px] sm:h-[260px] lg:h-[300px] xl:h-[330px]';

return (
<Link
key={item.id}
href={`/destination/${item.slug}`}
className={`group relative overflow-hidden rounded-2xl w-full block shadow-md hover:shadow-2xl transition-all duration-300 ${colSpanClass}`}
>
<Image
  src={item.image}
  alt={item.name}
  fill
  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  priority={isTopRow}
/>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/90" />


<div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-10">
    <h3 className="text-white text-xl sm:text-2xl font-bold tracking-wide drop-shadow-md">
      {item.name}
    </h3>
</div>
</Link>
);
})}
</div>
</section>
  );
}