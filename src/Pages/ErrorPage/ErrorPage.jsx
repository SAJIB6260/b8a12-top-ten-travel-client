import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className='h-screen'>
            <Helmet>
                <title>Top Ten Travel | Error Page</title>
            </Helmet>
            <div className="h-4/5 flex justify-center items-center">
                <img src="https://i.ibb.co/K6dP5p0/giphy-6.gif" alt="" />
            </div>
            <div className="flex justify-center items-center">
                <h3 className="text-xl md:text-3xl font-bold">Go To <Link to="/"><button className="bg-[#005ed9] text-white px-4 py-2 rounded-md">Home</button></Link></h3>
            </div>

        </div>
    );
};

export default ErrorPage;