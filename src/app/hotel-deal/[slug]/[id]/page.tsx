import HotelDetailsClient from "@/components/hotel/hotel-details/HotelDetailsClient"

export const metadata = {
  title: 'Online Hotel Booking | GoKawsar',
  description: 'GoKawsar is your ultimate online hotel booking platform designed to make your travel planning effortless and seamless.',
};

interface PageProps {
  params: Promise<{ slug: string; id: string }>;
}

export default async function page({ params }: PageProps){
const { slug, id } = await params;    
return(
<div className="lg:pt-17" style={{userSelect: "none"}}>
<HotelDetailsClient slug={slug} id={id}/>
</div>
)    
}