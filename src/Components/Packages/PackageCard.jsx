import { FaRegHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import useWishlist from "../../hook/useWishlist";
import useAxiosSecure from "../../hook/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion"


const PackageCard = ({ tourPackage }) => {
  const {_id, tour_title, tour_type, image, duration, price, language } = tourPackage;
  const {user} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const[,refetch] = useWishlist();
  
  const axiosSecure = useAxiosSecure();
  const { data: users = [] } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
          const res = await axiosSecure.get("/users");
          return res.data;
      }
  })


  const currentUser = users.find((cUser) => cUser.email === user?.email)
  console.log(users,currentUser?.role)


  const handleAddWishlist = () => {
    if(user && user.email){
//TODO: send wish item to data base
const wishlistItem = {
  tourId: _id,
  email: user.email,
  tour_title,
  image,
  price
}
axiosSecure.post("/wishlists", wishlistItem)
.then(res => {
  console.log(res.data)
  if(res.data.insertedId){
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${tour_title} Added to your wishlist`,
      showConfirmButton: false,
      timer: 1500
    });
    // refetch used for updated wishlist no reload
    refetch()
  }
})
    }
    else{
      Swal.fire({
        title: "Ypu are not Logged In",
        text: "Please Login add to the wishlist",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, LogIn!"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login" , {state:{ from: location}})
        }
      });
    }
  }
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0 }}
    transition={{ duration: 1 }}
    className='col-span-1 cursor-pointer group bg-black bg-opacity-70 text-white rounded-xl'>
      <div className='flex flex-col gap-2 w-full'>
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
                h-full 
                w-full 
                group-hover:scale-110 
                transition
              '
            src={image}
            alt=''
          />
         {
          currentUser?.role !== "tourist" ? ""
          :
          <div
          className='
            absolute
            top-3
            right-3
          '
        >
           <button onClick={handleAddWishlist}>
            <FaRegHeart className="font-bold text-xl text-pink-700"></FaRegHeart>
            </button>

        </div>
         }
        </div>
        <div className="px-4 py-2">
        <div className='font-semibold text-lg'>{tour_title}</div>
        <div className='font-semibold text-lg'>Tour Type: {tour_type}</div>
        <div className='font-semibold text-neutral-500'>
          Time: {duration} <span className="font-light">hours</span>
        </div>
        <div className='font-semibold'>Live Guide: {language}</div>
        <div className='flex flex-row items-center gap-1'>
          <div className='font-semibold'>Price: {price} / </div>
          <div className='font-light'> Per Person</div>
        </div>
        <div className="flex justify-center">
          <Link to={`${_id}`}><button className="bg-[#16CAC9] hover:bg-[#F99615] text-white text-center text-base font-medium rounded-lg uppercase p-3 mr-5 my-2">ViewDetails</button></Link>
        </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PackageCard;