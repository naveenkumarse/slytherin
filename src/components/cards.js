import React from "react";
import Anime from "../assets/Oj0z.gif"
const Cards = () => {
    return (
        <div className="w-full py-[10rem] px-4 bg-white">
            <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Anime} />
                    <h2 className="text-2xl font-bold text-center py-8">Robo soccer</h2>
                    <p className="text-center text-4xl font-bold">
                        Rs.100/-
                    </p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Rule1</p>
                        <p className="py-2 border-b mx-8">Rule2</p>
                        <p className="py-2 border-b mx-8">Rule3</p>
                    </div>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Anime} />
                    <h2 className="text-2xl font-bold text-center py-8">Robo soccer</h2>
                    <p className="text-center text-4xl font-bold">
                        Rs.100/-
                    </p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Rule1</p>
                        <p className="py-2 border-b mx-8">Rule2</p>
                        <p className="py-2 border-b mx-8">Rule3</p>
                    </div>
                </div>
                <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
                    <img className="w-20 mx-auto mt-[-3rem] bg-white" src={Anime} />
                    <h2 className="text-2xl font-bold text-center py-8">Robo soccer</h2>
                    <p className="text-center text-4xl font-bold">
                        Rs.100/-
                    </p>
                    <div className="text-center font-medium">
                        <p className="py-2 border-b mx-8 mt-8">Rule1</p>
                        <p className="py-2 border-b mx-8">Rule2</p>
                        <p className="py-2 border-b mx-8">Rule3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cards;