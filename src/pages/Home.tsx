

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import AnimatedLine from "../components/LineAnimation";

const headingTexts = [
  "Creative Animations",
  "Innovative Design",
  "Digital Excellence",
  "Artistic Vision",
  "Cutting Edge",
  "Beyond Limits",
];

const Home = () => {
  const { scrollY } = useScroll();
  
  // Box entrance animation
  const boxEntranceY = useTransform(scrollY, [200, 500], [1000, 0]);
  const boxEntranceOpacity = useTransform(scrollY, [200, 500], [0, 1]);

  // Box rotation transforms
  const boxRotationX = useTransform(scrollY, [500, 3500], [0, 720]);
  const boxRotationY = useTransform(scrollY, [500, 3500], [0, 360]);
  const boxRotationZ = useTransform(scrollY, [500, 3500], [0, 180]);

  // Box section visibility
  const boxSectionOpacity = useTransform(scrollY, [200, 500], [0, 1]);

  // Smooth the rotations
  const smoothRotationX = useSpring(boxRotationX, {
    stiffness: 100,
    damping: 30,
  });
  const smoothRotationY = useSpring(boxRotationY, {
    stiffness: 100,
    damping: 30,
  });
  const smoothRotationZ = useSpring(boxRotationZ, {
    stiffness: 100,
    damping: 30,
  });

  // Text animations
  const text1Opacity = useTransform(scrollY, [500, 700, 900, 1100], [0, 1, 1, 0]);
  const text1Scale = useTransform(scrollY, [500, 700, 900, 1100], [0.5, 2, 0.8, 0.3]);
  const text1X = useTransform(scrollY, [500, 700, 900, 1100], [0, 0, -300, -400]);
  const text1Y = useTransform(scrollY, [500, 700, 900, 1100], [0, 0, -200, -300]);

  // Text 2: Appears center, moves to top-right
  const text2Opacity = useTransform(scrollY, [1100, 1300, 1500, 1700], [0, 1, 1, 0]);
  const text2Scale = useTransform(scrollY, [1100, 1300, 1500, 1700], [0.5, 2, 0.8, 0.3]);
  const text2X = useTransform(scrollY, [1100, 1300, 1500, 1700], [0, 0, 300, 400]);
  const text2Y = useTransform(scrollY, [1100, 1300, 1500, 1700], [0, 0, -200, -300]);

  // Text 3: Appears center, moves to bottom-left
  const text3Opacity = useTransform(scrollY, [1700, 1900, 2100, 2300], [0, 1, 1, 0]);
  const text3Scale = useTransform(scrollY, [1700, 1900, 2100, 2300], [0.5, 2, 0.8, 0.3]);
  const text3X = useTransform(scrollY, [1700, 1900, 2100, 2300], [0, 0, -300, -400]);
  const text3Y = useTransform(scrollY, [1700, 1900, 2100, 2300], [0, 0, 200, 300]);

  // Text 4: Appears center, moves to bottom-right
  const text4Opacity = useTransform(scrollY, [2300, 2500, 2700, 2900], [0, 1, 1, 0]);
  const text4Scale = useTransform(scrollY, [2300, 2500, 2700, 2900], [0.5, 2, 0.8, 0.3]);
  const text4X = useTransform(scrollY, [2300, 2500, 2700, 2900], [0, 0, 300, 400]);
  const text4Y = useTransform(scrollY, [2300, 2500, 2700, 2900], [0, 0, 200, 300]);

  // Text 5: Appears center, stays center
  const text5Opacity = useTransform(scrollY, [2900, 3100, 3300, 3500], [0, 1, 1, 0]);
  const text5Scale = useTransform(scrollY, [2900, 3100, 3300, 3500], [0.5, 2, 1.5, 0.5]);

  // Section animations - proper stacking
  const sectionsVisibility = useTransform(scrollY, [3500, 3700], [0, 1]);

  // Section 1 - Welcome
  const section1Y = useTransform(scrollY, [3700, 4200], [100, 0]);
  const section1Opacity = useTransform(scrollY, [3600, 3900, 4200, 4500], [0, 1, 1, 0]);

  // Section 2 - Vision
  const section2Y = useTransform(scrollY, [4200, 4700], [100, 0]);
  const section2Opacity = useTransform(scrollY, [4200, 4400, 4700, 5000], [0, 1, 1, 0]);

  // Section 3 - Process
  const section3Y = useTransform(scrollY, [4700, 5200], [100, 0]);
  const section3Opacity = useTransform(scrollY, [4700, 4900, 5200, 5500], [0, 1, 1, 0]);

  // Section 4 - Create Together
  const section4Y = useTransform(scrollY, [5200, 5700], [100, 0]);
  const section4Opacity = useTransform(scrollY, [5200, 5400, 5700, 6000], [0, 1, 1, 1]);

  return (
    <div className="relative min-h-[500vh]">
      {/* Background Video */}
      <section className="fixed top-0 left-0 w-full h-screen z-10 overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-20"></div>
        <video className="w-full h-full object-cover z-10" autoPlay muted loop playsInline>
          <source src="/background-video.mp4" type="video/mp4" />
        </video>
      </section>

      {/* 3D Box Section */}
      <motion.section 
        className="fixed top-0 left-0 w-full h-screen z-20 flex items-center justify-center overflow-hidden"
        style={{
          opacity: boxSectionOpacity,
          perspective: "2000px",
          backgroundColor: "rgba(47, 50, 58, 0.95)"
        }}
      >
        <motion.div
          className="relative w-[400px] h-[400px]"
          style={{
            transformStyle: "preserve-3d",
            rotateX: smoothRotationX,
            rotateY: smoothRotationY,
            rotateZ: smoothRotationZ,
            y: boxEntranceY,
            opacity: boxEntranceOpacity,
          }}
        >
          {/* Front face */}
          <motion.div
            className="absolute w-[400px] h-[400px] border-2 border-white/10"
            style={{
              background: "linear-gradient(45deg, #4a9d5f, rgba(129, 102, 158, 0.6))",
              transformStyle: "preserve-3d",
              backfaceVisibility: "visible",
              transform: "translateZ(200px)",
              boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
            }}
          ></motion.div>
          
          {/* Back face */}
          <motion.div
            className="absolute w-[400px] h-[400px] border-2 border-white/10"
            style={{
              background: "linear-gradient(45deg, #4a9d5f, rgba(129, 102, 158, 0.6))",
              transformStyle: "preserve-3d",
              backfaceVisibility: "visible",
              transform: "translateZ(-200px) rotateY(180deg)",
              boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
            }}
          ></motion.div>
          
          {/* Right face */}
          <motion.div
            className="absolute w-[400px] h-[400px] border-2 border-white/10"
            style={{
              background: "linear-gradient(45deg, #4a9d5f, rgba(129, 102, 158, 0.6))",
              transformStyle: "preserve-3d",
              backfaceVisibility: "visible",
              transform: "translateX(200px) rotateY(90deg)",
              boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
            }}
          ></motion.div>
          
          {/* Left face */}
          <motion.div
            className="absolute w-[400px] h-[400px] border-2 border-white/10"
            style={{
              background: "linear-gradient(45deg, #4a9d5f, rgba(129, 102, 158, 0.6))",
              transformStyle: "preserve-3d",
              backfaceVisibility: "visible",
              transform: "translateX(-200px) rotateY(-90deg)",
              boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
            }}
          ></motion.div>
          
          {/* Top face */}
          <motion.div
            className="absolute w-[400px] h-[400px] border-2 border-white/10"
            style={{
              background: "linear-gradient(45deg, #4a9d5f, rgba(129, 102, 158, 0.6))",
              transformStyle: "preserve-3d",
              backfaceVisibility: "visible",
              transform: "translateY(-200px) rotateX(90deg)",
              boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
            }}
          ></motion.div>
          
          {/* Bottom face */}
          <motion.div
            className="absolute w-[400px] h-[400px] border-2 border-white/10"
            style={{
              background: "linear-gradient(45deg, #4a9d5f, rgba(129, 102, 158, 0.6))",
              transformStyle: "preserve-3d",
              backfaceVisibility: "visible",
              transform: "translateY(200px) rotateX(-90deg)",
              boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
            }}
          ></motion.div>
        </motion.div>

        {/* Text Overlays for the Box */}
        <div className="absolute w-full h-full flex items-center justify-center pointer-events-none">
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
            }}
          >
            <h1 className="text-6xl font-bold">
              {headingTexts[0]}
            </h1>
          </motion.div>
          
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
            }}
          >
            <h1 className="text-6xl font-bold">
              {headingTexts[1]}
            </h1>
          </motion.div>
          
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
            }}
          >
            <h1 className="text-6xl font-bold">
              {headingTexts[2]}
            </h1>
          </motion.div>
          
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
            }}
          >
            <h1 className="text-6xl font-bold">
              {headingTexts[3]}
            </h1>
          </motion.div>
          
          <motion.div
            className="absolute text-center"
            style={{
              opacity: text5Opacity,
              scale: text5Scale,
              color: "white",
              mixBlendMode: "difference",
              textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
            }}
          >
            <h1 className="text-6xl font-bold">
              {headingTexts[4]}
            </h1>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Sections with Stacking Effect */}
      <motion.div style={{ opacity: sectionsVisibility }}>
        {/* Section 1 - Welcome */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.section
            className="absolute top-0 left-0 w-full min-h-screen px-8 py-16 flex items-center justify-center"
            style={{
              y: section1Y,
              opacity: section1Opacity,
              backgroundColor: "rgba(47, 50, 58, 0.98)",
              zIndex: 40,
              willChange: "transform",
            }}
          >
            <div className="max-w-6xl w-full text-center text-white">
              <h2 
                className="text-5xl mb-8 font-bold"
                style={{
                  background: "linear-gradient(45deg, #4a9d5f, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Welcome to Elite Studio
              </h2>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                Where creativity meets innovation, and ideas transform into reality.
              </p>
            </div>
          </motion.section>
        </div>

        {/* Section 2 - Vision */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.section
            className="absolute top-0 left-0 w-full min-h-screen px-8 py-16 flex items-center justify-center"
            style={{
              y: section2Y,
              opacity: section2Opacity,
              backgroundColor: "rgba(81, 66, 98, 0.98)",
              zIndex: 30,
              willChange: "transform",
            }}
          >
            <div className="max-w-6xl w-full text-center text-white">
              <h2 
                className="text-5xl mb-8 font-bold"
                style={{
                  background: "linear-gradient(45deg, #4a9d5f, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Vision
              </h2>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                Pushing boundaries and redefining digital experiences through innovative design and cutting-edge technology.
              </p>
            </div>
          </motion.section>
        </div>

        {/* Section 3 - Process */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.section
            className="absolute top-0 left-0 w-full min-h-screen px-8 py-16 flex items-center justify-center"
            style={{
              y: section3Y,
              opacity: section3Opacity,
              backgroundColor: "rgba(98, 66, 81, 0.98)",
              zIndex: 20,
              willChange: "transform",
            }}
          >
            <div className="max-w-6xl w-full text-center text-white">
              <h2 
                className="text-5xl mb-8 font-bold"
                style={{
                  background: "linear-gradient(45deg, #4a9d5f, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Our Process
              </h2>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                From concept to creation, we follow a meticulous process that ensures every project exceeds expectations.
              </p>
            </div>
          </motion.section>
        </div>

        {/* Section 4 - Create Together */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <motion.section
            className="absolute top-0 left-0 w-full min-h-screen px-8 py-16 flex items-center justify-center"
            style={{
              y: section4Y,
              opacity: section4Opacity,
              backgroundColor: "rgba(66, 81, 98, 0.98)",
              zIndex: 10,
              willChange: "transform",
            }}
          >
            <div className="max-w-6xl w-full text-center text-white">
              <h2 
                className="text-5xl mb-8 font-bold"
                style={{
                  background: "linear-gradient(45deg, #4a9d5f, #ffffff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Let's Create Together
              </h2>
              <p className="text-xl leading-relaxed max-w-3xl mx-auto">
                Ready to bring your vision to life? Join us on a journey of creative exploration and innovation.
              </p>
            </div>
          </motion.section>
        </div>
      </motion.div>
      
    </div>
  );
};

export default Home;