import Image from "next/image";
import Link from "next/link";

export default function LatestBlog() {
return (
    <div className="w-full">

      <h2 className="text-2xl font-bold text-red-600 mb-4">Latest</h2>

      <div className="border border-gray-200 rounded-3xl p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
        
            <div className="relative w-full aspect-[16/9] sm:aspect-[16/10] max-h-[380px] rounded-xl sm:rounded-2xl overflow-hidden mb-3 sm:mb-4">         
             <Image
            src={`https://res.cloudinary.com/dkmzakgx2/image/upload/v1788681646/Blog-Tea-Garden-Destinations-in-Sylhet-1024x572_n3ahnb.jpg`}
            alt="Tea Garden Destinations in Sylhet"
            fill
            className="object-cover"
            priority
          />
        
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          <h3 className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 text-white text-base sm:text-xl md:text-2xl font-bold leading-snug drop-shadow-md">
            Tea Garden Destinations in Sylhet
          </h3>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 pt-1">
          <p className="text-gray-600 text-xs sm:text-sm md:text-base max-w-xl leading-relaxed">
            Explore Sylhet’s tea gardens, lush estates, waterfalls, and eco-resorts offering scenic beauty, cultural charm, and refreshing monsoon vibes.
          </p>

         <Link
            href="/blog/tea-garden-destinations-in-sylhet" 
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold text-xs sm:text-sm px-5 py-2 sm:py-2.5 rounded-lg sm:rounded-xl transition-colors duration-200 shrink-0 text-center"
          >
            Read more
          </Link>
        </div>

      </div>
    </div>
  );
}