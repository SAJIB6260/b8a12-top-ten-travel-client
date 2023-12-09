import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";


const useWishlist = () => {
    //tan stack query
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const {refetch, data: wishlist = []} = useQuery({
        queryKey: ['wishlist', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/wishlists?email=${user.email}`);
            return res.data;
        }
    })
    return [wishlist, refetch];
};

export default useWishlist;