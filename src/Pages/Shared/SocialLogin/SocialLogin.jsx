import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hook/useAxiosPublic";


const SocialLogin = () => {
    
    const axiosPublic = useAxiosPublic();
    const {signInWithGoogle} = useAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
            const userInfo = {
                name : result.user?.displayName,
                email : result.user?.email,
                role : "tourist",
                status : "Verified"
            }
            console.log(userInfo)
            axiosPublic.post("/users", userInfo)
            .then(res => {
                console.log(res.data)
                navigate('/');
            })
        })
    }

    return (
        <div className="px-8 py-2">
            <div className="divider">OR</div>
            <div>
                <button onClick={handleGoogleSignIn} className="btn w-full">
                    <FaGoogle></FaGoogle>
                    Google
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;