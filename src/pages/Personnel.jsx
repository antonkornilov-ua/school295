import React, { useEffect, useState } from 'react';
import sortedTeacherList from '../helpers/sortTeachers';
import administration from '../helpers/administration';

import defaultPhoto from './../assets/1.svg';

const Personnel = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }, []);

    const squareStyle = `flex flex-col items-center border-gray-700 border rounded-xl lg:p-5 p-2 lg:max-w-[300px] lg:max-h-[300px] lg:hover:scale-110 lg:hover:bg-gray-200 lg:hover:text-black lg:transition lg:duration-300`;
    return (
        <div className='flex w-full flex-col overflow-hidden pb-10'>
            <div className='px-[8%] lg:mx-auto lg:max-w-7xl'>
                {/* Admins */}

                <div className='grid lg:grid-cols-3 grid-cols-1 my-8 gap-x-10 gap-y-6 self-center'>
                    <h2 className='text-center lg:text-4xl my-2 uppercase text-2xl font-bold tracking-wide text-gray-900 sm:text-6xl'>
                        Наша адміністрація
                    </h2>
                    {loading ? (
                        <p className='text-gray-900 lg:text-4xl text-base uppercase text-center semibold mb-2 animate-pulse'>
                            Завантаження...
                        </p>
                    ) : (
                        administration.map((item) => {
                            return (
                                <div key={item.name} className={squareStyle}>
                                    <div className='h-[133px] w-[100px] overflow-clip mb-2'>
                                        <img
                                            src={item.photo}
                                            alt={item.name}
                                            className=' object-cover rounded-md shadow-xl '
                                        />
                                    </div>
                                    <h3 className='text-gray-900 lg:text-xl text-base uppercase text-center semibold mb-2'>
                                        {item.name}
                                    </h3>
                                    <p className='lg:text-lg text-sm text-center text-gray-600'>{item.position}</p>
                                    <p className='text-gray-900 text-xs text-center '>
                                        {item.honor ? item.honor : null}
                                    </p>
                                </div>
                            );
                        })
                    )}
                </div>

                {/* Teachers */}
                <div className='grid lg:grid-cols-3 grid-cols-1 lg:mt-2 gap-x-10 gap-y-6 self-center'>
                    <h2 className='text-center lg:text-4xl my-2 uppercase text-2xl font-bold tracking-wide text-gray-900 sm:text-6xl'>
                        Наші вчителі
                    </h2>
                    {loading ? (
                        <p className='text-gray-900 lg:text-4xl text-base uppercase text-center semibold mb-2 animate-pulse'>
                            Завантаження...
                        </p>
                    ) : (
                        sortedTeacherList.map((item) => {
                            return (
                                <div key={item.name} className={squareStyle}>
                                    <div className='h-[133px] w-[100px] overflow-clip mb-2'>
                                        <img
                                            src={item.photosrc !== '' ? item.photosrc : defaultPhoto}
                                            alt={item.name}
                                            className=' object-cover rounded-md shadow-xl '
                                        />
                                    </div>
                                    <h3 className='lg:text-xl text-base uppercase text-center semibold mb-2 text-gray-900'>
                                        {item.name}
                                    </h3>
                                    <p className='lg:text-lg text-sm text-center text-gray-600'>{item.position}</p>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
};

export default Personnel;
