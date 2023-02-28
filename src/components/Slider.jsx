import React, { useEffect, useRef, useState } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';

import wallpaper1 from '../assets/wallpaper1.jpeg'
import wallpaper2 from '../assets/wallpaper2.jpeg'
import wallpaper3 from '../assets/wallpaper3.jpeg'
import wallpaper4 from '../assets/wallpaper4.jpeg'

let count = 0;
let sliderInterval;
const Slider = () => {
    const slideRef = useRef();

    const imageArray = [wallpaper1, wallpaper2, wallpaper3, wallpaper4];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleOnNextClick = () => {
        count = (count + 1) % imageArray.length;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');
    };
    const handleOnPrevClick = () => {
        const imageLength = imageArray.length;
        count = (currentIndex + imageLength - 1) % imageLength;
        setCurrentIndex(count);
        slideRef.current.classList.add('fade-anim');
    };

    useEffect(() => {
        startSlider();
        slideRef.current.addEventListener('animationend', removeAnimation);
        slideRef.current.addEventListener('mouseenter', pauseSlider);
        slideRef.current.addEventListener('mouseleave', startSlider);

        return () => {
            clearInterval(sliderInterval);
        };
    }, []);

    const startSlider = () => {
        sliderInterval = setInterval(() => {
            handleOnNextClick();
        }, 10000);
    };

    const pauseSlider = () => {
        clearInterval(sliderInterval);
    };

    const removeAnimation = () => {
        slideRef.current.classList.remove('fade-anim');
    };

    return (
        <div className='opacity-70'>
            <div ref={slideRef} className='relative w-full select-none'>
                <div className=' '>
                    <img src={imageArray[currentIndex]} alt='' className='object-cover lg:h-[400px] h-[250px] w-screen rounded-lg mb-20 ' />
                </div>
                <div className='absolute top-1/2 flex w-full -translate-y-1/2 transform items-start justify-between px-3 '>
                    <FiChevronLeft
                        onClick={handleOnPrevClick}
                        size='2rem'
                        className='cursor-pointer rounded-full bg-black bg-opacity-50 p-1 text-white transition hover:bg-opacity-100'
                    />
                    <FiChevronRight
                        onClick={handleOnNextClick}
                        size='2rem'
                        className='cursor-pointer rounded-full bg-black bg-opacity-50 p-1 text-white transition hover:bg-opacity-100'
                    />
                </div>
            </div>
        </div>
    );
};
export default Slider;
