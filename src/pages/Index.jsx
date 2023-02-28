import React from 'react';
import { NavLink } from 'react-router-dom';
import Slider from '../components/Slider';

const Index = () => {
    return (
        <main className='lg:mt-4 mx-3 lg:mx-0'>
            <div className='max-w-7xl mx-auto py-6 sm:px-6 lg:px-8'>
                <div className='text-center'>
                    <h1 className='text-4xl 2xl:text-8xl my-5 lg:my-2 font-bold tracking-tight text-gray-900 sm:text-6xl uppercase'>
                        Школа №295
                    </h1>
                    <p className='my-5 lg:my-2 text-right  px-8 text-lg leading-8 text-gray-600 2xl:my-20'>Уперед до знань</p>
                </div>
                <Slider />
                <div className='lg:hidden flex justify-center'>
                    <NavLink
                        to='/contacts'
                        className='text-xl text-white/90 uppercase bg-gray-700 px-8 py-4 font-bold leading-6 active:bg-gray-500 rounded-xl active:scale-110 active:shadow-md'>
                        Контакти
                    </NavLink>
                </div>
            </div>
        </main>
    );
};

export default Index;
