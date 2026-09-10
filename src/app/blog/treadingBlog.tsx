import Image from "next/image";
import Link from "next/link";


interface BlogItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
}

export default function TreadingBlog() {
 
const trendingData: BlogItem[] = [
    {
      id: 1,
      title: "Tea Garden Destinations in Sylhet",
      description:
        "Explore Sylhet’s tea gardens, lush estates, waterfalls, and eco-resorts offering scenic beauty, cultural charm, and refreshing monsoon...",
      image:
        "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788681646/Blog-Tea-Garden-Destinations-in-Sylhet-1024x572_n3ahnb.jpg",
      link: "/blog/tea-garden-destinations-in-sylhet",
    },
    {
      id: 2,
      title: "Top Hill Tract Destinations in Bangladesh",
      description:
        "Plan your hill tract adventure. Visit Bandarban, Rangamati, and Khagrachhari for waterfalls, tribal culture, and breathtaking mountain views.",
      image:
        "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788682350/Blog-Top-Hill-Tract-Destinations-in-Bangladesh-1024x572_maid5d.png",
      link: "/blog/top-hill-tract-destinations-in-bangladesh",
    },
    {
      id: 3,
      title: "Best Monsoon Destinations in Bangladesh",
      description:
        "Discover Bangladesh’s monsoon magic. Explore Sajek Valley, Cox’s Bazar, Sylhet tea gardens, and waterfalls at their lush seasonal best.",
      image:
        "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788682346/Blog-Best-Monsoon-Destinations-in-Bangladesh_ogfofb.png",
      link: "/blog/best-monsoon-destinations-in-bangladesh",
    },
    {
      id: 4,
      title: "Safe Travel Tips for Women Travelers",
      description:
        "Stay confident on your journeys with practical safe travel tips for women travelers covering transport, accommodation, and cultural...",
      image:
        "https://res.cloudinary.com/dkmzakgx2/image/upload/v1788682348/Safe-Travel-Tips-for-Women-Travelers_kujv3j.png",
      link: "/blog/safe-travel-tips-for-women-travelers",
    },
  ];


return (
<div className="w-full">
<h2 className="text-2xl font-bold text-red-600 mb-4">Trending</h2>


<div className="flex flex-col gap-4">
{trendingData.map((item: BlogItem) => (
<Link
  key={item.id}
  href={item.link}
  className="group block border border-gray-100 rounded-2xl px-4 py-2 bg-white shadow-sm hover:shadow-md transition-all duration-300"
>
<div className="flex gap-3 sm:gap-4 items-center">

<div className="relative w-28 h-20 sm:w-36 sm:h-24 shrink-0 rounded-lg sm:rounded-xl overflow-hidden">
  <Image
    src={item.image}
    alt={item.title}
    fill
    className="object-cover group-hover:scale-105 transition-transform duration-300"
  />
</div>

<div className="flex flex-col justify-center min-w-0">
  <h3 className="font-bold text-gray-900 text-xs sm:text-sm md:text-[13px] line-clamp-2 leading-tight sm:leading-snug group-hover:text-red-600 transition-colors">
    {item.title}
  </h3>
  <p className="text-gray-500 text-[11px] sm:text-xs md:text-[10px] line-clamp-2 sm:line-clamp-3 mt-1 leading-normal">
    {item.description}
  </p>
</div>
</div>
</Link>
))}
</div>
</div>
  );
}