import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function HotelSkeleton() {

return (
<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 w-full">
{Array.from({ length: 4 }).map((_, index) => (
<div
  key={index}
  className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 ${
    index >= 2 ? "hidden md:block" : ""
  } ${index >= 3 ? "hidden lg:block" : ""}`}
>
    
<div className="h-52 w-full overflow-hidden leading-none">
  <Skeleton 
    height="100%" 
    borderRadius={0} 
    containerClassName="block h-full leading-none" 
  />
</div>

<div className="p-4 space-y-2">
        
<Skeleton height={20} width="80%" />

      
<div className="flex items-center gap-2 pt-1">
  <Skeleton height={16} width={40} />
  <Skeleton height={16} width={90} />
</div>
</div>
</div>
))}
</div>
  );
}