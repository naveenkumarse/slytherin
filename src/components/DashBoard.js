import React from "react";
import { Link } from "react-router-dom";
import Typed from 'react-typed';
import Spinner from './spinner';

const DashBoard = () => {
    return (
        <>
            <div className="text-white relative"  >
                <div className="max-w-[800px] w-full h-[610px] mx-auto text-center gap-x-50 gap-y-0 flex max-lg:flex-col justify-center">
                    <div className="flex justify-center text-center item-center lg:flex-col mt-10">
                        <Spinner />
                    </div >
                    <div className="flex flex-col justify-center text-center item-center" >
                        <p className="md:text-3xl sm:text-2xl sm:mt-10 text-1xl font-bold  p-2">Kongu Engineering College</p>
                        <div className="relative">
                        <h1 className="md:text-7xl sm:text-6xl sm:mt-10 text-4xl font-bold md:py-6 text-[#00df9a]">Expelliarmus 2K23! </h1>
                        </div>
                            <Typed className="md:text-5xl font-mono sm:text-4xl text-xl font-bold" 
                                strings={['8th Edition','Online-Registration opens','Cash Prize upto ₹30K']}
                                typeSpeed={90}
                                backspeed={70}
                                loop
                            />
                        <p className="md:text-2xl text-xl font-bold text-gray-500 pt-8">March 18,2023</p>
                        <div className="register_but object-contain">
                        <Link to="/events">
                        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Register soon</button>
                        </Link>
                        </div>
                        <p className="md:text-lg text-sm text-white">Last date to Register March 11,2023.</p>
                        
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default DashBoard;
