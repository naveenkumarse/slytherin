import "../styles/EventPage.css"; 
import {Fade} from 'react-reveal'; 
import path from "./../assets/icons/path.png";
import ball from "./../assets/icons/ball.png";
import mental from "./../assets/icons/mental-health.png";
import sword from "./../assets/icons/swords.png";
import train from "./../assets/icons/training.png";
import tyre from "./../assets/icons/tyre.png";
import { Link } from "react-router-dom";
import Zoom from 'react-reveal/Zoom';

import poster from './../assets/Expelliarmus.jpg';

function EventPage() {
    return (
        <>
            <div className="flex flex-col justify-center text-center items-center h-scree w-full relative">
                <Fade left cascade>
                <div className="flex mar-20">
                    <h1 className="md:text-5xl sm:text-4xl text-xl font-bold text-white">
                        Technical Events
                    </h1>
                </div>
                </Fade>
                <Fade top>
                    <div className="flex shield-wrap w-full justify-between items-center text-center">
                        <Link to="/eventdetails1">
                            <div id="1" className="shield" >
                                <h1 className="p-2">Maze Solver</h1>
                                <img src={mental} alt="race" />
                            </div>
                        </Link>
                        <Link to="/eventdetails2">
                            <div id="2" className="shield" >
                                <h1 className="p-2">Robo war</h1>
                                <img src={sword} alt="fight" />
                            </div>
                        </Link>
                        <Link to="/eventdetails3">
                            <div id="3" className="shield">
                                <h1 className="p-2">Robo Soccer</h1>
                                <img src={ball} alt="Soccer" />
                            </div>
                        </Link>
                        <Link to="/eventdetails4">
                            <div id="4" className="shield">
                                <h1 className="p-2">Line Follower</h1>
                                <img src={path} alt="Line" />
                            </div>
                        </Link>
                        <Link to="/eventdetails5">
                            <div id="5" className="shield">
                                <h1 className="p-2">Robo race</h1>
                                <img src={tyre} alt="race" />
                            </div>
                        </Link>
                        <Link to="/eventdetails6">
                            <div id="6" className="shield" >
                                <h1 className="p-2">Workshop</h1>
                                <img src={train} alt="workshop" />
                            </div>
                        </Link>
                    </div>
                </Fade>
            </div>
            <p>

            </p>
                <Zoom bottom>
                    <div  className="mx-auto " style={{width:"calc(100%*0.8)",marginTop:"150px"}}>
                        <img  src={poster} alt="poster" />
                    </div>
                </Zoom>


        </>
    )
}

export default EventPage
