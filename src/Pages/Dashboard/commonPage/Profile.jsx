import { Helmet } from "react-helmet-async";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";


const Profile = () => {
    const { user } = useAuth();
    console.log(user)

    const axiosSecure = useAxiosSecure();
    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })
  
  
    const currentUser = users.find((cUser) => cUser?.email === user?.email)
    console.log(users,currentUser?.role)

    return (
        <div className="flex flex-col justify-center items-center ">
            <Helmet>
                <title>DashBoard | Profile</title>
            </Helmet>
            <h1 className="text-2xl font-extrabold mb-5  ">
                <span className="text-[#16CAC9] ">Welcome Back !!!</span> <span className="text-[#F99615]">{currentUser?.role}</span>
            </h1>
            <div className="card w-96 justify-center card-side bg-base-100 shadow-xl flex flex-col">
                <div>
                    <figure><img src={user?.photoURL} alt={user?.displayName} /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title"> <span className="text-xl text-black font-extrabold"> Name:</span> <span className="text-blue-400">{user?.displayName}</span></h2>
                    <p className="font-bold text-base w-full mr-5 text-blue-400">
                        <span className="text-xl text-black font-extrabold"> Email:</span> {user?.email}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Profile;