import React from 'react'
import Zoom from 'react-reveal/Zoom';
import Typed from 'react-typed';
import './About.css';

function hero() {
    return (
        <div className='fadeintext'>
            <Zoom>
                <div className='flex flex-col justify-center item-center text-center m-auto h-screen w-full'>
                    <h1 className='heading font-bold text-6xl text-[#00df9a]'>ABO
                        <Typed
                            strings={['UT&nbsp;US']}
                            typeSpeed={120}
                            backSpeed={120}
                            loop
                        /></h1>
                    <div className='quote italic text-[18px] text-[#00df9a] '>Robotics and other  combination will make  the world pretty fantastic
                        compared with today
                        <br></br>
                        -Bill Gates
                    </div><br></br>
                    <div className='flex justify-center item-center text-center text-white'>
                        <p className='orgin w-[300px]'>Robotics club is started in the moto of giving knowledge for people who are not aware of robotics.It's Started by the higher officials of Kongu Engineering College</p>
                    </div>
                </div>
            </Zoom>

        </div>


    )
}

export default hero
