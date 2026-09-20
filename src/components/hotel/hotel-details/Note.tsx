"use client";

import { LogIn, LogOut, Info, CreditCard } from "lucide-react";

export interface HotelPolicyData {
  checkInTime?: string;
  checkOutTime?: string;
  additionalFacts?: string[];
  paymentMethods?: string[]; 
}

interface HotelPolicyProps {
  policyData?: HotelPolicyData;
}

export default function ImportantNote({ policyData }: HotelPolicyProps) {
  const checkIn = policyData?.checkInTime || "02:00 PM";
  const checkOut = policyData?.checkOutTime || "11:00 AM";
  const additionalFacts = policyData?.additionalFacts || [];
  const paymentMethods = policyData?.paymentMethods || [];

return (
<div className="w-full max-w-[1280px] mx-auto px-4 py-6 font-sans">
<h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4">
  Important - Please Note:
</h2>


<div className="hidden md:block border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-xs">
   
<div className="grid grid-cols-4 border-b border-gray-200 items-center">
  <div className="col-span-1 font-bold p-4 bg-gray-50/50 border-r border-gray-200 text-gray-800 flex items-center gap-2 text-sm">
    <LogIn className="w-6 h-6 text-gray-600 font-bold" />
    Check-in 
  </div>
  <div className="col-span-3 p-4 text-sm font-semibold text-black">
    {checkIn}
  </div>
</div>


<div className="grid grid-cols-4 border-b border-gray-200 items-center">
  <div className="col-span-1 p-4 bg-gray-50/50 border-r border-gray-200 font-bold text-gray-800 flex items-center gap-2 text-sm">
    <LogOut className="w-6 h-6 text-gray-600" />
    Check-out
  </div>
  <div className="col-span-3 p-4 text-sm font-semibold text-black">
    {checkOut}
  </div>
</div>

     
<div className="grid grid-cols-4 border-b border-gray-200">
  <div className="col-span-1 p-4 bg-gray-50/50 border-r border-gray-200 font-bold text-gray-800 flex items-center gap-2 text-sm">
    <Info className="w-6 h-6 text-gray-600 mt-0.5" />
    Additional Facts:
  </div>
  <div className="col-span-3 p-4 text-sm text-gray-700">
    <ul className="list-disc list-inside space-y-1">
      {additionalFacts.map((fact, idx) => (
        <li key={idx}>{fact}</li>
      ))}
    </ul>
  </div>
</div>

 
<div className="grid grid-cols-4 items-center">
  <div className="col-span-1 p-4 bg-gray-50/50 border-r border-gray-200 font-bold text-gray-800 flex items-center gap-2 text-sm">
    <CreditCard className="w-6 h-6 text-gray-600" />
    Payment accepted by the property
  </div>
  <div className="col-span-3 p-4 flex items-center gap-3">
    {paymentMethods.map((imgUrl, idx) => (
      <div
        key={idx}
        className="h-9 px-3 border border-gray-200 rounded-md flex items-center justify-center bg-white shadow-2xs"
      >
        <img
          src={imgUrl}
          alt={`Payment method ${idx + 1}`}
          className="h-5 object-contain"
        />
      </div>
    ))}
  </div>
</div>
</div>

 
      <div className="block md:hidden bg-white rounded-xl border border-gray-100 shadow-2xs space-y-4">
        <div>
          <h3 className="font-bold text-gray-900 text-sm mb-2">Additional Facts:</h3>
          <ul className="list-disc list-inside text-[10px] text-gray-700 space-y-1">
            {additionalFacts.map((fact, idx) => (
              <li key={idx}>{fact}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-gray-900 text-sm mb-2">
            Payment accepted by the property
          </h3>
          <div className="flex items-center gap-2 flex-wrap">
            {paymentMethods.map((imgUrl, idx) => (
              <div
                key={idx}
                className="h-8 px-3 border border-gray-200 rounded-md flex items-center justify-center bg-white"
              >
                <img
                  src={imgUrl}
                  alt={`Payment method ${idx + 1}`}
                  className="h-4 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}