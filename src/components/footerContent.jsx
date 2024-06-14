import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Outlet, Link } from "react-router-dom";

const FooterContent = () => {
    return (
        <div className='w-full px-2 py-2 pb-5 text-white' style={{ backgroundColor: '#213343' }}>
            <hr className='border-gray-600 mt-12' />
            <div className="flex w-full py-5">
                <div className="w-[33%] font-bold text-lg uppercase flex flex-col items-center">
                    <h2>Terms of use</h2>
                    <h2>Help</h2>
                    <h2>About us</h2>
                </div>
                <div className="w-[33%] text-lg uppercase flex flex-col items-center">
                    <h3 className="font-bold ">Quick Links</h3>
                    <ul className="font-semibold">
                        <li className="hover:text-blue-500"><Link to="/">Home</Link></li>
                        <li className="hover:text-blue-500"><Link to="/contact">Contact</Link></li>
                        <li className="hover:text-blue-500"><Link to="/location">Location</Link></li>
                        <li className="hover:text-blue-500"><Link to="/category">Category</Link></li>
                        <li className="hover:text-blue-500"><Link to="/post-add">Post an ad</Link></li>
                    </ul>
                </div>
                <div className="w-[33%] text-lg uppercase flex flex-col items-center">
                    <h3 className="font-bold">Follow Us</h3>
                    <ul>
                        <li><a href="#" className="hover:text-blue-500" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href="#" className="hover:text-blue-500" target="_blank"><FontAwesomeIcon icon={faTwitter} /></a></li>
                        <li><a href="#" className="hover:text-blue-500" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href="#" className="hover:text-blue-500" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                    </ul>
                </div>
            </div>
            <div className="font-semibold flex items-center justify-center">
                <p className="text-sm">&copy; 2024 Alokaya. All rights reserved.</p>
            </div>
            <Outlet />
        </div>
    );
};

export default FooterContent;