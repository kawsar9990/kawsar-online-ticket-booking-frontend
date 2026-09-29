import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface FeatureItem {
  id: number;
  text: string;
}

const features: FeatureItem[] = [
  { id: 1, text: 'Faster and easier booking' },
  { id: 2, text: 'Get alerts before every departure' },
  { id: 3, text: 'Easy access to your tickets' },
  { id: 4, text: 'Onboard with digital tickets' },
];

export default function MobileAppSection() {
  return (
    <section className="bg-[#F8FBFA] py-10 sm:py-14 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        
 
        <div className="w-full lg:w-1/2 flex justify-center items-center">
          <div className="relative w-full max-w-xs sm:max-w-sm flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1790685384/app-illustration_soohbf.svg" 
              alt="Shohoz mobile app illustration"
              className="w-full h-auto max-h-72 object-contain"
            />
          </div>
        </div>

      
        <div className="w-full lg:w-1/2 text-left">
         
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 leading-tight mb-6">
            Get More Out of GoKawsar with our <span className="text-[#00A651]">mobile app</span>
          </h2>

        
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 mb-8">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full border border-gray-300 flex items-center justify-center flex-shrink-0">
                  <ChevronRight className="w-3 h-3 text-[#00A651]" />
                </div>
                <span className="text-gray-600 text-xs sm:text-sm font-medium">
                  {feature.text}
                </span>
              </div>
            ))}
          </div>


          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="https://gokawsar.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
            <Link
              href="https://gokawsar.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block transition-transform hover:scale-105"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the App Store"
                className="h-10 sm:h-12 w-auto object-contain"
              />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}