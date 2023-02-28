import React from 'react';
import MapComponent from '../components/MapComponent';

const Contacts = () => {
    return (
        <div className='flex w-full flex-col overflow-hidden pb-10'>
            <div className='px-[8%] lg:mx-auto lg:max-w-7xl'>
                <div className='grid lg:grid-cols-2 lg:gap-x-10  xl:gap-x-40 xl:h-[400px] w-auto gap-y-10 grid-cols-1 mt-10 xl:mt-32'>
                    <div className='lg:flex flex-col items-center justify-center gap-5 '>
                        <h1 className=' 2xl:text-8xl my-2 uppercase text-2xl tracking-wide sm:text-6xl text-center lg:text-6xl font-bold text-gray-700'>
                            Контакти
                        </h1>
                        <h2 className='text-center text-lg text-gray-900'>
                            <span className='font-bold'>Адреса:</span> вулиця Олександра Кошиця, 6, Київ, 02068
                        </h2>
                        <p className='text-center text-lg text-gray-600'>
                            <span className='font-bold text-gray-900'>Телефон: </span>
                            <a href='tel:+38-044-575-91-89'>+38 044 575 91 89</a>
                        </p>
                        <p className='text-center text-lg text-gray-900'>
                            <span className='font-bold'>Написати листа: </span>{' '}
                            <a href='mailto:school295@i.ua'>school295@i.ua</a>
                        </p>
                    </div>
                    <div className=''>
                        <MapComponent />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
