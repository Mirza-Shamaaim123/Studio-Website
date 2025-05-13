import React from 'react'
import ServicesHeroSection from "./_components/ServicesHeroSection";
import ServiceThreeCards from "./_components/ServiceThreeCards";
import ServicesProject from "./_components/ServicesProjects";
import ServicesScrollSection from "./_components/ServicesCrouselSection";
import ServicesFAQ from "./_components/ServicesFaqs";
import PartnersSection from "./_components/ServicesPartner";
import ServicesBoxSection from "./_components/ServicesBoxSection";
const cardData = [
  {
    title: "Strategy",
    description:
      "We begin by understanding the project's duration, environment, and visual goals. This helps us determine the right camera setup, shooting intervals, and storage needs to capture your progress effectively over time.",
  },
  {
    title: "Positioning",
    description:
      "Based on the site layout and project scope, we identify optimal camera angles and mounting solutions. Our team ensures long-term stability, weatherproofing, and uninterrupted power for consistent footage capture.",
  },
  {
    title: "Creative",
    description:
      "Once captured, we transform months of footage into a compelling, high-quality time-lapse video. With editing, branding overlays, and optional music or narration, your final video tells a powerful visual story of progress.",
  },
];

const projectImages = [
  "https://images.prismic.io/cuub/Z0R6yq8jQArT1RfO_2.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z0R6zq8jQArT1RfP_3.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z03cqZbqstJ979Up_410TOORAKRDV07GFLIVING&DININGFINALEDIT.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=1867",
];

const crouselContent = {
  mainHeading: "3D visualisation has never been easier",
  steps: [
    {
      number: "01",
      title: "Fill the brief",
      description:
        "Send us a completed short brief along with details about your project. It will help us formulate an offer for you.",
    },
    {
      number: "02",
      title: "Review the proposal",
      description:
        "We'll send you a detailed proposal with timeline and cost estimates for your project.",
    },
    {
      number: "03",
      title: "Provide feedback",
      description:
        "Review our initial concepts and provide feedback to ensure we're aligned with your vision.",
    },
    {
      number: "04",
      title: "Receive final delivery",
      description:
        "Get your high-quality 3D visualizations ready for your marketing and presentation needs.",
    },
  ],
};

const crouselImages = [
  "https://images.prismic.io/cuub/a0abcba2-5a92-4b45-b3ad-6ef79e5a73fa_DOCKLANDS-DR-V03-PHOTOMONTAGE-FINAL.jpg?ixlib=gatsbyFP&auto=compress,format&fit=max&q=75&w=960", // Building image for step 1
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop", // Different building for step 2
  "https://images.unsplash.com/photo-1481026469463-66327c86e544?q=80&w=2424&auto=format&fit=crop", // Interior visualization for step 3
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop", // Final delivery visualization for step 4
];


const faqData = [
  {
    question: "What is a time-lapse video and how is it used?",
    answer:
      "A time-lapse video is a visual technique where frames are captured at set intervals and then played back at a faster speed. It’s ideal for showcasing long-term projects like construction or industrial processes in a few minutes.",
  },
  {
    question: "How long can a time-lapse recording run?",
    answer:
      "We can capture time-lapse footage over days, weeks, or even months. Our equipment is designed for long-term deployment with weather protection and remote monitoring.",
  },
  {
    question: "What kind of projects are suitable for time-lapse?",
    answer:
      "Time-lapse is perfect for construction projects, industrial manufacturing, event setups, machinery installations, and any process that evolves over time.",
  },
  {
    question: "Do you provide camera setup and maintenance on-site?",
    answer:
      "Yes, our team handles camera installation, angle planning, and regular site visits (if required). We ensure uninterrupted capture throughout the timeline.",
  },
  {
    question: "What do I receive at the end of the project?",
    answer:
      "You'll receive a professionally edited video showing your project in motion, complete with branding, text overlays, background music, and any specific highlights you request.",
  },
  {
    question: "Is it possible to monitor the time-lapse camera remotely?",
    answer:
      "Yes, we offer remote monitoring solutions so you can check the camera status, preview shots, and request changes without visiting the site physically.",
  },
];


  const handleSendMessage = () => {
    console.log("Send message clicked")
    // Implement your send message functionality here
  }

  const handleScheduleCall = () => {
    console.log("Schedule call clicked")
    // Implement your schedule call functionality here
  }
    const partnersData = [
    { name: "KFK", logo: "/images/brands/brand-1.avif", alt: "KFK Logo" },
    { name: "DKO", logo: "/images/brands/brand-2.avif", alt: "DKO Logo" },
    { name: "Milieu", logo: "/images/brands/brand-3.avif", alt: "Milieu Logo" },
    { name: "Assemble", logo: "/images/brands/brand-4.avif", alt: "Assemble Logo" },
    { name: "PVA", logo: "/images/brands/brand-5.avif", alt: "PVA Logo" },
    { name: "FIELDWORK", logo: "/images/brands/brand-6.avif", alt: "FIELDWORK Logo" },
    { name: "MAIN PROJECTS", logo: "/images/brands/brand-7.avif", alt: "MAIN PROJECTS Logo" },
    { name: "MHNDU", logo: "/images/brands/brand-8.avif", alt: "MHNDU Logo" },
    { name: "PS", logo: "/images/brands/brand-9.avif", alt: "PS Logo" },
    { name: "Eldridge Anderson", logo: "/images/brands/brand-10.avif", alt: "Eldridge Anderson Logo" },
];
const TimeLapseVideoServices = () => {
  return (
    <>
      <ServicesHeroSection
        backgroundImageUrl="https://images.prismic.io/cuub/f2464877-c4f5-462a-8d2a-93a976bc7d71_CREMORNE%20V04.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=1920"
        title="Time-Lapse Services"
      />
      <ServiceThreeCards cards={cardData} />
      <ServicesProject projectImages={projectImages} />
      <ServicesScrollSection content={crouselContent} images={crouselImages} />
       <PartnersSection partners={partnersData} />
      <ServicesFAQ faqItems={faqData} onSendMessage={handleSendMessage} onScheduleCall={handleScheduleCall} />
      <ServicesBoxSection/>
    </>
  )
}

export default TimeLapseVideoServices