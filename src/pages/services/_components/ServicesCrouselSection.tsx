import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

  const scrollDelay = 800

  // Wheel scroll
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
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
  }, [activeIndex, content.steps.length])

  // Touch scroll
  useEffect(() => {
    let touchStartY = 0

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (scrolling.current) return

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
  }, [activeIndex, content.steps.length])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (scrolling.current) return
      if (e.key === "ArrowDown" && activeIndex < content.steps.length - 1) {
        scrollStep(activeIndex + 1)
      } else if (e.key === "ArrowUp" && activeIndex > 0) {
        scrollStep(activeIndex - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [activeIndex, content.steps.length])

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
    <div className="services-crousel-scroll-section" ref={sectionRef}>
      {/* Left side - Text */}
      <div className="services-crousel-content-side">
        <h2 className="services-crousel-main-heading">{content.mainHeading}</h2>

        <div className="services-crousel-steps-container">
          {/* Numbers */}
          <div className="services-crousel-step-numbers">
            {content.steps.map((step, index) => (
              <div
                key={index}
                className={`services-crousel-step-number ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleStepClick(index)}
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
                animate={{ opacity: 1, y: 0 }}
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
      <div className="services-crousel-image-side">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="services-crousel-image-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
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
    </div>
  )
}

export default ServicesScrollSection
