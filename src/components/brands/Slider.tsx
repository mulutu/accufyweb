'use client'
import { useEffect, useRef, useState } from 'react';

const Carousel: React.FC<{ items: React.ReactNode[] }> = ({ items }) => {
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    };

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === items.length - 1 ? 0 : prevIndex + 1
                ),
            3000
        );

        return () => {
            resetTimeout();
        };
    }, [index, items.length]);

    const handlePrev = () => {
        setIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex === items.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <div className="relative w-full overflow-hidden">
            <div
                className="flex transition-transform ease-in-out duration-500"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className="min-w-full flex-shrink-0"
                    >
                        {item}
                    </div>
                ))}
            </div>
            <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
            >
                &lt;
            </button>
            <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2"
            >
                &gt;
            </button>
        </div>
    );
};

export default Carousel;
