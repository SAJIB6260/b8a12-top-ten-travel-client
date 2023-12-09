// import useGuideAssignedTours from "../../../hook/useGuideAssignedTours";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import useAssignedTour from "../../../hook/useAssignedTour";
import useAuth from "../../../hook/useAuth";


const MyAssignedTours = () => {
    // const [assignedTours, refetch] = useGuideAssignedTours();
    const [assignedTours, refetch] = useAssignedTour();
    const {user} = useAuth();
    const axiosSecure =useAxiosSecure();
    const  assignedTour = assignedTours.filter(tour => tour.guide_email === user?.email)
    console.log (assignedTour)
    const handleAccepted = () => {    
        // Swal.fire({
        //     title: "Are you sure?",
        //     text: "You want to Accept It!",
        //     icon: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#3085d6",
        //     cancelButtonColor: "#d33",
        //     confirmButtonText: "Yes, Accepted!"
        // }).then((result) => {
        //     if (result.isConfirmed) {
        //         axiosSecure.patch(`/users/admin/${user._id}`)
        //         .then(res => {
        //             console.log(res.data)
        //             if (res.data.modifiedCount > 0) {
        //                 refetch();
        //                 Swal.fire({
        //                     position: "top-end",
        //                     icon: "success",
        //                     title: `${user.name} is an admin Now`,
        //                     showConfirmButton: false,
        //                     timer: 1500
        //                 });
        //             }
        //         })
        //     }
        // });
    }

    const handleDelete = id => {
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
                axiosSecure.delete(`/bookings/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your booking tour package has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }

        });
    }


    return (
        <div>
            <SectionTitle
                heading={"My Assigned Tours"}
            ></SectionTitle>
            {/* <div className="flex justify-evenly mb-8">
                <h1 className="text-xl md:text-4xl">My Assigned Tours: {assignedTours.length}</h1>
            </div> */}
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Tourist email</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Accept</th>
                            <th>Reject</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            assignedTour.map((item, index) => <tr key={item?._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex item?s-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item?.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item?.tour_title}
                                </td>
                                <td>
                                    {item?.email}
                                </td>
                                <td>{item?.price} BDT</td>
                                <td>
                                    {
                                        item?.status === "inReview" ? <button className=" bg-[#F99615] text-white py-2 px-4 rounded-md font-medium">
                                        {item?.status}
                                    </button> : <>
                                    {
                                        item?.status === " Accepted" ? <button onClick={() => handleAccepted(item)} className=" bg-[#16CAC9] text-white py-2 px-4 rounded-md font-medium">
                                        Accepted
                                    </button> : <button className=" bg-red-600 text-white py-2 px-4 rounded-md font-medium">
                                        {item?.status}
                                    </button>
                                    }
                                    </>
                                    }
                                </td>
                                <td>
                                <button onClick={() => handleAccepted(item)} className=" bg-[#16CAC9] text-white py-2 px-4 rounded-md font-medium">
                                        Accepted
                                    </button>
                                </td>
                                <td>
                                <button className=" bg-red-600 text-white py-2 px-4 rounded-md font-medium">
                                        Rejected
                                    </button>
                                </td>
                                <td>
                                <button  onClick={() => handleDelete(item?._id)}
                                         className="btn btn-ghost btn-lg">
                                         <FaTrashAlt className="text-red-600"></FaTrashAlt>
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

export default MyAssignedTours;