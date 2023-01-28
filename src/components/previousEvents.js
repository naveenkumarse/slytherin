import React from "react";
import Prevcard from "./prevcard";
import {data} from './dataprevious';
const PrevEvents = () => {
    return (
        <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 relative ">
            
                {data.map((d) =>
                     (<Prevcard key={d.id} name={d.name} description={d.description} />)
                ) }
          
        </div>
    )
}

export default PrevEvents;
