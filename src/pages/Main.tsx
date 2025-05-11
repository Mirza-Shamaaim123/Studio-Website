import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import PartnersTestimonialSlider from "../components/Testimonial";
import AnimatedVerticalLine from "../components/LineAnimation";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const { scrollY } = useScroll();
  const [fade, setFade] = useState(false);

  const section2Ref = useRef<HTMLDivElement>(null);
  const sectionlastRef = useRef<HTMLDivElement>(null);

  const section3Ref = useRef<HTMLDivElement>(null);
  const [section2Bounds, setSection2Bounds] = useState({ top: 0, bottom: 0 });
  const [sectionlastBounds, setSectionlastBounds] = useState({
    top: 0,
    bottom: 0,
  });

  const [section3Bounds, setSection3Bounds] = useState({ top: 0, bottom: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
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
    "See It, Feel It, Live It",
  ];

  // Update section bounds on resize and initial load
  useEffect(() => {
    const updateBounds = () => {
      if (section2Ref.current) {
        const rect = section2Ref.current.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        setSection2Bounds({
          top: rect.top + scrollTop,
          bottom: rect.bottom + scrollTop,
        });
      }

      if (section3Ref.current) {
        const rect = section3Ref.current.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        setSection3Bounds({
          top: rect.top + scrollTop,
          bottom: rect.bottom + scrollTop,
        });
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  useEffect(() => {
    const updateBounds = () => {
      if (sectionlastRef.current) {
        const rect = sectionlastRef.current.getBoundingClientRect();
        const scrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        setSectionlastBounds({
          top: rect.top + scrollTop,
          bottom: rect.bottom + scrollTop,
        });
      }

      // if (section3Ref.current) {
      //   const rect = section3Ref.current.getBoundingClientRect();
      //   const scrollTop =
      //     window.pageYOffset || document.documentElement.scrollTop;
      //   setSection3Bounds({
      //     top: rect.top + scrollTop,
      //     bottom: rect.bottom + scrollTop,
      //   });
      // }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  // Track scroll progress within section 2
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (
        currentScroll >= section2Bounds.top &&
        currentScroll <= section2Bounds.bottom
      ) {
        // Calculate progress through section 2 (0 to 1)
        const sectionHeight = section2Bounds.bottom - section2Bounds.top;
        const scrollPositionInSection = currentScroll - section2Bounds.top;
        const progress = Math.min(
          Math.max(scrollPositionInSection / sectionHeight, 0),
          1
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [section2Bounds]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll =
        window.pageYOffset || document.documentElement.scrollTop;

      if (
        currentScroll >= sectionlastBounds.top &&
        currentScroll <= sectionlastBounds.bottom
      ) {
        // Calculate progress through section 2 (0 to 1)
        const sectionHeight = sectionlastBounds.bottom - sectionlastBounds.top;
        const scrollPositionInSection = currentScroll - sectionlastBounds.top;
        const progress = Math.min(
          Math.max(scrollPositionInSection / sectionHeight, 0),
          1
        );
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionlastBounds]);
  const navigate = useNavigate();
  // Box entrance animation
  const boxEntranceY = useTransform(
    scrollY,
    [section2Bounds.top - 300, section2Bounds.top - 200],
    [0, 0]
  );

  const boxEntranceOpacity = useTransform(
    scrollY,
    [section2Bounds.top - 300, section2Bounds.top],
    [0, 1]
  );

  // Box visibility tied to section 2
  const box2Visibility = useTransform(scrollY, (value) => {
    console.log("value", value);

    if (value >= 1200) {
      console.log("sending one");

      return 1;
    } else {
      return 0; // No longer visible
    }
  });

  const box1Visibility = useTransform(scrollY, (value) => {
    console.log("value", value);
    console.log("top", section2Bounds.top);
    console.log("bottom", section2Bounds.bottom);

    if (value >= 200) {
      console.log("sending one");

      return 1;
    } else {
      return 0; // No longer visible
    }
  });

  // Box rotation transforms based on section 2 progress
  const boxRotationX = useTransform(() => scrollProgress * 720);
  const boxRotationY = useTransform(() => scrollProgress * 360);
  const boxRotationZ = useTransform(() => scrollProgress * 180);

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
  // Text 1: Appears center, moves to top-left, stays there
  const text1Opacity = useTransform(
    scrollY,
    [1100, 1400, 1700, 2000],
    [0, 1, 1, 1] // Changed final value from 0 to 1 so it stays visible
  );
  const text1Scale = useTransform(
    scrollY,
    [1100, 1400, 1700, 2000],
    [0.5, 2, 0.8, 0.5] // Final value adjusted for smaller but visible text
  );
  const text1X = useTransform(
    scrollY,
    [1100, 1400, 1700, 2000],
    [0, 0, -300, -400]
  );
  const text1Y = useTransform(
    scrollY,
    [1100, 1400, 1700, 2000],
    [0, 0, -200, -250]
  );

  // Text 2: Appears center, moves to top-right, stays there
  const text2Opacity = useTransform(
    scrollY,
    [2000, 2300, 2600, 2900],
    [0, 1, 1, 1] // Changed final value from 0 to 1
  );
  const text2Scale = useTransform(
    scrollY,
    [2000, 2300, 2600, 2900],
    [0.5, 2, 0.8, 0.5] // Final value adjusted for smaller but visible text
  );
  const text2X = useTransform(
    scrollY,
    [2000, 2300, 2600, 2900],
    [0, 0, 300, 400]
  );
  const text2Y = useTransform(
    scrollY,
    [2000, 2300, 2600, 2900],
    [0, 0, -200, -250]
  );

  // Text 3: Appears center, moves to bottom-left, stays there
  const text3Opacity = useTransform(
    scrollY,
    [2900, 3200, 3500, 3800],
    [0, 1, 1, 1] // Changed final value from 0 to 1
  );
  const text3Scale = useTransform(
    scrollY,
    [2900, 3200, 3500, 3800],
    [0.5, 2, 0.8, 0.5] // Final value adjusted for smaller but visible text
  );
  const text3X = useTransform(
    scrollY,
    [2900, 3200, 3500, 3800],
    [0, 0, -300, -400]
  );
  const text3Y = useTransform(
    scrollY,
    [2900, 3200, 3500, 3800],
    [0, 0, 200, 250]
  );

  // Text 4: Appears center, moves to bottom-right, stays there
  const text4Opacity = useTransform(
    scrollY,
    [3800, 4100, 4400, 4700],
    [0, 1, 1, 1] // Changed final value from 0 to 1
  );
  const text4Scale = useTransform(
    scrollY,
    [3800, 4100, 4400, 4700],
    [0.5, 2, 0.8, 0.5] // Final value adjusted for smaller but visible text
  );
  const text4X = useTransform(
    scrollY,
    [3800, 4100, 4400, 4700],
    [0, 0, 300, 400]
  );
  const text4Y = useTransform(
    scrollY,
    [3800, 4100, 4400, 4700],
    [0, 0, 200, 250]
  );

  // Text 5: Appears center, stays center but smaller
  const text5Opacity = useTransform(
    scrollY,
    [4700, 5000, 5300, 5600],
    [0, 1, 1, 1] // Changed final value from 0 to 1
  );
  const text5Scale = useTransform(
    scrollY,
    [4700, 5000, 5300, 5600],
    [0.5, 2, 1.5, 0.7] // Final value adjusted for smaller but visible text
  );

  // For the first heading in section 3 (moves left)
  const section3Heading1Opacity = useTransform(
    scrollY,
    [7500, 7700, 7900, 9800],
    [0, 1, 1, 1]
  );
  const section3Heading1Scale = useTransform(
    scrollY,
    [7500, 7700, 7900, 8100],
    [0.5, 2, 0.8, 0.5]
  );
  const section3Heading1X = useTransform(
    scrollY,
    [7500, 7700, 7900, 8100],
    [0, 0, -300, -400]
  );
  const section3Heading1Y = useTransform(
    scrollY,
    [7500, 7700, 7900, 8100],
    [0, 0, -100, -100]
  );

  // For the second heading in section 3 (moves right)
  const section3Heading2Opacity = useTransform(
    scrollY,
    [8200, 8400, 8600, 8800],
    [0, 1, 1, 1]
  );
  const section3Heading2Scale = useTransform(
    scrollY,
    [8200, 8400, 8600, 8800],
    [0.5, 2, 0.8, 0.5]
  );
  const section3Heading2X = useTransform(
    scrollY,
    [8200, 8400, 8600, 8800],
    [0, 0, 300, 400]
  );
  const section3Heading2Y = useTransform(
    scrollY,
    [8200, 8400, 8600, 8800],
    [0, 0, 0, 0]
  );

  const section3ButtonY = useTransform(
    scrollY,
    [8200, 8400, 8600, 8800],
    [100, 100, 100, 100]
  );

  const section4Heading1Opacity = useTransform(
    scrollY,
    [12200, 12400, 12600, 12800],
    [0, 1, 1, 1]
  );
  const section4Heading1Scale = useTransform(
    scrollY,
    [12200, 12400, 12600, 12800],
    [0.5, 2, 0.8, 0.5]
  );
  const section4Heading1X = useTransform(
    scrollY,
    [12200, 12400, 12600, 12800],
    [0, 0, 300, 400]
  );
  const section4Heading1Y = useTransform(
    scrollY,
    [12200, 12400, 12600, 12800],
    [0, 0, -100, -200]
  );

  const section4Heading2Opacity = useTransform(
    scrollY,
    [12900, 13100, 13300, 13500],
    [0, 1, 1, 1]
  );
  const section4Heading2Scale = useTransform(
    scrollY,
    [12900, 13100, 13300, 13500],
    [0.5, 2, 0.8, 0.5]
  );
  const section4Heading2X = useTransform(
    scrollY,
    [12900, 13100, 13300, 13500],
    [0, 0, -300, -400]
  );
  const section4Heading2Y = useTransform(
    scrollY,
    [14800, 15000, 15200, 15400],
    [0, 0, -100, 100]
  );

  const section3ButtonOpacity = useTransform(scrollY, [9000, 9200], [0, 1]);

  const section4ButtonOpacity = useTransform(scrollY, [13700, 14000], [0, 1]);

  return (
    <div className="w-full mydiv">
      <AnimatedVerticalLine />
      <section className="w-full h-screen relative">
        <video
          className="w-full fixed top-0 h-screen object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://res.cloudinary.com/dhrpofba6/video/upload/v1745858184/a92yfmnxo1ewujkp7m7g.mp4"
            type="video/mp4"
          />
        </video>
      </section>

      <section
        ref={section2Ref}
        style={{
          borderRadius: "30px",
        }}
        className="section2 w-full  pt-32   w-full h-screen flex justify-center text-white text-4xl"
      >
        <div className="relative w-full h-full flex justify-center items-start">
          {/* Container that holds both the box and text, making them stick together */}
          <motion.div
            className="relative w-[800px] h-[800px] flex items-center justify-center"
            style={{
              position: "sticky",
              top: "0%",
              opacity: box1Visibility,
            }}
          >
            {/* 3D Box */}
            <motion.div
              className="relative w-[300px] h-[300px]"
              style={{
                transformStyle: "preserve-3d",
                rotateX: smoothRotationX,
                rotateY: smoothRotationY,
                rotateZ: smoothRotationZ,
                y: boxEntranceY,
              }}
            >
              {/* Front face */}
              <motion.div
                className="absolute w-[300px] h-[300px] border-0 border-white/10 "
                style={{
                  background: "#ff4438",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible",
                  transform: "translateZ(150px)",
                  boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
                }}
              />

              {/* Back face */}
              <motion.div
                className="absolute w-[300px] h-[300px] border-0 border-white/10 "
                style={{
                  background: "#ff4438",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible",
                  transform: "translateZ(-150px) rotateY(180deg)",
                  boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
                }}
              />

              {/* Right face */}
              <motion.div
                className="absolute w-[300px] h-[300px] border-0 border-white/10 "
                style={{
                  background: "#ff4438",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible",
                  transform: "translateX(150px) rotateY(90deg)",
                  boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
                }}
              />

              {/* Left face */}
              <motion.div
                className="absolute w-[300px] h-[300px] border-0 border-white/10 "
                style={{
                  background: "#ff4438",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible",
                  transform: "translateX(-150px) rotateY(-90deg)",
                  boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
                }}
              />

              {/* Top face */}
              <motion.div
                className="absolute w-[300px] h-[300px] border-0 border-white/10 "
                style={{
                  background: "#ff4438",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible",
                  transform: "translateY(-150px) rotateX(90deg)",
                  boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
                }}
              />

              {/* Bottom face */}
              <motion.div
                className="absolute w-[300px] h-[300px] border-0 border-white/10 "
                style={{
                  background: "#ff4438",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible",
                  transform: "translateY(150px) rotateX(-90deg)",
                  boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
                }}
              />
            </motion.div>

            {/* Text Overlays positioned on top of the box */}
            <div
              style={{ borderRadius: "30px" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
            >
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
                <h1 className="text-6xl font-bold w-[800px]">
                  {headingTexts[0]}
                </h1>
              </motion.div>

              <motion.div
                className="absolute text-center "
                style={{
                  opacity: text2Opacity,
                  scale: text2Scale,
                  x: text2X,
                  y: text2Y,
                  color: "white",
                  //   mixBlendMode: "difference",
                  textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                  zIndex: 20,
                }}
              >
                <h1 className="text-6xl font-bold w-[800px]">
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
                  zIndex: 20,
                }}
              >
                <h1 className="text-6xl font-bold w-[800px]">
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
                  zIndex: 100,
                }}
              >
                <h1 className="text-6xl font-bold w-[800px]">
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
                  zIndex: 20,
                }}
              >
                <h1 className="text-6xl font-bold w-[800px]">
                  {headingTexts[4]}
                </h1>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        style={{
          borderRadius: "30px",
        }}
        className="section3 sticky top-0 z-10 w-full h-screen flex justify-center text-white text-4xl"
      >
        <div className="relative  w-full bg-red-300 h-full flex justify-center items-start">
          {/* Container that holds both the box and text, making them stick together */}
          <motion.div
            className="relative rounded-lg w-[800px] h-[800px] flex items-center justify-center"
            style={{
              position: "sticky",
              top: "0%",
              opacity: box2Visibility,
            }}
          >
            {/* Text Overlays positioned on top of the box */}
            {/* Text Overlays for section 3 */}
            {/* Text Overlays for section 3 */}
            <div
              style={{
                height: "100%",
                width: "100vw",
              }}
              className="absolute inset-0 sec3 flex items-center justify-center z-10"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  zIndex: 0,
                }}
                src="https://res.cloudinary.com/dhrpofba6/video/upload/v1745858142/ehk3czamey1rjue2ukjb.mp4"
              />

              {/* Overlay */}
              {/* <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(66, 66, 66, 0)", // Dark overlay
                  zIndex: 1,
                }}
              ></div> */}
              {/* First heading - moves left */}
              <motion.div
                className="absolute text-center"
                style={{
                  opacity: section3Heading1Opacity,
                  scale: section3Heading1Scale,
                  x: section3Heading1X,
                  y: section3Heading1Y,
                  color: "white",
                  // mixBlendMode: "difference",
                  textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                  zIndex: 20,
                }}
              >
                <h1
                  style={{ color: "white" }}
                  className="text-6xl font-bold w-[800px]"
                >
                  {headingTexts[5]} {/* "Beyond Limits" */}
                </h1>
              </motion.div>

              {/* Second heading - moves right */}
              <motion.div
                className="absolute text-center"
                style={{
                  opacity: section3Heading2Opacity,
                  scale: section3Heading2Scale,
                  x: section3Heading2X,
                  color: "white",
                  // mixBlendMode: "difference",
                  textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                  zIndex: 20,
                }}
              >
                <h1
                  style={{ color: "white" }}
                  className="text-6xl text-white font-bold w-[800px]"
                >
                  {headingTexts[6]} {/* "Creative Solutions" */}
                </h1>
              </motion.div>

              <motion.div
                className="absolute text-center"
                style={{
                  opacity: section3ButtonOpacity,
                  x: 400,
                  y: 40,
                  color: "white",
                  // mixBlendMode: "difference",
                  textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                  zIndex: 20,
                }}
              >
                <button
                  style={{ color: "white", fontSize: "20px" }}
                  className="px-8 grad-bg cursor-pointer py-3 w-[200px] h-[50px] text-2xl font-bold text-white rounded-full  border-1 border-white "
                >
                  Explore More
                </button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <PartnersTestimonialSlider />
      <section
        style={{
          borderRadius: "30px",
          height: "200px",
        }}
        className="section4 sticky top-0 z-[10] mt-[100] w-full  flex justify-center text-white text-4xl"
      ></section>
      <section
        style={{
          borderRadius: "30px",
        }}
        className="section4 sticky top-0 z-[310] mt-[100] w-full h-screen flex justify-center text-white text-4xl"
      >
        <motion.div
          className="relative rounded-lg w-[800px] h-[800px] flex items-center justify-center"
          style={{
            position: "sticky",
            top: "0%",
            opacity: 1,
          }}
        >
          {/* Text Overlays positioned on top of the box */}
          {/* Text Overlays for section 3 */}
          {/* Text Overlays for section 3 */}
          <div
            style={{
              height: "100%",
              width: "100vw",
            }}
            className="absolute inset-0 sec3 flex items-center justify-center z-10"
          >
            {/* First heading - moves left */}
            <motion.div
              className="absolute text-center"
              style={{
                opacity: section4Heading1Opacity,
                scale: section4Heading1Scale,
                x: section4Heading1X,
                y: section4Heading1Y,
                color: "white",
                // mixBlendMode: "difference",
                textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                zIndex: 20,
              }}
            >
              <h1
                style={{ color: "white" }}
                className="text-6xl font-bold w-[800px]"
              >
                {headingTexts[7]} {/* "Beyond Limits" */}
              </h1>
            </motion.div>

            {/* Second heading - moves right */}
            <motion.div
              className="absolute text-center"
              style={{
                opacity: section4Heading2Opacity,
                scale: section4Heading2Scale,
                x: section4Heading2X,
                color: "white",
                // mixBlendMode: "difference",
                textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                zIndex: 20,
              }}
            >
              <h1
                style={{ color: "white" }}
                className="text-6xl text-white font-bold w-[800px]"
              >
                {headingTexts[8]} {/* "Creative Solutions" */}
              </h1>
            </motion.div>

            <motion.div
              className="absolute text-center"
              style={{
                opacity: section4ButtonOpacity,
                x: -400,
                y: 40,
                color: "white",
                // mixBlendMode: "difference",
                textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                zIndex: 20,
              }}
            >
              <button
                style={{ color: "white", fontSize: "20px" }}
                className="px-8 grad-bg cursor-pointer py-3 w-[200px] h-[50px] text-2xl font-bold text-white rounded-full  border-1 border-white "
              >
                Explore More
              </button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* <section style={{ height: "1000px" }}></section> */}
      <section
        ref={sectionlastRef}
        style={{
          borderRadius: "30px 30px 0px 0px",
        }}
        className="section6 w-full  pt-32 z-[350]  w-full h-screen flex justify-center text-white text-4xl"
      >
        <div className="relative w-full h-full flex justify-center items-start">
          {/* Container that holds both the box and text, making them stick together */}
          <motion.div
            className="relative w-[800px] h-[800px] flex items-center justify-center"
            style={{
              position: "sticky",
              top: "0%",
              opacity: box1Visibility,
            }}
          >
            {/* 3D Box */}
            <motion.div
              className="relative w-[300px] h-[300px]"
              style={{
                transformStyle: "preserve-3d",
                rotateX: smoothRotationX,
                rotateY: smoothRotationY,
                rotateZ: smoothRotationZ,
                y: boxEntranceY,
              }}
            >
              {/* Front face */}
              <motion.div
                className="absolute w-[300px] h-[300px] border-0 border-white/10 "
                style={{
                  background: "linear-gradient(45deg, #303F9F, #9C27B0 )",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible",
                  transform: "translateZ(150px)",
                  boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
                }}
              />

              {/* Back face */}
              <motion.div
                className="absolute w-[300px] h-[300px] border-0 border-white/10 "
                style={{
                  background: "linear-gradient(45deg, #303F9F, #9C27B0)",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible",
                  transform: "translateZ(-150px) rotateY(180deg)",
                  boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
                }}
              />

              {/* Right face */}
              <motion.div
                className="absolute w-[300px] h-[300px] border-0 border-white/10 "
                style={{
                  background: "linear-gradient(45deg, #303F9F, #9C27B0)",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible",
                  transform: "translateX(150px) rotateY(90deg)",
                  boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
                }}
              />

              {/* Left face */}
              <motion.div
                className="absolute w-[300px] h-[300px] border-0 border-white/10 "
                style={{
                  background: "linear-gradient(45deg, #303F9F, #9C27B0)",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible",
                  transform: "translateX(-150px) rotateY(-90deg)",
                  boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
                }}
              />

              {/* Top face */}
              <motion.div
                className="absolute w-[300px] h-[300px] border-0 border-white/10 "
                style={{
                  background: "linear-gradient(45deg, #303F9F, #9C27B0)",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible",
                  transform: "translateY(-150px) rotateX(90deg)",
                  boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
                }}
              />

              {/* Bottom face */}
              <motion.div
                className="absolute w-[300px] h-[300px] border-0 border-white/10 "
                style={{
                  background: "linear-gradient(45deg, #303F9F, #9C27B0)",
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "visible",
                  transform: "translateY(150px) rotateX(-90deg)",
                  boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
                }}
              />
            </motion.div>

            {/* Text Overlays positioned on top of the box */}
            <div
              style={{ borderRadius: "30px" }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
            >
              <motion.div
                className="absolute text-center"
                style={{
                  opacity: 1,
                  scale: 2,
                  color: "white",
                  mixBlendMode: "difference",
                  textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
                  zIndex: 20,
                }}
              >
                <h1 className="text-6xl font-bold w-[800px]">
                  {headingTexts[9]}
                </h1>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      <button
        onClick={() => {
          navigate("/contact");
        }}
        style={{
          color: "white",
          position: "fixed",
          right: "20px",
          bottom: "20px",
          zIndex: "99099",
          fontSize: "20px",
        }}
        className="px-8 corner-btn cursor-pointer py-3 w-[200px] h-[50px] text-2xl font-bold text-white rounded-full  border-1 border-white "
      >
        Get A Quote
      </button>
    </div>
  );
}
