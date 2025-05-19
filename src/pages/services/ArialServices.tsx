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
      "We begin every animation project by identifying your objectives, audience, and key messages. Whether it's 2D, 3D, or whiteboard animation, this strategic foundation ensures the visual storytelling aligns with your brand voice and communicates effectively.",
  },
  {
    title: "Positioning",
    description:
      "Based on the strategic groundwork, we define the animation style and tone that best suits your brand. From sleek 3D animations to playful 2D or educational whiteboard styles, we position your message to stand out and engage the intended audience with clarity and purpose.",
  },
  {
    title: "Creative",
    description:
      "This phase transforms your ideas into compelling animations. Our creative team crafts visually rich 2D, 3D, and whiteboard animations using storytelling, motion graphics, and design expertise—bringing your vision to life with stunning results.",
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
      title: "3d Animation",
      description:
        "We are driven by creativity. We create innovative things to help you achieve better results and consolidate yourself in the market.",
    },
    {
      number: "02",
      title: "2D Animation",
      description:
        "We are driven by creativity. We create innovative things to help you achieve better results and consolidate yourself in the market.",
    },
    {
      number: "03",
      title: "White board animation",
      description:
        "We are driven by creativity. We create innovative things to help you achieve better results and consolidate yourself in the market.",
    }
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
      question: "How complicated is the animation process?",
      answer:
        "With years of expertise in animation, we’ve streamlined the process to be as simple as possible for our clients. Our dedicated account managers ensure a seamless experience with personalized support, clear workflows, and regular updates, allowing you to review and provide feedback effortlessly.",
    },
    {
      question: "Is my animation project data safe with you?",
      answer:
        "Absolutely, we prioritize data security. All project files, including animation assets and client information, are encrypted and stored securely, adhering to industry-leading standards and compliance protocols.",
    },
    {
      question: "How many animation projects can you handle at once?",
      answer:
        "Our skilled team of animators and designers enables us to manage multiple animation projects concurrently while maintaining high-quality output and meeting deadlines.",
    },
    {
      question: "What is your turnaround time for animation projects?",
      answer:
        "Turnaround times depend on the complexity and scope of the animation project. We work closely with you to establish realistic timelines and deliver within the agreed schedule.",
    },
    {
      question: "How will I communicate with the animation team during the project?",
      answer:
        "We offer various communication channels, including email, phone, and our project management platform, where you can monitor progress, provide feedback, and collaborate directly with our animation team.",
    },
    {
      question: "What files do I need to provide to start an animation project?",
      answer:
        "The required files vary based on your animation project’s needs, such as storyboards, scripts, or branding assets. Our team will provide detailed guidance on specific requirements during the initial consultation.",
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
