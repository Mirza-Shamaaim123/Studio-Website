import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface RotatingCubeProps {
  isScrollControlled: boolean;
}

export default function RotatingCube({ isScrollControlled }: RotatingCubeProps) {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [size, setSize] = useState(300);
  const lastScrollY = useRef(0);
  const toggleRef = useRef({
    down: true,
    up: true,
  });

  // Responsive cube size
  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;
      if (width < 640) setSize(150);
      else if (width < 1024) setSize(200);
      else setSize(300);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Scroll-based rotation
  useEffect(() => {
    if (!isScrollControlled) return;

    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const goingDown = currentScroll > lastScrollY.current;
      lastScrollY.current = currentScroll;

      if (goingDown) {
        const downToggle = toggleRef.current.down;
        setRotation((prev) => ({
          x: prev.x + (downToggle ? 90 : -90),
          y: prev.y + (downToggle ? -90 : 90),
          z: prev.z,
        }));
        toggleRef.current.down = !downToggle;
      } else {
        const upToggle = toggleRef.current.up;
        setRotation((prev) => ({
          x: prev.x + (upToggle ? -90 : 90),
          y: prev.y + (upToggle ? 90 : -90),
          z: prev.z,
        }));
        toggleRef.current.up = !upToggle;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollControlled]);

  // Auto rotation when scroll mode is off
  useEffect(() => {
    if (isScrollControlled) return;

    const interval = setInterval(() => {
      setRotation((prev) => ({
        x: prev.x + 1.2,
        y: prev.y + 1.5,
        z: prev.z + 0.8,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, [isScrollControlled]);

  const halfSize = size / 2;

  return (
    <motion.div
      className="relative mx-auto my-20"
      style={{
        width: size,
        height: size,
        transformStyle: "preserve-3d",
        transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
        transition: "transform 0.6s ease-in-out",
      }}
    >
      {["front", "back", "right", "left", "top", "bottom"].map((face) => (
        <motion.div
          key={face}
          className="absolute"
          style={{
            width: size,
            height: size,
            background: "#ff4438",
            transformStyle: "preserve-3d",
            backfaceVisibility: "visible",
            transform: {
              front: `translateZ(${halfSize}px)`,
              back: `translateZ(-${halfSize}px) rotateY(180deg)`,
              right: `translateX(${halfSize}px) rotateY(90deg)`,
              left: `translateX(-${halfSize}px) rotateY(-90deg)`,
              top: `translateY(-${halfSize}px) rotateX(90deg)`,
              bottom: `translateY(${halfSize}px) rotateX(-90deg)`,
            }[face],
            boxShadow: "0 0 20px rgba(255, 68, 56, 0.6)",
          }}
        />
      ))}
    </motion.div>
  );
}
