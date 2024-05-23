'use client'

import React from 'react'
import { useEffect, useState } from 'react';
import MaxWidthWrapper from './MaxWidthWrapper';

interface CustomSliderProps {
    slides: React.ReactNode[];
}

export default function CustomerSlider<CustomSliderProps>({ slides }) {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, [slides.length]);

    return (
        <MaxWidthWrapper className='flex flex-col w-full h-screen'>
            <div className=" flex justify-center w-full pt-1 pb-10">
                <h1 className='mt-10 items-center font-palanquin text-4xl max-sm:text-[42px] max-sm:leading-[62px] font-normal'>
                    <span className='flex justify-center items-center'>
                        Whatever your business goals may be,
                    </span>
                    <span className='flex justify-center items-center'>you can find a solution with us</span>
                </h1>
            </div>
            <div className=" relative w-full h-screen">
                <div className="relative ">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full ${index === currentSlideIndex ? 'block' : 'hidden'
                                }`}
                        >
                            {slide}
                        </div>
                    ))}
                </div>
                <div className="absolute bottom-4 top-2/3 left-0 w-full flex justify-center">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 mx-1 rounded-full focus:outline-none ${index === currentSlideIndex ? 'bg-black' : 'bg-gray-400'
                                }`}
                            onClick={() => setCurrentSlideIndex(index)}
                        ></button>
                    ))}
                </div>
            </div>
        </MaxWidthWrapper>
    )
}
