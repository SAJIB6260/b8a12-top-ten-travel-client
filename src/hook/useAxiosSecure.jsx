import axios from "axios";

const axiosSecure = axios.create({
    baseURL: "https://top-ten-travel-server.vercel.app"
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;