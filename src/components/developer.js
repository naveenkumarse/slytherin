import React from 'react';
import {
    FaInstagram,
    FaGoogle,
    FaGit,
    FaLinkedinIn,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactTyped from 'react-typed';

const Developer = () => {
    return (
    <div className='relative h-3/5 flex flex-col justify-evenly'>
        <h1 className='heading font-bold text-6xl text-[#00df9a] md:mt-12 mt-96'>Dev
            <ReactTyped
                strings={['elopers']}
                typeSpeed={120}
                backSpeed={120}
                loop
            /></h1>
        <div className='max-w-[1240px] py-16 w-full flex justify-evenly flex-wrap text-gray-300 '>
            
            <div className='font-mono mt-10 flex flex-col justify-between mx-auto'>
            
                    <h1 className='mb-5 text-[24px]'>GokulKrishna Raju</h1><br/>
                    <ul>
                    <a  href='mailto:gmkrishna11082003@gmail.com' rel="noopener noreferrer " target={"_blank"} >
                        <li className='py-2 text-sm '> <FaGoogle size={24} className="inline-block" />  gmkrishna11082003</li>
                        </a>          
                    </ul>
                    <ul>
                    <a  href='https://www.instagram.com/_j_e_y_a_n_t_h_143_/' rel="noopener noreferrer " target={"_blank"} >
                        <li className='py-2 text-sm'> <FaInstagram size={24}  className="inline-block" />  _j_e_y_a_n_t_h_143_</li>
                        </a>          
                    </ul>
                    <ul>
                    <a  href='https://github.com/GOKULKRISHNA-R' rel="noopener noreferrer " target={"_blank"} >
                        <li className='py-2 text-sm'> <FaGit size={24}  className="inline-block" /> GOKULKRISHNA-R</li>
                        </a>          
                    </ul>
                    <ul>
                    <a  href='https://www.linkedin.com/in/gokulkrishna-raju/' rel="noopener noreferrer " target={"_blank"} >
                        <li className='py-2 text-sm'> <FaLinkedinIn size={24}  className="inline-block" /> gokulkrishna-raju</li>
                        </a>          
                    </ul>
                
            </div>
            <div className='font-mono mt-10 flex flex-col justify-between'>
            
                    <h1 className='mb-5 text-[24px]'>Naveen Kumar S E</h1><br/>
                    <ul>
                    <a  href='mailto:naveenelango.se@gmail.com' rel="noopener noreferrer " target={"_blank"} >
                        <li className='py-2 text-sm '> <FaGoogle size={24} className="inline-block" />  naveenelango.se</li>
                        </a>          
                    </ul>
                    <ul>
                    <a  href='https://www.instagram.com/_nave.xn_' rel="noopener noreferrer " target={"_blank"} >
                        <li className='py-2 text-sm'> <FaInstagram size={24}  className="inline-block" />  _nave.xn_</li>
                        </a>          
                    </ul>
                    <ul>
                    <a  href='https://github.com/naveenkumarse' rel="noopener noreferrer " target={"_blank"} >
                        <li className='py-2 text-sm'> <FaGit size={24}  className="inline-block" /> naveenkumarse</li>
                        </a>          
                    </ul>
                    <ul>
                    <a  href='https://www.linkedin.com/in/naveenkumar-s-e-69b85a213/' rel="noopener noreferrer " target={"_blank"} >
                        <li className='py-2 text-sm'> <FaLinkedinIn size={24}  className="inline-block" /> naveenkumar-s-e</li>
                        </a>          
                    </ul>
                
            </div>
        </div>
        <div className='flex justify-center allign-center font-mono text-white'>
        <p className='px-4'>Developed By</p> <Link to='/dev' className='underline underline-offset-2 text-[#00df9a]'> <p  >dreamimbue</p></Link>
        </div>
        
    </div>
    );
};

export default Developer;