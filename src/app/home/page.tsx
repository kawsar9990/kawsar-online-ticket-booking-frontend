'use client'

import FirstSection from "./firstSection";
import AppDownloadSection from "./GetmoreApp";
import PartnerShipCompany from "./PartnerShipBank";
import TrendingDestinations from "./TrendingDestinations";
import HotelSlider from "./hotelDealHome";
import PartnerAirlines from "./PartnerAirlines";
import ExclusiveOffers from "./exclusiveOffers";

export default function Page() {
return (
<div className="flex flex-col">
<FirstSection />
<PartnerAirlines />
<ExclusiveOffers />
<TrendingDestinations />
<HotelSlider />
<AppDownloadSection />
<PartnerShipCompany />
</div>
);
}
