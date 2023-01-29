import React from 'react';
import {
    FaInstagram,
    FaGoogle,
} from 'react-icons/fa';
import appatakars from "./../assets/appatakars.png";
import beingkecinan from "./../assets/bkecian.png";

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 relative'>
            <div>
                <h1 className='w-full text-4xl font-bold text-[#00df9a]'>Contact Us</h1>
                <p className='py-4 font-bold  text-1xl text-white'>Staff Co ordinators </p>
                <p className='font-mono' >Mr. Thangarasu S K - 9942783338</p>
                <p className='py-4 font-bold text-1xl text-white'>Student Co ordinators </p>
                <p className='font-mono'>Selva Vignesh - 6380082151</p>   
            </div>
            <div className='font-mono mt-10'>
                <div>
                    <ul>
                    <a  href='mailto:competitions.rbc.kec@gmail.com' rel="noopener noreferrer " target={"_blank"} >
                        <li className='py-2 text-sm '> <FaGoogle size={30} className="inline-block" />   competitions.rbc.kec</li>
                        </a>          
                    </ul>
                    <br/>
                    <ul>
                    <a  href='https://www.instagram.com/robotics.club_kec/?igshid=YmMyMTA2M2Y%3D' rel="noopener noreferrer " target={"_blank"} >
                        <li className='py-2 text-sm'> <FaInstagram size={30}  className="inline-block" />  robotics.club_kec</li>
                        </a>          
                    </ul>
                </div>
            </div>
            <div className='mt-10'>
                <p className='py-4 font-bold text-1xl text-white'>Meme Supporters</p>
                <a href='https://instagram.com/being_kecian?igshid=YmMyMTA2M2Y=' rel="noopener noreferrer " target={"_blank"} >
                <img src={beingkecinan} className="w-[80px] h-[80px]" alt="beingkecinan"></img>        
                </a>          
                <a href='https://instagram.com/kec_appatakkars?igshid=YmMyMTA2M2Y=' rel="noopener noreferrer " target={"_blank"} >
                    <img src={appatakars}  className="w-[80px] h-[80px]" alt="appatakars"></img>        
                </a>          
            </div>            
            
            <hr />
            <div className='flex justify-center allign-center'>
                 <p className='px-4'>Copyrights</p> <p className='font-mono'>@</p><p>dreamimbue</p>
            </div>
            <hr/>
        </div>
    );
};

export default Footer;