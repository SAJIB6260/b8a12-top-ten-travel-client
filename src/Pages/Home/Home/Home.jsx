import Banner from "../Banner/Banner";
import { Helmet } from 'react-helmet-async';
import TourismTab from "../TourismTab/TourismTab";


const Home = () => {
    return (
        <div>
            {/* TODO: Helmet implement just Home page  */}
            <Helmet>
                <title>
                    Top Ten Travel | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <div className="max-w-screen-xl mx-auto">
                <TourismTab></TourismTab>
            </div>
        </div>
    );
};

export default Home;