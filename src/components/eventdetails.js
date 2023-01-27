import React from 'react'
import './eventdetails.css'
import Fade from 'react-reveal/Fade';
import Datas from './event_description';
import NavBar from './NavBar';
import Header from './header';
import { useParams } from "react-router-dom";

function Eventdetails() {
  const { contest_id } = useParams();
  return (
    <>
      <Header />
      <NavBar />
      <div>
        <Fade bottom duration={2000}>
          <div className='relative flex flex-col justify-center leading-7 text-white main-page'>
            <h1 className='text-4xl text-center text-[#00df9a] mt-[30px] font-bold'>{Datas[contest_id - 1].title}</h1><br></br>
            <div className='flex flex-col justify-center align-center items-center'>
              <h1 className='text-2xl text-[#00df9a]'>{contest_id == 6 ? "LECTURE DETAILS":"GENERAL RULES"}</h1>
              <div className='p-[30px] unordered-list '>
                <ul className='text-[14px] marker:text-[#00df9a] list-disc pl-5 space-y-3'>
                  {
                    Datas[contest_id - 1].general_rules.map(rule => (
                      <li><span>{rule}</span></li>
                    ))
                  }
                  {
                    contest_id == 5 && 
                    <li>For your reference kindly go through this <a href='https://www.youtube.com/watch?v=mJV-KDqHgDQ' style={{color: "#00df9a"}}>video</a></li>
                  }
                </ul>
              </div>
            </div><br></br>
            <div className='flex flex-col justify-center align-center items-center '>
              <h1 className="text-2xl text-center text-[#00df9a]">SPECIFICATIONS</h1>
              <div className='p-[30px] unordered-list'>
                <ul className='text-[14px]  marker:text-[#00df9a] list-disc pl-5 space-y-3'>
                  {
                    Datas[contest_id - 1].specifications.map(rule => (
                      <li><span>{rule}</span></li>
                    ))
                  }
                </ul>
              </div>
            </div>
            {
              contest_id == 3 &&
              <div>
                <div className='flex flex-col justify-center align-center items-center '>
                  <h1 className="text-2xl text-center text-[#00df9a]">ARENA SPECIFICATIONS</h1>
                  <div className='p-[30px] unordered-list'>
                    <ul className='text-[14px]  marker:text-[#00df9a] list-disc pl-5 space-y-3'>
                      {
                        Datas[contest_id - 1].arena_specifications.map(rule => (
                          <li><span>{rule}</span></li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
                <div className='flex flex-col justify-center align-center items-center '>
                  <h1 className="text-2xl text-center text-[#00df9a]">SCORING PATTERN</h1>
                  <div className='p-[30px] unordered-list'>
                    <ul className='text-[14px]  marker:text-[#00df9a] list-disc pl-5 space-y-3'>
                      {
                        Datas[contest_id - 1].scoring_pattern.map(rule => (
                          <li><span>{rule}</span></li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
              </div>
            }
            <div className='flex flex-col justify-center align-center items-center '>
              <h1 className="text-2xl text-center text-[#00df9a]">EVENT COORDINATORS</h1>
              <div className='w-[800px] p-[30px] unordered-list'>
                <ul className='text-[14px]  marker:text-[#00df9a] list-disc pl-5 space-y-3'>
                  {
                    Datas[contest_id - 1].coordinator_details.map(rule => (
                      <li><span>{rule}</span></li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center relative">
            <button type="submit" className="flex p-[10px] pl-[50px] pr-[50px] mx-10 reg-btn font-semibold text-white">Register</button>
          </div><br></br>
        </Fade>
      </div>
    </>
  )
}

export default Eventdetails