import { useEffect, useState } from 'react';

interface TextSliderProps {
    texts: String[];
}

const TextSlider: React.FC<TextSliderProps> = ({ texts }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="flex w-full text-center">
            <h2 className="text-2xl font-bold mt-8">{texts[currentTextIndex]}</h2>
        </div>
    );
};

export default TextSlider;
