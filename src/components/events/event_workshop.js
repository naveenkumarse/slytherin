import React from 'react'
import './eventdetails.css'
import Fade from 'react-reveal/Fade';
import './eventdetails.css'


const Eventdetails6 = () => {
  return (
    < >
      <Fade bottom duration={2000}>
        <div className='relative flex flex-col justify-center leading-7 text-white main-page'>

          <h1 className='text-4xl text-center text-[#00df9a] mt-[30px] font-bold'>MANIPULATOR WORKSHOP</h1><br></br>
          <h1 className='text-4xl text-center text-[#00df9a] mt-[30px] font-bold'>OVERVIEW</h1><br></br>
          <div className='flex flex-col justify-center align-center items-center'>
            <h1 className='text-2xl text-[#00df9a]'>ROBOT SPECIFICATIONS</h1>
            <div className=' p-[30px] unordered-list m-auto'>
              <ul className='text-[14px] font-mono marker:text-[24px] marker:text-[#00df9a] list-disc pl-5 space-y-3'>
                <li>	Fanuc ER - 4iA <br /></li>
                <li>	ABB IRB 1410  <br /></li>

              </ul>
            </div>
          </div><br></br>
          <div className='flex flex-col justify-center align-center items-center '>
            <h1 className="text-2xl text-center text-[#00df9a]">Lecture Details,</h1>
            <div className='p-[30px] unordered-list m-auto'>
              <ul className='text-[14px] font-mono marker:text-[24px] marker:text-[#00df9a] list-disc pl-5 space-y-3'>

                <li>  A brief Lecture on Industrial Robots and its applications.</li>
                <li>	Hands-on work in Fanuc Roboguide (Robot Simulation software).</li>
                <li>	Robot Programming and Teach Pendant operation.</li>
                <li>	Each member must produce a valid ID card of his/her respective institution.<br /></li>


              </ul>
            </div>
            <div className='flex flex-col justify-center align-center items-center '>
              <h1 className="text-2xl text-center text-[#00df9a]">STUDENT COORDINATORS </h1>
              <div className='p-[30px] unordered-list m-auto'>
                <ol className='text-[14px] font-mono marker:text-[24px]  marker:text-[#00df9a] pl-5 space-y-3'>
                  <li> DILIP VIJAY RAM A - 63857 70036	<br /></li>
                  <li> MOHIT SARAVANAN S - 90957 88945	<br /></li>

                </ol>
              </div>

            </div>
          </div>
        </div>
        <h1 className="text-2xl text-center text-[#00df9a]">Registration Fees ₹300</h1><br /><br /><br />


        <div className="flex justify-center relative">
          <a href='https://forms.gle/SbiYwj6Emdi3swzN8' rel="noopener noreferrer " target={"_blank"} className="underline font-mono flex p-[10px] pl-[50px] pr-[50px] mx-10 reg-btn font-semibold text-white">Register</a>
        </div><br></br>
      </Fade>
    </>
  )
}

export default Eventdetails6