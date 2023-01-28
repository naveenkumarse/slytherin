import React from 'react';
import ProfileCard from './profileCard';
import {persons} from './listoffice';
const OfficeBearerList = () => {
    return (

    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 '>
        {persons.map((person)=><ProfileCard key={person.id} year={person.year} designation={person.designation}/>)}
    </div>
    
    );
};


export default OfficeBearerList;
