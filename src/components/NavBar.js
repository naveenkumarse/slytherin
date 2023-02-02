import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"
import { Link } from "react-router-dom";
import logo from "./../assets/club_logo.png";
import keclogo from "./../assets/kec logo.png";

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }
    return (
        <div className="flex justify-between items-center flex-wrap h-42 relative">
            <img className=" ml-5" alt="kec logo" style={{width:"calc(100%*0.09)"}} src = {keclogo} ></img>
            <div className="text-white flex justify-between items-center h-24 w-3/5 max-w-[1240px] ">
                
                <Link to="/"><h1 className="w-full text-3xl font-bold text-[#00df9a]"> Expelliarmus 2K23 </h1></Link>
                
                <ul className="hidden md:flex">
                    <li className="p-4"><Link to="/">Home</Link></li>
                    <li className="p-4"><Link to="/events">Events</Link></li>
                    <li className="p-4"><Link to="/about">About</Link></li>
                    <li className="p-4"><Link to="/previous_year_events">History</Link></li>
                </ul>
                <div onClick={handleNav} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

                </div>
                <div className={nav ? 'z-10 fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                    <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4"> Expelliarmus </h1>
                    <ul className="uppercase p-4">
                        <li className="p-4 border-b border-gray-600"><Link to="/">Home</Link></li>
                        <li className="p-4 border-b border-gray-600"><Link to="/events">Event</Link></li>
                        <li className="p-4 border-b border-gray-600"><Link to="/about">About</Link></li>
                        <li className="p-4"><Link to="/previous_year_events">Others</Link></li>
                    </ul>
                </div>
            </div>
            <img className="mr-5" alt="club logo" style={{width:"calc(100%*0.09)"}} src = {logo}></img>
        </div>
    )
}

export default NavBar;
