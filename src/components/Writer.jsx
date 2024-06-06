import React, { useState, useEffect } from 'react';

const LoadingTypewriter = ({ setCycleComplete,words, typingSpeed = 50, deletingSpeed = 20, delayBetweenWords = 500 }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const handleType = () => {
            const currentWord = words[currentWordIndex];

            if (isDeleting) {
                if (charIndex > 0) {
                    setCurrentText(currentWord.substring(0, charIndex - 1));
                    setCharIndex(charIndex - 1);
                } else {
                    setIsDeleting(false);
                    const nextWordIndex = (currentWordIndex + 1) % words.length;
                    setCurrentWordIndex(nextWordIndex);
                    if (nextWordIndex === 0) {
                        setCycleComplete(true);
                    }
                }
            } else {
                if (charIndex < currentWord.length) {
                    setCurrentText(currentWord.substring(0, charIndex + 1));
                    setCharIndex(charIndex + 1);
                } else {
                    setTimeout(() => setIsDeleting(true), delayBetweenWords);
                }
            }
        };

        const timeout = setTimeout(handleType, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timeout);
    }, [charIndex, isDeleting, currentWordIndex, words, typingSpeed, deletingSpeed, delayBetweenWords]);

    

    return (
        <div className="fixed z-[999999] bg-primary inset-0 flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-2xl text-white font-bold">{currentText}</h1>
        </div>
    );
};

const Loading = ({cycleComplete,setCycleComplete,words}) => {
    useEffect(() => {
        if (cycleComplete) {
            setCycleComplete(false);  
        }
    }, [cycleComplete]);
    return <LoadingTypewriter cycleComplete={cycleComplete} setCycleComplete={setCycleComplete} words={words} />;
};

export default Loading;
