import React from 'react'
import './eventdetails.css'
import Fade from 'react-reveal/Fade';
import './eventdetails.css'


const Eventdetails5=() => {
  return (
    < > 
        <Fade bottom duration={2000}>
        <div className='relative flex flex-col justify-center leading-7 text-white main-page'>
        <h1 className='text-4xl text-center text-[#00df9a] mt-[30px] font-bold'>Robo Race</h1><br></br>
        <div className='flex flex-col justify-center align-center items-center'>
            <h1 className='text-2xl text-[#00df9a]'>GENERAL RULES</h1>
            <div className=' p-[30px] unordered-list m-auto'>
            <ul className='text-[14px] font-mono marker:text-[24px] marker:text-[#00df9a] list-disc pl-5 space-y-3'> 
            <li>	A team should consist of 4 members.<br/></li>
            <li>	Each member must produce a valid ID card of his/her respective institution.<br /></li>
            <li>  Students from different institutions can form a team. <br/></li>
            <li>	During the rounds, only two members of a team are allowed to enter the arena. However, the team can swap their members in different rounds.<br/></li>
            <li>	If the bot is taken out of the race for any repair, then the time will be stopped and bot have to start the race from the position. <br/></li>
            <li>	The decision of the coordinator will be final and binding upon all participants.<br/></li>

            </ul>
            </div>
        </div><br></br>
        <div  className='flex flex-col justify-center align-center items-center '>
            <h1 className="text-2xl text-center text-[#00df9a]">BOT SPECIFICATIONS</h1>
            <div className='p-[30px] unordered-list m-auto'>
            <ul className='text-[14px] font-mono marker:text-[24px] marker:text-[#00df9a] list-disc pl-5 space-y-3'>
            <li>	Using greater voltages than 12V is forbidden.<br/></li>
            <li>	Bot dimension should be maximum of 30cm x 30cm x 30cm.<br/></li>
            <li>  Max weight of bot is 8kgs.<br/></li>
            <li>	Participating teams should bring their own requirements for entire competition.<br/></li>
            </ul>
            </div>
        </div>
        <div  className='flex flex-col justify-center align-center items-center '>
            <h1 className="text-2xl text-center text-[#00df9a]">STUDENT COORDINATORS </h1>
            <div className='p-[30px] unordered-list m-auto'>
            <ol className='text-[14px] font-mono marker:text-[24px]  marker:text-[#00df9a] pl-5 space-y-3'>
            <li> JEGANESAN V S - 95432 77800	<br/></li>
            <li> INDIRAN P - 73970 14133	<br/></li>
            <li> RAJARISHI B - 70107 00640	<br/></li>
            
            </ol>
            </div>
            
        </div>
        </div>
        <h1 className="text-2xl text-center text-[#00df9a]">Registration Fees ₹600</h1><br/><br/><br/>

        
        <div className="flex justify-center relative">

        <a  href='https://forms.gle/nKqm65PmzBvncjB57' rel="noopener noreferrer " target={"_blank"} className="underline font-mono flex p-[10px] pl-[50px] pr-[50px] mx-10 reg-btn font-semibold text-white">Register</a>          </div><br></br>
          </Fade>
    </>
  )
}

export default Eventdetails5