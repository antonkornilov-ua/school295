import React from 'react';
import extraLessonsArray from './../helpers/extraLessonsArray'

const ExtraLessons = () => {
    const gridStyle = `grid lg:grid-cols-2 grid-cols-1 gap-x-10 xl:gap-x-32`;
    const rightColStyle = `lg:flex items-center justify-center flex-col lg:text-6xl font-bold text-gray-700 text-center text-2xl lg:mb-0 mb-5`;
    const buttonStyle = ` w-1/2 mx-auto text-white/90 text-center uppercase bg-gray-700 px-4 py-2 hover:bg-gray-600 active:bg-gray-500 rounded-xl hover:scale-90 active:scale-110 shadow-xl`;

    return (
        <div className={gridStyle}>
            <div className={`${rightColStyle} lg:hidden`}>
                Програми курсів за вибором гуртка "Smartрозвиток"
                <div className='flex justify-center items-center'>
                    <div className='flex w-full flex-col gap-y-1 p-4'>
                        <h2 className='text-center text-lg text-gray-900'>Платні послуги</h2>
                        <p className='text-center text-lg text-gray-600'>
                            Затверджено педагогічною радою протокол №5 від 30.08.2018
                        </p>
                        <p className='text-end text-sm text-gray-900'>Вартість уточнюйте у класного керівника</p>
                    </div>
                </div>
            </div>

            <div className='grid gap-5 grid-cols-1 '>
                {extraLessonsArray.map((item) => {
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
            <div className={`${rightColStyle} lg:visible hidden`}>
                Програми курсів за вибором гуртка "Smartрозвиток"
                <div className='flex justify-center items-center'>
                    <div className='flex w-full flex-col gap-y-1 p-4'>
                        <h2 className='text-center text-lg text-gray-900'>Платні послуги</h2>
                        <p className='text-center text-lg text-gray-600'>
                            Затверджено педагогічною радою протокол №5 від 30.08.2018
                        </p>
                        <p className='text-end text-sm text-gray-900'>Вартість уточнюйте у класного керівника</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExtraLessons;
