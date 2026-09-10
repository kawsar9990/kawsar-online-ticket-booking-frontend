
interface OfficeLocation {
  id: number;
  title: string;
  address: string;
  city: string;
  phone: string;
}

const officesData: OfficeLocation[] = [
  {
    id: 1,
    title: "Mirpur Office - Dhaka",
    address: "Mirpur 10 Circle, Main Road, Mirpur",
    city: "Dhaka-1216, Bangladesh.",
    phone: "+8801611236444",
  },
  {
    id: 2,
    title: "Tangail Sadar Office - Tangail",
    address: "Main Road, Old Bus Stand, Tangail Sadar",
    city: "Tangail, Bangladesh.",
    phone: "+8801611236444",
  },
  {
    id: 3,
    title: "Mirzapur Branch Office - Tangail",
    address: "College Road, Mirzapur Bazar, Mirzapur",
    city: "Tangail, Bangladesh.",
    phone: "+8801611236444",
  },
  {
    id: 4,
    title: "Chattogram Branch Office - Chattogram",
    address: "CDA Avenue, GEC Circle, Agrabad Access Road",
    city: "Chattogram, Bangladesh.",
    phone: "+8801611236444",
  },
];

export default function OfficeLocations() {
return(
<div className="lg:px-10 lg:py-20">
<main className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-4xl rounded-lg bg-white p-6 shadow-sm md:p-12">
<h1 className="mb-8 border-b-2 border-gray-100 pb-3 text-xl font-bold text-[#2B388F] md:text-2xl">
  Our Offices
</h1>

<div className="space-y-4">
{officesData.map((office) => (
  <div
    key={office.id}
    className="rounded-md border border-gray-300 p-5 text-center transition-shadow hover:shadow-md"
  >
    <h2 className="text-base font-bold text-[#1E293B]">
      {office.title}
    </h2>
    <p className="mt-1 text-xs text-[#64748B] sm:text-sm">
      {office.address},
    </p>
    <p className="text-xs text-[#64748B] sm:text-sm">
      {office.city}
    </p>
    <p className="mt-1 text-xs font-medium text-[#475569] sm:text-sm">
      {office.phone}
    </p>
  </div>
))}
</div>
</div>
</main>
</div>
);
}