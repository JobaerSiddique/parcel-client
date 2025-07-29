"use client"
import axiosInstance from "@/src/lib/AxiosInstance";
import { decodedToken, getFromLocalStorage, removeFromLocalStorage, setToLocalStorage } from "@/src/utils/AuthService";
import { authKey } from "@/src/utils/constants";
import { logOut } from "@/src/utils/cookiesUser";




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




// export const getCurrentUser = async () => {
//    const accessToken = await localStorage.get('accessToken')?.value
  
//   let decodedToken = null;
//   console.log({accessToken});
//   if (accessToken) {
//     decodedToken = await jwtDecode(accessToken);
    
//     return {
//       _id: decodedToken._id,
//       role: decodedToken.role,
      
//     };
//   }

//   return decodedToken;
// };


// export const getNewAccessToken = async () => {
//   try {
    
//     const refreshToken = localStorage.get("refreshToken")

//     const res = await axiosInstance({
//       url: "/auth/refresh-token",
//       method: "POST",
//       withCredentials: true,
//       headers: {
//         cookie: `refreshToken=${refreshToken}`,
//       },
//     });

//     return res.data;
//   } catch (error) {
//     throw new Error("Failed to get new access token");
//   }
// };
export const storeUserInfo = ({ accessToken }: { accessToken: string }) => {
  //   console.log(accessToken);
  
  return setToLocalStorage(authKey, accessToken);
};

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);
 
  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      _id:decodedData._id,
      role: decodedData?.role.toLowerCase(),
    };
  }
};

export const isLoggedIn = () => {
  const authToken = getFromLocalStorage(authKey);
  if (authToken) {
    return !!authToken;
  }
};

export const removeUser = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("accessToken");
  }
};

export const logout = async () => {
  try {
    // Remove from localStorage
    removeUser();
    
    // Clear cookies via API
    await logOut();
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};

 