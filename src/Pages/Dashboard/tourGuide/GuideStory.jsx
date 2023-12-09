import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth";
import useAxiosSecure from "../../../hook/useAxiosSecure";
import Swal from "sweetalert2";


const GuideStory = () => {
    const {user} = useAuth();

    const { 
        register, 
        handleSubmit, 
        reset
    } = useForm();
    const axiosSecure = useAxiosSecure();
    const onSubmit = async (data) => {

            // send
            const storyItem = {
                tour_story: data.story,
                guide_name: data.name,   
                guide_eamil: data.email,
                guide_image : user?.photoURL,
                
            };
            console.log(storyItem)

            const storyRes = await axiosSecure.post("/stories", storyItem);
            console.log(storyRes.data);
            if (storyRes.data.insertedId) {
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Package Has been Saved",
                    showConfirmButton: false,
                    timer: 1500
                });         
        }
    };


    return (
        <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* Tour Title  */}     
            <div className="flex justify-center items-center gap-6">
            <div className="form-control w-full my-6">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    {...register("name", { required: true })}
                    defaultValue={user?.displayName}
                    type="text"
                    placeholder="Tour Plan"
                    required
                    className="input input-bordered w-full"
                />
            </div>
            <div className="form-control w-full my-6">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    {...register("email", { required: false })}
                    defaultValue={user?.email}
                    type="text"
                    placeholder="guide email"
                    required
                    className="input input-bordered w-full"
                />
            </div>
            </div>

            <div className="form-control w-full my-6">
                <label className="label">
                    <span className="label-text">Story</span>
                </label>
                <input
                    {...register("story", { required: true })}
                    type="text"
                    placeholder="story writing"
                    required
                    className="input input-bordered w-full"
                />
            </div>

            <div className="form-control mt-6">
                    <input className="btn btn-primary" type="submit" value="Add story" />
                </div>
        </form>
    </div>
    );
};

export default GuideStory;