import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import useAuth from "../../hook/useAuth";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";
import useAxiosPublic from "../../hook/useAxiosPublic";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key }`
const SignUp = () => {

    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm()

    const { createUser, updateUserProfile } = useAuth();

    const onSubmit = async(data) => {
        const imageFile = { image: data.photoURL[0] }
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type' : 'multipart/form-data'
            }
        })
        console.log(res.data)
        if(res.data.success){
        const photoURL = res.data.data.display_url

        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                updateUserProfile(data.name, photoURL)
                    .then(() => {
                        console.log("user update successfully")
                        
                        const userInfo = {
                            name: data.name,
                            email: data.email,
                            role : "tourist",
                            status : "Verified"
                        }
                        axiosPublic.post("/users", userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log("user added to the data base")
                                    reset();
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "user create Successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate("/")
                                }
                            })
                    })
                    .catch(error => { console.log(error) })
            })
    }
}

    return (
<div className="hero min-h-screen bg-base-200">
            <Helmet>
                <title>Top Ten Travel || Sign Up</title>
            </Helmet>
            <div className="hero-content flex-col w-full">
                <div className="text-center">
                    <h1 className="text-4xl font-bold">Sign Up Now!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name", { required: true })} name="name" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className="text-red-600">Name is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Profile Photo</span>
                            </label>
                            <input type="file" {...register("photoURL", { required: true })} className="file-input file-input-bordered w-full max-w-xs" />
                            {/* <input type="text" {...register("photoURL", { required: true })} placeholder="Photo URL" className="input input-bordered" /> */}
                            {errors.photoURL && <span className="text-red-600">Photo URL is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                            {errors.email && <span className="text-red-600">Email is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 8,
                                maxLength: 20,
                                pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%&*])/
                            })} placeholder="password" className="input input-bordered" />
                            {errors.password?.type === "required" && (<p className="text-red-600">Password is required</p>)}
                            {errors.password?.type === "minLength" && (<p className="text-red-600">Password must be 6 characters</p>)}
                            {errors.password?.type === "maxLength" && (<p className="text-red-600">Password must be less than 20 characters</p>)}
                            {errors.password?.type === "pattern" && (<p className="text-red-600">Password must have one Uppercase, one lower case, one number and one special character.</p>)}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control">
                            <input className="btn btn-primary bg-[#16CAC9] text-white" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className="px-8"><small>Already Have an Account ? <Link to="/login"><span className="text-[#16CAC9] font-semibold">Login</span></Link></small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;