import type { Metadata } from "next";

import HeroBanner from "./firstSection";
import EventsPage from "./activeEvent";
import HowToBuyTickets from "@/components/Other/OthersSection/Section1"
import TravelServices from "@/components/Other/OthersSection/Section2";
import TravelOptionsSection from "@/components/Other/OthersSection/Section3";
import MobileAppSection from "@/components/Other/OthersSection/Section4";


export const metaData : Metadata = {
    title: "Buy Event Tickets Online | gokawsar Event ",
    description: "ook tickets online for upcoming HR conferences, music concerts, tech summits, and live events. Fast, secure, and hassle-free event ticketing platform."
}

export default function page(){

return(
<div>
    <HeroBanner />
    <EventsPage />
    <HowToBuyTickets />
    <TravelServices />
    <TravelOptionsSection />
    <MobileAppSection />
</div>
)
}