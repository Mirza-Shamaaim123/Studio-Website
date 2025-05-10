import { useState, useEffect, useRef } from 'react';

const AnimatedLine = () => {
  const [isAnimating, setIsAnimating] = useState(true);
  const lineRef : any = useRef(null);
  const textRef : any = useRef(null);
  const animationRef : any = useRef(null);
  const word = "SCROLL";
  const animationDuration = 3; // in seconds
  const delayBetweenLoops = 1; // in seconds
  
  // Function to handle complete animation cycle
  const handleAnimationComplete = () => {
    if (textRef.current) {
      // Reset text animation
      textRef.current.style.animation = 'none';
      textRef.current.style.opacity = '0';
    }
    
    // Pause before starting the next cycle
    setIsAnimating(false);
    setTimeout(() => {
      setIsAnimating(true);
    }, delayBetweenLoops * 1000);
  };
  
  useEffect(() => {
    const lineElement = lineRef.current;
    const textElement = textRef.current;
    
    if (!lineElement || !textElement || !isAnimating) return;
    
    let startTime : any = null;
    let animationTriggered = false;
    
    const animate = (timestamp : any) => {
      if (!startTime) startTime = timestamp;
      const elapsedTime = timestamp - startTime;
      const progress = Math.min(elapsedTime / (animationDuration * 1000), 1);
      
      // Calculate position based on progress
      // Ensure line travels the full viewport height + its own height
      const translateY = -progress * (200); // 0% to -200% (to ensure full line goes off screen)
      
      // Apply movement
      lineElement.style.transform = `translate(-50%, ${translateY}%)`;
      
      // Trigger text animation when line reaches top portion
      if (progress >= 0.6 && !animationTriggered) {
        textElement.style.animation = `appearAndSpace ${animationDuration * 0.3}s ease-in-out forwards`;
        animationTriggered = true;
      }
      
      // Continue animation or complete cycle
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        handleAnimationComplete();
      }
    };
    
    // Start animation
    animationRef.current = requestAnimationFrame(animate);
    
    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [animationDuration, delayBetweenLoops, isAnimating]);

  return (
    // <div className="relative w-full h-screen overflow-hidden bg-gray-100">
      <>
      
      <style>
        {`
          @keyframes appearAndSpace {
            0% {
              opacity: 0;
              letter-spacing: normal;
              color: white;
            }
            20% {
              opacity: 1;
              letter-spacing: 2px;
              color:rgb(196, 120, 209));
            }
            70% {
              letter-spacing: 15px;
              opacity: 1;
              color:rgb(183, 74, 202);
            }
            100% {
              letter-spacing: 20px;
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
          width: "3px",
          height: "75vh",
          background: "linear-gradient(to bottom, rgb(183, 74, 202), transparent)",
          top: "100%",
          left: "50%",
          transform: "translate(-50%, 0%)"
        }}
      />
      
      <div
        ref={textRef}
        className="fixed z-[999] font-bold text-4xl"
        style={{
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "transparent",
          opacity: 0
        }}
      >
        {word}
      </div>
      </>
      
    // </div>
  );
};

export default AnimatedLine;