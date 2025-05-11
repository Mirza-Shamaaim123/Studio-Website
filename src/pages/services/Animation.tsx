import React from "react";
import ServicesHeroSection from "./_components/ServicesHeroSection";
import ServiceThreeCards from "./_components/ServiceThreeCards";
import ServicesProject from "./_components/ServicesProjects";
import ServicesScrollSection from "./_components/ServicesCrouselSection";
const cardData = [
  {
    title: "Strategy",
    description:
      "To ensure a strong basis for achieving success, our initial approach in each project involves recognizing the business goals and obstacles. Through collaboration with our partner, we will explore both the evident and obscure elements to craft efficient strategies.",
  },
  {
    title: "Positioning",
    description:
      "Building upon the insights obtained during the initial phase, we enter the ideation stage. Drawing on the collective expertise of our team, we polish and define the project's stance and vision, culminating in the development of a visually representative solution.",
  },
  {
    title: "Creative",
    description:
      "During this phase, we will utilize the analysis and assigned tasks to craft a visual language that deeply engages the audience with the project's meanings and ideas. This creative approach harnesses the project's potential to deliver a compelling and immersive experience.",
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

const AnimationServices = () => {
  return (
    <>
      <ServicesHeroSection
        backgroundImageUrl="https://images.prismic.io/cuub/f2464877-c4f5-462a-8d2a-93a976bc7d71_CREMORNE%20V04.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=1920"
        title="Animations"
      />
      <ServiceThreeCards cards={cardData} />
      <ServicesProject projectImages={projectImages} />
      <ServicesScrollSection content={crouselContent} images={crouselImages} />
      
    </>
  );
};

export default AnimationServices;
