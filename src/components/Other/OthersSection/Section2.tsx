import { Bus, FileText, Hotel, Palmtree, Ticket, FerrisWheel } from 'lucide-react';

interface ServiceItem {
  id: number;
  titleHighlight: string;
  titleRest: string;
  description: string;
  icon: React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: 1,
    titleHighlight: 'Bus',
    titleRest: ' Ticket',
    description: 'No more queuing at counters. Tickets of 100+ bus operators available online.',
    icon: <Bus className="w-8 h-8 text-[#00A651]" />,
  },
  {
    id: 2,
    titleHighlight: 'Visa',
    titleRest: ' Processing',
    description: 'Get your visa processed hassle-free for your favorite international destinations.',
    icon: <FileText className="w-8 h-8 text-[#00A651]" />,
  },
  {
    id: 3,
    titleHighlight: 'Hotel',
    titleRest: ' Booking',
    description: 'Book top-rated hotels and resorts at the best prices across the country.',
    icon: <Hotel className="w-8 h-8 text-[#00A651]" />,
  },
  {
    id: 4,
    titleHighlight: 'Holiday',
    titleRest: ' Packages',
    description: 'Explore tailored tour packages and exciting vacation deals for family and friends.',
    icon: <Palmtree className="w-8 h-8 text-[#00A651]" />,
  },
  {
    id: 5,
    titleHighlight: 'Event',
    titleRest: ' Ticket',
    description: 'From concerts to sports, skill development to mental development, book your event tickets online hassle-free.',
    icon: <Ticket className="w-8 h-8 text-[#00A651]" />,
  },
  {
    id: 6,
    titleHighlight: 'Park',
    titleRest: ' Ticket',
    description: 'Skip the lines and dive into fun! Purchase park tickets from our online inventory.',
    icon: <FerrisWheel className="w-8 h-8 text-[#00A651]" />,
  },
];

export default function TravelServices() {
  return (
    <section className="bg-[#F8FBFA] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-6xl mx-auto text-center">
    
        <p className="text-amber-500 font-semibold tracking-wider uppercase text-xs sm:text-sm mb-2">
          A ONE-STOP SOLUTION FOR YOUR TRAVEL NEEDS
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#00A651] mb-12">
          Introducing you to the GoKawsar way of life
        </h2>

   
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col items-center sm:items-start text-center sm:text-left bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
         
              <div className="w-16 h-16 bg-[#F2F9F5] rounded-2xl flex items-center justify-center mb-4">
                {service.icon}
              </div>

      
              <h3 className="text-xl font-bold mb-2">
                <span className="text-[#00A651]">{service.titleHighlight}</span>
                <span className="text-gray-800">{service.titleRest}</span>
              </h3>

    
              <p className="text-gray-500 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
