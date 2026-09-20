import api from "./apiInstance";

export const getHotelData = async (slug: string) => {
try{
const response = await api.get(`/hotel-deal/${slug}`);
return response.data;
}
catch(error){
    console.error("Error fetching Hotel Details Api", error);
    throw error;
}
}