import api from "./apiInstance";

export const fetchFeaturedEventHome = async () => {
try{
const response = await api.get("/event-homepage");
return response.data.data || response.data;
}
catch(error){
console.error('Error in fetchFeaturedeventpage:', error);
return [];   
}
}