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
      "Our graphic design strategy blends creativity with brand goals—crafting visuals that communicate clearly, inspire engagement, and strengthen identity across digital, print, and social platforms for consistent brand impact.",
  },
  {
    title: "Positioning",
    description:
      "Positioned as a creative partner, our graphic design services deliver visually striking, brand-aligned solutions that elevate communication, enhance recognition, and set you apart in competitive digital and print spaces.",
  },
  {
    title: "Creative",
    description:
      "We turn ideas into visual stories—blending color, typography, and layout to create impactful designs that captivate audiences, reinforce brand identity, and drive lasting emotional connections.",
  },
];

const projectImages = [
  "https://images.prismic.io/cuub/Z0R6yq8jQArT1RfO_2.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z0R6zq8jQArT1RfP_3.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z03cqZbqstJ979Up_410TOORAKRDV07GFLIVING&DININGFINALEDIT.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=1867",
];

const crouselContent = {
  mainHeading: "Professional Visual Design Solutions",
  steps: [
    {
      number: "01",
      title: "Mobile App UI/UX Design",
      description:
        "Intuitive, user-centered mobile app design that enhances functionality, boosts engagement, and delivers a seamless, visually appealing user experience.",
    },
    {
      number: "02",
      title: "Portfolio Web Site Design: Landing Page",
      description:
        "Striking, personalized landing pages that showcase your work, capture attention, and leave a lasting impression on every visitor.",
    },
    {
      number: "03",
      title: "Career Web Site Design",
      description:
        "Professional career websites designed to highlight skills, experience, and achievements—crafted to impress employers and support job-seeking success.",
    },
   
    
  ],
};

const crouselImages = [
  "/images/Servicesimages/01 GrapicDesgin.webp", // Building image for step 1
  "/images/Servicesimages/02 GrapicDesgin.webp", // Different building for step 2
  "/images/Servicesimages/03 GrapicDesgin.webp", // Interior visualization for step 3
  "/images/Servicesimages/04 AudioServices.avif", // Final delivery visualization for step 4
];


 const faqData = [
  {
    question: "What types of graphic design services do you offer?",
    answer:
      "We offer logo design, branding, social media graphics, print materials, packaging, UI/UX design, and more. Custom projects are also welcome!",
  },
  {
    question: "How long does a graphic design project take?",
    answer:
      "Timelines vary depending on the project’s complexity. Simple designs may take 2–3 days, while full branding packages can take 1–2 weeks.",
  },
  {
    question: " How many revisions are included?",
    answer:
      "Most packages include 2–3 rounds of revisions. We're flexible and work with you to ensure you're satisfied with the final design.",
  },
  {
    question: "What if I don’t like the initial designs?",
    answer:
      "We’ll revisit your brief and make the necessary changes. Your feedback is key to helping us refine and deliver the right visual solution.",
  },
  {
    question: "What file formats will I receive?",
    answer:
      "You’ll receive high-resolution files in formats like JPG, PNG, PDF, and source files (AI, PSD, or SVG) depending on the project needs.",
  },
  {
    question: "How do I get started?",
    answer:
      "Just contact us with your project details. We'll schedule a consultation, discuss your vision, and provide a custom quote and timeline.",
  },
]


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

function GrapicDesgining() {
  return (
    <>
     <ServicesHeroSection
        backgroundImageUrl="https://images.prismic.io/cuub/f2464877-c4f5-462a-8d2a-93a976bc7d71_CREMORNE%20V04.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=1920"
        title="Grapic Desgining"
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

export default GrapicDesgining