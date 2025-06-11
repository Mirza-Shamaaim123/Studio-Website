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
      "Our UI/UX design strategy focuses on user-centered research, intuitive navigation, and visual harmony to create seamless, engaging digital experiences that align with business goals and delight users at every touchpoint.",
  },
  {
    title: "Positioning",
    description:
      "We position our UI/UX design services as the bridge between user needs and business goals, delivering intuitive, visually compelling solutions that enhance usability, engagement, and customer satisfaction across digital platforms.",
  },
  {
    title: "Creative",
    description:
      "Our UI/UX design creative blends innovation with functionality, crafting visually striking, user-focused interfaces that tell compelling stories, drive interaction, and create memorable digital experiences tailored to your brand.",
  },
];

const projectImages = [
  "https://images.prismic.io/cuub/Z0R6yq8jQArT1RfO_2.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z0R6zq8jQArT1RfP_3.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z03cqZbqstJ979Up_410TOORAKRDV07GFLIVING&DININGFINALEDIT.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=1867",
];

const crouselContent = {
  mainHeading: "UI/UX Design that Delivers Impact",
  steps: [
    {
      number: "01",
      title: "Web App & Website Design",
      description:
        "We design responsive, user-friendly web apps and websites that combine aesthetics with functionality to deliver seamless, engaging digital experiences.",
    },
    {
      number: "02",
      title: "Design Systems & Style Guides",
      description:
        "We create scalable design systems and style guides to ensure consistency, streamline development, and maintain brand identity across all digital platforms.",
    },
    {
      number: "03",
      title: "UX Audit & Heuristic Evaluation",
      description:
        "We conduct UX audits and heuristic evaluations to identify usability issues, improve user experience, and enhance overall product performance.",
    }
  ],
};

const crouselImages = [
  "/images/Servicesimages/01 UI.jpg", // Building image for step 1
  "/images/Servicesimages/02 UI.avif", // Different building for step 2
  "/images/Servicesimages/03 UI.jpg", // Interior visualization for step 3
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop", // Final delivery visualization for step 4
];

const faqData = [
    {
      question: "What is the difference between UI and UX design?",
      answer:
        "UI (User Interface) focuses on the look and feel of a product, while UX (User Experience) is about how the product works and how users interact with it.",
    },
    {
      question: "Why is UI/UX design important for my business?",
      answer:
        "Good UI/UX increases user satisfaction, improves engagement, boosts conversions, and builds brand loyalty—ultimately helping you achieve your business goals.",
    },
    {
      question: "How long does a UI/UX project usually take?",
      answer:
        "It depends on the scope and complexity, but most projects range from 2 to 8 weeks. We provide a clear timeline after the initial consultation.",
    },
    {
      question: "Can you redesign my existing app or website?",
      answer:
        "Yes! We specialize in refreshing outdated interfaces and improving usability through thoughtful redesigns based on user data and current design trends.",
    },
    {
      question: "Do you offer usability testing services?",
      answer:
        "Yes, we conduct usability testing to validate design decisions and uncover areas for improvement before and after development.",
    },
    {
      question: "What tools do you use for UI/UX design?",
      answer:
        "We commonly use tools like Figma, Adobe XD, Sketch, and InVision for design, prototyping, and collaboration.",
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
]

function UIDesgining() {
  return (
    <>
      <ServicesHeroSection
        backgroundImageUrl="https://images.prismic.io/cuub/f2464877-c4f5-462a-8d2a-93a976bc7d71_CREMORNE%20V04.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=1920"
        title="UI/UX Desgining"
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

export default UIDesgining