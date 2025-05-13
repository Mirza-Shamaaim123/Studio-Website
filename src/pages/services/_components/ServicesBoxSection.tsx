import { useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const ServicesBoxSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null)

  const cubeSize = "clamp(150px, 30vw, 300px)"
  const half = "50%"

  const faces = [
    `translateZ(${half})`,
    `translateZ(-${half}) rotateY(180deg)`,
    `translateX(${half}) rotateY(90deg)`,
    `translateX(-${half}) rotateY(-90deg)`,
    `translateY(-${half}) rotateX(90deg)`,
    `translateY(${half}) rotateX(-90deg)`,
  ]

  return (
    <section
      ref={sectionRef}
      className="section6 h-screen w-full pt-32 flex justify-center items-start z-[350] text-white"
    >
      <motion.div
        className="sticky top-0 w-full max-w-[800px] h-[800px] flex justify-center items-center"
      >
        {/* Random moving cube */}
        <motion.div
          className="relative"
          style={{
            width: cubeSize,
            height: cubeSize,
            transformStyle: "preserve-3d",
          }}
          animate={{
    x: ["0%", "-15%", "10%", "0%"],
    y: ["0%", "10%", "-10%", "0%"],
    rotateX: [0, 90, 180, 0],
    rotateY: [0, 180, 360, 0],
    rotateZ: [0, 45, -45, 0],
          }}
          transition={{
    duration: 12,
            repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut",
          }}
        >
          {faces.map((transform, idx) => (
            <motion.div
              key={idx}
              className="absolute"
              style={{
                width: "100%",
                height: "100%",
                background: "#ff4438", // red box
                // backfaceVisibility: "visible",
                transform,
                
              }}
            />
          ))}
        </motion.div>

        {/* Text overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <motion.div
            className="text-center px-4 mix-blend-difference text-white"
            style={{
              scale: 1.5,
              textShadow: "0 0 20px rgba(0,0,0,0.5)",
            }}
          >
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold ready-text">
              Ready to Start?{" "}
              <Link to="/contact" className="border-b-[4px] cursor-pointer">
                Drop Us a Line
              </Link>
            </h1>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ServicesBoxSection
