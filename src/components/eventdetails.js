import React from 'react'
import Header from './header'
import './eventdetails.css'
import Fade from 'react-reveal/Fade';

function eventdetails(props) {
  return (
    < >
        <Fade bottom duration={2000}>
        <div className='relative flex flex-col justify-center leading-7 text-white main-page'>
        <h1 className='text-4xl text-center text-[#00df9a] mt-[30px] font-bold'>{props.title}</h1><br></br>
        <div className='flex flex-col justify-center align-center items-center'>
            <h1 className='text-2xl text-[#00df9a]'>GENERAL RULES</h1>
            <div className=' w-[800px] p-[30px] unordered-list '>
            <ul className='text-[14px] marker:text-[#00df9a] list-disc pl-5 space-y-3'> 
            <li><span>Some versions of Microsoft Word also generate the text using the =lorem() function. Just type it in your Word document and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span></li>
                <li><span>Some versions of Microsoft Word also generate the text using the =lorem() function. Just type it in your Word document and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span></li>
                <li ><span>Some versions of Microsoft Word also generate the text using the =lorem() function. Just type it in your Word document and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span></li>
                <li><span>Some versions of Microsoft Word also generate the text using the =lorem() function. Just type it in your Word document and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span></li>
            </ul>
            </div>
        </div><br></br>
        <div  className='flex flex-col justify-center align-center items-center '>
            <h1 className="text-2xl text-center text-[#00df9a]">SPECIFICATIONS</h1>
            <div className='w-[800px] p-[30px] unordered-list'>
            <ul className='text-[14px]  marker:text-[#00df9a] list-disc pl-5 space-y-3'>
                <li><span>Some versions of Microsoft Word also generate the text using the =lorem() function. Just type it in your Word document and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span></li>
                <li><span>Some versions of Microsoft Word also generate the text using the =lorem() function. Just type it in your Word document and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span></li>
                <li ><span>Some versions of Microsoft Word also generate the text using the =lorem() function. Just type it in your Word document and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span></li>
                <li><span>Some versions of Microsoft Word also generate the text using the =lorem() function. Just type it in your Word document and you will get this paragraph: Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</span></li>
            </ul>
            </div>
            
        </div>
        </div>
        
        
        <div className="flex justify-center relative">
            <button type="submit" className="flex p-[10px] pl-[50px] pr-[50px] mx-10 reg-btn font-semibold text-white">Register</button>
          </div><br></br>
          </Fade>
    </>
  )
}

export default eventdetails