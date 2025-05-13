"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const MainBoxAnimation = () => {
  const { scrollY } = useScroll()
  const section2Ref = useRef<HTMLDivElement>(null)
  const sectionlastRef = useRef<HTMLDivElement>(null)

  const [section2Bounds, setSection2Bounds] = useState({ top: 0, bottom: 0 })
  const [sectionlastBounds, setSectionlastBounds] = useState({ top: 0, bottom: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const [boxSize, setBoxSize] = useState(300) // Default size
  const [randomSeed, setRandomSeed] = useState({ x: 0.5, y: 0.7, z: 0.3 })
  const [isMobile, setIsMobile] = useState(false)

  // Text content for the animations
  const headingTexts = ["Concept", "Visuals", "Vision", "Animation", "Mood"]

  // Function to update bounds
  const updateBounds = (ref: React.RefObject<HTMLDivElement>, setBounds: Function) => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect()
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      setBounds({
        top: rect.top + scrollTop,
        bottom: rect.bottom + scrollTop,
      })
    }
  }

  // Update box size based on screen width
  useEffect(() => {
    const updateBoxSize = () => {
      const width = window.innerWidth
      setIsMobile(width < 768) // Set mobile state

      if (width < 480) {
        // Small mobile
        setBoxSize(150)
      } else if (width < 640) {
        // Mobile
        setBoxSize(180)
      } else if (width < 768) {
        // Small tablet
        setBoxSize(220)
      } else if (width < 1024) {
        // Tablet
        setBoxSize(240)
      } else if (width < 1280) {
        // Small desktop
        setBoxSize(280)
      } else {
        // Desktop
        setBoxSize(300)
      }
    }

    // Initial updates
    updateBoxSize()
    updateBounds(section2Ref, setSection2Bounds)
    updateBounds(sectionlastRef, setSectionlastBounds)

    // Add resize listener
    const handleResize = () => {
      updateBoxSize()
      updateBounds(section2Ref, setSection2Bounds)
      updateBounds(sectionlastRef, setSectionlastBounds)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Generate new random rotation values at intervals during scroll
  useEffect(() => {
    // Change random seed every 10% of scroll progress
    const progressThreshold = Math.floor(scrollProgress * 10)

    if (progressThreshold % 2 === 0 && progressThreshold > 0) {
      setRandomSeed({
        x: Math.random() * 2 - 1, // -1 to 1
        y: Math.random() * 2 - 1, // -1 to 1
        z: Math.random() * 2 - 1, // -1 to 1
      })
    }
  }, [scrollProgress])

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop

      // Always calculate progress when in or near the section
      // This ensures animation works when scrolling back up
      if (currentScroll >= section2Bounds.top - 100 && currentScroll <= section2Bounds.bottom + 100) {
        const sectionHeight = section2Bounds.bottom - section2Bounds.top
        const progress = Math.min(Math.max((currentScroll - section2Bounds.top) / sectionHeight, 0), 1)
        setScrollProgress(progress)
      } else if (currentScroll >= sectionlastBounds.top - 100 && currentScroll <= sectionlastBounds.bottom + 100) {
        const sectionHeight = sectionlastBounds.bottom - sectionlastBounds.top
        const progress = Math.min(Math.max((currentScroll - sectionlastBounds.top) / sectionHeight, 0), 1)
        setScrollProgress(progress)
      }

      // Reset animation when completely out of view
      if (currentScroll < section2Bounds.top - 200 && currentScroll < sectionlastBounds.top - 200) {
        setScrollProgress(0)
        // Reset random seed to ensure animation is fresh when scrolling back
        setRandomSeed({ x: 0.5, y: 0.7, z: 0.3 })
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [section2Bounds, sectionlastBounds])

  // Always visible
  const box1Visibility = 1

  // Random rotation based on scroll progress and random seed
  const boxRotationX = useTransform(() => scrollProgress * 360 * randomSeed.x)
  const boxRotationY = useTransform(() => scrollProgress * 180 * randomSeed.y)
  const boxRotationZ = useTransform(() => scrollProgress * 90 * randomSeed.z)

  const smoothRotationX = useSpring(boxRotationX, { stiffness: 100, damping: 30 })
  const smoothRotationY = useSpring(boxRotationY, { stiffness: 100, damping: 30 })
  const smoothRotationZ = useSpring(boxRotationZ, { stiffness: 100, damping: 30 })

  // Get responsive values based on screen size
  const getResponsiveOffset = () => {
    const width = window.innerWidth
    if (width < 480) return 100 // Small mobile
    if (width < 640) return 150 // Mobile
    if (width < 768) return 200 // Small tablet
    if (width < 1024) return 250 // Tablet
    if (width < 1280) return 300 // Small desktop
    return 400 // Desktop
  }

  // Get scale values based on device size
  const getScaleValues = () => {
    if (isMobile) {
      // Further reduced scale for mobile
      return {
        small: 0.6,
        large: 1.0, // Reduced from 1.2 to 1.0
        medium: 0.8,
        final: 0.5,
      }
    } else {
      // Original scale for desktop
      return {
        small: 0.5,
        large: 1.8, // Reduced from 2.0 to 1.8
        medium: 0.8,
        final: 0.5,
      }
    }
  }

  const scaleValues = getScaleValues()

  // Text 1: Appears center, moves to top-left
  const text1Opacity = useTransform(scrollY, [1100, 1400, 1700, 2000], [0, 1, 1, 1])
  const text1Scale = useTransform(
    scrollY,
    [1100, 1400, 1700, 2000],
    [scaleValues.small, scaleValues.large, scaleValues.medium, scaleValues.final],
  )
  const text1X = useTransform(
    scrollY,
    [1100, 1400, 1700, 2000],
    [0, 0, -getResponsiveOffset() * 0.75, -getResponsiveOffset()],
  )
  const text1Y = useTransform(
    scrollY,
    [1100, 1400, 1700, 2000],
    [0, 0, -getResponsiveOffset() * 0.5, -getResponsiveOffset() * 0.6],
  )

  // Text 2: Appears center, moves to top-right
  const text2Opacity = useTransform(scrollY, [2000, 2300, 2600, 2900], [0, 1, 1, 1])
  const text2Scale = useTransform(
    scrollY,
    [2000, 2300, 2600, 2900],
    [scaleValues.small, scaleValues.large, scaleValues.medium, scaleValues.final],
  )
  const text2X = useTransform(
    scrollY,
    [2000, 2300, 2600, 2900],
    [0, 0, getResponsiveOffset() * 0.75, getResponsiveOffset()],
  )
  const text2Y = useTransform(
    scrollY,
    [2000, 2300, 2600, 2900],
    [0, 0, -getResponsiveOffset() * 0.5, -getResponsiveOffset() * 0.6],
  )

  // Text 3: Appears center, moves to bottom-left
  const text3Opacity = useTransform(scrollY, [2900, 3200, 3500, 3800], [0, 1, 1, 1])
  const text3Scale = useTransform(
    scrollY,
    [2900, 3200, 3500, 3800],
    [scaleValues.small, scaleValues.large, scaleValues.medium, scaleValues.final],
  )
  const text3X = useTransform(
    scrollY,
    [2900, 3200, 3500, 3800],
    [0, 0, -getResponsiveOffset() * 0.75, -getResponsiveOffset()],
  )
  const text3Y = useTransform(
    scrollY,
    [2900, 3200, 3500, 3800],
    [0, 0, getResponsiveOffset() * 0.5, getResponsiveOffset() * 0.6],
  )

  // Text 4: Appears center, moves to bottom-right
  const text4Opacity = useTransform(scrollY, [3800, 4100, 4400, 4700], [0, 1, 1, 1])
  const text4Scale = useTransform(
    scrollY,
    [3800, 4100, 4400, 4700],
    [scaleValues.small, scaleValues.large, scaleValues.medium, scaleValues.final],
  )
  const text4X = useTransform(
    scrollY,
    [3800, 4100, 4400, 4700],
    [0, 0, getResponsiveOffset() * 0.75, getResponsiveOffset()],
  )
  const text4Y = useTransform(
    scrollY,
    [3800, 4100, 4400, 4700],
    [0, 0, getResponsiveOffset() * 0.5, getResponsiveOffset() * 0.6],
  )

  // Text 5: Appears center, stays center but smaller
  const text5Opacity = useTransform(scrollY, [4700, 5000, 5300, 5600], [0, 1, 1, 1])
  const text5Scale = useTransform(
    scrollY,
    [4700, 5000, 5300, 5600],
    [scaleValues.small, scaleValues.large, isMobile ? 1.1 : 1.5, 0.7],
  )

  // Calculate container size based on box size
  const containerSize = Math.max(boxSize * 3, 300)

  useEffect(() => {
    // Function to update all bounds
    const updateAllBounds = () => {
      updateBounds(section2Ref, setSection2Bounds)
      updateBounds(sectionlastRef, setSectionlastBounds)
    }

    // Initial update
    updateAllBounds()

    // Update after a short delay to ensure all elements are properly rendered
    const timer = setTimeout(updateAllBounds, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      ref={section2Ref}
      className="section2 w-full pt-16 sm:pt-24 md:pt-32 h-screen flex justify-center items-center text-white"
    >
      <div className="relative w-full h-full flex justify-center items-start">
        <motion.div
          className="relative flex items-center justify-center"
          style={{
            width: `${containerSize}px`,
            height: `${containerSize}px`,
            maxWidth: "95vw",
            maxHeight: "80vh",
            position: "sticky",
            top: "10%",
            opacity: box1Visibility,
          }}
        >
          {/* 3D Box */}
          <motion.div
            className="relative"
            style={{
              width: `${boxSize}px`,
              height: `${boxSize}px`,
              transformStyle: "preserve-3d",
              rotateX: smoothRotationX,
              rotateY: smoothRotationY,
              rotateZ: smoothRotationZ,
            }}
          >
            {/* Front face */}
            <motion.div
              className="absolute border-0 border-white/10"
              style={{
                width: `${boxSize}px`,
                height: `${boxSize}px`,
                background: "#ff4438",
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
                transform: `translateZ(${boxSize / 2}px)`,
                boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
              }}
            />

            {/* Back face */}
            <motion.div
              className="absolute border-0 border-white/10"
              style={{
                width: `${boxSize}px`,
                height: `${boxSize}px`,
                background: "#ff4438",
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
                transform: `translateZ(-${boxSize / 2}px) rotateY(180deg)`,
                boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
              }}
            />

            {/* Right face */}
            <motion.div
              className="absolute border-0 border-white/10"
              style={{
                width: `${boxSize}px`,
                height: `${boxSize}px`,
                background: "#ff4438",
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
                transform: `translateX(${boxSize / 2}px) rotateY(90deg)`,
                boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
              }}
            />

            {/* Left face */}
            <motion.div
              className="absolute border-0 border-white/10"
              style={{
                width: `${boxSize}px`,
                height: `${boxSize}px`,
                background: "#ff4438",
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
                transform: `translateX(-${boxSize / 2}px) rotateY(-90deg)`,
                boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
              }}
            />

            {/* Top face */}
            <motion.div
              className="absolute border-0 border-white/10"
              style={{
                width: `${boxSize}px`,
                height: `${boxSize}px`,
                background: "#ff4438",
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
                transform: `translateY(-${boxSize / 2}px) rotateX(90deg)`,
                boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
              }}
            />

            {/* Bottom face */}
            <motion.div
              className="absolute border-0 border-white/10"
              style={{
                width: `${boxSize}px`,
                height: `${boxSize}px`,
                background: "#ff4438",
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
                transform: `translateY(${boxSize / 2}px) rotateX(-90deg)`,
                boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
              }}
            />
          </motion.div>

          {/* Text Overlays positioned on top of the box */}
          <div
            style={{ borderRadius: "30px" }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
          >
            {/* Text 1: Concept - Top Left */}
            <motion.div
              className="absolute text-center"
              style={{
                opacity: text1Opacity,
                scale: text1Scale,
                x: text1X,
                y: text1Y,
                color: "white",
                mixBlendMode: "difference",
                textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                zIndex: 20,
              }}
            >
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">{headingTexts[0]}</h1>
            </motion.div>

            {/* Text 2: Visuals - Top Right */}
            <motion.div
              className="absolute text-center"
              style={{
                opacity: text2Opacity,
                scale: text2Scale,
                x: text2X,
                y: text2Y,
                color: "white",
                mixBlendMode: "difference",
                textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                zIndex: 20,
              }}
            >
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">{headingTexts[1]}</h1>
            </motion.div>

            {/* Text 3: Vision - Bottom Left */}
            <motion.div
              className="absolute text-center"
              style={{
                opacity: text3Opacity,
                scale: text3Scale,
                x: text3X,
                y: text3Y,
                color: "white",
                mixBlendMode: "difference",
                textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                zIndex: 20,
              }}
            >
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">{headingTexts[2]}</h1>
            </motion.div>

            {/* Text 4: Animation - Bottom Right */}
            <motion.div
              className="absolute text-center"
              style={{
                opacity: text4Opacity,
                scale: text4Scale,
                x: text4X,
                y: text4Y,
                color: "white",
                mixBlendMode: "difference",
                textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                zIndex: 20,
              }}
            >
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">{headingTexts[3]}</h1>
            </motion.div>

            {/* Text 5: Mood - Center */}
            <motion.div
              className="absolute text-center"
              style={{
                opacity: text5Opacity,
                scale: text5Scale,
                color: "white",
                mixBlendMode: "difference",
                textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                zIndex: 20,
              }}
            >
              <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">{headingTexts[4]}</h1>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default MainBoxAnimation
