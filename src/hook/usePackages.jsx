// import { useEffect, useState } from "react";s

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const usePackages = () => {
    // const [packages, setPackages] = useState([]);

    // useEffect( ()=>{
    //     fetch('https://top-ten-travel-server.vercel.app/package')
    //         .then(res => res.json())
    //         .then(data => {
    //             setPackages(data);
    //         })
    // },[])
    // return [packages];

    const axiosSecure = useAxiosSecure();
    const { data : packages = [], refetch } = useQuery({
        queryKey: ["package"],
        queryFn: async () => {
            const res = await axiosSecure.get("/package")
            return res.data;
        }
    });
    return [packages, refetch]

};

export default usePackages;