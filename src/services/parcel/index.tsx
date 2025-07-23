'use server'
import axiosInstance from "@/src/lib/AxiosInstance";
import { FieldValues } from "react-hook-form";


export const createParcel= async (Pdata: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/parcel/create-parcel", Pdata);
    // const cookieStore  =await cookies()
    console.log(data);
    if (data.success) {
      
    }

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
    
  }
};

export const getCustomerParcel = async()=>{
    try {
        const {data} = await axiosInstance.get('/parcel/customer-parcel')
        console.log(data);
        return data
    } catch (error) {
        
    }
}

