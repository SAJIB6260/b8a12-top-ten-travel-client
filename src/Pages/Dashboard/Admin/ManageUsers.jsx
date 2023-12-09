import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hook/useAuth";


const ManageUsers = () => {
    const {user} = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })

    // make admin 
    const handleMakeAdmin = user => {    
        Swal.fire({
            title: "Are you sure?",
            text: "You want make him Admin!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/admin/${user._id}`)
                .then(res => {
                    console.log(res.data)
                    if (res.data.modifiedCount > 0) {
                        refetch();
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${user.name} is an admin Now`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                    }
                })
            }
        });
    }

    // make tour guide
    const handleMakeGuide = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You wan make hin Guide!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Guide!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/users/guide/${user._id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${user.name} is an tour-guide Now`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }

        });


    }


    // deleted users
    const handleDeleteUser = user => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/users/${user._id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch();
                            Swal.fire({
                                title: "Deleted!",
                                text: `${user.name}has been deleted.`,
                                icon: "success"
                            });
                        }
                    })
            }

        });
    }

    return (
        <div>
             <Helmet>
                <title>DashBoard | Manage Users</title>
            </Helmet>
            <div>
                <h1 className="text-4xl">Total users: {users?.length}</h1>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Change Role</th>
                            <th>Change Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index) => <tr key={item?._id}>
                                <th>{index + 1}</th>
                                <td>{item?.name}</td>
                                <td>{item?.email}</td>
                                <td>
                                    <button className=" bg-[#496464] text-[#F99615] py-2 px-4 rounded-md  font-medium">
                                        {item.role}
                                    </button>
                                </td>
                                <td>
                                    {item.role === "admin" && item.email === user?.email ? <button className=" bg-[#16CAC9] text-white py-2 px-4 rounded-md font-medium">
                                            admin
                                        </button> :
                                        <button onClick={() => handleMakeAdmin(item)}
                                            className=" bg-[#16CAC9] text-white py-2 px-4 rounded-md font-medium">
                                            admin
                                        </button>
                                    }
                                </td>
                                <td>
                                {item.role === "admin" && item.email === user?.email ? <button className=" bg-[#16CAC9] text-white py-2 px-4 rounded-md font-medium">
                                        tour-guide
                                    </button> :
                                        item.role === "tour-guide" ? <button 
                                        className=" bg-[#16CAC9] text-white py-2 px-4 rounded-md font-medium">
                                        tour-guide
                                    </button> : <button onClick={() => handleMakeGuide(item)}
                                        className=" bg-[#16CAC9] text-white py-2 px-4 rounded-md font-medium">
                                        tour-guide
                                    </button>
                                    }
                                    
                                </td>
                                <td>
                                    <button onClick={() => handleDeleteUser(item)}
                                        className=" bg-red-600  p-3 rounded-md text-lg">
                                        <FaTrashAlt className="text-white"></FaTrashAlt>
                                    </button>
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;