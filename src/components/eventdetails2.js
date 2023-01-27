import React from 'react'
import '../styles/eventdetails.css'
import Fade from 'react-reveal/Fade';

function eventdetails2() {
  return (
    < >
        <Fade bottom duration={2000}>
        <div className='relative flex flex-col justify-center leading-7 text-white main-page'>
        <h1 className='text-4xl text-center text-[#00df9a] mt-[30px] font-bold'>ROBO WAR</h1><br></br>
        <div className='flex flex-col justify-center align-center items-center'>
            <h1 className='text-2xl text-[#00df9a]'>GENERAL RULES</h1>
            <div className=' w-[800px] p-[30px] unordered-list m-auto'>
            <ul className='text-[14px] font-mono marker:text-[#00df9a] md:list-disc marker:text-[24px] list-disc pl-5 space-y-3'> 
              <li> There will be no restrictions on the dimensions of the bot.<br/></li>
              <li> The weight of the machine should not exceed 15 Kgs (33.07 Lbs.), which includes the weight of any pneumatic source/tank. All pneumatic tanks/source and batteries should be on board. Only the weight of the remote controller will not be counted.<br/></li>
              <li> A bot can be in a “Cluster Bot” formation. Each bot must meet the requirements described in this problem statement. The total weight of all the bots and the dimensions of the combination of bots must satisfy the above two points.<br/></li>
              <li> Robots with pneumatic or hydraulic mechanisms or electric lifters are allowed.<br/></li>
              <li> Only active weapon bots are allowed.<br/></li>

            </ul>
            </div>
        </div><br></br>
        <div  className='flex flex-col justify-center align-center items-center '>
            <h1 className="text-2xl text-center text-[#00df9a]">TEAM SPECIFICATIONS</h1>
            <div className='w-[800px] p-[30px] unordered-list m-auto'>
            <ul className='text-[14px] font-mono marker:text-[24px] marker:text-[#00df9a] list-disc pl-5 space-y-3'>
              
            <li>  Any team can participate in International Robowars, Techfest. A team may consist of a maximum of 5 participants. These participants can be from the same or different institutes.<br/></li>
            <li>  Team Name: Every team must have a unique name. Techfest Organizers reserve the right to reject entries from any team whose name it deems inappropriate, offensive or conflicting. Organizers must be notified if a team's name has been changed.<br/></li>
            <li>  Team Representative: Each team must specify their team representative (leader) at the time of registration on the website. All the important communications between Techfest Organizers and the registered teams will be done through their team representative. The team representative must submit valid contact details at the time of registration.<br/></li>
            <li>  During any kind of conversation, registration, communication, emails or submissions the team must identify themselves by their Team ID only provided at the time of registration and not by your team name. Please DO NOT use your team name as your identification in any kind of communication with us.</li>
<br/>
            </ul>
            </div>
            
        </div>
        </div>
        
        
        <div className="flex justify-center relative">

        <a  href='https://forms.gle/ifx8kJZ8u2r48vZB6' rel="noopener noreferrer " target={"_blank"} className="underline font-mono flex p-[10px] pl-[50px] pr-[50px] mx-10 reg-btn font-semibold text-white">Register</a>          </div><br></br>
          </Fade>
    </>
  )
}

export default eventdetails2