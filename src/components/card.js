import React from 'react'
import Slide from 'react-reveal/Slide';
import './About.css';

function card() {
    return (
        <div className='pl-[40px] pr-[40px] complete--card'>
            <div className='card--x flex flex-row justify-between'>
                <Slide left duration={2000}>
                    <img src="robotrununscreen.gif" alt="my-gif" className='w-[340px] h-[200px]' />
                </Slide>
                <Slide right duration={2000}>
                    <div className=' p-[20px] '>
                        <h3 className='font-bold text-2xl text-[#00df9a]'>ACHEIVEMENTS</h3>
                        <p className='w-[500px] description '>Robotics clubs are acheived in more national level competitions.And it's has the most valuable club.<br></br>
                            
                        </p>
                    </div>
                </Slide>

            </div>
            <div className='card--x--odd flex flex-row justify-between'>
                <Slide left duration={2000}>
                    <div className=' p-[20px]'>
                        <h3 className='font-bold text-2xl text-[#00df9a]'>MISSION AND VISION</h3>
                        <p className='w-[500px] description--odd'>Robotics clubs are acheived in more national level competitions.And it's has the most valuable club.<br></br>
                            
                        </p>
                    </div>
                </Slide>
                <Slide right duration={2000}>
                    <img src={"Shoot-unscreen.gif"} alt="my-gif" className='w-[200px] h-[200px]' />
                </Slide>
            </div>
            <div className='card--x flex flex-row justify-between'>
                <Slide left duration={2000}>
                    <img src={"ultrarobo-unscreen.gif"} alt="my-gif" className='w-[355px] h-[230px]  principle-image' />
                </Slide>
                <Slide right duration={2000}>
                    <div className=' p-[20px] card--x odd-texts'>
                        <h3 className='font-bold text-2xl text-[#00df9a]'>PRINCIPLES</h3>
                        <p className='w-[500px] description'>Robotics clubs are acheived in more national level competitions.And it's has the most valuable club.<br></br> 
                        </p>
                    </div>
                </Slide>
            </div>
        </div>
    )
}
export default card
