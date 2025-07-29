import axiosInstance from "@/src/lib/AxiosInstance";

export const getAllUser = async()=>{
    try {
        const {data} = await axiosInstance.get('/admin/allUser')
        console.log(data);
        return data
    } catch (error) {
        
    }
}
