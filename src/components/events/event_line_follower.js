import React from 'react'
import './eventdetails.css'
import Fade from 'react-reveal/Fade';
import './eventdetails.css'

const Eventdetails4=() => {
  return ( 
    < >
        <Fade bottom duration={2000}>
        <div className='relative flex flex-col justify-center leading-7 text-white main-page'>
        <h1 className='text-4xl text-center text-[#00df9a] mt-[30px] font-bold'>LINE FOLLOWER</h1><br></br>
        <div className='flex flex-col justify-center align-center items-center'>
            <h1 className='text-2xl text-[#00df9a]'>GENERAL RULES</h1>
            <div className='p-[30px] unordered-list m-auto '>
            <ul className='text-[14px] marker:text-[24px] font-mono marker:text-[#00df9a] list-disc pl-5 space-y-3 '> 
            <li>	Maximum Number of members in a team is 4.<br/></li>
            <li>	Each member must produce a valid ID card of his/her respective institution.<br /></li>
            <li>	Only one autonomous bot per team is allowed.<br/></li>
            <li>	At the start of the task, the bot will be placed at the starting point. Only two members of a team is allowed to be near the game field while starting the bot.<br/></li>
            <li>	The starting procedure of the bot should be simple and should not involve giving any manual force or impulse in any direction.<br/></li>
            <li>	Here two rounds, one trial round is allowed before the start of the first round.<br/></li>
            <li>	The teams that clear the first round will be allowed to enter the second round(as per the number of teams).<br/></li>
            <li>	When the bot starts, no team member is allowed to touch the bot or enter the arena.<br/></li>
            <li>	The game will start only when organizers give the signal.<br/></li>
            <li>	The bot which starts the START tile and reaches the FINISH tile by following the black lines in the shortest time will be nominated as the winner.<br/></li>
            <li>	Violating any of the given rules will end in deduction of points for the corresponding team.<br/></li>
            <li>	The decision of the co-ordinator will be final and binding upon all participants.<br/></li>
            </ul>
            </div>
        </div><br></br>
        <div  className='flex flex-col justify-center align-center items-center '>
            <h1 className="text-2xl text-center text-[#00df9a]">BOT SPECIFICATIONS</h1>
            <div className='p-[30px] unordered-list m-auto'>
            <ul className='text-[14px] font-mono marker:text-[24px]  marker:text-[#00df9a] list-disc pl-5 space-y-3'>
            <li>	Using greater voltages than 12V is forbidden.<br/></li>
            <li>	Bot dimension should be maximum of 25cm x 25cm x 25cm.<br/></li>
            <li>	Bot can have microcontroller or any IC Gates for automatic movement and should not be controlled manually.<br/></li>
            <li>	Participating teams should bring their own requirements for entire competition.<br/></li>

    
            </ul>
            </div>
            
        </div>
        <div  className='flex flex-col justify-center align-center items-center '>
            <h1 className="text-2xl text-center text-[#00df9a]">STUDENT COORDINATORS </h1>
            <div className='p-[30px] unordered-list m-auto'>
            <ol className='text-[14px] font-mono marker:text-[24px]  marker:text-[#00df9a] pl-5 space-y-3'>
            <li> SUDHAKARAN S - 86673 35602	<br/></li>
            <li> PONSIVANESAN E D - 93847 51468	<br/></li>
            <li> SIVA K - 63695 77791	<br/></li>
            
            </ol>
            </div>
            
        </div>
        </div>
        <h1 className="text-2xl text-center text-[#00df9a]">Registration Fees ₹400</h1><br/><br/><br/>

        
        <div className="flex justify-center relative">

        <a  href='https://forms.gle/zezjLwi19KQpwZVf9 ' rel="noopener noreferrer " target={"_blank"} className="underline font-mono flex p-[10px] pl-[50px] pr-[50px] mx-10 reg-btn font-semibold text-white">Register</a>          </div><br></br>
        </Fade>
    </>
  )
}

export default Eventdetails4