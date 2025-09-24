import { useEffect, useState } from "react";

const TypewriterAnimations = ({ 
  words = [], 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  delay = 1500 
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[currentWordIndex];
    let timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(prev => prev.slice(0, -1));
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setText(prev => currentWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), delay);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, words, currentWordIndex, typingSpeed, deletingSpeed, delay]);

  return (
    <span className="font-mono  font-bold border-r-2 border-black pr-1 animate-pulse">
      {text}
    </span>
  );
};

export default TypewriterAnimations;
