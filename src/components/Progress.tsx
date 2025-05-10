import { useEffect, useState, useRef } from 'react';

export const CircularProgress = ({ totalValue = 100, progressValue = 0, suffix = '', color = 'url(#gradient-default)', id = 'default' }) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const circleRef = useRef(null);
  
  // Calculate percentage for circle fill
  const percentage = (progressValue / totalValue) * 100;
  
  // Constants for the circle
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  
  const animateCircle = () => {
    if (!circleRef.current) return;
    
    // Reset circle
    const circle : any = circleRef.current;
    circle.style.strokeDasharray = circumference.toString();
    circle.style.strokeDashoffset = circumference.toString();
    
    // Force reflow
    void circle.offsetWidth;
    
    // Animate the circle
    const offset = circumference - (percentage / 100) * circumference;
    circle.style.transition = `stroke-dashoffset 2000ms ease-in-out`;
    circle.style.strokeDashoffset = offset.toString();
  };
  
  const animateCounter = () => {
    setIsAnimating(true);
    let start = 0;
    const step = progressValue / 50;
    const interval = 2000 / 50;

    const isDecimal = !Number.isInteger(progressValue);
    const decimalPlaces = isDecimal
      ? progressValue.toString().split(".")[1].length
      : 0;

    const timer = setInterval(() => {
      start += step;
      if (start >= progressValue) {
        setCurrentValue(parseFloat(progressValue.toFixed(decimalPlaces)));
        clearInterval(timer);
        setIsAnimating(false);
      } else {
        setCurrentValue(isDecimal
          ? parseFloat(start.toFixed(decimalPlaces))
          : Math.floor(start));
      }
    }, interval);
    
    return () => clearInterval(timer);
  };
  
  // Reset and animate when component is in view or when values change
  useEffect(() => {
    setCurrentValue(0);
    
    // Small delay to ensure DOM is ready
    const timeout = setTimeout(() => {
      animateCircle();
      animateCounter();
    }, 100);
    
    return () => clearTimeout(timeout);
  }, [progressValue, totalValue]);

  return (
    <div className="stat-box">
      <div className="progress-circle-container">
        <svg width="150" height="150" viewBox="0 0 150 150">
          <defs>
            <linearGradient
              id={`gradient-${id}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="0%"
            >
              <stop offset="0%" stopColor="#4654b5" />
              <stop offset="100%" stopColor="#a241b4" />
            </linearGradient>
          </defs>
          <circle
            className="progress-circle progress-circle-bg"
            cx="75"
            cy="75"
            r={radius}
          />
          <circle
            ref={circleRef}
            className="progress-circle progress-circle-value"
            cx="75"
            cy="75"
            r={radius}
            style={{
              strokeDasharray: circumference,
              strokeDashoffset: circumference,
              stroke: color || `url(#gradient-${id})`
            }}
          />
        </svg>
        <div className="stat-number">
          {currentValue}{suffix}
        </div>
      </div>
      <div className="stat-label">{}</div>
    </div>
  );
};

// Example usage
export default function StatisticsSection() {
  // This ref tracks if animation has run
  const animated = useRef(false);
  
  // Component state - you can pass these from parent component as well
  const [isVisible, setIsVisible] = useState(false);
  
  function checkVisibility() {
    const statsContainer = document.querySelector(".statistics-section");
    if (statsContainer) {
      const rect = statsContainer.getBoundingClientRect();
      const isInView = (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
      
      if (isInView && !animated.current) {
        animated.current = true;
        setIsVisible(true);
      }
    }
  }
  
  useEffect(() => {
    checkVisibility(); // Check on mount
    
    window.addEventListener("scroll", checkVisibility);
    return () => window.removeEventListener("scroll", checkVisibility);
  }, []);
  
  return (
    <div className="statistics-section">
      <div className="stats-container">
        {isVisible ? (
          <>
            <CircularProgress 
              id="experience" 
              totalValue={5} 
              progressValue={3.5} 
              suffix=""
            />
            
            <CircularProgress 
              id="projects" 
              totalValue={100} 
              progressValue={23} 
              suffix=""
            />
            
            <CircularProgress 
              id="reviews" 
              totalValue={1000} 
              progressValue={830} 
              suffix="+" 
            />
            
            <CircularProgress 
              id="students" 
              totalValue={100} 
              progressValue={100} 
              suffix="K"
            />
          </>
        ) : (
          <>
            <CircularProgress id="experience" totalValue={5} progressValue={0} suffix="" />
            <CircularProgress id="projects" totalValue={100} progressValue={0} suffix="" />
            <CircularProgress id="reviews" totalValue={1000} progressValue={0} suffix="+" />
            <CircularProgress id="students" totalValue={100} progressValue={0} suffix="K" />
          </>
        )}
      </div>
    </div>
  );
}