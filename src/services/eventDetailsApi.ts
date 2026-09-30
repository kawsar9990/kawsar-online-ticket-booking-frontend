import api from "./apiInstance";

export const geteventData = async (slug: string) => {
try{
const response = await api.get(`/${slug}`);
return response.data;
}
catch(error){
    console.error("Error fetching event Details Api", error);
    throw error;
}
}