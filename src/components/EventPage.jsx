import React, {useState} from "react"
import "./EventPage.css"; 
import {Fade} from 'react-reveal'; 
import Modal from "./Model";
import Eventdetails from "./eventdetails";

function EventPage(){
    var contest = ['first','second','third'];
    const [isOpen, setIsOpen] = useState(false);
    const [Contest,setContest] = useState(1);
    const handleClick = event => {
        setIsOpen(current => !current);
        setContest(Number(event.target.id));
    };
    return(
        <>
            <div className="flex flex-col justify-center text-center items-center w-full relative">
                <Fade left cascade>
                    <div className="flex mar-20">
                        <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-white">
                            Technical Events 
                        </h1>
                    </div>
                </Fade>
                <Fade top>
                    <div className="flex shield-wrap w-full justify-between items-center text-center">
                        <div id="1" className="shield" onClick={handleClick}></div>
                        <div id="2" className="shield" onClick={handleClick}></div>
                        <div id="3" className="shield" onClick={handleClick}></div>
                        <div className="second">
                        <div id="4" className="shield" onClick={handleClick}></div>
                        <div id="5" className="shield" onClick={handleClick}></div>
                        </div>
                        
                        </div>
                </Fade>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} handleClick={handleClick} Content={contest[Contest]}/>}
        </>
    )
}

export default EventPage
