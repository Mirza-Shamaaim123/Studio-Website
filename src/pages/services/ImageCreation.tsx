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
      "An effective **image creation strategy** focuses on aligning visuals with brand identity, target audience, and platform requirements. It combines creativity, consistency, and purpose to enhance engagement, communication, and brand recognition.",
  },
  {
    title: "Positioning",
    description:
      "**Image creation positioning** defines how visual content distinguishes a brand in the market. It emphasizes style, tone, and purpose to ensure consistency, attract the right audience, and strengthen brand perception.",
  },
  {
    title: "Creative",
    description:
      "**Image creation creativity** involves blending originality, design principles, and brand voice to produce visually compelling content. It captures attention, evokes emotion, and transforms ideas into impactful, memorable visual experiences.",
  },
]


const projectImages = [
  "https://images.prismic.io/cuub/Z0R6yq8jQArT1RfO_2.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z0R6zq8jQArT1RfP_3.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z03cqZbqstJ979Up_410TOORAKRDV07GFLIVING&DININGFINALEDIT.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=1867",
];

const crouselContent = {
  mainHeading: "Creative & Eye-Catching:",
  steps: [
    {
      number: "01",
      title: "AI-Generated Image Creation",
      description:
        "**AI-Generated Image Creation** uses artificial intelligence to craft unique, high-quality visuals tailored for branding, marketing, design, and storytelling.",
    },
    {
      number: "02",
      title: "Product Photography",
      description:
        "**Product Photography** captures high-quality images of items for e-commerce, catalogs, and ads, showcasing features, details, and visual appeal professionally.",
    },
    {
      number: "03",
      title: "Provide feedback",
      description:
        "Review our initial concepts and provide feedback to ensure we're aligned with your vision.",
    },
    {
      number: "04",
      title: "Social Media Graphics",
      description:
        "Get your high-quality 3D visualizations ready for your marketing and presentation needs.",
    },
  ],
};

const crouselImages = [
  "/images/Servicesimages/01 ImageCreation.avif", // Building image for step 1
  "/images/Servicesimages/02 ImageCreation.avif", // Different building for step 2
  "/images/Servicesimages/03 ImageCreation.jpg", // Interior visualization for step 3
  "/images/Servicesimages/04 ImageCreation.avif", // Final delivery visualization for step 4
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