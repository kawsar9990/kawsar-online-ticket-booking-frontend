import { LogIn, LogOut } from "lucide-react";

interface HotelPolicyProps {
  checkIn?: string;
  checkOut?: string;
}

export default function HotelPolicy({
  checkIn, 
  checkOut 
}: HotelPolicyProps) {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-5 py-5 font-sans text-gray-800">
      <h3 className="text-xl font-bold text-gray-900 mb-4">Hotel Policy</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
    
        <div className="flex items-center gap-4 p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
          <div className="p-2.5 bg-slate-100 rounded-xl text-slate-500 shrink-0">
            <LogIn className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700">Check-in</p>
            <p className="text-base text-slate-400">{checkIn}</p>
          </div>
        </div>


        <div className="flex items-center gap-4 p-4 bg-slate-50/80 rounded-2xl border border-slate-100">
          <div className="p-2.5 bg-slate-100 rounded-xl text-slate-500 shrink-0">
            <LogOut className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-700">Check-out</p>
            <p className="text-base text-slate-400">{checkOut}</p>
          </div>
        </div>
      </div>
    </div>
  );
}