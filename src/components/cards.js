import React from "react";
import Anime from "../assets/Oj0z.gif";
import "../styles/cards.css";


const Cards = () => {
  return (
    <div className="">
      <div className="flexbox">
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img className="w-20 mx-auto mt-[-3rem] " src={Anime} />
              <h2 className="text-2xl font-bold text-center py-8">
                Robo soccer
              </h2>
              <p className="text-center text-4xl font-bold">Rs.100/-</p>
            </div>
            <div class="flip-card-back">
              <div className="">
                <div className="text-center font-medium">
                  <p className="py-2 border-b mx-8 mt-8">Rule1</p>
                  <p className="py-2 border-b mx-8">Rule2</p>
                  <p className="py-2 border-b mx-8">Rule3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img className="w-20 mx-auto mt-[-3rem] " src={Anime} />
              <h2 className="text-2xl font-bold text-center py-8">
                Robo soccer
              </h2>
              <p className="text-center text-4xl font-bold">Rs.100/-</p>
            </div>
            <div class="flip-card-back">
              <div className="">
                <div className="text-center font-medium">
                  <p className="py-2 border-b mx-8 mt-8">Rule1</p>
                  <p className="py-2 border-b mx-8">Rule2</p>
                  <p className="py-2 border-b mx-8">Rule3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <img className="w-20 mx-auto mt-[-3rem] " src={Anime} />
              <h2 className="text-2xl font-bold text-center py-8">
                Robo soccer
              </h2>
              <p className="text-center text-4xl font-bold">Rs.100/-</p>
            </div>
            <div class="flip-card-back">
              <div className="">
                <div className="text-center font-medium">
                  <p className="py-2 border-b mx-8 mt-8">Rule1</p>
                  <p className="py-2 border-b mx-8">Rule2</p>
                  <p className="py-2 border-b mx-8">Rule3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;