import api from "./apiInstance";

export interface HotelDeal {
  id: string;
  slug: string;
  name: string;
  thumbnailUrl: string;
  starRating: number;
  totalReviews: number;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
}


export const fetchFeaturedHotelDeals = async (): Promise<HotelDeal[]> => {
try{
const response = await api.get("/hotel-homepage");
return response.data.data || response.data;
}
catch(error){
console.error('Error in fetchFeaturedHotelDeals:', error);
return [];   
}
}