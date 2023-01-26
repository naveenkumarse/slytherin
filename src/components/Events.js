import React from "react";
import Shoot from "../assets/Shoot.gif";
const Events = () => {
    return (
        <div className="w-full bg-black py-16 px-4">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
                <img className="w-[500px] mx-auto my-4" src={Shoot} alt="/" />
                <div className="text-white flex flex-col justify-center">
                    <p className="text-[#00df9a] font-bold">Proudly presented by</p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Robotics club of KEC</h1>
                    <p >
                        National level event with cash prizes.
                        Dont wait register as soon as possible.
                        National level event with cash prizes.
                        Dont wait register as soon as possible.
                        National level event with cash prizes.
                        Dont wait register as soon as possible.
                        National level event with cash prizes.
                        Dont wait register as soon as possible.
                        National level event with cash prizes.
                        Dont wait register as soon as possible.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Events;