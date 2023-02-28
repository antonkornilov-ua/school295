import React from 'react';
import usefulLinksArray from '../helpers/usefulLinksArray';

const UsefulLinks = () => {
    const gridStyle = `grid lg:grid-cols-2 grid-cols-1 gap-x-10`;
    const rightColStyle = `lg:flex items-center justify-center lg:text-6xl font-bold text-gray-700 text-center text-2xl lg:mb-0 mb-5`;
    const buttonStyle = ` w-1/2 mx-auto text-white/90 text-center uppercase bg-gray-700 px-4 py-2 hover:bg-gray-600 active:bg-gray-500 rounded-xl hover:scale-90 active:scale-110 shadow-xl`;

    return (
        <div className={gridStyle}>
            <div className={`${rightColStyle} lg:hidden`}>Корисні посилання</div>
            <div className='flex justify-center items-center'>
                <div className='grid gap-5 grid-cols-1 '>
                    {usefulLinksArray.map((item) => {
                        return (
                            <div key={item.name} className='flex w-full flex-col bg-gray-500/20 gap-y-1 p-4 rounded-xl'>
                                <h2 className='text-center text-lg text-gray-900'>{item.name}</h2>
                                <a className={buttonStyle} href={item.url} target='_blank'>
                                    Посилання
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className={`${rightColStyle} lg:visible hidden`}>Корисні посилання</div>
        </div>
    );
};

export default UsefulLinks;
