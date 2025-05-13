import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
interface Section {
  id: string;
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
      renderingLink: "/services/video-productions/",
      image:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2070",
      title: "Video Production",
    },
    {
      id: "service-animation-2",
      renderingLink: "/services/animation/",
      image:
        "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070",
      title: "Animation",
    },
    {
      id: "service-branding-3",
      renderingLink: "/services/branding/",
      image:
        "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2069",
      title: "Branding",
    },
    {
      id: "service-audio-4",
      renderingLink: "/services/audio-production/",
      image:
        "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2070",
      title: "Audio Services",
    },
    {
      id: "service-timelapse-5",
      renderingLink: "/services/time-lapse-video/",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2073",
      title: "Time Lapse Video",
    },
    {
      id: "service-image-6",
      renderingLink: "/services/image-creation/",
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
        zIndex: 999,
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
}: SectionComponentProps) {
  const [hovered, setHovered] = useState(false);
  const [buttonHovered, setButtonHovered] = useState(false);

  const sectionRef = useRef<HTMLDivElement>(null);

  // Use Framer Motion's useScroll hook to track scroll progress for this section
  // Adjust the offset to better control when animations happen during section transitions
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

  // Button animations - adjusted to complete when section is fully in view
  // The button now starts expanding earlier (at 0.1) and is fully expanded by 0.5 (when section is centered)
  const buttonWidth = useTransform(
    smoothProgress,
    [0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9],
    ["0%", "10%", "25%", "40%", "70%", "100%", "100%", "70%", "40%", "0%"]
  );

  const buttonOpacity = useTransform(
    smoothProgress,
    [0.1, 0.15, 0.7, 0.8],
    [0, 1, 1, 0]
  );

  // Text reveal animation - synced with button width
  const textClipWidth = useTransform(
    smoothProgress,
    [0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
    ["100%", "90%", "75%", "50%", "25%", "0%", "0%", "25%", "100%"]
  );

  // Button background animation
  const buttonBgColor = useTransform(
    smoothProgress,
    [0.1, 0.3, 0.5, 0.7, 0.9],
    ["#000000", "#0a0a0a", "#111111", "#0a0a0a", "#000000"]
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
      style={{
        position: "relative",
        height: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
    >
      <motion.div
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
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
              }}
            />

            {/* Overlay for better text visibility */}
            <motion.div
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              }}
            />

            {/* Dark overlay on hover */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: hovered ? 0.5 : 0 }}
              transition={{ duration: 0.3 }}
              style={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                zIndex: 1,
              }}
            />
          </motion.div>

          {/* Text content */}
          <motion.div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: "0 5%",
              zIndex: 2, // Ensure text is above the overlay
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
              <p              
                style={{
                  display: "inline-block",
                  padding: "24px",
                  maxWidth: "400px",
                  textDecoration: "none",
                }}
              >
                <h2
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
              </p>
            </motion.div>

            {/* Right side text - Service Title */}
            <motion.div
              style={{
                position: "absolute",
                right: "20%",
                top: isMobile ? "60%" : "50%",
                translateY: "-50%",
                x: rightX,
                opacity: textOpacity,
              }}
            >
              <div
                style={{
                  display: "inline-block",
                  padding: "20px",
                  maxWidth: "370px",
                }}
              >
                <Link
                  to={section.renderingLink}
                  style={{
                    textDecoration: "none",
                  }}
                  onMouseEnter={() => setHovered(true)}
                  onMouseLeave={() => setHovered(false)}
                >
                  <motion.h2
                    style={{
                      color: "white",
                      fontSize: isMobile ? "28px" : "52px",
                      fontWeight: 700,
                      margin: 0,
                      lineHeight: 1.2,
                      display: "flex",
                      alignItems: "center",
                      textDecoration: hovered ? "underline" : "none",
                      zIndex: 10,
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
                </Link>

                {/* Button - Now with timing adjusted to section transitions */}
                <motion.div
                  style={{
                    marginTop: "20px",
                    overflow: "hidden",
                    opacity: buttonOpacity,
                  }}
                >
                  <motion.a
                    href="/projects"
                    onHoverStart={() => setButtonHovered(true)}
                    onHoverEnd={() => setButtonHovered(false)}
                    style={{
                      width: buttonWidth,
                      height: "48px",
                      display: "flex",
                      alignItems: "center",
                      padding: "0 20px",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      position: "relative",
                      textDecoration: "none",
                      overflow: "hidden",
                      borderRadius: "2px",
                      backgroundColor: "#FF4438",
                    }}
                  >
                    {/* Right to Left Hover Overlay */}
                    <motion.div
                      initial={{ x: "100%" }}
                      animate={{
                        x: buttonHovered ? "0%" : "100%",
                      }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      style={{
                        position: "absolute",
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        backgroundColor: "#000000",
                        zIndex: 1,
                      }}
                    />

                    {/* Small box inside button */}
                    <motion.div
                      animate={{
                        backgroundColor: buttonHovered ? "#FF4438" : "#000000",
                      }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: "12px",
                        height: "12px",
                        marginRight: "12px",
                        flexShrink: 0,
                        zIndex: 2,
                      }}
                    />

                    {/* Button text */}
                   <Link to={'/projects'}>
                    <motion.div
                      style={{
                        position: "relative",
                        overflow: "hidden",
                        width: "100%",
                        zIndex: 2,
                      }}
                    >
                      <motion.span
                        style={{
                          color: "white",
                          fontWeight: 600,
                          display: "block",
                          clipPath: `inset(0 ${textClipWidth} 0 0)`,
                          transform: "translateX(0)",
                        }}
                      >
                        SEE MORE PROJECTS
                      </motion.span>
                    </motion.div>
                   </Link>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
