import React from 'react';
import Documents from '../components/Documents';
import SchoolStatute from '../components/SchoolStatute';
import UsefulLinks from '../components/UsefulLinks';
import ExtraLessons from '../components/ExtraLessons';
import Territory from '../components/Territory';

const About = () => {
    return (
        <div className='flex w-full flex-col overflow-hidden pb-10'>
            <div className='px-[8%] lg:mx-auto lg:max-w-7xl'>
                <div className='lg:my-8 my-2'>
                    <h1 className='text-center lg:text-4xl 2xl:text-8xl my-2 uppercase text-2xl font-bold tracking-wide text-gray-900 sm:text-6xl'>
                        Про школу №295
                    </h1>
                </div>
                <div className='grid lg:grid-rows-5 grid-cols-1 gap-y-10'>
                    <SchoolStatute />
                    <UsefulLinks />
                    <Documents />
                    <ExtraLessons />
                    <Territory/>
                </div>
            </div>
        </div>
    );
};

export default About;
