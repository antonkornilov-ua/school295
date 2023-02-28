import React from 'react';
import { territoryArray } from '../helpers/territoryArray';

const Territory = () => {
    const gridStyle = `grid lg:grid-cols-2 grid-cols-1 gap-x-10 mt-10`;
    const rightColStyle = `lg:flex items-center justify-between lg:text-6xl font-bold text-gray-700 text-center text-4xl lg:mb-0 mb-5`;
    const buttonStyle = ` mx-auto text-white/90 text-center bg-gray-700 px-4 py-2 rounded-xl  shadow-xl`;

    return (
        <div className={gridStyle}>
            <div className={rightColStyle}>
                Територія обслуговування школи <br/> &#8544; ступеня № 295
            </div>
            <div className='flex justify-center items-center'>
                <div className='grid gap-5 grid-cols-1'>
                    {territoryArray.map((item) => {
                        return (
                            <div
                                key={item.street}
                                className='flex w-full flex-col bg-gray-500/20 gap-y-1 p-4 rounded-xl'>
                                <h2 className='text-center text-lg text-gray-900'>{item.street}</h2>
                                <p className={buttonStyle}>
                                    {item.apartments}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Territory;
