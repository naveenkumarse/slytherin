import React from "react";
import "../styles/cards.css";


const Cards = () => {
  return (
    <div className="text-white text-lg font-mono">
      <div class="overflow-x-hidden fixed bg-[#00df9a] inset-x-0 bottom-0">
          <div class=" animate-marquee whitespace-nowrap mypause">
      	    <p ><b >Combo Offer</b> : 
              (Robo soccer/Robo Race) + manipulator workshop - ₹750    ||
              Line follower + maze solver + manipulator workshop - ₹1050
            </p>
          </div>
      </div>

    </div>
  );
};

export default Cards;