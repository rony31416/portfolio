import React, { useState, useEffect } from "react";
import "../Style/TypewriterEffect.css";

const TypewriterEffect = ({ text, speed = 100, repeat = true }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);

  useEffect(() => {
    let interval;

    if (typingIndex < text.length) {
      interval = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(typingIndex));
        setTypingIndex((prev) => prev + 1);
      }, speed);
    } else if (repeat) {
      interval = setTimeout(() => {
        setDisplayedText("");
        setTypingIndex(0);
      }, speed * 10); // Pause before restarting
    }

    return () => clearTimeout(interval);
  }, [typingIndex, text, speed, repeat]);

  return (
    <div className="typewriter-container">
      <div className="typewriter">
        <span>{displayedText}</span>
        <span className="cursor">|</span>
      </div>
    </div>
  );
};

export default TypewriterEffect;
