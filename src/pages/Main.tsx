import React from "react";
import AnimatedVerticalLine from "../components/LineAnimation";
import MainBoxAnimation from "../components/MainBoxAnimation";
import ServicesBoxSection from "./services/_components/ServicesBoxSection";
import TestimonialCard from "../components/about/TestimonialAboutCard";
import ServicesAnimation from "../components/ServicesAnimation";
import AnimatedLine from "../components/LineAnimation";

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
  <source src="/home-video.mp4" type="video/mp4" />
</video>

      </section>

      <MainBoxAnimation />
      <ServicesAnimation />
      <section className="home-page-testomonial block h-[100vh]">
        <TestimonialCard />
      </section>

      <ServicesBoxSection />
      <AnimatedLine/>
    </div>
  );
}
