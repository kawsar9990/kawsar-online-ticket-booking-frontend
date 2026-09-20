import { getFacilityIcon } from "@/utils/facilityIcons";

interface Props {
  facilities: string[];
}

export default function HighlightedFacilities({ facilities }: Props) {

if (!facilities || facilities.length === 0) return null;

return (
<div className="">
<div className="sm:block hidden w-full max-w-[1280px] mx-auto px-5 py-5 font-sans text-gray-800">
<h3 className="text-xl font-bold text-gray-900 mb-4">
  Highlighted Facilities
</h3>
      
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-2xl">
  {facilities.map((facility, index) => {
  const IconComponent = getFacilityIcon(facility);

return (
<div
  key={index}
  className="flex items-center gap-3 p-3.5 bg-[#E8FCED] border border-emerald-100 rounded-xl transition-all hover:bg-emerald-100/60"
>
    <IconComponent className="w-5 h-5 text-green-600" />
<span
  className="text-sm text-emerald-950 truncate line-clamp-1 leading-tight"
  title={facility}
>
  {facility}
</span>
</div>
);
})}
</div>
</div>



<div className="sm:hidden block w-full max-w-[1280px] mx-auto px-5 font-sans text-gray-800">
<h3 className="text-lg font-bold text-gray-900 mb-4">
  Hotel & Room Facilities
</h3>

<div className="grid grid-cols-2 gap-x-4 gap-y-3.5">
{facilities.map((facility, index) => {
  const IconComponent = getFacilityIcon(facility);

return (
  <div key={index} className="flex items-center gap-2.5 min-w-0">
    {IconComponent && (
      <IconComponent className="w-4 h-4 text-gray-500 flex-shrink-0" />
    )}
    <span
      className="text-xs sm:text-sm text-gray-700 truncate min-w-0 line-clamp-2 leading-tight"
      title={facility}
    >
      {facility}
    </span>
  </div>
);
})}
</div>
</div>

</div>
);
}