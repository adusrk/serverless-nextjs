import React, { useEffect, useState } from 'react';
import styles from './ConsoleText.module.css'; // Assuming you have corresponding CSS

const ConsoleText = ({ words, colors }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState(colors[0]);
  const [showUnderscore, setShowUnderscore] = useState(true);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setCurrentText((prev) => {
        const direction = currentIndex % 2 === 0 ? 1 : -1;
        const nextLength = prev.length + direction;

        if (nextLength === words[currentIndex % words.length].length + 1 || nextLength === -1) {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentIndex((prevIndex) => {
              const nextIndex = (prevIndex + 1) % words.length;
              setCurrentColor(colors[nextIndex % colors.length]);
              return nextIndex;
            });
          }, 1500);
        }

        return words[currentIndex % words.length].substring(0, nextLength);
      });
    }, 400);

    return () => clearInterval(typingInterval);
  }, [currentIndex, words, colors]);

  useEffect(() => {
    const underscoreBlinkInterval = setInterval(() => {
      setShowUnderscore((prev) => !prev);
    }, 400);

    return () => clearInterval(underscoreBlinkInterval);
  }, []);

  return (
    <div className={styles.consoleContainer} style={{ color: currentColor }}>
      <span>{currentText}</span>
      <div className={`${styles.consoleUnderscore} ${showUnderscore ? '' : styles.hidden}`}>&#95;</div>
    </div>
  );
};

export default ConsoleText;
