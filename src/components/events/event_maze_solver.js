import React from 'react'
import './eventdetails.css'
import Fade from 'react-reveal/Fade';
import './eventdetails.css'

const Eventdetails1=()=> {
  return (
    <>
        <Fade bottom duration={2000}>
        <div className='relative flex flex-col justify-center leading-7 text-white main-page'>
        <h1 className='text-4xl text-center text-[#00df9a] mt-[30px] font-bold'>MAZE SOLVER</h1><br></br>
        <div className='flex flex-col justify-center align-center items-center'>
            <h1 className='text-2xl text-[#00df9a]'>GENERAL RULES</h1>
            <div className='p-[30px] unordered-list m-auto '>
            <ul className='text-[14px] marker:text-[24px] font-mono marker:text-[#00df9a] list-disc pl-5 space-y-3'> 
              <li> 	Maximum number of members in a team is 4.<br/></li>
              <li>	Each member must produce a valid ID card of his/her respective institution.<br /></li>
              <li> 	Only one autonomous bot allowed per team.<br/></li>
              <li> 	When the event starts, only two members per team should be present near the track area.<br/></li>
              <li> 	The bot should be able to maneuver without any human interactions.<br/></li>
              <li> 	The objective of the competition would be the robot to track the line and reach the final destination in the shortest time.<br/></li>
              <li> 	For your reference kindly go through this video:<br/><a className='text-[#00df9a] underline' href='https://www.youtube.com/watch?v=mJV-KDqHgDQ'  rel="noopener noreferrer" target={"_blank"}>video</a><br/></li>
              <li> 	The track will not be the same it's just a reference.<br/></li>
              <li> 	Before starting the competition, the participants are allowed to inspect the layout of the maze and under any circumstances the participants are not allowed to touch the track and do any  positional adjustments to the track. This should be performed only by the event co-ordinators.<br/></li>
              <li> 	The game will start only when the signal is given by the organizer.<br/></li>
              <li> 	Violating any of the given rules will result in the disqualification of the corresponding team.<br/></li>
              <li> 	The decision of the co-ordinator will be final and binding upon all participants.<br/></li>
              <li> 	Further rules, arena specifications and event details will be intimated later.<br/></li>
            </ul>
            </div>
        </div><br></br>
        <div  className='flex flex-col justify-center align-center items-center '>
            <h1 className="text-2xl text-center text-[#00df9a]">BOT SPECIFICATIONS</h1>
            <div className='p-[30px] unordered-list m-auto'>
            <ul className='text-[14px] font-mono marker:text-[24px]  marker:text-[#00df9a] list-disc pl-5 space-y-3'>
              
              <li>  Using greater voltage than 12V is prohibited.<br/></li>
              <li>  Use IR sensors to detect the line and follow them.<br/></li>
              <li>  Bot can have microcontroller or any ic gates for automatic movement and should not be controlled manually.<br/></li>
              <li>	Participating teams should bring their own requirements for entire competition.<br/></li>

    
            </ul>
            </div>
            
        </div>
        <div  className='flex flex-col justify-center align-center items-center '>
            <h1 className="text-2xl text-center text-[#00df9a]">STUDENT COORDINATORS </h1>
            <div className='p-[30px] unordered-list m-auto'>
            <ol className='text-[14px] font-mono marker:text-[24px]  marker:text-[#00df9a] pl-5 space-y-3'>
            <li> GOWTHAM SUNDAR M - 80120 20363	<br/></li>
            <li> MOHAMMED ARSATH M - 82207 99368	<br/></li>
            <li> RAJARISHI B - 70107 00640	<br/></li>
            
            </ol>
            </div>
            
        </div>
        </div>
        
            <h1 className="text-2xl text-center text-[#00df9a]">Registration Fees ₹400</h1><br/><br/><br/>
        
        <div className="flex justify-center relative">
            <a  href='https://forms.gle/bhj1bWZFhEbiR3e27 ' rel="noopener noreferrer " target={"_blank"} className="underline font-mono flex p-[10px] pl-[50px] pr-[50px] mx-10 reg-btn font-semibold text-white">Register</a>
          </div><br></br>
        </Fade>
    </>
  )
}

export default Eventdetails1
