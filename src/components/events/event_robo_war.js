import React from 'react'
import './eventdetails.css'
import Fade from 'react-reveal/Fade';
import './eventdetails.css'


const Eventdetails2 = () => {
  return (
    < >
      <Fade bottom duration={2000}>
        <div className='relative flex flex-col justify-center leading-7 text-white main-page'>
          <h1 className='text-4xl text-center text-[#00df9a] mt-[30px] font-bold'>ROBO WAR</h1><br></br>
          <div className='flex flex-col justify-center align-center items-center'>
            <h1 className='text-2xl text-[#00df9a]'>GENERAL RULES</h1>
            <div className='p-[30px] unordered-list m-auto'>
              <ul className='text-[14px] font-mono marker:text-[#00df9a] md:list-disc marker:text-[24px] list-disc pl-5 space-y-3'>
                <li>Each team can have maximum four members.</li>
                <li>Each member must produce a valid ID card of his/her respective institution.<br /></li>
                <li>Students from different institutes can form a team. <br /></li>
                <li>Robots will be inspected for safety and reliability before being allowed to compete.<br /></li>
                <li>Disrupting opponent's power is not allowed. <br /></li>
                <li>Arena is a 10 ft. X 10 ft. Fully closed platform consisting of two ditches (a schematic diagram is illustrated herewith).<br /></li>
                <li>Organizers reserve the right to ban/disqualify any robot at any point of time, due to safety or any other reason.<br /></li>
                <li>ROBO WAR organizing team have reserves the right to disqualify any participant who fails to adhere to the below mentioned game rules.<br /></li>
                <li>The decision of the coordinates will be final.<br /></li>
              </ul>
            </div>
          </div><br></br>
          <div className='flex flex-col justify-center align-center items-center '>
            <h1 className="text-2xl text-center text-[#00df9a]">TEAM SPECIFICATIONS</h1>
            <div className=' p-[30px] unordered-list m-auto'>
              <ul className='text-[14px] font-mono marker:text-[24px] marker:text-[#00df9a] list-disc pl-5 space-y-3'>

                <li>Permissible weight: Maximum 8 kg with 10% tolerance .<br /></li>
                <li>Maximum permissible volume. Fully unfolded robot must be within the limits of 40 cm X 55 cm (l x b). There is no maximum height for a robot (dictated by the design and weight constraints).<br /></li>
                <li>Robot should be powered only by battery (For safety and security measures ). AC supply will be provided only for Charging.<br /></li>
                <li>Robots can have weapons such as cutters, flippers, saws, lifting devices, spinning hammers etc. Use of liquid projectiles, any kind of inflammable liquid, flame-based weapons, radio jamming devices, high power magnets or electromagnets, are not permitted.<br /></li>
                <li>Use of IC Engines is not allowed.<br /></li>
                <br />
              </ul>
            </div>
            <div className='flex flex-col justify-center align-center items-center '>
              <h1 className="text-2xl text-center text-[#00df9a]">STUDENT COORDINATORS </h1>
              <div className='p-[30px] unordered-list m-auto'>
                <ol className='text-[14px] font-mono marker:text-[24px]  marker:text-[#00df9a] pl-5 space-y-3'>
                  <li> GHUNAL S - 86084 79203	<br /></li>
                  <li> KABILAN - 82482 15399	<br /></li>
                  <li> SANTHOSH C - 95385 23011	<br /></li>

                </ol>
              </div>

            </div>
          </div>
        </div>
        <h1 className="text-2xl text-center text-[#00df9a]">Registration Fees ₹1500</h1><br /><br /><br />


        <div className="flex justify-center relative">

          <a href='https://forms.gle/8DeU4su2LfmtXTWS9' rel="noopener noreferrer " target={"_blank"} className="underline font-mono flex p-[10px] pl-[50px] pr-[50px] mx-10 reg-btn font-semibold text-white">Register</a>          </div><br></br>
      </Fade>
    </>
  )
}

export default Eventdetails2