
interface StatItem {
  id: number;
  value: string;
  label: string;
}

const stats: StatItem[] = [
  { id: 1, value: '1 Million+', label: 'Tickets Sold' },
  { id: 2, value: '1000+', label: 'Routes' },
  { id: 3, value: '1 Million+', label: 'Happy Users' },
];

export default function TravelOptionsSection() {
  return (
    <section className="bg-[#F8FBFA] py-8 sm:py-10 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-6 lg:gap-8">
        

        <div className="w-full lg:w-1/2 text-left">
     
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-snug mb-3">
            All your <span className="text-[#00A651]">travel options</span> in one place
          </h2>

   
          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6 max-w-md">
            More than 1,000 trusted travel partners across trains, buses, flights, and launch so that you can focus on the journey.
          </p>

      
          <div className="grid grid-cols-3 gap-3 pt-3 border-t border-gray-200">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col">
                <span className="text-base sm:text-lg lg:text-xl font-bold text-[#00A651] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-gray-500 text-[11px] sm:text-xs font-medium mt-0.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

  
        <div className="w-full lg:w-1/3 flex justify-center items-center">
          <div className="relative w-full max-w-xs sm:max-w-sm flex items-center justify-center">
          
            <img
              src="https://res.cloudinary.com/dkmzakgx2/image/upload/v1790682309/travel-illustration_zvgtci.svg" 
              alt="Travel options illustration with phone, train, bus, and plane"
              className="w-full h-auto max-h-64 object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}