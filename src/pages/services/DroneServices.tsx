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
      "Our drone services strategy focuses on delivering high-precision aerial data using advanced technology, optimizing workflows, reducing operational costs, and enhancing decision-making across industries like construction, agriculture, and real estate.",
  },
  {
    title: "Positioning",
    description:
      "Drone services are positioned as innovative, cost-effective solutions that provide accurate aerial data, enhance project efficiency, and offer a competitive edge in industries like construction, agriculture, inspection, and environmental monitoring.",
  },
  {
    title: "Creative",
    description:
      "Drone services creatively capture unique aerial perspectives, blending technology and artistry to deliver stunning visuals, dynamic storytelling, and innovative data solutions for marketing, inspections, events, and industrial applications.",
  },
];

const projectImages = [
  "https://images.prismic.io/cuub/Z0R6yq8jQArT1RfO_2.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z0R6zq8jQArT1RfP_3.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=920",
  "https://images.prismic.io/cuub/Z03cqZbqstJ979Up_410TOORAKRDV07GFLIVING&DININGFINALEDIT.jpg?ixlib=gatsbyFP&auto=format%2Ccompress&fit=max&q=75&w=1867",
];

const crouselContent = {
  mainHeading: "Unlock New Perspectives with Drones",
  steps: [
    {
      number: "01",
      title: "Aerial Photography & Videography",
      description:
        "Aerial photography and videography capture stunning, high-angle visuals using drones, ideal for real estate, events, marketing, and cinematic storytelling.",
    },
    {
      number: "02",
      title: "Land Surveying & Mapping",
      description:
        "Aerial land surveying and mapping provide accurate, high-resolution data using drones, enhancing planning, construction, agriculture, and environmental monitoring efficiency.",
    },
    {
      number: "03",
      title: "Event Coverage",
      description:
        "Event coverage with drones captures dynamic aerial views, offering unique perspectives for weddings, concerts, sports, and festivals with cinematic quality and real-time highlights.",
    }
  ],
};

const crouselImages = [
  "/images/Servicesimages/01 drone.avif", // Building image for step 1
  "/images/Servicesimages/02 drone.avif", // Different building for step 2
  "/images/Servicesimages/03 drone.avif", // Interior visualization for step 3
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2835&auto=format&fit=crop", // Final delivery visualization for step 4
];

const faqData = [
    {
      question: "What types of drone services do you offer?",
      answer:
        "We offer aerial photography, videography, mapping, surveying, inspection, and monitoring services for industries like construction, agriculture, real estate, and events.",
    },
    {
      question: "Are your drone pilots certified?",
      answer:
        "Yes, all our drone operators are licensed and follow national aviation regulations to ensure legal, safe, and professional flight operations.",
    },
    {
      question: "What equipment do you use?",
      answer:
        "We use professional-grade drones equipped with high-resolution cameras, thermal sensors, and LiDAR technology for precise data collection and imagery.",
    },
    {
      question: "Is drone service safe and legal in my area?",
      answer:
        "We strictly comply with local aviation authorities and obtain any necessary flight permissions before conducting operations to ensure full legal compliance.",
    },
    {
      question: "Can drone services be customized for my project?",
      answer:
        "Absolutely. We tailor flight paths, camera angles, and data formats to match your specific project requirements.",
    },
    {
      question: "How accurate is drone surveying and mapping?",
      answer:
        "Our drones deliver high-precision data with centimeter-level accuracy, suitable for engineering, land development, and agricultural applications.",
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
const DroneServices = () => {
  return (
    <>
      <ServicesHeroSection
        backgroundImageUrl="https://images.prismic.io/cuub/f2464877-c4f5-462a-8d2a-93a976bc7d71_CREMORNE%20V04.jpg?ixlib=gatsbyFP&auto=compress%2Cformat&fit=max&q=75&w=1920"
        title="Drone Services"
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

export default DroneServices