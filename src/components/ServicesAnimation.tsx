import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import "../pages/services.css";
import { ArrowUpRight } from "lucide-react";
interface Section {
  id: string;
  experienceLink: string;
  renderingLink: string;
  image: string;
  title: string;
}

interface ServicesAnimationProps {
  sections?: Section[];
}

export default function ServicesAnimation({
  sections = [
    {
      id: "service-video-production-1",
      experienceLink: "#experience1",
      renderingLink: "/services/video-productions/",
      image:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070",
      title: "Video Production",
    },
    {
      id: "service-animation-2",
      experienceLink: "#experience2",
      renderingLink: "/services/animation/",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070",
      title: "Animation",
    },
    {
      id: "service-branding-3",
      experienceLink: "/services/branding/",
      renderingLink: "#branding",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2069",
      title: "Branding",
    },
    {
      id: "service-audio-4",
      experienceLink: "/services/audio-production/",
      renderingLink: "#audio-services",
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070",
      title: "Audio Services",
    },
    {
      id: "service-timelapse-5",
      experienceLink: "/services/time-lapse-video/",
      renderingLink: "#time-lapse",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2073",
      title: "Time Lapse Video",
    },
    {
      id: "service-image-6",
      experienceLink: "/services/image-creation/",
      renderingLink: "#image-creation",
      image:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070",
      title: "Image Creation",
    },
  ],
}: ServicesAnimationProps) {
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="services-animation-container"
      style={{
        position: "relative",
        width: "100%",
        zIndex: "9999999",
      }}
    >
      {sections.map((section, index) => (
        <SectionComponent
          key={section.id}
          section={section}
          index={index}
          isMobile={isMobile}
          totalSections={sections.length}
        />
      ))}
    </div>
  );
}

interface SectionComponentProps {
  section: Section;
  index: number;
  isMobile: boolean;
  totalSections: number;
}

function SectionComponent({
  section,
  index,
  isMobile,
  totalSections,
}: SectionComponentProps) {
  const [hovered, setHovered] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  // Use Framer Motion's useScroll hook to track scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Create spring animations for smoother scrolling effects
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Transform scroll progress into animation values
  // Scale effect: starts larger, becomes normal in view, then shrinks when scrolling away
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1.2, 1, 0.8]);

  // Opacity effect: fades in when entering, full opacity in view, fades out when leaving
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // Width effect: starts wider, becomes normal in view, then narrows when scrolling away
  const width = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["110%", "100%", "90%"]
  );

  // Height effect: similar to width for consistent scaling
  const height = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    ["110%", "100%", "90%"]
  );

  // Text animations
  const leftX = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    [-100, 0, 0, -100]
  );
  const rightX = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    [100, 0, 0, 100]
  );
  const textOpacity = useTransform(
    smoothProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0]
  );

  // Z-index effect to create proper stacking
  const zIndex = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [index === 0 ? 1 : 0, 2, 0]
  );

  // Perspective effect to enhance 3D feeling
  const perspective = useTransform(
    smoothProgress,
    [0, 0.5, 1],
    [800, 1000, 800]
  );
  const rotateX = useTransform(smoothProgress, [0, 0.5, 1], [2, 0, 2]);

  return (
    <motion.div
      ref={sectionRef}
      className="services-animation-section"
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <motion.div
        className="sticky-container"
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          zIndex,
          perspective,
        }}
      >
        {/* Content wrapper with scale and width effects */}
        <motion.div
          className="content-wrapper"
          style={{
            position: "absolute",
            inset: 0,
            width,
            height,
            left: "50%",
            top: "50%",
            x: "-50%",
            y: "-50%",
            scale,
            opacity,
            rotateX,
          }}
        >
          {/* Image container */}
          <motion.div
            className="services-animation-image-container"
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              overflow: "hidden",
              borderRadius: "4px", // Subtle rounded corners for the scaling effect
            }}
          >
            <motion.img
              src={section.image || "/placeholder.svg"}
              alt={`${section.title}`}
              className="services-animation-image"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />

            {/* Overlay for better text visibility */}
            <motion.div
              className="services-animation-overlay"
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            />
          </motion.div>

          {/* Text content */}
          <motion.div
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
              style={{
                position: "absolute",
                left: "5%",
                top: isMobile ? "30%" : "50%",
                translateY: "-50%",
                x: leftX,
                opacity: textOpacity,
              }}
            >
              <a
                href={section.experienceLink}
                className="services-animation-text-container"
                style={{
                  display: "inline-block",
                  padding: "24px",
                  maxWidth: "400px",
                  textDecoration: "none",
                }}
              >
                <h2
                  className="services-animation-title"
                  style={{
                    color: "white",
                    fontSize: isMobile ? "20px" : "26px",
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: 1.2,
                  }}
                >
                  Seeing is Experiencing
                </h2>
              </a>
            </motion.div>

            {/* Right side text - Service Title */}
            <motion.div
              style={{
                position: "absolute",
                right: "5%",
                 top: isMobile ? "60%" : "50%",
                translateY: "-50%",
                x: rightX,
                opacity: textOpacity,
              }}
            >
              <a
                href={section.renderingLink}
                className="services-animation-text-container"
                style={{
                  display: "inline-block",
                  padding: "20px",
                  maxWidth: "320px",
                  textDecoration: "none",
                }}
              >
                <motion.h2
                  onHoverStart={() => setHovered(true)}
                  onHoverEnd={() => setHovered(false)}
                  className="services-animation-title"
                  style={{
                    color: "white",
                    fontSize: isMobile ? "28px" : "42px",
                    fontWeight: 700,
                    margin: 0,
                    lineHeight: 1.2,
                    display: "flex",
                    alignItems: "center",
                    textDecoration: hovered ? "underline" : "none",
                  }}
                >
                  {section.title}
                  <motion.span
                    animate={{
                      rotate: hovered ? 0 : 45,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    style={{
                      marginLeft: "8px",
                      display: "inline-block",
                      paddingTop: "2px",
                    }}
                  >
                    <ArrowUpRight size={isMobile ? 24 : 28} />
                  </motion.span>
                </motion.h2>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
