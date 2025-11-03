import { useState, useEffect } from "react";
import "../styles/terminal.css";

export default function Terminal({ onFinish }) {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    // ✅ Déplacer lines ici
    const lines = [
      "> Initializing project...",
      "> Installing dependencies...",
      "> Fetching React...",
      "> Fetching ReactDOM...",
      "> Installing React Router...",
      "> Creating file structure...",
      "> Finalizing setup...",
      "> Done ✅"
    ];

    let index = 0;
    const interval = setInterval(() => {
      setDisplayedLines((prev) => [...prev, lines[index]]);
      index++;

      if (index === lines.length) {
        clearInterval(interval);
        setIsFinished(true);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []); // ✅ plus besoin de dépendance lines

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (isFinished && e.key === "Enter") {
        onFinish();
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isFinished, onFinish]);

  return (
    <div className="terminal-container">
      <div className="terminal">
        {displayedLines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}

        {!isFinished && <span className="cursor">▋</span>}

        {isFinished && (
          <div>
            Press ENTER to continue... <span className="cursor">▋</span>
          </div>
        )}
      </div>
    </div>
  );
}
