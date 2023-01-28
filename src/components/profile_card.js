import React from "react";
import Pro from '../assets/ob/thaha.jpg';
const ProfileCards = () =>{
    return(
        <div className="m-10">
        <div className="flex w-1/5 h-1/4 border rounded-tr-lg rounded-bl-lg border-[#00df9a]">
          <div className="object-cover h-full w-1/2  rounded-bl-lg">
            <img className="w-full h-full rounded-bl-lg" src={Pro} />
          </div>
          <div className="text-[#00df9a] px-2 w-1/2 flex flex-col rounded-tr-lg justify-center ">
                <p>Thaha </p>
                <p>yyy</p>
                <p>zzz</p>
          </div>
        </div>
        </div>
    )
}

export default ProfileCards;