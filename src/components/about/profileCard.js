import React from 'react';

const ProfileCard = (props) => {
    const {id,name,year,designation} = props;
    return (
    <div className="flex flex-col justify-center" key={id}>
    <div
        className="relative flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0 rounded-sm shadow-lg p-3 max-w-xs md:max-w-2xl mx-auto border border-white bg-white">
        <div className="w-full md:w-1/3 bg-white grid place-items-center">
            <img src="https://images.pexels.com/photos/4381392/pexels-photo-4381392.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="tailwind logo" className="rounded-xl" />
        </div>
            <div className="w-full md:w-2/3 bg-white flex flex-col space-y-2 p-3">
                <h3 className="font-black text-gray-800 md:text-xl text-[12px]">{name} </h3>
                <p className="md:text-sm text-gray-500 text-base">{year}</p>
                <p className="md:text-sm text-gray-500 text-base">{designation}</p>
            </div>
        </div>
    </div>
        
    );
};

export default ProfileCard;
