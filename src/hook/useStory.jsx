import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useStory = () => {
    const axiosSecure = useAxiosSecure();
    const { data : stories = [], refetch } = useQuery({
        queryKey: ["story"],
        queryFn: async () => {
            const res = await axiosSecure.get("/stories")
            return res.data;
        }
    });
    return [stories, refetch]
};

export default useStory;