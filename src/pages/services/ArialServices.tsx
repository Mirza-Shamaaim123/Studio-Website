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
      "Arial Services' strategy focuses on delivering advanced aerial solutions through cutting-edge drone technology, ensuring high-precision data, efficient project execution, and tailored services that meet the evolving needs of diverse industries.",
  },
  {
    title: "Positioning",
    description:
      "Arial Services is positioned as a trusted leader in aerial solutions, offering innovative, accurate, and cost-effective drone-based data collection and analysis to empower industries like construction, agriculture, and environmental monitoring.",
  },
  {
    title: "Creative",
    description:
      "Arial Services combines technology and creativity to deliver stunning aerial visuals and innovative data solutions, transforming complex projects into engaging stories and actionable insights across various industries.",
  },
];

const projectImages = [
  "https://images.prismic.io/cuub/Z0R6yq8jQArT1RfO_2.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z0R6zq8jQArT1RfP_3.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z03cqZbqstJ979Up_410TOORAKRDV07GFLIVING&DININGFINALEDIT.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=1867",
];

const crouselContent = {
  mainHeading: "Precision and Excellence in Aerial Services",
  steps: [
    {
      number: "01",
      title: "Infrastructure Inspection",
      description:
        "Infrastructure inspection uses drones to safely and efficiently assess bridges, roofs, towers, and pipelines, identifying issues without costly manual checks.",
    },
    {
      number: "02",
      title: "Thermal Imaging & Analysis",
      description:
        "Thermal imaging detects heat variations, identifying leaks, electrical faults, and moisture issues to prevent damage and improve energy efficiency.",
    },
    {
      number: "03",
      title: "Construction Site Monitoring",
      description:
        "Construction site monitoring uses drones to track progress, ensure safety, measure volumes, and provide real-time aerial updates for efficient management.",
    }
  ],
};

const crouselImages = [
  "/images/Servicesimages/01 ArialServices.avif", // Building image for step 1
  "/images/Servicesimages/02 ArialServices.avif", // Different building for step 2
  "/images/Servicesimages/03 ArialServices.avif", // Interior visualization for step 3
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop", // Final delivery visualization for step 4
];

const faqData = [
    {
      question: " What services does Arial Services provide?",
      answer:
        "Arial Services specializes in aerial data collection, drone surveying, geospatial analysis, mapping, and remote sensing for industries such as construction, agriculture, and infrastructure",
    },
    {
      question: " What industries do you serve?",
      answer:
        "We serve a wide range of industries including agriculture, real estate, urban planning, construction, mining, and environmental monitoring.",
    },
    {
      question: "What equipment or technology do you use?",
      answer:
        "We use high-resolution drones, LiDAR, GIS tools, and advanced sensors to ensure accurate and efficient data collection.",
    },
    {
      question: " How accurate is your aerial data?",
      answer:
        "Our data meets industry-grade accuracy standards. We provide detailed reports and maps with precise coordinates tailored to project requirements.",
    },
    {
      question: "Can I request custom data or specific formats?",
      answer:
        "Yes, we deliver data in various formats including GIS, CAD, and 3D models, customized to meet your needs.",
    },
    {
      question: " How do I request a quote or start a project?",
      answer:
        "You can contact us via our website, email, or phone. Provide your project details, and we’ll get back with a customized proposal.",
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

function ArialServices() {
  return (
    <>
      <ServicesHeroSection
        backgroundImageUrl="https://images.prismic.io/cuub/f2464877-c4f5-462a-8d2a-93a976bc7d71_CREMORNE%20V04.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=1920"
        title="Arial Services"
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

export default ArialServices
