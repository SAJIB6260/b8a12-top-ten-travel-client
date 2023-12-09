import Swal from "sweetalert2";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddPackage = () => {


    const { 
        register, 
        handleSubmit, 
        reset
    } = useForm();
    const axiosPublic = useAxiosPublic();
    const onSubmit = async (data) => {
        console.log(data);

        // image upload to imgbb and then get an url
        const imageFile = { image: data.image[0] };
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                "content-type": "multipart/form-data",
            },
        });
        if (res.data.success) {
            // send
            const packageItem = {
                tour_title: data.title,
                tour_type: data.tour_type,   
                price: data.price,
                guide_plan: data.guide_plan,
                duration: data.duration,
                language: data.language,
                image: res.data.data.display_url,
                
            };
            console.log(packageItem)

            const PackageRes = await axiosPublic.post("/package", packageItem);
            console.log(PackageRes.data);
            if (PackageRes.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Package Has been Saved",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        }

        console.log("url", res.data);
    };



    return (
        <div>
             <Helmet>
                <title>DashBoard | Add Packge</title>
            </Helmet>
            <SectionTitle
                heading={"Add Package"}
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Tour Title  */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Tour Title</span>
                        </label>
                        <input
                            {...register("title", { required: true })}
                            type="text"
                            placeholder="Tour Title"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    
                    <div className="flex justify-center items-center gap-6">
                        {/* tour_type  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Tour Type</span>
                            </label>
                            <select
                                defaultValue={"default"}
                                {...register("tour_type", { required: true })}
                                className="select select-bordered w-full"
                            >
                                <option disabled value={"default"}>
                                    Select a Tour Type
                                </option>
                                <option value="Adventure">Adventure</option>
                                <option value="Urban">Urban</option>
                                <option value="Relaxation">Relaxation</option>
                                <option value="Historical">Historical</option>
                            </select>
                        </div>
                        {/*price  */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Tour Price</span>
                            </label>
                            <input
                                {...register("price", { required: true })}
                                type="number"
                                placeholder="price "
                                className="input input-bordered w-full"
                            />
                        </div>
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Tour Plan</span>
                        </label>
                        <input
                            {...register("guide_plan", { required: true })}
                            type="text"
                            placeholder="Tour Plan"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    
                    <div className="flex justify-center items-center gap-6">
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Tour Duration</span>
                        </label>
                        <input
                            {...register("duration", { required: true })}
                            type="number"
                            placeholder="Tour Duration"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Communication</span>
                        </label>
                        <input
                            {...register("language", { required: false })}
                            type="text"
                            placeholder="Communication Language"
                            required
                            className="input input-bordered w-full"
                        />
                    </div>
                    </div>
                    
                    {/* file input  */}

                    <div>
                        <input
                            {...register("image", { required: true })}
                            type="file"
                            className="file-input w-full max-w-xs"
                        />
                    </div>

                    <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Add Package" />
                        </div>
                </form>
            </div>
        </div>
    );

};

export default AddPackage;