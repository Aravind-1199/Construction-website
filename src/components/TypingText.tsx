import React, { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  pause?: number;
  className?: string;
}

const TypingText: React.FC<TypingTextProps> = ({
  text,
  speed = 100,
  pause = 1500,
  className
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (index <= text.length) {
      timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, index));
        setIndex((prev) => prev + 1);
      }, speed);
    } else {
      // Pause at full text, then reset instantly
      timeout = setTimeout(() => {
        setDisplayedText('');
        setIndex(0);
      }, pause);
    }

    return () => clearTimeout(timeout);
  }, [index, text, speed, pause]);

  return <span className={`${className} typing-cursor`}>{displayedText}</span>;
};

export default TypingText;
