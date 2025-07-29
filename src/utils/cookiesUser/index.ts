"use server"
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";

export const getCurrentUser = async () => {
   const cookieStore = await cookies()
   const accessToken = cookieStore.get('refreshToken')?.value;
  console.log(accessToken);
  let decodedToken = null;
  
  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);
      
    return {
      _id: decodedToken.userId,
      role: decodedToken.role,
      
    };
  }

  

  return decodedToken;
};

export const logOut = async()=>{
    const cookieStore = await cookies()
    cookieStore.delete('refreshToken')
}