'use server'
import axiosInstance from "@/src/lib/AxiosInstance";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";


export const UserLogin = async(data:FieldValues)=>{
  
         const res = await fetch(`${process.env.NEXT_PUBLIC_BACKECD}/auth/login`,{
        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data),
        cache:"no-store",
         credentials: 'include'
    });
    const userInfo = res.json()
    console.log({userInfo});
    return userInfo;
    
}

export const registerUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post("/user/create-user", userData);
    // const cookieStore  =await cookies()
    if (data.success) {
      
    }

    return data;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
    
  }
};

export const logout =async () => {
    const cookieStore  =await cookies()
  
  cookieStore.delete("refreshToken");
};


export const getCurrentUser = async () => {
    const cookieStore = await cookies()
  const accessToken = cookieStore.get("refreshToken")?.value;

  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
    
    return {
      _id: decodedToken._id,
      role: decodedToken.role,
      
    };
  }

  return decodedToken;
};


export const getNewAccessToken = async () => {
  try {
    const cookieStore = await cookies()
    const refreshToken = cookieStore.get("refreshToken")?.value;

    const res = await axiosInstance({
      url: "/auth/refresh-token",
      method: "POST",
      withCredentials: true,
      headers: {
        cookie: `refreshToken=${refreshToken}`,
      },
    });

    return res.data;
  } catch (error) {
    throw new Error("Failed to get new access token");
  }
};