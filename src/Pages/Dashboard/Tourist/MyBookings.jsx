import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useBooking from "../../../hook/useBooking";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";


const MyBookings = () => {
    const [booking, refetch] = useBooking();
    const totalPrice = booking.reduce((total, item) => total + item.price, 0);
    const axiosSecure = useAxiosSecure();

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
                heading={"My Bookings"}
            ></SectionTitle>
            <div className="flex justify-evenly mb-8">
                <h1 className="text-xl md:text-4xl">My Bookings Item: {booking.length}</h1>
                <h1 className="text-xl md:text-4xl">Total Price: {totalPrice} BDT</h1>
            </div>
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
                            <th>Guide</th>
                            <th>Price</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            booking.map((item, index) => <tr key={item._id}>
                                <th>
                                    {index + 1}
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.tour_title}
                                </td>
                                <td>
                                    {item.guide_email}
                                </td>
                                <td>{item.price} BDT</td>
                                <td>
                                    {
                                        item?.status === "inReview" ? <button className=" bg-[#F99615] text-white py-2 px-4 rounded-md font-medium">
                                            {item?.status}
                                        </button> : <>
                                            {
                                                item?.status === "Accepted" ? <>
                                                    <button className=" bg-[#16CAC9] text-white py-2 px-4 rounded-md font-medium">
                                                        {item?.status}
                                                    </button>
                                                </> : <>
                                                    <button className=" bg-red-500 text-white py-2 px-4 rounded-md font-medium">
                                                        {item?.status}
                                                    </button>
                                                </>
                                            }
                                        </>
                                    }
                                </td>
                                <td>
                                    {
                                        item.status === "Accepted"  ? <button className=" bg-blue-600 text-white py-2 px-4 rounded-md font-medium">
                                            pay
                                        </button> : <button disabled className=" disabled bg-blue-300 text-white py-2 px-4 rounded-md font-medium">
                                            pay
                                        </button>
                                    }
                                    {/* <button className=" bg-blue-600 text-white py-2 px-4 rounded-md font-medium">
                                        pay
                                    </button> */}
                                </td>
                                <th>
                                    {
                                        item.status !== "Accepted" ? <button onClick={() => handleDelete(item._id)}
                                            className="btn btn-ghost btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button> : <button className="btn btn-lg">
                                            <FaTrashAlt className="text-red-600"></FaTrashAlt>
                                        </button>

                                    }

                                </th>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyBookings;