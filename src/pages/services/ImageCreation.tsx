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
      "We begin by understanding the visual goals of your project — whether it's brand photography, product showcase, or 3D renderings. This planning ensures each image serves a clear purpose and supports your brand narrative.",
  },
  {
    title: "Positioning",
    description:
      "Based on the project requirements, we decide on the most effective approach — be it a corporate setting, on-site event, studio product shoot, or virtual environment for render images — ensuring your visuals stand out where they matter.",
  },
  {
    title: "Creative",
    description:
      "We execute the shoot or rendering with precision, creativity, and attention to detail. Through lighting, angles, composition, and post-editing, we craft images that are not just beautiful but also strategically effective.",
  },
]


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
    question: "What types of photography do you offer?",
    answer:
      "We provide corporate photography, event coverage, product shoots, architectural mapping, and rendered image services tailored to business and marketing needs.",
  },
  {
    question: "Do you offer on-location shooting?",
    answer:
      "Yes, we cover both on-site and in-studio photography based on your requirements. For corporate and event shoots, we travel to your location with full setup.",
  },
  {
    question: "What is included in a product shoot?",
    answer:
      "Our product photography includes multiple angles, high-resolution editing, background cleanup, and delivery in optimized formats for web and print.",
  },
  {
    question: "Can you provide render images or 3D visuals?",
    answer:
      "Yes, we create high-quality render images using industry-standard tools — perfect for products, architecture, or visual mockups before physical production.",
  },
  {
    question: "What’s your turnaround time for image delivery?",
    answer:
      "Turnaround time depends on the scope, but most photo sessions are delivered within 3–7 business days. Render images may take a little longer based on complexity.",
  },
  {
    question: "Will I get the raw files too?",
    answer:
      "We deliver professionally edited images by default. Raw files can be provided upon request, depending on the project scope and licensing terms.",
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
const ImageCreationServices = () => {
  return (
     <>
      <ServicesHeroSection
        backgroundImageUrl="https://images.prismic.io/cuub/f2464877-c4f5-462a-8d2a-93a976bc7d71_CREMORNE%20V04.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=1920"
        title="Image Creation Services"
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

export default ImageCreationServices