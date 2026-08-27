'use client'

import FirstSection from "./firstSection";
import AppDownloadSection from "./GetmoreApp";
import PartnerShipCompany from "./PartnerShipBank";
import TrendingDestinations from "./TrendingDestinations";

export default function Page() {
return (
<div className="flex flex-col">
<FirstSection />
<TrendingDestinations />
<AppDownloadSection />
<PartnerShipCompany />
</div>
);
}
