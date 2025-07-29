// import { cookies } from "next/headers";
// import envConfig from "../config/envConfig";
// import axios from "axios";
// import { getNewAccessToken } from "../services/auth";

// const axiosInstance = axios.create({
//   baseURL: envConfig.baseApi,
//   withCredentials:true
// });

// axiosInstance.interceptors.request.use(
//   async function (config) {
//     const cookieStore = await cookies();
//     const accessToken = cookieStore.get("refreshToken")?.value;

//     if (accessToken) {
//       config.headers.Authorization = accessToken;
//     }

//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   }
// );

// axiosInstance.interceptors.response.use(
//   function (response) {
//     return response;
//   },
//   async function (error) {
//     const config = error.config;

//     if (error?.response?.status === 401 && !config?.sent) {
//       config.sent = true;
//       // const res = await getNewAccessToken();
//       // const refreshToken = res.data.refreshToken;
//       // const cookieStore = await cookies();

//       // config.headers["Authorization"] = refreshToken;
//       // cookieStore.set("refreshToken", refreshToken);

//       return axiosInstance(config);
//     } else {
//       return Promise.reject(error);
//     }
//   }
// );

// export default axiosInstance;

// lib/axios/instance.ts
// import axios from "axios";

// const axiosInstance = axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   withCredentials: true
// });

// // For server components
// export async function getServerSideRequestConfig() {
//   const { cookies } = await import('next/headers');
//   const accessToken = cookies().get('refreshToken')?.value;
//     console.log({accessToken
      
//     });
//   return {
//     headers: {
//       ...(accessToken ? { Authorization: accessToken } : {}),
//     }
//   };
// }

// // For client components
// if (typeof window !== 'undefined') {
//   axiosInstance.interceptors.request.use((config) => {
//     const accessToken = require('js-cookie').get('refreshToken');
//     if (accessToken) {
//       config.headers.Authorization = accessToken;
//     }
//     return config;
//   });
// }

// export default axiosInstance;

// lib/axios/instance.ts
"use client"
import axios from "axios";
import Cookies from "js-cookie"; // Install with: npm install js-cookie @types/js-cookie

// Create base axios instance for client-side use
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKECD,
  withCredentials: true,
});

// Add auth token to every request
axiosInstance.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem('accessToken')
   
  if (accessToken) {
    config.headers.Authorization = accessToken;
  }
  console.log(config)
  return config;
});

// Handle token refresh when requests fail
// axiosInstance.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;
    
//     // If 401 error and we haven't already retried
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
      
//       try {
//         const refreshToken = Cookies.get("refreshToken");
        
//         if (refreshToken) {
//           // Attempt to refresh tokens
//           const response = await axios.post(
//             `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
//             { refreshToken }
//           );
          
//           // Update cookies with new tokens
//           const { accessToken, refreshToken: newRefreshToken } = response.data;
//           Cookies.set("accessToken", accessToken, { secure: true, sameSite: "lax" });
//           if (newRefreshToken) {
//             Cookies.set("refreshToken", newRefreshToken, { secure: true, sameSite: "lax" });
//           }
          
//           // Retry original request with new token
//           originalRequest.headers.Authorization = accessToken;
//           return axiosInstance(originalRequest);
//         }
//       } catch (refreshError) {
//         console.error("Token refresh failed:", refreshError);
//         // Redirect to login if refresh fails
//         if (typeof window !== "undefined") {
//           window.location.href = "/login";
//         }
//       }
//     }
    
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;

