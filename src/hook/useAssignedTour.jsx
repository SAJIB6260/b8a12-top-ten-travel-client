import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useAssignedTour = () => {
    //tan stack query
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch, data: assignedTours = []} = useQuery({
        queryKey: ['assignedTour', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get("/bookings");
            return res.data;
        }
    })
    return [assignedTours, refetch];
};

export default useAssignedTour;