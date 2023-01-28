import React from "react";
import Poster from '../../assets/Expelliarmus.jpg';

const Prevcard = (props) => {
   const  {key,description,name }= props; 
    return (
        <>
            <div class="py-4" key={key}>
                <card class="w-full flex flex-col">
                    <div class="relative">
                        <img src={Poster} class="w-96 h-auto" />
                    </div>
                    <div class="flex flex-row mt-2 gap-2">
                        <div clas="flex flex-col">
                            <p class="text-gray-100 text-sm font-semibold">Learn CSS Box Model in 8 Minutes</p>
                            <p class="text-gray-400 text-xs mt-2 hover:text-gray-100" href="#">{name} </p>
                            <p class="text-gray-400 text-xs mt-1">{description}</p>
                        </div>
                    </div>
                </card>
            </div>
        </>
    )
}

export default Prevcard;