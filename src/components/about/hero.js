import React from 'react'
import Zoom from 'react-reveal/Zoom';
import Typed from 'react-typed';
import '../../styles/About.css';

function hero() {
    return (
        <div className='fadeintext' style={{marginTop:"100px"}}>
            <Zoom>
                <div className='flex flex-col justify-center item-center text-center m-auto w-full'>
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
                    <div className='flex justify-center font-mono text-[16px] flex-wrap item-center text-white'>
                        <p className='orgin w-[900px]'>Robotics Club is the brainchild of KEC Mechatronics formed with the intention of improving the skills and employability of engineering graduates. The Robotics Club of Kongu Engineering College strives to inspire interest in robotics among the students of our institution. Besides making a solemn endeavor to spread the knowledge on Robotics and its diverse applications. It was initiated in the year of 2011; Motto of the club is to transfer the knowledge by the students for the students. The Club offers indispensable guidance, workshops and tutorials along with tools, equipment, components and workspace. The club members meet periodically to discuss over matters such as the management of the workspace, workshops, projects and competitions. We welcome anyone, with prior basic knowledge, who wishes to be a part of this club. There are no prerequisites to join because we have members that believe in the transfer of knowledge, especially that which concerns our valuable interest in Robotics.
	                    Our training modules give utmost importance to design and individual thinking. All our programs would involve brainstorming design sessions to give the students an opportunity to come up with their own solutions. Our kits have minimal pre-designed parts encouraging the students to apply their own designs while fabricating their robots.</p>
                    </div>
                </div>
            </Zoom>
        </div>
    )
}

export default hero
