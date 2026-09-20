import api from "./apiInstance";

export const getCityDestinations = async () => {
try{
const response = await api.get("/city-destinations");
return response.data;
}
catch(error){
console.error("Error fetching city destinations:", error);
throw error;
}
}