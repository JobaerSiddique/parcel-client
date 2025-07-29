
import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";


export const createParcel = async (Pdata: any) => {
  try {
    const { data } = await axiosInstance.post("/parcel/create-parcel", Pdata);
    
    if (!data.success) {
      throw new Error(data.message || "Failed to create parcel");
    }
    
    return data;
  } catch (error: any) {
    if (error.response) {
      // Handle specific error messages from server
      const message = error.response.data?.message || error.message;
      throw new Error(message);
    }
    throw new Error(error.message || "Failed to create parcel");
  }
};

export const getCustomerParcel = async()=>{
    try {
        const {data} = await axiosInstance.get('/parcel/customer-parcel')
        console.log(data);
        return data
    } catch (error) {
      console.log(error);
        throw error; 
    }
}

