import React from "react";
import '../styles/Model.css';
import {Fade} from 'react-reveal';

const Modal = ({ setIsOpen,handleClick,Content }) => {
  return (
    <>
      <div className="model-head flex items-center text-center justify-center" style={{display: setIsOpen ? 'flex' : 'none'}}>
        <Fade top>
        <div className="flex flex-col dialog-box p-[10px] ">
          <h1 className="sm:text-4xl text-xl font-bold p-[10px] text-[#00df9a]">
            Event name
          </h1>
            <p className="p-[10px] text-white">
              {Content}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores laboriosam eos, quas sed numquam ut iusto modi obcaecati impedit neque dolor repudiandae quasi est nostrum temporibus quaerat ea possimus fuga.
            </p>
          <div className="flex justify-center">
            <button type="submit" className="flex-1 p-[10px] mx-20 reg-btn font-bold text-white">Register</button>
            <button type="submit" className="flex-1 p-[10px] mx-20 cls-btn font-bold text-white" onClick={handleClick}>Close</button>
          </div>
          </div>
        </Fade>
      </div>
    </>
  );
};

export default Modal;
