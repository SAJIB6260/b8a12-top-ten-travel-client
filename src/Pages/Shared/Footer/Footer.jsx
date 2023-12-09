import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <footer className="bg-neutral-content bg-opacity-60 text-[#16CAC9] font-semibold">
            <div className="">
                <p className="w-full flex justify-center"><Link to="/"><img src="https://i.ibb.co/0Q9xVGx/SGN-11-28-2023-1701110938473.png" className="h-28 md:h-36" alt="" /></Link></p>
            </div>
            <div className="w-full flex justify-end items-center">
            <div className="w-3/5 md:w-full text-center md:items-center md:flex md:justify-evenly">
                    <div className="w-1/3 text-center mb-5 md:mb-0">
                        <h1 className="text-[#F99615] font-semibold md:text-lg mb-1">Top Ten Travel</h1>
                        <Link to="aboutUs"><p>About us</p></Link>
                        <Link to="blogs"><p>Blogs</p></Link>
                    </div>
                    <div className="w-1/3 text-center mb-5 md:mb-0">
                        <h1 className="text-[#F99615] font-semibold md:text-lg mb-1">Support</h1>
                        <Link to="contactUs"><p>Contact Us</p></Link>
                        <p>FAQ</p>
                    </div>
                    <div className="w-1/3 text-center mb-5 md:mb-0">
                        <h1 className="text-[#F99615] font-semibold md:text-lg mb-1">Follow Us</h1>
                        <p>Facebook</p>
                        <p>Instagram</p>
                    </div>
            </div>
            </div>
            <div className="footer footer-center p-4 text-[#16CAC9]">
                <aside>
                    <p>Copyright © 2023 - All right reserved by Top Ten Travel ( TTT )</p>
                </aside>
            </div>

        </footer>
    );
};

export default Footer;