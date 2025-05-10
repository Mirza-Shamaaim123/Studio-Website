
import { useRef, useEffect, useState, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface Section {
  id: string
  experienceLink: string
  renderingLink: string
  image: string
}

interface ServicesAnimationProps {
  sections?: Section[]
  duration?: number
  showIndicators?: boolean
}

export default function ServicesAnimation({
  sections = [
    {
      id: "section1",
      experienceLink: "#experience1",
      renderingLink: "#rendering1",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070",
    },
    {
      id: "section2",
      experienceLink: "#experience2",
      renderingLink: "#rendering2",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2070",
    },
    {
      id: "section3",
      experienceLink: "#experience3",
      renderingLink: "#rendering3",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073",
    },
  ],
  duration = 0.8,
  showIndicators = true,
}: ServicesAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeSection, setActiveSection] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [touchStartY, setTouchStartY] = useState(0)
  const [touchStartX, setTouchStartX] = useState(0)
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(null)
  const lastScrollTime = useRef(Date.now())
  const scrollTimeThreshold = 1200 // ms to wait before allowing another scroll

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  // Disable body scroll when component mounts
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = "hidden"

    // Re-enable body scroll when component unmounts
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [])

  // Handle section change with controlled timing
  const changeSection = useCallback(
    (newSection: number) => {
      if (isTransitioning || newSection === activeSection) return false

      const now = Date.now()
      if (now - lastScrollTime.current < scrollTimeThreshold) return false

      lastScrollTime.current = now
      setIsTransitioning(true)
      setActiveSection(newSection)

      // Reset transition state after animation completes
      setTimeout(
        () => {
          setIsTransitioning(false)
        },
        duration * 1000 + 100,
      )

      return true
    },
    [activeSection, isTransitioning, duration],
  )

  // Handle wheel events with improved control
  const handleWheel = useCallback(
    (e: WheelEvent) => {
      e.preventDefault()

      // Determine scroll direction with threshold to avoid accidental scrolls
      if (Math.abs(e.deltaY) < 10) return

      const direction = e.deltaY > 0 ? "down" : "up"
      setScrollDirection(direction)

      if (direction === "down" && activeSection < sections.length - 1) {
        changeSection(activeSection + 1)
      } else if (direction === "up" && activeSection > 0) {
        changeSection(activeSection - 1)
      }
    },
    [activeSection, sections.length, changeSection],
  )

  // Set up wheel event listener
  useEffect(() => {
    const container = containerRef.current
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false })
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel)
      }
    }
  }, [handleWheel])

  // Handle touch events for mobile with improved control
  const handleTouchStart = useCallback((e: TouchEvent) => {
    setTouchStartY(e.touches[0].clientY)
    setTouchStartX(e.touches[0].clientX)
  }, [])

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      e.preventDefault()

      if (isTransitioning) return

      const touchEndY = e.touches[0].clientY
      const touchEndX = e.touches[0].clientX
      const diffY = touchStartY - touchEndY
      const diffX = touchStartX - touchEndX

      // Only respond to vertical swipes (ignore horizontal)
      if (Math.abs(diffX) > Math.abs(diffY)) return

      // Require a minimum swipe distance to trigger section change
      if (Math.abs(diffY) < 50) return

      const direction = diffY > 0 ? "down" : "up"
      setScrollDirection(direction)

      if (direction === "down" && activeSection < sections.length - 1) {
        changeSection(activeSection + 1)
      } else if (direction === "up" && activeSection > 0) {
        changeSection(activeSection - 1)
      }
    },
    [activeSection, isTransitioning, sections.length, touchStartY, touchStartX, changeSection],
  )

  // Set up touch event listeners
  useEffect(() => {
    const container = containerRef.current
    if (container && isMobile) {
      container.addEventListener("touchstart", handleTouchStart, { passive: true })
      container.addEventListener("touchmove", handleTouchMove, { passive: false })
    }

    return () => {
      if (container && isMobile) {
        container.removeEventListener("touchstart", handleTouchStart)
        container.removeEventListener("touchmove", handleTouchMove)
      }
    }
  }, [isMobile, handleTouchStart, handleTouchMove])

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown" && activeSection < sections.length - 1) {
        setScrollDirection("down")
        changeSection(activeSection + 1)
      } else if (e.key === "ArrowUp" && activeSection > 0) {
        setScrollDirection("up")
        changeSection(activeSection - 1)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [activeSection, sections.length, changeSection])

  // Handle navigation dot clicks
  const handleDotClick = (index: number) => {
    if (index > activeSection) {
      setScrollDirection("down")
    } else if (index < activeSection) {
      setScrollDirection("up")
    }
    changeSection(index)
  }

  return (
    <div
      ref={containerRef}
      className="services-animation-container"
      style={{
        height: "100vh",
        width: "100%",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {sections.map((section, index) => {
        const isActive = index === activeSection

        // Determine the initial and exit positions based on scroll direction
        let initialY = 0
        let exitY = 0

        if (scrollDirection === "down") {
          initialY = "100%"
          exitY = "-100%"
        } else if (scrollDirection === "up") {
          initialY = "-100%"
          exitY = "100%"
        }

        return (
          <motion.div
            key={section.id}
            className="services-animation-section"
            initial={{ y: initialY, opacity: 0 }}
            animate={{
              y: isActive ? 0 : exitY,
              opacity: isActive ? 1 : 0,
              zIndex: isActive ? 10 : 0,
            }}
            exit={{ y: exitY, opacity: 0 }}
            transition={{
              type: "tween", // Use tween for more precise control
              duration: duration,
              ease: [0.33, 1, 0.68, 1], // Custom easing for smoother stops
            }}
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              pointerEvents: isActive ? "auto" : "none",
            }}
          >
            {/* Image container */}
            <div
              className="services-animation-image-container"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <motion.img
                src={section.image}
                alt={`Section ${index + 1}`}
                className="services-animation-image"
                initial={{ scale: 1.1 }}
                animate={{
                  scale: isActive ? 1 : 1.1,
                }}
                transition={{
                  duration: duration * 1.5,
                  ease: "easeOut",
                }}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                }}
              />

              {/* Overlay for better text visibility */}
              <div
                className="services-animation-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.3)",
                }}
              />
            </div>

            {/* Text content */}
            <div
              className="services-animation-content"
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: "0 5%",
              }}
            >
              {/* Left side text - Seeing is Experiencing */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{
                  x: isActive ? 0 : -50,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  duration: duration,
                  delay: isActive ? duration * 0.3 : 0,
                  ease: "easeOut",
                }}
                style={{
                  position: "absolute",
                  left: "5%",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <a
                  href={section.experienceLink}
                  className="services-animation-text-container"
                  style={{
                    display: "inline-block",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "24px",
                    maxWidth: "400px",
                    textDecoration: "none",
                  }}
                >
                  <h2
                    className="services-animation-title"
                    style={{
                      color: "white",
                      fontSize: isMobile ? "28px" : "42px",
                      fontWeight: 700,
                      margin: 0,
                      lineHeight: 1.2,
                    }}
                  >
                    Seeing is Experiencing
                  </h2>
                </a>
              </motion.div>

              {/* Right side text - Exterior Rendering */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{
                  x: isActive ? 0 : 50,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  duration: duration,
                  delay: isActive ? duration * 0.4 : 0,
                  ease: "easeOut",
                }}
                style={{
                  position: "absolute",
                  right: "5%",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <a
                  href={section.renderingLink}
                  className="services-animation-text-container"
                  style={{
                    display: "inline-block",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    padding: "24px",
                    maxWidth: "400px",
                    textDecoration: "none",
                  }}
                >
                  <h2
                    className="services-animation-title"
                    style={{
                      color: "white",
                      fontSize: isMobile ? "28px" : "42px",
                      fontWeight: 700,
                      margin: 0,
                      lineHeight: 1.2,
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    Exterior Rendering
                    <motion.span
                      initial={{ x: -5 }}
                      animate={{ x: 0 }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "reverse",
                        duration: 0.8,
                      }}
                      style={{ marginLeft: "8px", display: "inline-block" }}
                    >
                      ↗
                    </motion.span>
                  </h2>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )
      })}

      {/* Scroll indicator */}
      <AnimatePresence>
        {activeSection < sections.length - 1 && !isTransitioning && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="services-animation-scroll-indicator"
            style={{
              position: "absolute",
              bottom: "30px",
              left: "50%",
              transform: "translateX(-50%)",
              color: "white",
              textAlign: "center",
              zIndex: 20,
            }}
          >
            <p style={{ margin: "0 0 8px 0", fontSize: "14px" }}>Scroll Down</p>
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Navigation dots */}
      {showIndicators && (
        <div
          className="services-animation-indicators"
          style={{
            position: "absolute",
            right: "30px",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            zIndex: 30,
          }}
        >
          {sections.map((_, index) => (
            <motion.div
              key={`dot-${index}`}
              className="services-animation-indicator"
              onClick={() => handleDotClick(index)}
              initial={false}
              animate={{
                scale: activeSection === index ? 1.2 : 1,
                backgroundColor: activeSection === index ? "rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.5)",
              }}
              whileHover={{ scale: 1.2 }}
              style={{
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
