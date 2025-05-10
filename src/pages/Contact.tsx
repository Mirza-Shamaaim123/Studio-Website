// import React, { useEffect, useState } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useSpring,
//   color,
// } from "framer-motion";
// import { TfiEmail } from "react-icons/tfi";
// import { MdOutlinePhone } from "react-icons/md";
// import { IoLocationOutline } from "react-icons/io5";
// import "./contact.css";
// import { GoMail } from "react-icons/go";

// const ContactUs = () => {
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
//   const containerStyle: React.CSSProperties = {
//     display: "flex",
//     flexWrap: "wrap",
//     minHeight: "100vh",
//     zIndex: "999",
//     position: "relative",
//     backgroundColor: "rgb(66, 66, 66)",
//     padding: "100px",
//     borderRadius: "30px 30px 0px 0px",
//     justifyContent: "space-between",
//     alignItems: "center",
//     boxSizing: "border-box",
//   };

//   const formSectionStyle = {
//     background: "white",
//     padding: "40px",
//     margin: "10px",
//     marginTop: "40px",
//     borderRadius: "10px",
//     boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//     width: "600px",
//   };

//   const inputStyle = {
//     width: "100%",
//     padding: "15px",
//     marginBottom: "20px",
//     border: "1px solid #ccc",
//     borderRadius: "5px",
//     fontSize: "16px",
//     boxSizing: "border-box",
//   };

//   const buttonStyle = {
//     background: "linear-gradient(310deg, #4654b5 40%, #a241b4 100%)",
//     color: "#fff",
//     padding: "15px 30px",
//     fontSize: "16px",
//     border: "none",
//     borderRadius: "5px",
//     cursor: "pointer",
//     width: "100%",
//     marginTop: "10px",
//   };

//   const headingStyle = {
//     marginBottom: "30px",
//     fontSize: "40px",
//     fontWeight: "600",
//     color:
//       "linear-gradient(310deg,rgb(70, 84, 181) 40%,rgb(162, 65, 180) 100%)",
//   };

//   const infoItemStyle = {
//     marginBottom: "20px",
//     fontSize: "18px",
//     display: "flex",
//     alignItems: "center",
//     gap: "10px",
//   };

//   return (
//     <>
//       <section
//         style={{
//           borderRadius: "30px 30px 0px 0px",
//         }}
//         className=" w-full  pt-32   w-full h-screen flex justify-center text-white text-4xl"
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
//                 <h1 className="text-6xl font-bold w-[800px]">GET IN TOUCH</h1>
//               </motion.div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//       <div
//         style={{
//           zIndex: "999",
//           height: "1500px",
//           backgroundColor: "rgb(214, 212, 212)",
//           padding: "60px 80px 10px 80px",
//           borderRadius: "30px 30px 0px 0px",
//           position: "sticky",
//           top: "0",
//         }}
//       >
//         <h2
//           style={{
//             ...headingStyle,
//             background: "linear-gradient(to right, #4654b5, #a241b4)", // blue-500 to purple-600
//             WebkitBackgroundClip: "text",
//             WebkitTextFillColor: "transparent",
//             fontSize: "60px",
//             textAlign: "center",
//           }}
//         >
//           How we Can Help?
//         </h2>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             flexWrap: "wrap",
//             gap: "30px",
//           }}
//         >
//           <div className="contact-card">
//             <div className="icon-box">
//               <MdOutlinePhone
//                 style={{ fontSize: "30px" }}
//                 className="text-lg"
//               />
//             </div>
//             <div
//               style={{ width: "100%", textAlign: "center" }}
//               className="contact-info"
//             >
//               +966 550809669
//             </div>
//             <div className="contact-details">
//               We answer by phone from Saturday to Thursday 8 am to 6 pm
//             </div>
//           </div>
//           <div className="contact-card">
//             <div className="icon-box">
//             <GoMail
//                 style={{ fontSize: "30px" }}
//                 className="text-lg"
//               />
//             </div>
//             <div
//               style={{ width: "100%", textAlign: "center" }}
//               className="contact-info"
//             >
//               hello@elitedstudio.com
//             </div>
//             <div className="contact-details">
//               We will respond to your email within 8 hours on business days.
//             </div>
//           </div>
//           <div className="contact-card">
//             <div className="icon-box">
//             <IoLocationOutline
//                 style={{ fontSize: "30px" }}
//                 className="text-lg"
//               />
//             </div>
//             <div className="contact-info">
//               306 , 2nd Floor NIC Baladiya Street, Jeddah 23447
//             </div>
//             <div className="contact-details">Our Head Office</div>
//           </div>
//         </div>
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             flexWrap: "wrap",
//             gap: "30px",
//             marginTop: "30px",
//           }}
//         >
//           <div className="contact-card">
//             <div className="icon-box">
//             <IoLocationOutline
//                 style={{ fontSize: "30px" }}
//                 className="text-lg"
//               />
//             </div>
//             <div className="contact-info">
//               Prince Hamood Street، Madinat Al Umal, Al Khobar 31952
//             </div>
//             <div className="contact-details">Office-II</div>
//           </div>
//           <div className="contact-card">
//             <div className="icon-box">
//             <IoLocationOutline
//                 style={{ fontSize: "30px" }}
//                 className="text-lg"
//               />
//             </div>
//             <div className="contact-info">
//               Talhah Ibn Obaidullah Rd, Haroon Al Rasheed Road, Riyadh 14253
//             </div>
//             <div className="contact-details">Office-III</div>
//           </div>
//         </div>
//       </div>
//       <div style={containerStyle}>
//         <div></div>

//         <div style={{ width: "50%", marginTop: "30px" }} className="">
//           <h2
//             style={{
//               ...headingStyle,
//               color: "white",

//               fontSize: "60px",
//             }}
//           >
//             Reach Now
//           </h2>
//           <div style={{ width: "80%" }} className="">
//             <p
//               style={{ fontSize: "20px", color: "white" }}
//               className="text-lg  text-start  mx-auto mt-8"
//             >
//               Whether you have a question about features, pricing, need a demo,
//               or anything else, our team is ready to answer all your questions.
//               We're passionate about collaborating with innovative minds and
//               helping businesses grow through technology and design. Fill out
//               the form below or drop us a message—let's start something great
//               together.
//             </p>
//           </div>
//           <div style={{ ...infoItemStyle, marginTop: "20px", color: "white" }}>
//             <div
//               style={{
//                 backgroundColor: "white",
//                 width: "40px",
//                 height: "40px",
//               }}
//               className="flex justify-center items-center rounded-full bg-white"
//             >
//               <MdOutlinePhone
//                 style={{ fontSize: "20px", color: "black" }}
//                 className="text-lg"
//               />
//             </div>
//             +966 550809669
//           </div>

//           <div style={{ ...infoItemStyle, color: "white" }}>
//             <div
//               style={{
//                 backgroundColor: "white",
//                 width: "40px",
//                 height: "40px",
//               }}
//               className="flex justify-center items-center rounded-full bg-white"
//             >
//               <TfiEmail style={{ fontSize: "20px", color: "black" }} />
//             </div>
//             hello@elitedstudio.com
//           </div>
//           <div style={{ ...infoItemStyle, color: "white" }}>
//             <div
//               style={{
//                 backgroundColor: "white",
//                 width: "40px",
//                 height: "40px",
//               }}
//               className="flex justify-center items-center rounded-full bg-white"
//             >
//               <IoLocationOutline style={{ fontSize: "20px", color: "black" }} />
//             </div>{" "}
//             306 , 2nd Floor NIC Baladiya Street, Jeddah 23447
//           </div>
//         </div>
//         {/* Form Section */}
//         <div style={formSectionStyle}>
//           <h2 style={headingStyle}>Send Us a Message</h2>
//           <form>
//             <input
//               type="text"
//               name="name"
//               placeholder="Your Name"
//               required
//               style={{
//                 ...inputStyle,
//                 resize: "vertical",
//                 boxSizing: "border-box",
//               }}
//             />
//             <input
//               type="email"
//               name="email"
//               placeholder="Your Email"
//               required
//               style={{
//                 ...inputStyle,
//                 resize: "vertical",
//                 boxSizing: "border-box",
//               }}
//             />
//             <textarea
//               name="message"
//               placeholder="Your Message"
//               required
//               rows={5}
//               style={{
//                 ...inputStyle,
//                 resize: "vertical",
//                 boxSizing: "border-box",
//               }}
//             ></textarea>
//             <button type="submit" style={buttonStyle}>
//               Send Message
//             </button>
//           </form>
//         </div>

//         {/* Info Section */}
//       </div>
//     </>
//   );
// };

// export default ContactUs;
// <div style={{ display: "flex", justifyContent: "space-between", gap: "30px" }}>
//   <div className="contact-card">
//     <div className="icon-box">
//       <MdOutlinePhone style={{ fontSize: "30px" }} className="text-lg" />
//     </div>
//     <div className="contact-info">+966 550809669</div>
//     <div className="contact-details">
//       We answer by phone from Saturday to Thursday 8 am to 6 pm
//     </div>
//   </div>
//   <div className="contact-card">
//     <div className="icon-box">
//       <MdOutlinePhone style={{ fontSize: "30px" }} className="text-lg" />
//     </div>
//     <div className="contact-info">+966 550809669</div>
//     <div className="contact-details">
//       We answer by phone from Saturday to Thursday 8 am to 6 pm
//     </div>
//   </div>
// </div>;

import React from "react";
import "./contact.css";

export default function ContactPage() {
  return (
    <div className="contact-container">
      <div className="main">
        <div className="contact-left">
          <div className="contact-header">
            <h1>Contact us</h1>
            <p className="subheading">PROJECTS & GENERAL INQUIRIES</p>
            <div className="general-inquiries">
              <p>
                <a className="red-hover" href="tel:+19715012706">
                  +1 971 501 27 06
                </a>
              </p>
              <p>
                <a className="red-hover" href="mailto:hello@cuubstudio.com">
                  hello@cuubstudio.com
                </a>
              </p>
            </div>
          </div>

          <div className="contact-sections">
            <div>
              <p>Job applications</p>
              <p>
                <a className="red-hover" href="mailto:hr@cuubstudio.com">
                  hr@cuubstudio.com
                </a>
              </p>
            </div>
            <div>
              <p>Marketing & PR</p>
              <p>
                <a
                  className="red-hover"
                  href="mailto: marketing@cuubstudio.com"
                >
                  marketing@cuubstudio.com
                </a>
              </p>
            </div>
          </div>

          <div className="team">
            <div className="member">
              <div className="img">
                <img
                  src="https://images.prismic.io/cuub/da6975b4-e216-43bf-81d0-3deead0faa08_CUUB-29.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=286"
                  alt="Bohdan Behmat"
                />
              </div>
              <div className="member-info">
                <p className="name">Bohdan Behmat</p>
                <p className="role">Founder</p>
                <p className="email">
                  <a className="red-hover" href="mailto: bohdan@cuubstudio.com">
                    bohdan@cuubstudio.com
                  </a>
                </p>
                <p className="linkedin">LinkedIn</p>
              </div>
            </div>
            <div className="member">
              <div className="img">
                <img
                  src="https://images.prismic.io/cuub/ZtayArzzk9ZrW5mB_%D0%90%D0%BB%D1%96%D0%BD%D0%B0-1.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=286"
                  alt="Alina Godunova"
                />
              </div>
              <div className="member-info">
                <p className="name">Alina Godunova</p>
                <p className="role">Chief Executive Officer</p>
                <p>
                  <a className="red-hover" href="mailto:alina@cuubstudio.com">
                    alina@cuubstudio.com
                  </a>
                </p>
                <p className="linkedin">LinkedIn</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          <h1>Reach out now</h1>
          <form>
            <input type="text" placeholder="Your name" />
            <input type="email" placeholder="Your email" />
            <textarea placeholder="Your message"></textarea>
            <button type="submit">
              <span className="red-box"></span>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
