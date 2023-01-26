import React, {useState} from "react"
import "./EventPage.css"; 
import {Fade} from 'react-reveal'; 
import Modal from "./Model";
import path from "./../assets/icons/path.png";
import ball from "./../assets/icons/ball.png";
import mental from "./../assets/icons/mental-health.png";
import sword from "./../assets/icons/swords.png";
import train from "./../assets/icons/training.png";
import tyre from "./../assets/icons/tyre.png";
import { Link } from "react-router-dom";

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
                    <Link to="/eventdetails">
                        <div id="1" className="shield" >
                            <h1 className="p-2">Robo race</h1>
                            <img src={tyre} alt="race" />
                        </div>
                        </Link>
                        <div id="2" className="shield" onClick={handleClick}>
                            <h1 className="p-2">Robo war</h1>
                            <img src={sword} alt="fight" />
                        </div>
                        <div id="3" className="shield" onClick={handleClick}>
                            <h1 className="p-2">Robo Soccer</h1>
                            <img src={ball} alt="Soccer" />
                        </div>
                        <div id="4" className="shield" onClick={handleClick}>
                            <h1 className="p-2">Line Follwer</h1>
                            <img src={path} alt="Line" />
                        </div>
                        <div id="5" className="shield" onClick={handleClick}>
                            <h1 className="p-2">Maze Solver</h1>
                            <img src={mental} alt="race" />
                        </div>
                        <div id="6" className="shield" onClick={handleClick}>
                            <h1 className="p-2">Workshop</h1>
                            <img src={train} alt="workshop" />
                        </div>
                        
                    </div>
                </Fade>
            </div>
            {isOpen && <Modal setIsOpen={setIsOpen} handleClick={handleClick} Content={contest[Contest]}/>}
        </>
    )
}

export default EventPage
