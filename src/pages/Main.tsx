import React from "react";
import AnimatedVerticalLine from "../components/LineAnimation";
import MainBoxAnimation from "../components/MainBoxAnimation";
import ServicesBoxSection from "./services/_components/ServicesBoxSection";
import TestimonialCard from "../components/about/TestimonialAboutCard";
import ServicesAnimation from "../components/ServicesAnimation";

export default function Main() {
  
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

      <MainBoxAnimation/>
      <ServicesAnimation/>
      <section className="home-page-testomonial block h-[100vh]" >
<TestimonialCard/>
      </section>
      
      <ServicesBoxSection/>
    </div>
  );
}
