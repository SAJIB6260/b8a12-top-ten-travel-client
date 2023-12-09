import axios from "axios";

const axiosPublic = axios.create({
    baseURL: "https://top-ten-travel-server.vercel.app"
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;