import { useEffect, useRef, useState, type ReactNode } from "react";

interface TypingTextProps {
  text: string;
  speed?: number;
  onDone?: () => void;
  children?: (typed: string) => ReactNode;
}

export default function TypingText({ text, speed = 60, onDone, children }: TypingTextProps) {
  const [typed, setTyped] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    setTyped("");
    indexRef.current = 0;
    let timer: number;

    const tick = () => {
      if (indexRef.current < text.length) {
        setTyped(text.slice(0, indexRef.current + 1));
        indexRef.current++;
        timer = window.setTimeout(tick, speed);
      } else {
        onDone?.();
      }
    };

    timer = window.setTimeout(tick, speed);
    return () => window.clearTimeout(timer);
  }, [text, speed, onDone]);

  if (children) return <>{children(typed)}</>;
  return (
    <span>
      {typed}
      <span className="typing-cursor" />
    </span>
  );
}
