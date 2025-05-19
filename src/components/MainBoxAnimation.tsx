"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import AnimatedLine from "./LineAnimation";

const MainBoxAnimation: React.FC = () => {
  const { scrollY } = useScroll();
  const section2Ref = useRef<HTMLDivElement>(null);
  const sectionlastRef = useRef<HTMLDivElement>(null);

  const [section2Bounds, setSection2Bounds] = useState({ top: 0, bottom: 0 });
  const [sectionlastBounds, setSectionlastBounds] = useState({
    top: 0,
    bottom: 0,
  });
  const [boxSize, setBoxSize] = useState(300);
  const [isMobile, setIsMobile] = useState(false);

  // → now just one line of text
  const headingLines = [["Seeing ", "is ",  "Believing"]];

  const faceConfigs = [
    { name: "front", color: "#ff4438" },
    { name: "right", color: "#e33c30" },
    { name: "back", color: "#cc3428" },
    { name: "left", color: "#b22c20" },
    { name: "top", color: "#991f18" },
    { name: "bottom", color: "#771811" },
  ];

  const updateBounds = (
    ref: React.RefObject<HTMLDivElement>,
    setBounds: React.Dispatch<
      React.SetStateAction<{ top: number; bottom: number }>
    >
  ) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setBounds({ top: rect.top + scrollTop, bottom: rect.bottom + scrollTop });
  };

  useEffect(() => {
    const updateBoxSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      if (width < 480) setBoxSize(150);
      else if (width < 640) setBoxSize(180);
      else if (width < 768) setBoxSize(220);
      else if (width < 1024) setBoxSize(240);
      else if (width < 1280) setBoxSize(280);
      else setBoxSize(290);
    };

    updateBoxSize();
    updateBounds(section2Ref, setSection2Bounds);
    updateBounds(sectionlastRef, setSectionlastBounds);

    const onResize = () => {
      updateBoxSize();
      updateBounds(section2Ref, setSection2Bounds);
      updateBounds(sectionlastRef, setSectionlastBounds);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    updateBounds(section2Ref, setSection2Bounds);
    updateBounds(sectionlastRef, setSectionlastBounds);
    const timer = setTimeout(() => {
      updateBounds(section2Ref, setSection2Bounds);
      updateBounds(sectionlastRef, setSectionlastBounds);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const boxTranslateX = useTransform(
    scrollY,
    [1200, 1500, 1800, 2100],
    isMobile ? [0, -50, -100, -150] : [0, -150, -300, -450]
  );

  const rotateX = useSpring(useTransform(scrollY, [1200, 2100], [0, 360]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(scrollY, [1200, 2100], [0, 180]), {
    stiffness: 100,
    damping: 30,
  });
  const rotateZ = useSpring(useTransform(scrollY, [1200, 2100], [0, 90]), {
    stiffness: 100,
    damping: 30,
  });

  const text5Opacity = useTransform(
    scrollY,
    [1200, 1500, 1800, 2100],
    [0, 1, 1, 1]
  );

  const containerSize = Math.max(boxSize * 3, 300);

  const transformMap: Record<string, string> = {
    front: `translateZ(${boxSize / 2}px)`,
    back: `translateZ(-${boxSize / 2}px) rotateY(180deg)`,
    right: `translateX(${boxSize / 2}px) rotateY(90deg)`,
    left: `translateX(-${boxSize / 2}px) rotateY(-90deg)`,
    top: `translateY(-${boxSize / 2}px) rotateX(90deg)`,
    bottom: `translateY(${boxSize / 2}px) rotateX(-90deg)`,
  };

  return (
    <section
      ref={section2Ref}
      className="section2 w-full pt-16 sm:pt-24 md:pt-32  flex justify-center items-center text-white"
    >
      <div className="relative w-full h-full flex justify-center items-start">
        <motion.div
          className="relative flex items-center justify-center"
          style={{
            perspective: 800,
            width: `${containerSize}px`,
            height: `${containerSize}px`,
            maxWidth: "95vw",
            maxHeight: "80vh",
            position: "sticky",
            top: isMobile ? "20%" : "10%",
          }}
        >
          <motion.div style={{ x: boxTranslateX }}>
            <motion.div
              className="relative"
              style={{
                width: `${boxSize}px`,
                height: `${boxSize}px`,
                transformStyle: "preserve-3d",
                rotateX,
                rotateY,
                rotateZ,
              }}
            >
              {faceConfigs.map(({ name, color }) => (
                <motion.div
                  key={name}
                  className="absolute"
                  style={{
                    width: `${boxSize}px`,
                    height: `${boxSize}px`,
                    background: color,
                    boxShadow: "0 0 50px rgba(0,0,0,0.2)",
                    backfaceVisibility: "hidden",
                    transform: transformMap[name],
                    transformStyle: "preserve-3d",
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
            <motion.div
              className="absolute text-center flex flex-col items-start"
              style={{ opacity: text5Opacity, mixBlendMode: "difference" }}
            >
                 {headingLines.map((line, lineIndex) => (
                <div key={lineIndex} className="flex gap-3">
                  {line.map((word, wordIndex) => {
                    const index = lineIndex * 2 + wordIndex;
                    const start = 1200 + index * 300;
                    const end = start + 200;
                    const wordOpacity = useTransform(
                      scrollY,
                      [start, end],
                      [0, 1]
                    );
                    const wordY = useTransform(scrollY, [start, end], [30, 0]);

                    return (
                      <motion.span
                        key={index}
                        style={{ opacity: wordOpacity, y: wordY }}
                        className="SeeingisExp inline-block  mr-2 text-2xl sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-8xl font-bold"
                      >
                        {word}
                      </motion.span>
                    );
                  })}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>

     
    </section>
  );
};

export default MainBoxAnimation;
// "use client";

// import type React from "react";
// import { useEffect, useRef, useState } from "react";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import AnimatedLine from "./LineAnimation";

// const MainBoxAnimation = () => {
//   const { scrollY } = useScroll();
//   const section2Ref = useRef<HTMLDivElement>(null);
//   const sectionlastRef = useRef<HTMLDivElement>(null);

//   const [section2Bounds, setSection2Bounds] = useState({ top: 0, bottom: 0 });
//   const [sectionlastBounds, setSectionlastBounds] = useState({
//     top: 0,
//     bottom: 0,
//   });
//   const [boxSize, setBoxSize] = useState(300);
//   const [isMobile, setIsMobile] = useState(false);
//   const headingLines = [["Seeing", "is"], ["Experience"]];

//   const updateBounds = (
//     ref: React.RefObject<HTMLDivElement>,
//     setBounds: Function
//   ) => {
//     if (ref.current) {
//       const rect = ref.current.getBoundingClientRect();
//       const scrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;
//       setBounds({ top: rect.top + scrollTop, bottom: rect.bottom + scrollTop });
//     }
//   };

//   useEffect(() => {
//     const updateBoxSize = () => {
//       const width = window.innerWidth;
//       setIsMobile(width < 768);
//       if (width < 480) setBoxSize(150);
//       else if (width < 640) setBoxSize(180);
//       else if (width < 768) setBoxSize(220);
//       else if (width < 1024) setBoxSize(240);
//       else if (width < 1280) setBoxSize(280);
//       else setBoxSize(290);
//     };

//     updateBoxSize();
//     updateBounds(section2Ref, setSection2Bounds);
//     updateBounds(sectionlastRef, setSectionlastBounds);

//     const handleResize = () => {
//       updateBoxSize();
//       updateBounds(section2Ref, setSection2Bounds);
//       updateBounds(sectionlastRef, setSectionlastBounds);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const boxTranslateX = useTransform(
//     scrollY,
//     [1200, 1500, 1800, 2100],
//     isMobile ? [0, -50, -100, -150] : [0, -150, -300, -450]
//   );

//   // Smooth rotation (fixed)
//   const rotateX = useSpring(useTransform(scrollY, [1200, 2100], [0, 360]), {
//     stiffness: 100,
//     damping: 30,
//   });
//   const rotateY = useSpring(useTransform(scrollY, [1200, 2100], [0, 180]), {
//     stiffness: 100,
//     damping: 30,
//   });
//   const rotateZ = useSpring(useTransform(scrollY, [1200, 2100], [0, 90]), {
//     stiffness: 100,
//     damping: 30,
//   });

//   const text5Opacity = useTransform(
//     scrollY,
//     [1200, 1500, 1800, 2100],
//     [0, 1, 1, 1]
//   );
//   const containerSize = Math.max(boxSize * 3, 300);

//   useEffect(() => {
//     const updateAllBounds = () => {
//       updateBounds(section2Ref, setSection2Bounds);
//       updateBounds(sectionlastRef, setSectionlastBounds);
//     };
//     updateAllBounds();
//     const timer = setTimeout(updateAllBounds, 500);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <section
//       ref={section2Ref}
//       className="section2 w-full pt-16 sm:pt-24 md:pt-32 h-screen flex justify-center items-center text-white"
//     >
//       <div className="relative w-full h-full flex justify-center items-start">
//         <motion.div
//           className="relative flex items-center justify-center"
//           style={{
//             width: `${containerSize}px`,
//             height: `${containerSize}px`,
//             maxWidth: "95vw",
//             maxHeight: "80vh",
//             position: "sticky",
//             top: isMobile ? "20%" : "10%",
//             opacity: 1,
//           }}
//         >
//           {/* 3D Box with fixed rotation */}
//           <motion.div style={{ x: boxTranslateX }}>
//             <motion.div
//               className="relative"
//               style={{
//                 width: `${boxSize}px`,
//                 height: `${boxSize}px`,
//                 transformStyle: "preserve-3d",
//                 rotateX,
//                 rotateY,
//                 rotateZ,
//               }}
//             >
//               {["front", "back", "right", "left", "top", "bottom"].map(
//                 (face) => {
//                   const transformMap = {
//                     front: `translateZ(${boxSize / 2}px)`,
//                     back: `translateZ(-${boxSize / 2}px) rotateY(180deg)`,
//                     right: `translateX(${boxSize / 2}px) rotateY(90deg)`,
//                     left: `translateX(-${boxSize / 2}px) rotateY(-90deg)`,
//                     top: `translateY(-${boxSize / 2}px) rotateX(90deg)`,
//                     bottom: `translateY(${boxSize / 2}px) rotateX(-90deg)`,
//                   };
//                   return (
//                     <motion.div
//                       key={face}
//                       className="absolute border-0 border-white/10"
//                       style={{
//                         width: `${boxSize}px`,
//                         height: `${boxSize}px`,
//                         background: "#ff4438",
//                         transform:
//                           transformMap[face as keyof typeof transformMap],
//                         transformStyle: "preserve-3d",
//                         backfaceVisibility: "visible",
//                         boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
//                       }}
//                     />
//                   );
//                 }
//               )}
//             </motion.div>
//           </motion.div>

//           {/* Text Overlay */}
//           <div
//             style={{ borderRadius: "30px" }}
//             className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
//           >
//             <motion.div
//               className="absolute text-center flex flex-col items-start"
//               style={{
//                 opacity: text5Opacity,
//                 color: "white",
//                 mixBlendMode: "difference",
//                 textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
//                 zIndex: 20,
//               }}
//             >
//               {headingLines.map((line, lineIndex) => (
//                 <div key={lineIndex} className="flex gap-2">
//                   {line.map((word, wordIndex) => {
//                     const index = lineIndex * 2 + wordIndex;
//                     const start = 1200 + index * 300;
//                     const end = start + 200;
//                     const wordOpacity = useTransform(
//                       scrollY,
//                       [start, end],
//                       [0, 1]
//                     );
//                     const wordY = useTransform(scrollY, [start, end], [20, 0]);

//                     return (
//                       <motion.span
//                         key={index}
//                         style={{ opacity: wordOpacity, y: wordY }}
//                         className="SeeingisExp inline-block mr-2 text-2xl sm:text-2xl md:text-4xl lg:text-5xl 2xl:text-8xl font-bold"
//                       >
//                         {word}
//                       </motion.span>
//                     );
//                   })}
//                 </div>
//               ))}
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//       <AnimatedLine/>
//     </section>
//   );
// };

// export default MainBoxAnimation;
