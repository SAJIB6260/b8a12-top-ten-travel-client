import { useLoaderData } from "react-router-dom";
import Container from "../../Pages/Shared/Container/Container";
import DatePicker from "react-datepicker";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hook/useAxiosPublic";
import useAuth from "../../hook/useAuth";
import { motion } from "framer-motion"

const PackageDetais = () => {
    const { user } = useAuth();
    const tourPackage = useLoaderData();
    const [startDate, setStartDate] = useState();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        }
    })

    const guideUser = users?.filter((gUser) => gUser.role === "tour-guide")
    // console.log(guideUser)
    const currentUser = users?.find((cUser) => cUser?.email === user?.email)

    const { _id, tour_title, tour_type, image, duration, price, language, guide_plan } = tourPackage;

    const handleBookService = event => {

        event.preventDefault();
        const form = event.target;
        const guideEmail = form.guide.value;
        console.log( startDate, tour_title, price, language)
        console.log(guideEmail)

        const bookingInfo = {
            ourId: _id,
            tour_title,
            image,
            email: user.email,
            guide_email: guideEmail,
            price,
            date: startDate,
            status: "inReview"
        }


        Swal.fire({
            title: "Are you sure?",
            text: "You want book this Tour!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Book it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosPublic.post("/bookings", bookingInfo)
                    .then(res => {
                        if (res.data.insertedId) {
                            console.log("user added to the data base")
                            refetch();
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: `${tour_title} Booking Successfully`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        }
                    })
            }

        });

    }


    return (
        <Container>
            <motion.div 
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{ duration: 1 }}            
            className=" flex flex-col md:flex-row md:justify-between">
                <div className="w-full md:w-2/3">
                    <div className='col-span-1 cursor-pointer group bg-black bg-opacity-70 text-white rounded-xl'>
                        <div className='flex flex-col gap-2'>
                            <div
                                className='
              aspect-square 
              w-full 
              relative 
              overflow-hidden 
              rounded-xl
            '
                            >
                                <img
                                    className='
                object-cover 
                w-full
                h-full                 
                group-hover:scale-110 
                transition
              '
                                    src={image}
                                    alt='Room'
                                />
                                <div
                                    className='
              absolute
              top-3
              right-3
            '
                                >

                                </div>
                            </div>
                            <div className="px-4 py-2">
                                <div className='font-semibold text-lg'>{tour_title}</div>
                                <div className='font-semibold text-lg'><span className="font-semibold text-[#16CAC9]">Tour Type: </span> {tour_type}</div>
                                <div className='font-semibold text-white'>
                                    <span className="font-semibold text-[#16CAC9]">Time: </span> {duration} <span className="font-light">hours</span>
                                </div>
                                <div className='font-semibold'><span className="font-semibold text-[#16CAC9]">Live Guide: </span> {language}</div>
                                <div className='flex flex-row items-center gap-1'>
                                    <div className='font-semibold'><span className="font-semibold text-[#16CAC9]">Price: </span> {price} / </div>
                                    <div className='font-light'> Per Person</div>
                                </div>
                                <div>
                                    <span className="font-semibold text-[#16CAC9]"> Tour Plan :</span> {guide_plan}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3">
                    <div className="modal-box space-y-10">


                        <form onSubmit={handleBookService}>
                            <div className="w-full">
                                <DatePicker className=" border-2 py-2 px-4 rounded-lg font-medium"
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    minDate={new Date()}
                                    dateFormat="dd/MM/yyyy"
                                    placeholderText="select your date"
                                    required
                                />

                            </div>
                            <div className="form-control w-full mt-4">
                                {/* <label className="label">
                                    <span className="label-text"> Tour Guide</span>
                                </label> */}
                                <select required
                                    defaultValue="default"
                                    name="guide"
                                    className="select select-bordered"
                                >
                                    <option disabled value="default">
                                        Tour Guide
                                    </option>
                                    {guideUser.map((guide) => (
                                        <option key={guide._id} value={guide.email}>
                                            {guide.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                                <div>
                                    {
                                        currentUser?.role === 'tourist' ? <div className="dialog w-full my-3 flex justify-center ">
                                            <input className="bg-[#009FD9] hover:bg-[#005ed9] text-white text-center items-center text-base font-medium rounded-lg uppercase px-3 py-2 " type="submit" value="Booking" />
                                        </div>
                                        : 
                                        <div className="dialog w-full my-3 flex justify-start ">
                                            <input disabled className="bg-[#009FD9] hover:bg-[#005ed9] text-white text-center items-center text-base font-medium rounded-lg uppercase px-3 py-2 " type="submit" value="Booking" />
                                        </div>
                                    }
                                </div>

                        </form>
                    </div>
                </div>
            </motion.div>
        </Container>
    );
};

export default PackageDetais;