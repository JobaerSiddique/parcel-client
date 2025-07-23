import { cookies } from "next/headers";
import envConfig from "../config/envConfig";
import axios from "axios";
import { getNewAccessToken } from "../services/auth";

const axiosInstance = axios.create({
  baseURL: envConfig.baseApi,
  withCredentials:true
});

axiosInstance.interceptors.request.use(
  async function (config) {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("refreshToken")?.value;

    if (accessToken) {
      config.headers.Authorization = accessToken;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const config = error.config;

    if (error?.response?.status === 401 && !config?.sent) {
      config.sent = true;
      const res = await getNewAccessToken();
      const refreshToken = res.data.refreshToken;
      const cookieStore = await cookies();

      config.headers["Authorization"] = refreshToken;
      cookieStore.set("refreshToken", refreshToken);

      return axiosInstance(config);
    } else {
      return Promise.reject(error);
    }
  }
);

export default axiosInstance;