import React from 'react'
import Fade from 'react-reveal/Fade';
import '../styles/About.css';
// import shoot from "";

function card() {
    return (
        <Fade bottom duration={2000} className="">
        <div className='pl-[40px] pr-[40px] xs:mt-24'>
            <div className='card--x flex flex-row justify-evenly'>
                
                {/* <Zoom> */}
                    <img src={"ultrarobo-unscreen.gif"} alt="my-gif" className='w-[355px] h-[230px]  principle-image' />
                {/* </Zoom> */}
                {/* <Slide right duration={2000}> */}
                    <div className=' p-[20px] '>
                        <h3 className='font-bold text-2xl text-[#00df9a]'>OBJECTIVES</h3>
                        <p className='w-[500px] font-mono text-white description'>“To transform our culture by creating a world where science and technology are celebrated and where young people dream of becoming science and technology leaders”<br></br> 
                        </p>
                    </div>
                {/* </Slide> */}

            </div>
            <div className='card--x--odd flex flex-row justify-evenly'>
                {/* <Slide left duration={2000}> */}
                    <div className=' p-[20px]'>
                    <h3 className='font-bold text-2xl text-[#00df9a]'>MISSION</h3>
                        <p className='w-[500px] font-mono text-white description--odd'>Our mission is to inspire young people to be science and technology leaders, by engaging them in exciting mentor-based programs that build science, engineering and technology skills, that inspire innovation, and that foster well-rounded life capabilities including self-confidence, communication, and leadership.<br></br>
                        </p>
                    </div>
                {/* </Slide>  */}
                 {/* <Slide right duration={2000}> */}
                    <img src={"Shoot.gif"} alt="my-gif" className='w-[200px] h-[200px]' />
                {/* </Slide> */}
            </div>
            <div className='card--x flex flex-row justify-evenly'>
            {/* <Slide left duration={2000}> */}
                    <img src="robotrununscreen.gif" alt="my-gif" className='w-[340px] h-[200px]' />
                {/* </Slide> */}
                {/* <Slide right duration={2000}> */}
                    <div className=' p-[20px] card--x odd-texts'>
                    <h3 className='font-bold text-2xl text-[#00df9a]'>VISION</h3>
                        <p className='w-[500px] font-mono text-white description '>To become the greatest Robotics team in the South Zone and an annual competitor at the international level Robotics Competitions. Exemplifying the importance of service through continual expansion in focus and scale of community service projects within India. Acknowledging and addressing contemporary environmental issues through the adoption and innovation of new forms of clean building measures.<br></br>
                        </p>
                    </div>
                {/* </Slide> */}
            </div>
        </div>
        </Fade>
    )
}
export default card
