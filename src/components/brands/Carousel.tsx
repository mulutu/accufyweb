// components/Carousel.tsx
'use client'
import { useState, useEffect } from 'react';

const Carousel = () => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const [carouselWidth, setCarouselWidth] = useState(0);
    const [containerWidth, setContainerWidth] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setCarouselWidth(window.innerWidth);
            setContainerWidth(window.innerWidth / 4); // Show 2 items at once
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setScrollLeft((prevScrollLeft) => {
                const newScrollLeft = prevScrollLeft + 1;
                return newScrollLeft >= carouselWidth ? 0 : newScrollLeft;
            });
        }, 1); // Adjust the scroll speed as needed

        return () => clearInterval(intervalId);
    }, [carouselWidth]);

    return (
        <div className="relative overflow-hidden bg-gray-200 border border-red-600 h-[100px]">
            <div
                className="flex absolute transition-transform duration-500"
                style={{ transform: `translateX(-${scrollLeft}px)` }}
            >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                    <div
                        key={item}
                        className="flex-none w-1/2 p-4 flex items-center justify-center"
                        style={{ minWidth: `${containerWidth}px` }}
                    >
                        <div className="bg-white rounded-lg p-4 shadow-md">Item {item}</div>
                    </div>
                ))}
            </div>
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                onClick={() => setScrollLeft((prev) => Math.max(prev - containerWidth, 0))}
            >
                {'<'}
            </button>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
                onClick={() => setScrollLeft((prev) => Math.min(prev + containerWidth, carouselWidth - containerWidth))}
            >
                {'>'}
            </button>
        </div>
    );
};

export default Carousel;
