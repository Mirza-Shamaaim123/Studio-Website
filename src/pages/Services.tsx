import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";
import "./services.css";
import { SlTrophy } from "react-icons/sl";
import { IoDiamondOutline } from "react-icons/io5";
import { ImFilm } from "react-icons/im";
import { GoDeviceCameraVideo } from "react-icons/go";
import { SlMicrophone } from "react-icons/sl";
import { SlCamera } from "react-icons/sl";
import { GoStack } from "react-icons/go";
import { LiaChartBarSolid } from "react-icons/lia";
import { SlBulb } from "react-icons/sl";

const Services = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prev) => ({
        x: prev.x + 1.2,
        y: prev.y + 1.5,
        z: prev.z + 0.8,
      }));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section
        style={{
          borderRadius: "30px 30px 0px 0px",
        }}
        className="  w-full  pt-32   w-full h-screen flex justify-center text-white text-4xl"
      >
        <div className="relative w-full h-full flex justify-center items-start">
          {/* Container that holds both the box and text, making them stick together */}
          <motion.div
            className="relative w-[800px] h-[800px] flex items-center justify-center"
            style={{
              position: "sticky",
              top: "0%",
              opacity: 1,
            }}
          >
            {/* 3D Box */}
            <motion.div
              className="relative w-[300px] h-[300px]"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg) rotateZ(${rotation.z}deg)`,
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
                <h1 className="text-6xl font-bold w-[800px]">WHAT WE DO</h1>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <div
        style={{
          zIndex: "999",

          backgroundColor: "rgb(214, 212, 212)",
          padding: "60px 80px 10px 80px",
          borderRadius: "30px 30px 0px 0px",
          position: "relative",
        }}
      >
        <div className="container">
          <h1 className="title w-full text-center">Our Expertise</h1>
          <div className="cards-container">
            <div className="card">
              <div
                style={{ display: "flex", alignItems: " center", gap: "8px" }}
                className="card-header "
              >
                <SlTrophy style={{ fontSize: "34px" }} />
                <h2> Tradition</h2>
              </div>
              <div className="card-body">
                <p className="card-text">
                  EDS Media production company has provided professional video
                  production, animations, Timelapse services to advertisement
                  agencies, corporations, government agencies, non-profit
                  organizations, and businesses large and small.
                </p>
                {/* <div className="card-features">
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div>Personalized learning paths</div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div>Interactive content & assessments</div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div>Expert mentorship & support</div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-icon">✓</div>
                    <div>Real-world project experiences</div>
                  </div>
                </div> */}
              </div>
            </div>
            <div className="card">
              <div
                style={{ display: "flex", alignItems: " center", gap: "8px" }}
                className="card-header "
              >
                <IoDiamondOutline style={{ fontSize: "34px" }} />
                <h2>Innovation</h2>
              </div>
              <div className="card-body">
                <p className="card-text">
                  Our portfolio includes a highly effective and influential
                  corporate video for events, web, marketing, training, and
                  medical.
                </p>
              </div>
            </div>

            <div className="card">
              <div
                style={{ display: "flex", alignItems: " center", gap: "8px" }}
                className="card-header "
              >
                <ImFilm style={{ fontSize: "34px" }} />
                <h2>Storytelling</h2>
              </div>
              <div className="card-body">
                <p className="card-text">
                  At Elite Design Studio, every frame we create is driven by a
                  powerful narrative. Whether it's a promotional video,
                  animation, or still image, we blend visuals with purpose to
                  tell stories that connect, inspire, and endure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          zIndex: "999",

          backgroundColor: "rgb(56, 56, 56)",
          padding: "60px 80px 10px 80px",
          position: "relative",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
            }}
          >
            <h2 style={{ color: "white" }} className="title">
              Our Services
            </h2>
            <p className="section-subtitle">
              From concept to creation, we bring ideas to life through
              captivating visuals.
            </p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <GoDeviceCameraVideo className="service-icon" />
              <h3 className="service-title">Video Production</h3>
              <p className="service-description">
                We build professional high quality video in order to engage your
                audience & optimized for the most popular platform.
              </p>
              {/* <a href="#" className="learn-more">
                LEARN MORE
                <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" />
                </svg>
              </a> */}
            </div>

            <div className="service-card">
            <SlMicrophone className="service-icon" />
             
              <h3 className="service-title">Audio Production</h3>
              <p className="service-description">
                We provide customized solutions to fulfil the audio needs of
                immersive interactive and linear content creators.
              </p>
            </div>

            <div className="service-card">
            <SlCamera  className="service-icon" />
           
              <h3 className="service-title">Imagery Creation</h3>
              <p className="service-description">
                Need photos or images to use on your website or share on your
                social media site? Let EDS create photos and images for your
                company.
              </p>
            </div>

            <div className="service-card">
            <GoStack className="service-icon" />
              
              <h3 className="service-title">Event Coverage</h3>
              <p className="service-description">
                Our experienced team of event videographers will capture the
                essential moments and special details, conduct on-camera
                interviews
              </p>
            </div>

            <div className="service-card">
            <LiaChartBarSolid className="service-icon" />
            
              <h3 className="service-title">TV-Commercials</h3>
              <p className="service-description">
                We write scripts, scout the locations, assign the professional
                film crews and organize auditions for skilled actors that will
                make your videos better.
              </p>
            </div>

            <div className="service-card">
            <SlBulb className="service-icon" />
             
              <h3 className="service-title">Brand Creation</h3>
              <p className="service-description">
                Your brand words will help influence your decisions. We create
                your brand thinking about your target audience using design
                techniques.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
