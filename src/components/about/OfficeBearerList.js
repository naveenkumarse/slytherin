import React from 'react';
import ProfileCard from './profileCard';
import {persons} from './listoffice';
const OfficeBearerList = () => {
    return (

    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 '>
        {persons.map((person)=><ProfileCard key={person.id} name={person.name} year={person.year} designation={person.designation} img={person.img} alt={person.alt}/>)}
    </div>
    
    );
};


export default OfficeBearerList;
