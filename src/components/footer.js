import React from 'react';
import {
    FaInstagram,
    FaGoogle,
} from 'react-icons/fa';
import appatakars from "./../assets/appatakars.png";
import beingkecinan from "./../assets/bkecian.png";
import MapofMTS from './googlemap/googlemap';
import '../styles/footer.css';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <>
            <div className='max-w-[1240px] mx-auto py-16 px-4 flex flex-row flex-wrap justify-between text-gray-300 relative footer'>
                <div className='col-span-2'>
                    <h1 className='w-full text-4xl font-bold text-[#00df9a]'>Contact Us</h1>
                    <p className='py-4 font-bold  text-1xl text-white'>Staff Co ordinator</p>
                    <p className='font-mono' >Dr.Thangarasu.S.K - 9942783338 </p>
                    <p className='font-mono' >Mr.ArunKumar.P.M - 9750135213 </p>
                    <p className='py-4 font-bold text-1xl text-white'>Student Co ordinator</p>
                    <p className='font-mono'>Mr.Selva Vignesh.K - 6380082151</p>
                    <p className='font-mono'>Mr.Vigneswara - 9786521314 </p>
                </div>
                <div className='font-mono mt-12'>
                    <div>
                        <ul>
                            <a href='mailto:competitions.rbc.kec@gmailcom' rel="noopener noreferrer " target={"_blank"} >
                                <li className='py-2 text-sm '> <FaGoogle size={30} className="inline-block" />  competitions.rbc.kec</li>
                            </a>
                        </ul>
                        <br />
                        <ul>
                            <a href='https://www.instagram.com/robotics.club_kec/?igshid=YmMyMTA2M2Y%3D' rel="noopener noreferrer " target={"_blank"} >
                                <li className='py-2 text-sm'> <FaInstagram size={30} className="inline-block" />  robotics.club_kec</li>
                            </a>
                        </ul>
                    </div>
                </div>

                <div className='mt-10 flex flex-col social justify-center items-center'>
                    <p className='py-4 font-bold text-1xl text-white'>Social Media Team</p>
                    <a href='https://instagram.com/being_kecian?igshid=YmMyMTA2M2Y=' rel="noopener noreferrer " target={"_blank"} >
                        <img src={beingkecinan} className="w-[80px] h-[80px]" alt="beingkecinan"></img>
                    </a>
                    <a href='https://instagram.com/kec_appatakkars?igshid=YmMyMTA2M2Y=' rel="noopener noreferrer " target={"_blank"} >
                        <img src={appatakars} className="w-[80px] h-[80px]" alt="appatakars"></img>
                    </a>
                </div>

                <div className='mt-16'>
                    <MapofMTS />
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 relative mb-8'>
                <hr />
                <div className='flex justify-center allign-center '>
                    <p className='px-4'>Developed By</p> <Link to='/dev' className='underline underline-offset-2 text-[#00df9a]'> <p  >dreamimbue</p></Link>
                </div>
                <hr />
            </div>
        </>
    );
};

export default Footer;