import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence, useScroll } from "framer-motion"

type Step = {
  number: string | number
  title: string
  description: string
}

type ServicesScrollSectionProps = {
  content: {
    mainHeading: string
    steps: Step[]
  }
  images: string[]
}

const ServicesScrollSection: React.FC<ServicesScrollSectionProps> = ({ content, images }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const scrolling = useRef(false)
  const [isInView, setIsInView] = useState(false)
  
  const { scrollY } = useScroll()
  const scrollDelay = 800

  // Setup IntersectionObserver to detect when section is fully in view
  useEffect(() => {
    if (!sectionRef.current) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        // Check if the section is fully visible
        if (entries[0].isIntersecting && entries[0].intersectionRatio >= 0.8) {
          setIsInView(true)
        } else {
          setIsInView(false)
        }
      },
      { 
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "0px" 
      }
    )
    
    observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  // Only enable scroll control when section is in view
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!isInView) return
      
      const isAtFirstStep = activeIndex === 0 && e.deltaY < 0
      const isAtLastStep = activeIndex === content.steps.length - 1 && e.deltaY > 0
      if (isAtFirstStep || isAtLastStep) return

      e.preventDefault()
      if (scrolling.current) return

      if (e.deltaY > 0 && activeIndex < content.steps.length - 1) {
        scrollStep(activeIndex + 1)
      } else if (e.deltaY < 0 && activeIndex > 0) {
        scrollStep(activeIndex - 1)
      }
    }

    const section = sectionRef.current
    section?.addEventListener("wheel", handleWheel, { passive: false })
    return () => section?.removeEventListener("wheel", handleWheel)
  }, [activeIndex, content.steps.length, isInView])

  // Touch scroll - only when in view
  useEffect(() => {
    let touchStartY = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (!isInView || scrolling.current) return

      const diff = touchStartY - e.touches[0].clientY
      if (Math.abs(diff) < 50) return

      if (diff > 0 && activeIndex < content.steps.length - 1) {
        scrollStep(activeIndex + 1)
      } else if (diff < 0 && activeIndex > 0) {
        scrollStep(activeIndex - 1)
      }

      e.preventDefault()
    }

    const section = sectionRef.current
    section?.addEventListener("touchstart", handleTouchStart, { passive: true })
    section?.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      section?.removeEventListener("touchstart", handleTouchStart)
      section?.removeEventListener("touchmove", handleTouchMove)
    }
  }, [activeIndex, content.steps.length, isInView])

  // Keyboard navigation - only when in view
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isInView || scrolling.current) return
      
      if (e.key === "ArrowDown" && activeIndex < content.steps.length - 1) {
        scrollStep(activeIndex + 1)
      } else if (e.key === "ArrowUp" && activeIndex > 0) {
        scrollStep(activeIndex - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeIndex, content.steps.length, isInView])

  // Scroll progress tracking for animations
  const [scrollProgress, setScrollProgress] = useState(0)
  
  useEffect(() => {
    const updateScrollProgress = () => {
      if (!sectionRef.current) return
      
      const rect = sectionRef.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate how much of the section is visible
      const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
      const totalHeight = rect.height
      
      // Calculate visibility percentage (0 to 1)
      const visibilityRatio = Math.max(0, Math.min(1, visibleHeight / totalHeight))
      
      // Calculate progress based on position in viewport
      let progress = 0
      
      if (rect.top <= 0) {
        // Section is at or has scrolled past the top of viewport
        progress = Math.min(1, -rect.top / (totalHeight - windowHeight))
      } else if (rect.top < windowHeight) {
        // Section is entering the viewport
        progress = 1 - (rect.top / windowHeight)
      }
      
      // Combine visibility and position for final progress
      setScrollProgress(visibilityRatio * progress)
    }
    
    window.addEventListener("scroll", updateScrollProgress)
    updateScrollProgress() // Initial calculation
    
    return () => window.removeEventListener("scroll", updateScrollProgress)
  }, [])

  // Scroll step
  const scrollStep = (index: number) => {
    scrolling.current = true
    setActiveIndex(index)
    setTimeout(() => {
      scrolling.current = false
    }, scrollDelay)
  }

  const handleStepClick = (index: number) => {
    if (scrolling.current || index === activeIndex) return
    scrollStep(index)
  }

  return (
    <div 
      ref={sectionRef} 
      className="services-crousel-scroll-section"
      style={{ 
        minHeight: "100vh",
        position: "relative"
      }}
    >
      {/* Left side - Text */}
      <div 
        className="services-crousel-content-side"
        style={{
          opacity: isInView ? 1 : 1,
          transition: "opacity 0.5s ease"
        }}
      >
        <h2 className="services-crousel-main-heading">{content.mainHeading}</h2>

        <div className="services-crousel-steps-container">
          {/* Numbers */}
          <div className="services-crousel-step-numbers">
            {content.steps.map((step, index) => (
              <div
                key={index}
                className={`services-crousel-step-number ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleStepClick(index)}
                style={{
                  opacity: isInView ? 1 : 1,
                  transform: `scale(${index === activeIndex && isInView ? 1.1 : 1})`,
                  transition: "all 0.3s ease"
                }}
              >
                {step.number}
              </div>
            ))}
          </div>

          {/* Step content */}
          <div className="services-crousel-step-content-area">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                className="services-crousel-step-content"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isInView ? 1 : 0.5, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <h3 className="services-crousel-step-title">
                  {content.steps[activeIndex].title}
                </h3>
                <p className="services-crousel-step-description">
                  {content.steps[activeIndex].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div 
        className="services-crousel-image-side"
        style={{
          opacity: isInView ? 1 : 0.4,
          // transform: `translateY(${isInView ? 0 : '20px'})`,
          transition: "all 0.6s ease"
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="services-crousel-image-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img
              src={images[activeIndex] || "/placeholder.svg"}
              alt={`Step ${activeIndex + 1} visualization`}
              className="services-crousel-feature-image"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Optional: Debug indicator for scroll progress */}
      {/* 
      <div style={{ 
        position: "fixed", 
        bottom: "10px", 
        right: "10px", 
        background: "rgba(0,0,0,0.7)", 
        color: "white", 
        padding: "5px", 
        borderRadius: "4px" 
      }}>
        In View: {isInView ? "Yes" : "No"}<br/>
        Scroll Progress: {Math.round(scrollProgress * 100)}%
      </div>
      */}
    </div>
  )
}

export default ServicesScrollSection