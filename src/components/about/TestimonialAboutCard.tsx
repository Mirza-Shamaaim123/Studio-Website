import type React from "react"
import './testomonial.css';
import { useState, useRef, useEffect } from "react"

interface Testimonial {
  name: string
  title: string
  content: string
  url: string
}

export default function TestimonialCard() {
  const testimonials: Testimonial[] = [
    {
      name: "Dennis Chew",
      title: "Director of Perth studio at DKO Architecture",
      content:
        "DKO are a fan of your work as there is a lot more than architecture and painting a picture, it is the essence of life, the emotion and the vibe that is as important to capture. We believe the CUUB team do a great job doing so.",
      url: "https://images.prismic.io/cuub/0a1a1266-c1ec-456f-b04a-c78ec55b7568_DKO.png",
    },
    {
      name: "Jane Smith",
      title: "Creative Director at Design Studio",
      content:
        "Working with this team has transformed our approach to design. Their attention to detail and innovative thinking has elevated our projects to new heights.",
      url: "https://images.prismic.io/cuub/2c256774-0875-49c4-96e2-9d22af9e5466_CS.png",
    },
    {
      name: "Michael Johnson",
      title: "Principal Architect at MJ Associates",
      content:
        "The collaborative process was seamless and the results exceeded our expectations. Their ability to translate concepts into reality is unmatched in the industry.",
      url: "https://images.prismic.io/cuub/0a1a1266-c1ec-456f-b04a-c78ec55b7568_DKO.png",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  const dragThreshold = 50 // Minimum drag distance in px to change slide

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true)
    setStartX(e.pageX)
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return
    const endX = e.pageX
    handleSlideDrag(endX - startX)
    setIsDragging(false)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true)
    setStartX(e.touches[0].clientX)
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isDragging) return
    const endX = e.changedTouches[0].clientX
    handleSlideDrag(endX - startX)
    setIsDragging(false)
  }

  const handleSlideDrag = (distance: number) => {
    if (Math.abs(distance) < dragThreshold) return

    if (distance < 0 && currentIndex < testimonials.length - 1) {
      // Swiped left
      setCurrentIndex((prev) => prev + 1)
    } else if (distance > 0 && currentIndex > 0) {
      // Swiped right
      setCurrentIndex((prev) => prev - 1)
    }
  }

  useEffect(() => {
    document.body.style.cursor = isDragging ? "grabbing" : ""
    return () => {
      document.body.style.cursor = ""
    }
  }, [isDragging])

  const hasNext = currentIndex < testimonials.length - 1
  const hasPrev = currentIndex > 0

  return (
    <div className="testimonial-container">
      <div
        className="testimonial-about-crousel"
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Edge indicators */}
        {hasPrev && <div className="edge-indicator edge-indicator-left" />}
        {hasNext && <div className="edge-indicator edge-indicator-right" />}

        <div className="testimonial-about-crousel-logo">
          <div className="testimonial-about-crousel-label">
            <img src={testimonials[currentIndex].url || "/placeholder.svg"} alt={testimonials[currentIndex].name} />
          </div>
        </div>

        <div className="testimonial-about-crousel-content">
          <h3 className="testimonial-about-crousel-name">{testimonials[currentIndex].name}</h3>
          <h4 className="testimonial-about-crousel-title">{testimonials[currentIndex].title}</h4>
          <p className="testimonial-about-crousel-text">{testimonials[currentIndex].content}</p>
        </div>

        <div className="testimonial-about-crousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`testimonial-about-crousel-dot ${index === currentIndex ? "active" : ""}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
