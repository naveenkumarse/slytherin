import React from "react";
import Shoot from "../assets/robotintro-dribble-unscreen.gif";
const Events = () => {
    return (
        <div className="relative mt-10 lg:m-0">
            <div className="w-full px-4">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                    <img className="w-[500px] mx-auto my-5" src={Shoot} alt="/" />
                    <div className="text-white flex flex-col justify-center">
                        <p className="text-[#00df9a] font-mono font-bold">Proudly presented by</p>
                        <h1 className="md:text-4xl sm:text-3xl text-2xl  font-bold py-2">Robotics club of KEC</h1>
                        <br />
                        <q className="font-mono">FOR THE STUDENTS BY THE STUDENTS.</q>
                        <br />
                        <p className="font-mono">
                            National level event with excited cash prizes.
                            Don't wait register as soon as possible. ⚠️
                        </p>
                    </div>
                </div>
            </div>
            <div className="text-white flex flex-col justify-center">

            </div>
        </div>
    )
}

export default Events;