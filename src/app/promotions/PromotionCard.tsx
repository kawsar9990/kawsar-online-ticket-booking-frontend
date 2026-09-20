import Link from "next/link";

export interface Promotion {
  id: number;
  title: string;
  image: string;
  category: string;
  link: string;
}

interface PromotionCardProps {
  item: Promotion;
}

export default function PromotionCard({ item }: PromotionCardProps) {
return (
<div className="group">

<Link href={item.link}
className="flex items-center gap-4 p-2 bg-white rounded-lg">

<div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-md overflow-hidden flex-shrink-0">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover rounded-md transform transition-transform duration-500 ease-out group-hover:scale-110"
  />
</div>


    
<div className="flex flex-col justify-between flex-1 py-1 gap-2">
  <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 leading-snug line-clamp-2">
    {item.title}
  </h3>
  <div className="text-blue-500 hover:text-blue-600 text-sm font-medium flex items-center gap-1 w-fit">
    Explore &gt;
  </div>
</div>
</Link>
</div>
);
}