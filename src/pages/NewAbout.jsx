import React from 'react';
import Documents from '../components/Documents';
import SchoolStatute from '../components/SchoolStatute';
import UsefulLinks from '../components/UsefulLinks';
import ExtraLessons from '../components/ExtraLessons';
import Territory from '../components/Territory';



const NewAbout = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='px-[8%] lg:mx-auto lg:max-w-7xl'>
                <h1 className='my-4 text-center lg:text-6xl 2xl:text-8xl uppercase font-bold tracking-wide text-gray-900 text-3xl'>
                    Про школу №295
                </h1>
                <div className='flex flex-col gap-y-48  items-center my-10'>
                    <Territory />
                    <UsefulLinks />
                    <Documents />
                    <ExtraLessons />
                    <SchoolStatute />
                </div>
            </div>
        </div>
    );
};

export default NewAbout;
