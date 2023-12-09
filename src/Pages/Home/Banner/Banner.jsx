import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

// image from folder
import imgBanner1 from "../../../assets/home/cover-1.jpg"
import imgBanner2 from "../../../assets/home/cover-2.jpg"
import imgBanner3 from "../../../assets/home/cover-3.jpg"

const Banner = () => {
    return (
        <Carousel  autoPlay infiniteLoop={true} interval={3000} stopOnHover transitionTime={2000} showStatus={false} thumbWidth={201.5} showThumbs={false}>
            <div>
                <img src={imgBanner1} />
            </div>
            <div>
                <img src={imgBanner2} />
            </div>
            <div>
                <img src={imgBanner3} />
            </div>
        </Carousel>
    );
};

export default Banner;