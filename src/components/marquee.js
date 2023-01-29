import React from "react";
import "../styles/cards.css";


const Marquee = () => {
  return (
      <div class="overflow-x-hidden fixed bg-[#00432e] inset-x-0 bottom-0">
          <div class="text-lg font-mono text-white animate-marquee whitespace-nowrap mypause">
      	    <p ><b >Combo Offer</b> : 
              (Robo soccer/Robo Race) + manipulator workshop - ₹750    ||
              Line follower + maze solver + manipulator workshop - ₹1050
            </p>
          </div>
      </div>
  );
};

export default Marquee;