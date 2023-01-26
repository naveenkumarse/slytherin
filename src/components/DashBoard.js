import React from "react";
import Typed from 'react-typed';
import Spinner from './spinner';

const DashBoard = () => {
    return (
        <>
            <div className="text-white">
                <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center gap-x-52 gap-y-0 flex max-lg:flex-col justify-center">
                    <div className="flex justify-center text-center item-center lg:flex-col">
                        <Spinner />
                    </div >
                    <div className="flex flex-col justify-center text-center item-center">
                        <p className=" font-bold p-2">Kongu Engineering College</p>
                        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6 text-[#00df9a]">Expelliarmus 2K23! </h1>
                        <div className="flex justify-center items-center">
                            {/* <p className="md:text-5xl sm:text-4xl text-xl font-bold">Online registration open </p> */}

                            <Typed className="md:text-5xl font-mono sm:text-4xl text-xl font-bold"
                                strings={['Online registration open','Cash Price upto ₹30K']}
                                typeSpeed={90}
                                backspeed={70}
                                loop
                            />
                        </div>
                        <p className="md:text-2xl text-xl font-bold text-gray-500 pt-8">March 18,2023</p>
                        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">Register soon </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard;
