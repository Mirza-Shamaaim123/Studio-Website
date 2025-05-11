"use client"

import { useEffect, useRef } from "react"

const ServicesLineComponent = () => {
  const lineRef = useRef<HTMLDivElement | null>(null)
  const textRef = useRef<HTMLDivElement | null>(null)
  const animationRef = useRef<number | null>(null)
  const word = "SCROLL"

  const animationDuration = 2000 // ms
  const delayAfterFinish = 3000 // ms before restarting

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

  const resetElements = () => {
    const lineEl = lineRef.current
    const textEl = textRef.current
    if (!lineEl || !textEl) return

    lineEl.style.transition = "none"
    lineEl.style.transform = `translate(-50%, 0%)`
    lineEl.style.opacity = "0.4"

    textEl.style.animation = "none"
    textEl.style.opacity = "0"
  }

  const startAnimation = () => {
    const lineEl = lineRef.current
    const textEl = textRef.current
    if (!lineEl || !textEl) return

    let startTime: number | null = null
    let textShown = false

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const elapsed = timestamp - startTime
      const rawProgress = Math.min(elapsed / animationDuration, 1)
      const easedProgress = easeInOutCubic(rawProgress)
      const translateY = -easedProgress * 100

      lineEl.style.transform = `translate(-50%, ${translateY}%)`

      // Fade out when almost at end
      if (easedProgress > 0.95) {
        lineEl.style.opacity = "0"
      }

      // Show text near end
      if (easedProgress >= 0.8 && !textShown) {
        textEl.style.animation = `appearAndSpace 0.8s ease-in-out forwards`
        textShown = true
      }

      if (rawProgress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      } else {
        // End of animation, wait before restarting
        setTimeout(() => {
          resetElements()
          requestAnimationFrame(startAnimation)
        }, delayAfterFinish)
      }
    }

    animationRef.current = requestAnimationFrame(animate)
  }

  useEffect(() => {
    startAnimation()
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [])

  return (
    <>
      <style>{`
        @keyframes appearAndSpace {
          0% {
            opacity: 0;
            letter-spacing: normal;
            color: white;
          }
          30% {
            opacity: 0.7;
            letter-spacing: 2px;
          }
          70% {
            letter-spacing: 15px;
            opacity: 0.7;
          }
          100% {
            letter-spacing: 20px;
            opacity: 0;
            color: transparent;
          }
        }

        .line-glow {
          box-shadow: 0 0 6px rgba(255, 255, 255, 0.4);
        }
      `}</style>

      <div
        ref={lineRef}
        className="fixed z-[999] line-glow"
        style={{
          width: "1px",
          height: "75vh",
          background: "white",
          top: "100%",
          left: "50%",
          transform: "translate(-50%, 0%)",
          opacity: 0.4,
          willChange: "transform, opacity",
          transition: "opacity 0.3s ease",
        }}
      />

      <div
        ref={textRef}
        className="fixed z-[999] font-bold tracking-wider"
        style={{
          fontSize: "16px",
          top: "10%",
          left: "50%",
          transform: "translateX(-50%)",
          color: "transparent",
          opacity: 0,
          willChange: "opacity, letter-spacing",
          textShadow: "0 0 5px rgba(255, 255, 255, 0.4)",
        }}
      >
        {word}
      </div>
    </>
  )
}

export default ServicesLineComponent
