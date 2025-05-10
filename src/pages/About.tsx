// // import React, { useRef, useEffect, useState } from "react";
// // import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// // import PartnersTestimonialSlider from "../components/Testimonial";
// // import "./about.css";
// // import CreativeCarousel from "../components/Testimonial";
// // import AnimatedVerticalLine from "../components/LineAnimation";

// // export default function Main() {
// //   const { scrollY } = useScroll();
// //   const [fade, setFade] = useState(false);

// //   const section2Ref = useRef<HTMLDivElement>(null);
// //   const sectionlastRef = useRef<HTMLDivElement>(null);

// //   const section3Ref = useRef<HTMLDivElement>(null);
// //   const [section2Bounds, setSection2Bounds] = useState({ top: 0, bottom: 0 });
// //   const [sectionlastBounds, setSectionlastBounds] = useState({
// //     top: 0,
// //     bottom: 0,
// //   });

// //   const [section3Bounds, setSection3Bounds] = useState({ top: 0, bottom: 0 });
// //   const [scrollProgress, setScrollProgress] = useState(0);
// //   const headingTexts = [
// //     "Innovative Spaces",
// //     "Architectural Excellence",
// //     "Creative Blueprints",
// //     "Structural Design",
// //     "Modern Architecture",
// //     "Construction Solutions",
// //     "Urban Planning",
// //     "Interior Mastery",
// //     "Engineering Brilliance",
// //     "Sustainable Designs",
// //   ];

// //   // Update section bounds on resize and initial load
// //   useEffect(() => {
// //     const updateBounds = () => {
// //       if (section2Ref.current) {
// //         const rect = section2Ref.current.getBoundingClientRect();
// //         const scrollTop =
// //           window.pageYOffset || document.documentElement.scrollTop;
// //         setSection2Bounds({
// //           top: rect.top + scrollTop,
// //           bottom: rect.bottom + scrollTop,
// //         });
// //       }

// //       if (section3Ref.current) {
// //         const rect = section3Ref.current.getBoundingClientRect();
// //         const scrollTop =
// //           window.pageYOffset || document.documentElement.scrollTop;
// //         setSection3Bounds({
// //           top: rect.top + scrollTop,
// //           bottom: rect.bottom + scrollTop,
// //         });
// //       }
// //     };

// //     updateBounds();
// //     window.addEventListener("resize", updateBounds);
// //     return () => window.removeEventListener("resize", updateBounds);
// //   }, []);

// //   useEffect(() => {
// //     const updateBounds = () => {
// //       if (sectionlastRef.current) {
// //         const rect = sectionlastRef.current.getBoundingClientRect();
// //         const scrollTop =
// //           window.pageYOffset || document.documentElement.scrollTop;
// //         setSectionlastBounds({
// //           top: rect.top + scrollTop,
// //           bottom: rect.bottom + scrollTop,
// //         });
// //       }

// //       // if (section3Ref.current) {
// //       //   const rect = section3Ref.current.getBoundingClientRect();
// //       //   const scrollTop =
// //       //     window.pageYOffset || document.documentElement.scrollTop;
// //       //   setSection3Bounds({
// //       //     top: rect.top + scrollTop,
// //       //     bottom: rect.bottom + scrollTop,
// //       //   });
// //       // }
// //     };

// //     updateBounds();
// //     window.addEventListener("resize", updateBounds);
// //     return () => window.removeEventListener("resize", updateBounds);
// //   }, []);

// //   // Track scroll progress within section 2
// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScroll =
// //         window.pageYOffset || document.documentElement.scrollTop;

// //       if (
// //         currentScroll >= section2Bounds.top &&
// //         currentScroll <= section2Bounds.bottom
// //       ) {
// //         // Calculate progress through section 2 (0 to 1)
// //         const sectionHeight = section2Bounds.bottom - section2Bounds.top;
// //         const scrollPositionInSection = currentScroll - section2Bounds.top;
// //         const progress = Math.min(
// //           Math.max(scrollPositionInSection / sectionHeight, 0),
// //           1
// //         );
// //         setScrollProgress(progress);
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [section2Bounds]);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const currentScroll =
// //         window.pageYOffset || document.documentElement.scrollTop;

// //       if (
// //         currentScroll >= sectionlastBounds.top &&
// //         currentScroll <= sectionlastBounds.bottom
// //       ) {
// //         // Calculate progress through section 2 (0 to 1)
// //         const sectionHeight = sectionlastBounds.bottom - sectionlastBounds.top;
// //         const scrollPositionInSection = currentScroll - sectionlastBounds.top;
// //         const progress = Math.min(
// //           Math.max(scrollPositionInSection / sectionHeight, 0),
// //           1
// //         );
// //         setScrollProgress(progress);
// //       }
// //     };

// //     window.addEventListener("scroll", handleScroll);
// //     return () => window.removeEventListener("scroll", handleScroll);
// //   }, [sectionlastBounds]);

// //   // Box entrance animation
// //   const boxEntranceY = useTransform(
// //     scrollY,
// //     [section2Bounds.top - 300, section2Bounds.top - 200],
// //     [0, 0]
// //   );

// //   const boxEntranceOpacity = useTransform(
// //     scrollY,
// //     [section2Bounds.top - 300, section2Bounds.top],
// //     [0, 1]
// //   );

// //   // Box visibility tied to section 2
// //   const box2Visibility = useTransform(scrollY, (value) => {
// //     console.log("value", value);

// //     if (value >= 1200) {
// //       console.log("sending one");

// //       return 1;
// //     } else {
// //       return 0; // No longer visible
// //     }
// //   });

// //   const box1Visibility = useTransform(scrollY, (value) => {
// //     console.log("value", value);
// //     console.log("top", section2Bounds.top);
// //     console.log("bottom", section2Bounds.bottom);

// //     if (value >= 200) {
// //       console.log("sending one");

// //       return 1;
// //     } else {
// //       return 0; // No longer visible
// //     }
// //   });

// //   // Box rotation transforms based on section 2 progress
// //   const boxRotationX = useTransform(() => scrollProgress * 720);
// //   const boxRotationY = useTransform(() => scrollProgress * 360);
// //   const boxRotationZ = useTransform(() => scrollProgress * 180);

// //   // Smooth the rotations
// //   const smoothRotationX = useSpring(boxRotationX, {
// //     stiffness: 100,
// //     damping: 30,
// //   });

// //   const smoothRotationY = useSpring(boxRotationY, {
// //     stiffness: 100,
// //     damping: 30,
// //   });

// //   const smoothRotationZ = useSpring(boxRotationZ, {
// //     stiffness: 100,
// //     damping: 30,
// //   });

// //   // Text animations
// //   // Text 1: Appears center, moves to top-left, stays there
// //   const text1Opacity = useTransform(
// //     scrollY,
// //     [1100, 1400, 1700, 2000],
// //     [0, 1, 1, 1] // Changed final value from 0 to 1 so it stays visible
// //   );
// //   const text1Scale = useTransform(
// //     scrollY,
// //     [1100, 1400, 1700, 2000],
// //     [0.5, 2, 0.8, 0.5] // Final value adjusted for smaller but visible text
// //   );
// //   const text1X = useTransform(
// //     scrollY,
// //     [1100, 1400, 1700, 2000],
// //     [0, 0, -300, -400]
// //   );
// //   const text1Y = useTransform(
// //     scrollY,
// //     [1100, 1400, 1700, 2000],
// //     [0, 0, -200, -250]
// //   );

// //   // Text 2: Appears center, moves to top-right, stays there
// //   const text2Opacity = useTransform(
// //     scrollY,
// //     [2000, 2300, 2600, 2900],
// //     [0, 1, 1, 1] // Changed final value from 0 to 1
// //   );
// //   const text2Scale = useTransform(
// //     scrollY,
// //     [2000, 2300, 2600, 2900],
// //     [0.5, 2, 0.8, 0.5] // Final value adjusted for smaller but visible text
// //   );
// //   const text2X = useTransform(
// //     scrollY,
// //     [2000, 2300, 2600, 2900],
// //     [0, 0, 300, 400]
// //   );
// //   const text2Y = useTransform(
// //     scrollY,
// //     [2000, 2300, 2600, 2900],
// //     [0, 0, -200, -250]
// //   );

// //   // Text 3: Appears center, moves to bottom-left, stays there
// //   const text3Opacity = useTransform(
// //     scrollY,
// //     [2900, 3200, 3500, 3800],
// //     [0, 1, 1, 1] // Changed final value from 0 to 1
// //   );
// //   const text3Scale = useTransform(
// //     scrollY,
// //     [2900, 3200, 3500, 3800],
// //     [0.5, 2, 0.8, 0.5] // Final value adjusted for smaller but visible text
// //   );
// //   const text3X = useTransform(
// //     scrollY,
// //     [2900, 3200, 3500, 3800],
// //     [0, 0, -300, -400]
// //   );
// //   const text3Y = useTransform(
// //     scrollY,
// //     [2900, 3200, 3500, 3800],
// //     [0, 0, 200, 250]
// //   );

// //   // Text 4: Appears center, moves to bottom-right, stays there
// //   const text4Opacity = useTransform(
// //     scrollY,
// //     [3800, 4100, 4400, 4700],
// //     [0, 1, 1, 1] // Changed final value from 0 to 1
// //   );
// //   const text4Scale = useTransform(
// //     scrollY,
// //     [3800, 4100, 4400, 4700],
// //     [0.5, 2, 0.8, 0.5] // Final value adjusted for smaller but visible text
// //   );
// //   const text4X = useTransform(
// //     scrollY,
// //     [3800, 4100, 4400, 4700],
// //     [0, 0, 300, 400]
// //   );
// //   const text4Y = useTransform(
// //     scrollY,
// //     [3800, 4100, 4400, 4700],
// //     [0, 0, 200, 250]
// //   );

// //   // Text 5: Appears center, stays center but smaller
// //   const text5Opacity = useTransform(
// //     scrollY,
// //     [4700, 5000, 5300, 5600],
// //     [0, 1, 1, 1] // Changed final value from 0 to 1
// //   );
// //   const text5Scale = useTransform(
// //     scrollY,
// //     [4700, 5000, 5300, 5600],
// //     [0.5, 2, 1.5, 0.7] // Final value adjusted for smaller but visible text
// //   );

// //   // For the first heading in section 3 (moves left)
// //   const section3Heading1Opacity = useTransform(
// //     scrollY,
// //     [7500, 7700, 7900, 9800],
// //     [0, 1, 1, 1]
// //   );
// //   const section3Heading1Scale = useTransform(
// //     scrollY,
// //     [7500, 7700, 7900, 8100],
// //     [0.5, 2, 0.8, 0.5]
// //   );
// //   const section3Heading1X = useTransform(
// //     scrollY,
// //     [7500, 7700, 7900, 8100],
// //     [0, 0, -300, -400]
// //   );
// //   const section3Heading1Y = useTransform(
// //     scrollY,
// //     [7500, 7700, 7900, 8100],
// //     [0, 0, -100, -100]
// //   );

// //   // For the second heading in section 3 (moves right)
// //   const section3Heading2Opacity = useTransform(
// //     scrollY,
// //     [8200, 8400, 8600, 8800],
// //     [0, 1, 1, 1]
// //   );
// //   const section3Heading2Scale = useTransform(
// //     scrollY,
// //     [8200, 8400, 8600, 8800],
// //     [0.5, 2, 0.8, 0.5]
// //   );
// //   const section3Heading2X = useTransform(
// //     scrollY,
// //     [8200, 8400, 8600, 8800],
// //     [0, 0, 300, 400]
// //   );
// //   const section3Heading2Y = useTransform(
// //     scrollY,
// //     [8200, 8400, 8600, 8800],
// //     [0, 0, 0, 0]
// //   );

// //   const section3ButtonY = useTransform(
// //     scrollY,
// //     [8200, 8400, 8600, 8800],
// //     [100, 100, 100, 100]
// //   );

// //   const section4Heading1Opacity = useTransform(
// //     scrollY,
// //     [14200, 14400, 14600, 14600],
// //     [0, 1, 1, 1]
// //   );
// //   const section4Heading1Scale = useTransform(
// //     scrollY,
// //     [14200, 14400, 14600, 14600],
// //     [0.5, 2, 0.8, 0.5]
// //   );
// //   const section4Heading1X = useTransform(
// //     scrollY,
// //     [14200, 14400, 14600, 14600],
// //     [0, 0, 300, 400]
// //   );
// //   const section4Heading1Y = useTransform(
// //     scrollY,
// //     [14200, 14400, 14600, 14600],
// //     [0, 0, -100, -200]
// //   );

// //   const section4Heading2Opacity = useTransform(
// //     scrollY,
// //     [14800, 15000, 15200, 15400],
// //     [0, 1, 1, 1]
// //   );
// //   const section4Heading2Scale = useTransform(
// //     scrollY,
// //     [14800, 15000, 15200, 15400],
// //     [0.5, 2, 0.8, 0.5]
// //   );
// //   const section4Heading2X = useTransform(
// //     scrollY,
// //     [14800, 15000, 15200, 15400],
// //     [0, 0, -300, -400]
// //   );
// //   const section4Heading2Y = useTransform(
// //     scrollY,
// //     [14800, 15000, 15200, 15400],
// //     [0, 0, -100, 100]
// //   );

// //   const section3ButtonOpacity = useTransform(scrollY, [9000, 9200], [0, 1]);

// //   const section4ButtonOpacity = useTransform(scrollY, [15700, 15900], [0, 1]);

// //   return (
// //     <div className="w-full">
// //        {/* <AnimatedVerticalLine />

// //        */}
// //       {/* <section className="w-full h-screen relative">
// //         <video
// //           className="w-full fixed top-0 h-screen object-cover"
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //         >
// //           <source
// //             src="https://res.cloudinary.com/dhrpofba6/video/upload/v1745858142/ehk3czamey1rjue2ukjb.mp4"
// //             type="video/mp4"
// //           />
// //         </video>
// //       </section>

// //       <section style={{ backgroundColor: "white" }} className="about-us ">
// //         <div className="container">
// //           <h2 className="section-title">About us</h2>
// //           <div className="who-we-are">
// //             <h3>Who we are</h3>
// //             <p>
// //               Elite Design is a global creative content studio. Our team focuses
// //               on producing digital assets for promoting projects in the domains
// //               of luxury residential, real estate, commercial, and cultural
// //               properties. We combine artistic with practical problem-solving.
// //               Our projects are the result of streamlined workflows and a
// //               creative approach to visual communication.
// //             </p>
// //           </div>
// //           <div className="what-we-offer">
// //             <h3>What we offer</h3>
// //             <ul className="offer-list">
// //               <li>3D Animation</li>
// //               <li>VR Experience</li>
// //               <li>Still Images</li>
// //               <li>Product Rendering</li>
// //               <li>Concept Creation</li>
// //               <li>Brand Identity</li>
// //               <li>Web Development</li>
// //               <li>Research & Analysis</li>
// //               <li>Strategy & Consulting</li>
// //             </ul>
// //           </div>
// //         </div>
// //       </section>

// //       <section
// //         style={{
// //           backgroundColor: "white",
// //           zIndex: "200",
// //           position: "relative",
// //           color: "#303f9f",
// //           height: "1200px",
// //         }}
// //         className=""
// //       >
// //         <div className="container">
// //           <h2 style={{ fontSize: "50px" }}>Our Team</h2>
// //           <div className="flex flex-wrap justify-between  gap-4 mt-10">
// //             <PersonCard
// //               name="Amir"
// //               title="CEO"
// //               image="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
// //             />
// //             <PersonCard
// //               name="Amir"
// //               title="CEO"
// //               image="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
// //             />
// //             <PersonCard
// //               name="Amir"
// //               title="CEO"
// //               image="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
// //             />
// //             <PersonCard
// //               name="Amir"
// //               title="CEO"
// //               image="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
// //             />
// //             <PersonCard
// //               name="Amir"
// //               title="CEO"
// //               image="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
// //             />
// //             <PersonCard
// //               name="Amir"
// //               title="CEO"
// //               image="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
// //             />
// //           </div>
// //         </div>
// //       </section> */}

// //       {/* <CreativeCarousel /> */}
// //       {/* <section style={{ height: "1000px" }}></section> */}
// //       {/* <button
// //         style={{
// //           color: "white",
// //           position: "fixed",
// //           right: "20px",
// //           bottom: "20px",
// //           zIndex: "99099",
// //           fontSize: "20px",
// //         }}
// //         className="px-8 corner-btn cursor-pointer py-3 w-[200px] h-[50px] text-2xl font-bold text-white rounded-full  border-1 border-white "
// //       >
// //         Get A Quote
// //       </button> */}
// //     </div>
// //   );
// // }

// // const PersonCard = ({
// //   name,
// //   title,
// //   image,
// // }: {
// //   name: string;
// //   title: string;
// //   image: string;
// // }) => {
// //   return (
// //     <div
// //       style={{ borderRadius: "20px", margin: "30px" }}
// //       className="w-[250px] h-[320px] grad-bg rounded-lg flex flex-col items-center shadow-lg p-4"
// //     >
// //       <img
// //         style={{
// //           height: "300px",
// //           width: "100%",
// //           borderRadius: "20px 20px 0px 0px",
// //         }}
// //         src={image}
// //         alt={`${name}'s profile`}
// //       />
// //       <div className="mt-4">
// //         <h5
// //           style={{ color: "white", fontSize: "30px", textAlign: "center" }}
// //           className="text-white text-lg font-bold"
// //         >
// //           {name}
// //         </h5>
// //         <p
// //           style={{ color: "white", fontSize: "20px", textAlign: "center" }}
// //           className="text-white"
// //         >
// //           {title}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import { useState, useEffect, useRef } from "react";
// import "./about.css";
// import { MdOutlinePhone } from "react-icons/md";
// import { TfiEmail } from "react-icons/tfi";
// import { IoLocationOutline } from "react-icons/io5";
// import { CircularProgress } from "../components/Progress";

// export default function AboutUsPage() {
//   const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setRotation((prev) => ({
//         x: prev.x + 1.2,
//         y: prev.y + 1.5,
//         z: prev.z + 0.8,
//       }));
//     }, 50);

//     return () => clearInterval(interval);
//   }, []);

//   const animated = useRef(false); // keeps its value across renders

//   function isInViewport(element: any) {
//     const rect = element.getBoundingClientRect();
//     return (
//       rect.top >= 0 &&
//       rect.left >= 0 &&
//       rect.bottom <=
//         (window.innerHeight || document.documentElement.clientHeight) &&
//       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
//   }

//   function animateCounter(
//     element: any,
//     target: any,
//     suffix: any,
//     duration: any
//   ) {
//     let start = 0;
//     const step = target / 50;
//     const interval = duration / 50;

//     const isDecimal = !Number.isInteger(target);
//     const decimalPlaces = isDecimal
//       ? target.toString().split(".")[1].length
//       : 0;

//     const timer = setInterval(() => {
//       start += step;
//       if (start >= target) {
//         element.textContent = target.toFixed(decimalPlaces) + suffix;
//         clearInterval(timer);
//       } else {
//         element.textContent = isDecimal
//           ? start.toFixed(decimalPlaces) + suffix
//           : Math.floor(start) + suffix;
//       }
//     }, interval);
//   }

//   function animateCircle(circle: any, target: any, duration: any) {
//     const circumference = 2 * Math.PI * 70;

//     circle.style.strokeDasharray = circumference.toString();
//     circle.style.strokeDashoffset = circumference.toString();
//     void circle.offsetWidth;

//     const offset = circumference - (target / 100) * circumference;
//     circle.style.transition = `stroke-dashoffset ${duration}ms ease-in-out`;
//     circle.style.strokeDashoffset = offset.toString();
//   }

//   function animateStat(statBox: any) {
//     const circle = statBox.querySelector(".progress-circle-value");
//     const counter = statBox.querySelector(".stat-number");

//     const targetValue = parseFloat(circle.getAttribute("data-value"));
//     const targetCount = parseFloat(counter.getAttribute("data-count"));
//     const suffix = counter.getAttribute("data-suffix") || "";

//     animateCircle(circle, targetValue, 2000);
//     animateCounter(counter, targetCount, suffix, 2000);
//   }

//   function resetStats() {
//     const statBoxes = document.querySelectorAll(".stat-box");

//     statBoxes.forEach((box) => {
//       const circle: any = box.querySelector(".progress-circle-value");
//       const counter: any = box.querySelector(".stat-number");

//       const circumference = 2 * Math.PI * 70;
//       circle.style.strokeDasharray = circumference.toString();
//       circle.style.strokeDashoffset = circumference.toString();
//       circle.style.transition = "none";

//       counter.textContent = "0" + (counter.getAttribute("data-suffix") || "");
//     });

//     animated.current = false;
//   }

//   function checkScroll() {
//     const statsContainer = document.querySelector(".stats-container");
//     if (!animated.current && isInViewport(statsContainer)) {
//       animated.current = true;
//       const statBoxes = document.querySelectorAll(".stat-box");
//       statBoxes.forEach((box, index) => {
//         setTimeout(() => {
//           animateStat(box);
//         }, index * 200);
//       });
//     }
//   }

//   useEffect(() => {
//     resetStats();
//     checkScroll(); // run on mount

//     window.addEventListener("scroll", checkScroll);
//     return () => window.removeEventListener("scroll", checkScroll);
//   }, []);

//   return (
//     <>
//       <section
//         style={{
//           borderRadius: "30px 30px 0px 0px",
//         }}
//         className="  w-full  pt-32   w-full h-screen flex justify-center text-white text-4xl"
//       >
//         <div className="relative w-full h-full flex justify-center items-start">
//           {/* Container that holds both the box and text, making them stick together */}
//           <motion.div
//             className="relative w-[800px] h-[800px] flex items-center justify-center"
//             style={{
//               position: "sticky",
//               top: "0%",
//               opacity: 1,
//             }}
//           >
//             {/* 3D Box */}
//             <motion.div
//               className="relative w-[300px] h-[300px]"
//               style={{
//                 transformStyle: "preserve-3d",
//                 transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
//               }}
//             >
//               {/* Front face */}
//               <motion.div
//                 className="absolute w-[300px] h-[300px] border-0 border-white/10 "
//                 style={{
//                   background: "linear-gradient(45deg, #303F9F, #9C27B0 )",
//                   transformStyle: "preserve-3d",
//                   backfaceVisibility: "visible",
//                   transform: "translateZ(150px)",
//                   boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
//                 }}
//               />

//               {/* Back face */}
//               <motion.div
//                 className="absolute w-[300px] h-[300px] border-0 border-white/10 "
//                 style={{
//                   background: "linear-gradient(45deg, #303F9F, #9C27B0)",
//                   transformStyle: "preserve-3d",
//                   backfaceVisibility: "visible",
//                   transform: "translateZ(-150px) rotateY(180deg)",
//                   boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
//                 }}
//               />

//               {/* Right face */}
//               <motion.div
//                 className="absolute w-[300px] h-[300px] border-0 border-white/10 "
//                 style={{
//                   background: "linear-gradient(45deg, #303F9F, #9C27B0)",
//                   transformStyle: "preserve-3d",
//                   backfaceVisibility: "visible",
//                   transform: "translateX(150px) rotateY(90deg)",
//                   boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
//                 }}
//               />

//               {/* Left face */}
//               <motion.div
//                 className="absolute w-[300px] h-[300px] border-0 border-white/10 "
//                 style={{
//                   background: "linear-gradient(45deg, #303F9F, #9C27B0)",
//                   transformStyle: "preserve-3d",
//                   backfaceVisibility: "visible",
//                   transform: "translateX(-150px) rotateY(-90deg)",
//                   boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
//                 }}
//               />

//               {/* Top face */}
//               <motion.div
//                 className="absolute w-[300px] h-[300px] border-0 border-white/10 "
//                 style={{
//                   background: "linear-gradient(45deg, #303F9F, #9C27B0)",
//                   transformStyle: "preserve-3d",
//                   backfaceVisibility: "visible",
//                   transform: "translateY(-150px) rotateX(90deg)",
//                   boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
//                 }}
//               />

//               {/* Bottom face */}
//               <motion.div
//                 className="absolute w-[300px] h-[300px] border-0 border-white/10 "
//                 style={{
//                   background: "linear-gradient(45deg, #303F9F, #9C27B0)",
//                   transformStyle: "preserve-3d",
//                   backfaceVisibility: "visible",
//                   transform: "translateY(150px) rotateX(-90deg)",
//                   boxShadow: "0 0 50px rgba(129, 102, 158, 0.2)",
//                 }}
//               />
//             </motion.div>

//             {/* Text Overlays positioned on top of the box */}
//             <div
//               style={{ borderRadius: "30px" }}
//               className="absolute inset-0 flex items-center justify-center pointer-events-none z-10"
//             >
//               <motion.div
//                 className="absolute text-center"
//                 style={{
//                   opacity: 1,
//                   scale: 2,
//                   color: "white",
//                   mixBlendMode: "difference",
//                   textShadow: "0 0 20px rgba(0, 0, 0, 0.5)",
//                   zIndex: 20,
//                 }}
//               >
//                 <h1 className="text-6xl font-bold w-[800px]">WHO WE ARE</h1>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//       <div
//         style={{
//           zIndex: "999",

//           backgroundColor: "rgb(214, 212, 212)",
//           padding: "60px 80px 10px 80px",
//           borderRadius: "30px 30px 0px 0px",
//           position: "relative",
//         }}
//       >
//         <div className="container">
//           <div className="left-section">
//             <h1 className="title">Elite Design Studio</h1>
//             <p className="description">
//             We are driven by creativity. We create innovative things to help you achieve better results and consolidate yourself in the market. At Elite Design Studio, we specialize in full-spectrum video,
//               audio, and imagery production tailored to elevate your brand. From
//               high-impact TV commercials and time-lapse visuals to corporate
//               event coverage and animations — we bring ideas to life. Our
//               creative process is built on storytelling, precision, and a deep
//               understanding of audience engagement. With cutting-edge technology
//               and a passionate team, we turn concepts into compelling visual
//               experiences. Whether launching a product or capturing a moment, we
//               help you connect, inspire, and grow.
//             </p>
//           </div>
//           <div className="right-section">
//             <div className="image-container">
//               <img
//                 src="https://leverage.codings.dev/wp-content/uploads/2021/05/about-8.jpg"
//                 alt="Two people looking at laptop"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="container">
//           <div className="stats-container">
//             <div className="stat-box">
//               <div className="progress-circle-container circle-1">
//                 <svg width="150" height="150" viewBox="0 0 150 150">
//                   <defs>
//                     <linearGradient
//                       id="gradient-1"
//                       x1="0%"
//                       y1="0%"
//                       x2="100%"
//                       y2="0%"
//                     >
//                       <stop offset="0%" stop-color="#4654b5" />
//                       <stop offset="100%" stop-color="#a241b4" />
//                     </linearGradient>
//                   </defs>
//                   <circle
//                     className="progress-circle progress-circle-bg"
//                     cx="75"
//                     cy="75"
//                     r="70"
//                   ></circle>
//                   <circle
//                     className="progress-circle progress-circle-value"
//                     cx="75"
//                     cy="75"
//                     r="70"
//                     data-value="98"
//                     data-suffix="%"
//                   ></circle>
//                 </svg>
//                 <div className="stat-number" data-count="98" data-suffix="%">
//                   0
//                 </div>
//               </div>
//               <div className="stat-label">High Quality Video Production</div>
//             </div>

//             <div className="stat-box">
//               <div className="progress-circle-container circle-2">
//                 <svg width="150" height="150" viewBox="0 0 150 150">
//                   <defs>
//                     <linearGradient
//                       id="gradient-2"
//                       x1="0%"
//                       y1="0%"
//                       x2="100%"
//                       y2="0%"
//                     >
//                       <stop offset="0%" stop-color="#4654b5" />
//                       <stop offset="100%" stop-color="#a241b4" />
//                     </linearGradient>
//                   </defs>
//                   <circle
//                     className="progress-circle progress-circle-bg"
//                     cx="75"
//                     cy="75"
//                     r="70"
//                   ></circle>
//                   <circle
//                     className="progress-circle progress-circle-value"
//                     cx="75"
//                     cy="75"
//                     r="70"
//                     data-value="93"
//                     data-suffix="%"
//                   ></circle>
//                 </svg>
//                 <div className="stat-number" data-count="93" data-suffix="%">
//                   0
//                 </div>
//               </div>
//               <div className="stat-label">
//                 Fine and Filtered Audio Production
//               </div>
//             </div>

//             <div className="stat-box">
//               <div className="progress-circle-container circle-3">
//                 <svg width="150" height="150" viewBox="0 0 150 150">
//                   <defs>
//                     <linearGradient
//                       id="gradient-3"
//                       x1="0%"
//                       y1="0%"
//                       x2="100%"
//                       y2="0%"
//                     >
//                       <stop offset="0%" stop-color="#4654b5" />
//                       <stop offset="100%" stop-color="#a241b4" />
//                     </linearGradient>
//                   </defs>
//                   <circle
//                     className="progress-circle progress-circle-bg"
//                     cx="75"
//                     cy="75"
//                     r="70"
//                   ></circle>
//                   <circle
//                     className="progress-circle progress-circle-value"
//                     cx="75"
//                     cy="75"
//                     r="70"
//                     data-value="96"
//                     data-suffix="%"
//                   ></circle>
//                 </svg>
//                 <div className="stat-number" data-count="96" data-suffix="%">
//                   0
//                 </div>
//               </div>
//               <div className="stat-label">
//                 Unique and best Imagery Creations
//               </div>
//             </div>

//             <div className="stat-box">
//               <div className="progress-circle-container circle-4">
//                 <svg width="150" height="150" viewBox="0 0 150 150">
//                   <defs>
//                     <linearGradient
//                       id="gradient-4"
//                       x1="0%"
//                       y1="0%"
//                       x2="100%"
//                       y2="0%"
//                     >
//                       <stop offset="0%" stop-color="#4654b5" />
//                       <stop offset="100%" stop-color="#a241b4" />
//                     </linearGradient>
//                   </defs>
//                   <circle
//                     className="progress-circle progress-circle-bg"
//                     cx="75"
//                     cy="75"
//                     r="70"
//                   ></circle>
//                   <circle
//                     className="progress-circle progress-circle-value"
//                     cx="75"
//                     cy="75"
//                     r="70"
//                     data-value="94"
//                     data-suffix="%"
//                   ></circle>
//                 </svg>
//                 <div className="stat-number" data-count="94" data-suffix="%">
//                   0
//                 </div>
//               </div>
//               <div className="stat-label">
//                 Appealing & Engaging 3D-Animations
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div
//         style={{
//           zIndex: "999",

//           backgroundColor: "rgb(56, 56, 56)",
//           padding: "60px 80px 10px 80px",
//           position: "relative",
//         }}
//       >
//         <div className="container">
//           <h2
//             style={{ color: "white", width: "100%", textAlign: "center" }}
//             className="title"
//           >
//             Behind the Vision
//           </h2>
//           <div className="cards-container">
//             <div className="card">
//               <div className="card-header">
//                 <h2>How do we do it?</h2>
//               </div>
//               <div className="card-body">
//                 <p className="card-text">
//                   We discovered that permanent innovation is the perfect tool
//                   for business and we keep it sharp by all means. BRANDS are the
//                   main focus of this tool and, on what they are concerned, we
//                   only have one goal in mind: to get them in the spotlight, to
//                   assist them in becoming the talk of the town and let them be
//                   heard loud and clear. Presently, our portfolio talks about
//                   quite a few important international BRANDS.
//                 </p>
//                 {/* <div className="card-features">
//                   <div className="feature-item">
//                     <div className="feature-icon">✓</div>
//                     <div>Personalized learning paths</div>
//                   </div>
//                   <div className="feature-item">
//                     <div className="feature-icon">✓</div>
//                     <div>Interactive content & assessments</div>
//                   </div>
//                   <div className="feature-item">
//                     <div className="feature-icon">✓</div>
//                     <div>Expert mentorship & support</div>
//                   </div>
//                   <div className="feature-item">
//                     <div className="feature-icon">✓</div>
//                     <div>Real-world project experiences</div>
//                   </div>
//                 </div> */}
//                 {/* <a href="#" className="card-button">
//                   Discover Our Method
//                 </a> */}
//               </div>
//             </div>

//             <div className="card">
//               <div className="card-header">
//                 <h2>Open up to our history</h2>
//               </div>
//               <div className="card-body">
//                 <p className="card-text">
//                   We are a member of the group, the largest group of marketing
//                   communication companies in Middle East, offering services in
//                   Media production, Interactive voice recording, Animations,
//                   advertising, Creative, and marketing research , Social Media,
//                   Web Solution.
//                 </p>
//                 {/* <div className="card-features">
//                   <div className="feature-item">
//                     <div className="feature-icon">1</div>
//                     <div>Founded in 2020 by education visionaries</div>
//                   </div>
//                   <div className="feature-item">
//                     <div className="feature-icon">2</div>
//                     <div>Expanded to 50+ countries by 2022</div>
//                   </div>
//                   <div className="feature-item">
//                     <div className="feature-icon">3</div>
//                     <div>Launched advanced AI learning platform</div>
//                   </div>
//                   <div className="feature-item">
//                     <div className="feature-icon">4</div>
//                     <div>Reached 100K trusted students milestone</div>
//                   </div>
//                 </div> */}
//                 {/* <a href="#" className="card-button">
//                   Explore Our Journey
//                 </a> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import { motion } from "framer-motion";
import "./about.css";
import RotatingCube from "../components/RotatingCube";
import TestimonialAboutCard from "../components/about/TestimonialAboutCard";
import JobListings from "../components/about/Job-listening";

const teamMembers = [
  {
    images: [
      "https://images.prismic.io/cuub/e8120090-c8dc-4319-b6db-18b1b13f0f07_CUUB-02.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
      "https://images.prismic.io/cuub/da6975b4-e216-43bf-81d0-3deead0faa08_CUUB-29.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
    ],
    name: "Bohdan Behmat",
    title: "Founder",
  },
  {
    images: [
      "https://images.prismic.io/cuub/e8120090-c8dc-4319-b6db-18b1b13f0f07_CUUB-02.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
      "https://images.prismic.io/cuub/da6975b4-e216-43bf-81d0-3deead0faa08_CUUB-29.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
    ],
    name: "Alina Godunova",
    title: "Chief Executive Officer",
  },
  {
    images: [
      "https://images.prismic.io/cuub/e8120090-c8dc-4319-b6db-18b1b13f0f07_CUUB-02.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
      "https://images.prismic.io/cuub/da6975b4-e216-43bf-81d0-3deead0faa08_CUUB-29.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
    ],
    name: "Alina Godunova",
    title: "Chief Executive Officer",
  },
  {
    images: [
      "https://images.prismic.io/cuub/e8120090-c8dc-4319-b6db-18b1b13f0f07_CUUB-02.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
      "https://images.prismic.io/cuub/da6975b4-e216-43bf-81d0-3deead0faa08_CUUB-29.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
    ],
    name: "Alina Godunova",
    title: "Chief Executive Officer",
  },
  {
    images: [
      "https://images.prismic.io/cuub/e8120090-c8dc-4319-b6db-18b1b13f0f07_CUUB-02.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
      "https://images.prismic.io/cuub/da6975b4-e216-43bf-81d0-3deead0faa08_CUUB-29.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
    ],
    name: "Alina Godunova",
    title: "Chief Executive Officer",
  },
  {
    images: [
      "https://images.prismic.io/cuub/e8120090-c8dc-4319-b6db-18b1b13f0f07_CUUB-02.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
      "https://images.prismic.io/cuub/da6975b4-e216-43bf-81d0-3deead0faa08_CUUB-29.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=428",
    ],
    name: "Alina Godunova",
    title: "Chief Executive Officer",
  },
];


const AboutUsPage: React.FC = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            className="hero-cube"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <RotatingCube />
            <div className="hero-text">
              <motion.h1
                className="hero-title"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                WHO WE ARE
              </motion.h1>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="about-section">
        <div className="about-container">
          <div className="about-sections-links">
            <span id="#about">About us</span>
            <span onClick={() => {
              const section = document.getElementById('ourTeam')
              section?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Team
            </span>
            <span onClick={() => {
              const section = document.getElementById('client-reviews')
              section?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Clients
            </span>
            <span onClick={() => {
              const section = document.getElementById('hiring-about-section')
              section?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Careers
            </span>
          </div>

          <h2 className="about-title ">About us</h2>

          <div className="about-content">
            <h2 className="about-subtitle">Who we are</h2>
            <p className="about-description">
              We are a member of the group, the largest group of marketing
              communication companies in Middle East, offering services in Media
              production, Interactive voice recording, Animations, advertising,
              Creative, and marketing research , Social Media, Web Solution.
            </p>
          </div>

          <div className="services-content">
            <h2 className="services-subtitle">What we offer</h2>
            <div className="services-grid">
              <ul className="services-list">
                <li>
                  <a href="#">Animation</a>
                </li>
                <li>
                  <a href="#">Video Productions</a>
                </li>
                <li>
                  <a href="#">Image Creation</a>
                </li>
              </ul>
              <ul className="services-list">
                <li>
                  <a href="#">Audio Services</a>
                </li>
                <li>
                  <a href="#">Time-lapse Video</a>
                </li>
                <li>
                  <a href="#">Branding</a>
                </li>
              </ul>
            </div>
          </div>
          <h2 id="ourTeam" className="our-team">Our team</h2>
        </div>
        <div className="team-content">
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member">
                <div className="team-image-container">
                  <img
                    src={member.images[0]}
                    alt={`${member.name} primary`}
                    className="team-image team-image-primary"
                  />
                  {member.images.length > 1 && (
                    <img
                      src={member.images[1]}
                      alt={`${member.name} secondary`}
                      className="team-image team-image-secondary"
                    />
                  )}
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-title">{member.title}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="about-container">
          <h2 id="client-reviews" className="our-team">Client testimonials</h2>
        </div>
         <TestimonialAboutCard/>
        <div className="about-container">
          <h2 id="hiring-about-section" className="our-team">We’re hiring</h2>
        </div>
        <JobListings/>
      </div>
    </>
  );
};

export default AboutUsPage;
