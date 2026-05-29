import React, { useState, useEffect } from "react";

const colors = [
  "#ffffff", // White
  "#cccccc", // Light gray
  "#888888", // Medium gray
  "#ffffff", // White
];

export default function TypingText({ text, speed = 100 }) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, text, speed]);

  return (
    <span style={{ position: "relative" }}>
      <style>{`
        @keyframes typewriterBlink {
          0%, 49% { opacity: 1; }
          50%, 100% { opacity: 0; }
        }
        .typing-cursor {
          animation: typewriterBlink 0.6s infinite;
          display: inline-block;
          margin-left: 3px;
        }
      `}</style>
      
      {displayedText.split("").map((char, index) => (
        <span
          key={index}
          style={{
            color: colors[index % colors.length],
            fontWeight: "bold",
            letterSpacing: "0.5px",
          }}
        >
          {char}
        </span>
      ))}
      
      <span className="typing-cursor">|</span>
    </span>
  );
}
