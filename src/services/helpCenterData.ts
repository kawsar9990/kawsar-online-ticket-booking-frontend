import api from "./apiInstance";
import { ContactFormData } from "@/app/help-center/HelpCenter";

export const submitHelpCenterForm = async (formData: ContactFormData) => {
try{
const response = await api.post('help-center-data', formData);
return response.data;
}
catch(error: any){
const errorMessage = error.response?.data?.message || error.message || "Failed to submit message";
throw new Error(errorMessage);
}
}