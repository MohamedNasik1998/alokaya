import logo from '../assets/images/logo.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Outlet, Link } from "react-router-dom";
import Login from './login';
import Register from './register';

const NavBarLogout = () => {
    return (
        <>
            <div className='fixed top-0 left-0 w-full z-50 m-0 px-2 py-2 text-white' style={{backgroundColor:'#213343'}}>
                <div className='flex w-full'>
                    <div className="flex w-[30%] gap-3">
                        <div className="px-3 hidden md:block">
                            <img src={logo} className='w-16 h-16 rounded-full' alt="Logo" />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className='text-2xl font-bold'>ALOKAYA</span>
                            <span className='text-md font-semibold hidden md:block'>Connecting customers to your brand</span>
                        </div>
                    </div>
                    <div className="flex w-[56%] justify-center">
                        <input type="text" className='w-[80%] h-[40px] rounded-md px-3' placeholder="Search..." />
                        <button className='bg-blue-500 mx-3 w-[60px] h-[40px] rounded-md'><FontAwesomeIcon icon={faSearch} /></button>
                    </div>
                    <div className="flex w-[14%]" >
                        <Link to="/login"><button className='bg-blue-500 mx-1 px-2 w-[80px] h-[40px] rounded-md font-semibold uppercase'>Login</button></Link>
                        <Link to="/register"><button className='bg-blue-500 mx-1 px-2 w-[90px] h-[40px] rounded-md font-semibold uppercase'>Register</button></Link>
                    </div>
                </div>
                <hr className='border-gray-600 mt-2' />
                <div className='mx-12 px-2 py-1'>
                    <ul className='flex w-full justify-between font-semibold uppercase'>
                        <li className='hover:text-blue-400'><Link to="/">Home</Link></li>
                        <li className='hover:text-blue-400'><Link to="/contact">Contact</Link></li>
                        <li className='hover:text-blue-400'><Link to="/location">Location</Link></li>
                        <li className='hover:text-blue-400'><Link to="/category">Category</Link></li>
                        <li className='hover:text-blue-400'><Link to="/post-add">Post an add</Link></li>
                    </ul>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default NavBarLogout;