// import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";

import SectionTitle from "../../Components/SectionTitle/SectionTitle";
import Container from "../Shared/Container/Container";


const AboutUs = () => {
    return (
        <Container>
            <div>
            <div className="my-2">
                <SectionTitle
                heading={"About Us"}
                ></SectionTitle>
            </div>
            <div className="flex justify-center my-5">
                <h1 className="text-xl font-semibold">Top Ten Travel is a tour marketplace that connects tourists and tour guide professionals.</h1>
            </div>
            <div className="mb-5">
                <h1 className="text-4xl text-start text-[#16CAC9] mb-5 font-semibold">
                Why book with us?
                </h1>
                <div className="flex flex-col md:flex-row md:justify-between">
                <div>
                <h3 className="text-2xl text-[#F99615] font-semibold">
                Each experience can be personalized
                </h3>
                <p>
                Request a tailor-made tour, from our community of guides. Guides will create the best plan for you, according to your preferences.
                </p>
                </div>
                <div className="md:ml-10 mt-5 md:mt-0">
                    <h3  className="text-2xl text-[#F99615] font-semibold">
                    Customer support service
                    </h3>
                    <p>
                    The most important for us is to give the best experience to our customer, we can help you with anything you want to know about your trip, Top Ten Travel Staff or Our Guides can help you with your questions. please don’t hesitate to Contact Us.
                    </p>
                </div>
                </div>
            </div>
        </div>
        </Container>
    );
};

export default AboutUs;