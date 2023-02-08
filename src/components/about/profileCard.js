import React from 'react';

const ProfileCard = (props) => {
    const {id,name,year,designation,img,alt} = props;
    return (
    <div className="" key={id}>
    <div
        className="relative font-mono tracking-tight flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 rounded-sm shadow-lg p-2 max-w-xs md:max-w-2xl mx-auto border border-white bg-white">
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <img className="object-contain max-h-32 rounded-xl" src={img} alt={alt}  />
        </div>
            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2">
                <h3 className="font-black text-gray-800 md:text-xl text-[12px] ">{name} </h3>
                <p className="md:text-sm text-gray-500 text-base">{year}</p>
                <p className="md:text-sm text-gray-500 text-base">{designation}</p>
            </div>
        </div>
    </div>
        
    );
};

export default ProfileCard;
