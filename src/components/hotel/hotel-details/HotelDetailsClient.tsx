"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { getHotelData } from "@/services/hotelDetailsApi";
import HotelHeaderGallery from "./HeaderSection";
import HighlightedFacilities from "./HighlightedFacilities";
import HotelPolicy from "./HotelPolicy";
import CategorizedFacilities from "./CategorizedFacilities";
import ExploreNeighbour from "./Map";
import AppDownloadSection from "@/app/home/GetmoreApp";
import HotelFAQ from "./Faq";
import ImportantNote from "./Note";
import HotelNavigationTabs from "./HotelNavigationTabs";
import RoomList from "./RoomList";
import RoomListResponsisve from "./RoomListResponsive";
import SearchBar from "./MainSearchBar";
import SearchBarResponsive from "./ResponsiveSearchBar";

interface Props {
  slug: string;
  id: string;
}

function HotelDetailsContent({ slug, id }: Props) {
  const searchParams = useSearchParams();
  
  const hotelNameFromUrl = searchParams.get("name") || slug.replace(/-/g, " ");
  const starRatingFromUrl = Number(searchParams.get("starRating")) || 5;

  const [hotelData, setHotelData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [guestRooms, setGuestRooms] = useState<
  {
     adults: number;
     childrenAges: number[];
   }[]
 >([
   {
     adults: 2,
     childrenAges: [],
   },
 ]);

    const filteredRooms = hotelData?.rooms?.filter((room: any) =>
    guestRooms.every(
    (guestRoom) =>
      room.maxAdults >= guestRoom.adults &&
      room.maxChildren >= guestRoom.childrenAges.length
  )
);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const res = await getHotelData(slug);
        
        if (res?.success && res?.data) {
          setHotelData(res.data[slug]);
        }
      } catch (error) {
        console.error("Error fetching details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) fetchDetails();
  }, [slug]);

  if (loading) return <div className="py-20 text-center">Loading Details...</div>;
  if (!hotelData) return <div className="py-20 text-center text-red-500">Data Not Found</div>;

  return (
    <div className="sm:space-y-6">

      <div id="overview-section">
        <HotelHeaderGallery
        hotelName={hotelNameFromUrl}
        starRating={starRatingFromUrl}
        address={hotelData.address}
        distanceText={hotelData.distanceText}
        maplink={hotelData.maplink}
        description={hotelData.description}
        mapEmbedUrl={hotelData.mapEmbedUrl}
        startingPrice={hotelData.startingPrice}
        galleryImages={hotelData.galleryImages}
      />
      </div>


    <div className="hidden sm:block">
      {hotelData?.HighLFac && hotelData.HighLFac.length > 0 &&(
        <HighlightedFacilities facilities={hotelData.HighLFac} />
      )}
    </div>


      <HotelPolicy 
      checkIn={hotelData?.checkInTime || hotelData?.policy?.checkIn}
      checkOut={hotelData?.checkOutTime || hotelData?.policy?.checkOut}
      />

      <div className="hidden sm:block">
        <HotelNavigationTabs />
      </div>


      <div className="sm:block hidden">
        <SearchBar 
        onSearch={({ rooms }) => {
        setGuestRooms(rooms);
        }}
        hotelName={hotelNameFromUrl}
        />
      </div>

      <div className="sm:hidden block">
        <SearchBarResponsive 
        onSearch={({ rooms }) => {
        setGuestRooms(rooms);
        }}
        hotelName={hotelNameFromUrl}
        />
      </div>


      <div className="sm:block hidden bg-[#EBEFF5] py-5" id="room-selection-section">
        <RoomList 
        rooms={filteredRooms || []} 
        guestRooms={guestRooms}
        />
      </div>

      <div className="sm:hidden block bg-[#EBEFF5] py-5">
        <RoomListResponsisve 
        rooms={filteredRooms || []}  
        guestRooms={guestRooms}
        />
      </div>

     <div className="hidden sm:block">
      {hotelData?.categorizedFacilities && hotelData.categorizedFacilities.length > 0 && (
      <CategorizedFacilities facilities={hotelData.categorizedFacilities} />
      )}
     </div>

    <div id="location-section">
      <ExploreNeighbour mapRedirectUrl={hotelData.mapRedirectUrl}/>
    </div>

    <div className="sm:block hidden" id="policies-section">
      <ImportantNote 
        policyData={{
        checkInTime: hotelData.checkInTime || "02:00 PM",
        checkOutTime: hotelData.checkOutTime || "11:00 AM",
        additionalFacts: hotelData.additionalFacts || [],
        paymentMethods: hotelData.paymentMethods || []
      }}
      />
    </div>

      <div className="block sm:hidden">
      {hotelData?.HighLFac && hotelData.HighLFac.length > 0 &&(
        <HighlightedFacilities facilities={hotelData.HighLFac} />
      )}
      </div>

      <div className="block sm:hidden">
        {hotelData?.categorizedFacilities && hotelData.categorizedFacilities.length > 0 && (
        <CategorizedFacilities facilities={hotelData.categorizedFacilities} />
        )}
      </div>

      <div className="sm:hidden block">
        <ImportantNote 
            policyData={{
            checkInTime: hotelData.checkInTime || "02:00 PM",
            checkOutTime: hotelData.checkOutTime || "11:00 AM",
            additionalFacts: hotelData.additionalFacts || [],
            paymentMethods: hotelData.paymentMethods || []
          }}/> 
      </div>

        <div className="hidden sm:block">
          <HotelFAQ />
        </div>

      <div className="hidden sm:block">
        <AppDownloadSection />
      </div>

    </div>
  );
}


export default function HotelDetailsClient(props: Props) {
return (
  <Suspense fallback={<div className="py-20 text-center">Loading...</div>}>
    <HotelDetailsContent {...props} />
  </Suspense>
);
}