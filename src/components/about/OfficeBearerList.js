import React from 'react';
import ProfileCard from './profileCard';
import {persons} from './listoffice';
import '../../styles/About.css';

const OfficeBearerList = () => {
    return (
        <div className='mt-32'>
            <h1 className='heading font-bold text-6xl text-[#00df9a] relative'>OFFICE BEARERS</h1>
            <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 '>
                {persons.map((person)=><ProfileCard key={person.id} name={person.name} year={person.year} designation={person.designation} img={person.img} alt={person.alt}/>)}
            </div>
        </div>
    
    );
};


export default OfficeBearerList;
