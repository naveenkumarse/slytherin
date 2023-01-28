import React from "react";
import "../styles/cards.css";


const Cards = () => {
  return (
    <div className="fixed bottom-9 right-9">
        <div className="flip-card ">
          <div className="flip-card-inner">
            <div className="flip-card-front bottom-9 right-9">
              <p className="mytitle" >Combo Offers</p>
            </div>
            <div className="flip-card-back">
              <div className=" font-mono ">
                <p>
                 <b> (Robo soccer/Robo Race) + manipulator workshop - ₹750 </b>
                </p>
                <br/>
                <hr/>
                <br/>
                <p>
                <b>  Line follower+maze solver+manipulator workshop - ₹1050 </b>
                </p>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;