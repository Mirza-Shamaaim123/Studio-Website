import { useState, useEffect, useRef } from 'react';

const AnimatedLine = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const lineRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);

  const word = "SCROLL";
  const animationDuration = 3; // seconds
  const delayBetweenLoops = 1; // seconds

  const handleAnimationComplete = () => {
    if (textRef.current) {
      textRef.current.style.animation = 'none';
      textRef.current.style.opacity = '0';
    }

    setIsAnimating(false);
    setTimeout(() => setIsAnimating(true), delayBetweenLoops * 1000);
  };

  useEffect(() => {
    const lineEl = lineRef.current;
    const textEl = textRef.current;

    if (!lineEl || !textEl || !isAnimating) return;

    let startTime: number | null = null;
    let textShown = false;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / (animationDuration * 1000), 1);
      const translateY = -progress * 200;

      lineEl.style.transform = `translate(-50%, ${translateY}%)`;

      if (progress >= 0.6 && !textShown) {
        textEl.style.animation = `appearAndSpace ${animationDuration * 0.4}s ease-in-out forwards`;
        textShown = true;
      }

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        handleAnimationComplete();
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isAnimating]);

  return (
    <>
      <style>
        {`
          @keyframes appearAndSpace {
            0% {
              opacity: 0;
              letter-spacing: normal;
              color: white;
            }
            25% {
              opacity: 1;
              letter-spacing: 5px;
            }
            60% {
              letter-spacing: 15px;
              opacity: 1;
            }
            100% {
              letter-spacing: 25px;
              opacity: 0;
              color: transparent;
            }
          }
        `}
      </style>

      <div
        ref={lineRef}
        className="fixed z-[999]"
        style={{
          width: "1px",
          height: "100vh",
          background: "#fff",
          top: "100%",
          left: "50%",
          transform: "translate(-50%, 0%)",
          willChange: "transform"
        }}
      />

      <div
        ref={textRef}
        className="fixed z-[999] font-bold text-4xl"
        style={{
          top: "15%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "white",
          opacity: 0,
          textShadow: "0 0 6px rgba(255,255,255,0.6)",
          willChange: "opacity, letter-spacing"
        }}
      >
        {word}
      </div>
    </>
  );
};

export default AnimatedLine;
