

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"

const ServicesBoxSection = () => {
  const { scrollY } = useScroll()
  const [fade, setFade] = useState(false)

  const section2Ref = useRef<HTMLDivElement>(null)
  const sectionlastRef = useRef<HTMLDivElement>(null)
  const section3Ref = useRef<HTMLDivElement>(null)

  const [section2Bounds, setSection2Bounds] = useState({ top: 0, bottom: 0 })
  const [sectionlastBounds, setSectionlastBounds] = useState({
    top: 0,
    bottom: 0,
  })
  const [section3Bounds, setSection3Bounds] = useState({ top: 0, bottom: 0 })
  const [scrollProgress, setScrollProgress] = useState(0)
  const [boxSize, setBoxSize] = useState(300)
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

  const headingTexts = [
    "Concept",
    "Mood",
    "Vision",
    "Animation",
    "Visuals",
    "Storyboard",
    "Production",
    "Post",
    "Graphics",
    "Ready to Start?  ",
  ]

  // Update window width on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)

      // Adjust box size based on screen width
      if (window.innerWidth < 640) {
        // mobile
        setBoxSize(150)
      } else if (window.innerWidth < 1024) {
        // tablet
        setBoxSize(200)
      } else {
        // desktop
        setBoxSize(300)
      }
    }

    handleResize() // Set initial size
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Update section bounds on resize and initial load
  useEffect(() => {
    const updateBounds = () => {
      if (section2Ref.current) {
        const rect = section2Ref.current.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        setSection2Bounds({
          top: rect.top + scrollTop,
          bottom: rect.bottom + scrollTop,
        })
      }

      if (section3Ref.current) {
        const rect = section3Ref.current.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        setSection3Bounds({
          top: rect.top + scrollTop,
          bottom: rect.bottom + scrollTop,
        })
      }
    }

    updateBounds()
    window.addEventListener("resize", updateBounds)
    return () => window.removeEventListener("resize", updateBounds)
  }, [])

  useEffect(() => {
    const updateBounds = () => {
      if (sectionlastRef.current) {
        const rect = sectionlastRef.current.getBoundingClientRect()
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        setSectionlastBounds({
          top: rect.top + scrollTop,
          bottom: rect.bottom + scrollTop,
        })
      }
    }

    updateBounds()
    window.addEventListener("resize", updateBounds)
    return () => window.removeEventListener("resize", updateBounds)
  }, [])

  // Track scroll progress within section 2
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop

      if (currentScroll >= section2Bounds.top && currentScroll <= section2Bounds.bottom) {
        // Calculate progress through section 2 (0 to 1)
        const sectionHeight = section2Bounds.bottom - section2Bounds.top
        const scrollPositionInSection = currentScroll - section2Bounds.top
        const progress = Math.min(Math.max(scrollPositionInSection / sectionHeight, 0), 1)
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [section2Bounds])

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop

      if (currentScroll >= sectionlastBounds.top && currentScroll <= sectionlastBounds.bottom) {
        // Calculate progress through section 2 (0 to 1)
        const sectionHeight = sectionlastBounds.bottom - sectionlastBounds.top
        const scrollPositionInSection = currentScroll - sectionlastBounds.top
        const progress = Math.min(Math.max(scrollPositionInSection / sectionHeight, 0), 1)
        setScrollProgress(progress)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [sectionlastBounds])

  // Box entrance animation
  const boxEntranceY = useTransform(scrollY, [section2Bounds.top - 300, section2Bounds.top - 200], [0, 0])

  const boxEntranceOpacity = useTransform(scrollY, [section2Bounds.top - 300, section2Bounds.top], [0, 1])

  const box1Visibility = useTransform(scrollY, (value) => {
    if (value >= 200) {
      return 1
    } else {
      return 0 // No longer visible
    }
  })

  // Box rotation transforms based on section 2 progress
  const boxRotationX = useTransform(() => scrollProgress * 720)
  const boxRotationY = useTransform(() => scrollProgress * 360)
  const boxRotationZ = useTransform(() => scrollProgress * 180)

  // Smooth the rotations
  const smoothRotationX = useSpring(boxRotationX, {
    stiffness: 100,
    damping: 30,
  })

  const smoothRotationY = useSpring(boxRotationY, {
    stiffness: 100,
    damping: 30,
  })

  const smoothRotationZ = useSpring(boxRotationZ, {
    stiffness: 100,
    damping: 30,
  })

  // Calculate half box size for 3D transformations
  const halfBoxSize = boxSize / 2

  return (
    <section
      ref={sectionlastRef}
      style={{
        borderRadius: "30px 30px 0px 0px",
      }}
      className="section6 drop-us-line w-full pt-32 z-[350] h-screen flex justify-center text-white"
    >
      <div className="relative w-full h-full flex justify-center items-start">
        {/* Container that holds both the box and text, making them stick together */}
        <motion.div
          className="relative w-full max-w-[800px] h-[800px] flex items-center justify-center px-4"
          style={{
            position: "sticky",
            top: "0%",
            opacity: box1Visibility,
          }}
        >
          {/* 3D Box */}
          <motion.div
            className="relative"
            style={{
              width: boxSize,
              height: boxSize,
              transformStyle: "preserve-3d",
              rotateX: smoothRotationX,
              rotateY: smoothRotationY,
              rotateZ: smoothRotationZ,
              y: boxEntranceY,
            }}
          >
            {/* Front face */}
            <motion.div
              className="absolute border-0 border-white/10"
              style={{
                width: boxSize,
                height: boxSize,
                background: "#000000 ",
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
                transform: `translateZ(${halfBoxSize}px)`,
                boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
              }}
            />

            {/* Back face */}
            <motion.div
              className="absolute border-0 border-white/10"
              style={{
                width: boxSize,
                height: boxSize,
                background: "#000000 ",
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
                transform: `translateZ(-${halfBoxSize}px) rotateY(180deg)`,
                boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
              }}
            />

            {/* Right face */}
            <motion.div
              className="absolute border-0 border-white/10"
              style={{
                width: boxSize,
                height: boxSize,
                background: "#000000 ",
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
                transform: `translateX(${halfBoxSize}px) rotateY(90deg)`,
                boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
              }}
            />

            {/* Left face */}
            <motion.div
              className="absolute border-0 border-white/10"
              style={{
                width: boxSize,
                height: boxSize,
                background: "#000000 ",
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
                transform: `translateX(-${halfBoxSize}px) rotateY(-90deg)`,
                boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
              }}
            />

            {/* Top face */}
            <motion.div
              className="absolute border-0 border-white/10"
              style={{
                width: boxSize,
                height: boxSize,
                background: "#000000 ",
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
                transform: `translateY(-${halfBoxSize}px) rotateX(90deg)`,
                boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
              }}
            />

            {/* Bottom face */}
            <motion.div
              className="absolute border-0 border-white/10"
              style={{
                width: boxSize,
                height: boxSize,
                background: "#000000",
                transformStyle: "preserve-3d",
                backfaceVisibility: "visible",
                transform: `translateY(${halfBoxSize}px) rotateX(-90deg)`,
                boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
              }}
            />
          </motion.div>

          {/* Text Overlays positioned on top of the box */}
          <div style={{ borderRadius: "30px" }} className="absolute inset-0 flex items-center justify-center z-10">
            <motion.div
              className="absolute text-center px-4"
              style={{
                opacity: 1,
                scale: windowWidth < 640 ? 1 : windowWidth < 1024 ? 1.5 : 2,
                color: "white",
                mixBlendMode: "difference",
                textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                zIndex: 20,
              }}
            >
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-full sm:max-w-[600px] md:max-w-[700px] lg:max-w-[800px] ready-text">
                {headingTexts[9]}
                <a href="/contact" className="hover:border-b-[4px]  cursor-pointer">
                    Drop Us a Line
                </a>
              </h1>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesBoxSection
