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
      "Our time-lapse strategy combines durable equipment, remote monitoring, and expert editing to deliver compelling visual narratives that document progress, engage stakeholders, and elevate your project’s visibility and value.",
  },
  {
    title: "Positioning",
    description:
      "Positioned at the intersection of technology and storytelling, our time-lapse services deliver impactful visual documentation that enhances project transparency, boosts client engagement, and reinforces your brand’s commitment to excellence.",
  },
  {
    title: "Creative",
    description:
      "We craft visually compelling time-lapse content that transforms ordinary progress into captivating stories—blending motion, rhythm, and detail to create memorable visuals that resonate across digital, broadcast, and client presentations.",
  },
];

const projectImages = [
  "https://images.prismic.io/cuub/Z0R6yq8jQArT1RfO_2.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z0R6zq8jQArT1RfP_3.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z03cqZbqstJ979Up_410TOORAKRDV07GFLIVING&DININGFINALEDIT.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=1867",
];

const crouselContent = {
  mainHeading: "Watch Time Unfold",
  steps: [
    {
      number: "01",
      title: "4K & HD Video Production",
      description:
        "Crisp, high-resolution time-lapse videos tailored for professional presentation or marketing use.",
    },
    {
      number: "02",
      title: "Short-Term Time-Lapse",
      description:
        "Capture fast-paced events or installations in stunning detail with short-term time-lapse—perfect for marketing, promotions, or live activations.",
    },
    {
      number: "03",
      title: "Project Highlight Reels",
      description:
        "Showcase your project’s key moments with dynamic highlight reels—crafted to impress stakeholders, clients, and audiences with powerful visuals.",
    },
    {
      number: "04",
      title: "Solar-Powered Systems",
      description:
        "Reliable, eco-friendly solar-powered camera systems—ideal for remote sites, ensuring uninterrupted time-lapse capture without the need for external power.",
    },
  ],
};

const crouselImages = [
  "/images/Servicesimages/01 TimeLaspe.avif", // Building image for step 1
  "/images/Servicesimages/02 TimeLaspe.avif", // Different building for step 2
  "/images/Servicesimages/03 TimeLaspe.avif", // Interior visualization for step 3
  "/images/Servicesimages/04 TimeLaspe.avif", // Final delivery visualization for step 4
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